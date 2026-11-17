(function (global) {
  System.config({
    paths: {
      'npm:': 'https://cdn.jsdelivr.net/npm/'
    },
    map: {
      'react': 'npm:react@18.2.0/umd/react.development.js',
      'react-dom': 'npm:react-dom@18.2.0/umd/react-dom.development.js',
      '@syncfusion/ej2-base': 'npm:@syncfusion/ej2-base/dist/ej2-base.umd.min.js',
      '@syncfusion/ej2-buttons': 'npm:@syncfusion/ej2-buttons/dist/ej2-buttons.umd.min.js',
      '@syncfusion/ej2-splitbuttons': 'npm:@syncfusion/ej2-splitbuttons/dist/ej2-splitbuttons.umd.min.js',
      '@syncfusion/ej2-dropdowns': 'npm:@syncfusion/ej2-dropdowns/dist/ej2-dropdowns.umd.min.js',
      '@syncfusion/ej2-inputs': 'npm:@syncfusion/ej2-inputs/dist/ej2-inputs.umd.min.js',
      '@syncfusion/ej2-lists': 'npm:@syncfusion/ej2-lists/dist/ej2-lists.umd.min.js',
      '@syncfusion/ej2-data': 'npm:@syncfusion/ej2-data/dist/ej2-data.umd.min.js',
      '@syncfusion/ej2-popups': 'npm:@syncfusion/ej2-popups/dist/ej2-popups.umd.min.js',
      '@syncfusion/ej2-navigations': 'npm:@syncfusion/ej2-navigations/dist/ej2-navigations.umd.min.js',
      '@syncfusion/ej2-grids': 'npm:@syncfusion/ej2-grids/dist/ej2-grids.umd.min.js',
      '@syncfusion/ej2-spreadsheet': 'npm:@syncfusion/ej2-spreadsheet/dist/ej2-spreadsheet.umd.min.js',
      '@syncfusion/ej2-react-base': 'npm:@syncfusion/ej2-react-base/dist/ej2-react-base.umd.min.js',
      '@syncfusion/ej2-react-inputs': 'npm:@syncfusion/ej2-react-inputs/dist/ej2-react-inputs.umd.min.js',
      '@syncfusion/ej2-react-dropdowns': 'npm:@syncfusion/ej2-react-dropdowns/dist/ej2-react-dropdowns.umd.min.js',
      '@syncfusion/ej2-react-navigations': 'npm:@syncfusion/ej2-react-navigations/dist/ej2-react-navigations.umd.min.js',
      '@syncfusion/ej2-react-grids': 'npm:@syncfusion/ej2-react-grids/dist/ej2-react-grids.umd.min.js',
      '@syncfusion/ej2-react-spreadsheet': 'npm:@syncfusion/ej2-react-spreadsheet/dist/ej2-react-spreadsheet.umd.min.js'
    },
    meta: {
      '*.jsx': {
        babelOptions: {
          stage2: true
        }
      }
    },
    packages: {
      app: {
        defaultExtension: 'jsx'
      }
    }
  });
})(this);