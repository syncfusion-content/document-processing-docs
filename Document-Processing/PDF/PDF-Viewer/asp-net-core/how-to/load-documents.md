---
layout: post
title: Load documents dynamically in ASP.NET Core PDF Viewer | Syncfusion
description: Learn how to load or switch PDF documents dynamically in the Syncfusion ASP.NET Core PDF Viewer using the load method.
platform: document-processing
control: PDF Viewer
publishingplatform: ASP.NET Core
documentation: ug
---

# Load documents dynamically in the ASP.NET Core PDF Viewer

Load or switch PDF documents dynamically after the initial load. Use the **load()** method to load a PDF by Base64 string or file name.

## Steps to load PDF documents dynamically

**Step 1:** Follow the steps in the [Syncfusion ASP.NET Core PDF Viewer getting started guide](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/asp-net-core/getting-started) to create a sample.

**Step 2:** Use the following code to load a PDF using a Base64 string.

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

**Step 3:** Use the following code snippet to load PDF document using document name.

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

By following these steps, the load API can be used to switch documents dynamically in the ASP.NET Core PDF Viewer.

[View sample in GitHub](https://github.com/SyncfusionExamples/asp-core-pdf-viewer-examples/tree/master/How%20to/Load%20PDF%20documents%20dynamically)
