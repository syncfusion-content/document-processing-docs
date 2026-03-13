---
title: Font Manager for Document Processing Libraries
description: Learn how Syncfusion Document Processing libraries use FontManager to optimize memory and performance during Office to PDF/Image conversions and PDF processing workflows.
platform: document-processing
control: common
documentation: UG
---

# Font Manager for Document Processing Libraries

Syncfusion Document Processing libraries introduce the **FontManager** class to address excessive memory consumption and performance degradation caused by repeated font creation during document conversions.

The FontManager provides centralized font management shared across all threads and conversion libraries, eliminating duplicate font objects and significantly reducing memory overhead in multi-threaded web applications.

## Key features

- **Shared font caching:** Stores fonts in a unified cache to prevent repeated loading across operations.

- **Memory reduction:** Eliminates duplicate font objects, reducing memory usage during large-scale or parallel document conversions.

- **Performance optimization:** Enables multiple threads to safely reuse the same font instances, improving processing speed.

- **Automatic cleanup:** Automatically disposes unused fonts after a configurable delay (`FontManager.Delay`) to maintain efficiency in long-running applications.

- **Manual cache management:** Provides `FontManager.ClearCache()` to immediately clear all cached fonts when needed (e.g., during server shutdown).