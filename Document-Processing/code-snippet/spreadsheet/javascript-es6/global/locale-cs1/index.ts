

import { Spreadsheet, SheetModel } from '@syncfusion/ej2-spreadsheet';
import { defaultData } from './datasource.ts';
import { L10n, enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

L10n.load({
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

let columns: ColumnModel[] = [{ width: 100 }, { width: 130 },{ width: 96},
    { width: 130 }, { width: 130 },{ width: 96},
    { width: 100 }, { width: 100 },{ width: 110}, { width: 100 }, { width: 130 },{ width: 150}]

let spreadsheet: Spreadsheet = new Spreadsheet({
        // Specifies the locale
        locale: 'fr-CH',
        sheets: [{ ranges: [{ dataSource: defaultData }], columns: columns
    }],
});

spreadsheet.appendTo('#spreadsheet');


