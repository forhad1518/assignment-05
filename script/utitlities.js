// the function locate html file.
document.getElementById('home-btn').addEventListener('click',function(){
    window.location.href = 'index.html'
})


// the function get from input value
function getValueInput(id){
    const idValue = document.getElementById(id).value;
    const numberValue = parseFloat(idValue);
    return numberValue;
}


// the function get inner text
function getInnerNumberValue(id){
    const idInnerText = document.getElementById(id).innerText;
    const numberInnerText = parseFloat(idInnerText);
    return numberInnerText;
}