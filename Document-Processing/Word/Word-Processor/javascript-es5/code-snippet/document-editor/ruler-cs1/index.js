//Initialize Document Editor component.
var documenteditor = new ej.documenteditor.DocumentEditor({
    isReadOnly: false, height: '370px', serviceUrl: 'https://services.syncfusion.com/js/production/api/documenteditor/', documentEditorSettings: { showRuler: true }
});

//Enable all built in modules.
documenteditor.enableAllModules();

document.getElementById('container_ruler_button').addEventListener('click',
    function () {
        documenteditor.documentEditorSettings.showRuler = !documenteditor.documentEditorSettings.showRuler;
    });

//Render Document Editor component.
documenteditor.appendTo('#DocumentEditor');


