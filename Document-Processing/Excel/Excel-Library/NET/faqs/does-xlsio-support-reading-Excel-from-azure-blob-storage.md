---
title: Azure Stream Reading in .NET Excel Library | Syncfusion
description: Azure Blob Storage access explains whether Syncfusion XlsIO can read Excel files directly from Azure Blob Storage streams.
platform: document-processing 
control: XlsIO 
documentation: UG
---

# Excel Files from Azure Blob Storage in .NET Excel Library

No, Syncfusion XlsIO does not support reading Excel files directly from Azure Blob Storage streams due to stream compatibility limitations. Excel files (.xlsx) are internally ZIP packages, and XlsIO requires a seekable stream to parse and decompress their structure. Streams provided by Azure Blob Storage are typically non-seekable and optimized for forward only access, which is not suitable for ZIP based formats like Excel.

The recommended approach is to first download the blob content into a MemoryStream. This ensures the stream is seekable and compatible with XlsIO for parsing and decompression. In general, when working with blob content that needs to be parsed or decompressed such as Excel or ZIP files, loading into a memory buffer is the correct approach.
 
For implementation details, please refer to <a href="https://help.syncfusion.com/document-processing/excel/excel-library/net/loading-and-saving/loading-and-saving-excel-files-in-azure-cloud-storage">Loading and saving Excel document in Azure Cloud Storage</a>.
