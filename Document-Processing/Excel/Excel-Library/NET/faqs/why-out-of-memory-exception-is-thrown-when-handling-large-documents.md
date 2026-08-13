---
title: Memory Limitations in Syncfusion Compression | Syncfusion
description: Large Excel document processing explains why out-of-memory exceptions occur when handling large documents in XlsIO.
platform: document-processing
control: XlsIO
documentation: UG
---

# Out of Memory Exceptions in .NET Excel Library

Syncfusion.Compression uses MemoryStream object to handle the file data which can support upto 2GB memory. When the file size is exceeded this size limit, exception is thrown.

So This is a limitation of Syncfusion Compression library.
