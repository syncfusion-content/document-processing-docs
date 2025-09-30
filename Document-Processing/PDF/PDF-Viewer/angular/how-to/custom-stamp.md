---
layout: post
title: Add Custom Stamp Based on Free Text Bounds | Syncfusion
description: Learn how to add a custom stamp based on free text bounds in the Syncfusion Angular PDF Viewer component of Essential JS 2.
platform: document-processing
control: Add the custom stamp based on the free text bounds
documentation: ug
domainurl: ##DomainURL##
---

# Add a custom stamp based on free text bounds

To add a custom stamp in the Syncfusion<sup style="font-size:70%">&reg;</sup> PDF Viewer based on the free text bounds, obtain the value of the bound for the free text in pixels in the `annotationAdd` event while adding the free text. However, when a custom stamp is added programmatically, the offset values are set in points. Therefore, convert the value of the bound for the free text into a point to add the custom stamp to the free text bounds position.

Here is an example of how to add the custom stamp based on the free text bounds::

```typescript

  public annotationAdd(args) {
    if (args.annotationType === 'FreeText') {
      this.x = (args.annotationBound.left * 72) / 96;
      this.y = (args.annotationBound.top * 72) / 96;
      console.log(args);
    }
  }

```

Find the sample [how to add the custom stamp based on the free text bounds](https://stackblitz.com/edit/angular-dxub1a-sm6c5g?file=app.component.ts).