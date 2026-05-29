---
layout: post
title: Notes in React Document editor component | Syncfusion
description: Learn here all about Notes in Syncfusion React Document editor component of Syncfusion Essential JS 2 and more.
control: Notes 
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Notes in React Document editor component

DocumentEditorContainer component provides support for inserting footnotes and endnotes through the in-built toolbar. Refer to the following screenshot.

![Insert footnote endnote](images/note-toolbar.jpg)

The Footnotes and endnotes are both ways of adding extra bits of information to your writing outside of the main text. You can use footnotes and endnotes to add side comments to your work or to place other publications like books, articles, or websites.

## Insert footnotes

Document Editor exposes an API to insert footnotes at cursor position programmatically or can be inserted to the end of selected text.

```ts
import * as ReactDOM from 'react-dom';
import * as React from 'react';

import {
    DocumentEditorComponent, Print, SfdtExport, WordExport, TextExport, Selection, Search, Editor, ImageResizer, EditorHistory,
    ContextMenu, OptionsPane, HyperlinkDialog, TableDialog, BookmarkDialog, TableOfContentsDialog,
    PageSetupDialog, StyleDialog, ListDialog, ParagraphDialog, BulletsAndNumberingDialog, FontDialog,
    TablePropertiesDialog, BordersAndShadingDialog, TableOptionsDialog, CellOptionsDialog, StylesDialog
} from '@syncfusion/ej2-react-documenteditor';

//Inject require module.
DocumentEditorComponent.Inject(Print, SfdtExport, WordExport, TextExport, Selection, Search, Editor, ImageResizer, EditorHistory, ContextMenu, OptionsPane, HyperlinkDialog, TableDialog, BookmarkDialog, TableOfContentsDialog, PageSetupDialog, StyleDialog, ListDialog, ParagraphDialog, BulletsAndNumberingDialog, FontDialog, TablePropertiesDialog, BordersAndShadingDialog, TableOptionsDialog, CellOptionsDialog, StylesDialog);
function App() {
    let documenteditor: DocumentEditorComponent=new DocumentEditorComponent(undefined);
return (
            <div>
                <button onClick={Footnote}>insert Footnote</button>
                <DocumentEditorComponent  id="container" height={'330px'} ref={(scope) => { documenteditor = scope; }} serviceUrl="https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/" isReadOnly={false} enablePrint={true}
                    enableSelection={true} enableEditor={true} enableEditorHistory={true}
                    enableContextMenu={true} enableSearch={true} enableOptionsPane={true}
                    enableBookmarkDialog={true} enableBordersAndShadingDialog={true} enableFontDialog={true} enableTableDialog={true} enableParagraphDialog={true} enableHyperlinkDialog={true} enableImageResizer={true} enableListDialog={true}
                    enablePageSetupDialog={true} enableSfdtExport={true}
                    enableStyleDialog={true} enableTableOfContentsDialog={true}
                    enableTableOptionsDialog={true} enableTablePropertiesDialog={true}
                    enableTextExport={true} enableWordExport={true}/>
            </div>
        );
        function Footnote(){
          //Insert footnote.
          documenteditor.editor.insertFootnote();
      }

}
export default App();
ReactDOM.render(<App />, document.getElementById('sample'));

```

N> The hosted Web API URL is for demo and evaluation purposes only. For production, host your own web service using the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or the [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server).

## Insert endnotes

Document Editor exposes an API to insert endnotes at cursor position programmatically or can be inserted to the end of selected text.

```ts
import * as ReactDOM from 'react-dom';
import * as React from 'react';

import {
    DocumentEditorComponent, Print, SfdtExport, WordExport, TextExport, Selection, Search, Editor, ImageResizer, EditorHistory,
    ContextMenu, OptionsPane, HyperlinkDialog, TableDialog, BookmarkDialog, TableOfContentsDialog,
    PageSetupDialog, StyleDialog, ListDialog, ParagraphDialog, BulletsAndNumberingDialog, FontDialog,
    TablePropertiesDialog, BordersAndShadingDialog, TableOptionsDialog, CellOptionsDialog, StylesDialog
} from '@syncfusion/ej2-react-documenteditor';

//Inject require modules.
DocumentEditorComponent.Inject(Print, SfdtExport, WordExport, TextExport, Selection, Search, Editor, ImageResizer, EditorHistory, ContextMenu, OptionsPane, HyperlinkDialog, TableDialog, BookmarkDialog, TableOfContentsDialog, PageSetupDialog, StyleDialog, ListDialog, ParagraphDialog, BulletsAndNumberingDialog, FontDialog, TablePropertiesDialog, BordersAndShadingDialog, TableOptionsDialog, CellOptionsDialog, StylesDialog);

    let documenteditor: DocumentEditorComponent= new DocumentEditorComponent(undefined);
    function App (){
      return (
        <div>
            <button onClick={InsertEndnote}>insert Endnote</button>
            <DocumentEditorComponent id="container" height={'330px'}  ref={(scope) => { documenteditor = scope; }}  serviceUrl="https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/" isReadOnly={false} enablePrint={true}
            enableSelection={true} enableEditor={true} enableEditorHistory={true}
            enableContextMenu={true} enableSearch={true} enableOptionsPane={true}
            enableBookmarkDialog={true} enableBordersAndShadingDialog={true} enableFontDialog={true} enableTableDialog={true} enableParagraphDialog={true} enableHyperlinkDialog={true} enableImageResizer={true} enableListDialog={true}
            enablePageSetupDialog={true} enableSfdtExport={true}
            enableStyleDialog={true} enableTableOfContentsDialog={true}
            enableTableOptionsDialog={true} enableTablePropertiesDialog={true}
            enableTextExport={true} enableWordExport={true} />
        </div>

      );
      function InsertEndnote() {
        //Insert end note.
        documenteditor.editor.insertEndnote();
      }
    }
export default App;
ReactDOM.render(<App />, document.getElementById('sample'));

```

N> The hosted Web API URL is for demo and evaluation purposes only. For production, host your own web service using the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or the [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server).

## Update or edit footnotes and endnotes

You can update or edit the footnotes and endnotes using the built-in context menu shown up by right-clicking it. The footnote endnote dialog box popup and you can customize the number format and start at. Refer to the following screenshot.

![Update or edit footnotes and endnotes](images/notes-option.jpg)
