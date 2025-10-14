---
layout: post
title: Programmatically work with form field in React Pdfviewer component | Syncfusion
description: Learn here all about Programmatically work with form field in Syncfusion React Pdfviewer component of Syncfusion Essential JS 2 and more.
control: Programmatically work with form field
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Programmatically work with form field in React Pdfviewer component

The PDF Viewer control provides the option to add, edit and delete the Form Fields. The Form Fields type supported by the PDF Viewer Control are:

    * Textbox
    * Password
    * CheckBox
    * RadioButton
    * ListBox
    * DropDown
    * SignatureField
    * InitialField

## Add a form field to PDF document programmatically

Using addFormField method, the form fields can be added to the PDF document programmatically. We need to pass two parameters in this method. They are Form Field Type and Properties of Form Field Type. To add form field programmatically, Use the following code.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/pdfviewer/react/addformfield-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/pdfviewer/react/addformfield-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% tabs %}
{% highlight js tabtitle="Standalone" %}
{% previewsample "Document-Processing/code-snippet/pdfviewer/react/addformfield-cs2/index.html" %}
{% endhighlight %}
{% highlight js tabtitle="Server-Backed" %}
{% previewsample "Document-Processing/code-snippet/pdfviewer/react/addformfield-cs2/index.html" %}
{% endhighlight %}
{% endtabs %}

## Edit/Update form field programmatically

Using updateFormField method, Form Field can be updated programmatically. We should get the Form Field object/Id from FormFieldCollections property that you would like to edit and pass it as a parameter to updateFormField method. The second parameter should be the properties that you would like to update for Form Field programmatically. We have updated the value and background Color properties of Textbox Form Field.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/pdfviewer/react/updateformfield-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/pdfviewer/react/updateformfield-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% tabs %}
{% highlight js tabtitle="Standalone" %}
{% previewsample "Document-Processing/code-snippet/pdfviewer/react/updateformfield-cs2/index.html" %}
{% endhighlight %}
{% highlight js tabtitle="Server-Backed" %}
{% previewsample "Document-Processing/code-snippet/pdfviewer/react/updateformfield-cs2/index.html" %}
{% endhighlight %}
{% endtabs %}

## Delete form field programmatically

Using deleteFormField method, the form field can be deleted programmatically. We should retrieve the Form Field object/Id from FormFieldCollections property that you would like to delete and pass it as a parameter to deleteFormField method. To delete a Form Field programmatically, use the following code.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/pdfviewer/react/deleteformfield-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/pdfviewer/react/deleteformfield-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% tabs %}
{% highlight js tabtitle="Standalone" %}
{% previewsample "Document-Processing/code-snippet/pdfviewer/react/deleteformfield-cs2-standalone/index.html" %}
{% endhighlight %}
{% highlight js tabtitle="Server-Backed" %}
{% previewsample "Document-Processing/code-snippet/pdfviewer/react/deleteformfield-cs2/index.html" %}
{% endhighlight %}
{% endtabs %}

## Saving the form fields

When the download icon is selected on the toolbar, the Form Fields will be saved in the PDF document and this action will not affect the original document. Refer the below GIF for further reference.

![Alt text](../images/saveformfield.gif)

You can invoke download action using following code snippet.,

{% raw %}

```ts

import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView,ThumbnailView,
         Print, TextSelection, Annotation, TextSearch, FormDesigner, FormFields, Inject } from '@syncfusion/ej2-react-pdfviewer';
let pdfviewer;

function App() {
   function downloadClicked() {
    var viewer = document.getElementById('container').ej2_instances[0];
    viewer.download();
  }
  return (<div>
    <div className='control-section'>
      {/* Render the PDF Viewer */}
      <button onClick={downloadClicked}>Download</button>
      <PdfViewerComponent
        ref={(scope) => { pdfviewer = scope; }}
        id="container"
        documentPath="PDF_Succinctly.pdf"
        serviceUrl="https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer"
        style={{ 'height': '640px' }}>
           <Inject services={[ Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, BookmarkView,
                               ThumbnailView, Print, TextSelection, TextSearch, FormDesigner, FormFields ]} />
      </PdfViewerComponent>
    </div>
  </div>);
}
const root = ReactDOM.createRoot(document.getElementById('sample'));
root.render(<App />);

```
{% endraw %}

## Printing the form fields

When the print icon is selected on the toolbar, the PDF document will be printed along with the Form Fields added to the pages and this action will not affect the original document. Refer the below GIF for further reference.

![Alt text](../images/printformfield.gif)

{% raw %}

```ts

import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView,ThumbnailView,
         Print, TextSelection, Annotation, TextSearch, FormDesigner, FormFields, Inject } from '@syncfusion/ej2-react-pdfviewer';
export function App() {
  return (<div>
    <div className='control-section'>
      {/* Render the PDF Viewer */}
      <PdfViewerComponent
        id="container"
        documentPath="PDF_Succinctly.pdf"
        enablePrint={true}
        serviceUrl="https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer"
        style={{ 'height': '640px' }}>
          <Inject services={[ Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, BookmarkView,
                              ThumbnailView, Print, TextSelection, TextSearch, FormDesigner, FormFields ]} />
      </PdfViewerComponent>
    </div>
  </div>);
}
const root = ReactDOM.createRoot(document.getElementById('sample'));
root.render(<App />);

```
{% endraw %}

## Open the existing PDF document

We can open the already saved PDF document contains Form Fields in it by clicking the open icon in the toolbar. Refer the below GIF for further reference.

![Alt text](../images/openexistingpdf.gif)
