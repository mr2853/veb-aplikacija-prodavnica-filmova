if(
    localStorage.getItem("ulogovani_tip")!=" " 
    && localStorage.getItem("ulogovani_tip")!=null 
    && localStorage.getItem("ulogovani_tip")!=undefined
    ){
        // proveravamo da neko nije samo otvorio stranicu,
        // proveravamo da li je ulogovani_korisnik prazan string
        if(localStorage.getItem("ulogovani_korisnik")!=""){
            let ime=document.querySelectorAll("input")[0]; // dobavljamo vrednosti
            let prezime=document.querySelectorAll("input")[1];
            let korisnicko_ime=document.querySelectorAll("input")[2]; //korisnicko ime
            let lozinka=document.querySelectorAll("input")[3];
            let korisnik=localStorage.getItem("ulogovani_korisnik");
            let brojac=0;
            let tip=localStorage.getItem("ulogovani_tip");
            let indeks=0;
            if(tip=="admin"){ // ako je admin, onda ih pretrazujemo kod admina
                for(let i=0;i<localStorage.getItem("a_length");i++){
                    if(korisnik==localStorage.getItem("a_korisnicko_ime"+i)){
                        ////console.log("Nasli smo admina :D");
                        indeks=i;
                        brojac+=1;
                        ime.value=localStorage.getItem("a_ime"+indeks);
                        prezime.value=localStorage.getItem("a_prezime"+indeks);
                        korisnicko_ime.value=localStorage.getItem("a_korisnicko_ime"+indeks);
                        korisnicko_ime.disabled=true;
                        lozinka.value=localStorage.getItem("a_lozinka"+indeks);
                    }
                }
            }
            else if(tip=="user"){// ako je user, onda ih pretrazujemo kod usera
                for(let i=0;i<localStorage.getItem("k_length");i++){
                    if(korisnik==localStorage.getItem("k_korisnicko_ime"+i)){
                        //console.log("Nasli smo usera :D");
                        indeks=i;
                        brojac+=1;
                        ime.value=localStorage.getItem("k_ime"+indeks);
                        prezime.value=localStorage.getItem("k_prezime"+indeks);
                        korisnicko_ime.value=localStorage.getItem("k_korisnicko_ime"+indeks);
                        korisnicko_ime.disabled=true;
                        lozinka.value=localStorage.getItem("k_lozinka"+indeks);
                    }
                }
            }
            else{
                //console.log("Nismo ga nasli :/");
            }
        }
}
else{
    let body=document.querySelector("body");
    body.innerHTML="<h1>Ova stranica je samo za prijavljene korisnike</h1>";
    body.innerHTML+="<br><h3>Ako zelite da se prijavite mozete otici na stranicu <a href='Forma_za_prijavu.html' class='niste_ulogovani'>Forma za prijavu</a></h3>";
    body.style.color="red";
}