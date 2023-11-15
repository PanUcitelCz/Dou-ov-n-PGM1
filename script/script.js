const obrazek_1 = "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Teemo_0.jpg";
const obrazek_2 = "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_0.jpg";
const obrazek_3 = "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Nasus_0.jpg";

function obrazek1(){
    let img = document.getElementById("Img");
    let vypis = document.getElementById("vypis");


    if(img.src == obrazek_1){
        alert("Teemo už tam je");
    }
    else{
        img.src=obrazek_1;
        vypis.innerHTML += "Teemo" + "<br>";
    }
}

function obrazek2(){
    let img = document.getElementById("Img");
    let vypis = document.getElementById("vypis");

    if(img.src == obrazek_2){
        alert("Ahri už tam je");
    }
    else{
        img.src=obrazek_2;
        vypis.innerHTML+="Ahri" + "<br>";
    }
}

function obrazek3(){
    let img = document.getElementById("Img");
    let vypis = document.getElementById("vypis");

    if(img.src == obrazek_3){
        alert("Nasus už tam je");
    }
    else{
        img.src=obrazek_3;
        vypis.innerHTML+="Nasus" + "<br>";
    }
}

function Change(){
    let input = document.getElementById("vstup");

    if(input.value == "Teemo"){
        obrazek1();
    }
    else if(input.value == "Ahri"){
        obrazek2();
    }
    else if(input.value == "Nasus"){
        obrazek3();
    }
    else{
        alert("Nenašel jsem takového championa")
    }
}

let control = 1;

function vyber(){
    let seznam = document.getElementById("seznam");

    if(control == 1){
        seznam.innerHTML="";
        control = 0;
    }
    else{
        seznam.innerHTML="Teemo" + "<br>" + "Ahri" + "<br>" + "Nasus";
        control = 1;
    }
}

function del(){
    let vypis = document.getElementById("vypis");

    if(vypis.innerHTML= ""){
        alert("Už je to smazaný");
    }
    else{
        vypis.innerHTML="";
    }
}

function Random_img(){
    let img = document.getElementById("Img");
    let x = true;

    let pole = [obrazek_1, obrazek_2, obrazek_3];

    while(x==true){
        let nah_cislo = Math.floor((Math.random() * 3));
        
        if(pole[nah_cislo] == img.src){
            x = true;
        }
        else if(pole[nah_cislo] == img.src){
            x = true;
        }
        else if(pole[nah_cislo] == img.src){
            x = true;
        }
        else{
            img.src=pole[nah_cislo];
            x = false;
        }
    }
}