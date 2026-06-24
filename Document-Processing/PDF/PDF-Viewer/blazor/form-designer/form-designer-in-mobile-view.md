---
layout: post
title: Form designer in mobile view in SfPdfViewer | Syncfusion
description: Learn how to Design and edit PDF form fields in mobile view in the Syncfusion Blazor SfPdfViewer component.
platform: document-processing
control: SfPdfViewer
documentation: ug
---

# To open the form designer toolbar

This topic explains how to design and manage PDF form fields in mobile view using the Blazor `SfPdfViewer`.

**Prerequisites**
- Form Designer must be enabled for the viewer instance.
- Use a supported mobile browser.

To open the form designer toolbar, tap the **Form Designer** option in the primary toolbar. The form designer toolbar opens at the bottom of the viewer.

![Mobile form designer toolbar displayed at bottom in Blazor SfPdfViewer](../form-designer/form-designer-images/form-designer-toolbar.png)

## Add a text box

Tap the **Text Box** icon in the toolbar, then tap anywhere in the viewer to place a text box form field.

![Tap Text Box icon in Blazor SfPdfViewer](../form-designer/form-designer-images/form-designer-textbox.png)

![Text box added in Blazor SfPdfViewer](../form-designer/form-designer-images/form-designer-textbox-added.png)

## Add a password box

Tap the **Password Box** icon in the toolbar, then tap anywhere in the viewer to place a password box.

![Password box added in Blazor SfPdfViewer](../form-designer/form-designer-images/form-designer-password.png)

## Add a check box

Tap the **Check Box** icon in the toolbar, then tap anywhere in the viewer to place a check box.

![Check box added in Blazor SfPdfViewer](../form-designer/form-designer-images/form-designer-checkBox.png)

## Add a radio button

Tap the **Radio Button** icon in the toolbar, then tap anywhere in the viewer to place a radio button.

![Radio button added in Blazor SfPdfViewer](../form-designer/form-designer-images/form-designer-radio.png)

## Add a list box

Tap the **List Box** icon in the toolbar, then tap anywhere in the viewer to place a list box.

![List box added in Blazor SfPdfViewer](../form-designer/form-designer-images/form-designer-listbox.png)

## Add a dropdown field

Tap the **Dropdown** icon in the toolbar, then tap anywhere in the viewer to place a dropdown field.

![Dropdown field added in Blazor SfPdfViewer](../form-designer/form-designer-images/form-designer-dropdown-listbox.png)

## Add a signature field

Tap the **Signature Field** icon in the toolbar, then tap anywhere in the viewer to place a signature field.

![Signature field added in Blazor SfPdfViewer](../form-designer/form-designer-images/form-designer-signature.png)

## Add a button

Tap the **Button** icon in the toolbar, then tap anywhere in the viewer to place a button.

![Button added in Blazor SfPdfViewer](../form-designer/form-designer-images/form-designer-button.png)

## Modify form field properties

Configure form field properties as required. To edit a field on mobile, select the field while the form designer toolbar is open to display the properties dialog, then update the needed options:

- **Name**: Unique identifier for the form field.
- **Tooltip**: Text displayed as a tooltip for the field.
- **Value**: Default value assigned during design.
- **Visibility**: Display behavior — Visible, Visible but does not print, Hidden, or Hidden but printable.
- **Read-only**: Prevents users from editing the field.
- **Required**: Marks the field as mandatory.
- **Appearance**: Visual settings such as background color, border color and style, font family, and font size.

Tap Save to apply changes to the selected form field. On mobile, drag the field or its resize handles to reposition or resize; minimum field sizes may apply, and snapping occurs within page bounds where supported.

![Modify form field properties in Blazor SfPdfViewer](../form-designer/form-designer-images/form-designer-properties.png)

## Delete a form field

To delete a form field, select it. The Delete icon appears in the form designer toolbar; tap it to remove the field from the PDF. Alternatively, press the Delete key after selecting the form field.

![Delete selected form field in Blazor SfPdfViewer](../form-designer/form-designer-images/form-designer-delete.png)

## See also

* [Mobile Toolbar](../toolbar-customization/mobile-toolbar)
* [Annotations in Mobile View](../annotation/annotations-in-mobile-view)
* [Form designer overview](../form-designer/overview)
* [UI interactions](../form-designer/ui-interactions)
* [Create form fields programmatically](../form-designer/create-programmatically)
