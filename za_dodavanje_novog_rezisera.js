if(
    localStorage.getItem("ulogovani_tip")!=" " 
    && localStorage.getItem("ulogovani_tip")!=null 
    && localStorage.getItem("ulogovani_tip")!=undefined
    && localStorage.getItem("ulogovani_tip")=="admin"
    ){
        function sacuvaj(){
                let prvoPolje=String(document.querySelectorAll("input")[0].value);// uzimamo vrednosti inputa
                let drugoPolje=String(document.querySelectorAll("input")[1].value);
                let spen0=document.querySelectorAll("span")[0]; //dobavljamo span
                let spen1=document.querySelectorAll("span")[1];
                let spen2=document.querySelectorAll("span")[2];
                let ime=prvoPolje+" "+drugoPolje; // sva imena rezisera su ime+" "+prezime, lakse zbog kontrole
                //proveravamo da li je neko polje prazno i ako jeste prekidamo dalje izvrsavanje koda
                if(prvoPolje==""){
                    spen0.innerHTML="Ovo polje ne sme da bude prazno";
                    return;
                }
                else if(drugoPolje==""){
                    spen1.innerHTML="Ovo polje ne sme da bude prazno";
                    return;
                }
            //prolazimo kroz duzinu naziva, da proverimo da li vec postoji reziser sa datim imenom
            for(let i=0;i<localStorage.getItem("duzina_rezisera");i++){
                if(localStorage.getItem("reziser"+i)==ime){
                    spen0.innerHTML="Vec postoji reziser sa ovim imenom i prezimenom";
                    return;
                }
            };
            // sacuvavamo podatke novog rezisera
            let duzina_rezisera=String(localStorage.getItem("duzina_rezisera"));
            localStorage.setItem("reziser"+duzina_rezisera,ime);
            //i povecavamo broj rezisera za 1
            localStorage.setItem("duzina_rezisera",String(Number(localStorage.getItem("duzina_rezisera"))+1));
            spen2.innerHTML="Sacuvano.";
        }
        let btn_sacuvaj=document.getElementById("sacuvaj_rezisera");
        btn_sacuvaj.onclick=sacuvaj;
}
else{
    let body=document.querySelector("body");
    body.innerHTML="<h1>Ova stranica je samo za prijavljene administratore</h1>";
    body.innerHTML+="<br><h3>Ako zelite da se prijavite mozete otici na stranicu <a href='Forma_za_prijavu.html' class='niste_ulogovani'>Forma za prijavu</a></h3>";
    body.style.color="red";
}