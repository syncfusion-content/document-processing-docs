

import { DocumentEditor, Selection, Editor, DocumentEditorKeyDownEventArgs, SfdtExport, WordExport } from '@syncfusion/ej2-documenteditor';

//Inject require modules.
DocumentEditor.Inject(Selection, Editor, SfdtExport, WordExport);

//Initialize Document Editor.
let documentEditor: DocumentEditor = new DocumentEditor({ height: '370px', enableEditor: true, enableSfdtExport: true, enableWordExport: true, isReadOnly: false });

documentEditor.appendTo('#DocumentEditor');

//Override keyboard shortcut inside `keyDown` event.
documentEditor.keyDown = function (args: DocumentEditorKeyDownEventArgs) {
    let keyCode: number = args.event.which || args.event.keyCode;

    let isCtrlKey: boolean = (args.event.ctrlKey || args.event.metaKey) ? true : ((keyCode === 17) ? true : false);

    let isAltKey: boolean = args.event.altKey ? args.event.altKey : ((keyCode === 18) ? true : false);

    // 83 is the character code for 'S'
    if (isCtrlKey && !isAltKey && keyCode === 83) {
        //To prevent default save operation, set the isHandled property to true
        args.isHandled = true;
        documentEditor.save('sample', 'Docx');
        args.event.preventDefault();
    } else if (isCtrlKey && isAltKey && keyCode === 83) {
        documentEditor.save('sample', 'Sfdt');
    }
}


