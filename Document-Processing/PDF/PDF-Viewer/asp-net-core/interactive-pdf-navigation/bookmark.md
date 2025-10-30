---
layout: post
title: Navigation in ASP.NET Core PDF Viewer control | Syncfusion
description: Learn here all about Navigation in Syncfusion ASP.NET Core PDF Viewer control of Syncfusion Essential JS 2 and more.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Bookmark navigation in ASP.NET Core PDF Viewer control

The Bookmarks saved in PDF files are loaded and made ready for easy navigation.
You can enable/disable bookmark navigation by using the following code snippet.,

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                   enableBookmark="true">
    </ejs-pdfviewer>
</div>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   serviceUrl='/Index'
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                   enableBookmark="true">
    </ejs-pdfviewer>
</div>

{% endhighlight %}
{% endtabs %}

![Alt text](../images/bookmark.png)

To perform bookmark navigation, you can use the **goToBookmark** method. It's important to note that the **goToBookmark** method will throw an error if the specified bookmark does not exist in the PDF document.

Here is an example of how to use the **goToBookmark** method:

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<button id="gotobookmark" onclick="gotobookmark()">Specfic Page</button>

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf">
    </ejs-pdfviewer>
</div>

<script>
    function gotobookmark() {
        var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
        pdfViewer.bookmark.goToBookmark(3, 2);
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<button id="gotobookmark" onclick="gotobookmark()">Specfic Page</button>

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   serviceUrl="/api/PdfViewer"
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf">
    </ejs-pdfviewer>
</div>

<script>
    function gotobookmark() {
        var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
        pdfViewer.bookmark.goToBookmark(3, 2);
    }
</script>

{% endhighlight %}
{% endtabs %}

x - Specifies the pageIndex for Navigate.

y - Specifies the Y coordinates value of the Page.

Also, you can use the **getBookmarks** method to retrieve a list of all the bookmarks in a PDF document. This method returns a List of Bookmark objects, which contain information about each bookmark.

Here is an example of how to use the getBookmarks method:

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<button id="getBookmarks" onclick="getBookmarks()">Retrieve Bookmark</button>

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf">
    </ejs-pdfviewer>
</div>

<script>
    function getBookmarks() {
        var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
        var getBookmarks = pdfViewer.bookmark.getBookmarks();
        console.log(getBookmarks);
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<button id="getBookmarks" onclick="getBookmarks()">Retrieve Bookmark</button>

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   serviceUrl="/api/PdfViewer"
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf">
    </ejs-pdfviewer>
</div>

<script>
    function getBookmarks() {
        var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
        var getBookmarks = pdfViewer.bookmark.getBookmarks();
        console.log(getBookmarks);
    }
</script>

{% endhighlight %}
{% endtabs %}

## See also

* [Toolbar items](../toolbar-customization)
* [Feature Modules](../feature-module)