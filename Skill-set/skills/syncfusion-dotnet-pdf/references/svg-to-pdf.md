## SVG to PDF Conversion

Convert SVG (Scalable Vector Graphics) content to PDF using the Syncfusion .NET PDF Library.

*Note: For document save and close patterns, see [document-structure.md](document-structure.md).*

---

**NuGet package:**

`Syncfusion.Pdf.Net.Core` - (.NET Core / ASP.NET Core)

**Common namespaces:**

```csharp
using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
```

> Use `Syncfusion.Drawing` (not `System.Drawing`) for `SizeF`, `PointF`, and `RectangleF` to ensure cross-platform compatibility on Windows, macOS, and Linux.

---

## Convert an SVG file to PDF

```csharp
// Load the SVG file and convert it to a PdfTemplate
SvgConverter converter = new SvgConverter();
PdfTemplate svg = converter.Convert("Input.svg");

// Create a PDF document sized to match the SVG
using (PdfDocument document = new PdfDocument())
{
    document.PageSettings.Margins.All = 0;
    document.PageSettings.Size = new SizeF(svg.Width, svg.Height);

    // Draw the SVG template onto a new page
    PdfPage page = document.Pages.Add();
    page.Graphics.DrawPdfTemplate(svg, new PointF(0, 0), new SizeF(svg.Width, svg.Height));

    // Save the PDF to a file
    using (FileStream outputStream = new FileStream("Output.pdf", FileMode.Create, FileAccess.Write))
    {
        document.Save(outputStream);
    }
    document.Close(true);
}
```

## Convert an SVG stream to PDF

```csharp
using (FileStream svgStream = new FileStream("Input.svg", FileMode.Open, FileAccess.Read))
{
    SvgConverter converter = new SvgConverter();
    PdfTemplate svg = converter.Convert(svgStream);

    using (PdfDocument document = new PdfDocument())
    {
        document.PageSettings.Margins.All = 0;
        document.PageSettings.Size = new SizeF(svg.Width, svg.Height);

        PdfPage page = document.Pages.Add();
        page.Graphics.DrawPdfTemplate(svg, new PointF(0, 0), new SizeF(svg.Width, svg.Height));

        using (MemoryStream outputStream = new MemoryStream())
        {
            document.Save(outputStream);
            // Write outputStream.ToArray() to your destination of choice
        }
        document.Close(true);
    }
}
```

## Key APIs

| Member | Description |
| --- | --- |
| `SvgConverter` | Converts SVG content into a `PdfTemplate` |
| `SvgConverter.Convert(string)` | Loads an SVG file path and converts it to a `PdfTemplate` |
| `SvgConverter.Convert(Stream)` | Loads an SVG stream and converts it to a `PdfTemplate` |
| `PdfTemplate` | Represents the converted SVG content that can be drawn onto a PDF page |
| `PdfGraphics.DrawPdfTemplate()` | Draws the converted SVG template onto a PDF page |

---

## Notes

- The PDF page size can be configured to match the SVG dimensions for accurate rendering.
- Setting page margins to zero ensures the SVG content occupies the full page area.
- SVG content is converted to a `PdfTemplate` and then drawn onto the PDF page.
- The generated PDF can be further customized before saving (for example, add security, watermarks, or merge with other PDFs).
- Text in SVG is rendered using the fonts available to the converter. Complex SVG features (filters, foreign objects, scripts, advanced gradients) may not render exactly as in a browser.

### Related

- [document-structure.md](document-structure.md)
- [xps-to-pdf.md](xps-to-pdf.md)
- [conversions.md](conversions.md)
- [conformance.md](conformance.md)
- ../SKILL.md

## Official documentation

- <https://help.syncfusion.com/document-processing/pdf/pdf-library/net/working-with-document-conversions#svg-to-pdf>