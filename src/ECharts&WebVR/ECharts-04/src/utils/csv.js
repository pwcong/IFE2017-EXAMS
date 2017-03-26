module.exports = function(string, options){

    let opt = {
        skip: 0,
        reverse: false,
        select: false,
        selectIndex: []
    };

    if(options && typeof options == 'object')
        opt = Object.assign({}, opt, options);

    let data = [];
    
    let lines = string.split('\r\n');

    if(opt.select){

        for(let i = opt.skip; i < lines.length; i++){

            if(lines[i]){

                let arr = lines[i].split(',');
                let t = [];
                for(let j = 0; j < opt.selectIndex.length; j++)
                    t.push(arr[opt.selectIndex[j]]);

                data.push(t);
            }
        }

    }else{
        for(let i = opt.skip; i < lines.lenght; i++)
            if(lines[i])
                data.push(lines[i].split(','));
    }
    
    return opt.reverse ? data.reverse() : data;

}