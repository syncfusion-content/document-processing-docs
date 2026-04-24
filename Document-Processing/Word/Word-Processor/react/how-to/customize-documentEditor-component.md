---
layout: post
title: Customize DocumentEditor component in React DOCX Editor | Syncfusion
description: Learn how to customize the DocumentEditor component in Syncfusion React DOCX Editor and build a tailored user interface.
platform: document-processing
control: DocumentEditor
documentation: ug
domainurl: ##DomainURL##
---

## Customize DocumentEditor component in React DOCX Editor

The DocumentEditor component provides a flexible foundation for creating, viewing, and editing Word documents. Unlike DocumentEditorContainer, this component allows you to customize the UI options based on your specific requirements

## Difference between DocumentEditorContainer and DocumentEditor

* **DocumentEditorContainer**: A complete solution with a predefined toolbar and properties pane for comprehensive document editing
* **DocumentEditor**:  A customizable component where you build the UI according to your specific requirements.

{% tabcontents %}

{% tabcontent TypeScript %}

## Adding DocumentEditor component

Add the DocumentEditor component to your application. In the `src/App.tsx` file, add the following code to initialize the component with the required services

```ts
import * as React from 'react';
import { 
    DocumentEditorComponent, 
    Print, 
    SfdtExport, 
    WordExport, 
    TextExport, 
    Selection, 
    Search, 
    Editor, 
    ImageResizer, 
    EditorHistory, 
    ContextMenu, 
    OptionsPane, 
    HyperlinkDialog, 
    TableDialog, 
    BookmarkDialog, 
    TableOfContentsDialog, 
    PageSetupDialog, 
    StyleDialog, 
    ListDialog, 
    ParagraphDialog, 
    BulletsAndNumberingDialog, 
    FontDialog, 
    TablePropertiesDialog, 
    BordersAndShadingDialog, 
    TableOptionsDialog, 
    CellOptionsDialog, 
    StylesDialog 
} from '@syncfusion/ej2-react-documenteditor';

DocumentEditorComponent.Inject(
    Print, 
    SfdtExport, 
    WordExport, 
    TextExport, 
    Selection, 
    Search, 
    Editor, 
    ImageResizer, 
    EditorHistory, 
    ContextMenu, 
    OptionsPane, 
    HyperlinkDialog, 
    TableDialog, 
    BookmarkDialog, 
    TableOfContentsDialog, 
    PageSetupDialog, 
    StyleDialog, 
    ListDialog, 
    ParagraphDialog, 
    BulletsAndNumberingDialog, 
    FontDialog, 
    TablePropertiesDialog, 
    BordersAndShadingDialog, 
    TableOptionsDialog, 
    CellOptionsDialog, 
    StylesDialog
);

function App() {
    return (
        <DocumentEditorComponent 
            id="container" 
            height={'330px'} 
            serviceUrl="https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/" 
            isReadOnly={false} 
            enablePrint={true} 
            enableSelection={true} 
            enableEditor={true} 
            enableEditorHistory={true} 
            enableContextMenu={true} 
            enableSearch={true} 
            enableOptionsPane={true} 
            enableBookmarkDialog={true} 
            enableBordersAndShadingDialog={true} 
            enableFontDialog={true} 
            enableTableDialog={true} 
            enableParagraphDialog={true} 
            enableHyperlinkDialog={true} 
            enableImageResizer={true} 
            enableListDialog={true} 
            enablePageSetupDialog={true} 
            enableSfdtExport={true} 
            enableStyleDialog={true} 
            enableTableOfContentsDialog={true} 
            enableTableOptionsDialog={true} 
            enableTablePropertiesDialog={true} 
            enableTextExport={true} 
            enableWordExport={true} 
        />
    );
}

export default App;
```
> The hosted Web API URL is for demo and evaluation purposes only. For production, host your own web service using the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or the [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server).

{% tabs %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/document-editor/react/base-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "/document-processing/code-snippet/document-editor/react/base-cs2" %}

{% endtabcontent %}

{% tabcontent JavaScript %}

## Adding DocumentEditor component

Add the DocumentEditor component to your application. In the `src/App.jsx` file, add the following code to initialize the component with the required services

```jsx
import React from 'react';
import {
  DocumentEditorComponent,
  Print,
  SfdtExport,
  WordExport,
  TextExport,
  Selection,
  Search,
  Editor,
  ImageResizer,
  EditorHistory,
  ContextMenu,
  OptionsPane,
  HyperlinkDialog,
  TableDialog,
  BookmarkDialog,
  TableOfContentsDialog,
  PageSetupDialog,
  StyleDialog,
  ListDialog,
  ParagraphDialog,
  BulletsAndNumberingDialog,
  FontDialog,
  TablePropertiesDialog,
  BordersAndShadingDialog,
  TableOptionsDialog,
  CellOptionsDialog,
  StylesDialog
} from '@syncfusion/ej2-react-documenteditor';

DocumentEditorComponent.Inject(
  Print,
  SfdtExport,
  WordExport,
  TextExport,
  Selection,
  Search,
  Editor,
  ImageResizer,
  EditorHistory,
  ContextMenu,
  OptionsPane,
  HyperlinkDialog,
  TableDialog,
  BookmarkDialog,
  TableOfContentsDialog,
  PageSetupDialog,
  StyleDialog,
  ListDialog,
  ParagraphDialog,
  BulletsAndNumberingDialog,
  FontDialog,
  TablePropertiesDialog,
  BordersAndShadingDialog,
  TableOptionsDialog,
  CellOptionsDialog,
  StylesDialog
);

function App() {
  return (
    <DocumentEditorComponent
      id="container"
      height="330px"
      serviceUrl="https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/"
      isReadOnly={false}
      enablePrint={true}
      enableSelection={true}
      enableEditor={true}
      enableEditorHistory={true}
      enableContextMenu={true}
      enableSearch={true}
      enableOptionsPane={true}
      enableBookmarkDialog={true}
      enableBordersAndShadingDialog={true}
      enableFontDialog={true}
      enableTableDialog={true}
      enableParagraphDialog={true}
      enableHyperlinkDialog={true}
      enableImageResizer={true}
      enableListDialog={true}
      enablePageSetupDialog={true}
      enableSfdtExport={true}
      enableStyleDialog={true}
      enableTableOfContentsDialog={true}
      enableTableOptionsDialog={true}
      enableTablePropertiesDialog={true}
      enableTextExport={true}
      enableWordExport={true}
    />
  );
}

export default App;

```
> The hosted Web API URL is for demo and evaluation purposes only. For production, host your own web service using the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or the [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server).

{% tabs %}
{% highlight ts tabtitle="app.jsx" %}
{% include code-snippet/document-editor/react/base-cs2/app/index.jsx %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "/document-processing/code-snippet/document-editor/react/base-cs2" %}

{% endtabcontent %}

{% endtabcontents %}