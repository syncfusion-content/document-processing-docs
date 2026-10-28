---
title: Does Syncfusion require LGPL compliance from SkiaSharp? | Syncfusion
description: This page explains whether Syncfusion packages require LGPL compliance due to the SkiaSharp dependency on libmicrohttpd.
platform: document-processing
documentation: UG
---

# Does Syncfusion require LGPL compliance from SkiaSharp dependencies?

No. Latest versions of Syncfusion packages do not include the **libmicrohttpd** dependency through **SkiaSharp**.

The **SkiaSharp** team removed the **libmicrohttpd** dependency beginning with **SkiaSharp v3.119.3-preview.1.1**. As a result, newer SkiaSharp releases no longer include or rely on this LGPL-licensed library. Current Syncfusion packages, including [DocIORenderer](https://www.nuget.org/packages/Syncfusion.DocIORenderer.Net.Core), [PresentationRenderer](https://www.nuget.org/packages/Syncfusion.PresentationRenderer.Net.Core), [XlsIORenderer](https://www.nuget.org/packages/Syncfusion.XlsIORenderer.Net.Core) use the latest version of **SkiaSharp**, which does not contain the **libmicrohttpd** dependency.

Customers can verify the current dependency information from the official SkiaSharp documentation:

* SkiaSharp dependency information: [https://github.com/mono/SkiaSharp/blob/main/documentation/dev/dependencies.md](https://github.com/mono/SkiaSharp/blob/main/documentation/dev/dependencies.md)
* Dependency removal pull request: [#3463](https://github.com/mono/SkiaSharp/pull/3463), [#5403](https://github.com/mono/SkiaSharp/pull/5403)

Therefore, customers using the latest versions of these Syncfusion packages are **not subject to LGPL obligations arising from libmicrohttpd**, and there is **no requirement to disclose application source code** based on this removed dependency.
