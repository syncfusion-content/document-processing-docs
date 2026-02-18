---
layout: post
title: Lock annotation in Angular PDF Viewer component | Syncfusion
description: Learn here all about Lock annotation in a document in Syncfusion Angular PDF Viewer component of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Lock annotation in a document
documentation: ug
domainurl: ##DomainURL##
---

# Locking annotations in a PDF document

The PDF Viewer supports locking annotations to prevent users from moving, resizing, or removing them. Locking can be applied via annotation settings or by handling viewer events and updating annotation metadata.

## Lock an annotation from code behind

Use the `IsLocked` annotation property to mark annotations as locked. The property can be set in default annotation settings or modified at runtime in event handlers such as `ajaxRequestSuccess`.

The following sample shows how to set `IsLocked` for custom stamp annotations when annotation data is returned from the viewer. This example runs in the `ajaxRequestSuccess` handler, which fires after the viewer receives annotation data from the server or after annotations are rendered in standalone mode.

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
