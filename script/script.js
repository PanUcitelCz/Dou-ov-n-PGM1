//Můžeme si udělat deklaraci pro odkazy, které můžeme volat v ostatních funkcích
//Const - Constanta, většínou konstatní hodnota, kterou bychom neměli přepisovat
const obrazek_1 = "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Teemo_0.jpg";
const obrazek_2 = "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_0.jpg";
const obrazek_3 = "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Nasus_0.jpg";


//Založení funkce - function NázevFunkce (parametry), pokud nemáme parametry necháme prázdny ()
function obrazek1(){
    //Dáme si proměné pro img a vypis, nepíšeme zatím žýdny innerHTMl ani src
    //Důvodem je, že můžete libovolně příkazy používat s proměnou
    //Let - Lokální proměná, můžeme libovolně měnit
    let img = document.getElementById("Img");
    let vypis = document.getElementById("vypis");

    //Porovnáváme zdroj v img se zdrojem v const
    //Porovnáváme string
    //Vídím img.src, tím pádem vidím, co porovnávám v podmínce
    if(img.src == obrazek_1){
        alert("Teemo už tam je"); //Alert jako vyskakovací okénko
    }
    //Else používáme jako podmínku, která nám říká co se stane v ostatních případech, když není splněná žádna z předešlích podmínek
    else{
        //Zde zase vidím, že použiji deklarovanou img a k tomu přípkaz .src, měním zde zdroj
        //Pro lepší představu deklaraovaná img.src je stejný jako document,getElementById("Img").src
        //Je to lepší a přehlednější zápis
        img.src=obrazek_1;
        //Vypisujeme do HTML content
        //Pokud máme += přídáváme nový content
        //Pokud máme jen = Přepíše content
        // "<br>" - Přidá nepárový tag, text se nám bude dávat pod sebe"
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
    //Stejný způsob deklarace jako u předešlích funckích
    let input = document.getElementById("vstup");

    //Porovnáváme hodnotu se stringem
    //input neumí innerHTML, prože se jedná o nepárový tag
    //input vidí hodnoty, které jsou v datovém typu string
    //prototo používáme .value
    //vidím, že porovnávám hodnutu, lépe se čte kód a je přehlednější
    if(input.value == "Teemo"){
        //Chci kontrolovat, zda náhodou není obrázek Teema v img
        //Místo toho, abych zde vnořoval další if, mohu použít funcki, kterou jsem už vytvořil
        //Předešla funkce umí přesně to co chceme, včetně toho změnit i obrázek
        //Musí být tato funkce nad touto funkcí, JavaScript čte ze zhora dolů
        //Pozor, musíte k funkci dát závorky a ukončit středníkem
        obrazek1();
    }
    //Chceme-li více podmínek, používáme else if "nebo jesli že" ta má také svojí podmínku
    else if(input.value == "Ahri"){
        obrazek2();
    }
    else if(input.value == "Nasus"){
        obrazek3();
    }
    //V jiném případě
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