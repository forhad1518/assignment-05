// the function locate html file.
function changeHtml(id,fileName){
    document.getElementById(id).addEventListener('click',function(){
        window.location.href = fileName;
    })
}
// Call from blog to home 
changeHtml('home-btn','index.html')