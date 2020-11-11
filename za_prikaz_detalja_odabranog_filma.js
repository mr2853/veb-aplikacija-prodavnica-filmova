if(
    localStorage.getItem("ulogovani_tip")!=" " 
    && localStorage.getItem("ulogovani_tip")!=null 
    && localStorage.getItem("ulogovani_tip")!=undefined
    ){
        //dobavljamo divove
        let div1=document.getElementsByClassName("poravnanjeInputa")[0]; 
        let div2=document.getElementsByClassName("poravnanjeInputa")[1];
        let div3=document.getElementsByClassName("poravnanjeInputa")[2];
        let div4=document.getElementsByClassName("poravnanjeInputa")[3];
        let div5=document.getElementsByClassName("poravnanjeInputa")[4];
        let div6=document.getElementsByClassName("poravnanjeInputa")[5];
        let div7=document.getElementsByClassName("poravnanjeInputa")[6];
        let div8=document.getElementsByClassName("poravnanjeInputa")[7];
        //pisemo uz pomoc innerHTML u divove, vrednosti kljuceva od odabranog filma iz localStoraga
        div1.innerHTML="<label>Slika filma:</label>"+localStorage.getItem("Slika_filma");
        div2.innerHTML="<label>Id filma:</label><span class='span_detalji_filma'>"+localStorage.getItem("Id_filma")+"</span>"; 
        div3.innerHTML="<label>Naziv filma:</label><span class='span_detalji_filma'>"+localStorage.getItem("Naziv_filma")+"</span>";
        div4.innerHTML="<label>Zanr filma:</label><span class='span_detalji_filma'>"+localStorage.getItem("Zanr_filma")+"</span>";
        div5.innerHTML="<label>Godina proizvodnje filma:</label><span class='span_detalji_filma'>"+localStorage.getItem("Godina_proizvodnje_filma")+"</span>";
        div6.innerHTML="<label>Cena filma:</label><span class='span_detalji_filma'>"+localStorage.getItem("Cena_filma")+"</span>";
        div7.innerHTML="<label>Broj raspolozivih primeraka:</label><span class='span_detalji_filma'>"+localStorage.getItem("Broj_raspolozivih_primeraka_filma")+"</span>";
        div8.innerHTML="<label>Reziser filma:</label><a href='Za_pregled_po_reziseru.html'><button class='span_detalji_filma'>"+localStorage.getItem("Reziser_filma")+"</button></a>";
        
        let dugmad=document.getElementsByClassName("brp")[0];
        // ako je trenutni korisnik aministrator iskucace se dugmad potrebna administratoru
        // takodje, jedno od dugmad je Obrisi film, dugme je povezano sa narednom funkcijom brisanje_filma(),
        // koja brise te stvari iz localStoraga prema indeksu
        // a dugme obrisi je povezano linkom, tako da kada se film obrise admin se prosledi na Pocetnu_stranu.html
        if(localStorage.getItem("ulogovani_tip")=="admin"){
            dugmad.innerHTML+="<button id='dugme_za_brisanje_filma' onclick='brisanje_filma()'><a href='Pocetna_strana.html'>Obrisi film</a>"+
            "</button><br><button><a href='Za_izmenu_filma.html'>Izmena filma</a></button><br><a href='Pocetna_strana.html'><button type='button' id='zatvori'>Pocetna strana</button></a>";
        }
        // funkcija za brisanje filma
        function brisanje_filma(){
            let indeks=Number(localStorage.getItem("Id_filma"));
            localStorage.removeItem("id"+indeks);
            localStorage.removeItem("slike_filmova"+indeks);
            localStorage.removeItem("nazivi_filmova"+indeks);
            localStorage.removeItem("zanr"+indeks);
            localStorage.removeItem("godina_proizvodnje"+indeks);
            localStorage.removeItem("cena"+indeks);
            localStorage.removeItem("broj_raspolozivih_primeraka"+indeks);
        }
        // ako je trenutni korisnik korisnik iskucace se dugmad potrebna korisniku
        // user ima textarea za unosenje zeljene kolicine filmova, i dugme uz pomoc koga ce dodati u korpu zeljenu kolicinu
        // ako je zeljena kolicina veca od broja raspolozivih primeraka ispisace se da nemamo tu kolicinu na stanju
        if(localStorage.getItem("ulogovani_tip")=="user"){
            dugmad.innerHTML+="<input type='number' min='0' id='zeljena_kolicina_filmova'></input><button id='dodaj_u_korpu' onclick='dodaj()'>Dodaj film u korpu</button><br><span id='spen'></span><a href='Pocetna_strana.html'><button type='button' id='zatvori'>Nazad na pocetnu stranu</button></a>";
        }
        function dodaj(){
            let racun_niz;
            let input=Number(document.getElementById("zeljena_kolicina_filmova").value);
            let broj_primeraka_na_stanju=Number(localStorage.getItem("Broj_raspolozivih_primeraka_filma"));
            let spen=document.getElementById("spen");
            if(input>broj_primeraka_na_stanju){
                spen.innerHTML="Nije moguce poruciti tu kolicinu filmova, nemamo toliko na stanju zao nam je :(";
                spen.style.color="red";
                return;
            }
            else if(input<=0){
                spen.innerHTML="Uneli ste negativan broj ili broj jednak nuli";
                spen.style.color="red";
                return;
            }
            else{
                let ostalo=broj_primeraka_na_stanju-input;
                localStorage.setItem("Broj_raspolozivih_primeraka_filma",ostalo);
                let id=Number(localStorage.getItem("Id_filma"));
                localStorage.setItem("broj_raspolozivih_primeraka"+id,ostalo);
                localStorage.setItem("porucen_film",localStorage.getItem("Naziv_filma"));
                localStorage.setItem("porucena_kolicina",input);
                localStorage.setItem("cena_po_filmu",localStorage.getItem("Cena_filma"));
                localStorage.setItem("ukupna_cena",String(Number(localStorage.getItem("porucena_kolicina"))*Number(localStorage.getItem("cena_po_filmu"))))
                
                racun_niz="(~$2853#)"+localStorage.getItem("ulogovani_korisnik");
                racun_niz+="(~$2853#)"+localStorage.getItem("porucen_film");
                racun_niz+="(~$2853#)"+localStorage.getItem("porucena_kolicina");
                racun_niz+="(~$2853#)"+localStorage.getItem("cena_po_filmu");
                racun_niz+="(~$2853#)"+localStorage.getItem("ukupna_cena");
                /*let racun_objekat={
                        "ulogovani_korisnik":localStorage.getItem("ulogovani_korisnik"),
                        "porucen_film":localStorage.getItem("porucen_film"),
                        "porucena_kolicina":localStorage.getItem("porucena_kolicina"),
                        "cena_po_filmu":localStorage.getItem("cena_po_filmu"),
                        "ukupna_cena":localStorage.getItem("ukupna_cena")
                }*/
                let broj=Number(localStorage.getItem("racuni_length"));
                
                    for(let i=0;i<broj;i++){
                        let racun=[];
                        racun=localStorage.getItem("racun"+i);
                        //console.log(racun_niz);
                        let n_racun=racun.split("(~$2853#)");
                        n_racun.shift();
                        //console.log(racun);
                        if(String(n_racun[1])==String(localStorage.getItem("porucen_film"))){
                            //console.log("Ima vec jednom porucen isti film, kolicina ce biti dodata");
                            //console.log(localStorage.getItem("porucen_film"));
                            //console.log(n_racun)
                            let niz="";
                            niz=("(~$2853#)"+String(n_racun[0]));
                            niz+=("(~$2853#)"+String(localStorage.getItem("porucen_film")));
                            niz+=("(~$2853#)"+String(Number(localStorage.getItem("porucena_kolicina"))+Number(n_racun[2])));
                            niz+=("(~$2853#)"+String(n_racun[3]));
                            niz+=("(~$2853#)"+String(Number(localStorage.getItem("ukupna_cena"))+Number(n_racun[4])));
                            localStorage.setItem("racun"+i,niz);
                            //console.log(niz)
                            //console.log(n_racun)
                            //console.log(localStorage.getItem("racun"+i));
                            //localStorage.setItem("racuni_length",broj+1);
                            //console.log(localStorage.getItem("racuni_length")); // PROVERI DAL OVO RADI
                            stop+=1;
                            location.reload();
                            return;
                        }
                    }
                
                    location.reload();
                    //console.log("Nema istog filma");
                    localStorage.setItem("racun"+broj,racun_niz);
                    //console.log(localStorage.getItem("racun0"));
                    localStorage.setItem("racuni_length",broj+1);
                    //console.log(localStorage.getItem("racuni_length")) // PROVERI DAL OVO RADI
                   //location.reload();
            }
            
        }
}
else{
    let body=document.querySelector("body");
    body.innerHTML="<h1>Ova stranica je samo za prijavljene korisnike</h1>";
    body.innerHTML+="<br><h3>Ako zelite da se prijavite mozete otici na stranicu <a href='Forma_za_prijavu.html' class='niste_ulogovani'>Forma za prijavu</a></h3>";
    body.style.color="red";
}