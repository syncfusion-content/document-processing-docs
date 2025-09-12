---
layout: post
title: Print in React Document editor component | Syncfusion
description: Learn here all about Print in Syncfusion React Document editor component of Syncfusion Essential JS 2 and more.
control: Print 
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Print in React Document editor component

To print the document, use the [`print`](https://ej2.syncfusion.com/react/documentation/api/document-editor#print) method from document editor instance.

Refer to the following example for showing a document and print it.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/document-editor/react/print-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/document-editor/react/print-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/document-editor/react/print-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "/document-processing/code-snippet/document-editor/react/print-cs1" %}

Refer to the following example for creating a document and print it.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/document-editor/react/print-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/document-editor/react/print-cs2/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/document-editor/react/print-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "/document-processing/code-snippet/document-editor/react/print-cs2" %}

> DocumentEditor features are segregated into individual feature-wise modules. To use print inject `Print` module using the `DocumentEditor.Inject(Print)`.
> To enable print for a document editor instance, set enablePrint as true.

## Improve print quality

Document editor provides an option to improve the print quality using [`printDevicePixelRatio`](https://ej2.syncfusion.com/react/documentation/api/document-editor/documentEditorSettingsModel#printdevicepixelratio) in Document editor settings. Document editor using canvas approach to render content. Then, canvas are converted to image and it process for print. Using printDevicePixelRatio API, you can increase the image quality based on your requirement.

The following example code illustrates how to improve the print quality in Document editor container.

```ts
import { createRoot } from 'react-dom/client';
import './index.css';
import * as React from 'react';
import {
  DocumentEditorContainerComponent,
  Toolbar,
} from '@syncfusion/ej2-react-documenteditor';
DocumentEditorContainerComponent.Inject(Toolbar);
function App() {
  let settings={printDevicePixelRatio :2};
  return (
              <DocumentEditorContainerComponent id="container" height={'590px'} serviceUrl="https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/" enableToolbar={true} documentEditorSettings= {settings}/>);
}
export default App;
createRoot(document.getElementById('sample')).render(<App />);


```

> The Web API hosted link `https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/` utilized in the Document Editor's serviceUrl property is intended solely for demonstration and evaluation purposes. For production deployment, please host your own web service with your required server configurations. You can refer and reuse the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server) for hosting your own web service and use for the serviceUrl property.

>Note: By default, printDevicePixelRatio value is 1

## Print using window object

You can print the document in document editor by passing the window instance. This is useful to implement print in third party frameworks such as electron, where the window instance will not be available. Refer to the following example.



```ts
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import {
    DocumentEditorComponent,
    DocumentEditor,
    Print,
} from '@syncfusion/ej2-react-documenteditor';

DocumentEditor.Inject(Print);
function App() {
    let documenteditor: DocumentEditorComponent;
    React.useEffect(() => {
        componentDidMount()
    }, []);
    function componentDidMount() {
        //Print the document content.
        documenteditor.print(window);
    }
    return (
        <DocumentEditorComponent
            id="container"
            height={'330px'}
            ref={scope => {
                documenteditor = scope;
            }}
            enablePrint={true}
        />
    );
}
export default App;
ReactDOM.render(<App />, document.getElementById('sample'));

```

```ts
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import {
  DocumentEditorComponent,
  SfdtExport,
  Selection,
  Editor,
  Print,
} from '@syncfusion/ej2-react-documenteditor';

//Inject require module.
DocumentEditorComponent.Inject(SfdtExport, Selection, Editor, Print);
function App() {
  let documenteditor;
  React.useEffect(() => {
    ComponentDidMount();
  }, []);
  function ComponentDidMount() {
    //Print the document content.
    documenteditor.print(window);
  }

  return (
    <div>
      <DocumentEditorComponent
        id="container"
        height={'330px'}
        ref={(scope) => {
          documenteditor = scope;
        }}
        isReadOnly={false}
        enableSelection={true}
        enableEditor={true}
        enablePrint={true}
      />
    </div>
  );
}
export default App;
ReactDOM.render(<App />, document.getElementById('sample'));

```

## Page setup

Some of the print options cannot be configured using JavaScript. Refer to the following links to learn more about the browser page setup:

* [`Chrome`](https://support.google.com/chrome/answer/1069693?hl=en&visit_id=1-636335333734668335-3165046395&rd=1/)
* [`Firefox`](https://support.mozilla.org/en-US/kb/how-print-web-pages-firefox/)

However, you can customize margins, paper, and layout options by modifying the section format properties using page setup dialog



```ts
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import {
  DocumentEditorComponent,
  SfdtExport,
  Selection,
  Editor,
  PageSetupDialog,
} from '@syncfusion/ej2-react-documenteditor';
//Inject require module.
DocumentEditorComponent.Inject(Selection, Editor, PageSetupDialog);
function App() {
  let documenteditor;
  React.useEffect(() => {
    componentDidMount();
  }, []);
  function componentDidMount() {
    //Open page setup dialog.
    documenteditor.showPageSetupDialog();
  }
  return (
    <div>
      <DocumentEditorComponent
        id="container"
        ref={(scope) => {
          documenteditor = scope;
        }}
        isReadOnly={false}
        enableSelection={true}
        enableEditor={true}
        enableEditorHistory={true}
        enablePageSetupDialog={true}
      />
    </div>
  );
}
export default App;
ReactDOM.render(<App />, document.getElementById('sample'));


```

By customizing margins, papers, and layouts, the layout of the document will be changed in document editor. To modify these options during print operation, serialize the document as SFDT using the  [`serialize`](https://ej2.syncfusion.com/react/documentation/api/document-editor#serialize) method in document editor instance and open the SFDT data in another instance of document editor in separate window.

The following example shows how to customize layout options only for printing.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/document-editor/react/print-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/document-editor/react/print-cs3/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/document-editor/react/print-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "/document-processing/code-snippet/document-editor/react/print-cs3" %}

## See Also

* [Feature modules](./feature-module)
* [Page Setup dialog](./dialog#page-setup-dialog)