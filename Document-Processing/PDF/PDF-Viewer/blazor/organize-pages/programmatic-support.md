---
layout: post
title: Programmatical Organize Pages in Syncfusion PDF Viewer | Syncfusion
description: Learn here all about the Programmatic Support including rotating, rearranging, inserting, deleting, and duplicating for Organize Pages.
platform: document-processing
control: SfPdfViewer
documentation: ug
---

# Programmatic Support for Organize Pages in Blazor PDF Viewer control

The PDF Viewer provides comprehensive programmatic support for organizing pages, allowing you to integrate and manage PDF functionalities directly within your application. This section details the available APIs to enable, control, and interact with the page organization features.

## Rotate Pages

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

`RotationDirection` represent the rotation direction of the page. It has two types

- `RotationDirection.Clockwise` - It rotates the page in the clock wise direction.
- `RotationDirection.CounterClockwise` - It rotates the page in the anti clock wise direction.

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

`PageRotation` represent the rotation angle of the page. It has four types

- `PageRotation.RotateAngle0` - It rotates the page in the 0 degree direction.
- `PageRotation.RotateAngle90` - It rotates the page in the 90 degree direction.
- `PageRotation.RotateAngle180` - It rotates the page in the 180 degree direction.
- `PageRotation.RotateAngle270` - It rotates the page in the 270 degree direction.

## Move Pages

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

## Insert Pages

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

## Delete Pages

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

## Duplicate Pages

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

## Export Pages

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

### Export Pages as Stream

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

## Import Pages

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

### Import Pages as Stream

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