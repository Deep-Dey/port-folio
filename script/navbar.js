function toggle(){
    if(document.querySelector('ul').style.display === "none"){
        document.querySelector('ul').style.display = "flex";
    }
    else{
        document.querySelector('ul').style.display = "none";
    }
    
};

window.onload = function(){
    document.querySelector('ul').style.display = "none";
}