---
layout: post
title: DocumentEditor component in React DOCX Editor | Syncfusion
description: Learn the differences between DocumentEditorContainer and DocumentEditor in the Syncfusion React DOCX Editor and learn when to use each component.
platform: document-processing
control: DocumentEditor
documentation: ug
domainurl: ##DomainURL##
---

# DocumentEditorContainer and DocumentEditor in React DOCX Editor

In this article, we explain the differences between **DocumentEditorContainer** and **DocumentEditor**, and also describe how to use the **DocumentEditor** component in the [React DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/react-docx-editor).

## Difference between DocumentEditorContainer and DocumentEditor

- **DocumentEditorContainer**: A ready-to-use document editing solution that includes a built-in toolbar, properties pane, and predefined UI elements. It is ideal for applications that require a complete document editing experience with minimal setup and configuration.

- **DocumentEditor**: A customizable document editing component that provides the core document viewing and editing capabilities without a built-in toolbar or properties pane. It is ideal for applications that require custom toolbars, tailored workflows, or unique user interface designs.

### When to use DocumentEditorContainer and DocumentEditor

- Choose **DocumentEditorContainer** for standard document editing scenarios (applications similar to Microsoft Word).
- Choose **DocumentEditor** for advanced or unique UI/UX requirements where customization is key.

## Adding DocumentEditor component

{% tabcontents %}

{% tabcontent TypeScript %}

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
N> The hosted Web API URL is for demo and evaluation purposes only. For production, host your own web service using the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or the [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server).

{% tabs %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/document-editor/react/base-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "/document-processing/code-snippet/document-editor/react/base-cs2" %}

{% endtabcontent %}

{% tabcontent JavaScript %}

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
N> The hosted Web API URL is for demo and evaluation purposes only. For production, host your own web service using the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or the [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server).

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/document-editor/react/base-cs2/app/index.jsx %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "/document-processing/code-snippet/document-editor/react/base-cs2" %}

{% endtabcontent %}

{% endtabcontents %}

## See Also

* [How to customize toolbar](./customize-tool-bar)
* [How to use DocumentEditorContainer Component](../getting-started.md)