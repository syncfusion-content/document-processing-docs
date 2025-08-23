System.config({
    transpiler: "ts",
    typescriptOptions: {
        target: "es5",
        module: "commonjs",
        moduleResolution: "node",
        emitDecoratorMetadata: true,
        experimentalDecorators: true,
        "jsx": "react"
    },
    meta: {
        'typescript': {
            "exports": "ts"
        }
    },
    paths: {
        "syncfusion:": "https://cdn.syncfusion.com/ej2/20.3.56/"
    },
    map: {
        app: "app",
        ts: "https://unpkg.com/plugin-typescript@4.0.10/lib/plugin.js",
        typescript: "https://unpkg.com/typescript@2.2.2/lib/typescript.js",
        "plugin-json": "https://cdnjs.cloudflare.com/ajax/libs/systemjs-plugin-json/0.3.0/json.min.js",
        "@syncfusion/ej2-base": "syncfusion:ej2-base/dist/ej2-base.umd.min.js",
        "@syncfusion/ej2-buttons": "syncfusion:ej2-buttons/dist/ej2-buttons.umd.min.js",
        "@syncfusion/ej2-splitbuttons": "syncfusion:ej2-splitbuttons/dist/ej2-splitbuttons.umd.min.js",        
        "@syncfusion/ej2-data": "syncfusion:ej2-data/dist/ej2-data.umd.min.js",
        "@syncfusion/ej2-dropdowns": "syncfusion:ej2-dropdowns/dist/ej2-dropdowns.umd.min.js",
        "@syncfusion/ej2-notifications":"syncfusion:ej2-notifications/dist/ej2-notifications.umd.min.js",          
        "@syncfusion/ej2-lists": "syncfusion:ej2-lists/dist/ej2-lists.umd.min.js",
        "@syncfusion/ej2-inputs": "syncfusion:ej2-inputs/dist/ej2-inputs.umd.min.js",
        "@syncfusion/ej2-navigations": "syncfusion:ej2-navigations/dist/ej2-navigations.umd.min.js",
        "@syncfusion/ej2-popups": "syncfusion:ej2-popups/dist/ej2-popups.umd.min.js",
        "@syncfusion/ej2-compression": "syncfusion:ej2-compression/dist/ej2-compression.umd.min.js",
        "@syncfusion/ej2-excel-export": "syncfusion:ej2-excel-export/dist/ej2-excel-export.umd.min.js",
        "@syncfusion/ej2-file-utils": "syncfusion:ej2-file-utils/dist/ej2-file-utils.umd.min.js",
        "@syncfusion/ej2-office-chart": "syncfusion:ej2-office-chart/dist/ej2-office-chart.umd.min.js",      
        "@syncfusion/ej2-svg-base": "syncfusion:ej2-svg-base/dist/ej2-svg-base.umd.min.js",
        "@syncfusion/ej2-calendars": "syncfusion:ej2-calendars/dist/ej2-calendars.umd.min.js",
        "@syncfusion/ej2-charts": "syncfusion:ej2-charts/dist/ej2-charts.umd.min.js",
        "@syncfusion/ej2-pdf-export": "syncfusion:ej2-pdf-export/dist/ej2-pdf-export.umd.min.js",
        "@syncfusion/ej2-documenteditor": "syncfusion:ej2-documenteditor/dist/ej2-documenteditor.umd.min.js",  
        "@syncfusion/ej2-ribbon": "syncfusion:ej2-ribbon/dist/ej2-ribbon.umd.min.js",      

        "@syncfusion/ej2-react-base": "syncfusion:ej2-react-base/dist/ej2-react-base.umd.min.js",        
        "@syncfusion/ej2-react-navigations": "syncfusion:ej2-react-navigations/dist/ej2-react-navigations.umd.min.js",        
        "@syncfusion/ej2-react-documenteditor": "syncfusion:ej2-react-documenteditor/dist/ej2-react-documenteditor.umd.min.js",        
        "react-dom": "https://unpkg.com/react-dom@18.2.0/umd/react-dom.production.min.js",
        "react": "https://unpkg.com/react@18.2.0/umd/react.production.min.js",
    },
    packages: {
        'app': { main: 'index', defaultExtension: 'tsx' },
    }
});

System.import('app');