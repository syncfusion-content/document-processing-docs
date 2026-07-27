---
layout: post
title: Change the selection border in Angular | Syncfusion
description: Learn how to change the selection border in the Syncfusion Angular PDF Viewer component using the annotationSelectorSettings property.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Change the selection border

The PDF Viewer library allows you to customize the annotations selection borders using the [**annotationSelectorSettings**](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/annotationSelectorSettingsModel#annotationselectorsettingsmodel) property.

Recommended steps

1. Create a basic PDF Viewer sample by following the [getting-started](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/angular/getting-started) guide.
2. Apply `annotationSelectorSettings` in the component to customize selector appearance (examples below show usage with `freeTextSettings`, `rectangleSettings`, and `stampSettings`).

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