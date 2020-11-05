var texts = ['Write Code...', 'Make Apps...', 'Build Stuffs...'];

let count = 0;
let index = 0;
let current_text = '';
let letter = '';

(function type(){

    if(count === texts.length){
        count = 0;
    }
    current_text = texts[count];
    letter = current_text.slice(0, ++index);
    document.getElementById('animate').innerText = letter;

    if(index === current_text.length){
        count++;
        index = 0;
        setTimeout(type, 1500);
    }
    else{
        setTimeout(type, 100);
    }
}());