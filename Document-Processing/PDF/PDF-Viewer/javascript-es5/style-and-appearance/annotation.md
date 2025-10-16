---
layout: post
title: Customize annotation toolbar icons in JavaScript PDF Viewer | Syncfusion
description: Learn how to customize annotation toolbar icons in the Syncfusion JavaScript PDF Viewer by applying targeted CSS styles.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Customize annotation toolbar icons in JavaScript PDF Viewer

Apply custom CSS to modify the annotation toolbar icons in the JavaScript PDF Viewer. Add these snippets to the page or global stylesheet that hosts the component to adjust icon color, size, or visibility.

## Customize the Highlight icon

Use the following CSS to adjust the Highlight annotation toolbar icon.

```
/* To specify font size and color */

  .e-pdfviewer .e-pv-highlight-icon{
    color: rgb(143, 89, 219);
    font-size: 20px;
  }
```

## Customize the Underline icon

Use the following CSS to update the Underline annotation toolbar icon.

```
/* To specify font size and color */

  .e-pdfviewer .e-pv-underline-icon{
    color: rgb(143, 89, 219);
    font-size: 20px;
  }
```

## Customize the Strikethrough icon

Use the following CSS to update the Strikethrough annotation toolbar icon.

```
/* To specify font size and color */

  .e-pdfviewer .e-pv-strikethrough-icon{
    color: rgb(143, 89, 219);
    font-size: 20px;
  }
```

## Customize the shape annotation icon

Use the following CSS to update the Shape Annotation toolbar icon.

```
/* To specify font size and color */

  .e-pdfviewer .e-pv-annotation-shape-icon{
    color: rgb(143, 89, 219);
    font-size: 20px;
  }
```

## Customize the calibration icon

Use the following CSS to update the Calibration annotation toolbar icon.

```
/* To specify font size and color */

  .e-pdfviewer .e-pv-annotation-calibrate-icon{
    color: rgb(143, 89, 219);
    font-size: 20px;
  }
```

## Customize the Free Text icon

Use the following CSS to update the Free Text annotation toolbar icon.

```
/* To specify font size and color */

  .e-pdfviewer .e-pv-freetext-icon{
    color: rgb(143, 89, 219);
    font-size: 20px;
  }
```

## Customize the handwritten signature icon

Use the following CSS to update the Handwritten signature annotation toolbar icon.

```
/* To specify font size and color */

  .e-pdfviewer .e-pv-handwritten-icon::before{
    color: rgb(143, 89, 219);
    font-size: 20px;
  }
```

## Customize the ink annotation icon

Use the following CSS to update the Ink annotation toolbar icon.

```
/* To specify font size and color */

  .e-pdfviewer .e-pv-inkannotation-icon{
    color: rgb(143, 89, 219);
    font-size: 20px;
  }
```
## Customize the Close icon

Use the following CSS to hide the Close icon.

```
 #pdfViewer_annotation_closeIcon{
    display: none
  }
```
