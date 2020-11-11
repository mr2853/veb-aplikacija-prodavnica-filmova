if(
    localStorage.getItem("ulogovani_tip")!=" " 
    && localStorage.getItem("ulogovani_tip")!=null 
    && localStorage.getItem("ulogovani_tip")!=undefined
    && localStorage.getItem("ulogovani_tip")=="admin"
    ){
        function registracija_administratora(){
            let prvoPolje=document.querySelectorAll("input")[0].value;// dobavljamo vrednosti
            let drugoPolje=document.querySelectorAll("input")[1].value;
            let trecePolje=document.querySelectorAll("input")[2].value;
            let cetvrtoPolje=document.querySelectorAll("input")[3].value;
            let spen0=document.querySelectorAll("span")[0];
            let spen1=document.querySelectorAll("span")[1];
            let spen2=document.querySelectorAll("span")[2];
            let spen3=document.querySelectorAll("span")[3];
            let spen4=document.querySelectorAll("span")[4];
            if(prvoPolje==""){
                spen0.innerHTML="Ovo polje ne sme da bude prazno";
                return;
            }
            else if(drugoPolje==""){
                spen1.innerHTML="Ovo polje ne sme da bude prazno";
                return;
            }
            else if(trecePolje==""){
                spen2.innerHTML="Ovo polje ne sme da bude prazno";
                return;
            }
            else if(cetvrtoPolje==""){
                spen3.innerHTML="Ovo polje ne sme da bude prazno";
                return;
            }
            //if(localStorage.getItem("trenutni_korisnik")=="admin"){ //proveravamo da li je trenutni korisnik admin
                //ako jeste, proveravamo da li vec postoji admin sa unetim podacima
                for(let i=0;i<Number(localStorage.getItem("a_length"));i++){
                    if(trecePolje==String(localStorage.getItem("a_korisnicko_ime"+i))){
                        spen2.innerHTML="Vec postoji korisnik sa ovim korisnickim imenom";
                        spen.style.color="red";
                        return;
                    };
                };
                // proveravamo i za korisnike cisto da se ne potrefi dva ista korisnicka imena
                for(let i=0;i<localStorage.getItem("k_length");i++){    
                    if(trecePolje==String(localStorage.getItem("k_korisnicko_ime"+i))){ //ovde uporedjujemo input vrednosti sa vrednostima iz korisnici
                        spen2.innerHTML="Korisnik vec postoji";
                        return;
                    }
                }
                // ako je provera dobro prosla, dalje upisujemo novog admina u lS
                localStorage.setItem("a_ime"+Number(localStorage.getItem("a_length")),prvoPolje);
                localStorage.setItem("a_prezime"+Number(localStorage.getItem("a_length")),drugoPolje);
                localStorage.setItem("a_korisnicko_ime"+Number(localStorage.getItem("a_length")),trecePolje);
                localStorage.setItem("a_lozinka"+Number(localStorage.getItem("a_length")),cetvrtoPolje);
                localStorage.setItem("a_tip"+Number(localStorage.getItem("a_length")),"admin");
                localStorage.setItem("a_length",String(Number(Number(localStorage.getItem("a_length"))+1))); //i povecavamo broj admina za 1 
                spen4.innerHTML="Sacuvano."
                ////console.log("registrovan");
            //}
            //else{
                //spen.innerHTML="Samo administratori smeju da dodaju novog administratora!";
                //spen.style.color="red";
                //return;
            //}
        }
}
else{
    let body=document.querySelector("body");
    body.innerHTML="<h1>Ova stranica je samo za prijavljene administratore</h1>";
    body.innerHTML+="<br><h3>Ako zelite da se prijavite mozete otici na stranicu <a href='Forma_za_prijavu.html' class='niste_ulogovani'>Forma za prijavu</a></h3>";
    body.style.color="red";
}