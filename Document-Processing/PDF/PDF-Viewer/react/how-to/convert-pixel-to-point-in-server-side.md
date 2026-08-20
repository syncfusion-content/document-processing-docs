---
layout: post
title: How to Convert Pixel to Point on the Server in React PDF | Syncfusion
description: Convert pixel values to points on the server side in the React PDF Viewer when integrating with the Syncfusion PDF Library for layout work.
control: PDF Viewer
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# How to Convert Pixel to Point on the Server in React PDF Viewer

Syncfusion® PDF Viewer renders pages at a 96 DPI resolution and obtains the annotation bounds in pixels on the client side. However, PDF coordinates are measured in points, which use a 72 DPI unit system. Therefore, when using these values on the back end, the pixel values must be converted to points using the following calculation.

```ts

pointX    = pixelX * 72 / 96
pointY    = pixelY * 72 / 96
pointWidth  = pixelWidth * 72 / 96
pointHeight = pixelHeight * 72 / 96

```