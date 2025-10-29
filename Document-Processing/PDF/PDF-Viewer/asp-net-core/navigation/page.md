---
layout: post
title: Navigation in ASP.NET Core PDF Viewer control | Syncfusion
description: Learn here all about Navigation in Syncfusion ASP.NET Core PDF Viewer control of Syncfusion Essential JS 2 and more.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Navigation in ASP.NET Core PDF Viewer control

The ASP.NET Core PDF Viewer supports different internal and external navigations.

## Toolbar page navigation option

The default toolbar of PDF Viewer contains the following navigation options

* **Go to page** :- Navigates to the specific page of a PDF document.
* **Show next page** :- Navigates to the next page of PDF a document.
* **Show previous page** :- Navigates to the previous page of a PDF document.
* **Show first page** :-  Navigates to the first page of a PDF document.
* **Show last page** :- Navigates to the last page of a PDF document.

You can enable/disable page navigation option in PDF Viewer using the following code snippet.,

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                   enableNavigation="true">
    </ejs-pdfviewer>
</div>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   serviceUrl='/Index'
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                   enableNavigation="true">
    </ejs-pdfviewer>
</div>

{% endhighlight %}
{% endtabs %}

![Alt text](../images/navigation.png)

Also, you can programmatically perform page navigation options as follows.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<button id="goToFirstPage" onclick="goToFirstPage()">Go To First Page</button>
<button id="goToLastPage" onclick="goToLastPage()">Go To last Page</button>
<button id="goToNextPage" onclick="goToNextPage()">Go To Next Page</button>
<button id="goToPage" onclick="goToPage()">Go To Page</button>
<button id="goToPreviousPage" onclick="goToPreviousPage()">Go To Previous Page</button>

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf">
    </ejs-pdfviewer>
</div>

<script>
    function goToFirstPage() {
        var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
        pdfViewer.navigation.goToFirstPage();
    }
    function goToLastPage() {
        var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
        pdfViewer.navigation.goToLastPage();
    }
    function goToNextPage() {
        var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
        pdfViewer.navigation.goToNextPage();
    }
    function goToPage() {
        var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
        pdfViewer.navigation.goToPage(4);
    }
    function goToPreviousPage() {
        var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
        pdfViewer.navigation.goToPreviousPage();
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<button id="goToFirstPage" onclick="goToFirstPage()">Go To First Page</button>
<button id="goToLastPage" onclick="goToLastPage()">Go To last Page</button>
<button id="goToNextPage" onclick="goToNextPage()">Go To Next Page</button>
<button id="goToPage" onclick="goToPage()">Go To Page</button>
<button id="goToPreviousPage" onclick="goToPreviousPage()">Go To Previous Page</button>

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   serviceUrl="/api/PdfViewer"
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf">
    </ejs-pdfviewer>
</div>

<script>
    function goToFirstPage() {
        var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
        pdfViewer.navigation.goToFirstPage();
    }
    function goToLastPage() {
        var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
        pdfViewer.navigation.goToLastPage();
    }
    function goToNextPage() {
        var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
        pdfViewer.navigation.goToNextPage();
    }
    function goToPage() {
        var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
        pdfViewer.navigation.goToPage(4);
    }
    function goToPreviousPage() {
        var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
        pdfViewer.navigation.goToPreviousPage();
    }
</script>

{% endhighlight %}
{% endtabs %}

## See also

* [Toolbar items](../toolbar)
* [Feature Modules](../feature-module)