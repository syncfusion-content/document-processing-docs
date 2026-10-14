---
title: Converting Images to PDF in .NET PDF Library | Syncfusion
description: Does the Syncfusion PDF Library support converting HEIC, HEIF, or HEVC image formats directly to PDF.
platform: document-processing
control: PDF
documentation: UG
---

# Converting Images to PDF in .NET PDF Library

## Does the Syncfusion PDF Library support converting HEIC, HEIF, or HEVC images directly to PDF?

No. The Syncfusion PDF Library does not currently support converting HEIC, HEIF, or HEVC-formatted images directly to PDF.

The library supports commonly used raster image formats such as BMP, JPEG, GIF, PNG, TIFF, and ICO. HEIC, HEIF, and HEVC formats are not currently supported.

As a workaround, you can first convert the HEIC/HEIF image to a supported format such as JPEG or PNG using a third-party image-processing library. You can then load the converted image using PdfBitmap and add it to the PDF document with the Syncfusion PDF Library.

Please note that HEVC is primarily a video compression format, so its content must also be decoded or converted to a supported image format before it can be added to a PDF.
