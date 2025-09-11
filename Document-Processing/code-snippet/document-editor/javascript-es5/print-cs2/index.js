var documenteditor = new ej.documenteditor.DocumentEditor({
    isReadOnly: false,
    enablePrint: true,
    enableEditor: true,
    enableSelection: true,
    enableEditorHistory: true
});

documenteditor.appendTo('#DocumentEditor');

var printButton = new ej.buttons.Button();
printButton.appendTo('#print');

document.getElementById('print').addEventListener('click',function (){
    documenteditor.print();
});


