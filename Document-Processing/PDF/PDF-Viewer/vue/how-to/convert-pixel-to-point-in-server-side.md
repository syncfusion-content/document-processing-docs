---
layout: post
title: Convert pixel to point in server side in Vue Pdfviewer component | Syncfusion
description: Learn here all about Convert pixel to point in server side in Syncfusion Vue Pdfviewer component of Syncfusion Essential JS 2 and more.
control: Convert pixel to point in server side
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Convert pixel to point in server side in Vue PDF Viewer control

Syncfusion<sup style="font-size:70%">&reg;</sup> PDF viewer will get the bounds of the annotations as the pixel in the Client-side. But while using it in the back end, we need to convert the pixel into point by using the below calculation. And the 0.75 is constant for all the calculations in the back end.

```ts

X = x * 72 / 96
Y = y * 72 / 96
Width = width * 72 / 96
Height = height * 72 / 96

```