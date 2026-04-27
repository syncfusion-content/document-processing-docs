---
layout: post
title: Convert between page and client coordinates | Syncfusion
description: Learn how to convert between page and client coordinates in the Blazor SfPdfViewer using JavaScript interop helper functions.
platform: document-processing
control: SfPdfViewer
documentation: ug
---

# Convert between page and client coordinates

Use JavaScript interop helper functions to translate between the document page coordinate system and the browser client (viewport) coordinate system:

1. Converting page coordinates to client coordinates

   - `convertPagePointToClientPoint`: Transforms document page coordinates to browser viewport coordinates.

2. Converting client coordinates to page coordinates

   - `convertClientPointToPagePoint`: Transforms browser viewport coordinates to document page coordinates.

## Converting page coordinates to client coordinates

- ConvertPagePointToClientPoint translates a point from the document page coordinate system to the browser client (viewport) coordinate system.

The following example shows how to convert page coordinates to client coordinates in a Blazor component.

**Step 1:** Add a JavaScript file to the app and reference it in the head element.

```cshtml

<head>
    <script src="index.js" type="text/javascript"></script>
</head>

```

**Step 2:** Add the following code to the JavaScript file.

```javascript

window.convertPagePointToClientPoint = function (pagePoint) {
    const pagediv = document.getElementsByClassName('e-pv-page-div')[pageIndex];
    const rect = pagediv.getBoundingClientRect();
    return {
        x: pagePoint.x + rect.left,
        y: pagePoint.y + rect.top
    };
};

```

**Step 3:** Add the following code to the Blazor component.

```cshtml

<div style="display: flex; height: 100vh; width: 100vw;">
    <div style="width: 40%; height: 100%;">
    </div>
    <div style="width: 60%; height: 100%;">
        <SfPdfViewer2 @ref="SfPdfViewer2"
        DocumentPath="wwwroot/Invoice.pdf"
        Height="100%"
        Width="100%">
            <PdfViewerEvents OnPageClick="OnPageClick"></PdfViewerEvents>
        </SfPdfViewer2>
    </div>
</div>

@inject IJSRuntime JS

@code {
    private SfPdfViewer2 SfPdfViewer2;

    private async void OnPageClick(PageClickEventArgs args)
    {
        Point pagePoint = new Point { x = args.PageX, y = args.PageY };
        Point clientPoint = await JS.InvokeAsync<Point>("convertPagePointToClientPoint", pagePoint);
        Console.WriteLine($"PagePoint to ClientPoint : X: {clientPoint.x} Y: {clientPoint.y} ");
    }
    public class Point
    {
        public double x { get; set; }
        public double y { get; set; }
    }
}

```
[View the coordinate conversion sample on GitHub](https://github.com/SyncfusionExamples/blazor-pdf-viewer-examples/tree/master/Common/Coordinate%20Conversion%20Between%20Page%20and%20Client%20Points)

## Converting client coordinates to page coordinates

- ConvertClientPointToPagePoint translates a point from the browser client (viewport) coordinate system to the document page coordinate system.

The following example shows how to convert client coordinates to page coordinates in a Blazor component.

**Step 1:** Add a JavaScript file to the app and reference it in the head element.

```cshtml

<head>
    <script src="index.js" type="text/javascript"></script>
</head>

```

**Step 2:** Add the following code to the JavaScript file.

```javascript

window.convertClientPointToPagePoint = function (clientPoint) {
    const pagediv = document.getElementsByClassName('e-pv-page-div')[0];
    const rect = pagediv.getBoundingClientRect();
    return {
        x: clientPoint.x - rect.left,
        y: clientPoint.y - rect.top
    };
};

```

**Step 3:** Add the following code to the Blazor component.

```cshtml

<div style="display: flex; height: 100vh; width: 100vw;">
    <div style="width: 40%; height: 100%;">
    </div>
    <div @onmousedown="HandleMouseDown" style="width: 60%; height: 100%;">
        <SfPdfViewer2 @ref="SfPdfViewer2"
        DocumentPath="wwwroot/Invoice.pdf"
        Height="100%"
        Width="100%">
        </SfPdfViewer2>
    </div>
</div>

@inject IJSRuntime JS

@code {
    private SfPdfViewer2 SfPdfViewer2;
    private int currentClientX;
    private int currentClientY;

    private async void HandleMouseDown(MouseEventArgs e)
    {
        currentClientX = (int)e.ClientX;
        currentClientY = (int)e.ClientY;
        Point clientPoint = new Point { x = currentClientX, y = currentClientY };
        Point pagePoint = await JS.InvokeAsync<Point>("convertClientPointToPagePoint", clientPoint);
        Console.WriteLine($"ClientPoint to PagePoint : X: {pagePoint.x} Y: {pagePoint.y} ");
    }
    public class Point
    {
        public double x { get; set; }
        public double y { get; set; }
    }
}
```
[View the coordinate conversion sample on GitHub](https://github.com/SyncfusionExamples/blazor-pdf-viewer-examples/tree/master/Common/Coordinate%20Conversion%20Between%20Page%20and%20Client%20Points)
