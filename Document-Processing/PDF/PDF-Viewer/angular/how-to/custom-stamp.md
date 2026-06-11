---
layout: post
title: Add the custom stamp based on the free text bounds | Syncfusion
description: Learn how to add the custom stamp based on the free text bounds in Syncfusion Angular PDF Viewer component of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Add the custom stamp based on the free text bounds
documentation: ug
domainurl: ##DomainURL##
---

# Add the custom stamp based on the free text bounds

When adding a stamp programmatically, the PDF Viewer expects offset values in points (1 point = 1/72 inch). Typical displays use 96 DPI for pixels, so convert pixels to points using: points = pixels * 72 / 96. Also consider page scale and rotation when positioning stamps so the stamp appears at the expected location on the page.

Here is an example of how you can add the custom stamp based on the free text bounds:

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