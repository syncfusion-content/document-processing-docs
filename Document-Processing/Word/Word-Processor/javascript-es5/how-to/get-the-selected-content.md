---
layout: post
title: How to Get Selected Content in JavaScript DOCX Editor | Syncfusion
description: Get selected content as plain text and SFDT rich text in Syncfusion® JavaScript DOCX Editor for content extraction, processing, and customization.
platform: document-processing
control: Get the Selected Content
documentation: ug
domainurl: ##DomainURL##
---

# How to Get Selected Content in JavaScript DOCX Editor

You can get the selected content from the [JavaScript DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/javascript-docx-editor) (Document Editor) component as plain text and SFDT (rich text).

## Get the Selected Content as Plain Text

You can use the [`text`](https://ej2.syncfusion.com/javascript/documentation/api/document-editor/selection#text-code-classlanguage-textstringcode) API to get the selected content as plain text from the DOCX Editor.

The following example code illustrates how to add a Search in Google option in the context menu for the selected text.

```ts
import { DocumentEditorContainer, Toolbar, CustomContentMenuEventArgs } from '@syncfusion/ej2-documenteditor';
import { MenuItemModel } from '@syncfusion/ej2-navigations';

DocumentEditorContainer.Inject(Toolbar);

let container: DocumentEditorContainer = new DocumentEditorContainer({ enableToolbar: true, height: '590px' });

container.serviceUrl = 'https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/';

container.appendTo('#container');

// Creating custom menu items
let menuItems: MenuItemModel[] = [
    {
        text: 'Search in Google',
        id: 'search_in_google',
        iconCss: 'e-icons e-de-ctnr-find'
    }];
// Adding custom options
container.documentEditor.contextMenu.addCustomMenu(menuItems, false);
// To handle the context menu select event
container.documentEditor.customContextMenuSelect = (args: CustomContentMenuEventArgs): void => {
    let item: string = args.id;
    let id: string = container.documentEditor.element.id;
    switch (item) {
        case id + 'search_in_google':
            // To get the selected content as plain text
            let searchContent: string = container.documentEditor.selection.text;
            if (!container.documentEditor.selection.isEmpty && /\S/.test(searchContent)) {
                window.open('http://google.com/search?q=' + searchContent);
            }
            break;
    }
};
```

N> The Web API hosted link `https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/` utilized in the DOCX Editor's serviceUrl property is intended solely for demonstration and evaluation purposes. For production deployment, please host your own web service with your required server configurations. You can refer and reuse the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server) for hosting your own web service and use for the serviceUrl property.

You can add the following custom options using this API:

* Save or export the selected text as a text file.
* Search the selected text in Google or other search engines.
* Show synonyms for the selected word in the context menu and replace with the selected synonym using the setter method of the same API.

## Get the Selected Content as SFDT (Rich Text)

You can use the [`sfdt`](https://ej2.syncfusion.com/javascript/documentation/api/document-editor/selection#sfdt-code-classlanguage-textstringcode) API to get the selected content as rich text from the DOCX Editor.

The following example code illustrates how to get the content of a bookmark and export it as SFDT.

```js
import { DocumentEditorContainer, Toolbar } from '@syncfusion/ej2-documenteditor';

DocumentEditorContainer.Inject(Toolbar);

let container: DocumentEditorContainer = new DocumentEditorContainer({ enableToolbar: true, height: '590px' });

container.serviceUrl = 'https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/';

container.appendTo('#container');

// To insert text at the cursor position
container.documentEditor.editor.insertText('Document editor');
// To select all the content in document
container.documentEditor.selection.selectAll();
// Insert bookmark to selected content
container.documentEditor.editor.insertBookmark('Bookmark1');
//Select the bookmark
container.documentEditor.selection.selectBookmark('Bookmark1');
// To get the selected content as SFDT
let selectedContent: string = container.documentEditor.selection.sfdt;
// Insert the SFDT content at the cursor position using the paste API
container.documentEditor.editor.paste(selectedContent);
```

N> The Web API hosted link `https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/` utilized in the DOCX Editor's serviceUrl property is intended solely for demonstration and evaluation purposes. For production deployment, please host your own web service with your required server configurations. You can refer and reuse the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server) for hosting your own web service and use for the serviceUrl property.

You can add the following custom options using this API:

* Save or export the selected content as an SFDT file.
* Get the content of a bookmark in a Word document as SFDT by selecting a bookmark using the [`selectBookmark`](https://ej2.syncfusion.com/javascript/documentation/api/document-editor/selection#selectbookmark) API.
* Create template content that can be inserted to multiple documents at the cursor position using the [`paste`](https://ej2.syncfusion.com/javascript/documentation/api/document-editor/editor#paste) API.