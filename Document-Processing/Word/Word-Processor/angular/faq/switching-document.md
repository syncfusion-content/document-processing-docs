---
layout: post
title: Switching document in Document Editor Component | Syncfusion
description: Learn here all about Switching document in Syncfusion Angular Document Editor component of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Switching document
documentation: ug
domainurl: ##DomainURL##
---

# Why does the Document Editor show errors when switching between documents?

This typically occurs when the previous editor instance isn’t fully disposed before loading a new document. These issues result from residual elements—such as active event listeners, layout data, or pending asynchronous operations—that conflict with the new load, leading to script errors, a frozen UI, or incomplete rendering.