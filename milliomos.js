let aktualisKerdes = 0;
let helyesValaszok = 0;
let hibasValaszok = 0;
let felezesHasznalva = false;
let telefonHasznalva = false;
let eletVisszaHasznalva = false;
const eletekElemek = [document.getElementById("elet1"), document.getElementById("elet2"), document.getElementById("elet3")];

const kerdesek = [
    {
        kerdes: "Ki írta a Szózatot ?",
        valaszok: [
            { valasz: "Vörösmarty Mihály", helyes: true },
            { valasz: "Kölcsey Ferenc", helyes: false },
            { valasz: "Petőfi Sándor", helyes: false },
            { valasz: "Détár Ferenc", helyes: false }
        ]
    },
    {
        kerdes: "Az alábbiak közül melyik periféria NEM bemeneti ?",
        valaszok: [
            { valasz: "Monitor", helyes: true },
            { valasz: "Billentyűzet", helyes: false },
            { valasz: "Egér", helyes: false },
            { valasz: "Mikrofon", helyes: false }
        ]
    },
    {
        kerdes: "Ki írta a Pál utcai fiúkat ?",
        valaszok: [
            { valasz: "Móra Ferenc", helyes: false },
            { valasz: "Jókai Mór", helyes: false },
            { valasz: "Molnár Ferenc", helyes: true },
            { valasz: "Gazi Tamás", helyes: false }
        ]
    },
    {
        kerdes: "Milyen elnevezést használnak az AA betűjelű elemre ?",
        valaszok: [
            { valasz: "mikro", helyes: false },
            { valasz: "góliát", helyes: false },
            { valasz: "bébi", helyes: false },
            { valasz: "ceruza", helyes: true }
        ]
    },{
        kerdes: "Melyik uralkodó zsoldosseregét képezte a fekete sereg ?",
        valaszok: [
            { valasz: "Rákóczi Ferenc", helyes: false },
            { valasz: "Hunyadi Mátyás", helyes: true },
            { valasz: "Könyves Kálmán", helyes: false },
            { valasz: "Nagy Lajos", helyes: false }
        ]
    },
    {
        kerdes: "Melyik mese szereplője a Fiona hercegnő ?",
        valaszok: [
            { valasz: "Kishableány", helyes: false },
            { valasz: "Hamupipőke", helyes: false },
            { valasz: "Shrek", helyes: true },
            { valasz: "Szépség és a szörnyeteg", helyes: false }
        ]
    },
    {
        kerdes: "Melyik szín árnyalata az okker ?",
        valaszok: [
            { valasz: "Sárga", helyes: true },
            { valasz: "Piros", helyes: false },
            { valasz: "Zöld", helyes: false },
            { valasz: "Kék", helyes: false }
        ]
    },
    {
        kerdes: "Melyik híres animemiből származik az Uchiha vezetéknév ?",
        valaszok: [
            { valasz: "Yu-Gi-Oh", helyes: false },
            { valasz: "JoJo's bizarre advantures", helyes: false },
            { valasz: "Attack on titan", helyes: false },
            { valasz: "Naruto", helyes: true }
        ]
    },
    {
        kerdes: "Mi van a tarisznyában az Érik a szőlő... kezdetű dalban ?",
        valaszok: [
            { valasz: "Mák", helyes: false },
            { valasz: "Káposzta", helyes: false },
            { valasz: "Vöröshagyma", helyes: true },
            { valasz: "Pogácsa", helyes: false }
        ]
    },
    {
        kerdes: "Melyik hónap a hullócsillagok hónapja ?",
        
        valaszok: [
            { valasz: "Augusztus", helyes: true },
            { valasz: "December", helyes: false },
            { valasz: "Április", helyes: false },
            { valasz: "Január", helyes: false }
        ]
    },

    // nehezebb

    {
        kerdes: "Milyen intézmény a Harry Potterben Azkaban  ?",
        valaszok: [
            { valasz: "Múzeum", helyes: false },
            { valasz: "Iskola", helyes: false },
            { valasz: "Börtön", helyes: true },
            { valasz: "Stadion", helyes: false }
        ]
    },
    {
        kerdes: "Ki volt az árvízi hajós ?",
        
        valaszok: [
            { valasz: "Wesselényi Miklós", helyes: true },
            { valasz: "Vasvári Pál", helyes: false },
            { valasz: "Noé", helyes: false },
            { valasz: "Széchenyi István", helyes: false }
        ]
    },
    {
        kerdes: "Milyen ital a somersby ?",
        valaszok: [
            { valasz: "Cider", helyes: true },
            { valasz: "Sör", helyes: false },
            { valasz: "Pálinka", helyes: false },
            { valasz: "Pezsgő", helyes: false }
        ]
    },
    {
        kerdes: "Hány fok egy stoptábla belső szögeinek összege ?",
        
        valaszok: [
            { valasz: "1080", helyes: true },
            { valasz: "1200", helyes: false },
            { valasz: "360", helyes: false },
            { valasz: "720", helyes: false }
        ]
    },
    {
        kerdes: "Kik a madagaszkár pingvinjei ?",
        valaszok: [
            { valasz: "Kapitány/Kowalszky/Közlegény/Alex", helyes: false },
            { valasz: "Dave/Kowalszky/Közlegény/Rico", helyes: false },
            { valasz: "Kapitány/Mort/Közlegény/Rico", helyes: false },
            { valasz: "Kapitány/Kowalszky/Közlegény/Rico", helyes: true }
        ]
    },
    {
        kerdes: "Ki volt a karóba húzó Vlad másnéve? ?",
        
        valaszok: [
            { valasz: "Putin", helyes: false },
            { valasz: "Frank Einstein", helyes: false },
            { valasz: "Drakula", helyes: true },
            { valasz: "Hitler", helyes: false }
        ]
    },
    {
        kerdes: "Hány film van összesen jelenleg a démonok között univerzumban ?",
        valaszok: [
            { valasz: "7", helyes: false },
            { valasz: "11", helyes: false },
            { valasz: "9", helyes: true },
            { valasz: "3", helyes: false }
        ]
    },
    {
        kerdes: "Legkevesebb hány bankjeggyel lehet kifizetni 38,500ft-ot ?",
        
        valaszok: [
            { valasz: "6", helyes: true },
            { valasz: "7", helyes: false },
            { valasz: "8", helyes: false },
            { valasz: "9", helyes: false }
        ]
    },
    {
        kerdes: "Melyik mese szereplője gombóc artúr?",
        valaszok: [
            { valasz: "Spongyabob", helyes: false },
            { valasz: "Pom Pom", helyes: true },
            { valasz: "Süsü", helyes: false },
            { valasz: "Tom & Jerry ", helyes: false }
        ]
    },
    {
        kerdes: "Folytasd! Kidobják az ajtón...",
        
        valaszok: [
            { valasz: "Átmegy a szomszédba", helyes: false },
            { valasz: "Bemászik a kéményen", helyes: false },
            { valasz: "Soha nem tér vissza", helyes: false },
            { valasz: "Bemegy az ablakon", helyes: true }
        ]
    },

    //nehezebb
    
    {
        kerdes: "Hány megye határolja a balatont ?",
        valaszok: [
            { valasz: "4", helyes: false },
            { valasz: "3", helyes: true },
            { valasz: "5", helyes: false },
            { valasz: "11", helyes: false }
        ]
    },
    {
        kerdes: "Mi a legnagyobb emberi izom ?",
        
        valaszok: [
            { valasz: "Comb", helyes: true },
            { valasz: "Far", helyes: false },
            { valasz: "Hát", helyes: false },
            { valasz: "Mell", helyes: false }
        ]
    },
    {
        kerdes: "Mennyi forintom marad, ha ezer forint felét elköltöm de annak a felét vissza kapom ?",
        valaszok: [
            { valasz: "1000Ft", helyes: false },
            { valasz: "500Ft", helyes: false },
            { valasz: "750Ft", helyes: true },
            { valasz: "Nem marad", helyes: false }
        ]
    },
    {
        kerdes: "Hány nap 13 hét ?",
        
        valaszok: [
            { valasz: "89", helyes: false },
            { valasz: "84", helyes: false },
            { valasz: "93", helyes: false },
            { valasz: "91", helyes: true }
        ]
    },
    {
        kerdes: "Hány hüvelyk egy láb ?",
        valaszok: [
            { valasz: "12 hüvelyk", helyes: true },
            { valasz: "9 hüvelyk", helyes: false },
            { valasz: "7 hüvelyk", helyes: false },
            { valasz: "16 hüvelyk", helyes: false }
        ]
    },
    {
        kerdes: "Hány sárkányt kell megölj LOL-ban, hogy spwanoljon az elder drake  ?",
        
        valaszok: [
            { valasz: "5", helyes: false },
            { valasz: "3", helyes: false },
            { valasz: "4", helyes: false },
            { valasz: "7", helyes: true }
        ]
    },
    {
        kerdes: "Hány meccsből áll egy provisional ?",
        valaszok: [
            { valasz: "3", helyes: false },
            { valasz: "5", helyes: false },
            { valasz: "10", helyes: true },
            { valasz: "7", helyes: false }
        ]
    },
    {
        kerdes: "Melyik karakter nincs benne a Legends Of Runterrában mint hős kártya az alábbiak közül ? ",
        
        valaszok: [
            { valasz: "Akali", helyes: true },
            { valasz: "Yuumi", helyes: false },
            { valasz: "Taliyah", helyes: false },
            { valasz: "Nami", helyes: false }
        ]
    },
    {
        kerdes: "Mennyi a fény terjedési sebessége levegőben, légüres térben ?",
        valaszok: [
            { valasz: "300,000 Km/h", helyes: false },
            { valasz: "30,000 M/s", helyes: false },
            { valasz: "150,000 M/s", helyes: false },
            { valasz: "300,000 Km/s", helyes: true }
        ]
    },
    {
        kerdes: "Milyen zöldséget eszik Gangplank mindig a játékban ?",
        
        valaszok: [
            { valasz: "Banán", helyes: false },
            { valasz: "Alma", helyes: false },
            { valasz: "Narancs", helyes: false },
            { valasz: "Ezek közül egyik sem...", helyes: true }
        ]
    },

// nehezebb
//sadasd
    {
        kerdes: "Melyik római isten volt a háború és a győzelem istene?",
        valaszok: [
            { valasz: "Jupiter", helyes: false },
            { valasz: "Mars", helyes: true },
            { valasz: "Neptunus", helyes: false },
            { valasz: "Vénusz", helyes: false }
        ]
    },
    {
        kerdes: "Ki játszotta Harry Pottert  ?",
        
        valaszok: [
            { valasz: "Tom Felton", helyes: false },
            { valasz: "Rupert Grint", helyes: false },
            { valasz: "Tobey Meguier", helyes: false },
            { valasz: "Daniel Radcliffe", helyes: true }
        ]
    },
    {
        kerdes: "Hány éves Azahriah ?",
        valaszok: [
            { valasz: "22", helyes: true },
            { valasz: "20", helyes: false },
            { valasz: "25", helyes: false },
            { valasz: "18", helyes: false }
        ]
    },
    {
        kerdes: "Az alábbiak közül melyik agent NEM controller ?",
        
        valaszok: [
            { valasz: "Clove", helyes: false },
            { valasz: "Brimstone", helyes: false },
            { valasz: "Omen", helyes: false },
            { valasz: "Reyna", helyes: true }
        ]
    },
    {
        kerdes: "Ki a legutolsó a névsorban ?",
        valaszok: [
            { valasz: "Zsolt", helyes: true },
            { valasz: "Levente", helyes: false },
            { valasz: "István", helyes: false },
            { valasz: "Marcell", helyes: false }
        ]
    },
    {
        kerdes: "Mi Egyiptom fővárosa jelenleg ?",
        
        valaszok: [
            { valasz: "Moszkva", helyes: false },
            { valasz: "Kairó", helyes: true },
            { valasz: "Memphisz", helyes: false },
            { valasz: "Budapest", helyes: false }
        ]
    },
    {
        kerdes: "Hol lakik Sarka Levente ?",
        valaszok: [
            { valasz: "Otthol", helyes: true },
            { valasz: "Fábiánházán", helyes: true },
            { valasz: "A Házában", helyes: true },
            { valasz: "Egy házban", helyes: true }
        ]
    },
    {
        kerdes: "Hány könyvet tartalmaz az újszovetseg?",
        
        valaszok: [
            { valasz: "27", helyes: true },
            { valasz: "36", helyes: false },
            { valasz: "66", helyes: false },
            { valasz: "24", helyes: false }
        ]
    },
    {
        kerdes: "Hogy hívták a verdákból mcqueen kamionját?",
        valaszok: [
            { valasz: "Hengerfej", helyes: false },
            { valasz: "Mack", helyes: true },
            { valasz: "Jack", helyes: false },
            { valasz: "saliven", helyes: false }
        ]
    },
    {
        kerdes: "Mennyit sebez headibe a vandal ?",
        
        valaszok: [
            { valasz: "165", helyes: false },
            { valasz: "155", helyes: false },
            { valasz: "150", helyes: false },
            { valasz: "160", helyes: true }
        ]
    },

   
];


const kerdesElem = document.querySelector(".kerdes");
const valaszokElem = document.querySelector(".valaszok");
const eredmenyElem = document.querySelector(".eredmeny");
const szamlaloElem = document.querySelector(".szamlalo");
const nehezsegElem = document.querySelector(".nehezseg");

function ujKerdes() {
    if (aktualisKerdes < kerdesek.length) {
        // Hányadik kérdés jelenik meg
        szamlaloElem.textContent = `${aktualisKerdes + 1}. kérdés`;
        
        // Minden 10. kérdés után nehezebb kérdések üzenet megjelenítése
        if ((aktualisKerdes + 1) % 10 === 1 && aktualisKerdes !== 0) {
            nehezsegElem.textContent = "Nehezebb kérdések következnek!";
        } else {
            nehezsegElem.textContent = "";  // Ha nem nehezebb kérdés jön, üzenet eltüntetése
        }

        // Kérdés és válaszok betöltése
        const kerdes = kerdesek[aktualisKerdes];
        kerdesElem.textContent = kerdes.kerdes;
        valaszokElem.innerHTML = "";
        kerdes.valaszok.forEach((valasz, index) => {
            const div = document.createElement("div");
            div.textContent = valasz.valasz;
            div.classList.add("valasz");
            div.dataset.correct = valasz.helyes;
            div.addEventListener("click", ellenorizValasz);
            valaszokElem.appendChild(div);
        });
    } else {
        vegJatek();
    }
}



function ellenorizValasz(event) {
    const valaszElem = event.target;
    const helyes = valaszElem.dataset.correct === "true";

    if (helyes) {
        eredmenyElem.textContent = "Helyes válasz!";
        helyesValaszok++;
    } else {
        hibasValaszok++;
        eletekElemek[hibasValaszok - 1].style.display = "none";  // Egy élet eltávolítása
        eredmenyElem.textContent = "Helytelen válasz!";
        
        if (hibasValaszok >= 3) {
            vegJatek();
            return;
        }
    }

    eredmenyElem.style.display = "block";
    setTimeout(() => {
        aktualisKerdes++;
        ujKerdes();
        eredmenyElem.style.display = "none";
    }, 2000);
}

function vegJatek() {
    kerdesElem.textContent = "A játék véget ért!";
    valaszokElem.innerHTML = "";
    eredmenyElem.textContent = `Összesen ${helyesValaszok} kérdésre válaszoltál helyesen!`;
    eredmenyElem.style.display = "block";
}

// Felezés gomb
document.getElementById("felezes").addEventListener("click", () => {
    if (felezesHasznalva) return;  // Ha már használták, ne működjön újra
    felezesHasznalva = true;  // Beállítjuk, hogy a felezés már használatban van

    const valaszok = document.querySelectorAll(".valasz");
    let hibasValaszok = [];

    // Végigmegyünk az összes válaszon, és összegyűjtjük a helyteleneket
    valaszok.forEach(valasz => {
        if (valasz.dataset.correct === "false") {
            hibasValaszok.push(valasz);
        }
    });

    // Ellenőrizzük, hogy van-e legalább két hibás válasz
    if (hibasValaszok.length >= 2) {
        // Véletlenszerűen kiválasztunk két hibás választ és eltüntetjük őket
        for (let i = 0; i < 2; i++) {
            const randomIndex = Math.floor(Math.random() * hibasValaszok.length);
            const hibasValasz = hibasValaszok[randomIndex];
            hibasValasz.style.display = "none";  // Eltüntetjük a hibás választ

            // Eltávolítjuk a kiválasztott elemet a hibás válaszok listájából, hogy ne válasszuk ki újra
            hibasValaszok.splice(randomIndex, 1);
        }
    }

    // A gomb letiltása
    document.getElementById("felezes").classList.add("disabled");
});

// Telefonos segítség gomb
document.getElementById("telefon").addEventListener("click", () => {
    if (telefonHasznalva) return;  // Ha már használták, nem csinál semmit
    telefonHasznalva = true;  // Megjelöli, hogy a telefonos segítséget használták

    const valaszok = document.querySelectorAll(".valasz");
    let helyesValasz = null;
    valaszok.forEach(valasz => {
        if (valasz.dataset.correct === "true") {
            helyesValasz = valasz;
        }
    });

    // A telefonos segítség megmutatja a helyes választ
    alert(` A helyes válasz: ${helyesValasz.textContent}`);

    // A gomb letiltása
    document.getElementById("telefon").classList.add("disabled");
});





// Életvisszaállítás gomb
document.getElementById("eletVissza").addEventListener("click", () => {
    if (eletVisszaHasznalva || hibasValaszok === 0) return;  // Ha már használták vagy nincs élet elveszítve, nem csinál semmit
    eletVisszaHasznalva = true;  // Megjelöli, hogy az életvisszaállítást használták

    // Visszaállítja az utoljára elvesztett életet
    hibasValaszok--;
    eletekElemek[hibasValaszok].style.display = "inline-block";  // Az elveszett élet újra látható lesz

    // A gomb letiltása
    document.getElementById("eletVissza").classList.add("disabled");
});

ujKerdes();  // Kezdő kérdés betöltése

document.getElementById("felezes").addEventListener("click", () => {
    if (felezesHasznalva) return;  // Ha már használták, nem csinál semmit
    felezesHasznalva = true;  // Megjelöli, hogy a felezést használták

    const valaszok = document.querySelectorAll(".valasz");
    let helyesValasz = null;
    let hibasValaszok = [];

    // Megkeressük a helyes választ és a helytelen válaszokat egy tömbbe tesszük
    valaszok.forEach(valasz => {
        if (valasz.dataset.correct === "true") {
            helyesValasz = valasz;
        } else {
            hibasValaszok.push(valasz);
        }
    });

    // Véletlenszerűen kiválasztunk két hibás választ és eltüntetjük
    for (let i = 0; i < 2; i++) {
        const randomIndex = Math.floor(Math.random() * hibasValaszok.length);
        const hibasValasz = hibasValaszok[randomIndex];
        hibasValasz.style.display = "none";

        // A kiválasztott elemet eltávolítjuk a tömbből, hogy ne válasszuk ki újra
        hibasValaszok.splice(randomIndex, 1);
    }

    // A gomb letiltása, hogy ne lehessen többször használni
    document.getElementById("felezes").classList.add("disabled");
});

ujKerdes();  // Első kérdés betöltése