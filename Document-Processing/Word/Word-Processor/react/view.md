---
layout: post
title: View in the React DOCX Editor component | Syncfusion
description: Learn here all about view options in the Syncfusion React Document Editor component of Syncfusion Essential JS 2 and more.
control: View 
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# View in the React Document Editor component

## Web layout

[React Document Editor](https://www.syncfusion.com/docx-editor-sdk/react-docx-editor) (Document Editor) Container component allows you to change the view to a web layout or print layout using the [`layoutType`](https://ej2.syncfusion.com/react/documentation/api/document-editor-container#layouttype) property with the supported [`LayoutType`](https://ej2.syncfusion.com/react/documentation/api/document-editor/layoutType).

```
<DocumentEditorContainerComponent id="container" layoutType={'Continuous'} enableToolbar={true}/>
```

N> The default value of [`layoutType`](https://ej2.syncfusion.com/react/documentation/api/document-editor-container#layouttype) in the Document Editor Container component is [`Pages`](https://ej2.syncfusion.com/react/documentation/api/document-editor/layoutType).

### Online Demo

Explore how to view Word documents in web layout using the React Document Editor in this [live demo](https://document.syncfusion.com/demos/docx-editor/react/#/tailwind3/document-editor/web-layout).

## Ruler

The ruler helps you set specific margins, tab stops, and indentations within a document to ensure consistent formatting in the Document Editor.

The following example illustrates how to enable the ruler in the Document Editor.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/document-editor/react/ruler-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/document-editor/react/ruler-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/document-editor/react/ruler-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "/document-processing/code-snippet/document-editor/react/ruler-cs1" %}

> The Web API hosted link `https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/` utilized in the Document Editor's serviceUrl property is intended solely for demonstration and evaluation purposes. For production deployment, please host your own web service with your required server configurations. You can refer and reuse the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server) for hosting your own web service and use for the serviceUrl property.

### Online Demo

Explore how to use the ruler in the React Document Editor for working with Word documents in this [live demo](https://document.syncfusion.com/demos/docx-editor/react/#/tailwind3/document-editor/ruler).

## Heading Navigation Pane

The heading navigation pane allows users to quickly navigate documents by heading, making it easier to move through the document.

The following example demonstrates how to enable the heading navigation pane in a document editor.

```ts
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import {
  DocumentEditorContainerComponent,
  Toolbar,
} from '@syncfusion/ej2-react-documenteditor';

DocumentEditorContainerComponent.Inject(Toolbar);
function App() {
  let settings =  {showNavigationPane: true};
  return (
    <DocumentEditorContainerComponent
      id="container"
      height={'590px'}
      serviceUrl="https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/"
      enableToolbar={true}
      documentEditorSettings={settings}
    />
  );
}
export default App;
ReactDOM.render(<App />, document.getElementById('root'));
```

> The Web API hosted link `https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/` utilized in the Document Editor's serviceUrl property is intended solely for demonstration and evaluation purposes. For production deployment, please host your own web service with your required server configurations. You can refer and reuse the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server) for hosting your own web service and use for the serviceUrl property.

### Online Demo

Explore how to navigate through headings in Word documents using the React Document Editor in this [live demo](https://document.syncfusion.com/demos/docx-editor/react/#/tailwind3/document-editor/heading-navigation).