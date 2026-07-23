---
layout: post
title: Convert pixel to point in React PDF Viewer component | Syncfusion
description: Learn how to convert pixel values to points on the server side in the Syncfusion React PDF Viewer component of Syncfusion Essential JS 2.
control: PDF Viewer
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Convert pixel to point in server side in React PDF Viewer component

Syncfusion® PDF Viewer renders pages at a 96 DPI resolution and obtains the annotation bounds in pixels on the client side. However, PDF coordinates are measured in points, which use a 72 DPI unit system. Therefore, when using these values on the back end, the pixel values must be converted to points using the following calculation.

```ts

pointX    = pixelX * 72 / 96
pointY    = pixelY * 72 / 96
pointWidth  = pixelWidth * 72 / 96
pointHeight = pixelHeight * 72 / 96

```