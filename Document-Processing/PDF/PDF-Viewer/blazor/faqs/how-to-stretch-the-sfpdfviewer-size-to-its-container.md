---
layout: post
title: Resize the SfPdfViewer to fit its container in Blazor | Syncfusion
description: Learn how to make the Blazor SfPdfViewer resize with its parent container at runtime using the Splitter Resizing event and UpdateViewerContainerAsync.
platform: document-processing
control: SfPdfViewer
documentation: ug
---

# Update the viewer size at run-time in Blazor SfPdfViewer Component

Use the Splitter’s Resizing event to resize the PDF viewer with its container at runtime. In this example, the SfPdfViewer2 is placed inside a Splitter pane, and UpdateViewerContainerAsync is called during resizing to recalculate the layout. Ensure the container has an explicit height and width (for example, 100%) so the viewer can stretch to fill the available space.

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

                <!--Build the SfPdfViewer inside a splitter pane-->
                <SfPdfViewer2 @ref="@viewer"
                              DocumentPath="@DocumentPath">
                </SfPdfViewer2>

            </ContentTemplate>
        </SplitterPane>

    </SplitterPanes>
</SfSplitter>

@code
{
    SfPdfViewer2 viewer;

    //Sets the document path for initial loading.
    private string DocumentPath { get; set; } = "wwwroot/Data/PDF_Succinctly.pdf";

    //This method will get invoked when the splitter is resized.
    private async void onresize()
    {
        //This method will update the SfPdfViewer size when the container size is updated at runtime.
        await viewer.UpdateViewerContainerAsync();
    }
}

```

[View sample in GitHub](https://github.com/SyncfusionExamples/blazor-pdf-viewer-examples/tree/master/Common/Resize%20the%20PDF%20Viewer%20to%20its%20parent%20element).