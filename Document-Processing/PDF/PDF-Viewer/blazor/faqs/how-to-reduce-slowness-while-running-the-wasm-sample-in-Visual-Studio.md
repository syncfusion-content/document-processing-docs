---
layout: post
title: Reduce slowness when running WASM in Visual Studio | Syncfusion
description: Improve performance when running or debugging the Blazor WebAssembly (WASM) samples in Visual Studio.
platform: document-processing
control: SfPdfViewer
documentation: ug
---

# Reduce slowness when running Blazor WebAssembly in Visual Studio

You may experience slow performance when running or debugging Blazor WebAssembly apps in Visual Studio. This is caused by the **Enable .NET 9+ Mono WASM debugger** option, which can introduce overhead during debugging sessions.

## Solution

1. In Visual Studio, open **Tools > Options**.
2. Expand **Debugging** and select **General**.
3. Clear (uncheck) the **Enable .NET 9+ Mono WASM debugger** option.
4. Click **OK** to apply the change.
5. Restart your debugging session for the change to take effect.

![Visual Studio Options dialog showing the Enable .NET 9+ Mono WASM debugger option unchecked](../images/mono_debugger.png)

Disabling this option reduces startup time and improves responsiveness. The setting is per-user and applies to all Blazor WebAssembly projects on the machine.

## Impact of disabling

When the option is disabled, managed-code stepping and watch-window evaluation during Blazor WebAssembly debugging are not available. To re-enable full debugging, repeat steps 1–3, check the **Enable .NET 9+ Mono WASM debugger** option, and click **OK**.

For background details and guidance, see the following resources:

* [Performance Regression debugging Blazor WebAssembly with .NET 9](https://developercommunity.visualstudio.com/t/Performance-Regression-debugging-Blazor/10773897)
* [Performance Regression in Blazor WebAssembly with .NET 9](https://github.com/dotnet/aspnetcore/issues/58507)

## See also

* [How to load Microsoft Office files in Blazor SfPdfViewer Component](./how-to-load-office-files)
* [How to unload the PDF document from Viewer](./how-to-unload-the-pdf-document-from-viewer)
* [How to show or hide the Component dynamically](./how-to-show-or-hide-sfpdfviewer-dynamically)
