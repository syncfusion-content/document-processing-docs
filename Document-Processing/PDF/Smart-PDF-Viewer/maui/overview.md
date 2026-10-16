---
layout: post
title: About Syncfusion .NET MAUI Smart PDF Viewer Component | Syncfusion
description: Learn about the AI-powered Syncfusion .NET MAUI Smart PDF Viewer, including document summarization with Q&A, smart redaction, and smart fill.
platform: document-processing
control: SfSmartPdfViewer
documentation: ug
keywords: .net maui smart pdf viewer, maui smart pdf viewer, ai pdf viewer maui, smart redaction maui, smart fill maui, document summarizer maui
appliesto: PDF Viewer SDK
---

# About Syncfusion .NET MAUI Smart PDF Viewer Component

The **[.NET MAUI Smart PDF Viewer](https://www.syncfusion.com/maui-controls/maui-pdf-viewer)** is an AI-powered component in Syncfusion's .NET MAUI suite. Built on top of the [SfPdfViewer](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/maui/overview) control, it enhances document interaction with built-in AI capabilities while retaining all the core PDF viewing features — magnification, page navigation, annotations, form filling, text search, and more — on Android, iOS, macOS, and Windows from a single code base. To get started, see [Getting Started](./getting-started).

Key capabilities include [**Document Summarization with Q&A**](#document-summarization), [**Smart Redaction**](#smart-redaction), and [**Smart Fill**](#smart-fill). These features enable efficient and secure document workflows.

## Document Summarization

* Analyzes PDF content and produces concise summaries using AI.
* Supports natural-language Q&A with user-entered and AI-suggested questions.
* Accelerates understanding without reading the entire document.
* Applicable to legal contracts, research papers, business reports, and other lengthy documents.

## Smart Redaction

* Detects and removes sensitive or confidential information.
* Identifies patterns such as personal identifiers and financial data.
* Ensures consistent redaction across documents.
* Supports privacy and compliance requirements while reducing manual effort.

## Smart Fill

* Intelligently populates form fields based on context.
* Understands the structure and expected input of PDF forms.
* Reduces manual data entry and improves accuracy.

## Core PDF Viewing Features

Because the Smart PDF Viewer inherits from the .NET MAUI [SfPdfViewer](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/maui/overview), it also includes the complete set of core viewing features:

* **Open documents** from streams, local storage, URLs, Base64 strings, or password-protected files.
* **Annotations**: Add, edit, import, and export highlights, shapes, ink, stamps, sticky notes, free text, and more.
* **Form filling**: Fill, edit, import, and export PDF form fields including text boxes, checkboxes, and signatures.
* **Text search and selection**: Search for text and navigate all occurrences in a document.
* **Save documents**: Save modified documents to a file stream, with optional annotation flattening.
* **Built-in toolbars and page navigation**: Include bookmarks, thumbnails, and customizable toolbar items.
* **Redaction and electronic signatures**: Permanently remove sensitive content, and add handwritten, typed, or image-based signatures.

For more details on these core features, refer to the [.NET MAUI PDF Viewer documentation](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/maui/overview).

## Benefits

* **Efficiency**: Automates time-consuming tasks.
* **Accuracy**: Minimizes human error.
* **Scalability**: Suitable for enterprise-level document management.
* **Cross-platform**: Works on Android, iOS, macOS, and Windows from a single code base.
* **Security**: Enhances privacy protection.

## In this section

| Topic | Description |
|---|---|
| [Getting Started](./getting-started) | Install the package, register the handler, configure the AI service, and load your first PDF document. |
| [Document Summarizer](./document-summarizer) | Generate document summaries and ask AI-assisted questions with the Assist View. |
| [Smart Redaction](./smart-redaction) | Detect and redact sensitive information using AI-assisted pattern detection. |
| [Smart Fill](./smart-fill) | Automatically populate PDF form fields from clipboard or specified data. |
| [Localization](./localization) | Localize the static text of the Smart PDF Viewer to other languages. |

## Integration

* Powered by AI services such as [Syncfusion.Maui.SmartComponents](https://www.nuget.org/packages/Syncfusion.Maui.SmartComponents), Microsoft.Extensions.AI, [Azure OpenAI](https://learn.microsoft.com/en-us/azure/ai-foundry/openai/how-to/create-resource?pivots=web-portal), OpenAI, and Ollama.
* Features are optional and can be enabled independently as needed.
* Chat clients are registered once in `MauiProgram.cs` using `Microsoft.Extensions.AI`, and the Smart PDF Viewer resolves them through dependency injection.

## See also

* [Getting Started with .NET MAUI Smart PDF Viewer](./getting-started)
* [Document Summaries in .NET MAUI Smart PDF Viewer](./document-summarizer)
* [Smart Redaction in .NET MAUI Smart PDF Viewer](./smart-redaction)
* [Smart Fill in .NET MAUI Smart PDF Viewer](./smart-fill)
* [Localization in .NET MAUI Smart PDF Viewer](./localization)
* [.NET MAUI PDF Viewer Overview](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/maui/overview)
* [Configure Chat Client with AI-Powered Components](https://help.syncfusion.com/maui/common/configure-ai-service)
* [Custom AI Service](https://help.syncfusion.com/maui/common/custom-ai-service)