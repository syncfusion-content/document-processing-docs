---
layout: post
title: How to Use Custom Fonts in Angular DOCX Editor | Syncfusion
description: Register and use custom fonts in Syncfusion® Angular DOCX Editor so documents render with fonts not installed on the user's machine.
platform: document-processing
control: Use custom fonts
documentation: ug
domainurl: ##DomainURL##
---

# How to Use Custom Fonts in Angular DOCX Editor

The [Angular DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/angular-docx-editor) (Document Editor) supports custom fonts so that you can use fonts that are not installed on the user's machine. This is helpful when the document contains a specific font, such as a company-branded font, a regional language font, or any other font that is not available by default in the browser.

To use a custom font in the Document Editor, register the font using the [`setCustomFonts`](https://ej2.syncfusion.com/angular/documentation/api/document-editor/index-default#setcustomfonts) API and add the font family name to the [`fontFamilies`](https://ej2.syncfusion.com/angular/documentation/api/document-editor/documentEditorSettingsModel#fontfamilies) collection in the [`documentEditorSettings`](https://ej2.syncfusion.com/angular/documentation/api/document-editor/documentEditorSettingsModel) property. The fonts added to the `fontFamilies` collection are displayed in the font family drop-down list and can be applied within the document.

The following example code illustrates how to register a custom font and add it to the font family drop-down list.

```typescript
import { Component, OnInit, ViewChild } from '@angular/core';
import { DocumentEditorContainerComponent, ToolbarService } from '@syncfusion/ej2-angular-documenteditor';
@Component({
      selector: 'app-root',
      // specifies the template string for the DocumentEditorContainer component
      template: `<ejs-documenteditorcontainer #container serviceUrl="https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/" height="600px" style="display:block" [documentEditorSettings]= "fontFamilies" [enableToolbar]=true> </ejs-documenteditorcontainer>`,
      providers: [ToolbarService]
})
export class AppComponent implements OnInit {
    @ViewChild('container')
    public container: DocumentEditorContainerComponent;
    // Add the custom font family to list it in the font drop-down list.
    public fontFamilies={fontFamilies :['Algerian', 'Arial', 'Calibri', 'Times New Roman', 'Microsoft YaHei']};
    ngOnInit(): void {
        // Register the custom font with its font file source.
        this.container.documentEditor.setCustomFonts([
          {
            fontFamily: 'Microsoft YaHei',
            src: "url('https://db.onlinewebfonts.com/t/e63653407669814f5b0eb9bbdc175f77.ttf') format('truetype')"
          }
        ]);
    }
}
```

N> The Web API hosted link `https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/` utilized in the DOCX Editor's serviceUrl property is intended solely for demonstration and evaluation purposes. For production deployment, please host your own web service with your required server configurations. You can refer and reuse the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server) for hosting your own web service and use for the serviceUrl property.
