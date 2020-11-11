if(
    localStorage.getItem("ulogovani_tip")!=" " 
    && localStorage.getItem("ulogovani_tip")!=null 
    && localStorage.getItem("ulogovani_tip")!=undefined
    && localStorage.getItem("ulogovani_tip")=="admin"
    ){
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
        
        let slobodan_id=0;
        let sl_brojac_id=0
        let id_l=Number(localStorage.getItem("id_length"));
        for(let i=0;i<id_l+1;i++){
            if(sl_brojac_id==0){
                if(localStorage.getItem("id"+i)==null || localStorage.getItem("id"+i)==undefined){
                    slobodan_id=i;
                    sl_brojac_id+=1;
                    //console.log(i)
                }
            }
        }
        let id=document.querySelectorAll("input")[0];
        id.value=slobodan_id;
        function sacuvaj(){ // sacuvavamo promene u podacima filma
            let naziv=document.querySelectorAll("input")[1].value;// ovde dobavljamo sve input vrednosti, tj promeljene
            let zanr=document.querySelectorAll("input")[2].value;
            let god_proiz=document.querySelectorAll("input")[3].value;
            let cena=document.querySelectorAll("input")[4].value;
            let br_rasp_prim=document.querySelectorAll("input")[5].value;
            let slika=document.querySelectorAll("input")[6].value;
            let reziser=select.options[select.selectedIndex].value;
            //let indeks=Number(localStorage.getItem("id_length"));
            /*for(let i=0;i<indeks;i++){ //ako postoji film sa istim ID-em prekida se sacuvavanje
                if(Number(id)==Number(localStorage.getItem("id"+String(i)))){
                    spen1.innerHTML="Vec postoji film sa ovim ID-em";
                    spen1.style.color="red";
                    return;
                }
                else{
                    //console.log("Dobro je nema filma sa ovim id-em");
                };
            };*/
            let spen0=document.querySelectorAll("span")[0];
            let spen1=document.querySelectorAll("span")[1];
            let spen2=document.querySelectorAll("span")[2];
            let spen3=document.querySelectorAll("span")[3];
            let spen4=document.querySelectorAll("span")[4];
            let spen5=document.querySelectorAll("span")[5];
            let spen6=document.querySelectorAll("span")[6];
            let spen7=document.querySelectorAll("span")[7];
            /*if(id==""){
                spen0.innerHTML="Ovo polje ne sme da bude prazno";
                return;
            }*/
            if(naziv==""){
                spen1.innerHTML="Ovo polje ne sme da bude prazno";
                return;
            }
            else if(zanr==""){
                spen2.innerHTML="Ovo polje ne sme da bude prazno";
                return;
            }
            else if(god_proiz==""){
                spen3.innerHTML="Ovo polje ne sme da bude prazno";
                return;
            }
            else if(cena==""){
                spen4.innerHTML="Ovo polje ne sme da bude prazno";
                return;
            }
            else if(br_rasp_prim==""){
                spen5.innerHTML="Ovo polje ne sme da bude prazno";
                return;
            }
            else if(slika==""){
                spen6.innerHTML="Ovo polje ne sme da bude prazno";
                return;
            }
            //console.log(slika); //slika kad se uploaduje ima full path i izmenjenu, 
            //zato uzimamo samo ime slike pa kasnije napisemo odakle je
            let sva_slova=[]; //kreiramo prazan niz
            sva_slova=slika.split(""); //delimo path na stringove
            let broj1=Number(sva_slova.indexOf("\\")); // uzimamo indeksa od prvog znaka \
            let ime_slike=sva_slova.slice(broj1); // brisemo do tog indeksa i rezultat dodeljujemo novoj promenljivoj
            ime_slike.shift(); // brisemo i taj znak
            broj1=Number(ime_slike.indexOf("\\")); // uzimamo indeksa od prvog znaka \
            ime_slike=ime_slike.slice(broj1); // brisemo do tog indeksa
            ime_slike.shift(); // brisemo i taj znak
            slika=""; //prazan string
            for(let i=0;i<ime_slike.length;i++){
                slika+=ime_slike[i]; // i dodajemo sve elemente u taj string, i dobijemo ime slike
            }
            /*let novi="";
            for(let i=0;i<sva_slova.length;i++){
                novi+=sva_slova[i].replace("\\","/");
            }*/
            //console.log(slika); 
            // sacuvavamo sve promene
            let id_novi=String(slobodan_id);
            //id=Number(id.value);
            localStorage.setItem("id"+id_novi,id_novi);
            //console.log(id_novi)
            //console.log(localStorage.getItem("id"+id_novi))
            localStorage.setItem("slike_filmova"+id_novi,"<img src='filmovi/slike/"+slika+"' width='150' height='150'>")
            localStorage.setItem("nazivi_filmova"+id_novi,naziv);
            localStorage.setItem("zanr"+id_novi,zanr);
            localStorage.setItem("godina_proizvodnje"+id_novi,god_proiz);
            localStorage.setItem("cena"+id_novi,cena);
            localStorage.setItem("broj_raspolozivih_primeraka"+id_novi,br_rasp_prim);
            localStorage.setItem("reziser"+id_novi,reziser);
            // duzinu id-jeva povecavamo za 1
            localStorage.setItem("id_length",String(Number(localStorage.getItem("id_length"))+1));
            localStorage.setItem("duzina_rezisera",String(Number(localStorage.getItem("duzina_rezisera"))+1));
            spen7.innerHTML="Sacuvano.";
            //console.log("sacuvan film");
            //console.log(localStorage.getItem("id"+id_novi));
        }
        //let btn_sacuvaj=document.querySelector("button");
        //btn_sacuvaj.onclick=sacuvaj;
}
else{
    let body=document.querySelector("body");
    body.innerHTML="<h1>Ova stranica je samo za prijavljene administratore</h1>";
    body.innerHTML+="<br><h3>Ako zelite da se prijavite mozete otici na stranicu <a href='Forma_za_prijavu.html' class='niste_ulogovani'>Forma za prijavu</a></h3>";
    body.style.color="red";
}