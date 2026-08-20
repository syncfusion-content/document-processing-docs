---
layout: post
title: How to Show a Pop-Up After Exporting Form Fields | Syncfusion
description: Show a confirmation pop-up in the Angular PDF Viewer after exporting form fields so users know the export completed successfully.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# How to Show a Pop-Up After Exporting Form Fields in Angular PDF Viewer

The [exportSuccess](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/exportsuccesseventargs) event fires when exporting annotations or form data completes successfully. Use this event to display a notification pop-up that informs users the export finished and their data was saved.

Use the following example to display a notification after a successful export.

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
    'Your form information has been saved. You can resume it at any time.Form Information Saved'
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
    'Your form information has been saved. You can resume it at any time.Form Information Saved'
  );
}

{% endhighlight %}
{% endtabs %}

[View sample in GitHub](https://github.com/SyncfusionExamples/angular-pdf-viewer-examples/tree/master/Event/Export%20success).