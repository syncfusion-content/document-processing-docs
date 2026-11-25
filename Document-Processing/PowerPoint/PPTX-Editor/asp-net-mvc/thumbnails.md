---
layout: post
title: Thumbnails in ASP.NET MVC PPTX Editor | Syncfusion
description: Learn how to enable or disable the thumbnail panel and set its size in the ASP.NET MVC PPTX Editor.
platform: document-processing
control: Thumbnails
documentation: ug
domainurl:
---

# Thumbnails in ASP.NET MVC PPTX Editor

The thumbnail panel shows a scrollable list of slide previews on the left of the editor. Selecting a thumbnail opens that slide. The panel is available when the `ThumbnailView` module is injected and `enableThumbnail` is `true`.

## Enable or disable thumbnails

Inject `ThumbnailView` and set `enableThumbnail` to show the panel. The default value is `true`. Set `enableThumbnail` to `false` to remove the panel. Changing the property at runtime mounts or removes the panel without reloading the presentation.

`thumbnailPanelVisible` expands or collapses the panel while the feature stays enabled. The default is `true`. On a host narrower than 768 px the panel starts collapsed unless the user has already shown or hidden it.

The View tab Show group also has a Thumbnails toggle. That item needs the `Toolbar` module and `enableToolbar`.

```cshtml
@Html.EJS().PptxEditor("pptxeditor").EnableThumbnail(true).ThumbnailPanelVisible(true).EnableToolbar(true).Render()

<script>
    ej.pptxeditor.PptxEditor.Inject(ej.pptxeditor.ThumbnailView, ej.pptxeditor.Toolbar);
</script>
```

To turn the feature off, set `enableThumbnail` to `false` and do not inject `ThumbnailView`. Without the module, the thumbnail panel is not available.

## Size and scrollbar

`thumbnailPanelWidth` sets the panel width in CSS pixels. The value is clamped to 120-240. The default is 184. A value outside the range is clamped. A non-numeric value is ignored and the width stays at the default.

The resize handle on the panel edge changes the same width. Arrow keys on the handle also resize it. The width follows the right-to-left setting when `enableRtl` is `true`.

The thumbnail list scrolls vertically when the slides do not fit in the panel. The scrollbar is part of the list. It is not a separate module, and there is no property to show or hide it. Widening the panel makes each preview larger. The preview height follows the slide aspect ratio.

```cshtml
@Html.EJS().PptxEditor("pptxeditor").EnableThumbnail(true).ThumbnailPanelWidth(200).Render()

<script>
    ej.pptxeditor.PptxEditor.Inject(ej.pptxeditor.ThumbnailView);
</script>
```
