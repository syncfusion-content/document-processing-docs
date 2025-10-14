

import { DocumentEditor, Selection, Editor, DocumentEditorKeyDownEventArgs } from '@syncfusion/ej2-documenteditor';

//Inject require modules.
DocumentEditor.Inject(Selection, Editor)

//Initialize Document Editor.
let documentEditor: DocumentEditor = new DocumentEditor({ enableEditor: true, isReadOnly: false, height: '370px' });

documentEditor.appendTo('#DocumentEditor');

//Prevent keyboard shortcut inside `keyDown` event.
documentEditor.keyDown = function (args: DocumentEditorKeyDownEventArgs) {
    let keyCode: number = args.event.which || args.event.keyCode;
    let isCtrlKey: boolean = (args.event.ctrlKey || args.event.metaKey) ? true : ((keyCode === 17) ? true : false);
    //67 is the character code for 'C'
    if (isCtrlKey && keyCode === 67) {
        //To prevent copy operation set isHandled to true
        args.isHandled = true;
    }
}


