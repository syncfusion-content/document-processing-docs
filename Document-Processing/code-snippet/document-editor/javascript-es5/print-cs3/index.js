var documenteditor1 = new ej.documenteditor.DocumentEditor({
    isReadOnly: false,
    enablePrint: true,
    enableEditor: true,
    enableSelection: true,
    enableEditorHistory: true,
    enableSfdtExport: true
});

documenteditor1.appendTo('#DocumentEditor');

var documenteditor2 = new ej.documenteditor.DocumentEditor({
    isReadOnly: false,
    enablePrint: true,
    enableEditor: true,
    enableSelection: true,
    enableEditorHistory: true,
    enableSfdtExport: true
});

documenteditor2.appendTo('#DocumentEditor2');



var printButton = new ej.buttons.Button();
printButton.appendTo('#print');

document.getElementById('print').addEventListener('click',function (){
    var sfdtData = documenteditor1.serialize();
    documenteditor2.open(sfdtData);
    //Set A5 paper size
    documenteditor2.selection.sectionFormat.pageWidth = 419.55;
    documenteditor2.selection.sectionFormat.pageHeight = 595.30;
    documenteditor2.print();
});

