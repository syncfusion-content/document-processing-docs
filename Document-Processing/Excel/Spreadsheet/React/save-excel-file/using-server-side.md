---
layout: post
title: Using Server-Side in React Spreadsheet | Syncfusion
description: Learn about saving Excel files using server-side processing in the Syncfusion React Spreadsheet component with saveUrl configuration.
platform: document-processing
control: Spreadsheet
documentation: ug
---

# Using server-side in React Spreadsheet

Server-side processing enables the Spreadsheet component to delegate file generation to a server endpoint when `saveUrl` is configured. This approach sends workbook data to a server for processing, leveraging server resources for handling complex file operations and supporting additional file formats.

Server-side processing is particularly beneficial for enterprise environments where centralized processing, advanced format support, and resource management are priorities.

## Advantages of server-side processing

Server-side processing offers several key benefits over client-side processing:

* **Extended Format Support**: Generate additional file formats beyond XLSX through server-side libraries
* **Resource Management**: Offload intensive processing operations to server infrastructure rather than client devices
* **Centralized Control**: Maintain consistent processing behavior across all client environments
* **Advanced Feature Support**: Access to enterprise-grade processing capabilities and extended feature sets
* **Scalability**: Handle large file processing operations through scalable server resources

## How server-side processing works

When `saveUrl` is configured, the Spreadsheet component serializes its content into a structured JSON format representing the workbook data, formatting, formulas, and other spreadsheet elements. This JSON data is then sent to the specified server endpoint for processing.

The server utilizes Syncfusion's powerful XlsIO library to convert the JSON data into properly formatted Excel files. These generated files are then transmitted back to the client browser where they are automatically downloaded. The server-side processing pipeline ensures consistent handling of complex file structures and provides access to advanced features that may not be available in client-side processing.

## Configure server-side processing

To enable server-side processing, specify the service URL using the `saveUrl` property in your Spreadsheet configuration. When `saveUrl` is provided, the Spreadsheet automatically delegates all file processing operations to the configured server endpoint.

## Supported formats

Server-side processing supports multiple file formats:
* Microsoft Excel Workbook (.xlsx)
* Microsoft Excel 97–2003 Workbook (.xls)
* Comma-Separated Values (.csv)
* Excel Macro-Enabled Workbook (.xlsm)
* Excel Binary Workbook (.xlsb)
* Portable Document Format (.pdf)

## Pure server-side processing

Pure server-side processing means that all file operations are exclusively handled by server infrastructure, with the client browser serving only as a presentation layer. This approach maximizes server resource utilization and ensures consistent processing behavior across all client environments.

## See also

* [Using Client-Side](./using-client-side)
* [Save to AWS S3](./to-aws-s3-bucket)
* [Save to Azure Blob Storage](./to-azure-blob-storage)
* [Save to Google Cloud Storage](./to-google-cloud-storage)
* [Save to Google Drive](./to-google-drive)