---
layout: post
title: Lock Annotations in Angular PDF Viewer | Syncfusion
description: Learn how to lock annotations in a document within the Syncfusion Angular PDF Viewer component of Essential JS 2.
platform: document-processing
control: Lock annotation in a document
documentation: ug
domainurl: ##DomainURL##
---

# Locking Annotations in a PDF Document

The PDF Viewer offers support to enable or disable the lock option for annotations in a PDF document. When an annotation is locked, it cannot be moved, resized, or removed.

## Lock an Annotation from Code Behind

Annotations can be locked either by default settings or by an event using the [IsLocked](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/annotationSettings/) API.

The following code sample illustrates how to lock custom stamp annotations in a PDF document through the [ajaxRequestSuccess](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/ajaxRequestSuccessEventArgs/) event.

{% tabs %}
{% highlight js tabtitle="Standalone" %}

<!--Render PDF Viewer component-->
<ejs-pdfviewer id="pdfViewer"
               [documentPath]="document"
               (ajaxRequestSuccess)="fireAjaxRequestSuccess($event, $event.data)"
               style="height:640px;display:block">
</ejs-pdfviewer>

{% endhighlight %}
{% highlight js tabtitle="Server-Backed" %}

<!--Render PDF Viewer component-->
<ejs-pdfviewer id="pdfViewer"
               [serviceUrl]="service"
               [documentPath]="document"
               (ajaxRequestSuccess)="fireAjaxRequestSuccess($event, $event.data)"
               style="height:640px;display:block">
</ejs-pdfviewer>

{% endhighlight %}
{% endtabs %}

```typescript
//Method to lock the custom stamp annotation.
public fireAjaxRequestSuccess(event: any, data: any) {
  debugger;
  if (event.action == 'RenderAnnotationComments') {
    for (var i = data.startPageIndex; i < data.endPageIndex; i++) {
      for (
        var j = 0;
        j < data.annotationDetails[i].stampAnnotations.length;
        j++
      ) {
        //Subject becomes null only for custom stamps.
        if (data.annotationDetails[i].stampAnnotations[j].Subject == null) {
          //Iterate the annotations, check if the subject is null, then set the islocked as true.
          data.annotationDetails[i].stampAnnotations[j].IsLocked = true;
        }
      }
    }
  }
}

```

[View sample in GitHub](https://github.com/SyncfusionExamples/angular-pdf-viewer-examples/tree/master/How%20to/Lock%20custom%20stamp%20in%20a%20PDF%20document)
