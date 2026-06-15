---
title: Perform OCR on PDF features | Syncfusion
description: Learn how to perform OCR on scanned PDF documents and images with different tesseract versions using Syncfusion .NET OCR library.  
platform: document-processing
control: PDF
documentation: UG
keywords: Assemblies 
---

# Overview of Optical Character Recognition (OCR)

Optical character recognition (OCR) is a technology used to convert scanned paper documents in the form of PDF files or images into searchable and editable data.  

The [Syncfusion<sup>&reg;</sup> OCR processor library](https://www.syncfusion.com/document-processing/pdf-framework/net/pdf-library/ocr-process) has extended support to process OCR on scanned PDF documents and images with the help of Google’s [Tesseract](https://github.com/tesseract-ocr/tesseract) Optical Character Recognition engine.

An inbuilt `image preprocessor` has been added to the OCR to prepare images for optimal recognition. This step ensures cleaner input and reduces OCR errors. The preprocessor supports the following enhancements:

* **Convert to Grayscale** – Simplifies image data by removing color information, making text easier to detect.
* **Deskew** – Corrects tilted or rotated text for proper alignment.
* **Denoise** – Removes speckles and artifacts that can interfere with character recognition.
* **Apply Contrast Adjustment** – Enhances text visibility against the background.
* **Apply Binarize** – Converts images to black-and-white for sharper text edges, using advanced thresholding methods

The Syncfusion<sup>&reg;</sup> OCR processor library works seamlessly in various platforms: Azure App Services, Azure Functions, AWS Textract, Docker, WinForms, WPF, Blazor, ASP.NET MVC, ASP.NET Core with Windows, MacOS and Linux. 

N> Starting with v20.1.0.x, if you reference Syncfusion<sup>&reg;</sup> OCR processor assemblies from the trial setup or the NuGet feed, you also have to include a license key in your projects. Please refer to this [link](https://help.syncfusion.com/common/essential-studio/licensing/overview) to learn more about registering the Syncfusion<sup>&reg;</sup> license key in your application to use its components.

## Key features 

* Create a searchable PDF from scanned PDF.
* Zonal text extraction from the scanned PDF.
* Preserve Unicode characters.
* Extract text from the image.
* Create a searchable PDF from large scanned PDF documents. 
* Create a searchable PDF from rotated scanned PDF.
* Get OCRed text and its bounds from a scanned PDF document. 
* Native call.
* Customizing the temp folder.
* Performing OCR with different Page Segmentation Mode.
* Performing OCR with different OCR Engine Mode.
* White List.
* Black List.
* Image into searchable PDF or PDF/A.
* Improved accessibility.
* Post-processing.
* Compatible with .NET Framework 4.5 and above.
* Compatible with .NET Core 2.0 and above.
