window.addEventListener("load", init);
function ID(nev) {
    return document.getElementById(nev);

}
function $(nev) {
    return document.querySelectorAll(nev);
}
var kepTomb = [];
function init(){
    for (var i = 0; i < $("#bal img").length; i++) {
        $("#bal img")[i].addEventListener("click", feladat1);
    }
   $("footer p")[0].innerHTML="Balogh Bíborka, Kiss Niki, Bartucz Petra";
}
function feladat1(){
     kepTomb.push(this.src);
     console.log(kepTomb);
}

