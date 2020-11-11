if(
    localStorage.getItem("ulogovani_tip")!=" " 
    && localStorage.getItem("ulogovani_tip")!=null 
    && localStorage.getItem("ulogovani_tip")!=undefined
    && localStorage.getItem("ulogovani_tip")=="admin"
    ){
        function f_slika(){
            let p=document.getElementById("mesto_za_sliku");
            let slika=document.querySelectorAll("input")[0].value;
            //slika kad se uploaduje ima full path i izmenjenu, 
            //zato uzimamo samo ime slike pa kasnije napisemo odakle je
            let sva_slova=[];//kreiramo prazan niz
            sva_slova=slika.split("");//delimo path na stringove
            let broj1=Number(sva_slova.indexOf("\\"));// uzimamo indeksa od prvog znaka \
            let ime_slike=sva_slova.slice(broj1);// brisemo do tog indeksa  i rezultat dodeljujemo novoj promenljivoj
            ime_slike.shift();// brisemo i taj znak
            broj1=Number(ime_slike.indexOf("\\"));// uzimamo indeksa od prvog znaka \
            ime_slike=ime_slike.slice(broj1);// brisemo do tog indeksa
            ime_slike.shift();// brisemo i taj znak
            slika="";//prazan string
            for(let i=0;i<ime_slike.length;i++){
                slika+=ime_slike[i];// i dodajemo sve elemente u taj string, i dobijemo ime slike
            }
            slika="<img src='filmovi/slike/"+slika+"' weight='200' height='200'>";
            p.innerHTML=slika;
        }
        // dobavljamo vrednosti odabranog filma i pisemo ih
        //let slika=document.querySelectorAll("input")[0].value=localStorage.getItem("Slika_filma");
        // id dobavaljamo i pisemo, i disabled-ujemo ga da se ne moze menjati
        // ispisujemo vrednosti izabranog filma
        let slika=document.querySelectorAll("input")[0];
        /*let s_slika=localStorage.getItem("Slika_filma");
        let niz_s_slika=s_slika.split("");
        for(let i=0;i<27;i++){
            niz_s_slika.pop();
        }
        for(let i=0;i<24;i++){
            niz_s_slika.shift()
        }
        niz_s_slika.unshift("C:/fakepath/");
        let string_s_slika="";
        for(let i=0;i<niz_s_slika.length;i++){
            string_s_slika+=niz_s_slika[i];
        }
        //console.log(string_s_slika);
        slika.value=string_s_slika;*/
        let p=document.getElementById("mesto_za_sliku");
        p.innerHTML=localStorage.getItem("Slika_filma"); // stavljamo da bude i slika
        slika.addEventListener("change",f_slika); // stavljamo addEventListener ako se uploaduje druga slika da je postavi
        let id=document.querySelectorAll("input")[1].value=localStorage.getItem("Id_filma"); // ubacujemo id vrednost
        document.querySelectorAll("input")[1].disabled = true; // disabled-ujemo id input, da se ne bi moglo menjati
        let naziv=document.querySelectorAll("input")[2].value=localStorage.getItem("Naziv_filma");
        let zanr=document.querySelectorAll("input")[3].value=localStorage.getItem("Zanr_filma");
        let god_proiz=document.querySelectorAll("input")[4].value=localStorage.getItem("Godina_proizvodnje_filma");
        let cena=document.querySelectorAll("input")[5].value=localStorage.getItem("Cena_filma");
        let br_raspolo_prim=document.querySelectorAll("input")[6].value=localStorage.getItem("Broj_raspolozivih_primeraka_filma");
        let select=document.querySelector("select");
        let option_p="<option>"; // za opcije pocetak
        let option_k="</option>";// i kraj
        let reziser=localStorage.getItem("Reziser_filma"); // dobavljamo ime rezisera od odabranog filma
        let i_reziser=0; // deklarisemo promenljivu koja ce biti indeks od imena rezisera u globalnim filmovima
        let izabrani="";
        // kreiramo funkciju da popuni select sa reziserima
        function select_popuni(){ // stavio sam u funkciju, mozda da ni ne mora
            let select=document.querySelector("select");
            let option_p="<option>";
            let option_k="</option>";
            let option="<option>"+localStorage.getItem("Reziser_filma")+"</option>";
            let niz_rezisera=[];
            for(let i=0;i<localStorage.getItem("duzina_rezisera");i++){
                let brojac_rez=0
                if(localStorage.getItem("reziser"+i)!=null && localStorage.getItem("reziser"+i)!=localStorage.getItem("Reziser_filma")){
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
                select.innerHTML=option;
            }
        }; 

        select_popuni();

        // sacuvavamo sve izmene nastale u input poljima i u selectu
        function potvrdi(){
            // ovde proveramo da li je neko polje prazno, ako jeste
            // ispisujemo tekst u spanu da polje ne sme da bude prazno
            // i prekidamo sacuvavanje
            //console.log("ovde");
            for(let i=1;i<7;i++){
                let vrednost=document.querySelectorAll("input")[i].value
                let spen=document.querySelectorAll("span")[i];
                if(vrednost==""){
                    spen.innerHTML="Ovo polje ne sme da bude prazno";
                    //console.log("ovde");
                    return;
                }
                //console.log("ovde");
            }
            //console.log("ovde");
            let slika=document.querySelectorAll("input")[0].value;
            //console.log(slika);//slika kad se uploaduje ima full path i izmenjenu, 
            //zato uzimamo samo ime slike pa kasnije napisemo odakle je
            let sva_slova=[];//kreiramo prazan niz
            sva_slova=slika.split("");//delimo path na stringove
            let broj1=Number(sva_slova.indexOf("\\"));// uzimamo indeksa od prvog znaka \
            let ime_slike=sva_slova.slice(broj1);// brisemo do tog indeksa i rezultat dodeljujemo novoj promenljivoj
            ime_slike.shift();// brisemo i taj znak
            broj1=Number(ime_slike.indexOf("\\"));// uzimamo indeksa od prvog znaka \
            ime_slike=ime_slike.slice(broj1);// brisemo do tog indeksa
            ime_slike.shift();// brisemo i taj znak
            slika="";//prazan string
            for(let i=0;i<ime_slike.length;i++){
                slika+=ime_slike[i];// i dodajemo sve elemente u taj string, i dobijemo ime slike
            }
            //console.log("ovde");
            if(slika.length==0){
                //console.log("preskocena slika");
            }
            else{
                slika="<img src='filmovi/slike/"+slika+"' width='150' height='150'>";
                localStorage.setItem("Slika_filma",slika);
                localStorage.setItem("slike_filmova"+indeks,slika);
            }
            // dobavljamo vrednosti
            let indeks=Number(localStorage.getItem("Id_filma"));
            naziv=document.querySelectorAll("input")[2].value;
            zanr=document.querySelectorAll("input")[3].value;
            god_proiz=document.querySelectorAll("input")[4].value;
            cena=document.querySelectorAll("input")[5].value;
            br_raspolo_prim=document.querySelectorAll("input")[6].value;
            let selected=select.options[select.selectedIndex].value;

            //upisujemo ih u odabrani film
            
            localStorage.setItem("Naziv_filma",naziv);
            localStorage.setItem("Zanr_filma",zanr);
            localStorage.setItem("Godina_proizvodnje_filma",god_proiz);
            localStorage.setItem("Cena_filma",cena);
            localStorage.setItem("Broj_raspolozivih_primeraka_filma",br_raspolo_prim);
            localStorage.setItem("Reziser_filma",selected);

            //upisujemo ih u globalne filmove
            
            localStorage.setItem("nazivi_filmova"+indeks,naziv);
            localStorage.setItem("zanr"+indeks,zanr);
            localStorage.setItem("godina_proizvodnje"+indeks,god_proiz);
            localStorage.setItem("cena"+indeks,cena);
            localStorage.setItem("broj_raspolozivih_primeraka"+indeks,br_raspolo_prim);
            localStorage.setItem("reziser"+i_reziser,selected);
            ////console.log(localStorage.getItem("nazivi_filmova"+indeks))
            document.querySelectorAll("span")[8].innerHTML="Sacuvan."
        }
        //console.log("ovde");
        //dugme za sacuvavanje     
        //let btn=document.getElementById("potvrda");
        //btn.onclick=potvrdi;
}
else{
    let body=document.querySelector("body");
    body.innerHTML="<h1>Ova stranica je samo za prijavljene administratore</h1>";
    body.innerHTML+="<br><h3>Ako zelite da se prijavite mozete otici na stranicu <a href='Forma_za_prijavu.html' class='niste_ulogovani'>Forma za prijavu</a></h3>";
    body.style.color="red";
}