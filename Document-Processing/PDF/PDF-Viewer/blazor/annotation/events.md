---
layout: post
title: Annotation Events in Blazor SfPdfViewer Component | Syncfusion
description: Learn how to subscribe to and handle annotation events in the Syncfusion Blazor SfPdfViewer.
platform: document-processing
control: SfPdfViewer
documentation: ug
---

# Annotation Events in Blazor SfPdfViewer Component

Annotation events notify the application when annotations are added, selected, moved, resized, modified, or removed. The following events can be subscribed through the PdfViewerEvents tag in the SfPdfViewer component.

|Name|Description|
|---|---|
|AddSignature|Triggers when a signature is added to a page in the PDF document.|
|AnnotationAdded|Triggers when an annotation is added to a page in the PDF document.|
|AnnotationMouseover|Triggers when the mouse pointer moves over an annotation object.|
|AnnotationMoved|Triggers when an annotation is moved on a page in the PDF document.|
|AnnotationPropertiesChanged|Triggers when annotation properties are modified on a PDF page.|
|AnnotationRemoved|Triggers when an annotation is removed from a page in the PDF document.|
|AnnotationResized|Triggers when an annotation is resized on a page in the PDF document.|
|AnnotationSelected|Triggers when an annotation is selected on a page in the PDF document.|
|AnnotationUnselected|Triggers when an annotation is unselected on a page in the PDF document.|
|MoveSignature|Triggers when a signature is moved on a page in the PDF document.|
|OnAnnotationDoubleClick|Triggers when an annotation is double-clicked.|
|RemoveSignature|Triggers when a signature is removed from a page in the PDF document.|
|ResizeSignature|Triggers when a signature is resized on a page in the PDF document.|
|SignaturePropertiesChange|Triggers when the properties of a signature are changed on a page in the PDF document.|
|SignatureSelected|Triggers when a signature is selected on a page in the PDF document.|
|SignatureUnselected|Triggers when a signature is unselected on a page in the PDF document.|

## AddSignature Event

The [AddSignature](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerEvents_AddSignature) event triggers when a signature is added to a page in the PDF document.

The following example illustrates how to handle the AddSignature event.

```cshtml

@using Syncfusion.Blazor.SfPdfViewer 

<SfPdfViewer2 DocumentPath="@DocumentPath" Height="100%" Width="100%"> 
    <PdfViewerEvents AddSignature="@AddSignature"></PdfViewerEvents>
</SfPdfViewer2>

@code{ 
    private string DocumentPath { get; set; } = "wwwroot/Data/PDF_Succintly.pdf"; 
    public async Task AddSignature(AddSignatureEventArgs args) 
    {
        Console.WriteLine(args.EditingAction);
    }	 
}

```

## AnnotationAdded Event

The [AnnotationAdded](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerEvents_AnnotationAdded) event triggers when an annotation is added to a page in the PDF document.

The following example illustrates how to handle the AnnotationAdded event.

```cshtml

@using Syncfusion.Blazor.SfPdfViewer 

<SfPdfViewer2 DocumentPath="@DocumentPath" Height="100%" Width="100%"> 
    <PdfViewerEvents AnnotationAdded="@AnnotationAdded"></PdfViewerEvents>
</SfPdfViewer2>

@code{ 
    private string DocumentPath { get; set; } = "wwwroot/Data/PDF_Succintly.pdf"; 
    public async Task AnnotationAdded(AnnotationAddEventArgs args) 
    {
        Console.WriteLine(args.EditingAction);
    }	 
}

```

## AnnotationMouseover Event

The [AnnotationMouseover](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerEvents_AnnotationMouseover) event triggers when the mouse pointer moves over an annotation object.

The following example illustrates how to handle the AnnotationMouseover event.

```cshtml

@using Syncfusion.Blazor.SfPdfViewer 

<SfPdfViewer2 DocumentPath="@DocumentPath" Height="100%" Width="100%"> 
    <PdfViewerEvents AnnotationMouseover="@AnnotationMouseover"></PdfViewerEvents>
</SfPdfViewer2>

@code{ 
    private string DocumentPath { get; set; } = "wwwroot/Data/PDF_Succintly.pdf"; 
    public async Task AnnotationMouseover(AnnotationMouseoverEventArgs args) 
    {
        Console.WriteLine(args.EditingAction);
    }	 
}

```

## AnnotationMoved Event

The [AnnotationMoved](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerEvents_AnnotationMoved) event triggers when an annotation is moved on a page in the PDF document.

The following example illustrates how to handle the AnnotationMoved event.

```cshtml

@using Syncfusion.Blazor.SfPdfViewer 

<SfPdfViewer2 DocumentPath="@DocumentPath" Height="100%" Width="100%"> 
    <PdfViewerEvents AnnotationMoved="@AnnotationMoved"></PdfViewerEvents>
</SfPdfViewer2>

@code{ 
    private string DocumentPath { get; set; } = "wwwroot/Data/PDF_Succintly.pdf"; 
    public async Task AnnotationMoved(AnnotationMoveEventArgs args) 
    {
        Console.WriteLine(args.EditingAction);
    }	 
}

```

## AnnotationPropertiesChanged Event

The [AnnotationPropertiesChanged](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerEvents_AnnotationPropertiesChanged) event triggers when annotation properties are modified on a PDF page.

The following example illustrates how to handle the AnnotationPropertiesChanged event.

```cshtml

@using Syncfusion.Blazor.SfPdfViewer 

<SfPdfViewer2 DocumentPath="@DocumentPath" Height="100%" Width="100%"> 
    <PdfViewerEvents AnnotationPropertiesChanged="@AnnotationPropertiesChanged"></PdfViewerEvents>
</SfPdfViewer2>

@code{ 
    private string DocumentPath { get; set; } = "wwwroot/Data/PDF_Succintly.pdf"; 
    public async Task AnnotationPropertiesChanged(AnnotationPropertiesChangeEventArgs args) 
    {
        Console.WriteLine(args.EditingAction);
    }	 
}

```

## AnnotationRemoved Event

The [AnnotationRemoved](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerEvents_AnnotationRemoved) event triggers when an annotation is removed from a page in the PDF document.

The following example illustrates how to handle the AnnotationRemoved event.

```cshtml

@using Syncfusion.Blazor.SfPdfViewer 

<SfPdfViewer2 DocumentPath="@DocumentPath" Height="100%" Width="100%"> 
    <PdfViewerEvents AnnotationRemoved="@AnnotationRemoved"></PdfViewerEvents>
</SfPdfViewer2>

@code{ 
    private string DocumentPath { get; set; } = "wwwroot/Data/PDF_Succintly.pdf"; 
    public async Task AnnotationRemoved(AnnotationRemoveEventArgs args) 
    {
        Console.WriteLine(args.EditingAction);
    }	 
}

```

## AnnotationResized Event

The [AnnotationResized](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerEvents_AnnotationResized) event triggers when an annotation is resized on a page in the PDF document.

The following example illustrates how to handle the AnnotationResized event.

```cshtml

@using Syncfusion.Blazor.SfPdfViewer 

<SfPdfViewer2 DocumentPath="@DocumentPath" Height="100%" Width="100%"> 
    <PdfViewerEvents AnnotationResized="@AnnotationResized"></PdfViewerEvents>
</SfPdfViewer2>

@code{ 
    private string DocumentPath { get; set; } = "wwwroot/Data/PDF_Succintly.pdf"; 
    public async Task AnnotationResized(AnnotationResizeEventArgs args) 
    {
        Console.WriteLine(args.EditingAction);
    }	 
}

```

## AnnotationSelected Event

The [AnnotationSelected](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerEvents_AnnotationSelected) event triggers when an annotation is selected on a page in the PDF document.

The following example illustrates how to handle the AnnotationSelected event.

```cshtml

@using Syncfusion.Blazor.SfPdfViewer 

<SfPdfViewer2 DocumentPath="@DocumentPath" Height="100%" Width="100%"> 
    <PdfViewerEvents AnnotationSelected="@AnnotationSelected"></PdfViewerEvents>
</SfPdfViewer2>

@code{ 
    private string DocumentPath { get; set; } = "wwwroot/Data/PDF_Succintly.pdf"; 
    public async Task AnnotationSelected(AnnotationSelectEventArgs args) 
    {
        Console.WriteLine(args.EditingAction);
    }	 
}

```

## AnnotationUnselected Event

The [AnnotationUnselected](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerEvents_AnnotationUnselected) event triggers when an annotation is unselected on a page in the PDF document.

The following example illustrates how to handle the AnnotationUnselected event.

```cshtml

@using Syncfusion.Blazor.SfPdfViewer 

<SfPdfViewer2 DocumentPath="@DocumentPath" Height="100%" Width="100%"> 
    <PdfViewerEvents AnnotationUnselected="@AnnotationUnselected"></PdfViewerEvents>
</SfPdfViewer2>

@code{ 
    private string DocumentPath { get; set; } = "wwwroot/Data/PDF_Succintly.pdf"; 
    public async Task AnnotationUnselected(AnnotationUnselectEventArgs args) 
    {
        Console.WriteLine(args.EditingAction);
    }	 
}

```

## MoveSignature Event

The [MoveSignature](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerEvents_MoveSignature) event triggers when a signature is moved on a page in the PDF document.

The following example illustrates how to handle the MoveSignature event.

```cshtml

@using Syncfusion.Blazor.SfPdfViewer 

<SfPdfViewer2 DocumentPath="@DocumentPath" Height="100%" Width="100%"> 
    <PdfViewerEvents MoveSignature="@MoveSignature"></PdfViewerEvents>
</SfPdfViewer2>

@code{ 
    private string DocumentPath { get; set; } = "wwwroot/Data/PDF_Succintly.pdf"; 
    public async Task MoveSignature(MoveSignatureEventArgs args) 
    {
        Console.WriteLine(args.EditingAction);
    }	 
}

```

## OnAnnotationDoubleClick Event

The [OnAnnotationDoubleClick](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerEvents_OnAnnotationDoubleClick) event triggers when an annotation is double-clicked.

The following example illustrates how to handle the OnAnnotationDoubleClick event.

```cshtml

@using Syncfusion.Blazor.SfPdfViewer 

<SfPdfViewer2 DocumentPath="@DocumentPath" Height="100%" Width="100%"> 
    <PdfViewerEvents OnAnnotationDoubleClick="@OnAnnotationDoubleClick"></PdfViewerEvents>
</SfPdfViewer2>

@code{ 
    private string DocumentPath { get; set; } = "wwwroot/Data/PDF_Succintly.pdf"; 
    public async Task OnAnnotationDoubleClick(AnnotationDoubleClickEventArgs args) 
    {
        Console.WriteLine(args.EditingAction);
    }	 
}

```

## RemoveSignature Event

The [RemoveSignature](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerEvents_RemoveSignature) event triggers when a signature is removed from a page in the PDF document.

The following example illustrates how to handle the RemoveSignature event.

```cshtml

@using Syncfusion.Blazor.SfPdfViewer 

<SfPdfViewer2 DocumentPath="@DocumentPath" Height="100%" Width="100%"> 
    <PdfViewerEvents RemoveSignature="@RemoveSignature"></PdfViewerEvents>
</SfPdfViewer2>

@code{ 
    private string DocumentPath { get; set; } = "wwwroot/Data/PDF_Succintly.pdf"; 
    public async Task RemoveSignature(RemoveSignatureEventArgs args) 
    {
        Console.WriteLine(args.EditingAction);
    }	 
}

```

## ResizeSignature Event

The [ResizeSignature](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerEvents_ResizeSignature) event triggers when a signature is resized on a page in the PDF document.

The following example illustrates how to handle the ResizeSignature event.

```cshtml

@using Syncfusion.Blazor.SfPdfViewer 

<SfPdfViewer2 DocumentPath="@DocumentPath" Height="100%" Width="100%"> 
    <PdfViewerEvents ResizeSignature="@ResizeSignature"></PdfViewerEvents>
</SfPdfViewer2>

@code{ 
    private string DocumentPath { get; set; } = "wwwroot/Data/PDF_Succintly.pdf"; 
    public async Task ResizeSignature(ResizeSignatureEventArgs args) 
    {
        Console.WriteLine(args.EditingAction);
    }	 
}

```

## SignaturePropertiesChange Event

The [SignaturePropertiesChange](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerEvents_SignaturePropertiesChange) event triggers when the properties of a signature are changed on a page in the PDF document.

The following example illustrates how to handle the SignaturePropertiesChange event.

```cshtml

@using Syncfusion.Blazor.SfPdfViewer 

<SfPdfViewer2 DocumentPath="@DocumentPath" Height="100%" Width="100%"> 
    <PdfViewerEvents SignaturePropertiesChange="@SignaturePropertiesChange"></PdfViewerEvents>
</SfPdfViewer2>

@code{ 
    private string DocumentPath { get; set; } = "wwwroot/Data/PDF_Succintly.pdf"; 
    public async Task SignaturePropertiesChange(SignaturePropertiesChangeEventArgs args) 
    {
        Console.WriteLine(args.EditingAction);
    }	 
}

```

## SignatureSelected Event

The [SignatureSelected](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerEvents_SignatureSelected) event triggers when a signature is selected on a page in the PDF document.

The following example illustrates how to handle the SignatureSelected event.

```cshtml

@using Syncfusion.Blazor.SfPdfViewer 

<SfPdfViewer2 DocumentPath="@DocumentPath" Height="100%" Width="100%"> 
    <PdfViewerEvents SignatureSelected="@SignatureSelected"></PdfViewerEvents>
</SfPdfViewer2>

@code{ 
    private string DocumentPath { get; set; } = "wwwroot/Data/PDF_Succintly.pdf"; 
    public async Task SignatureSelected(SignatureSelectEventArgs args) 
    {
        Console.WriteLine(args.EditingAction);
    }	 
}

```

## SignatureUnselected Event

The [SignatureUnselected](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerEvents_SignatureUnselected) event triggers when a signature is unselected on a page in the PDF document.

The following example illustrates how to handle the SignatureUnselected event.

```cshtml

@using Syncfusion.Blazor.SfPdfViewer 

<SfPdfViewer2 DocumentPath="@DocumentPath" Height="100%" Width="100%"> 
    <PdfViewerEvents SignatureUnselected="@SignatureUnselected"></PdfViewerEvents>
</SfPdfViewer2>

@code{ 
    private string DocumentPath { get; set; } = "wwwroot/Data/PDF_Succintly.pdf"; 
    public async Task SignatureUnselected(SignatureSelectEventArgs args) 
    {
        Console.WriteLine(args.EditingAction);
    }	 
}

```

## See also

* [Events in Blazor SfPdfViewer Component](../events)