

import { DocumentEditor, FormatType, Selection, Editor, SfdtExport, TextExport} from '@syncfusion/ej2-documenteditor';

//Inject require modules for Export.
DocumentEditor.Inject(SfdtExport, TextExport, Selection, Editor);

let documenteditor: DocumentEditor = new DocumentEditor({ height: '370px', enableTextExport: true, enableSelection: true, enableEditor: true, isReadOnly: false });

documenteditor.appendTo('#DocumentEditor');

document.getElementById('export').addEventListener('click', () => {
    //Export the document as text file.
    documenteditor.save('sample', 'Txt');
});



