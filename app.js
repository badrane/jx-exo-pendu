var mvLettre = [];// accompléter
var bnLettre = ["s","u","p","e","r"];
var quitter ;

for (i = 0; i < 11 && quitter != "oui"; i++) {
        
    choix = prompt("Jeu du pendu trouve le mot cacher. 11 éssais choisir une lettre");
    if (bnLettre.indexOf(choix)===-1) {
        alert("c'est pas bon");
        mvLettre.push(choix);
        console.log(mvLettre);

    } else {
        alert("bien joué");
        bnLettre.splice(bnLettre.indexOf(choix),1);
        console.log(bnLettre);
    }

    if (bnLettre.length === 0){
        alert("tu a gagné")
        quitter = prompt("quitter ? : oui ou non")
     }
    
}

alert("tu a perdu")