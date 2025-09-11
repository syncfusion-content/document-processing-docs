

import * as ReactDOM from 'react-dom/client';
import * as React from 'react';

import {
    DocumentEditorComponent, DocumentEditor, RequestNavigateEventArgs, ViewChangeEventArgs,
    Print, SfdtExport, WordExport, TextExport, Selection, Search, Editor, ImageResizer, EditorHistory,
    ContextMenu, OptionsPane, HyperlinkDialog, TableDialog, BookmarkDialog, TableOfContentsDialog,
    PageSetupDialog, StyleDialog, ListDialog, ParagraphDialog, BulletsAndNumberingDialog, FontDialog,
    TablePropertiesDialog, BordersAndShadingDialog, TableOptionsDialog, CellOptionsDialog, StylesDialog
} from '@syncfusion/ej2-react-documenteditor';


DocumentEditorComponent.Inject(Print, SfdtExport, WordExport, TextExport, Selection, Search, Editor, ImageResizer, EditorHistory, ContextMenu, OptionsPane, HyperlinkDialog, TableDialog, BookmarkDialog, TableOfContentsDialog, PageSetupDialog, StyleDialog, ListDialog, ParagraphDialog, BulletsAndNumberingDialog, FontDialog, TablePropertiesDialog, BordersAndShadingDialog, TableOptionsDialog, CellOptionsDialog, StylesDialog);
function Default() {
    return (
        <DocumentEditorComponent id="container" height={'330px'} serviceUrl="https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/" isReadOnly={false} enablePrint={true}
            enableSelection={true} enableEditor={true} enableEditorHistory={true}
            enableContextMenu={true} enableSearch={true} enableOptionsPane={true}
            enableBookmarkDialog={true} enableBordersAndShadingDialog={true} enableFontDialog={true} enableTableDialog={true} enableParagraphDialog={true} enableHyperlinkDialog={true} enableImageResizer={true} enableListDialog={true}
            enablePageSetupDialog={true} enableSfdtExport={true}
            enableStyleDialog={true} enableTableOfContentsDialog={true}
            enableTableOptionsDialog={true} enableTablePropertiesDialog={true}
            enableTextExport={true} enableWordExport={true} />
    );
}
export default Default
const root = ReactDOM.createRoot(document.getElementById('sample'));
root.render(<Default />);


