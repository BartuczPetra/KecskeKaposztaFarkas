window.addEventListener("load", init);
function ID(nev) {
    return document.getElementById(nev);

}
function $(nev) {
    return document.querySelectorAll(nev);
}
var kepTomb = [];

function init() {
    for (var i = 0; i < $("#bal img").length; i++) {
        $("#bal img")[i].addEventListener("click", feladat3);
        $("#bal img")[i].addEventListener("mouseover", feladat5);
        $("#bal img")[i].addEventListener("mouseout", feladat6);
    }
    $("footer p")[0].innerHTML = "Balogh Bíborka, Kiss Niki, Bartucz Petra";
    //feladat8();
}

function feladat3() {
    kepTomb.push(this.src);
    console.log(kepTomb);
    //gitgitthis.style.display = "none";
    $("article div").innerHTML += $("#bal img");
    this.style.order = "-10";
    console.log(kepTomb);
    this.style.display = "none";
    ID("csonak").innerHTML += '<img src="' + this.src + '" alt="utas" style="position: relative; top:200px; right: 0; width: 50px; height:50px; z-index: 10;">';
    feladat8();
}

function feladat5() {
    this.classList.add("kiemel");
}
function feladat6() {
    this.classList.remove("kiemel");
}

function feladat8() {
    if (kepTomb.includes("http://localhost:8383/Kecske_Kaposzta_Farkas/kepek/kecske2.png") && kepTomb.includes("http://localhost:8383/Kecske_Kaposzta_Farkas/kepek/kaposzta.png")){
        alert("Nem jó, mert megeszi!");
    }
}
