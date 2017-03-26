function Observer(data, pre = null) {
    this.data = data;
    this.walk(data);
    this.watch = {};
    this.pre = pre;
    this.event = function(){
        console.log('你操作了', data);
        pre && pre.event && pre.event();
    }
}

Observer.prototype.walk = function (obj) {
    let ctx = this;
    let val;
    for (let key in obj) {
        
        if (obj.hasOwnProperty(key)) {
            val = obj[key];

            if (typeof val === 'object') {
                new Observer(val, ctx);
            }

            this.convert(key, val);
        }
    }
};

Observer.prototype.convert = function (key, val) {

    let ctx = this;

    Object.defineProperty(this.data, key, {
        enumerable: true,
        configurable: true,
        get: function () {
            console.log('你访问了', key);
            return val;
        },
        set: function (newVal) {
            if (newVal === val) return;

            console.log('你设置了', key, '，新的值为', newVal);

            ctx.event();
            
            ctx.watch[key] && ctx.watch[key](newVal);

            val = newVal;

            // 如果判断为对象，再次观察
            if (typeof val === 'object') {
                new Observer(val, ctx);
            }

        }
    })
};

Observer.prototype.$watch = function(key,cb){
    this.watch[key] = cb;
}
