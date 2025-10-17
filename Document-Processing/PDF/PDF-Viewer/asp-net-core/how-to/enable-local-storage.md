---
layout: post
title: Manage local storage in ASP.NET Core PDF Viewer | Syncfusion
description: Learn how to control session-specific data storage in the Syncfusion ASP.NET Core PDF Viewer using the enableLocalStorage property.
platform: document-processing
control: PDF Viewer
publishingplatform: ASP.NET Core
documentation: ug
domainurl: ##DomainURL##
---

# Manage local storage in the ASP.NET Core PDF Viewer

Use the `enableLocalStorage` property to control whether session-specific data is stored in session storage (default) or an internal in-memory collection.

## Use enableLocalStorage

Set `enableLocalStorage` to manage storage behavior. When `true`, data is kept in memory; otherwise, session storage is used.

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

- Memory usage can increase when using in-memory storage with large documents or many interactive elements.
- Dispose of the PDF Viewer instance when no longer needed to avoid memory leaks.
- Default: `enableLocalStorage` is `false`, so session storage is used unless changed.

[View sample in GitHub](https://github.com/SyncfusionExamples/asp-core-pdf-viewer-examples/tree/master/How%20to)
