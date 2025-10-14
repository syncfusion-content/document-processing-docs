---
layout: post
title: Disable optimized text measuring in React Document Editor | Syncfusion
description: Learn here all about Disable optimized text measuring in Syncfusion React Document editor component of Syncfusion Essential JS 2 and more.
control: Disable optimized text measuring 
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Disable optimized text measuring in React Document editor component

Starting from v19.3.0.x, the accuracy of text size measurements in Document editor is improved such as to match Microsoft Word pagination for most Word documents. This improvement is included as default behavior along with an optional API [`enableOptimizedTextMeasuring`](https://ej2.syncfusion.com/react/documentation/api/document-editor/documentEditorSettingsModel#enableoptimizedtextmeasuring) in Document editor settings.  

If you want the Document editor component to retain the document pagination (display page-by-page) behavior like v19.2.0.x and older versions. Then you can disable this optimized text measuring improvement, by setting `false` to [`enableOptimizedTextMeasuring`](https://ej2.syncfusion.com/react/documentation/api/document-editor/documentEditorSettingsModel#enableoptimizedtextmeasuring) property of  React Document Editor component.

## Disable optimized text measuring in `DocumentEditorContainer` instance

The following example code illustrates how to disable optimized text measuring improvement in `DocumentEditorContainer` instance.

{% raw %}
```ts
import { DocumentEditorContainer, Toolbar, DocumentEditorContainerComponent} from '@syncfusion/ej2-react-documenteditor';
import * as ReactDOM from 'react-dom';
import * as React from 'react';

DocumentEditorContainerComponent.Inject(Toolbar);
function App() {
  let container;
  let hosturl =
    'https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/';

  // Disable optimized text measuring improvement
  let settings = { enableOptimizedTextMeasuring: false };

  return (
    <div className="App">
      <DocumentEditorContainerComponent
        id="container"
        ref={(scope) => {
          container = scope;
        }}
        style={{ height: '590px' }}
        enableToolbar={true}
        serviceUrl={hosturl}
        height={'590px'}
        documentEditorSettings={settings}
      />
    </div>
  );
}
export default App;
ReactDOM.render(<App />, document.getElementById('sample'));


```
{% endraw %}

> The Web API hosted link `https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/` utilized in the Document Editor's serviceUrl property is intended solely for demonstration and evaluation purposes. For production deployment, please host your own web service with your required server configurations. You can refer and reuse the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server) for hosting your own web service and use for the serviceUrl property.

## Disable optimized text measuring in `DocumentEditor` instance

The following example code illustrates how to disable optimized text measuring improvement in `DocumentEditor` instance.

```ts
import * as ReactDOM from 'react-dom';
import * as React from 'react';

import {
  DocumentEditorComponent, DocumentEditor, RequestNavigateEventArgs, ViewChangeEventArgs,
  Print, SfdtExport, WordExport, TextExport, Selection, Search, Editor, ImageResizer, EditorHistory,
  ContextMenu, OptionsPane, HyperlinkDialog, TableDialog, BookmarkDialog, TableOfContentsDialog,
  PageSetupDialog, StyleDialog, ListDialog, ParagraphDialog, BulletsAndNumberingDialog, FontDialog,
  TablePropertiesDialog, BordersAndShadingDialog, TableOptionsDialog, CellOptionsDialog, StylesDialog
} from '@syncfusion/ej2-react-documenteditor';


DocumentEditorComponent.Inject(Print, SfdtExport, WordExport, TextExport, Selection, Search, Editor, ImageResizer, EditorHistory, ContextMenu, OptionsPane, HyperlinkDialog, TableDialog, BookmarkDialog, TableOfContentsDialog, PageSetupDialog, StyleDialog, ListDialog, ParagraphDialog, BulletsAndNumberingDialog, FontDialog, TablePropertiesDialog, BordersAndShadingDialog, TableOptionsDialog, CellOptionsDialog, StylesDialog);
function App() {
  // Disable optimized text measuring improvement
  let settings = { enableOptimizedTextMeasuring: false };
  return (
    <DocumentEditorComponent id="container" height={'330px'} serviceUrl="https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/" isReadOnly={false} enablePrint={true}
      enableSelection={true} enableEditor={true} enableEditorHistory={true}
      enableContextMenu={true} enableSearch={true} enableOptionsPane={true}
      enableBookmarkDialog={true} enableBordersAndShadingDialog={true} enableFontDialog={true} enableTableDialog={true} enableParagraphDialog={true} enableHyperlinkDialog={true} enableImageResizer={true} enableListDialog={true}
      enablePageSetupDialog={true} enableSfdtExport={true}
      enableStyleDialog={true} enableTableOfContentsDialog={true}
      enableTableOptionsDialog={true} enableTablePropertiesDialog={true}
      enableTextExport={true} enableWordExport={true} documentEditorSettings={settings} />
  );
}
export default App;
ReactDOM.render(<App />, document.getElementById('sample'));

```

> The Web API hosted link `https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/` utilized in the Document Editor's serviceUrl property is intended solely for demonstration and evaluation purposes. For production deployment, please host your own web service with your required server configurations. You can refer and reuse the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server) for hosting your own web service and use for the serviceUrl property.