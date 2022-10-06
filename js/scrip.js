let titulaire1 = new Titulaire("Lulu", "Castagnette");

console.log(titulaire1);

let titulaire2 = new Titulaire("Helène", "Dupont");

console.log(titulaire2.nom);   

titulaire2.identite()

let titulaire3 = new Titulaire("Diane", "Raouette")
let compte1 = new Compte(titulaire3, 25)

console.log(compte1);

compte1.crediter(150);

console.log(compte1);

compte1.debiter(20);
compte1.affichersolde();

let compteEpargne = new CompteEpargne(titulaire2, 15);

console.log(compteEpargne);