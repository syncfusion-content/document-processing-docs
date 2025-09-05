

import { DocumentEditor, FormatType, Selection, Editor, SfdtExport } from '@syncfusion/ej2-documenteditor';

DocumentEditor.Inject(SfdtExport, Selection, Editor);

let documenteditor: DocumentEditor = new DocumentEditor({ height: '370px', enableSfdtExport: true, enableSelection: true, enableEditor: true, isReadOnly: false });

documenteditor.appendTo('#DocumentEditor');

document.getElementById('export').addEventListener('click', () => {
    documenteditor.save('sample', 'Sfdt');
});



