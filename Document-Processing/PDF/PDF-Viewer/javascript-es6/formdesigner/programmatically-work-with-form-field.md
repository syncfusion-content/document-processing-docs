---
layout: post
title: Programmatically work with form field in Typescript Pdfviewer control | Syncfusion
description: Learn here all about Programmatically work with form field in Syncfusion Typescript Pdfviewer control of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Programmatically work with form field
publishingplatform: Typescript
documentation: ug
domainurl: ##DomainURL##
---

# Programmatically work with form field in Typescript Pdfviewer control

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
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/pdfviewer/javascript-es6/addformfield-cs4/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pdfviewer/javascript-es6/addformfield-cs4/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "Document-Processing/code-snippet/pdfviewer/javascript-es6/addformfield-cs4/index.html" %}

## Edit/Update form field programmatically

Using updateFormField method, Form Field can be updated programmatically. We should get the Form Field object/Id from FormFieldCollections property that you would like to edit and pass it as a parameter to updateFormField method. The second parameter should be the properties that you would like to update for Form Field programmatically. We have updated the value and background Color properties of Textbox Form Field.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/pdfviewer/javascript-es6/updateformfield-cs4/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pdfviewer/javascript-es6/updateformfield-cs4/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "Document-Processing/code-snippet/pdfviewer/javascript-es6/updateformfield-cs4/index.html" %}

## Delete form field programmatically

Using deleteFormField method, the form field can be deleted programmatically. We should retrieve the Form Field object/Id from FormFieldCollections property that you would like to delete and pass it as a parameter to deleteFormField method. To delete a Form Field programmatically, use the following code.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/pdfviewer/javascript-es6/deleteformfield-cs4/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pdfviewer/javascript-es6/deleteformfield-cs4/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "Document-Processing/code-snippet/pdfviewer/javascript-es6/deleteformfield-cs4/index.html" %}

## Saving the form fields

When the download icon is selected on the toolbar, the Form Fields will be saved in the PDF document and this action will not affect the original document. Refer the below GIF for further reference.

![Alt text](../images/saveformfield.gif)

You can invoke download action using following code snippet.

```ts
import { PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation,ThumbnailView,BookmarkView, TextSelection} from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject(Toolbar,Magnification,Navigation, Annotation, LinkAnnotation,ThumbnailView,BookmarkView, TextSelection);

let pdfviewer: PdfViewer = new PdfViewer();
pdfviewer.serviceUrl = 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer/';
pdfviewer.appendTo('#PdfViewer');
pdfviewer.load('PDF_Succinctly.pdf', null);
pdfviewer.download();

```

## Printing the form fields

When the print icon is selected on the toolbar, the PDF document will be printed along with the Form Fields added to the pages and this action will not affect the original document. Refer the below GIF for further reference.

![Alt text](../images/printformfield.gif)

You can invoke print action using the following code snippet.,

```ts
import { PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation,ThumbnailView,BookmarkView, TextSelection} from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject(Toolbar,Magnification,Navigation, Annotation, LinkAnnotation,ThumbnailView,BookmarkView, TextSelection);

let pdfviewer: PdfViewer = new PdfViewer();
pdfviewer.serviceUrl = 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer/';
pdfviewer.appendTo('#PdfViewer');
pdfviewer.load('PDF_Succinctly.pdf', null);
pdfviewer.print.print();

```

## Open the existing PDF document

We can open the already saved PDF document contains Form Fields in it by clicking the open icon in the toolbar. Refer the below GIF for further reference.

![Alt text](../images/openexistingpdf.gif)