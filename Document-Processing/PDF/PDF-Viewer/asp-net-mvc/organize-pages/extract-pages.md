---
layout: post
title: Extract Pages in ASP.NET MVC PDF Viewer | Syncfusion
description: Extract pages from a PDF in the ASP.NET MVC PDF Viewer using the Organize Pages panel to save selected pages as a separate document.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Extract Pages in ASP.NET MVC PDF Viewer

The PDF Viewer component provides an Extract Pages tool in the Organize Pages UI to export selected pages as a new PDF file. The Extract Pages tool is enabled by default.

## Extract Pages in Organize Pages

- Open the Organize Pages panel in the PDF Viewer toolbar.
- Locate and click the Extract Pages option.

![Extract Pages](../images/extract-page.png)

When selected, a secondary toolbar dedicated to extraction is displayed.

![Extract Pages secondary toolbar](../images/extract-page-secondary-toolbar.png)

## Extract pages using the UI

Extract pages by typing page numbers/ranges or by selecting thumbnails.

1. Click Extract Pages in the Organize Pages panel.
2. In the input box, enter pages to extract. Supported formats:
  - Single pages: 1,3,5
  - Ranges: 2-6
  - Combinations: 1,4,7-9
3. Alternatively, select the page thumbnails to extract instead of typing values.
4. Click Extract to download the selected pages as a new PDF; click Cancel to close the tool.

![Extract Pages with selected thumbnails](../images/extract-page-selected-thumbnail.png)

Note: Page numbers are 1-based (the first page is 1). Invalid or out-of-range entries are ignored; only valid pages are processed. Consider validating input before extraction to ensure expected results.

## Extraction options (checkboxes)

The secondary toolbar provides two options:

- **Delete Pages After Extracting** — When enabled, the selected pages are removed from the currently loaded document after extraction; the extracted pages are still downloaded as a separate PDF.

- **Extract Pages As Separate Files** — When enabled, each selected page is exported as an individual PDF (for example, selecting pages 3, 5, and 6 downloads 3.pdf, 5.pdf, and 6.pdf).

![Checkboxes for extract options](../images/extract-page-checkboxes.png)

## Programmatic options and APIs

You can control the Extract Pages experience via settings and invoke extraction through code.

### Enable/disable Extract Pages

Use the `CanExtractPages` API to enable or disable the Extract Pages option. When set to `false`, the Extract Pages tool is disabled in the toolbar. The default value is `true`.

Use the following code snippet to enable the Extract Pages option:

{% tabs %}
{% highlight cshtml tabtitle="Index.cshtml" %}

@{
    ViewBag.Title = "PDF Viewer";
}

<div class="control-section">
    @Html.EJS().PdfViewer("pdfviewer")
        .DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf")
        .ServiceUrl(ViewBag.ServiceUrl)
        .PageOrganizerSettings(settings => settings.CanExtractPages(true))
        .Render()
</div>

{% endhighlight %}
{% endtabs %}

Use the `ShowExtractPagesOption` API to show or hide the Extract Pages option. When set to `false`, the Extract Pages tool is removed from the toolbar. The default value is `true`.

Use the following code snippet to remove the Extract Pages option:

{% tabs %}
{% highlight cshtml tabtitle="Index.cshtml" %}

@{
    ViewBag.Title = "PDF Viewer";
}

<div class="control-section">
    @Html.EJS().PdfViewer("pdfviewer")
        .DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf")
        .ServiceUrl(ViewBag.ServiceUrl)
        .PageOrganizerSettings(settings => settings.ShowExtractPagesOption(false))
        .Render()
</div>

{% endhighlight %}
{% endtabs %}

### Extract pages and load the result programmatically

You can extract pages programmatically using the `extractPages` method.
The following example extracts pages 1 and 2, then immediately loads the extracted pages back into the viewer. The returned value is a byte array representing the PDF file contents.

{% tabs %}
{% highlight cshtml tabtitle="Index.cshtml" %}

@{
    ViewBag.Title = "PDF Viewer";
}

<div class="control-section">
    <button onclick="extractPage()">Extract Page</button>
    @Html.EJS().PdfViewer("pdfviewer")
        .DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf")
        .ServiceUrl(ViewBag.ServiceUrl)
        .PageOrganizerSettings(settings => settings.CanExtractPages(true))
        .Render()
</div>

<script type="text/javascript">
    function extractPage() {
        // Get the PDF viewer instance
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        // Extract Pages 1,2
        var array = viewer.extractPages('1,2');
        // Load in viewer
        viewer.load(array, '');
        
        // print base64 to ensure
        console.log(array);
    }
</script>

{% endhighlight %}
{% endtabs %}

## See also

- [Overview](../overview)
- [UI interactions](../ui-interactions)
- [Programmatic support](../programmatic-support)
- [Toolbar](../toolbar)
- [Events](../events)
- [Mobile view](../mobile-view)

![Checkboxes for extract options](../images/extract-page-checkboxes.png)

## Programmatic options and APIs

You can control the Extract Pages experience via settings and invoke extraction through code.

### Enable/disable Extract Pages

Use the `canExtractPages` API to enable or disable the Extract Pages option. When set to `false`, the Extract Pages tool is disabled in the toolbar. The default value is `true`.

Use the following code snippet to enable or disable the Extract Pages option:

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<div style="width:100%;height:600px">
@Html.EJS().PdfViewer("pdfviewer").ResourceUrl("https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib").DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").PageOrganizerSettings(new {canExtractPages = false}).Render()
</div>
{% endhighlight %}
{% endtabs %}

Use the `showExtractPagesOption` API to show or hide the Extract Pages option. When set to `false`, the Extract Pages tool is removed from the toolbar. The default value is `true`.

Use the following code snippet to remove the Extract Pages option:

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<div style="width:100%;height:600px">
@Html.EJS().PdfViewer("pdfviewer").ResourceUrl("https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib").DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").PageOrganizerSettings(new {showExtractPagesOption = false}).Render()
</div>
{% endhighlight %}
{% endtabs %}

### Extract pages and load the result programmatically

You can extract pages programmatically using the `extractPages` method.
The following example extracts pages 1 and 2, then immediately loads the extracted pages back into the viewer. The returned value is a byte array (e.g., Uint8Array) representing the PDF file contents.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<button id="viewer" onclick="extractPage()">Extract Page</button>
<div style="width:100%;height:600px">
@Html.EJS().PdfViewer("pdfviewer").ResourceUrl("https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib").DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").PageOrganizerSettings(new {CanExtractPages = true}).Render()
</div>
<script>
    function extractPage() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        //Extract Pages 1,2
        var array = viewer.extractPages('1,2');
        //Load the Extracted Pages
        viewer.load(array,'');
        //Print the Base64 for reference
        console.log(array);
    }
</script>
{% endhighlight %}
{% endtabs %}

[View sample in GitHub](https://github.com/SyncfusionExamples/mvc-pdf-viewer-examples/tree/master/How%20to)

## See also

- [Overview](../overview)
- [UI interactions](../ui-interactions)
- [Programmatic support](../programmatic-support)
- [Toolbar](../toolbar)
- [Events](../events)
- [Mobile view](../mobile-view)
