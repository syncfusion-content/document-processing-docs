---
layout: post
title: Scrolling and zooming in React DOCX Editor | Syncfusion
description: Learn here all about Scrolling and zooming in the Syncfusion React DOCX Editor of Syncfusion Essential JS 2 and more.
control: Scrolling zooming 
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Scrolling and zooming in React DOCX Editor

The [React DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/react-docx-editor) (Document Editor) renders the document page by page. You can scroll through the pages by mouse wheel or touch interactions. You can also scroll through the pages by using the `scrollToPage()` method of the document editor instance. Refer to the following code example.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/document-editor/react/scrolling-zooming-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/document-editor/react/scrolling-zooming-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/document-editor/react/scrolling-zooming-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "/document-processing/code-snippet/document-editor/react/scrolling-zooming-cs1" %}

N> Calling this method brings the specified page into view but doesn't move selection. Hence this method will work by default. That is, it works even if selection is not enabled.

If you wish to move the selection to any page in the document editor and bring it into view, you can use the `goToPage()` method of the selection instance. Refer to the following code example.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/document-editor/react/scrolling-zooming-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/document-editor/react/scrolling-zooming-cs2/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/document-editor/react/scrolling-zooming-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "/document-processing/code-snippet/document-editor/react/scrolling-zooming-cs2" %}

## Zooming

You can scale the contents in the document editor ranging from 10% to 500% of the actual size. You can achieve this using mouse or touch interactions. You can also use the `zoomFactor` property of the document editor instance. The value can be specified in a range from 0.1 to 5. Refer to the following code example.


{% raw %}
```ts
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import {
    DocumentEditorComponent, Print, SfdtExport, WordExport, TextExport,
    Selection, Search, Editor, ImageResizer, EditorHistory, ContextMenu, OptionsPane,
    HyperlinkDialog, TableDialog, BookmarkDialog, TableOfContentsDialog, PageSetupDialog, StyleDialog,
    ListDialog, ParagraphDialog, BulletsAndNumberingDialog, FontDialog, TablePropertiesDialog,
    BordersAndShadingDialog, TableOptionsDialog, CellOptionsDialog, StylesDialog,
} from '@syncfusion/ej2-react-documenteditor';

DocumentEditorComponent.Inject(Print, SfdtExport, WordExport, TextExport, Selection, Search, Editor, ImageResizer, EditorHistory, ContextMenu, OptionsPane, HyperlinkDialog, TableDialog, BookmarkDialog, TableOfContentsDialog, PageSetupDialog, StyleDialog, ListDialog, ParagraphDialog, BulletsAndNumberingDialog, FontDialog, TablePropertiesDialog, BordersAndShadingDialog, TableOptionsDialog, CellOptionsDialog, StylesDialog);

function App() {
    let documenteditor: DocumentEditorComponent;
    React.useEffect(() => {
        componentDidMount()
    }, []);
    function componentDidMount() {
        //Set zoom factor.
        documenteditor.zoomFactor = 3;
    }
    return (
        <DocumentEditorComponent id="container" ref={(scope) => { documenteditor = scope; }} height={'330px'} style={{
            width: '100%'
        }} isReadOnly={false} enablePrint={true} enableSelection={true} enableEditor={true} enableEditorHistory={true} enableContextMenu={true} enableSearch={true} enableOptionsPane={true} enableBookmarkDialog={true} enableBordersAndShadingDialog={true} enableFontDialog={true} enableTableDialog={true} enableParagraphDialog={true} enableHyperlinkDialog={true} enableImageResizer={true} enableListDialog={true} enablePageSetupDialog={true} enableSfdtExport={true} enableStyleDialog={true} enableTableOfContentsDialog={true} enableTableOptionsDialog={true} enableTablePropertiesDialog={true} enableTextExport={true} enableWordExport={true} />
    );
}
export default App;
ReactDOM.render(<App />, document.getElementById('sample'));

```
{% endraw %}
{% raw %}
```ts
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { DocumentEditorComponent, Print, SfdtExport, WordExport, TextExport, Selection, Search, Editor, ImageResizer, EditorHistory, ContextMenu, OptionsPane, HyperlinkDialog, TableDialog, BookmarkDialog, TableOfContentsDialog, PageSetupDialog, StyleDialog, ListDialog, ParagraphDialog, BulletsAndNumberingDialog, FontDialog, TablePropertiesDialog, BordersAndShadingDialog, TableOptionsDialog, CellOptionsDialog, StylesDialog, } from '@syncfusion/ej2-react-documenteditor';
DocumentEditorComponent.Inject(Print, SfdtExport, WordExport, TextExport, Selection, Search, Editor, ImageResizer, EditorHistory, ContextMenu, OptionsPane, HyperlinkDialog, TableDialog, BookmarkDialog, TableOfContentsDialog, PageSetupDialog, StyleDialog, ListDialog, ParagraphDialog, BulletsAndNumberingDialog, FontDialog, TablePropertiesDialog, BordersAndShadingDialog, TableOptionsDialog, CellOptionsDialog, StylesDialog);
function App() {
    let documenteditor;
    React.useEffect(() => {
        componentDidMount();
    }, []);
    function componentDidMount() {
        //Set zoom factor.
        documenteditor.zoomFactor = 3;
    }
    return (<DocumentEditorComponent id="container" ref={(scope) => { documenteditor = scope; }} height={'330px'} style={{
            width: '100%'
        }} isReadOnly={false} enablePrint={true} enableSelection={true} enableEditor={true} enableEditorHistory={true} enableContextMenu={true} enableSearch={true} enableOptionsPane={true} enableBookmarkDialog={true} enableBordersAndShadingDialog={true} enableFontDialog={true} enableTableDialog={true} enableParagraphDialog={true} enableHyperlinkDialog={true} enableImageResizer={true} enableListDialog={true} enablePageSetupDialog={true} enableSfdtExport={true} enableStyleDialog={true} enableTableOfContentsDialog={true} enableTableOptionsDialog={true} enableTablePropertiesDialog={true} enableTextExport={true} enableWordExport={true}/>);
}
export default App;
ReactDOM.render(<App />, document.getElementById('sample'));
```
{% endraw %}

## Page Fit Type

Apart from specifying the zoom factor as a value, the Document Editor provides an option to specify page fit options such as fit to full page or fit to page width. You can set this option using the `fitPage` method of the document editor instance. Refer to the following code example.


{% raw %}
```ts
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import {
    DocumentEditorComponent, DocumentEditor, Print, SfdtExport, WordExport, TextExport,
    Selection, Search, Editor, ImageResizer, EditorHistory, ContextMenu, OptionsPane,
    HyperlinkDialog, TableDialog, BookmarkDialog, TableOfContentsDialog, PageSetupDialog, StyleDialog,
    ListDialog, ParagraphDialog, BulletsAndNumberingDialog, FontDialog, TablePropertiesDialog,
    BordersAndShadingDialog, TableOptionsDialog, CellOptionsDialog, StylesDialog,
} from '@syncfusion/ej2-react-documenteditor';

DocumentEditorComponent.Inject(Print, SfdtExport, WordExport, TextExport, Selection, Search, Editor, ImageResizer, EditorHistory, ContextMenu, OptionsPane, HyperlinkDialog, TableDialog, BookmarkDialog, TableOfContentsDialog, PageSetupDialog, StyleDialog, ListDialog, ParagraphDialog, BulletsAndNumberingDialog, FontDialog, TablePropertiesDialog, BordersAndShadingDialog, TableOptionsDialog, CellOptionsDialog, StylesDialog);
function App() {
    let documenteditor: DocumentEditorComponent;
    React.useEffect(() => {
        componentDidMount()
    }, []);
    function componentDidMount(): void {
        documenteditor.fitPage('FitPageWidth');
    }
    return (
        <DocumentEditorComponent id="container" ref={(scope) => { documenteditor = scope; }} height={'330px'} style={{ width: '100%' }} isReadOnly={false} enablePrint={true} enableSelection={true} enableEditor={true} enableEditorHistory={true} enableContextMenu={true} enableSearch={true} enableOptionsPane={true} enableBookmarkDialog={true} enableBordersAndShadingDialog={true} enableFontDialog={true} enableTableDialog={true} enableParagraphDialog={true} enableHyperlinkDialog={true} enableImageResizer={true} enableListDialog={true} enablePageSetupDialog={true} enableSfdtExport={true} enableStyleDialog={true} enableTableOfContentsDialog={true} enableTableOptionsDialog={true} enableTablePropertiesDialog={true} enableTextExport={true} enableWordExport={true} />
    );

}
export default App;
ReactDOM.render(<App />, document.getElementById('sample'));

```
{% endraw %}
{% raw %}
```ts
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { DocumentEditorComponent, Print, SfdtExport, WordExport, TextExport, Selection, Search, Editor, ImageResizer, EditorHistory, ContextMenu, OptionsPane, HyperlinkDialog, TableDialog, BookmarkDialog, TableOfContentsDialog, PageSetupDialog, StyleDialog, ListDialog, ParagraphDialog, BulletsAndNumberingDialog, FontDialog, TablePropertiesDialog, BordersAndShadingDialog, TableOptionsDialog, CellOptionsDialog, StylesDialog, } from '@syncfusion/ej2-react-documenteditor';
DocumentEditorComponent.Inject(Print, SfdtExport, WordExport, TextExport, Selection, Search, Editor, ImageResizer, EditorHistory, ContextMenu, OptionsPane, HyperlinkDialog, TableDialog, BookmarkDialog, TableOfContentsDialog, PageSetupDialog, StyleDialog, ListDialog, ParagraphDialog, BulletsAndNumberingDialog, FontDialog, TablePropertiesDialog, BordersAndShadingDialog, TableOptionsDialog, CellOptionsDialog, StylesDialog);
function App() {
    let documenteditor;
    React.useEffect(() => {
        componentDidMount();
    }, []);
    function componentDidMount() {
        documenteditor.fitPage('FitPageWidth');
    }
    return (<DocumentEditorComponent id="container" ref={(scope) => { documenteditor = scope; }} height={'330px'} style={{ width: '100%' }} isReadOnly={false} enablePrint={true} enableSelection={true} enableEditor={true} enableEditorHistory={true} enableContextMenu={true} enableSearch={true} enableOptionsPane={true} enableBookmarkDialog={true} enableBordersAndShadingDialog={true} enableFontDialog={true} enableTableDialog={true} enableParagraphDialog={true} enableHyperlinkDialog={true} enableImageResizer={true} enableListDialog={true} enablePageSetupDialog={true} enableSfdtExport={true} enableStyleDialog={true} enableTableOfContentsDialog={true} enableTableOptionsDialog={true} enableTablePropertiesDialog={true} enableTextExport={true} enableWordExport={true}/>);
}
export default App;
ReactDOM.render(<App />, document.getElementById('sample'));
```
{% endraw %}

## Zoom option using UI

The following code example shows how to provide zoom options in the document editor.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/document-editor/react/scrolling-zooming-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/document-editor/react/scrolling-zooming-cs3/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/document-editor/react/scrolling-zooming-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "/document-processing/code-snippet/document-editor/react/scrolling-zooming-cs3" %}