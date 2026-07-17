---
layout: post
title: Create or Generate a PDF in ASP.NET Core | Syncfusion
description: Learn how to create or generate a PDF file in an ASP.NET Core application with easy steps using the JavaScript PDF Library without depending on Adobe.
platform: document-processing
control: PDF
documentation: ug
keywords: .net core create pdf, edit pdf, merge, pdf form, fill form, digital sign, table, javascript, dotnet core pdf, asp generate pdf, aspx generate pdf
canonical_url: https://help.syncfusion.com/document-processing/pdf/pdf-library/javascript/create-pdf-document-asp-net-core
---

# Create or Generate a PDF in ASP.NET Core

The [JavaScript PDF Library](https://www.syncfusion.com/document-sdk/javascript-pdf-library) is used to create, read, and edit PDF documents. The [JavaScript PDF Library](https://www.syncfusion.com/document-sdk/javascript-pdf-library) also offers functionality to merge, split, stamp, fill forms, and secure PDF files.

This guide explains how to integrate the [JavaScript PDF Library](https://www.syncfusion.com/document-sdk/javascript-pdf-library) into an ASP.NET Core application. The PDF is generated **client-side in the browser** using the Syncfusion JavaScript PDF Library loaded from a CDN; ASP.NET Core is used to host the page that triggers the download.

## Prerequisites

Before you begin, make sure you have the following installed:

- Visual Studio 2022 (any edition) with the **ASP.NET and web development** workload.
- .NET SDK 8.0 (LTS) or later.
- An active internet connection (the sample loads the JavaScript PDF Library from the Syncfusion CDN).
- A supported browser such as the latest versions of Microsoft Edge, Google Chrome, or Mozilla Firefox.

To verify your .NET SDK version, run:

```bash
dotnet --version
```

## Integrate the PDF Library into an ASP.NET Core application

Step 1: Start Visual Studio and select **Create a new project**.

Step 2: In the **Create a new project** dialog, select **ASP.NET Core Web App**.

![ASP.NET Core PDF creation1](Getting_started_images/Asp-net-core-creation1.png)

Step 3: In the **Configure your new project** dialog, enter the project name and select **Next**.

![ASP.NET Core PDF creation2](Getting_started_images/Asp-net-core-creation2.png)

Step 4: In the **Additional information** dialog, select a .NET LTS version (for example, **.NET 8.0 (Long-term support)**) and then select **Create**.

![ASP.NET Core PDF creation3](Getting_started_images/Asp-net-core-creation3.png)

Step 5: Add the script reference: open `~/Views/Shared/_Layout.cshtml` and add the Syncfusion CDN reference inside the `<head>` element. Also confirm that the layout contains `@await RenderSectionAsync("Scripts", required: false)` so the `@section Scripts` block in Step 6 can render.

{% tabs %}
{% highlight cshtml tabtitle="~/_Layout.cshtml" %}
<head>
    <!-- JavaScript PDF Library (CDN) -->
    <script src="https://cdn.syncfusion.com/ej2/31.2.15/dist/ej2.min.js"></script>
</head>
<body>
    @RenderBody()
    @await RenderSectionAsync("Scripts", required: false)
</body>
{% endhighlight %}
{% endtabs %}

N> Check out the following topics for including script references in an ASP.NET Core application to enable PDF creation using the [JavaScript PDF Library](https://www.syncfusion.com/document-sdk/javascript-pdf-library):
- [CDN](https://ej2.syncfusion.com/aspnetcore/documentation/common/adding-script-references#cdn-reference)
- [NPM Package](https://ej2.syncfusion.com/aspnetcore/documentation/common/adding-script-references#node-package-manager-npm)
- [CRG](https://ej2.syncfusion.com/aspnetcore/documentation/common/custom-resource-generator)

Step 6: Create a PDF document: open `~/Views/Home/Index.cshtml` and add a button plus a click handler that uses the [JavaScript PDF Library](https://www.syncfusion.com/document-sdk/javascript-pdf-library) to generate a PDF in the browser.

{% tabs %}
{% highlight cshtml tabtitle="~/Views/Home/Index.cshtml" %}
<div class="container py-4">
    <h1 class="h4 mb-3">Create PDF document</h1>
    <p class="text-muted">Click the button to generate and download a PDF.</p>
    <button id="btnCreatePdf" class="btn btn-primary">Generate PDF document</button>
</div>
@section Scripts {
    <script>
        document.getElementById('btnCreatePdf').addEventListener('click', function () {
            // Create a new PDF document
            let pdf = new ej.pdf.PdfDocument();
            // Add a new page
            let page = pdf.addPage();
            // Get graphics from the page
            let graphics = page.graphics;
            // Set font
            let font = pdf.embedFont(ej.pdf.PdfFontFamily.helvetica, 36, ej.pdf.PdfFontStyle.regular);
            // Create a new black brush
            let brush = new ej.pdf.PdfBrush({ r: 0, g: 0, b: 0 });
            // Draw text
            graphics.drawString('Hello World!!!', font, { x: 20, y: 20, width: graphics.clientSize.width - 20, height: 60 }, brush);
            // Save and download PDF (client-side)
            pdf.save('output.pdf');
            // Destroy the PDF document instance
            pdf.destroy();
        });
    </script>
}
{% endhighlight %}
{% endtabs %}

## Code Explanation

- `ej.pdf.PdfDocument` — creates a new PDF document instance.
- `addPage()` — appends a blank page to the document and returns the `PdfPage` object.
- `page.graphics` — returns the `PdfGraphics` drawing surface for the page.
- `embedFont(family, size, style)` — embeds one of the standard PDF font families (here, Helvetica 36pt regular) and returns a `PdfStandardFont` object.
- `new ej.pdf.PdfBrush({ r, g, b })` — creates a solid color brush from an RGB object (each channel `0`-`255`); here, black.
- `drawString(text, font, layoutRect, brush)` — draws the text inside the rectangle defined by `x`, `y`, `width`, and `height`.
- `graphics.clientSize.width` — the writable width of the page in points.
- `save('output.pdf')` — saves the PDF and **triggers a client-side browser download** with the specified file name. The file is sent to the browser's default downloads folder; nothing is written to the server.
- `destroy()` — releases native resources held by the document.

## Build and Run the Application

Step 7: Build the project: click **Build** > **Build Solution** or press **Ctrl + Shift + B** to build the project.

Step 8: Run the project: click the **Start** button (green arrow) or press **F5** to run the app. Visual Studio launches the app in your default browser.

After running the application, click **Generate PDF document**. The browser downloads `output.pdf`, which contains a single page with the text "Hello World!!!" drawn at the top-left.

![ASP.NET Core PDF output](Getting_started_images/Output.png)

## Additional Configuration

N> For image and data extraction features, install the `@syncfusion/ej2-pdf-data-extract` package as an add-on (NPM approach), then copy the `ej2-pdf-lib` folder from `node_modules/@syncfusion/ej2-pdf-data-extract/dist/ej2-pdf-lib` into a publicly accessible location under `wwwroot/` (for example, `wwwroot/lib/ej2-pdf-lib/`). The folder must contain the required `.js` and `.wasm` files. This setup is not required for **basic PDF creation** as shown in this guide.

## Troubleshooting

| Problem | Cause | Resolution |
|---|---|---|
| `ej is not defined` in the browser console | The CDN script tag is missing or blocked | Confirm the `<script>` reference in `_Layout.cshtml` is reachable and not blocked by an ad blocker or network policy |
| Button click does nothing | The click handler is rendered before the button exists, or `@section Scripts` is missing in the layout | Confirm `_Layout.cshtml` contains `@await RenderSectionAsync("Scripts", required: false)` |
| `SyntaxError: Unexpected token ':'` | TypeScript annotations were left inside a plain `<script>` block | Remove the `: ej.pdf.PdfType` annotations; the script must be plain JavaScript |
| `Failed to load resource: 404` on `ej2.min.js` | The CDN version path is incorrect or the network is restricted | Verify the CDN URL and internet access; switch to the [NPM](https://ej2.syncfusion.com/aspnetcore/documentation/common/adding-script-references#node-package-manager-npm) or [CRG](https://ej2.syncfusion.com/aspnetcore/documentation/common/custom-resource-generator) approach if the CDN is not reachable |
| `output.pdf` does not download | The browser blocks the download | Check the browser's download settings and the downloads folder |
| `WASM` or `.js` 404s for data extraction | The `ej2-pdf-lib` folder is not under `wwwroot/` | Copy the `ej2-pdf-lib` folder from the `@syncfusion/ej2-pdf-data-extract` package into `wwwroot/lib/` |
| CDN version mismatch with NuGet/npm packages | The CDN version is out of sync with the installed Syncfusion packages | Use the same Syncfusion version across CDN and NuGet/npm packages |

## See Also

- [JavaScript PDF Library](https://www.syncfusion.com/document-sdk/javascript-pdf-library)
- [JavaScript PDF Library documentation](https://help.syncfusion.com/document-processing/pdf/pdf-library/javascript/overview)
- [JavaScript PDF Library API reference](https://ej2.syncfusion.com/documentation/api/pdf)
- [JavaScript PDF Library examples](https://document.syncfusion.com/demos/javascriptpdf/default)
- [Syncfusion licensing documentation](https://help.syncfusion.com/document-processing/licensing/overview)