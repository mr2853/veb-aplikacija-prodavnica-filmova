let id=[
    "000",
    "001",
    "002",
    "003",
    "004",
    "005",
    "006"
];
let slike_filmova=[
    "<img src='filmovi/slike/The intouchables.jpg'>",
    "<img src='filmovi/slike/Elite Squad.jpg'>",
    "<img src='filmovi/slike/Elite Squad The Enemy Within.jpg'>",
    "<img src='filmovi/slike/Reign Over Me.jpg'>",
    "<img src='filmovi/slike/American Beauty.jpg'>",
    "<img src='filmovi/slike/Seven pounds.jpg'>",
    "<img src='filmovi/slike/Fight Club.jpg'>",
    
];
let nazivi_filmova=[
    "The Intouchables",
    "Elite Squad",
    "Elite Squad: The Enemy Within",
    "Reign Over Me",
    "American Beauty",
    "Seven Pounds",
    "Fight Club",
]
let zanr=[
    "Comedy",
    "Action",
    "Action",
    "Drama",
    "Drama",
    "Drama",
    "Drama",
];
let godina_proizvodnje=[
    "2011",
    "2007",
    "2010",
    "2007",
    "1999",
    "2008",
    "1999",
];
let cena=[
    "700",
    "1700",
    "1200",
    "600",
    "500",
    "1000",
    "400",
];
let broj_raspolozivih_primeraka=[
    "10",
    "10",
    "10",
    "10",
    "10",
    "10",
    "10",
];
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
function ubaci(){
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
}

let btn=document.getElementById("ubaci_sadrzaj");
btn.onclick=ubaci;