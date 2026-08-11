---
layout: post
title: Convert pixel to point in server side | Syncfusion
description: Learn here all about Convert pixel to point in server side in Syncfusion Vue PDF Viewer component of Syncfusion Essential JS 2 and more.
control: Convert pixel to point in server side
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Convert pixel to point on the server side in Vue PDF Viewer

The PDF Viewer returns annotation bounds in pixels on the client side. To use them on the server side, convert pixels to points using the calculation below. The 0.75 multiplier (72/96) is the standard point-to-pixel ratio used for all server-side calculations.

```ts

X = x * 72 / 96
Y = y * 72 / 96
Width = width * 72 / 96
Height = height * 72 / 96

```