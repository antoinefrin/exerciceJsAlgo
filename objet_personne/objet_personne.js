const antoine = {
    nom: 'Dupont',
    prenom: 'Antoine',
    age: 31,
    nativeCountry: 'France',
    voyages: ['France', 'Angleterre', 'Belgique', 'Espagne', 'Etat Unis', 'Italie', 'Canada', 'Pays-Bas'],
    parents: [
        {
            parenter: 'Père',
            nom: 'Dupont',
            prenom: 'Jacques',
            age: 56,
            nativeCountry: 'France',
            voyages: ['France', 'Angleterre', 'Espagne', 'Tunisie', 'Canada', 'Belgique'],
        },

        {
            parenter: 'Mère',
            nom: 'Dupont',
            prenom: 'Marie',
            age: 56,
            nativeCountry: 'France',
            voyages: ['France', 'Angleterre', 'Espagne', 'Tunisie', 'Canada', 'Belgique'],
        },

        {
            parenter: 'Frère',
            nom: 'Dupont',
            prenom :'Gabriel',
            age : 30,
            nativeCountry : 'France',
            voyages : ['France', 'Angleterre', 'Espagne',],
        }
    ],
};
console.log(JSON.stringify(antoine));