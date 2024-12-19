// Lista produselor grupate pe categorii
const produse = {
    femei: [
        { denumire: "Tricou_Guess_Krissy_V4BI05_I3Z14_Bej_Regular_Fit", pret: 159, marimi: "XXS,XS,S,M,L,XL,XXL,XXXL", stoc: "disponibil" },
        { denumire: "Tricou_Levis", pret: 159, marimi: "XXS,XS,S,M,L,XL,XXL,XXXL", stoc: "disponibil" },
        { denumire: "Tricou_Champion", pret: 50, marimi: "XXS,XS,S,M,L,XL,XXL,XXXL", stoc: "disponibil" },
    ],
    barbati: [
        { denumire: "Puma, Tricou de bumbac cu imprimeu logo Essential", pret: 70, marimi: "XS,S,M,L,XL,XXL,XXXL", stoc: "disponibil" },
        { denumire: "Tricou The Original 56605-0017 Bleumarin Regular Fit", pret: 90, marimi: "XXS,XS,S,M,L,XL,XXL,XXXL", stoc: "disponibil" },
        { denumire: "Calvinm Klein", pret: 100, marimi: "XXS,XS,S,M,L,XL,XXL,XXXL", stoc: "indisponibil" },
    ],
    copii: [
        { denumire: "SHORT SLEEVE - Tricou polo", pret: 94, marimi: "98,104,110,122,128,134,140,146,152,158,164,170,176", stoc: "disponibil" },
        { denumire: "Set 2 tricouri UK0UK00073 Colorat Regular Fit", pret: 129, marimi: "98,104,110,122,128,134,140,146,152,158,164,170,176", stoc: "disponibil" },
        { denumire: "JORDAN TRICOU JORDAN ESSENTIALS TEE GIRL", pret: 90, marimi: "98,104,110,122,128,134,140,146,152,158,164,170,176", stoc: "indisponibil" },
    ],
};

// 1. Verificare disponibilitate stoc
function verificaStoc(denumireProdus) {
    for (const categorie in produse) {
        const produs = produse[categorie].find(p => p.denumire === denumireProdus);
        if (produs) {
            console.log(`Produsul "${produs.denumire}" este ${produs.stoc}.`);
            return;
        }
    }
    console.log(`Produsul "${denumireProdus}" nu a fost găsit.`);
}

// 2. Adăugare produs la o categorie
function adaugaProdus(categorie, produsNou) {
    if (produse[categorie]) {
        produse[categorie].push(produsNou);
        console.log(`Produsul "${produsNou.denumire}" a fost adăugat în categoria "${categorie}".`);
    } else {
        console.log(`Categoria "${categorie}" nu există.`);
    }
}

// 3. Ștergere produs dintr-o categorie
function stergeProdus(categorie, denumireProdus) {
    if (produse[categorie]) {
        const initialLength = produse[categorie].length;
        produse[categorie] = produse[categorie].filter(p => p.denumire !== denumireProdus);

        if (produse[categorie].length < initialLength) {
            console.log(`Produsul "${denumireProdus}" a fost șters din categoria "${categorie}".`);
        } else {
            console.log(`Produsul "${denumireProdus}" nu a fost găsit în categoria "${categorie}".`);
        }
    } else {
        console.log(`Categoria "${categorie}" nu există.`);
    }
}

// Testare funcții
console.log("=== Verificare Stoc ===");
verificaStoc("Calvinm Klein");
verificaStoc("Produs Inexistent");

console.log("\n=== Adăugare Produs ===");
adaugaProdus("femei", { denumire: "Tricou_Nou", pret: 200, marimi: "S,M,L", stoc: "disponibil" });
console.log(produse.femei);

console.log("\n=== Ștergere Produs ===");
stergeProdus("femei", "Tricou_Champion");
console.log(produse.femei);
stergeProdus("copii", "Produs Inexistent");
