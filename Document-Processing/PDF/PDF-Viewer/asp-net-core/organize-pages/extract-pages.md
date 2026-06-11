---
layout: post
title: Extract Pages in ASP.NET Core PDF Viewer | Syncfusion
description: Learn here all about Extract Pages in Organize Pages in Syncfusion ASP.NET Core PDF Viewer control of Syncfusion Essential JS 2 and more.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Extract pages in ASP.NET Core PDF Viewer

The PDF Viewer component lets you extract pages from a document using the Extract Pages option in the Organize Pages UI.
The Extract Pages tool is available by default in Organize Pages.

## Extract Pages in Organize Pages

- Open the Organize Pages panel in the PDF Viewer toolbar.
- Locate and click the Extract Pages option.

![Extract Pages](../images/extract-page.png)

When selected, a secondary toolbar dedicated to extraction is displayed.

![Extract Pages secondary toolbar](../images/extract-page-secondary-toolbar.png)

## Extracting pages using the UI

You can extract by typing page numbers/ranges or by selecting thumbnails.

1. Click Extract Pages in the Organize Pages panel.
2. In the input box, enter the pages to extract. Supported formats include:
   - Single pages: 1,3,5
   - Ranges: 2-6
   - Combinations: 1,4,7-9
3. Alternatively, select the page thumbnails you want instead of typing values.
4. Click Extract to download the extracted pages as a new PDF. Click Cancel to close the tool.

![Extract Pages with selected thumbnails](../images/extract-page-selected-thumbnail.png)

 N> Page numbers are 1-based (first page is 1). Invalid or out-of-range entries are ignored.

## Extraction options (checkboxes)

Two options appear in the secondary toolbar:

- **Delete Pages After Extracting:**
  - When enabled, the selected/entered pages are removed from the document opened in the viewer after the extraction completes. The extracted pages are still downloaded as a new file.

- **Extract Pages As Separate Files:**
  - When enabled, every selected page is exported as an individual PDF file. Ranges such as 2-4 export pages 2, 3, and 4 as separate PDFs.

![Checkboxes for extract options](../images/extract-page-checkboxes.png)

## Programmatic options and APIs

You can control the Extract Pages experience via settings and invoke extraction through code.

### Enable/disable Extract Pages

Use the `canExtractPages` API to enable or disable the Extract Pages option. When set to `false`, the Extract Pages tool is disabled in the toolbar. The default value is `true`.

Use the following code snippet to enable or disable the Extract Pages option:

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<div class="text-center">
    <ejs-pdfviewer  id="pdfviewer" 
                    style="height:600px" 
                    pageOrganizerSettings="@(new {CanExtractPages = true})" 
                    resourceUrl="https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib"
                    documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf">
    </ejs-pdfviewer>
</div>
{% endhighlight %}
{% endtabs %}

Set `showExtractPagesOption` to `false` to hide the Extract Pages tool from the toolbar. The default is `true`.

To hide Extract Pages:

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<div class="text-center">
    <ejs-pdfviewer  id="pdfviewer" 
                    style="height:600px" 
                    pageOrganizerSettings="@(new {showExtractPagesOption = false})" 
                    resourceUrl="https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib"
                    documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf">
    </ejs-pdfviewer>
</div>
{% endhighlight %}
{% endtabs %}

### Extracting pages and loading results programmatically

The `extractPages` method enables programmatic extraction. This example extracts pages 1 and 2, loading them into the viewer. The method returns a byte array (Uint8Array) representing PDF contents.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<div class="text-center">
    <button id="extractPage" onclick="extractPage()">Extract Page</button>
    <ejs-pdfviewer  id="pdfviewer" 
                    style="height:600px" 
                    pageOrganizerSettings="@(new {CanExtractPages = true})" 
                    resourceUrl="https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib"
                    documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf">
    </ejs-pdfviewer>
</div>

<script>
  function extractPage() {
    var viewer = document.getElementById('pdfviewer')?.ej2_instances[0];

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

[View sample in GitHub](https://github.com/SyncfusionExamples/asp-core-pdf-viewer-examples/tree/master/How%20to)

## See also

- [Overview](../overview)
- [UI interactions](../ui-interactions)
- [Programmatic support](../programmatic-support)
- [Toolbar](../toolbar)
- [Events](../events)
- [Mobile view](../mobile-view)
