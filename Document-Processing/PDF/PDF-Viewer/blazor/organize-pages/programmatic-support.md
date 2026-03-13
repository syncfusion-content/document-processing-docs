---
layout: post
title: Programmatical Organize Pages in Syncfusion PDF Viewer | Syncfusion
description: Learn here all about the Programmatic Support including rotating, rearranging, inserting, deleting, and duplicating for Organize Pages.
platform: document-processing
control: SfPdfViewer
documentation: ug
---

# Programmatic support for Organize Pages

The PDF Viewer exposes APIs to programmatically rotate, move, insert, delete, duplicate, export, and import pages. The examples below show common calls; each operation updates the client-side view and is persisted when you save the document.

## Rotate pages

This method allows programmatic rotation of individual or multiple pages within the PDF document. The rotation is applied to the client-side representation and will be persisted upon saving the document. Provide the indexes of the page to rotate and rotation direction.

{% tabs %}
{% highlight razor %}
@page "/"
@using Syncfusion.Blazor.Buttons

<SfButton OnClick="RotateMethod">Rotate</SfButton>
<SfPdfViewer2 DocumentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
              Height="100%"
              Width="100%">
</SfPdfViewer2>

@code {
    SfPdfViewer2? Viewer;

    private async Task RotateMethod() {
        await Viewer?.RotatePagesAsync([1,2], RotationDirection.Clockwise);
    }
}

{% endhighlight %}
{% endtabs %}

`RotationDirection` values: `RotationDirection.Clockwise` and `RotationDirection.CounterClockwise`.

### Rotate to a specific angle

### Rotate Pages with angle

This method allows programmatic rotation of individual or multiple pages within the PDF document to a specific angle. The rotation is applied to the client-side representation and will be persisted upon saving the document. Provide the indexes of the page to rotate and rotation angle.

{% tabs %}
{% highlight razor %}
@page "/"
@using Syncfusion.Blazor.Buttons

<SfButton OnClick="RotateMethodAngle">Rotate Angale</SfButton>
<SfPdfViewer2 DocumentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
              Height="100%"
              Width="100%">
</SfPdfViewer2>

@code {
    SfPdfViewer2? Viewer;

    private async Task RotateMethodAngle() {
        await Viewer?.RotatePagesToAngleAsync([1,2], PageRotation.RotateAngle180);
    }
}

{% endhighlight %}
{% endtabs %}

`PageRotation` options: `RotateAngle0`, `RotateAngle90`, `RotateAngle180`, `RotateAngle270`.

## Move pages

This method allows asynchronously arranges the specified pages at the given target position. It rearrange the pages in the document based in the targeted index. Provide the indexes of the page to move and targeted index to move.

{% tabs %}
{% highlight razor %}
@page "/"
@using Syncfusion.Blazor.Buttons

<SfButton OnClick="MoveMethod">Move</SfButton>
<SfPdfViewer2 DocumentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
              Height="100%"
              Width="100%">
</SfPdfViewer2>

@code {
    SfPdfViewer2? Viewer;

    private async Task MoveMethod() {
        await Viewer?.MovePagesAsync([1,2], 10);
    }
}

{% endhighlight %}
{% endtabs %}

## Insert blank pages

This method allows asynchronously inserts one or more blank pages at the specified index. It insert the blank pages in the document based in the targeted index. Provide the indexes to add blank pages and count of the pages need to be added.

{% tabs %}
{% highlight razor %}
@page "/"
@using Syncfusion.Blazor.Buttons

<SfButton OnClick="InsertBlankMethod">Insert</SfButton>
<SfPdfViewer2 DocumentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
              Height="100%"
              Width="100%">
</SfPdfViewer2>

@code {
    SfPdfViewer2? Viewer;

    private async Task InsertBlankMethod() {
        await Viewer?.InsertBlankPagesAsync(2, 3);
    }
}

{% endhighlight %}
{% endtabs %}

## Delete pages

This method allows asynchronously deletes the pages at the specified indices from the document. It delete the pages in the document based in the targeted index. Provide the indexes to delete pages of the document.

{% tabs %}
{% highlight razor %}
@page "/"
@using Syncfusion.Blazor.Buttons

<SfButton OnClick="DeleteMethod">Delete</SfButton>
<SfPdfViewer2 DocumentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
              Height="100%"
              Width="100%">
</SfPdfViewer2>

@code {
    SfPdfViewer2? Viewer;

    private async Task DeleteMethod() {
        await Viewer?.DeletePagesAsync([1,2]);
    }
}

{% endhighlight %}
{% endtabs %}

## Duplicate pages

This method allows asynchronously duplicates the pages at the specified indices from the document. It duplicates the pages in the document based in the targeted index. Provide the indexes to duplicates pages of the document.

{% tabs %}
{% highlight razor %}
@page "/"
@using Syncfusion.Blazor.Buttons

<SfButton OnClick="DuplicateMethod">Duplicate</SfButton>
<SfPdfViewer2 DocumentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
              Height="100%"
              Width="100%">
</SfPdfViewer2>

@code {
    SfPdfViewer2? Viewer;

    private async Task DuplicateMethod() {
        await Viewer?.DuplicatePagesAsync([1,2]);
    }
}

{% endhighlight %}
{% endtabs %}

## Export pages

This method allows extracts the specified pages and downloads them as a separate PDF document. It extract the pages in the document based in the targeted index. Provide the indexes to extract pages of the document.

{% tabs %}
{% highlight razor %}
@page "/"
@using Syncfusion.Blazor.Buttons

<SfButton OnClick="ExtractMethod">Extract</SfButton>
<SfPdfViewer2 DocumentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
              Height="100%"
              Width="100%">
</SfPdfViewer2>

@code {
    SfPdfViewer2? Viewer;

    private async Task ExtractMethod() {
        await Viewer?.ExtractPagesAsync([1,2]);
    }
}

{% endhighlight %}
{% endtabs %}

### Export pages as stream

This method allows extracts the specified pages and returns the extracted PDF as a stream. It extract the pages in the document as index based in the targeted index. Provide the indexes to extract pages of the document as stream.

{% tabs %}
{% highlight razor %}
@page "/"
@using Syncfusion.Blazor.Buttons

<SfButton OnClick="ExtractMethodStream">Extract Stream</SfButton>
<SfPdfViewer2 DocumentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
              Height="100%"
              Width="100%">
</SfPdfViewer2>

@code {
    SfPdfViewer2? Viewer;
    Stream docStream;
    private async Task ExtractMethodStream() {
        docStream = await Viewer?.ExtractPagesAsStreamAsync([1,2]);
        await Viewer?.LoadAsync(docStream, null);
    }
}

{% endhighlight %}
{% endtabs %}

## Import pages

This method allows inserts pages from another PDF document at the specified index. It insert the pages of the another document based in the targeted index. Provide the indexes to import pages of the another document, byte array of the imported document and password.

{% tabs %}
{% highlight razor %}
@page "/"
@using Syncfusion.Blazor.Buttons

<SfButton OnClick="ImportMethod">Import</SfButton>
<SfPdfViewer2 DocumentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
              Height="100%"
              Width="100%">
</SfPdfViewer2>

@code {
    SfPdfViewer2? Viewer;

    private async Task ImportMethod() {
        byte[] byteArray = System.IO.File.ReadAllBytes("wwwroot/pdf-succinctly.pdf");
        await Viewer?.InsertPagesAsync(2, byteArray, null);
    }
}

{% endhighlight %}
{% endtabs %}

### Import pages as stream

This method allows inserts pages from another PDF document as stream at the specified index. It insert the pages of the another document as stream based in the targeted index. Provide the indexes to import pages of the another document, stream of the imported document and password.

{% tabs %}
{% highlight razor %}
@page "/"
@using Syncfusion.Blazor.Buttons

<SfButton OnClick="ImportMethodStream">Import Stream</SfButton>
<SfPdfViewer2 DocumentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
              Height="100%"
              Width="100%">
</SfPdfViewer2>

@code {
    SfPdfViewer2? Viewer;

    private async Task ImportMethodStream() {
        byte[] byteArray = System.IO.File.ReadAllBytes("wwwroot/pdf-succinctly.pdf");
        MemoryStream stream = new MemoryStream(byteArray);
        await Viewer?.InsertPagesAsync(2, stream, null);
    }
}

{% endhighlight %}
{% endtabs %}

[View sample in GitHub](https://github.com/SyncfusionExamples/blazor-pdf-viewer-examples/tree/master/Page%20Organizer/Organize-API-Support)