---
layout: post
title: Change Selection Border in Angular PDF Viewer component | Syncfusion
description: Learn how to change the selection border in the Syncfusion Angular PDF Viewer component of Essential JS 2.
platform: document-processing
control: Change selection border
documentation: ug
domainurl: ##DomainURL##
---

# Customize the selection border

The PDF Viewer library allows customization of annotation selection borders using the [**annotationSelectorSettings**](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/annotationSelectorSettingsModel/#annotationselectorsettingsmodel) property.

Follow these steps to customize the selection border:

**Step 1:** Create a simple PDF Viewer sample in Angular by following the steps in this [guide](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/angular/getting-started).

**Step 2:** Add the following code snippet in `app.component.html` and `app.component.ts` files to customize selection borders.

{% tabs %}
{% highlight html tabtitle="Standalone" %}

<ejs-pdfviewer id="pdfViewer"
               [documentPath]='document'
               [freeTextSettings]="annotationsettings"
               [rectangleSettings]="annotationsettings"
               [stampSettings]="annotationsettings"
               style="height:640px;display:block">
</ejs-pdfviewer>

{% endhighlight %}

{% highlight html tabtitle="Server-Backed" %}

<ejs-pdfviewer id="pdfViewer"
               [serviceUrl]='service'
               [documentPath]='document'
               [freeTextSettings]="annotationsettings"
               [rectangleSettings]="annotationsettings"
               [stampSettings]="annotationsettings"
               style="height:640px;display:block">
</ejs-pdfviewer>

{% endhighlight %}
{% endtabs %}

```typescript

public annotationsettings: any = {
  annotationSelectorSettings: {
    selectionBorderColor: 'yellow',
    resizerShape: 'Circle',
    selectorLineDashArray: 9
  }
};

```

Find the Sample [how to customize the selection border](https://stackblitz.com/edit/angular-ifpsqg-mc9c7m?devtoolsheight=33&file=app.component.ts)