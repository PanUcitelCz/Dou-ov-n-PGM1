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

// vytvořím si proměnou, do které se bude ukládat hodnota 1
// Pokud bych jí vytvořil ve funkci, funkce se vytvoří a následně se vymaže, proto jí volám mimo
// Existují i mnohem efektivnější řešení, ovšem tahle je nejjednoduší
let control = 1; 

// Funkce, která skrývá a následně i ukazuje seznam, co může uživatel napsat
function vyber(){
    let seznam = document.getElementById("seznam"); // Deklarujeme odkaz na seznam podle ID

    // Provádíme kontrolu, zda je seznam viditelný nebo ne
    if(control == 1){
        //Vypíše se do seznamu "" tím pádem uživatel tam nevidí žádný text
        seznam.innerHTML="";
        control = 0; // Nastavíme control na 0, aby následně platil else.
    }
    else{
        //Pokud je control něco jiného než roven 0, vypíše se seznam
        seznam.innerHTML="Teemo" + "<br>" + "Ahri" + "<br>" + "Nasus"; // Všiměte si, jak mohu řetězit text, mohu dát i tag br, text pak bude pod sebou
        control = 1; // Nastavím control zase zpět na 1, tím se mi střádají tyto podmínky
    }
}

// Funkce vymaže obsah v historii
function del(){
    let vypis = document.getElementById("vypis");

    // Přidáváme zde kontrolu, zda náhodou není seznam historie změn prázdná
    if(vypis.innerHTML= ""){
        alert("Už je to smazaný");
    }
    // Pokud prázdná není, změníme obsah ve vypis na prázdné uvozovky
    else{
        vypis.innerHTML="";
    }
}

// Random generování obrázků
function Random_img(){
    let img = document.getElementById("Img");
    let x = true; // Zde si deklaruji x jako boolien hodnotu, šlo by to efektivně, ale z edukativních důvodu můžete vidět, co se v cyklu děje

    let pole = [obrazek_1, obrazek_2, obrazek_3]; // Pole vytváříme pomocí těchto závorek, pozor, jednotlivé proměné oddělujeme ","
    // Zde jsem do pole hodil jinou proměnou, kterou jsem si vytvořil na začátku, mohu sem ale normálně deklarovat i string neboli "Text" či jiné hodnoty jako jsou třeba čísla

    // Cyklus s podmínkou, cyklus provádí příkáz opakovaně do té doby, dokud platí podmínka
    // Pozor, pokud podmínce nedáte možnost se ukončit, může dojít k zacyklení a tím i pádu vaší aplikace
    // Zde jsem zase edukativně použil x pro lepší představu co se děje v podmínce
    while(x==true){
        let nah_cislo = Math.floor((Math.random() * 3)); // Random generování čísla, pokud místo 3 nastavím třeba číslo 5. budou se generovat čísla od 0 do 4
        // Náhodne číslo si dávám do deklarace až v cyklu, protože kdyby náhodou vygeneroval číslo, které bude stejné jako je v img, chceme aby číslo vygeneroval v novém cyklu znova
        
        // Kontrolujeme zda náhodou není číslo shodné s img.src nahodne číslo se vypíše do pozice v poli
        // Všiměte si jak pole volám, používáme název_pole[pořadí_pole], pole počítá od 0, takže délka pole je 3, ale hodnoty jsou na pozici 0, 1, 2
        if(pole[nah_cislo] == img.src){
            x = true; // Pokud podmínka platí, znamená to, že je schodná obrázek s tím, co je v img.src, proto se cyklus zopakuje znovu
        }
        // Pokud podmínka neplatí, změníme obrázek
        else{
            img.src=pole[nah_cislo]; // do img.src se vypíše hodnota z pole na pozici podle náhodného čísla
            x = false; // Tímhle ukončím cyklus.
        }
    }
}
// Funkce jdou samozřejmě dělat efektivněji, ale snažil jsem se lépe poukázat na to, jak to funguje


