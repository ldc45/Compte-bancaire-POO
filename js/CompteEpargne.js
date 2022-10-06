// La classe CompteEpargne hérite de la classe Compte

class CompteEpargne extends Compte {
    constructor(titulaire, montant=50, taux=0.005, rythme=5000) {    
        super(titulaire, montant);
        this.taux = taux;
        this.rythme = rythme;
    }
    // Intérêts de taux toutes les "rythme =5000ms"

}