---
layout: post
title: Show pop-up after completion of Exporting form fields in Angular PDF Viewer | Syncfusion
description: Learn how to show a pop-up message after exporting form fields successfully in the Syncfusion Angular PDF Viewer component.
platform: document-processing
control: Show pop up after completion of export form fields
documentation: ug
domainurl: ##DomainURL##
---

# Show pop-up after completion of export form fields

The [exportSuccess](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/exportSuccessEventArgs/) event triggers when an export of annotations succeeds in the PDF Viewer, allowing for the display of a pop-up message.

Refer to the following code to notify the pop-up once annotations are successfully exported:

{% tabs %}
{% highlight js tabtitle="Standalone" %}

<!--Render PDF Viewer component-->
<ejs-pdfviewer id="pdfViewer"
               [serviceUrl]="service"
               [documentPath]="document"
               (exportSuccess)="fireExportRequestSuccess()"
               style="height:640px;display:block">
</ejs-pdfviewer>

//Method to notify popup once the form is submitted.
public fireExportRequestSuccess() {
  var pdfViewer = (<any>document.getElementById('pdfViewer'))
    .ej2_instances[0];
  //API to notify popup once the form is submitted.
  pdfViewer.viewerBase.openImportExportNotificationPopup(
    'Your form information has been saved. You can resume it at any times.Form Information Saved'
  );
}

{% endhighlight %}

{% highlight js tabtitle="Server-Backed" %}

<!--Render PDF Viewer component-->
<ejs-pdfviewer id="pdfViewer"
               [serviceUrl]="service"
               [documentPath]="document"
               (exportSuccess)="fireExportRequestSuccess()"
               style="height:640px;display:block">
</ejs-pdfviewer>

//Method to notify popup once the form is submitted.
public fireExportRequestSuccess() {
  var pdfViewer = (<any>document.getElementById('pdfViewer'))
    .ej2_instances[0];
  //API to notify popup once the form is submitted.
  pdfViewer.viewerBase.openImportExportNotificationPopup(
    'Your form information has been saved. You can resume it at any times.Form Information Saved'
  );
}

{% endhighlight %}
{% endtabs %}

[View sample in GitHub](https://github.com/SyncfusionExamples/angular-pdf-viewer-examples/tree/master/Event/Export%20success).