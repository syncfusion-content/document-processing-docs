

import { DocumentEditor, Print, Editor, Selection, EditorHistory, SfdtExport } from '@syncfusion/ej2-documenteditor';
import { Button } from '@syncfusion/ej2-buttons';

//Inject require modules.
DocumentEditor.Inject(Print, Editor, Selection, EditorHistory, SfdtExport);

let documenteditor1: DocumentEditor = new DocumentEditor({
    isReadOnly: false,
    enablePrint: true,
    enableEditor: true,
    enableSelection: true,
    enableEditorHistory: true,
    enableSfdtExport: true,
    height: '370px'
});
documenteditor1.appendTo('#DocumentEditor');
let printButton: Button = new Button();
printButton.appendTo('#print');

let documenteditor2: DocumentEditor = new DocumentEditor({
    enablePrint: true, enableSelection: true, isReadOnly: false, enableEditor: true, height: '370px'
});
documenteditor2.appendTo('#DocumentEditor2');
//Print the document
document.getElementById('print').addEventListener('click', () => {
    let sfdtData = documenteditor1.serialize();
    documenteditor2.open(sfdtData);
    //Set A5 paper size
    documenteditor2.selection.sectionFormat.pageWidth = 419.55;
    documenteditor2.selection.sectionFormat.pageHeight = 595.30;
    documenteditor2.print();
});


