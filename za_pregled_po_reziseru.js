if(
    localStorage.getItem("ulogovani_tip")!=" " 
    && localStorage.getItem("ulogovani_tip")!=null 
    && localStorage.getItem("ulogovani_tip")!=undefined
    ){
        let div_f=document.getElementById("dugmad_filmovi");
        let brojac1=0;
        let brojac2=0;
        let indeksi=[];
        // IMAMO GRESKU, NE PRIKAZUJE AKO REZISER IMA VISE OD 2 FILMA
        let id_length=Number(localStorage.getItem("id_length"));
        let izabrano;
        function izabrani_tekst(){
            let div_f=document.getElementById("dugmad_filmovi");
            let brojac1=0;
            let indeksi=[];
            izabrano=select.options[select.selectedIndex].value; // dobavljamo vrednost koja je selektovana
            izabrano=izabrano.toUpperCase();
            // kreira kao na pocetnoj strani slike(dugmad)
            if(brojac1==0){
                for(let j=0;j<id_length;j++){
                    if(localStorage.getItem("reziser"+j)!=null){
                        ime=localStorage.getItem("reziser"+j).toUpperCase();
                        if(izabrano==ime){
                            indeksi.push(j);
                            //console.log(ime);
                        }
                        brojac1+=1;
                    }
                }
            }

            let btn=[];
            for(let i=0;i<indeksi.length;i++){
                let id=String(indeksi[i])
                if(localStorage.getItem("id"+id)!=null || localStorage.getItem("id"+id)!=undefined){
                    let btn_p="<a href='Za_prikaz_detalja_odabranog_filma.html'><button id='"+localStorage.getItem("id"+id)+"'>";//prvi deo dugmeta
                    let btn_k="</button></a>";//drugi deo dugmeta
                    btn.push(btn_p+localStorage.getItem("slike_filmova"+id)+btn_k);//potpuno dugme sa slikom
                }
            }
            
            for(let i=0;i<btn.length;i++){
                div_f.innerHTML=btn;
            }
        
                // OVO JE DA VODI KORISNIKA NA DETALJNIJE PODATKE O IZABRANOM FILMU
                let dugme=[];
                // ovo sad verovatno moze da se ubaci u prethodnu for petlju
                // jer ce svi nizovi uvek biti iste duzine, 
                // ali zbog lakseg razumevanja je razdvojeno za sada
                for(let i=0; i<indeksi.length;i++){
                    if(document.getElementById(localStorage.getItem("id"+indeksi[i]))!=null || document.getElementById(localStorage.getItem("id"+indeksi[i]))!=undefined){
                    dugme[i]=document.getElementById(localStorage.getItem("id"+indeksi[i])); // ovde selektujemo svako dugme(sliku) posebno
                    // kada se odabere film, pomocu ove naredne funkcije vodimo korisnika na novu stranicu
                    function detaljniji_opis(){
                        localStorage.setItem("Slika_filma",localStorage.getItem("slike_filmova"+indeksi[i]));
                        localStorage.setItem("Id_filma",localStorage.getItem("id"+indeksi[i]));
                        localStorage.setItem("Naziv_filma",localStorage.getItem("nazivi_filmova"+indeksi[i]));
                        localStorage.setItem("Zanr_filma",localStorage.getItem("zanr"+indeksi[i]));
                        localStorage.setItem("Godina_proizvodnje_filma",localStorage.getItem("godina_proizvodnje"+indeksi[i]));
                        localStorage.setItem("Cena_filma",localStorage.getItem("cena"+indeksi[i]));
                        localStorage.setItem("Broj_raspolozivih_primeraka_filma",localStorage.getItem("broj_raspolozivih_primeraka"+indeksi[i]));
                        localStorage.setItem("Reziser_filma",localStorage.getItem("reziser"+indeksi[i]));
                    }
                    dugme[i].onclick=detaljniji_opis; // ovde dodeljujemo onclick svakom dugmetu
                }
                }
            } 
            
        let btn_trazi_po_reziseru=document.getElementById("trazi_po_reziseru");
        btn_trazi_po_reziseru.onclick=izabrani_tekst;

        let select=document.querySelector("select");
        let option_p="<option>";
        let option_k="</option>";
        let option="<option>"+localStorage.getItem("Reziser_filma")+"</option>";
        let niz_rezisera=[];
        for(let i=0;i<localStorage.getItem("duzina_rezisera");i++){
            let brojac_rez=0
            if(localStorage.getItem("reziser"+i)!=null && localStorage.getItem("reziser"+i)!=localStorage.getItem("Reziser_filma")
            && localStorage.getItem("nazivi_filmova"+i)!=null && localStorage.getItem("nazivi_filmova"+i)!=undefined){
                for(j=0;j<niz_rezisera.length;j++){
                    if(localStorage.getItem("reziser"+i)==niz_rezisera[j]){
                        brojac_rez+=1;
                    }
                }
                if(brojac_rez==0 || niz_rezisera.length==0){
                    niz_rezisera.push(localStorage.getItem("reziser"+i));
                }
            }
        };
        for(j=0;j<niz_rezisera.length;j++){
            option+=(option_p+niz_rezisera[j]+option_k);
                //option_p+localStorage.getItem("reziser"+i)+option_k;
                select.innerHTML=option;
                izabrani_tekst();
        }
}
else{
    let body=document.querySelector("body");
    body.innerHTML="<h1>Ova stranica je samo za prijavljene korisnike</h1>";
    body.innerHTML+="<br><h3>Ako zelite da se prijavite mozete otici na stranicu <a href='Forma_za_prijavu.html' class='niste_ulogovani'>Forma za prijavu</a></h3>";
    body.style.color="red";
}