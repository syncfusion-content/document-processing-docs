---
title: PCL XL Settings and Enums in .NET PDF Library | Syncfusion
description: Learn about the PclSettings properties and the enums used to configure a PCL XL export in the Syncfusion .NET PDF Library.
platform: document-processing
control: PDF
documentation: UG
keywords: PclSettings, SaveFormat, PCL XL, PclPaperSize, PclOrientation, PclInputTray
---

# PCL XL Settings and Enums in .NET PDF Library

This page lists the complete set of options that control a PCL XL export in Essential<sup>&reg;</sup> PDF. Every option is exposed through the [PclSettings](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Exporting.PclSettings.html) class, which is passed to the `SaveAsPcl` overloads of the [PdfDocumentBase](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfDocumentBase.html) class.

## SaveAsPcl overloads

The following table lists the members that perform the conversion.

| Signature | Description |
|:---|:---|
| `SaveAsPcl(string filePath, SaveFormat format)` | Converts the document to the requested PCL format with the default settings and writes it to the file system. A file name without an extension receives the extension of the selected format. An existing file is overwritten. |
| `SaveAsPcl(string filePath, SaveFormat format, PclSettings settings)` | Converts the document to the requested PCL format with the given settings and writes it to the file system. A `null` value uses the default settings. |
| `SaveAsPcl(Stream stream, SaveFormat format)` | Converts the document to the requested PCL format with the default settings and writes it to the stream from its current position. The stream is not closed. |
| `SaveAsPcl(Stream stream, SaveFormat format, PclSettings settings)` | Converts the document to the requested PCL format with the given settings and writes it to the stream from its current position. The stream is not closed. A `null` value uses the default settings. |

N> The `SaveAsPcl` method never produces PDF output. The produced job always begins with the PCL XL stream header `) HP-PCL XL;2;1;Comment Syncfusion PDF` and never contains the PDF signature `%PDF-`.

## SaveFormat

The [SaveFormat](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.SaveFormat.html) enumeration selects the output format of the PCL export.

| Member | Value | Description |
|:---|:---|:---|
| `PclXL` | `0` | Saves the document as a PCL XL (PCL 6) job that uses the fixed class 2.1 stream header. A file path without an extension receives the `.pxl` extension. |

N> Passing any other value to the `format` argument throws a `PdfPclNotSupportedException` that names the requested value and the allowed values.

## PclSettings

The [PclSettings](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Exporting.PclSettings.html) class holds the options of a PCL XL export. A newly created instance carries the default values listed in the following table.

| Property | Type | Default | Description |
|:---|:---|:---|:---|
| `Resolution` | `PclResolutionDpiValue` | `Dpi300` | The device resolution of the produced job. |
| `PaperSize` | `PclPaperSize` | `Auto` | The paper medium of the output pages. |
| `Orientation` | `PclOrientation` | `Auto` | The orientation of the output pages. |
| `InputTray` | `PclInputTray` | `Auto` | The source paper tray. |
| `ScalingMode` | `PclScalingMode` | `None` | Determines how the page content is fitted to the medium. |
| `JobName` | `string` | `"PDF"` | The name of the print job. |
| `Copies` | `int` | `1` | The number of copies of the job to print. The valid range is `1` to `999`. |

N> The default values are stable across library versions. Two freshly created `PclSettings` instances always report the same values.

## PclResolutionDpiValue

The [PclResolutionDpiValue](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PclResolutionDpiValue.html) enumeration lists the device resolutions that the conversion accepts. The selected value is written into the PJL header as `@PJL SET RESOLUTION=` and is honoured by every PCL XL operator that accepts a measurement.

| Member | Value | Description |
|:---|:---|:---|
| `Dpi300` | `300` | The default resolution. |
| `Dpi600` | `600` | Prints the job at 600 DPI. |
| `Dpi1200` | `1200` | Prints the job at 1200 DPI. |

## PclPaperSize

The [PclPaperSize](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PclPaperSize.html) enumeration lists the standard media that the conversion can request on the `BeginPage` operator.

| Member | Value | Emitted PCL XL medium | Description |
|:---|:---|:---|:---|
| `Auto` | `0` | The nearest standard medium | The default. The medium is derived from the PDF page box. |
| `Letter` | `1` | `LetterPaper` | 8.5 × 11 inches. |
| `Legal` | `2` | `LegalPaper` | 8.5 × 14 inches. |
| `Ledger` | `3` | `LedgerPaper` | 11 × 17 inches. |
| `A3` | `4` | `A3Paper` | 297 × 420 mm. |
| `A4` | `5` | `A4Paper` | 210 × 297 mm. |
| `A5` | `6` | `A5Paper` | 148 × 210 mm. |
| `Executive` | `7` | `ExecPaper` | 7.25 × 10.5 inches. |

## PclOrientation

The [PclOrientation](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PclOrientation.html) enumeration lists the orientations that the conversion can request on the `BeginPage` operator.

| Member | Value | Description |
|:---|:---|:---|
| `Auto` | `0` | The default. The `/Rotate` entry of the page is honoured, and a page that is wider than it is tall is printed in landscape. |
| `Portrait` | `1` | Every page is printed in portrait, and the `/Rotate` entry is ignored. |
| `Landscape` | `2` | Every page is printed in landscape, and the `/Rotate` entry is ignored. |

## PclInputTray

The [PclInputTray](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PclInputTray.html) enumeration lists the source trays that the conversion can request through the `MediaSource` attribute of the `BeginPage` operator.

| Member | Value | Emitted PCL XL media source | Description |
|:---|:---|:---|:---|
| `Auto` | `0` | The attribute is omitted | The default. The printer selects the default tray. |
| `Manual` | `1` | `ManualFeed` | The manual feed tray. |
| `MultiPurpose` | `2` | `MultiPurposeTray` | The multi-purpose tray. |
| `UpperCassette` | `3` | `UpperCassette` | The upper cassette. |
| `LowerCassette` | `4` | `LowerCassette` | The lower cassette. |
| `Envelope` | `5` | `EnvelopeFeeder` | The envelope feeder. |

## PclScalingMode

The [PclScalingMode](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PclScalingMode.html) enumeration lists the ways in which the page content can be fitted to the selected medium.

| Member | Value | Description |
|:---|:---|:---|
| `None` | `0` | The default. The content is emitted at its original size. |
| `Fit` | `1` | The content is scaled down until it fits completely on the medium. |
| `Fill` | `2` | The content is scaled up until it fills the medium. |
| `Stretch` | `3` | The content is scaled independently along each axis so that it fills the medium. |

## Exception hierarchy

The PCL XL conversion uses the following exception types.

```
PdfException
└── PdfPclException
    └── PdfPclNotSupportedException
```

| Exception | Raised when |
|:---|:---|
| [PdfPclException](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfPclException.html) | The conversion of the document failed. |
| [PdfPclNotSupportedException](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfPclNotSupportedException.html) | The requested format or the option combination cannot be emitted as PCL XL. |

## Behaviour guarantees

The following guarantees hold for every PCL XL export.

| Guarantee | Description |
|:---|:---|
| Determinism | Two conversions of the same document with the same options and the same library version produce byte-identical output, regardless of the process, the locale, or the wall-clock time. |
| Working-copy isolation | The document passed by the caller is never modified. When the document is not a `PdfLoadedDocument`, the conversion runs on a temporary copy that is disposed before the method returns. |
| Stream ownership | The library never closes a stream that the caller passed to the `SaveAsPcl` method. |
| Atomic file output | When the conversion fails, the partially written file is deleted from the disk before the exception is propagated. |
| Offline operation | The conversion never opens a socket or a DNS query. Fonts come only from the PDF, the local operating system, or the built-in substitution map. |

## Limitations

The following behaviours are intentional in the current version.

* The PCL XL protocol class is fixed at `2;1` in the stream header. Class 3.0 operators are never emitted, and the class is not selectable.
* The PJL envelope is always written. A bare PCL XL stream without the PJL wrapper is not produced.
* Type 1 and CFF fonts are always emitted through a resident printer font, because PCL XL cannot download those font formats.
* Only the primary file extension is appended. Compound extensions are not stripped before the rule is applied.
* The custom media selection, the output binary, and the trace log are library-internal options and are not exposed on the `PclSettings` class.

## See also

* [Convert PDF to PCL XL](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/converting-pdf-to-pcl-xl)
* [PDF to Image conversion](https://help.syncfusion.com/document-processing/pdf/conversions/pdf-to-image/overview)
