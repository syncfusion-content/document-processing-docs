---
layout: post
title: Convert pixel to point in React PDF Viewer component | Syncfusion
description: Learn how to convert pixel values to points on the server side in the Syncfusion React PDF Viewer component of Syncfusion Essential JS 2.
control: PDF Viewer
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Convert pixel to point in server side in React Pdfviewer component

Syncfusion<sup style="font-size:70%">&reg;</sup> PDF viewer will get the bounds of the annotations as the pixel in the Client-side. But while using it in the back end, we need to convert the pixel into point by using the below calculation. And the 0.75 is constant for all the calculations in the back end.

```ts

pointX    = pixelX * 72 / 96
pointY    = pixelY * 72 / 96
pointWidth  = pixelWidth * 72 / 96
pointHeight = pixelHeight * 72 / 96

```