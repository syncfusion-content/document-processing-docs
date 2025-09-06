---
layout: post
title: Add signature in React Pdfviewer component | Syncfusion
description: Learn here all about Add signature in Syncfusion React Pdfviewer component of Syncfusion Essential JS 2 and more.
control: Add signature
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Add signature in React Pdfviewer component

The PDF Viewer library allows you to add signature in the signature field of the loaded PDF document programmatically using the **formFieldClick** event.

**Step 1:** Follow the steps provided in the [link](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/react/getting-started/) to create simple PDF Viewer sample in React.

**Step 2:** Add the following code snippet to add signature in signature field.

{% tabs %}
{% highlight js tabtitle="Standalone" %}
{% raw %}

  <PdfViewerComponent
    id="container"
    documentPath="https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf"
    resourceUrl="https://cdn.syncfusion.com/ej2/24.1.41/dist/ej2-pdfviewer-lib"
    style={{ height: '640px' }}
    formFieldClick={fieldClick}>
    <Inject services={[ Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, BookmarkView,
                        ThumbnailView, Print, TextSelection, TextSearch, FormDesigner, FormFields ]} />
  </PdfViewerComponent>

  function fieldClick(args) {
    var viewer = document.getElementById('container').ej2_instances[0];
    if (viewer) {
      args.cancel = true;
      if (args.field.type === 'SignatureField') {
        var forms = viewer.formFieldCollections;
        forms.map((r) => {
          if (r.id === args.field.id) {
            console.log(args.field.value);
            var el = document.getElementById(r.id);
            if (el) {
              if (el.style.textAlign !== 'center') {
                el.style.textAlign = 'center';
              }
              if (el.style.fontStyle !== 'italic') {
                el.style.fontStyle = 'italic';
              }
              if (el.style.fontWeight !== 'italic') {
                el.style.fontWeight = 'italic';
              }
              if (args.field.value !== '' && args.field.value) {
                args.field.value = '';
                viewer.updateFormFieldsValue(args.field);
              } else {
                args.field.signatureType = ['Type'];
                args.field.value = 'DA FIRMARE';
                args.cancel = true;
                viewer.updateFormFieldsValue(args.field);
              }
            }
          }
        });
      }
    }
  }

{% endraw %}
{% endhighlight %}
{% highlight js tabtitle="Server-Backed" %}
{% raw %}

  <PdfViewerComponent
    id="container"
    documentPath="https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf"
    serviceUrl="https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer"
    style={{ height: '640px' }}
    formFieldClick={fieldClick}>
    <Inject services={[ Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, BookmarkView,
                        ThumbnailView, Print, TextSelection, TextSearch, FormDesigner, FormFields ]} />
  </PdfViewerComponent>

  function fieldClick(args) {
    var viewer = document.getElementById('container').ej2_instances[0];
    if (viewer) {
      args.cancel = true;
      if (args.field.type === 'SignatureField') {
        var forms = viewer.formFieldCollections;
        forms.map((r) => {
          if (r.id === args.field.id) {
            console.log(args.field.value);
            var el = document.getElementById(r.id);
            if (el) {
              if (el.style.textAlign !== 'center') {
                el.style.textAlign = 'center';
              }
              if (el.style.fontStyle !== 'italic') {
                el.style.fontStyle = 'italic';
              }
              if (el.style.fontWeight !== 'italic') {
                el.style.fontWeight = 'italic';
              }
              if (args.field.value !== '' && args.field.value) {
                args.field.value = '';
                viewer.updateFormFieldsValue(args.field);
              } else {
                args.field.signatureType = ['Type'];
                args.field.value = 'DA FIRMARE';
                args.cancel = true;
                viewer.updateFormFieldsValue(args.field);
              }
            }
          }
        });
      }
    }
  }
{% endraw %}
{% endhighlight %}
{% endtabs %}

Find the Sample [how to add signature in signature field](https://stackblitz.com/edit/react-ce6gat?file=src%2Findex.js)