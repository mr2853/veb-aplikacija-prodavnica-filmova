if(localStorage.getItem("ubaci_localStorage")==undefined){
    localStorage.clear();
    // postavlja default administratore i korisnike a pre toga izbrise ceo localStorage
    localStorage.setItem("a_ime0","drago");
    localStorage.setItem("a_prezime0","mazic");
    localStorage.setItem("a_korisnicko_ime0","drago");
    localStorage.setItem("a_lozinka0","admin");
    localStorage.setItem("a_tip0","admin");

    localStorage.setItem("k_ime0","gost");
    localStorage.setItem("k_prezime0","gost");
    localStorage.setItem("k_korisnicko_ime0","gost");
    localStorage.setItem("k_lozinka0","gost");
    localStorage.setItem("k_tip0","user");
    // ovde postavljamo duzinu amina i korisnika na 1
    localStorage.setItem("a_length",1);
    localStorage.setItem("k_length",1);
    localStorage.setItem("ulogovani_korisnik"," ");
    localStorage.setItem("ulogovani_tip"," ");
    localStorage.setItem("kup_popravljen_film_length",1);
    localStorage.setItem("kup_popravljen_film_indeks0",0);
    //console.log("localStorage obrisano, i postavljeni default admin i user. I ostale stvari postavljene na pocetak");
    //_____________________________________________________________

    let reziser={
        a_1:{"ime":"Olivier","prezime":"Nakache"},
        a_2:{"ime":"Branulio","prezime":"Mantovani"},
        a_3:{"ime":"Branulio","prezime":"Mantovani"},
        a_4:{"ime":"Mike","prezime":"Binder"},
        a_5:{"ime":"Alan","prezime":"Ball"},
        a_6:{"ime":"Grant","prezime":"Nieporte"},
        a_7:{"ime":"Jim","prezime":"Uhls"},
    };
    /*for(let i=0;i<id.length;i++){
        localStorage.setItem("id"+i,id[i]);
        localStorage.setItem("slike_filmova"+i,slike_filmova[i]);
        localStorage.setItem("nazivi_filmova"+i,nazivi_filmova[i]);
        localStorage.setItem("zanr"+i,zanr[i]);
        localStorage.setItem("godina_proizvodnje"+i,godina_proizvodnje[i]);
        localStorage.setItem("cena"+i,cena[i]);
        localStorage.setItem("broj_raspolozivih_primeraka"+i,broj_raspolozivih_primeraka[i]);
        localStorage.setItem("reziser"+i,reziser[i]);
    };*/
    
    //ovde definisemo default filmove
        localStorage.setItem("id0","0");
        localStorage.setItem("slike_filmova0","<img src='filmovi/slike/The intouchables.jpg' width='150' height='150'>");
        localStorage.setItem("nazivi_filmova0","The Intouchables");
        localStorage.setItem("zanr0","Comedy");
        localStorage.setItem("godina_proizvodnje0","2011");
        localStorage.setItem("cena0","700");
        localStorage.setItem("broj_raspolozivih_primeraka0","10");
        localStorage.setItem("reziser0",reziser.a_1.ime+" "+reziser.a_1.prezime);
    
        localStorage.setItem("id1","1");
        localStorage.setItem("slike_filmova1","<img src='filmovi/slike/Elite Squad.jpg' width='150' height='150'>");
        localStorage.setItem("nazivi_filmova1","Elite Squad");
        localStorage.setItem("zanr1","Action");
        localStorage.setItem("godina_proizvodnje1","2007");
        localStorage.setItem("cena1","1700");
        localStorage.setItem("broj_raspolozivih_primeraka1","10");
        localStorage.setItem("reziser1",reziser.a_2.ime+" "+reziser.a_2.prezime);
    
        localStorage.setItem("id2","2");
        localStorage.setItem("slike_filmova2","<img src='filmovi/slike/Elite Squad The Enemy Within.jpg' width='150' height='150'>");
        localStorage.setItem("nazivi_filmova2","Elite Squad: The Enemy Within");
        localStorage.setItem("zanr2","Action");
        localStorage.setItem("godina_proizvodnje2","2010");
        localStorage.setItem("cena2","1200");
        localStorage.setItem("broj_raspolozivih_primeraka2","10");
        localStorage.setItem("reziser2",reziser.a_3.ime+" "+reziser.a_3.prezime);
    
        localStorage.setItem("id3","3");
        localStorage.setItem("slike_filmova3","<img src='filmovi/slike/Reign Over Me.jpg' width='150' height='150'>");
        localStorage.setItem("nazivi_filmova3","Reign Over Me");
        localStorage.setItem("zanr3","Drama");
        localStorage.setItem("godina_proizvodnje3","2007");
        localStorage.setItem("cena3","600");
        localStorage.setItem("broj_raspolozivih_primeraka3","10");
        localStorage.setItem("reziser3",reziser.a_4.ime+" "+reziser.a_4.prezime);
    
        localStorage.setItem("id4","4");
        localStorage.setItem("slike_filmova4","<img src='filmovi/slike/American Beauty.jpg' width='150' height='150'>");
        localStorage.setItem("nazivi_filmova4","American Beauty");
        localStorage.setItem("zanr4","Drama");
        localStorage.setItem("godina_proizvodnje4","1999");
        localStorage.setItem("cena4","500");
        localStorage.setItem("broj_raspolozivih_primeraka4","10");
        localStorage.setItem("reziser4",reziser.a_5.ime+" "+reziser.a_5.prezime);
    
        localStorage.setItem("id5","5");
        localStorage.setItem("slike_filmova5","<img src='filmovi/slike/Seven pounds.jpg' width='150' height='150'>");
        localStorage.setItem("nazivi_filmova5","Seven Pounds");
        localStorage.setItem("zanr5","Drama");
        localStorage.setItem("godina_proizvodnje5","2008");
        localStorage.setItem("cena5","1000");
        localStorage.setItem("broj_raspolozivih_primeraka5","10");
        localStorage.setItem("reziser5",reziser.a_6.ime+" "+reziser.a_6.prezime);
    
        localStorage.setItem("id6","6");
        localStorage.setItem("slike_filmova6","<img src='filmovi/slike/Fight Club.jpg' width='150' height='150'>");
        localStorage.setItem("nazivi_filmova6","Fight Club1");
        localStorage.setItem("zanr6","Drama");
        localStorage.setItem("godina_proizvodnje6","1999");
        localStorage.setItem("cena6","400");
        localStorage.setItem("broj_raspolozivih_primeraka6","10");
        localStorage.setItem("reziser6",reziser.a_7.ime+" "+reziser.a_7.prezime);
    
        localStorage.setItem("id7","7");
        localStorage.setItem("slike_filmova7","<img src='filmovi/slike/Fight Club.jpg' width='150' height='150'>");
        localStorage.setItem("nazivi_filmova7","Fight Club2");
        localStorage.setItem("zanr7","Drama");
        localStorage.setItem("godina_proizvodnje7","1999");
        localStorage.setItem("cena7","400");
        localStorage.setItem("broj_raspolozivih_primeraka7","10");
        localStorage.setItem("reziser7",reziser.a_7.ime+" "+reziser.a_7.prezime);
    
        localStorage.setItem("id8","8");
        localStorage.setItem("slike_filmova8","<img src='filmovi/slike/Fight Club.jpg' width='150' height='150'>");
        localStorage.setItem("nazivi_filmova8","Fight Club3");
        localStorage.setItem("zanr8","Drama");
        localStorage.setItem("godina_proizvodnje8","1999");
        localStorage.setItem("cena8","400");
        localStorage.setItem("broj_raspolozivih_primeraka8","10");
        localStorage.setItem("reziser8",reziser.a_7.ime+" "+reziser.a_7.prezime);
    
        /*let duzina=0;
        for(let i=0;i<localStorage.length;i++){
            if(localStorage.getItem("id"+i)!=undefined){
                duzina+=1;
            }
        }*/
        let objekat={};
        localStorage.setItem("objekat_racuna",JSON.stringify(objekat))
        localStorage.setItem("duzina_rezisera",9); //stavljamo broj rezisera na 7
        localStorage.setItem("id_length",9); // stavljamo broj id-jeva na 7
        localStorage.setItem("obj_length",0);
        //console.log("Postavljeni default filmovi. I ostale stvari postavljene na pocetak.");
        localStorage.setItem("ubaci_localStorage",0)
}


localStorage.getItem("ulogovani_korisnik");
function proveri_korisnike(){
    //uzimamo vrednosti iz prvog i drugog polja, mora da bude u funkciji da bi se prvo user uneo podatke 
    // i kad klikne na dugme da se uzmu vrednosti
    let prvoPolje=String(document.querySelectorAll("input")[0].value);
    let drugoPolje=String(document.querySelectorAll("input")[1].value);
    let spen1=document.querySelectorAll("span")[0];
    let spen2=document.querySelectorAll("span")[1];
    let br=0;
    for(let j=0; j<2;j++){
        if(br==0){ 
            //ovde uporedjujemo input vrednosti sa vrednostima iz administratori
            for(let i=0;i<localStorage.getItem("a_length");i++){
                if(prvoPolje==String(localStorage.getItem("a_korisnicko_ime"+i)) &&
                drugoPolje==String(localStorage.getItem("a_lozinka"+i))){ 
                    localStorage.setItem("ulogovani_tip",localStorage.getItem("a_tip"+i)); // upisujemo u localStorage trenutno ulogovanog korisnika (admin/user)
                    localStorage.setItem("ulogovani_korisnik",localStorage.getItem("a_korisnicko_ime"+i));
                    window.open("Pocetna_strana.html","_self");
                    return;
                }
                else{
                    if(prvoPolje==localStorage.getItem("a_korisnicko_ime"+i)){
                        spen2.innerHTML="Lozinka nije tacna";
                        spen2.style.color="red";
                        return;
                    }
                }
            }
            //ovde uporedjujemo input vrednosti sa vrednostima iz korisnika
            //console.log("ovde");
            for(let i=0;i<Number(localStorage.getItem("k_length"));i++){    
                if(prvoPolje==localStorage.getItem("k_korisnicko_ime"+i) &&
                drugoPolje==localStorage.getItem("k_lozinka"+i)){
                        localStorage.setItem("ulogovani_tip",localStorage.getItem("k_tip"+i)); // upisujemo u localStorage trenutno ulogovanog korisnika (admin/user)
                        localStorage.setItem("ulogovani_korisnik",localStorage.getItem("k_korisnicko_ime"+i));//console.log("ovde");
                        window.open("Pocetna_strana.html","_self");
                        return;
                    } 
                    else{
                        if(prvoPolje==localStorage.getItem("k_korisnicko_ime"+i) && drugoPolje!=localStorage.getItem("k_lozinka"+i)){
                            spen2.innerHTML="Lozinka nije tacna";
                            spen2.style.color="red";
                            return;
                        }
                    }
            }
            //console.log("ovde");
            br+=1;
        }
        else{
            spen1.innerHTML="Trazeni korisnik ne postoji";// ispisujemo u span da korisnik nije nadjen
        }
    }
    
};