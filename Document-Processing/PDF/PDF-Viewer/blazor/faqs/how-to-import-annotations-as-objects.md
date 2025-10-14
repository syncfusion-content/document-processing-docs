---
layout: post
title: Import annotations as objects in SfPdfViewer Component | Syncfusion
description: Learn how to import annotations as objects in the Syncfusion Blazor SfPdfViewer component using the ExportAnnotationsAsObjectAsync method.
platform: document-processing
control: SfPdfViewer
documentation: ug
---

# Import annotations as objects in Blazor SfPdfViewer Component

The Syncfusion&reg; Blazor SfPdfViewer component supports importing annotations from an object that was previously exported by the component. To obtain such an annotation object, use the [ExportAnnotationsAsObjectAsync()](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerBase.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerBase_ExportAnnotationsAsObjectAsync) method. Only annotation objects exported by the SfPdfViewer component can be imported.

The following example shows how to export annotations as an object and import them back using the SfPdfViewer component.

```cshtml
@page "/"
@using Syncfusion.Blazor.SfPdfViewer

<button @onclick="ExportAnnot">ExportAnnot</button>
<button @onclick="ImportAnnot">ImportAnnot</button>

<SfPdfViewer2 @ref="PdfViewer"
              DocumentPath="@DocumentPath"
              Height="100%"
              Width="100%">
</SfPdfViewer2>

@code {
    public SfPdfViewer2 PdfViewer { get; set; }
    private string DocumentPath { get; set; } = "PDF_Succinctly.pdf";
    public object annotation;

    //Export the annotations as an object
    public async void ExportAnnot()
    {
        await PdfViewer.ExportAnnotation();
        annotation = await PdfViewer.ExportAnnotationsAsObjectAsync();
    }

    //Import the annotations that are exported as objects
    public async void ImportAnnot()
    {
        await PdfViewer.ImportAnnotation(annotation);
    }
}
```

[View the sample on GitHub](https://github.com/SyncfusionExamples/blazor-pdf-viewer-examples/tree/master/Annotations/Import-Export/Annotations%20as%20JSON%20object).

N> Refer to the [Blazor SfPdfViewer](https://www.syncfusion.com/pdf-viewer-sdk/blazor-pdf-viewer) feature tour for an overview of key capabilities. Explore the [Blazor SfPdfViewer example](https://document.syncfusion.com/demos/pdf-viewer/blazor-server/pdf-viewer/default-functionalities?theme=bootstrap4) to see the core features in action.

## See also

* [Import and Export annotations in Blazor SfPdfViewer Component](../annotation/import-export-annotation)