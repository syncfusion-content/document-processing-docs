---
layout: post
title: Customize appearance in JavaScript PDF Viewer | Syncfusion
description: Learn how to override CSS in the Syncfusion JavaScript PDF Viewer to customize icons, containers, and overall appearance.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Customize appearance in JavaScript PDF Viewer

Override the default CSS classes to tailor the Syncfusion JavaScript PDF Viewer interface. Apply the following snippets to your page or global stylesheet to update borders, backgrounds, and toolbar icons. To create a full custom theme for all JavaScript controls, use the [Syncfusion Theme Studio](https://ej2.syncfusion.com/themestudio/?theme=material).

## Customize the PDF Viewer root element

Use the following CSS to adjust the border of the PDF Viewer root element. Prefer CSS variables for color values so themes can be changed centrally.

```
.e-pdfviewer{
    border: 3px solid rgb(119, 249, 238);
}
```
## Customize the PDF Viewer container

Use the following CSS to update the background color of the PDF Viewer container. Use semantic variables for accessible theming.

```
/* To specify background color*/
.e-pv-viewer-container  {
    background-color: rgb(119, 249, 238);
}
```
## Customize the PDF Viewer page container

Use the following CSS to update the page container background within the PDF Viewer. If a distinct selector exists for page elements (for example, `.e-pv-page-container`), target that selector instead.

```
/* To specify background color*/
.e-pv-viewer-container  {
        background-color: rgb(119, 249, 238);
}
```

## Customize the bookmark icon

Use the following CSS to adjust the bookmark icon color in the PDF Viewer toolbar. Use `rem` for hover and base sizes to remain responsive.

```
/* To specify color of the bookmark */
  .e-pdfviewer .e-pv-bookmark-icon{
    color: rgb(24, 182, 231);
  }
  .e-pdfviewer .e-pv-bookmark-icon:hover{
    color: rgb(226, 76, 11);
  }

```
## Customize the thumbnail icon

Use the following CSS to adjust the thumbnail icon color in the PDF Viewer toolbar.

```
/* To specify color of the bookmark */
  .e-pdfviewer .e-pv-thumbnail-view-icon{
    color: rgb(24, 182, 231);
  }
  .e-pdfviewer .e-pv-thumbnail-view-icon:hover{
    color: rgb(226, 76, 11);
  }

```