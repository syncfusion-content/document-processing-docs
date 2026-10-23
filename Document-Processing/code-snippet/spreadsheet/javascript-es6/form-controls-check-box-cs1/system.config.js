System.config({
    paths: {
        'npm:': './node_modules/',
        'cldr:': './cldr-data/'
    },
    map: {
        'app': 'app',

        //Syncfusion packages
        '@syncfusion/ej2-base': 'npm:@syncfusion/ej2-base/dist/ej2-base.umd.js',
        '@syncfusion/ej2-inputs': 'npm:@syncfusion/ej2-inputs/dist/ej2-inputs.umd.js',
        '@syncfusion/ej2-buttons': 'npm:@syncfusion/ej2-buttons/dist/ej2-buttons.umd.js',
        '@syncfusion/ej2-dropdowns': 'npm:@syncfusion/ej2-dropdowns/dist/ej2-dropdowns.umd.js',
        '@syncfusion/ej2-popups': 'npm:@syncfusion/ej2-popups/dist/ej2-popups.umd.js',
        '@syncfusion/ej2-lists': 'npm:@syncfusion/ej2-lists/dist/ej2-lists.umd.js',
        '@syncfusion/ej2-navigations': 'npm:@syncfusion/ej2-navigations/dist/ej2-navigations.umd.js',
        '@syncfusion/ej2-grids': 'npm:@syncfusion/ej2-grids/dist/ej2-grids.umd.js',
        '@syncfusion/ej2-richtexteditor': 'npm:@syncfusion/ej2-richtexteditor/dist/ej2-richtexteditor.umd.js',
        '@syncfusion/ej2-excel-export': 'npm:@syncfusion/ej2-excel-export/dist/ej2-excel-export.umd.js',
        '@syncfusion/ej2-pdf-export': 'npm:@syncfusion/ej2-pdf-export/dist/ej2-pdf-export.umd.js',
        '@syncfusion/ej2-spreadsheet': 'npm:@syncfusion/ej2-spreadsheet/dist/ej2-spreadsheet.umd.js',
        '@syncfusion/ej2-file-utils': 'npm:@syncfusion/ej2-file-utils/dist/ej2-file-utils.umd.js',
        '@syncfusion/ej2-compression': 'npm:@syncfusion/ej2-compression/dist/ej2-compression.umd.js',

        //cldr data
        'cldr-data/supplemental': 'cldr:supplemental',
        'cldr-data/main': 'cldr:main',
        'cldr-data/~/main': 'cldr:main'
    },
    packages: {
        app: { main: 'index', defaultExtension: 'ts' }
    }
});
