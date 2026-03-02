---
layout: post
title: Printing PDF Documents in ASP.NET Core PDF Viewer | Syncfusion
description: Learn how to enable, invoke, and customize printing in the ASP.NET Core PDF Viewer. Control print quality, rotation, and print mode for optimal printing experience.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Printing PDF Documents in ASP.NET Core PDF Viewer

The ASP.NET Core PDF Viewer provides comprehensive printing capabilities, allowing users to print loaded PDF documents directly from the viewer. The printing feature integrates seamlessly with browser print dialogs, enabling users to customize print settings, paper selection, and output format. Developers can programmatically control printing behavior, adjust print quality, and manage page rotation to ensure optimal printing results.

## Enable or disable printing

The print functionality can be controlled using the `enablePrint` property. Set it to `true` to display a print button in the toolbar, or `false` to disable printing entirely.

**Example: Enabling print functionality**

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

In addition to the toolbar print button, the PDF Viewer provides the `print()` method to programmatically trigger printing. This is useful for creating custom print buttons or integrating printing into application workflows.

**Example: Printing on document load**

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

The `printScaleFactor` property controls the quality of printed output. Higher scale factors produce higher quality prints but may increase print processing time.

**Print quality settings:**
- **Default value**: `1` (standard quality)
- **Valid range**: `0.5` to `5`
- **Values outside range**: Automatically fall back to standard quality (1)
- **Recommended range**: `1.0` to `2.0` for most use cases

**Quality vs. Performance:**
- Lower values (0.5–1.0): Faster printing, smaller file size, acceptable quality
- Higher values (1.5–5.0): Improved quality, slower printing, larger file size

**Example: Setting custom print quality**

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

### Controlling page rotation during printing

The `enablePrintRotation` property controls whether landscape pages are automatically rotated to fit the paper orientation when printing.

**Configuration:**
- **Default value**: `true` (auto-rotation enabled)
- **Set to `true`**: Landscape pages rotate to best fit the paper, improving print layout
- **Set to `false`**: Pages maintain original orientation regardless of paper size

**Example: Disabling print rotation**

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

### Controlling print window behavior

The `printMode` property controls how the print dialog is displayed when printing is initiated.

**Supported print modes:**
- **Default**: Opens the print dialog within the current window/tab. Recommended for most scenarios.
- **NewWindow**: Opens the print dialog in a new window or tab. Useful when browser popup policies block standard print dialogs or when you need to keep the original window unaffected.

**Example: Using NewWindow print mode**

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

## Monitoring and controlling print operations

The PDF Viewer provides events that allow you to monitor and respond to print actions. Use these events to track user behavior, validate print conditions, or perform pre-print and post-print operations.

The following events are available in the PDF Viewer component.

| Name         | Description                            |
|--------------|----------------------------------------|
| `printStart` | Fires when a print action is initiated.   |
| `printEnd`   | Fires when a print action completes. |

### Print start event

The `printStart` event fires when the user initiates a print action. This event occurs before the print dialog opens, allowing you to perform validation or setup tasks.

**Event Arguments:**
See `PrintStartEventArgs` for details:
- `fileName`: The name of the PDF file being printed
- `cancel`: Set to `true` to prevent the print action

**Example: Handling the printStart event**

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

### Print end event

The `printEnd` event fires when a print action completes or is cancelled. This event occurs after the user closes the print dialog (regardless of whether they printed or cancelled), making it useful for cleanup or completion tracking.

**Use cases for printEnd:**
- Track completion of print operations
- Reset UI elements or states
- Clean up temporary resources
- Update print operation statistics
- Provide user feedback on completion

**Event Arguments:**
- `fileName` (string): The name of the PDF file that was printed

**Example: Handling the printEnd event**

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