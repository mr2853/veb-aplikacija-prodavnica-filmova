/*function myTrim(x) {
    return x.replace(/^\s+|\s+$/gm,'');
  }*/

if(
    localStorage.getItem("ulogovani_tip")!=" " 
    && localStorage.getItem("ulogovani_tip")!=null 
    && localStorage.getItem("ulogovani_tip")!=undefined
    ){
        //console.log(localStorage.getItem("ulogovani_tip"))
        let ul=document.querySelector("ul");
        if(String(localStorage.getItem("ulogovani_tip"))=="admin"){
            // ovde pise u navigaciju stranice koje su potrebne administratoru
            ul.innerHTML="<li><a class='a' href='Za_dodavanje_novog_rezisera.html'>Dodavanje novog rezisera</a></li>"+
            "<li><a class='a' href='Za_dodavanje_novog_filma.html'>Dodavanje novog filma</a></li>"+
            "<li><a class='a' href='Za_dodavanje_novog_administratora.html'>Dodavanje novog administratora</a></li>"+
            "<li><a class='a' href='Za_prikaz_profila.html'>Prikaz profila</a></li>"+
            "<li><a class='a' href='Forma_za_prijavu.html' onclick='odjava_sa_stranice()'>Odjava sa profila</a></li>";
        }
        else if(String(localStorage.getItem("ulogovani_tip"))=="user"){
            // ovde pise u navigaciju stranice koje su potrebne useru
            // OVDE STA TREBA DA IDE ZA USERA --------------------------------------------------------------
            ul.innerHTML="<li><a class='a' href='Za_prikaz_profila.html'>Prikaz profila</a></li>"+
            "<li><a class='a' href='Za_prikaz_korpe.html'>Prikaz korpe</a></li>"+
            "<li><a class='a' href='Za_prikaz_proslih_kupovina.html'>Prikaz proslih kupovina</a></li>"+
            "<li><a class='a' href='Forma_za_prijavu.html' onclick='odjava_sa_stranice()'>Odjava sa profila</a></li>";
        }

        let div_f=document.getElementById("dugmad_filmovi");
        let btn=[];
        //ovde kreiramo da svaka slika bude dugme, da bi onda isli na dugme.onclick
        for(let i=0; i<localStorage.getItem("id_length");i++){
            btn_p="<a href='Za_prikaz_detalja_odabranog_filma.html' id='a_id"+i+"'><button class='dugmad_slike' id='"+localStorage.getItem("id"+i)+"'>";//prvi deo dugmeta
            btn_k="</button></a>";//drugi deo dugmeta
            if(localStorage.getItem("slike_filmova"+i)!=undefined){
                btn[i]=btn_p+localStorage.getItem("slike_filmova"+i)+btn_k;//potpuno dugme sa slikom
                div_f.innerHTML+=btn[i];// i ubacujemo ga u div_f
            }
            else{
                continue;
            }
            
        }

        let dugme=[];
        // ovo sad verovatno moze da se ubaci u prethodnu for petlju
        // jer ce svi nizovi uvek biti iste duzine, 
        // ali zbog lakseg razumevanja je razdvojeno za sada
        for(let i=0; i<localStorage.getItem("id_length");i++){
            // ovde selektujemo svako dugme(sliku) posebno
            // kada se odabere film, pomocu ove nadiv_fne funkcije vodimo korisnika na novu stranicu
            // i zapisuje se u localStorage kao poseban film, odabrani //*(razlika) prvo slovo je veliko
            function detaljniji_opis(){
                localStorage.setItem("Slika_filma",localStorage.getItem("slike_filmova"+i));
                localStorage.setItem("Id_filma",localStorage.getItem("id"+i));
                localStorage.setItem("Naziv_filma",localStorage.getItem("nazivi_filmova"+i));
                localStorage.setItem("Zanr_filma",localStorage.getItem("zanr"+i));
                localStorage.setItem("Godina_proizvodnje_filma",localStorage.getItem("godina_proizvodnje"+i));
                localStorage.setItem("Cena_filma",localStorage.getItem("cena"+i));
                localStorage.setItem("Broj_raspolozivih_primeraka_filma",localStorage.getItem("broj_raspolozivih_primeraka"+i));
                localStorage.setItem("Reziser_filma",localStorage.getItem("reziser"+i));
            }
            //ako id nije ne definisan kreira se dugme, koje vodi na stranicu sa detaljnijim opisom filma
            if(localStorage.getItem("id"+i)!=undefined){
                dugme[i]=document.getElementById(localStorage.getItem("id"+i))
                dugme[i].onclick=detaljniji_opis;
            }
            else{
                continue;
            }
        }
        function search() { // search box za naslovnu stranu
            let input = document.getElementById('trazi_ovaj_tekst').value // uzima vrednost iz inputa
            if(input==""){
                location.reload();
            }
            input=input.toUpperCase(); //konvertuje vrednost u velika slova, 
                //da se ne bi moralo paziti na mala/velika slova
            let brojac=-1;
            for (i = 0; i < localStorage.getItem("id_length"); i++) {
                    let a=document.getElementById("a_id"+i); //uzimamo slike prema id-u
                    if(localStorage.getItem("nazivi_filmova"+i)!=null || localStorage.getItem("nazivi_filmova"+i)!=undefined){
                        let x = localStorage.getItem("nazivi_filmova"+i); //uzimamo nazive filmova prema indeksu i konvertujemo ih u velika slova
                        x=x.toUpperCase();
                        if (x.includes(input)) { // proveravamo da li x sadrzi input
                            //console.log(x);
                        } 
                        else { 
                        a.style.display="none";// ako ne sadrzi slici dodeljujemo style.display="none", tj brisemo je
                    };
                    };
            };
        };
        function odjava_sa_stranice(){
            let brojac=Number(localStorage.getItem("racuni_length"));
            //console.log(brojac);
            for(let j=0;j<brojac;j++){
                let poruceno=Number(localStorage.getItem("kup_porucena_kolicina"+j));
                let indeks=Number(localStorage.getItem("kup_indeksi_filmova"+j));
                let ostalo=Number(localStorage.getItem("broj_raspolozivih_primeraka"+indeks));
                let rezultat=ostalo+poruceno;
                //console.log(localStorage.getItem("broj_raspolozivih_primeraka"+indeks));
                //console.log(ostalo);
                //console.log(poruceno);
                //console.log(rezultat);
                //console.log(indeks);
                //console.log(Number(localStorage.getItem("racuni_length")))
                for(let i=0;i<Number(localStorage.getItem("racuni_length"));i++){
                    let racun=[];
                    racun=localStorage.getItem("racun"+i);
                    //console.log(racun);
                    let n_racun=racun.split("(~$2853#)");
                    n_racun.shift();
                    //console.log(n_racun);
                    //console.log(n_racun[1]);
                    //console.log(Number(localStorage.getItem("id_length")))
                    for(let j=0;j<Number(localStorage.getItem("id_length"));j++){
                        if(String(n_racun[1])==String(localStorage.getItem("nazivi_filmova"+j))){
                            //console.log("Naslo ga")
                            let ostalo=Number(localStorage.getItem("broj_raspolozivih_primeraka"+j));
                            let poruceno=Number(n_racun[2]);
                            let ostaje_na_kraju=ostalo+poruceno;
                            //console.log(ostaje_na_kraju);
                            localStorage.setItem("broj_raspolozivih_primeraka"+j, ostaje_na_kraju);
                        }
                    }
                }
                //localStorage.setItem("broj_raspolozivih_primeraka"+indeks,rezultat);
                ////console.log(localStorage.getItem("broj_raspolozivih_primeraka"+indeks));
                localStorage.removeItem("kup_ime"+j);
                localStorage.removeItem("kup_slike"+j);
                localStorage.removeItem("kup_porucen_film"+j);
                localStorage.removeItem("kup_porucena_kolicina"+j);
                localStorage.removeItem("kup_cena_po_filmu"+j);
                localStorage.removeItem("kup_ukupna_cena"+j);
                localStorage.removeItem("kup_zanr"+j);
                localStorage.removeItem("kup_godina_proizvodnje"+j);
                localStorage.removeItem("kup_broj_raspolozivih_primeraka"+j);
                localStorage.removeItem("kup_reziser"+j);
                localStorage.removeItem("racun"+Number(localStorage.getItem("kup_indeks_racuna"+j)));
                localStorage.removeItem("kup_indeks_racuna"+j);
                localStorage.removeItem("kup_indeksi_filmova"+j);
                for(let m=0;m<Number(localStorage.getItem("kup_popravljen_film_length"));m++){
                    localStorage.setItem("kup_popravljen_film_indeks"+m,0);
                    };
                localStorage.setItem("kup_popravljen_film_length",undefined);
            }
            localStorage.setItem("racuni_length",0);
            localStorage.setItem("kup_brojac",0);
            localStorage.removeItem("ulogovani_korisnik");
            localStorage.removeItem("ulogovani_tip");
            //console.log(localStorage.getItem("ulogovani_tip"));
        }
        //let odjava=ul.querySelectorAll("button")[0];
        //odjava.onclick=odjava_sa_stranice;

        /*window.addEventListener("close", function( event ) {
            // make the close button ineffective
            event.preventDefault();
          }, false);*/
}
else{
    let body=document.querySelector("body");
    body.innerHTML="<h1>Ova stranica je samo za prijavljene korisnike</h1>";
    body.innerHTML+="<br><h3>Ako zelite da se prijavite mozete otici na stranicu <a href='Forma_za_prijavu.html' class='niste_ulogovani'>Forma za prijavu</a></h3>";
    body.style.color="red";
}
//console.log(document); //cisto provera