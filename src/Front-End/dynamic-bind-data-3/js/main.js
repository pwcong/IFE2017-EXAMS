function init(){

    let consoleInput = document.getElementById('input');
    let consolePanel = document.getElementById('panel');
    let consoleButton = document.getElementById('button');

    var _console = console;

    console = {
        log: function() {
            
            let str = '';

            for(let i=0;i<arguments.length;i++)
                str+=arguments[i];

            let p = document.createElement('p');
            p.innerHTML = str;
            consolePanel.appendChild(p);

            _console.log.apply(_console, [].slice.call(arguments)); // call real console
        }
    };

    consoleInput.onkeypress = function(e){
        if(e.keyCode === 13){
            eval(e.target.value);
            e.target.value = '';
            consolePanel.scrollTop = consolePanel.scrollHeight;
        }
    }

    consoleButton.onclick = function(e){
        eval(consoleInput.value);
        consoleInput.value = '';
        consolePanel.scrollTop = consolePanel.scrollHeight;
    }

}


init();

let app = new Observer({
    ife:{       
        name: {
            firstName: 'firstName',
            lastName: 'lastName'
        }
        
    }
});
