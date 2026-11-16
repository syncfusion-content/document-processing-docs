---
layout: post
title: Using Client-Side in React Spreadsheet | Syncfusion
description: Learn how to export workbook files directly in the browser using the Syncfusion React Spreadsheet without configuring a Save service.
platform: document-processing
control: Spreadsheet
documentation: ug
---

# Using client-side in React Spreadsheet

Client-side processing enables the Spreadsheet component to generate workbook files directly within the browser without requiring server communication. When `allowSave` is enabled and `saveUrl` is not configured, the Spreadsheet leverages its integrated client-side file-generation functionality powered by the `@syncfusion/ej2-xlsx` library.

This approach provides a seamless user experience by eliminating network latency and ensuring data privacy since files are generated and downloaded directly from the client device.

## Advantages of client-side processing

Client-side processing offers several key benefits over server-side processing:

* **Enhanced Privacy**: Files are generated and downloaded directly within the browser, ensuring sensitive data never traverses the network
* **Improved Performance**: Eliminates server round-trips, resulting in faster file generation operations
* **Reduced Infrastructure Costs**: No requirement for server-side processing endpoints or resources
* **Offline Capabilities**: Generate files even when network connectivity is limited or unavailable
* **Simplified Architecture**: Fewer moving parts in your application architecture

## How client-side processing works

When a save operation is initiated, the Spreadsheet component serializes its content into a structured JSON format representing the workbook data, formatting, formulas, and other spreadsheet elements. This JSON data is then processed by the `@syncfusion/ej2-xlsx` library, which generates a properly formatted Excel file. The generated file is then automatically downloaded to the user's device without any server involvement.

The entire processing pipeline occurs within the browser context, utilizing the client's computational resources rather than relying on server infrastructure.

## Configure client-side processing

Unlike server-side processing where `saveUrl` is mandatory for file operations, client-side processing operates independently without requiring server-side requests. This architecture enables fully self-contained file generation directly within the browser environment.

To enable client-side processing, ensure that `saveUrl` is not configured in your Spreadsheet settings. The component will automatically utilize client-side processing for all file operations when `allowSave` is enabled and `saveUrl` is omitted.

## Supported formats

Client-side processing currently supports:
* Microsoft Excel Workbook (.xlsx)
* Portable Document Format (.pdf)

## Pure client-side processing

Pure client-side processing means that all file operations occur exclusively within the browser environment without any server involvement. This approach maximizes data privacy and minimizes processing latency by leveraging the client's local resources for file generation and rendering.

## Considerations

1. **Format Limitation**: Client-side processing currently supports XLSX and PDF formats only
2. **Browser Resource Utilization**: Processing intensive operations utilize client-side computational resources

## See also

* [Using Server-Side](./using-server-side)
* [Save to AWS S3](./to-aws-s3-bucket)
* [Save to Azure Blob Storage](./to-azure-blob-storage)
* [Save to Google Cloud Storage](./to-google-cloud-storage)
* [Save to Google Drive](./to-google-drive)