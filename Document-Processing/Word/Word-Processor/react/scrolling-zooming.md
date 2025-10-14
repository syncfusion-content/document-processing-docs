---
layout: post
title: Scrolling zooming in React Document editor component | Syncfusion
description: Learn here all about Scrolling zooming in Syncfusion React Document editor component of Syncfusion Essential JS 2 and more.
control: Scrolling zooming 
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Scrolling zooming in React Document editor component

The Document Editor renders the document as page by page. You can scroll through the pages by mouse wheel or touch interactions. You can also scroll through the page by using ‘scrollToPage()’ method of document editor instance. Refer to the following code example.

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

> Calling this method brings the specified page into view but doesn’t move selection. Hence this method will work by default. That is, it works even if selection is not enabled.

In case, if you wish to move the selection to any page in document editor and bring it into view, you can use ‘goToPage()’ method of selection instance. Refer to the following code example.

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

You can scale the contents in document editor ranging from 10% to 500% of the actual size. You can achieve this using mouse or touch interactions. You can also use ‘zoomFactor’ property of document editor instance. The value can be specified in a range from 0.1 to 5. Refer to the following code example.


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

Apart from specifying the zoom factor as value, the Document Editor provides option to specify page fit options such as fit to full page or fit to page width. You can set this option using ‘fitPage’ method of document editor instance. Refer to the following code example.


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

The following code example shows how to provide zoom options in document editor.

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