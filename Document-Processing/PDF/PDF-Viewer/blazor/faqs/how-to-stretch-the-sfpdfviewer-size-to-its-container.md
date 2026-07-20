---
layout: post
title: Resize the SfPdfViewer to fit its container in Blazor | Syncfusion
description: Learn how to make the Blazor SfPdfViewer resize with its parent container at runtime using the Splitter Resizing event and UpdateViewerContainerAsync.
platform: document-processing
control: SfPdfViewer
documentation: ug
---

# Resize the SfPdfViewer to fit its container in Blazor

Use the Splitter’s Resizing event to resize the PDF viewer with its container at runtime. In this example, the `SfPdfViewer` is placed inside a Splitter pane, and UpdateViewerContainerAsync is called during resizing to recalculate the layout. Ensure the container has an explicit height and width (for example, 100%) so the viewer can stretch to fill the available space.

```cshtml

@using Syncfusion.Blazor.SfPdfViewer
@using Syncfusion.Blazor.Layouts

<!--This splitter layout holds two panes-->
<SfSplitter Height="100%" Width="100%">
    <SplitterEvents Resizing="@onresize"></SplitterEvents>

    <!--Configures one or more panes to construct different layouts-->
    <SplitterPanes>
        <SplitterPane Size="200px">
            <ContentTemplate>
                <div> Left pane </div>
            </ContentTemplate>
        </SplitterPane>

        <SplitterPane Size="200px">
            <ContentTemplate>

                <!--Build the PDF Viewer inside a splitter pane-->
                <SfPdfViewer2 @ref="@viewer"
                              DocumentPath="@DocumentPath">
                </SfPdfViewer2>

            </ContentTemplate>
        </SplitterPane>

    </SplitterPanes>
</SfSplitter>

@code
{
    private SfPdfViewer2 viewer;

    //Sets the document path for initial loading.
    private string DocumentPath { get; set; } = "wwwroot/Data/PDF_Succinctly.pdf";

    //Triggered when the splitter is resized.
    private async Task onresize()
    {
        //Recalculates the PDF Viewer layout when the container size changes.
        await viewer.UpdateViewerContainerAsync();
    }
}

```

[View sample in GitHub](https://github.com/SyncfusionExamples/blazor-pdf-viewer-examples/tree/master/Common/Resize%20the%20PDF%20Viewer%20to%20its%20parent%20element).


## See also

* [How to load Microsoft Office files in Blazor SfPdfViewer Component](./how-to-load-office-files)
* [How to unload the PDF document from Viewer](./how-to-unload-the-pdf-document-from-viewer)
* [How to show or hide the Component dynamically](./how-to-show-or-hide-sfpdfviewer-dynamically)
