---
layout: post
title: Check the status of the comments in Blazor SfPdfViewer | Syncfusion
description: Learn how to retrieve the review status of comments using the Review property and GetAnnotationsAsync in the Blazor SfPdfViewer component.
platform: document-processing
control: SfPdfViewer
documentation: ug
---

# Check the status of annotations or comments in Blazor SfPdfViewer

The Blazor SfPdfViewer component supports retrieving the review status of annotations and comments through the [Review](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.Review.html) property of the [PdfAnnotation](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfAnnotation.html) class. This enables identifying the `State` and the `StateModel` associated with each annotation.

The `PdfAnnotation` class represents a single annotation in the viewer. Its `Review` property exposes the review-tracking metadata. The [GetAnnotationsAsync()](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerBase.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerBase_GetAnnotationsAsync) method returns a `List<PdfAnnotation>` containing all annotations (including text markup, free text, ink, stamp, and shape annotations) that exist on the currently loaded PDF document.

The following code example shows how to obtain the review status of each annotation and log it to the browser console.

```cshtml
@using Syncfusion.Blazor.SfPdfViewer
@using Syncfusion.Blazor.Buttons
@inject IJSRuntime JsRuntime

<SfButton OnClick="reviewStatus">Review Status</SfButton>
<SfPdfViewer2 @ref="pdfviewer"
              CommentPanelVisible="true"
              DocumentPath="@DocumentPath"
              Height="100%"
              Width="100%"></SfPdfViewer2>

@code{
    private string DocumentPath { get; set; } = "wwwroot/Data/PDF_Succinctly.pdf";

    private SfPdfViewer2 pdfviewer;    

    //Prints the comment status of the PDF document in the console.
    private async Task reviewStatus()
    {
        //Gets the annotation collection.
        List<PdfAnnotation> annotationCollection = await pdfviewer.GetAnnotationsAsync();
        for (var x = 0; x < annotationCollection.Count; x++)
        {
            PdfAnnotation annotation = annotationCollection[x];
            //Gets the review status details of the comment.
            Review review = annotation.Review;
            if (review == null)
            {
                continue;
            }
            var reviewState = review.State;
            var reviewStateModel = review.StateModel;
            await this.JsRuntime.InvokeVoidAsync("console.log",
                $"State: {reviewState}, StateModel: {reviewStateModel}");
        }
    }
}
```
[View sample in GitHub](https://github.com/SyncfusionExamples/blazor-pdf-viewer-examples/tree/master/Annotations/Comment%20Panel/Retrieve%20the%20comment%20status).

## See also

* [Free text annotations in Blazor SfPdfViewer Component](../annotation/free-text-annotation)
* [Ink Annotation in the Blazor SfPdfViewer component](../annotation/ink-annotation)
* [Stamp annotations in Blazor SfPdfViewer Component](../annotation/stamp-annotation)
* [Comments in Blazor SfPdfViewer component](../annotation/comments)
* [SfPdfViewer getting started (Web App)](../getting-started/web-app)
