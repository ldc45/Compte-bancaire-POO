class Compte{
    
    constructor(titulaire,montant=0){
        this.titulaire = titulaire; 
        this.solde =montant;  
    }
    
    /**
     * Créditer le compte
     * @param {number} montant 
     */

    crediter(montant){
    this.solde +=montant;
    }

    /**
     * 
     * @param {number} montant 
     */
    debiter(montant){
        this.solde -=montant;
    }

    affichersolde(){
        console.log(`Le compte présente un solde de ${this.solde} euros`)
    }
}