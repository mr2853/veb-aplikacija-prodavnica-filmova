function registracija_korisnika(){
    let prvoPolje=document.querySelectorAll("input")[0].value;
    let drugoPolje=document.querySelectorAll("input")[1].value;
    let trecePolje=document.querySelectorAll("input")[2].value;
    let cetvrtoPolje=document.querySelectorAll("input")[3].value;
    let spen1=document.querySelectorAll("span")[0];
    let spen2=document.querySelectorAll("span")[1];
    let spen3=document.querySelectorAll("span")[2];
    let spen4=document.querySelectorAll("span")[3];
    let spen5=document.querySelectorAll("span")[4];
    //let btn1=document.getElementById("dugme_za_registraciju2");
    //let btn2=document.getElementById("zatvori");
    if(prvoPolje==""){
        spen1.innerHTML="Ovo polje ne sme da bude prazno";
        spen1.style.color="red";
        return;
    }
    else if(drugoPolje==""){
        spen2.innerHTML="Ovo polje ne sme da bude prazno";
        spen2.style.color="red";
        return;
    }
    else if(trecePolje==""){
        spen3.innerHTML="Ovo polje ne sme da bude prazno";
        spen3.style.color="red";
        return;
    }
    else if(cetvrtoPolje==""){
        spen4.innerHTML="Ovo polje ne sme da bude prazno";
        spen4.style.color="red";
        return;
    }

    //if ( /[/w/d]/.test(trecePolje)){
        for(let i=0;i<localStorage.getItem("a_length");i++){
            if(trecePolje==String(localStorage.getItem("a_korisnicko_ime"+i))){ //ovde uporedjujemo input vrednosti sa vrednostima iz administratori
                spen3.innerHTML="Korisnik vec postoji";
                return;
            }
        }
        for(let i=0;i<localStorage.getItem("k_length");i++){    
            if(trecePolje==String(localStorage.getItem("k_korisnicko_ime"+i))){ //ovde uporedjujemo input vrednosti sa vrednostima iz korisnici
                spen3.innerHTML="Korisnik vec postoji";
                return;
            }
        }
        
        localStorage.setItem("k_ime"+Number(localStorage.getItem("k_length")),prvoPolje);
        localStorage.setItem("k_prezime"+Number(localStorage.getItem("k_length")),drugoPolje);
        localStorage.setItem("k_korisnicko_ime"+Number(localStorage.getItem("k_length")),trecePolje);
        localStorage.setItem("k_lozinka"+Number(localStorage.getItem("k_length")),cetvrtoPolje);
        localStorage.setItem("k_tip"+Number(localStorage.getItem("k_length")),"user");
        localStorage.setItem("k_length",String(Number(Number(localStorage.getItem("k_length"))+1)));
        spen5.innerHTML="Sacuvan.";
        //console.log("registrovan");
        //console.log(localStorage.getItem("k_korisnicko_ime"+String(Number(Number(localStorage.getItem("k_length"))-1))));
    //}
}