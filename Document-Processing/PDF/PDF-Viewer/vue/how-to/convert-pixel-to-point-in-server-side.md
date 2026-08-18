---
layout: post
title: How to Convert Pixel to Point on the Server in Vue PDF | Syncfusion
description: Convert pixel values to points on the server side in the Vue PDF Viewer when integrating with the Syncfusion PDF Library for layout work.
control: Convert pixel to point in server side
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# How to Convert Pixel to Point on the Server in Vue PDF Viewer

The PDF Viewer returns annotation bounds in pixels on the client side. To use them on the server side, convert pixels to points using the calculation below. The 0.75 multiplier (72/96) is the standard point-to-pixel ratio used for all server-side calculations.

```ts

X = x * 72 / 96
Y = y * 72 / 96
Width = width * 72 / 96
Height = height * 72 / 96

```