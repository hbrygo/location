let nom = document.getElementById("nom");
let prenom = document.getElementById("prenom");
let montant = document.getElementById("montant");
let adresse = document.getElementById("adresse");
let site = document.getElementById("site");
let emplacement = document.getElementById("emplacment");
let mail = document.getElementById("email");
let telephoneFix = document.getElementById("telephoneFix");
let telephoneGsm = document.getElementById("telephoneGsm");
let vehicule = document.getElementById("vehicule");
let plaque = document.getElementById("plaque");
let date = document.getElementById("date");
let caution = document.getElementById("caution");
let badge1 = document.getElementById("badge1");
let badge2 = document.getElementById("badge2");
let badge3 = document.getElementById("badge3");
let badge4 = document.getElementById("badge4");

async function openAndEditFile() {
    try {
        // Ouvre un sélecteur pour choisir un fichier
        const [fileHandle] = await window.showOpenFilePicker({
            types: [{
                description: 'Text Files',
                accept: {
                    'text/plain': ['.txt']
                }
            }]
        });

        // Lit le fichier sélectionné
        const file = await fileHandle.getFile();
        const text = await file.text();

        console.log('Contenu actuel du fichier :', text);

        // Modifier le contenu (Exemple : ajouter du texte à la fin)
        let modifiedText = text;
        modifiedText += "\n*******************************";
        modifiedText += "\nnom: " + nom.value;
        modifiedText += "\nprenom: " + prenom.value;
        modifiedText += "\nadresse: " + adresse.value
        modifiedText += "\nmail: " + mail.value
        modifiedText += "\ngsm: " + telephoneGsm.value
        modifiedText += "\nfixe: " + telephoneFix.value
        modifiedText += "\nvehicule: " + vehicule.value
        modifiedText += "\nplaque: " + plaque.value
        modifiedText += "\nmontant: " + montant.value
        modifiedText += "\ncaution: " + caution.value
        modifiedText += "\ndate: " + date.value
        modifiedText += "\nemplacement: " + emplacement.value
        modifiedText += "\nsite: " + site.value
        modifiedText += "\nbadge1: " + badge1.value
        modifiedText += "\nbadge2: " + badge2.value
        modifiedText += "\nbadge3: " + badge3.value
        modifiedText += "\nbadge4: " + badge4.value

        // Écrit les modifications dans le fichier
        const writable = await fileHandle.createWritable();
        await writable.write(modifiedText);
        await writable.close();

        console.log('Fichier modifié et sauvegardé avec succès.');
    } catch (err) {
        console.error('Erreur ou action annulée par l\'utilisateur :', err);
    }
}
let buttonValide = document.getElementById("btnValide");
let displayBtn = document.getElementById("display");

displayBtn.addEventListener("click", () => {
    window.location.href = 'display.html';
});

buttonValide.addEventListener("click", () => {

    // Fonction pour créer un fichier et le télécharger

    // Appeler la fonction
    openAndEditFile();

    // Exemple d'utilisation
    // const textToSave = "Voici un texte que je souhaite sauvegarder dans un fichier texte.\nLigne 2 de texte.";
    // const filename = "mon_fichier.txt";

    // Sauvegarder le texte dans le fichier
    // createAndDownloadFile(textToSave, filename);


    // console.log(nom.value)
    // console.log(prenom.value)
    // console.log(adresse.value)
    // console.log(mail.value)
    // console.log(telephoneGsm.value)
    // console.log(telephoneFix.value)
    // console.log(vehicule.value)
    // console.log(plaque.value)
    // console.log(montant.value)
    // console.log(caution.value);
    // console.log(date.value)
    // console.log(emplacement.value)
    // console.log(site.value)
    // console.log(status.value);
});

// console.log(document.currentScript.src);
/*
visionner fiche individuelle
visionner statut paiement
imprimer nouveau contrat
afficher montant caution
*/