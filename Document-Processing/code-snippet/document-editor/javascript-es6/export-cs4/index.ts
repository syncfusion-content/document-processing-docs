

import { DocumentEditor, FormatType, Selection, Editor, SfdtExport, WordExport} from '@syncfusion/ej2-documenteditor';

//Inject require modules for Export.
DocumentEditor.Inject(SfdtExport, WordExport, Selection, Editor);

let documenteditor: DocumentEditor = new DocumentEditor({ height: '370px', enableWordExport: true, enableSelection: true, enableEditor: true, isReadOnly: false });

documenteditor.appendTo('#DocumentEditor');

document.getElementById('export').addEventListener('click', () => {
    //Export the document as text file.
    documenteditor.save('sample', 'Dotx');
});



