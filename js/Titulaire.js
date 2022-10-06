class Titulaire{
    /**
     * Titulaire de compte bancaire
     * @param {string} nom 
     * @param {string} prenom 
     */
    constructor(nom,prenom){
        this.nom = nom;
        this.prenom = prenom;
    }

    identite(){
        console.log(`Le titulaire s'appelle ${this.nom}, ${this.prenom}`)
    }
}