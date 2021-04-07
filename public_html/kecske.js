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
    }
   $("footer p")[0].innerHTML="Balogh Bíborka, Kiss Niki, Bartucz Petra";
}
function feladat3(){
     kepTomb.push(this.src);
     console.log(kepTomb);
     //this.style.display = "none";
     $("article div").innerHTML += $("#bal img");
     this.style.order = "-10";
     
 
     
     
    
}

