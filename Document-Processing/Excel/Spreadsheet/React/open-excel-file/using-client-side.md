---
layout: post
title: Using Client-Side in React Spreadsheet | Syncfusion
description: Learn how to process workbook files directly in the browser using the Syncfusion React Spreadsheet without configuring an Open service.
platform: document-processing
control: Spreadsheet
documentation: ug
---

# Using client-side in React Spreadsheet

Client-side processing enables the Spreadsheet component to process workbook files directly within the browser without requiring server communication. When `allowOpen` is enabled and `openUrl` is not configured, the Spreadsheet leverages its integrated client-side file-processing functionality powered by the `@syncfusion/ej2-xlsx` library.

This approach provides a seamless user experience by eliminating network latency and ensuring data privacy since files never leave the client device during processing.

## Advantages of client-side processing

Client-side processing offers several key benefits over server-side processing:

* **Enhanced Privacy**: Files remain entirely within the browser, ensuring sensitive data never traverses the network
* **Improved Performance**: Eliminates server round-trips, resulting in faster file processing operations
* **Reduced Infrastructure Costs**: No requirement for server-side processing endpoints or resources
* **Offline Capabilities**: Process files even when network connectivity is limited or unavailable
* **Simplified Architecture**: Fewer moving parts in your application architecture

## How client-side processing works

When a file is selected for import, the Spreadsheet component fetches the file content and sends it to the `@syncfusion/ej2-xlsx` library for processing. This library reads the Office Open XML format and extracts all relevant information. Based on this extracted information, it generates a workbook-compatible JSON structure that the Spreadsheet component can understand and load. During this process, all Spreadsheet-supported features are retained and properly mapped to the client-side representation.

The entire processing pipeline occurs within the browser context, utilizing the client's computational resources rather than relying on server infrastructure.

## Configure client-side processing

Unlike server-side processing where `openUrl` is mandatory for file operations, client-side processing operates independently without requiring server-side requests. This architecture enables fully self-contained file processing directly within the browser environment.

To enable client-side processing, ensure that `openUrl` is not configured in your Spreadsheet settings. The component will automatically utilize client-side processing for all file operations when `allowOpen` is enabled and `openUrl` is omitted.

## Supported formats

Client-side processing currently supports:
* Microsoft Excel Workbook (.xlsx)

## Pure client-side processing

Pure client-side processing means that all file operations occur exclusively within the browser environment without any server involvement. This approach maximizes data privacy and minimizes processing latency by leveraging the client's local resources for file parsing and rendering.

## Considerations

1. **Format Limitation**: Client-side processing currently supports XLSX format only
2. **Browser Resource Utilization**: Processing intensive operations utilize client-side computational resources

## See also

* [Using Server-Side](./using-server-side)
* [From AWS S3](./from-aws-s3-bucket)
* [From Azure Blob Storage](./from-azure-blob-storage)
* [From Google Cloud Storage](./from-google-cloud-storage)
* [From Google Drive](./from-google-drive)