//dropdown menu
var dropDownButton = document.querySelector('#dropDownButton')
var dropDownMenu = document.querySelector('#characters');

dropDownButton.addEventListener('click', dropDownLinkTo);

function dropDownLinkTo(){
    var character = dropDownMenu.options[dropDownMenu.selectedIndex].value;
    
    if(character === 'Spider-Man'){
        window.open('characters/spider-man.html');
    }else if(character === 'Hulk'){
        window.open('characters/Hulk.html');
    }else if(character === 'Captain America'){
        window.open('characters/Captain-America.html');
    }else if(character === 'Iron Man'){
        window.open('characters/Iron-Man.html');
    }else if(character === 'Thanos'){
        window.open('characters/Thanos.html');
    }else if(character === 'Wolverine'){
        window.open('characters/Wolverine.html');
    }else if(character === 'Magneto'){
        window.open('characters/Magneto.html');
    }else if(character === 'Daredevil'){
        window.open('characters/Daredeviln.html');
    }else if(character === 'Deadpool'){
        window.open('characters/Deadpool.html');
    }else if(character === 'Thor'){
        window.open('characters/Thor.html');
    }


}

//input text
var inputTextButtonEl = document.querySelector('#inputTextButton');
var inputTextEl = document.querySelector('#inputText');

inputTextButtonEl.addEventListener('click', checkInputName);
function checkInputName(){
    if(inputTextEl.value === 'spider-man' || inputTextEl.value === 'spiderman' || inputTextEl.value === 'spider man'){
        window.open('characters/spider-man.html');
    }
    else if(inputTextEl.value === 'hulk'){
        window.open('characters/Hulk.html');
    }else if(inputTextEl.value === 'captain-america' || inputTextEl.value === 'captain america' || inputTextEl.value === 'captainamerica'){
        window.open('characters/Captain-America.html');
    }else if(inputTextEl.value === 'iron-man' || inputTextEl.value === 'iron man' || inputTextEl.value === 'ironman'){
        window.open('characters/Iron-Man.html');
    }else if(inputTextEl.value === 'thanos'){
        window.open('characters/Thanos.html');
    }else if(inputTextEl.value === 'wolverine'){
        window.open('characters/Wolverine.html');
    }else if(inputTextEl.value === 'magneto'){
        window.open('characters/Magneto.html');
    }else if(inputTextEl.value === 'daredeviln'){
        window.open('characters/Daredeviln.html');
    }else if(inputTextEl.value === 'deadpool'){
        window.open('characters/Deadpool.html');
    }else if(inputTextEl.value === 'thor'){
        window.open('characters/Thor.html');
    }
    else{
        alert('Incorrect Input');
    }
}
 
