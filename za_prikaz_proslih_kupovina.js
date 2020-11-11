if(
    localStorage.getItem("ulogovani_tip")!=" " 
    && localStorage.getItem("ulogovani_tip")!=null 
    && localStorage.getItem("ulogovani_tip")!=undefined
    && localStorage.getItem("ulogovani_tip")=="user"
    ){
        let obj_length=Number(localStorage.getItem("obj_length"));
        let ulogovani_korisnik=String(localStorage.getItem("ulogovani_korisnik"));
        let objekat=JSON.parse(localStorage.getItem("objekat_racuna"));
        
        //if(obj_length!=0){   
        let div=document.querySelector("div");
        let brojac=0;
        for(let i=0;i<obj_length;i++){
            //console.log(objekat[ulogovani_korisnik+i])
            if(objekat[ulogovani_korisnik+i]!=null && objekat[ulogovani_korisnik+i]!=undefined){
                brojac+=1;
                let obj=objekat[ulogovani_korisnik+i];
                let porucen_film=String(obj["porucen_film"]);
                porucen_film=porucen_film.split("(~$2853#)");
                porucen_film.shift();

                let kolicina=String(obj["porucena_kolicina"]);
                kolicina=kolicina.split("(~$2853#)");
                kolicina.shift();

                let cena_po_filmu=String(obj["cena_po_filmu"]);
                cena_po_filmu=cena_po_filmu.split("(~$2853#)");
                cena_po_filmu.shift();

                let ukupna_za_film=String(obj["ukupna_za_film"]);
                ukupna_za_film=ukupna_za_film.split("(~$2853#)");
                ukupna_za_film.shift();

                //console.log(porucen_film);
                //console.log(kolicina);
                //console.log(cena_po_filmu);
                //console.log(ukupna_za_film);
                //console.log("proslo");
                div.innerHTML+="<div><label>Korisnik: </label><span class='span_detalji_filma'>"+String(obj["ime"])+"</span>";
                for(let j=0;j<porucen_film.length;j++){
                    div.innerHTML+="<br><label>Poruceni filmovi: </label><span class='span_detalji_filma'>"+porucen_film[j]+"</span><br>"+
                    "<label>Kolicina: </label><span class='span_detalji_filma'>"+kolicina[j]+"</span><br><label>Cena po filmu: </label><span class='span_detalji_filma'>"+cena_po_filmu[j]+"<b> din.</b></span><br><label>Ukupno za film: <label><span class='span_detalji_filma'>"+ukupna_za_film[j]+
                    "<b> din.</b></span><br>";
                }
                div.innerHTML+="<br><br><label>Cena za sve: </label><span class='span_detalji_filma'>"+String(obj["cena_za_sve"])+"<b> din.</b></span></div><hr>";
                //table.innerHTML+="<hr>";
            }
        }
        if(brojac==0){
            console.log(obj_length)
            let body=document.querySelector("body");
            body.innerHTML="<div width='700' align='center'><h1 class='h1_p_kup'>Za sada nemate porucene porudzbine</h1><a href='Pocetna_strana.html'><button type='button' id='zatvori'>Pocetna strana</button></a></div>";
            //class='poravnanjeButtona'
        }
        div.innerHTML+="<div class='poravnanjeButtona_prosle_kupovine'><a href='Pocetna_strana.html'><button type='button' id='zatvori'>Pocetna strana</button></a></div>";
    
        /*console.log(objekat);
        let niz_svih=objekat.split("(~$)");
        let niz=[];
        console.log(niz_svih);
        niz_svih.shift(); // u prvom bude tekst [object object] pa samo to da izbrisem
        
        console.log(niz_svih);
        for(let i=0;i<obj_length;i++){
            niz[i]=niz_svih.splice(0,6)
            console.log(niz[i]);
        }
        console.log(niz[0][0])
        console.log(niz[1][0])
        console.log(ulogovani_korisnik)*/

        /*for(let i=0;i<obj_length;i++){
            if(String(niz[i][0])==ulogovani_korisnik){
                let table=document.querySelector("table");
                console.log("proslo");
                table.innerHTML+="<tr><td>"+String(niz[i][0])+"</td><td>"+String(niz[i][1])+"</td><td>"+String(niz[i][2])+"</td><td>"+String(niz[i][3])+"</td><td>"+String(niz[i][4])+"</td><td>"+String(niz[i][5])+"</td></tr>"
            }
        }*/
}
else{
    let body=document.querySelector("body");
    body.innerHTML="<h1>Ova stranica je samo za prijavljene kupce</h1>";
    body.innerHTML+="<br><h3>Ako zelite da se prijavite mozete otici na stranicu <a href='Forma_za_prijavu.html' class='niste_ulogovani'>Forma za prijavu</a></h3>";
    body.style.color="red";
}