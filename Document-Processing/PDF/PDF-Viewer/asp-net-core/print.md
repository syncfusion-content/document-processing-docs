---
layout: post
title: Print in ASP.NET Core PDF Viewer | Syncfusion
description: Learn how to enable, invoke, and customize printing in the Syncfusion ASP.NET Core PDF Viewer, including quality and behavior settings.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Print

The PDF Viewer supports printing the loaded PDF file. Enable or disable printing using the following example.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                   enablePrint="true">
    </ejs-pdfviewer>
</div>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   serviceUrl="/api/PdfViewer"
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                   enablePrint="true">
    </ejs-pdfviewer>
</div>

{% endhighlight %}
{% endtabs %}

![Print dialog in the PDF Viewer](../images/print.png)

You can also invoke the print action programmatically using the following example:

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                   documentLoad="print">
    </ejs-pdfviewer>
</div>

<script>
    function print() {
        var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
        pdfViewer.print.print();
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   serviceUrl="/api/PdfViewer"
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                   documentLoad="print">
    </ejs-pdfviewer>
</div>

<script>
    function print() {
        var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
        pdfViewer.print.print();
    }
</script>

{% endhighlight %}
{% endtabs %}

## Customize print quality using printScaleFactor

Adjust print quality using the [PrintScaleFactor](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#PrintScaleFactor) API (default: 1). The effective range is 0.5–5. Values below 0.5 and above 5 fall back to standard quality. Higher values within the range improve quality but may increase print time.

The following example demonstrates how to customize print quality using the PrintScaleFactor API:

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                   enablePrint="true"
                   printScaleFactor=0.5>
    </ejs-pdfviewer>
</div>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   serviceUrl="/api/PdfViewer"
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                   enablePrint="true"
                   printScaleFactor=0.5>
    </ejs-pdfviewer>
</div>

{% endhighlight %}
{% endtabs %}

## Additional print options

## EnablePrintRotation in the PDF Viewer

The `EnablePrintRotation` property controls whether landscape pages are auto-rotated to best fit when printing. The default value is `true`. Set to `false` to preserve the original page orientation and suppress automatic rotation during print.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                   enablePrintRotation="true"
                   printScaleFactor=0.5>
    </ejs-pdfviewer>
</div>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   serviceUrl="/api/PdfViewer"
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                   enablePrintRotation="true"
                   printScaleFactor=0.5>
    </ejs-pdfviewer>
</div>

{% endhighlight %}
{% endtabs %}

## Print modes in the PDF Viewer

The `printMode` property allows you to specify how the document is printed.

The supported values are:
*   `Default`: Prints the document from the same window.
*   `NewWindow`: Prints the document from a new window/tab, which can be useful depending on browser popup policies.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                   printMode="NewWindow"
                   printScaleFactor=0.5>
    </ejs-pdfviewer>
</div>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   serviceUrl="/api/PdfViewer"
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                   printMode="NewWindow"
                   printScaleFactor=0.5>
    </ejs-pdfviewer>
</div>

{% endhighlight %}
{% endtabs %}

## Print Events

The following events are available in the PDF Viewer component.

| Name         | Description                            |
|--------------|----------------------------------------|
| `printStart` | Triggers when a print action starts.   |
| `printEnd`   | Triggers when a print action is completed. |

### printStart Event
The [`printStart`](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_PrintStart) event triggers when the print action is started.

#### Event Arguments
See `PrintStartEventArgs` for details such as `fileName` and the `cancel` option.

The following example illustrates how to handle the `printStart` event.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div class="text-center">
    <ejs-pdfviewer id="pdfviewer" 
                   style="height:600px" 
                   documentPath="https://cdn.syncfusion.com/content/pdf/annotations.pdf"
                   printStart="printStarted">
    </ejs-pdfviewer>
</div>

<script>
    function printStarted(args) {
        console.log('Print action has started for file: ' + args.fileName);
        // To cancel the print action
        // args.cancel = true;
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<div class="text-center">
    <ejs-pdfviewer id="pdfviewer" 
                   style="height:600px" 
                   serviceUrl="/api/PdfViewer"
                   documentPath="https://cdn.syncfusion.com/content/pdf/annotations.pdf"
                   printStart="printStarted">
    </ejs-pdfviewer>
</div>

<script>
    function printStarted(args) {
        console.log('Print action has started for file: ' + args.fileName);
        // To cancel the print action
        // args.cancel = true;
    }
</script>

{% endhighlight %}
{% endtabs %}

### printEnd Event
The [`printEnd`](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_PrintEnd) event triggers when a print action is completed.

#### Event Arguments
See `PrintEndEventArgs` for details such as `fileName`.

The following example illustrates how to handle the `printEnd` event.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div class="text-center">
    <ejs-pdfviewer id="pdfviewer" 
                   style="height:600px" 
                   documentPath="https://cdn.syncfusion.com/content/pdf/annotations.pdf"
                   printEnd="printEnded">
    </ejs-pdfviewer>
</div>

<script>
    function printEnded(args) {
        console.log('Printed File Name: ' + args.fileName);
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<div class="text-center">
    <ejs-pdfviewer id="pdfviewer" 
                   style="height:600px" 
                   serviceUrl="/api/PdfViewer"
                   documentPath="https://cdn.syncfusion.com/content/pdf/annotations.pdf"
                   printEnd="printEnded">
    </ejs-pdfviewer>
</div>

<script>
    function printEnded(args) {
        console.log('Printed File Name: ' + args.fileName);
    }
</script>

{% endhighlight %}
{% endtabs %}

## See also

* [Toolbar items](./toolbar)
* [Feature Modules](./feature-module)