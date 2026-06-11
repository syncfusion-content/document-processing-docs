---
layout: post
title: Load documents dynamically in ASP.NET Core PDF Viewer | Syncfusion
description: Learn how to load or switch PDF documents dynamically in the Syncfusion ASP.NET Core PDF Viewer using the load method.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Load documents dynamically in the ASP.NET Core PDF Viewer

Switch between PDF documents or replace the currently displayed document after the PDF Viewer is rendered. The **load()** method enables dynamic document loading using either a Base64 string or a file path.

## Load PDF documents dynamically

**Step 1:** Follow the [Syncfusion ASP.NET Core PDF Viewer getting started guide](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/asp-net-core/getting-started) to set up a basic PDF Viewer instance.

**Step 2:** Use the following code snippet to load a PDF from a Base64 string.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<button type="button" onclick="load1()">LoadDocumentFromBase64</button>

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/hive-succinctly.pdf">
    </ejs-pdfviewer>
</div>

<script type ="text/javascript">

    // Load a Base64 string
    function load1() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        viewer.load("data:application/pdf;base64," + addBase64String, null);
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<button type="button" onclick="load1()">LoadDocumentFromBase64</button>

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   serviceUrl='/Index'
                   documentPath="https://cdn.syncfusion.com/content/pdf/hive-succinctly.pdf">
    </ejs-pdfviewer>
</div>

<script type ="text/javascript">

    // Load a Base64 String
    function load1() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        viewer.load("data:application/pdf;base64," + addBase64String, null);

    }

</script>

{% endhighlight %}
{% endtabs %}

**Step 3:** Use the following code snippet to load a PDF document using a file path or URL.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<button type="button" onclick="load2()">LoadDocument</button>

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/hive-succinctly.pdf">
    </ejs-pdfviewer>
</div>

<script type ="text/javascript">

    // Load document using a file path
    function load2() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        viewer.load("https://cdn.syncfusion.com/content/pdf/hive-succinctly.pdf", null);
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<button type="button" onclick="load2()">LoadDocument</button>

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   serviceUrl='/Index'
                   documentPath="https://cdn.syncfusion.com/content/pdf/hive-succinctly.pdf">
    </ejs-pdfviewer>
</div>

<script type ="text/javascript">

    // Load document using a file path
    function load2() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        viewer.load("https://cdn.syncfusion.com/content/pdf/hive-succinctly.pdf",null)
    }
</script>

{% endhighlight %}
{% endtabs %}

These steps demonstrate how to use the **load()** API to switch documents dynamically at runtime in the ASP.NET Core PDF Viewer.

[View sample in GitHub](https://github.com/SyncfusionExamples/asp-core-pdf-viewer-examples/tree/master/How%20to/Load%20PDF%20documents%20dynamically)
