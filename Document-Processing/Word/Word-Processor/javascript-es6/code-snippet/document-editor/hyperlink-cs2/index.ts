

import { DocumentEditor, SfdtExport, Selection, Editor, RequestNavigateEventArgs } from '@syncfusion/ej2-documenteditor';
DocumentEditor.Inject(Selection, SfdtExport, Editor);
let documenteditor: DocumentEditor = new DocumentEditor({ height: '370px', isReadOnly: false, enableSelection: true, enableEditor: true });
documenteditor.appendTo('#DocumentEditor');

// Add event listener for requestNavigate event to customize hyperlink navigation functionality.
documenteditor.requestNavigate = (args: RequestNavigateEventArgs) => {
    if (args.linkType !== 'Bookmark') {
        let link: string = args.navigationLink;
        if (args.localReference.length > 0) {
            link += '#' + args.localReference;
        }
        window.open(link);
        args.isHandled = true;
    }
};


