---
layout: post
title: Manage local storage in ASP.NET Core PDF Viewer | Syncfusion
description: Learn how to control session-specific data storage in the Syncfusion ASP.NET Core PDF Viewer using the enableLocalStorage property.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Enable local storage in ASP.NET Core PDF Viewer

The PDF Viewer uses the **enableLocalStorage** property to determine how session-specific data is stored. By default, this property is set to `false`, and data is stored in the browser's session storage. When set to `true`, the data is maintained in an internal in-memory collection.

## Configure local storage

Set the **EnableLocalStorage** property to `true` in the Razor view to keep session data in memory:

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

@page "{handler?}"
@model IndexModel
@{
    ViewData["Title"] = "Home page";
}

<div class="text-center">
    <ejs-pdfviewer id="pdfviewer" style="height:600px" resourceUrl="https://cdn.syncfusion.com/ej2/28.1.33/dist/ej2-pdfviewer-lib" documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf" enableLocalStorage="true">
    </ejs-pdfviewer>
</div>

<script type="text/javascript">
</script>

{% endhighlight %}
{% endtabs %}

## Considerations

* **Memory Usage**: Storing data in memory can increase the memory footprint of the application, especially when processing large documents or multiple interactive elements.
* **Instance Disposal**: Ensure the PDF Viewer instance is properly disposed of when no longer needed to prevent memory leaks.
* **Default Behavior**: If **enableLocalStorage** is omitted or set to `false`, the component automatically utilizes session storage.

[View sample in GitHub](https://github.com/SyncfusionExamples/asp-core-pdf-viewer-examples/tree/master/How%20to)
