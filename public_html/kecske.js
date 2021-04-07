window.addEventListener("load", init);
function ID(nev) {
    return document.getElementById(nev);

}
function $(nev) {
    return document.querySelectorAll(nev);
}
function init(){
    $("footer p")[0].innerHTML="Balogh Bíborka, Kiss Niki, Bartucz Petra";
}


