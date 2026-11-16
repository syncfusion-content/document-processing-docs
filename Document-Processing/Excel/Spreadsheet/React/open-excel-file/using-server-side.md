---
layout: post
title: Using Server-Side in React Spreadsheet | Syncfusion
description: Learn about importing Excel files using server-side processing in the Syncfusion React Spreadsheet component with openUrl configuration.
platform: document-processing
control: Spreadsheet
documentation: ug
---

# Using server-side in React Spreadsheet

Server-side processing enables the Spreadsheet component to delegate file processing to a server endpoint when `openUrl` is configured. This approach sends file data to a server for processing, leveraging server resources for handling complex file operations and supporting additional file formats.

Server-side processing is particularly beneficial for enterprise environments where centralized processing, advanced format support, and resource management are priorities.

## Advantages of server-side processing

Server-side processing offers several key benefits over client-side processing:

* **Extended Format Support**: Process additional file formats beyond XLSX through server-side libraries
* **Resource Management**: Offload intensive processing operations to server infrastructure rather than client devices
* **Centralized Control**: Maintain consistent processing behavior across all client environments
* **Advanced Feature Support**: Access to enterprise-grade processing capabilities and extended feature sets
* **Scalability**: Handle large file processing operations through scalable server resources

## How server-side processing works

When `openUrl` is configured, the Spreadsheet component sends file data to the specified server endpoint for processing. The server utilizes Syncfusion's powerful XlsIO library to parse and process the file content, converting it into a structured JSON format that represents the workbook data, formatting, formulas, and other spreadsheet elements.

This JSON representation is then transmitted back to the client browser where the Spreadsheet component renders the content. The server-side processing pipeline ensures consistent handling of complex file structures and provides access to advanced features that may not be available in client-side processing.

## Configure server-side processing

To enable server-side processing, specify the service URL using the `openUrl` property in your Spreadsheet configuration. When `openUrl` is provided, the Spreadsheet automatically delegates all file processing operations to the configured server endpoint.

## Supported formats

Server-side processing supports multiple file formats:
* Microsoft Excel Workbook (.xlsx)
* Microsoft Excel 97–2003 Workbook (.xls)
* Comma-Separated Values (.csv)
* Excel Macro-Enabled Workbook (.xlsm)
* Excel Binary Workbook (.xlsb)

## Pure server-side processing

Pure server-side processing means that all file operations are exclusively handled by server infrastructure, with the client browser serving only as a presentation layer. This approach maximizes server resource utilization and ensures consistent processing behavior across all client environments.

## See also

* [Using Client-Side](./using-client-side)
* [From AWS S3](./from-aws-s3-bucket)
* [From Azure Blob Storage](./from-azure-blob-storage)
* [From Google Cloud Storage](./from-google-cloud-storage)
* [From Google Drive](./from-google-drive)