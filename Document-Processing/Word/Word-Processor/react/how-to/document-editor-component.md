---
layout: post
title: DocumentEditorContainer vs DocumentEditor in React | Syncfusion
description: Learn the differences between DocumentEditorContainer and DocumentEditor in the Syncfusion React DOCX Editor and learn when to use each component.
platform: document-processing
control: DocumentEditor
documentation: ug
domainurl: ##DomainURL##
---

# DocumentEditorContainer vs DocumentEditor in React DOCX Editor

In this article, we explain the differences between **DocumentEditorContainer** and **DocumentEditor**, and also describe how to use the **DocumentEditor** component in the React DOCX Editor.

## Difference between DocumentEditorContainer and DocumentEditor

The **DocumentEditor** component provides a flexible foundation for creating, viewing, and editing Word documents. Unlike **DocumentEditorContainer**, this component allows you to customize the UI options based on your specific requirements.

- **DocumentEditorContainer**: A complete solution with a predefined toolbar and properties pane that provides a comprehensive document editing experience. It allows users to create, view, and edit Word documents with minimal configuration.
- **DocumentEditor**: A customizable component that provides a flexible foundation for creating, viewing, and editing Word documents. This component allows you to build a user interface based on your specific requirements.

### When to Use DocumentEditorContainer and DocumentEditor

- Choose **DocumentEditorContainer** for standard document editing scenarios (applications similar to Microsoft Word).
- Choose **DocumentEditor** for advanced or unique UI/UX requirements where customization is key.

## Adding DocumentEditor component

{% tabcontents %}

{% tabcontent TypeScript %}

Add the Document Editor component to your application. In the `src/App.tsx` file, add the following code to initialize the component:

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

Add the Document Editor component to your application. In the `src/App.jsx` file, add the following code to initialize the component:


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
{% highlight ts tabtitle="app.jsx" %}
{% include code-snippet/document-editor/react/base-cs2/app/index.jsx %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "/document-processing/code-snippet/document-editor/react/base-cs2" %}

{% endtabcontent %}

{% endtabcontents %}

## See Also

* [How to customize toolbar](./customize-tool-bar)
* [How to use DocumentEditor Container Component](../getting-started.md)