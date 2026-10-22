---
title: Does Syncfusion require LGPL compliance from SkiaSharp? | Syncfusion
description: This page explains whether Syncfusion packages require LGPL compliance due to the SkiaSharp dependency on libmicrohttpd.
platform: document-processing
documentation: UG
---

# Does Syncfusion require LGPL compliance from SkiaSharp dependencies?

No. Latest versions of Syncfusion packages do not include the **libmicrohttpd** dependency through **SkiaSharp**.

The **SkiaSharp** team removed the **libmicrohttpd** dependency beginning with **SkiaSharp v3.119.3-preview.1.1**. As a result, newer SkiaSharp releases no longer include or rely on this LGPL-licensed library.

Current Syncfusion packages, including:

- [DocIORenderer](https://www.nuget.org/packages/Syncfusion.DocIORenderer.Net.Core)
- [PresentationRenderer](https://www.nuget.org/packages/Syncfusion.PresentationRenderer.Net.Core)
- [XlsIORenderer](https://www.nuget.org/packages/Syncfusion.XlsIORenderer.Net.Core)

use the latest version of **SkiaSharp**, which does not contain the **libmicrohttpd** dependency.

Customers can verify the current dependency information from the official SkiaSharp documentation:

1. SkiaSharp dependency information: [https://github.com/mono/SkiaSharp/blob/main/documentation/dev/dependencies.md](https://github.com/mono/SkiaSharp/blob/main/documentation/dev/dependencies.md)
2. Dependency removal pull request: [https://github.com/mono/SkiaSharp/pull/3463](https://github.com/mono/SkiaSharp/pull/3463)

Although **libmicrohttpd** is still referenced in the following file:

- [https://github.com/mono/SkiaSharp/blob/main/External-Dependency-Info.txt#L1475](External-Dependency-Info.txt)

The SkiaSharp maintainers have confirmed that this is an outdated reference and not an active runtime dependency. Syncfusion reported this discrepancy through the GitHub issues:

- [https://github.com/mono/SkiaSharp/issues/3511](3511)
- [https://github.com/mono/SkiaSharp/issues/5401](5401)

Therefore, customers using the latest versions of these Syncfusion packages are **not subject to LGPL obligations arising from libmicrohttpd**, and there is **no requirement to disclose application source code** based on this removed dependency.
