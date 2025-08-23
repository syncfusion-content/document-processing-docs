

import { DocumentEditor, FormatType, Selection, Editor, SfdtExport, WordExport } from '@syncfusion/ej2-documenteditor';

DocumentEditor.Inject(SfdtExport, WordExport, Selection, Editor);

let documenteditor: DocumentEditor = new DocumentEditor({ height: '370px', enableWordExport: true, enableSelection: true, enableEditor: true, isReadOnly: false });

documenteditor.appendTo('#DocumentEditor');

document.getElementById('export').addEventListener('click', () => {
    documenteditor.save('sample', 'Docx');
});



