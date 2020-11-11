if(
    localStorage.getItem("ulogovani_tip")!=" " 
    && localStorage.getItem("ulogovani_tip")!=null 
    && localStorage.getItem("ulogovani_tip")!=undefined
    &&  localStorage.getItem("ulogovani_tip")=="user"
    ){
        let div_filmovi=document.getElementById("filmovi");
        let racuni_length=Number(localStorage.getItem("racuni_length"));
        let k_length=Number(localStorage.getItem("k_length"));
        let id_length=Number(localStorage.getItem("id_length"));
        let spen=document.getElementById("span_greska");
        let ime=[];
        let porucen_film=[];
        let porucena_kolicina=[];
        let cena_po_filmu=[];
        let ukupna_cena=[];
        let slike=[];
        let zanr=[];
        let god_proiz=[];
        let br_raspolo_prim=[];
        let reziser=[];
        let ulogovani_korisnik=String(localStorage.getItem("ulogovani_korisnik"));
        let indeks_racuna=[];
        let brojac=0;
        let indeksi_izbrisanih=[];
        localStorage.setItem("kup_brojac",0);
        let indeks_brojaca=[];
        if(racuni_length==0){
            let div=document.querySelectorAll("div")[2];
            div.innerHTML="<h1>Trenutno nemate filmova u korpi</h1>";
        }
        else{
        for(let j=0;j<racuni_length;j++){
            if(localStorage.getItem("racun"+j)!=null && localStorage.getItem("racun"+j)!=undefined){
                let racun_objekat=localStorage.getItem("racun"+j);
                //console.log(racun_objekat);
                let racun_niz=racun_objekat.split("(~$2853#)");
                //console.log(racun_niz);
                racun_niz.shift();
                //console.log(racun_niz);
                
                if(ulogovani_korisnik==racun_niz[0]){
                    indeks_brojaca.push(brojac);
                    localStorage.setItem("kup_indeks_brojaca"+brojac,brojac);
                    localStorage.setItem("kup_indeks_racuna"+brojac,j);
                    localStorage.setItem("kup_ime"+brojac,racun_niz[0]);
                    localStorage.setItem("kup_porucen_film"+brojac,racun_niz[1]);
                    localStorage.setItem("kup_porucena_kolicina"+brojac,racun_niz[2]);
                    localStorage.setItem("kup_cena_po_filmu"+brojac,racun_niz[3]);
                    localStorage.setItem("kup_ukupna_cena"+brojac,racun_niz[4]);
                    localStorage.setItem("kup_brojac"+brojac,localStorage.getItem("kup_brojac")+1)
                    brojac+=1;
                };
            }
        };

        for(let i=0;i<brojac;i++){
            if(localStorage.getItem("kup_ime"+i)==null || localStorage.getItem("kup_ime"+i)==undefined){
                localStorage.setItem("kup_ime"+i," ");
                localStorage.setItem("kup_porucen_film"+i," ");
                localStorage.setItem("kup_porucena_kolicina"+i," ");
                localStorage.setItem("kup_cena_po_filmu"+i," ");
                localStorage.setItem("kup_ukupna_cena"+i," ");
                localStorage.setItem("racun"+Number(localStorage.getItem("kup_indeks_racuna"+i))," ");
                localStorage.setItem("kup_indeks_racuna"+i," ");
            }
        }

        let indeks=[];
        let brojac1=0;
        for(let i=0;i<racuni_length;i++){
            //console.log("prosao prvi for");
            if(String(localStorage.getItem("kup_ime"+i))!=null && String(localStorage.getItem("kup_ime"+i))!=undefined){
                if(ulogovani_korisnik==String(localStorage.getItem("kup_ime"+i))){
                    //console.log("prosao prvi if");
                    for(let j=0;j<id_length;j++){
                        //console.log("prosao drugi for");
                        let x=String(localStorage.getItem("nazivi_filmova"+j));
                        if(localStorage.getItem("kup_porucen_film"+i)==x){
                            //console.log("prosao drugi if");
                            localStorage.setItem("kup_indeksi_filmova"+brojac1,j);
                            localStorage.setItem("kup_slike"+brojac1,localStorage.getItem("slike_filmova"+j));
                            localStorage.setItem("kup_zanr"+brojac1,localStorage.getItem("zanr"+j));
                            localStorage.setItem("kup_godina_proizvodnje"+brojac1,localStorage.getItem("godina_proizvodnje"+j));
                            localStorage.setItem("kup_broj_raspolozivih_primeraka"+brojac1,localStorage.getItem("broj_raspolozivih_primeraka"+j));
                            localStorage.setItem("kup_reziser"+brojac1,localStorage.getItem("reziser"+j));
                            //console.log("ovde")
                            brojac1+=1;
                            //console.log("ovde")
                        };
                    };
                }
                else{
                    spen.innerHTML=" ";
                    spen.style.color="red";
                }
            }
        };
        //console.log("ovde")
        for(let i=0;i<brojac;i++){
            //console.log("ovde")
            if(localStorage.getItem("kup_indeksi_filmova"+i)==null || localStorage.getItem("kup_indeksi_filmova"+i)==undefined){
                localStorage.setItem("kup_slike"+i," ");
                localStorage.setItem("kup_zanr"+i," ");
                localStorage.setItem("kup_godina_proizvodnje"+i," ");
                localStorage.setItem("kup_broj_raspolozivih_primeraka"+i," ");
                localStorage.setItem("kup_reziser"+i," ");
                localStorage.setItem("kup_indeksi_filmova"+i," ");
            }
            //console.log("ovde")
        }
        

        let filmovi=document.querySelectorAll("div")[0];
        /*function reload(){
            if(window.confirm()){
                for(let i=0;i<brojac;i++){
                    for(let j=0;j<indeksi_izbrisanih.length;i++){
                        console.log("ima izbrisanih");
                        if(i==indeksi_izbrisanih[j]){
                            console.log("jedan preskocen");
                            let film=filmovi.getElementsByClassName("div_film")[j];
                            //let unesite_tekst=confirm("Ako reload-ujete stranicu, stavke korpe ce biti izbrisane");
                            film.innerHTML=" ";
                            let id_racuna=String(localStorage.getItem("kup_indeks_racun"+j));
                            localStorage.setItem("racun"+Number(localStorage.getItem("kup_indeks_racun"+j))," ");
                            localStorage.setItem("kup_ime"+j," ");
                            localStorage.setItem("kup_porucen_film"+j," ");
                            localStorage.setItem("kup_porucena_kolicina"+j," ");
                            localStorage.setItem("kup_cena_po_filmu"+j," ");
                            localStorage.setItem("kup_ukupna_cena"+j," ");
                            localStorage.setItem("racun"+Number(localStorage.getItem("kup_indeks_racuna"+j))," ");
                            localStorage.setItem("kup_indeks_racuna"+j," ");
                            localStorage.setItem("kup_slike"+j," ");
                            localStorage.setItem("kup_zanr"+j," ");
                            localStorage.setItem("kup_godina_proizvodnje"+j," ");
                            localStorage.setItem("kup_broj_raspolozivih_primeraka"+j," ");
                            localStorage.setItem("kup_reziser"+j," ");
                            localStorage.setItem("kup_indeksi_filmova"+j," ");
                            return "Ako reload-ujete stranicu, stavke korpe ce biti izbrisane";
                        }
                    }
                }
            }
        }*/

        /*document.addEventListener("keydown", function (e) {
            if (e.key == "F5" || e.key == "F11" || 
                (e.ctrlKey == true && (e.key == 'r' || e.key == 'R')) || 
                e.keyCode == 116 || e.keyCode == 82) {

                    e.preventDefault();
            }
        });*/

        /*window.onbeforeunload = function() {
            this.reload();
            return "Leave this page ?No";
        }*/

        /*let body=document.querySelector("body");
        body.addEventListener("beforeunload",function(){
            reload();
            return "haha";
        });
        body.onbeforeunload=function(){
            reload();
            return "haha";
        }*/


        let promena=0;
        //console.log("ovde")
        for(let i=0;i<brojac;i++){
            if(localStorage.getItem("kup_slike"+i)!=null && localStorage.getItem("kup_slike"+i)!=undefined){
                if(localStorage.getItem("kup_slike"+i)!=" "){
                    //console.log()
                    div_filmovi.innerHTML+="<div class='div_film' value='010'><p class='p_slika'>"+String(localStorage.getItem("kup_slike"+localStorage.getItem("kup_indeks_brojaca"+i)))+"</p><p class='detalji_p'><label>Naziv: </label><span class='span_detalji_filma'>"+String(localStorage.getItem("kup_porucen_film"+localStorage.getItem("kup_indeks_brojaca"+i)))+"</span></p><p class='detalji_p'><label>Kolicina:</label><input type='number' min='0' class='input_kolicina' value='"+String(localStorage.getItem("kup_porucena_kolicina"+localStorage.getItem("kup_indeks_brojaca"+i)))+"'>"+
                    "<button class='nova_kolicina'>Promeni kolicinu</button><span id='prevelika_kolicina'></span><br></p><p class='detalji_p'><label>Cena po filmu:</label><input type='number' min='0' value='"+String(localStorage.getItem("kup_cena_po_filmu"+localStorage.getItem("kup_indeks_brojaca"+i)))+"' class='input_kolicina' disabled='true'><b>din.</b></p><p class='detalji_p'><label>Ukupna cena:</label><input type='number' min='0' class='input_kolicina' value='"+String(localStorage.getItem("kup_ukupna_cena"+localStorage.getItem("kup_indeks_brojaca"+i)))+"' disabled='true'><b>din.</b>"+
                    "</p><p class='detalji_p'><br><label>Broj jos raspolozivih primeraka:</label><input type='number' min='0' class='input_kolicina' disabled='true' value='"+String(localStorage.getItem("kup_broj_raspolozivih_primeraka"+localStorage.getItem("kup_indeks_brojaca"+i)))+"'></p><br><button class='dugme_za_brisanje'>Izbrisi</button><hr></p></div>";
                } // u slucaju da zatreba reziser <label>Reziser:</label><span class='span_detalji_filma'>"+String(localStorage.getItem("kup_reziser"+localStorage.getItem("kup_indeks_brojaca"+i)))+"</span>
            }
            else{
                ////console.log("GRESKA--ili je null ili undefined !!!");
            }
        }

        ////console.log("ovde")
        let dugme_id=[];
        let id_indeks=0;
        let id_inputa=[];
        let input=[];
        let input1=0;
        let input2=0;
        let spen_ukupna_cena=document.getElementsByClassName("p_ukupna_cena")[0];

        function suma_ukupnih_cena(){
            let suma=0;
            let filmovi=document.querySelectorAll("div")[0];
            for(let i=0;i<brojac;i++){
                if(filmovi.querySelectorAll("div")[i]==undefined){
                ////console.log(filmovi.querySelectorAll("div")[i])
                ////console.log("undefined ----------")
                }
                else{
                    ////console.log("prosao")
                }
                    if(filmovi.querySelectorAll("div")[i]!=undefined){
                        //console.log(filmovi.querySelectorAll("div")[i])
                        let film=filmovi.querySelectorAll("div")[i];
                        if(film.querySelectorAll("input")[2]!=undefined){
                            let ukupna_cena=Number(film.querySelectorAll("input")[2].value);
                            suma+=ukupna_cena;
                        }
                        else{
                            //console.log("jedan undef");
                        }
                    }
                    //console.log(filmovi.querySelectorAll("div")[i])
            }
            spen_ukupna_cena.innerHTML="Ukupna cena: "+suma+"din.";
            localStorage.setItem("cena_za_sve",suma);
        }
        suma_ukupnih_cena();

        //console.log(indeks_brojaca)
        for(let i=0;i<brojac;i++){
            if(filmovi.querySelectorAll("div")[i]!=null && filmovi.querySelectorAll("div")[i]!=undefined){
                
                let filmovi=document.querySelectorAll("div")[0];
                let film=filmovi.querySelectorAll("div")[i];
                let izbrisi=film.querySelectorAll("button")[1];
                izbrisi.addEventListener("click",function(){
                    film.innerHTML=" ";
                   
                    let x=Number(localStorage.getItem("kup_broj_raspolozivih_primeraka"+localStorage.getItem("kup_indeks_brojaca"+i)));
                    let y=Number(localStorage.getItem("kup_porucena_kolicina"+localStorage.getItem("kup_indeks_brojaca"+i)));
                    let ostaje=x+y;
                    localStorage.setItem("broj_raspolozivih_primeraka"+localStorage.getItem("kup_indeksi_filmova"+i),ostaje)
                    localStorage.removeItem("kup_ime"+localStorage.getItem("kup_indeks_brojaca"+i));
                    localStorage.removeItem("kup_porucen_film"+localStorage.getItem("kup_indeks_brojaca"+i));
                    localStorage.removeItem("kup_porucena_kolicina"+localStorage.getItem("kup_indeks_brojaca"+i));
                    localStorage.removeItem("kup_cena_po_filmu"+localStorage.getItem("kup_indeks_brojaca"+i));
                    localStorage.removeItem("kup_ukupna_cena"+i);
                    localStorage.removeItem("racun"+Number(localStorage.getItem("kup_indeks_racuna"+localStorage.getItem("kup_indeks_brojaca"+i))));
                    localStorage.removeItem("kup_indeks_racuna"+localStorage.getItem("kup_indeks_brojaca"+i));
                    localStorage.removeItem("kup_slike"+localStorage.getItem("kup_indeks_brojaca"+i));
                    localStorage.removeItem("kup_zanr"+localStorage.getItem("kup_indeks_brojaca"+i));
                    localStorage.removeItem("kup_godina_proizvodnje"+localStorage.getItem("kup_indeks_brojaca"+i));
                    localStorage.removeItem("kup_broj_raspolozivih_primeraka"+localStorage.getItem("kup_indeks_brojaca"+i));
                    localStorage.removeItem("kup_reziser"+localStorage.getItem("kup_indeks_brojaca"+i));
                    localStorage.removeItem("kup_indeksi_filmova"+localStorage.getItem("kup_indeks_brojaca"+i));
                    indeksi_izbrisanih.push(indeks_brojaca[i]);
                    localStorage.removeItem("kup_indeks_brojaca"+localStorage.getItem("kup_indeks_brojaca"+i));
                    location.reload;
                    suma_ukupnih_cena();
                })
            
            /*}
            else{
                //console.log("jedan manje..");
            }*/
        }
    }

        for(let i=0;i<brojac;i++){
            if(localStorage.getItem("kup_indeks_brojaca"+i)!=" " && filmovi.querySelectorAll("div")[0]!=undefined){
                //if(filmovi.getElementsByClassName("div_film")[i]!=" "){}
                let film=filmovi.querySelectorAll("div")[i];
                
                let dugme=film.querySelectorAll("button")[0];
                if(localStorage.getItem("kup_indeksi_filmova"+i)!=" "){
                let pun=Number(localStorage.getItem("broj_raspolozivih_primeraka"+String(localStorage.getItem("kup_indeksi_filmova"+i))))
                pun=pun+Number(localStorage.getItem("kup_porucena_kolicina"+i));
                localStorage.setItem("pun",Number(pun));
                dugme.addEventListener("click",function(){
                        let input=film.getElementsByClassName("input_kolicina")[0].value;
                        let spen1=film.querySelectorAll("span")[0];
                        
                        let pun=Number(localStorage.getItem("pun"));
                        let treci=Number(input);
                        let ostaje=pun-treci;
                        
                        if(ostaje<0){
                            spen1.innerHTML="Nemamo tu kolicinu na stanju";
                            spen1.style.color="red";
                            return;
                        }
                        else{
                            localStorage.setItem("broj_raspolozivih_primeraka"+Number(localStorage.getItem("kup_indeksi_filmova"+i)),Number(ostaje));
                            let racun_objekat=localStorage.getItem("racun"+Number(localStorage.getItem("kup_indeks_racuna"+i)));
                            let racun_niz=racun_objekat.split("(~$2853#)");
                            //console.log(racun_niz);
                            racun_niz.shift();
                            //console.log(racun_niz);
                            racun_niz[2]=input;
                            racun_objekat1="";
                            let ukupna_cena=(Number(input) * Number(film.querySelectorAll("input")[1].value));
                            //console.log(ukupna_cena);
                            //console.log(input);
                            //console.log(film.querySelectorAll("input")[1].value);
                            racun_niz[4]=ukupna_cena;
                            //console.log(racun_niz);
                            for(let a=0;a<5;a++){
                                racun_objekat1+="(~$2853#)"+racun_niz[a];
                                //console.log(a);
                            }
                            //console.log(racun_objekat1);
                            //console.log(ostaje);
                            localStorage.setItem("kup_broj_raspolozivih_primeraka"+i,Number(ostaje));
                            film.querySelectorAll("input")[3].value=localStorage.getItem("kup_broj_raspolozivih_primeraka"+i);
                            film.querySelectorAll("input")[2].value=ukupna_cena
                            //racun_objekat1.unshift("")
                            localStorage.setItem("racun"+i,racun_objekat1);
                            //console.log(localStorage.getItem("racun"+i));
                            //console.log(racun_objekat1)
                            //location.reload();
                            
                            suma_ukupnih_cena();
                            }
                        }
                    )
                }
            }
            else{
                //console.log("Nadjen jedan izbrisan");
            }
        }
        
        //__________________________________________________________________________________________________________________________
        function kraj(){
            let div_filmovi=document.querySelectorAll("div")[0];
            let objekat=JSON.parse(localStorage.getItem("objekat_racuna"));
            //console.log(objekat);
            let ime="";
            let porucen_film="";
            let porucena_kolicina="";
            let cena_po_filmu="";
            let ukupna_za_film="";
            let cena_za_sve=0;
            for(let i=0;i<brojac;i++){
                //console.log("ovde3");
                if(localStorage.getItem("kup_ime"+i)!=null && localStorage.getItem("kup_ime"+i)!=undefined && localStorage.getItem("kup_ime"+i)!=" " && div_filmovi.getElementsByClassName("div_film")[i]!=null && div_filmovi.getElementsByClassName("div_film")[i]!=undefined && div_filmovi.getElementsByClassName("div_film")[i]!=" "){
                    //console.log("ovde4");
                    let div_film=div_filmovi.getElementsByClassName("div_film")[i];
                    ime=localStorage.getItem("kup_ime"+localStorage.getItem("kup_indeks_brojaca"+i));
                    porucen_film+="(~$2853#)"+String(localStorage.getItem("kup_porucen_film"+localStorage.getItem("kup_indeks_brojaca"+i)));
                    porucena_kolicina+="(~$2853#)"+String(localStorage.getItem("kup_porucena_kolicina"+localStorage.getItem("kup_indeks_brojaca"+i)));
                    cena_po_filmu+="(~$2853#)"+String(localStorage.getItem("kup_cena_po_filmu"+localStorage.getItem("kup_indeks_brojaca"+i)));
                    ukupna_za_film+="(~$2853#)"+String(localStorage.getItem("kup_ukupna_cena"+localStorage.getItem("kup_indeks_brojaca"+i)));
                    cena_za_sve=localStorage.getItem("cena_za_sve");
                    brojac_obj=localStorage.getItem("obj_length");                    
                    //localStorage.setItem("obj_length",Number(localStorage.getItem("obj_length")+1)
                }
            }
            //let obj=('"'+ime+'":{"porucen_film":'+porucen_film+',"porucena_kolicina":'+porucena_kolicina+',"cena_po_filmu":'+cena_po_filmu+',"ukupna_za_film":'+ukupna_za_film+',"cena_za_sve":'+cena_za_sve+'}');
            objekat[ime+localStorage.getItem("obj_length")]={"ime":ime,"porucen_film":porucen_film,"porucena_kolicina":porucena_kolicina,"cena_po_filmu":cena_po_filmu,"ukupna_za_film":ukupna_za_film,"cena_za_sve":cena_za_sve};
            localStorage.setItem("obj_length",Number(localStorage.getItem("obj_length"))+1)
            for(let j=0;j<Number(localStorage.getItem("obj_length"));j++){
                //console.log(objekat[ime+j]);
            }
            localStorage.setItem("objekat_racuna",JSON.stringify(objekat));

            div_filmovi.innerHTML=" ";
            for(let j=0;j<brojac;j++){
                
                //if(div_filmovi.querySelectorAll("div")[j]!=null 
                //&& div_filmovi.querySelectorAll("div")[j]!=undefined){
                    let div_film=div_filmovi.getElementsByClassName("div_film")[j];
                    if(div_film==undefined){

                    }
                    else{
                        div_film.innerHTML=" ";
                    }
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
                    localStorage.setItem("racuni_length",0);
                    //console.log(localStorage.getItem("kup_ime"+j));
                    //console.log(typeof(localStorage.getItem("kup_ime"+j)));
                    window.location.reload;
                //}
            }
            location.reload();
            suma_ukupnih_cena();
            if(racuni_length==0){
                let div=document.querySelectorAll("div")[2];
                div.innerHTML="<h1>Trenutno nemate filmova u korpi</h1>";
                div.style.color="red";
            }
            location.reload();
        };
    }
}
else{
    let body=document.querySelector("body");
    body.innerHTML="<h1>Ova stranica je samo za prijavljene kupce</h1>";
    body.innerHTML+="<br><h3>Ako zelite da se prijavite mozete otici na stranicu <a href='Forma_za_prijavu.html' class='niste_ulogovani'>Forma za prijavu</a></h3>";
    //body.style.color="red";
}
