---
layout: post
title: Customize font dropdown in React DOCX Editor | Syncfusion
description: Learn here all about Customize font family drop down in Syncfusion React Document Editor component of Syncfusion Essential JS 2 and more.
control: Customize font family drop down 
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Customize font family drop down in React Document Editor component

[React Document Editor](https://www.syncfusion.com/docx-editor-sdk/react-docx-editor) (Document Editor) provides options to customize the font family drop-down list values using [`fontFamilies`](https://ej2.syncfusion.com/react/documentation/api/document-editor/documentEditorSettingsModel#fontfamilies) in Document editor settings. Fonts added in the fontFamilies of [`documentEditorSettings`](https://ej2.syncfusion.com/react/documentation/api/document-editor-container#documenteditorsettings) will be displayed in the font drop-down list of the Text Properties pane and the Font dialog.

Similarly, you can use [`documentEditorSettings`](https://ej2.syncfusion.com/react/documentation/api/document-editor#documenteditorsettings) property for DocumentEditor also.

The following example code illustrates how to change the font families in Document editor container.

```ts
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import {
  DocumentEditorContainerComponent,
  Toolbar,
} from '@syncfusion/ej2-react-documenteditor';
DocumentEditorContainerComponent.Inject(Toolbar);
function App() {
  // Add the required font families to list them in the font drop-down
  let fontFamilies = {
    fontFamilies: ['Algerian', 'Arial', 'Calibri', 'Cambria'],
  };
  return (
    <DocumentEditorContainerComponent
      id="container"
      height={'590px'}
      serviceUrl="https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/"
      enableToolbar={true}
      documentEditorSettings={fontFamilies}
    />
  );
}
export default App;
ReactDOM.render(<App />, document.getElementById('sample'));
```

N> The Web API hosted link `https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/` utilized in the Document Editor's serviceUrl property is intended solely for demonstration and evaluation purposes. For production deployment, please host your own web service with your required server configurations. You can refer and reuse the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server) for hosting your own web service and use for the serviceUrl property.

The output will be as shown below:

![Font](../images/font-family.png)