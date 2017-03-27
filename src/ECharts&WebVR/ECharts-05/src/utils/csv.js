exports.parse = function(csvString, options){

    let opt = {
        skip: 0,
        reverse: false,
        select: false,
        selectIndex: [],
        category: false,
        categoryIndex: 0
    };

    if(options && typeof options == 'object')
        opt = Object.assign({}, opt, options);

    if(opt.category){


        let data = {};
        
        let lines = csvString.split('\r\n');

        if(opt.select){

            for(let i = opt.skip; i < lines.length; i++){

                if(lines[i]){

                    let arr = lines[i].split(',');

                    let t = [];
                    for(let j = 0; j < opt.selectIndex.length; j++)
                        t.push(arr[opt.selectIndex[j]]);

                    if(!data[arr[opt.categoryIndex]])
                        data[arr[opt.categoryIndex]] = []; 

                    data[arr[opt.categoryIndex]].push(t);
                }
            }

        }else{

            for(let i = opt.skip; i < lines.lenght; i++)

                if(lines[i]){

                    let arr = lines[i].split(',');
                    
                    if(!data[arr[opt.categoryIndex]])
                        data[arr[opt.categoryIndex]] = []; 

                    data[arr[opt.categoryIndex]].push(arr);

                }
                
        }

        if(opt.reverse)
            for(let key in data)
                data[key] = data[key].reverse();
    
        return data;

    }else{

        let data = [];
        
        let lines = csvString.split('\r\n');

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
                if(lines[i]){

                    data.push(lines[i].split(','));

                }
        }
    
        return opt.reverse ? data.reverse() : data;

    }

}

exports.getCategory = function(csvString, categoryIndex){

    let categories = [];

    let lines = csvString.split('\r\n');

    for(let i = 0; i < lines.length; i++){

        let t = (lines[i].split(','))[categoryIndex];

        if(categories.indexOf(t) == -1){
            categories.push(t);                
        }

    }

    return categories;

}