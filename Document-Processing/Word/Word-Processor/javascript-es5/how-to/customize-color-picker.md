---
layout: post
title: Customize color picker in EJ2 Javascript Document editor control | Syncfusion
description: Learn here all about Customize color picker in Syncfusion EJ2 Javascript Document editor control of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Customize Color Picker 
publishingplatform: EJ2 Javascript
documentation: ug
domainurl: ##DomainURL##
---

# Customize color picker in EJ2 Javascript Document editor control

Document editor provides an options to customize the color picker using [`colorPickerSettings`](https://ej2.syncfusion.com/javascript/documentation/api/document-editor/documentEditorSettingsModel#colorpickersettings) in Document editor settings. The color picker offers customization options for default appearance, by allowing selection between Picker or Palette mode, for font and border colors."

Similarly, you can use [`documentEditorSettings`](https://ej2.syncfusion.com/javascript/documentation/api/document-editor#documenteditorsettings) property for DocumentEditor also.

The following example code illustrates how to Customize the color picker in Document editor container.

```ts
let container: DocumentEditorContainer = new DocumentEditorContainer({ enableToolbar: true,height: '590px',
  //Customizing options for color picker.
  documentEditorSettings: {
    colorPickerSettings: { mode: 'Palette', modeSwitcher: true, showButtons: true },
  }
});
DocumentEditorContainer.Inject(Toolbar);
container.serviceUrl = 'https://services.syncfusion.com/js/production/api/documenteditor/';
container.appendTo('#container');
```

> The Web API hosted link `https://services.syncfusion.com/js/production/api/documenteditor/` utilized in the Document Editor's serviceUrl property is intended solely for demonstration and evaluation purposes. For production deployment, please host your own web service with your required server configurations. You can refer and reuse the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server) for hosting your own web service and use for the serviceUrl property.

The following table illustrates all the possible properties for the color picker.

| Property | Behavior |
|---|---|
| columns | It is used to render the ColorPicker palette with specified columns. Defaults to 10 |
| disabled | It is used to enable / disable ColorPicker component. If it is disabled the ColorPicker popup won’t open. Defaults to false |
| mode | It is used to render the ColorPicker with the specified mode. Defaults to ‘Picker’ |
| modeSwitcher | It is used to show / hide the mode switcher button of ColorPicker component. Defaults to true |
| showButtons | It is used to show / hide the control buttons (apply / cancel) of ColorPicker component. Defaults to true |


>**Note**: According to the Word document specifications, it is not possible to modify the **`Predefined Highlight colors`**. This limitation means that the range of highlight colors provided by default cannot be customized or expanded upon by the user to suit individual preferences. Consequently, users must work within the confines of the existing color palette, as no functionality currently exists to modify or personalize these predefined highlighting options.