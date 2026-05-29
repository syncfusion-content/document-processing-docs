---
layout: post
title: Customize color picker in React Document editor component | Syncfusion
description: Learn here all about Customize color picker in Syncfusion React Document editor component of Syncfusion Essential JS 2 and more.
control: Customize color picker 
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---
# Customize color picker in React Document editor control

Document editor provides an options to customize the color picker using [`colorPickerSettings`](https://ej2.syncfusion.com/react/documentation/api/document-editor/documentEditorSettingsModel#colorpickersettings) in Document editor settings. Color picker offers customization options for default appearance, by allowing selection between Picker or Palette mode, for font and border colors."

Similarly, you can use [`documentEditorSettings`](https://ej2.syncfusion.com/react/documentation/api/document-editor#documenteditorsettings) property for DocumentEditor also.

The following example code illustrates how to Customize the color picker in Document editor container.

```ts
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import {
  DocumentEditorContainerComponent,
  Toolbar,
} from '@syncfusion/ej2-react-documenteditor';

DocumentEditorContainerComponent.Inject(Toolbar);
function App() {
  let container;
// Add required color picker settings to the document editor settings
let settings =  {colorPickerSettings: { mode: 'Palette', modeSwitcher: true, showButtons: true }};
return (
  <DocumentEditorContainerComponent
    id="container"
    height={'590px'}
    serviceUrl="https://ej2services.syncfusion.com/production/web-services/api/documenteditor/"
    enableToolbar={true}
    documentEditorSettings={settings}
  />
);
  return (
    <DocumentEditorContainerComponent
      id="container"
      ref={(scope) => {
        container = scope;
      }}
      height={'590px'}
      serviceUrl="https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/"
      enableToolbar={true}
    />
  );
}
export default App;
ReactDOM.render(<App />, document.getElementById('sample'));
```

N> The hosted Web API URL is for demo and evaluation purposes only. For production, host your own web service using the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or the [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server).

The following table illustrates all the possible properties for the color picker.

| Property | Behavior |
|---|---|
| columns | It is used to render the ColorPicker palette with specified columns. Defaults to 10 |
| disabled | It is used to enable / disable ColorPicker component. If it is disabled the ColorPicker popup won’t open. Defaults to false |
| mode | It is used to render the ColorPicker with the specified mode. Defaults to ‘Picker’ |
| modeSwitcher | It is used to show / hide the mode switcher button of ColorPicker component. Defaults to true |
| showButtons | It is used to show / hide the control buttons (apply / cancel) of ColorPicker component. Defaults to true |


N> According to the Word document specifications, it is not possible to modify the **`Predefined Highlight colors`**. This limitation means that the range of highlight colors provided by default cannot be customized or expanded upon by the user to suit individual preferences. Consequently, users must work within the confines of the existing color palette, as no functionality currently exists to modify or personalize these predefined highlighting options.
