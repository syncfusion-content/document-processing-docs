---
layout: post
title: Annotations in Mobile View in React PDF Viewer | Syncfusion
description: Create, edit, and manage annotations in the React PDF Viewer when running on mobile devices with the touch-optimized annotation UI.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---
# Annotations in Mobile View in React PDF Viewer

This article describes how to use annotation tools in the [React PDF Viewer](https://www.syncfusion.com/pdf-viewer-sdk/react-pdf-viewer) on touch-enabled devices. It covers enabling the annotation toolbar; adding sticky notes, text markups, shapes, measurements, stamps, signatures, and ink; adjusting annotation properties before and after placement; using comments; and removing annotations.

## Open the annotation toolbar

**Step 1:** Select the Edit Annotation icon on the main toolbar to enable the annotation toolbar.

![Enable the annotation toolbar](../images/edit-annotation.png)

**Step 2:** The annotation toolbar appears below the main toolbar and displays tools optimized for touch interaction.

![Annotation toolbar displayed](../images/after-enabling-annotation-toolbar.png)

## Add sticky note annotations

**Step 1:** Select the Sticky Notes icon to activate the sticky note tool, then tap the desired location on the page to place a note.

![Open sticky note tool](../images/add-sticky-notes.png)

**Step 2:** A sticky note annotation is added at the selected location; opening the note allows viewing or editing its content.

![Sticky note annotation added on the page](../images/sticky-notes-in-page.png)

## Add text markup annotations

**Step 1:** Select a text markup icon, highlight the desired text, then confirm the selection to apply the markup.

![Select text for markup](../images/select-text.png)

**Step 2:** The text markup annotation is applied to the highlighted text.

![Text markup applied on the page](../images/add-text-markup.png)

## Add shape and measurement annotations

**Step 1:** Select the Shape or Measure icon to open the corresponding toolbar.

![Open shape and measurement tools](../images/add-shapes.png)

**Step 2:** Choose a shape or measurement type and draw it on the page.

![Select measurement type](../images/open-radius.png)

**Step 3:** The annotation is rendered on the PDF page.

![Measurement annotation placed on the page](../images/radius-annotation.png)

## Add stamp annotations

**Step 1:** Select the Stamp icon and choose a stamp type from the menu.

![Open stamp tool](../images/open-stamp.png)

**Step 2:** Tap the page to place the chosen stamp annotation.

![Stamp annotation added on the page](../images/add-revised.png)

## Add signature annotations

**Step 1:** Select the Signature icon to open the signature canvas. Draw the signature, choose Create, then tap the viewer to place it.

![Open signature canvas](../images/add-signature.png)

**Step 2:** The signature annotation is added to the page.

![Signature placed on the page](../images/adding-signature.png)

## Add ink annotations

**Step 1:** Select the Ink tool and draw directly on the page.

![Open ink tool](../images/open-ink.png)

**Step 2:** The ink annotation is rendered on the page.

![Ink annotation drawn on the page](../../javascript-es6/how-to/images/ink-annotation.png)

## Change annotation properties (before adding)

**Step 1:** Adjust annotation properties before placement as required.

**Step 2:** Open the property toolbar for the annotation icon, set the desired properties, and then place the annotation on the page.

![Adjust fill color before adding](../images/open-fillcolor.png)

## Change annotation properties (after adding)

**Step 1:** Modify annotation properties after placement when necessary.

**Step 2:** Select the annotation to display the property toolbar, then update the properties as needed.

![Edit annotation properties after adding](../images/change-property.png)

## Delete annotations

**Step 1:** Select the annotation to display the property toolbar, then choose the Delete icon to remove the annotation.

![Delete icon in the property toolbar](../images/delete-icon.png)

## Open the comment panel

**Step 1:** Open the comment panel from the property toolbar or the annotation toolbar.

![Open the comment panel](../images/open-comment.png)

**Step 2:** The comment panel is displayed.

![Comment panel displayed](../images/comment-panel.png)

## Close the comment panel

**Step 1:** Use the Close button to dismiss the comment panel.

![Close the comment panel](../images/close-comment-panel.png)

## See also

- [Annotation Overview](overview)
- [Annotation Types](annotation-types/area-annotation)
- [Annotation Toolbar](../toolbar-customization/annotation-toolbar)
- [Create and Modify Annotation](create-modify-annotation)
- [Customize Annotation](customize-annotation)
- [Remove Annotation](delete-annotation)
- [Handwritten Signature](signature-annotation)
- [Export and Import Annotation](export-import/export-annotation)
- [Annotation Permission](annotation-permission)
- [Annotation Events](annotation-event)
- [Annotation API](annotations-api)