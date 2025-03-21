---
title: Memory Limitations in Syncfusion Compression | Syncfusion
description: This page explains why out of memory exception is thrown when handling the large documents.
platform: document-processing
control: XlsIO
documentation: UG
---

# Why out of memory exception is thrown when handling large documents which is having size more than 2GB?

Syncfusion.Compression uses MemoryStream object to handle the file data which can support upto 2GB memory. When the file size is exceeded this size limit, exception is thrown.

So This is a limitation of Syncfusion Compression library.
