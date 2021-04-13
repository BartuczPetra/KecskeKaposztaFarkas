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
        $("#bal img")[i].addEventListener("click", feladat3);
        $("#bal img")[i].addEventListener("mouseover", feladat5);
        $("#bal img")[i].addEventListener("mouseout", feladat6);
    }
   $("footer p")[0].innerHTML="Balogh Bíborka, Kiss Niki, Bartucz Petra";
}
function feladat3(){
     kepTomb.push(this.src);
     console.log(kepTomb);
     this.style.display = "none";
    ID("csonak").innerHTML +='<img src="'+this.src+'" alt="utas" style="position: relative; top:200px; right: 0; width: 50px; height:50px; z-index: 10;">';
}

function feladat5(){
    this.classList.add("kiemel");
}
function feladat6(){
    this.classList.remove("kiemel");
}

function feladat8(){
    if ("#bal p:first-child" === "#bal p:nth-child(2)"){
        alert("Nem jó! Megesziii!");
    }else if ("#bal p:first-child" === "#bal p:nth-child(3)"){
        alert("Nem jó! Megesziii!");
    }
}
