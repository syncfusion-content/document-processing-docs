---
layout: post
title: Change selection border in Angular PDF Viewer component | Syncfusion
description: Learn here all about Change selection border in Syncfusion Angular PDF Viewer component of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Change selection border
documentation: ug
domainurl: ##DomainURL##
---

# Customize the selection border

The PDF Viewer library allows you to customize the annotations selection borders using the [**annotationSelectorSettings**](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/annotationSelectorSettingsModel#annotationselectorsettingsmodel) Property.

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