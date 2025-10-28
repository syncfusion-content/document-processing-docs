ej.base.enableRipple(true);
ej.base.setCulture('fr-CH');
ej.base.setCurrencyCode('EUR');
ej.base.L10n.load({
    'fr-CH': {
        'spreadsheet': {
            'File': 'Fichier',
            'Home': 'Accueil',
            'Insert': 'Insérer',
            'Formulas': 'Formules',
            'Data': 'Les données',
            'View': 'Vue',
            'Cut': 'Coupe',
            'Copy': 'Copie',
            'Paste': 'Pâte',
            'PasteSpecial': 'Pâte spéciale',
            'All': 'Tous les',
            'Values': 'Valeurs',
            'Formats': 'Les formats',
            'Font': 'fonte',
            'FontSize': 'Taille de police',
            'Bold': 'Audacieux',
            'Italic': 'Italique',
            'Underline': 'Souligner',
            'Strikethrough': 'Barré',
            'TextColor': 'Couleur du texte',
            'FillColor': 'La couleur de remplissage',
            'HorizontalAlignment': 'Alignement horizontal',
            'AlignLeft': 'Alignez à gauche',
            'AlignCenter': 'centre',
            'AlignRight': 'Aligner à droite',
            'VerticalAlignment': 'Alignement vertical',
            'AlignTop': 'Aligner en haut',
            'AlignMiddle': 'Aligner le milieu',
            'AlignBottom': 'Aligner le bas',
            'InsertFunction': 'Insérer une fonction',
            'Delete': 'Effacer',
            'Rename': 'Rebaptiser',
            'Hide': 'Cacher',
            'Unhide': 'Démasquer',
            'NumberFormat': 'Nombre Format',
        }
    }
});
var spreadsheet = new ej.spreadsheet.Spreadsheet({
     // Specifies the locale
    locale: 'fr-CH',
    sheets: [{ ranges: [{ dataSource: defaultData,
    columns: [{ width: 150 }, { width: 150 },{ width: 150},
                          { width: 160 }, { width: 100 }, {width: 150}, {width: 150}, {width: 150}] }]
    }],
    created: function () {
            //Applies cell and number formatting to specified range of the active sheet
            spreadsheet.cellFormat({ fontWeight: 'bold', textAlign: 'center', verticalAlign: 'middle' }, 'A1:H1');
            spreadsheet.numberFormat('$#,##0.00', 'F2:F11');
    }
});

spreadsheet.appendTo('#spreadsheet');

