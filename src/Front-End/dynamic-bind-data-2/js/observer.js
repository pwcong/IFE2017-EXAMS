function Observer(data) {
    this.data = data;
    this.walk(data);
    this.watch = {};
}

Observer.prototype.walk = function (obj) {
    let val;
    for (let key in obj) {
        
        if (obj.hasOwnProperty(key)) {
            val = obj[key];

            if (typeof val === 'object') {
                new Observer(val);
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
            return val;
        },
        set: function (newVal) {
            if (newVal === val) return;
            ctx.watch[key] && ctx.watch[key](newVal);
            val = newVal;
        }
    })
};

Observer.prototype.$watch = function(key,cb){
    this.watch[key] = cb;
}