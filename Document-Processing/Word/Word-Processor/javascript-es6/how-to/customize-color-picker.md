---
layout: post
title: Customize Color Picker in JavaScript (ES6) DOCX Editor control | Syncfusion
description: Learn here all about Customize Color Picker in Syncfusion JavaScript (ES6) Document Editor control of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Customize Color Picker
documentation: ug
domainurl: ##DomainURL##
---

# Customize Color Picker in JavaScript (ES6) Document Editor control

[TypeScript DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/javascript-docx-editor) (Document Editor) provides an option to customize the color picker using [`colorPickerSettings`](https://ej2.syncfusion.com/documentation/api/document-editor/documentEditorSettingsModel#colorpickersettings) in the Document Editor settings. The color picker offers customization for the default appearance, allowing selection between Picker or Palette mode for font and border colors.

Similarly, you can use the [`documentEditorSettings`](https://ej2.syncfusion.com/documentation/api/document-editor#documenteditorsettings) property for the DocumentEditor as well.

The following example code illustrates how to customize the color picker in the Document Editor container.

```ts
let container: DocumentEditorContainer = new DocumentEditorContainer({ enableToolbar: true, height: '590px',
  //Customizing options for the color picker.
  documentEditorSettings: {
    colorPickerSettings: { mode: 'Palette', modeSwitcher: true, showButtons: true },
  }
});
DocumentEditorContainer.Inject(Toolbar);
container.serviceUrl = 'https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/';
container.appendTo('#container');
```

N> The Web API hosted link `https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/` utilized in the Document Editor's serviceUrl property is intended solely for demonstration and evaluation purposes. For production deployment, please host your own web service with your required server configurations. You can refer and reuse the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server) for hosting your own web service and use for the serviceUrl property.

The following table illustrates all the possible properties for the color picker.

| Property | Behavior |
|---|---|
| columns | It is used to render the ColorPicker palette with specified columns. Defaults to 10 |
| disabled | It is used to enable / disable the ColorPicker component. If it is disabled, the ColorPicker popup won't open. Defaults to false |
| mode | It is used to render the ColorPicker with the specified mode. Defaults to `Picker` |
| modeSwitcher | It is used to show / hide the mode switcher button of the ColorPicker component. Defaults to true |
| showButtons | It is used to show / hide the control buttons (apply / cancel) of the ColorPicker component. Defaults to true |


N> According to the Word document specifications, it is not possible to modify the **`predefined highlight colors`**. This limitation means that the range of highlight colors provided by default cannot be customized or expanded by the user to suit individual preferences. Consequently, users must work within the confines of the existing color palette, as no functionality currently exists to modify or personalize these predefined highlighting options.

## Online Demo

Explore how to customize the color picker in the JavaScript DOCX Editor for Word documents in this live demo [here](https://document.syncfusion.com/demos/docx-editor/javascript/#/material3/document-editor/colorpicker-customization.html).