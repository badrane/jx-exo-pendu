

for (i = 0 ; i<3; i++){

    var choix = prompt("choisie entre : pierre feuille et ciseaux")
    var ordi = Math.random();
    var choixOrdi;
    var moi = 0;
    var IA = 0;

    if (ordi < 0.33){
        choixOrdi = "ciseaux"
    } else if (ordi > 0.66){
        choixOrdi = "pierre"
    } else {
        choixOrdi = "feuille"
    }

    console.log(choixOrdi)

    if ( (choix === "pierre" && choixOrdi === "ciseaux") ||
    (choix === "ciseaux" && choixOrdi === "feuille") ||
    (choix === "feuille" && choixOrdi === "pierre")) {
    alert("gagné")
    moi = moi+1;
    console.log(moi)
    console.log(IA)
    } else if (choix === choixOrdi) {
        alert("égalité")
        console.log(moi)
        console.log(IA)
    } else {
        alert("perdu")
        IA = IA+1;
        console.log(IA)
        console.log(moi)
    }

}




// for (i = 0 ; i<3; i++){

//     function choix1() {
//         return choix="pierre"
//     }

//     function choix2() {
//         return choix="feuille"
//     }
//     function choix3() {
//         return choix="ciseaux"
//     }

//     var choix ;
//     var ordi = Math.random();
//     var choixOrdi;
//     var moi = 0;
//     var IA = 0;

//     if (ordi < 0.33){
//         choixOrdi = "ciseaux"
//     } else if (ordi > 0.66){
//         choixOrdi = "pierre"
//     } else {
//         choixOrdi = "feuille"
//     }

//     console.log(choixOrdi)

//     if ( (choix === "pierre" && choixOrdi === "ciseaux") ||
//     (choix === "ciseaux" && choixOrdi === "feuille") ||
//     (choix === "feuille" && choixOrdi === "pierre")) {
//     alert("gagné")
//     moi = moi+1;
//     console.log(moi)
//     console.log(IA)
//     } else if (choix === choixOrdi) {
//         alert("égalité")
//         console.log(moi)
//         console.log(IA)
//     } else {
//         alert("perdu")
//         IA = IA+1;
//         console.log(IA)
//         console.log(moi)
//     }

// }

