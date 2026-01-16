---
layout: post
title: Clipboard in JavaScript (ES6) Document editor | Syncfusion
description: Learn here all about Clipboard in Syncfusion JavaScript (ES6) Document editor control of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Clipboard 
documentation: ug
domainurl: ##DomainURL##
---

# Clipboard in JavaScript (ES6) Document editor control

Document Editor takes advantage of system clipboard and allows you to copy or move a portion of the document into it in HTML format, so that it can be pasted in any application that supports clipboard.

## Copy

Copy a portion of document to system clipboard using built-in context menu of Document Editor. You can also do it programmatically using the following sample code.

```ts
documentEditor.selection.copy();
```

## Cut

Cut a portion of document to system clipboard using built-in context menu of Document Editor. You can also do it programmatically using the following sample code.

```ts
documentEditor.editor.cut();
```

## Paste

Due to limitations, you can paste contents from system clipboard in Document Editor only using the ‘CTRL + V’ keyboard shortcut.

>Note: Due to browser limitation of getting content from system clipboard, paste using API and context menu option doesn't work.

## Local paste (copy/paste within control)

Document Editor expose API to enable local paste within the control. On enabling this, the following is performed:
* Selected contents will be stored to an internal clipboard in addition to system clipboard.
* Clipboard paste will be overridden, and internally stored data (SFDT data) that has formatted text will be pasted using paste() API in Document editor.

Refer to the following sample code.

```ts
//Initialize the Document Editor.
let editor: DocumentEditor = new DocumentEditor({ enableEditor: true, isReadOnly: false, enableSelection: true });
//Enable the local paste.
editor.enableLocalPaste = true;
```

By default, **enableLocalPaste** is false.

When local paste is enabled for a Document Editor instance, you can paste contents programmatically if the internal clipboard has stored data during last copy operation. Refer to the following sample code.

```ts
documentEditor.editor.paste();
```

### Paste options in context menu

In Document editor, paste options in context menu will be in disabled state if you were try to copy/paste content from outside of Document editor. It gets enabled when **enableLocalPaste** is true and trying to copy/paste content inside Document editor.

>Note: Due to browser limitation of getting content from system clipboard, paste using API and context menu option doesn't work. Hence, the paste option is disabled in context menu.
Alternatively, you can use the keyboard shortcuts,

* Cut: Ctrl + X
* Copy: Ctrl + C
* Paste: Ctrl + V

### EnableLocalPaste behavior

|**EnableLocalPaste** |**Paste behavior details**|
|--------------------------|----------------------|
|True |Allows to paste content that is copied from the same Document Editor component alone and prevents pasting content from system clipboard. Hence the content copied from outside Document Editor component can’t be pasted.<br>Browser limitation of pasting from system clipboard using API and context menu options, will be resolved. So, you can copy and paste content within the Document Editor component using API and context menu options too.|
|False|Allows to paste content from system clipboard. Hence the content copied from both the Document Editor component and outside can be pasted.<br>Browser limitation of pasting from system clipboard using API and context menu options, will remain as a limitation.|

Note:
* Keyboard shortcut for pasting will work properly in both cases.
* Copying content from Document Editor component and pasting outside will work properly in both cases.

## Paste with formatting

Document Editor provides support to paste the system clipboard data with formatting. To enable clipboard paste with formatting options and copy/paste content from outside of Document editor, set the `enableLocalPaste` property in Document Editor to false and use this .NET Standard library [`Syncfusion.EJ2.WordEditor.AspNet.Core`](<https://www.nuget.org/packages/Syncfusion.EJ2.WordEditor.AspNet.Core/>) by the web API service implementation. This library helps you to paste the system clipboard data with formatting.

Refer this [page](./web-services-overview) for more details.

You can paste your system clipboard data in the following ways:
* **Keep Source Formatting** This option retains the character styles and direct formatting applied to the copied text. Direct formatting includes characteristics such as font size, italics, or other formatting that is not included in the paragraph style.
* **Match Destination Formatting** This option discards most of the formatting applied directly to the copied text, but it retains the formatting applied for emphasis, such as bold and italic when it is applied to only a portion of the selection. The text takes on the style characteristics of the paragraph where it is pasted. The text also takes on any direct formatting or character style properties of text that immediately precedes the cursor when the text is pasted.
* **Text Only** This option discards all formatting and non-text elements such as pictures or tables. The text takes on the style characteristics of the paragraph where it is pasted and takes on any direct formatting or character style properties of text that immediately precedes the cursor when the text is pasted. Graphical elements are discarded and tables are converted to a series of paragraphs.

This paste option appear as follows.

![Image](images/paste.PNG)

## Events

DocumentEditor provides the [`beforePaste`](https://ej2.syncfusion.com/documentation/api/document-editor/index-default#beforepaste) event, which is triggered before content is pasted into the document. This event gives an opportunity to [`cancel`](https://ej2.syncfusion.com/documentation/api/document-editor/beforepasteeventargs#cancel) the paste operation, modify the content to be pasted using [`pasteContent`](https://ej2.syncfusion.com/documentation/api/document-editor/beforepasteeventargs#pastecontent), and determining its format with [`pasteType`](https://ej2.syncfusion.com/documentation/api/document-editor/beforepasteeventargs#pastetype). The event handler receives a [`BeforePasteEventArgs`](https://ej2.syncfusion.com/documentation/api/document-editor/beforepasteeventargs) object that contains all the necessary details about the paste operation.

The following code snippet illustrates how to achieve this:

```ts
import { DocumentEditorContainer, Toolbar, BeforePasteEventArgs } from '@syncfusion/ej2-documenteditor';
DocumentEditorContainer.Inject(Toolbar);
let container: DocumentEditorContainer = new DocumentEditorContainer({ enableToolbar: true,height: '590px', beforePaste:handleBeforePaste
});
DocumentEditorContainer.Inject(Toolbar);
container.serviceUrl = 'hostUrl';
container.appendTo('#container');
function handleBeforePaste (args : BeforePasteEventArgs){
    // Block HTML pasteType  and Modify the content
    if (args.pasteType === "Html") {
        args.pasteContent = `{"sections":[{"blocks":[{"inlines":[{"characterFormat":{"bold":true,"italic":true},"text":"HTML Content"}]}],"headersFooters":{}}]}`;
    }
    // Cancel paste if content matches 'Software'
    if(args.pasteContent == 'Software'){
      args.cancel = true;
    }
}
```

## See Also

* [Feature modules](./feature-module)
* [Keyboard shortcuts](./keyboard-shortcut#clipboard)
