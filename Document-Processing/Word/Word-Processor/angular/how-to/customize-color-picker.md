---
layout: post
title: Customize color picker in Angular DOCX Editor | Syncfusion
description: Learn here all about Customize color picker in Syncfusion Angular Document Editor component of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Customize color picker 
documentation: ug
domainurl: ##DomainURL##
---

# Customize color picker in Angular Document Editor component

[Angular DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/angular-docx-editor) provides options to customize the color picker using [`colorPickerSettings`](https://ej2.syncfusion.com/angular/documentation/api/document-editor/documentEditorSettingsModel#colorpickersettings) in Document Editor settings. The color picker allows customization of its default appearance by selecting between Picker and Palette modes for font and border colors.

Similarly, you can also use the [`documentEditorSettings`](https://ej2.syncfusion.com/angular/documentation/api/document-editor) property for the standalone DocumentEditor.

The following example code illustrates how to customize the color picker in the Document Editor container.


```typescript
import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ToolbarService,
  DocumentEditorContainerComponent,
} from '@syncfusion/ej2-angular-documenteditor';
import { DocumentEditorContainerModule } from '@syncfusion/ej2-angular-documenteditor';
@Component({
  selector: 'app-container',
  standalone: true,
  imports: [DocumentEditorContainerModule],
  providers: [ToolbarService],
  template: `<ejs-documenteditorcontainer #documenteditor_default 
      serviceUrl="https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/" 
      height="600px" 
      style="display:block" 
      [documentEditorSettings]= "colorPickerSettings"
      [enableToolbar]=true >
    </ejs-documenteditorcontainer>
  `,
})
export class AppComponent implements OnInit {
  @ViewChild('documenteditor_default')
  public container?: DocumentEditorContainerComponent;
  public colorPickerSettings = {
    colorPickerSettings: {
      mode: 'Palette',
      modeSwitcher: true,
      showButtons: true,
    },
  };
  ngOnInit(): void {}
}
```

> The Web API hosted link `https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/` utilized in the Document Editor's serviceUrl property is intended solely for demonstration and evaluation purposes. For production deployment, please host your own web service with your required server configurations. You can refer and reuse the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server) for hosting your own web service and use for the serviceUrl property.

| Property | Behavior |
|---|---|
| columns | It is used to render the ColorPicker palette with specified columns. Defaults to 10 |
| disabled | It is used to enable / disable ColorPicker component. If it is disabled the ColorPicker popup won’t open. Defaults to false |
| mode | It is used to render the ColorPicker with the specified mode. Defaults to ‘Picker’ |
| modeSwitcher | It is used to show / hide the mode switcher button of ColorPicker component. Defaults to true |
| showButtons | It is used to show / hide the control buttons (apply / cancel) of ColorPicker component. Defaults to true |


N> According to the Word document specifications, it is not possible to modify the **`Predefined Highlight colors`**. This limitation means that the range of highlight colors provided by default cannot be customized or expanded upon by the user to suit individual preferences. Consequently, users must work within the confines of the existing color palette, as no functionality currently exists to modify or personalize these predefined highlighting options.

## Online Demo

Explore how to customize the color picker in the Angular Document Editor for formatting Word documents in this live demo [here](https://document.syncfusion.com/demos/docx-editor/angular/#/tailwind3/document-editor/color-picker-customization).