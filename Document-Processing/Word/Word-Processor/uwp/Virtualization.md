---
title: Virtualization in UWP RichTextBox control | Syncfusion
description: Learn here all about Virtualization support in Syncfusion UWP RichTextBox (SfRichTextBoxAdv) control and more.
platform: document-processing
control: SfRichTextBoxAdv
documentation: ug
keywords: virtualization,ui-virtualization,performance,memory,scrolling,viewer,rendering
---
# Virtualization in UWP RichTextBox

The [`SfRichTextBoxAdv`](https://help.syncfusion.com/cr/uwp/Syncfusion.SfRichTextBoxAdv.SfRichTextBoxAdv.html) control supports UI virtualization, which is enabled by default. UI elements are created only for the contents that are visible in the viewer. Additional UI elements are created on demand as the viewer scrolls and new content becomes visible. This reduces memory usage and improves UI performance.

## Default behavior

| Scenario | Behavior |
| --- | --- |
| Initial load | UI elements are created only for the visible viewport. |
| Scrolling | UI elements are created for the content that becomes visible and released for content that scrolls out of view. |
| Memory footprint | Reduced compared to instantiating UI elements for the entire document. |

N> UI virtualization is enabled by default; no additional configuration is required.

## See Also

- [SfRichTextBoxAdv API reference](https://help.syncfusion.com/cr/uwp/Syncfusion.SfRichTextBoxAdv.SfRichTextBoxAdv.html)
- [Performance considerations in UWP RichTextBox](https://help.syncfusion.com/uwp/richtextbox/performance)
- [Getting started with UWP RichTextBox](https://help.syncfusion.com/uwp/richtextbox/getting-started)
- [Overview of UWP RichTextBox](https://help.syncfusion.com/uwp/richtextbox/overview)
