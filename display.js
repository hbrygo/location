let btn = document.getElementById("location");

btn.addEventListener("click", () => {
    window.location.href = 'location.html';
});

// let newDiv = document.createElement('div');
// newDiv.classList.add('list-element');
// newDiv.id = 'tournamentList';
// let newSpan = document.createElement('span');
// newSpan.classList.add('list-span');
// newSpan.innerHTML = response[i].name;
// newDiv.append(newSpan);
// let newButton = document.createElement('div');
// newButton.classList.add('list-join-button');
// if (response[i].player_number == '8')
//     newButton.innerHTML = 'Watch ➞';
// else
//     newButton.innerHTML = response[i].player_number + '/8 Go ➞ ';
// newDiv.classList.add(response[i].id);
// newDiv.append(newButton);
// tournamentList.append(newDiv);

function parse(text) {
    function parseMultipleUsers(data) {
        // Séparer les blocs par la ligne de séparation *******************************
        const blocks = data.split('*******************************').map(block => block.trim());

        // Tableau pour stocker les utilisateurs
        const users = [];

        // Parcourir chaque bloc et le parser
        for (const block of blocks) {
            if (block) { // Ignorer les blocs vides
                const userMap = new Map();

                // Traiter chaque ligne du bloc
                const lines = block.split('\n');
                for (const line of lines) {
                    const [key, ...valueParts] = line.split(':');
                    const keyTrimmed = key.trim();
                    const value = valueParts.join(':').trim(); // Joindre au cas où ":" serait dans la valeur
                    if (keyTrimmed) {
                        userMap.set(keyTrimmed, value);
                    }
                }

                // Ajouter la Map de cet utilisateur dans le tableau
                users.push(userMap);
            }
        }

        return users;
    }

    // Utilisation
    const usersData = parseMultipleUsers(text);

    // Afficher les données de tous les utilisateurs
    // console.log(usersData);

    // Exemple : accéder aux données d'un utilisateur
    // usersData.forEach((userMap, index) => {
    // console.log(`Utilisateur ${index + 1}:`);
    // console.log('Nom :', userMap.get('nom'));
    // console.log('Site :', userMap.get('site'));
    // });
    return usersData;
}

function checkFiltre(key, value) {
    const checkboxIds = [
        'nom', 'prenom', 'adresse', 'mail', 'gsm', 'fixe', 'vehicule', 'plaque',
        'montant', 'caution', 'badge1', 'badge2', 'badge3',
        'badge4', 'site', 'emplacement', 'date'
    ];

    // Utilisation de map pour créer un tableau des éléments
    const checkboxes = checkboxIds.map(id => document.getElementById(id));

    // checkboxes.forEach(checkbox => {
    //     console.log(checkbox.id, checkbox.checked); // Affiche l'ID et si la case est cochée
    // });
    return checkboxes;
    // console.log(checkboxAdresse);
}

let key;
let value;

async function displayInHtml(text) {
    let form = document.getElementById('form');
    form.innerHTML = "";
    let usersData = parse(text);
    // console.log(usersData);
    for (let i = 0; i < usersData.length; i++) {
        let border = document.createElement('div');
        border.classList.add('border');

        const checkbox = checkFiltre(key, value);
        for (const [key, value] of usersData[i].entries()) {
            // if (key == "adresse")
            console.log(key);
            checkbox.forEach(checkbox => {
                // console.log(checkbox.id, checkbox.checked);
                if (checkbox.id == key && checkbox.checked) {
                    let newDiv = document.createElement('div');
                    newDiv.classList.add('form-row');
                    let newdiv = document.createElement('div');
                    newdiv.classList.add('form-group');
                    let newLabel = document.createElement('label');
                    newLabel.id = key;
                    newLabel.innerHTML = key + ': ' + value;
                    newdiv.append(newLabel);
                    newDiv.append(newdiv);
                    border.append(newDiv);
                    // if (checkbox.id == "adresse")
                    // console.log("********************************************************");
                }
            });
            // console.log(`${key}: ${value}`);
        }
        form.append(border);
    }
}

async function searchFile() {
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

        // Modifier le contenu (Exemple : ajouter du texte à la fin)

        // Écrit les modifications dans le fichier
        // console.log(text);
        await displayInHtml(text);
        // const writable = await fileHandle.createWritable();
        // await writable.close();

        // console.log('Fichier modifié et sauvegardé avec succès.');
        // console.log(text);
    } catch (err) {
        console.error('Erreur ou action annulée par l\'utilisateur :', err);
    }
}
let file = document.getElementById("file");

file.addEventListener("click", () => {
    searchFile();
});