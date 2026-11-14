---
layout: post
title: How to Use Custom Fonts in TypeScript DOCX Editor | Syncfusion
description: Register and use custom fonts in Syncfusion® TypeScript (ES6) DOCX Editor so documents render with fonts not installed on the user's machine.
platform: document-processing
control: Use custom fonts
documentation: ug
domainurl: ##DomainURL##
---

# How to Use Custom Fonts in TypeScript (ES6) DOCX Editor

The [TypeScript DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/javascript-docx-editor) (Document Editor) supports custom fonts so that you can use fonts that are not installed on the user's machine. This is helpful when the document contains a specific font, such as a company-branded font, a regional language font, or any other font that is not available by default in the browser.

To use a custom font in the Document Editor, register the font using the [`setCustomFonts`](https://ej2.syncfusion.com/documentation/api/document-editor/index-default#setcustomfonts) API and add the font family name to the [`fontFamilies`](https://ej2.syncfusion.com/documentation/api/document-editor/documentEditorSettingsModel#fontfamilies) collection in the [`documentEditorSettings`](https://ej2.syncfusion.com/documentation/api/document-editor/documentEditorSettingsModel) property. The fonts added to the `fontFamilies` collection are displayed in the font family drop-down list and can be applied within the document.

The following example code illustrates how to register a custom font and add it to the font family drop-down list.

```ts
import { DocumentEditorContainer, Toolbar } from '@syncfusion/ej2-documenteditor';

DocumentEditorContainer.Inject(Toolbar);

let container: DocumentEditorContainer = new DocumentEditorContainer({
  enableToolbar: true,
  height: '590px',
  documentEditorSettings: {
    // Add the custom font family to list it in the font drop-down list.
    fontFamilies: ['Algerian', 'Arial', 'Calibri', 'Times New Roman', 'Microsoft YaHei']
  }
});
container.serviceUrl = 'https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/';
container.appendTo('#container');

// Register the custom font with its font file source.
container.documentEditor.setCustomFonts([
  {
    fontFamily: 'Microsoft YaHei',
    src: "url('https://db.onlinewebfonts.com/t/e63653407669814f5b0eb9bbdc175f77.ttf') format('truetype')"
  }
]);
```

