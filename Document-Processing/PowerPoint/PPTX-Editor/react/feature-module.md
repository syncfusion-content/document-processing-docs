---
layout: post
title: Feature Modules in React PPTX Editor | Syncfusion
description: Modules in React PPTX Editor enable selective injection of toolbar, thumbnail, navigation, magnification, print, and slide show capabilities.
control: Feature module
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Feature Modules in React PPTX Editor

React PPTX Editor features are segregated into individual feature-wise modules to enable selective referencing. By default, the PPTX Editor displays the loaded presentation in read-only mode. The required modules should be injected to extend its functionality. The following are the selective modules of PPTX Editor that can be included as required:

* **Toolbar** - Shows the ribbon and title bar.
* **ThumbnailView** - Shows the slide thumbnail panel.
* **Navigation** - Moves between slides.
* **Magnification** - Zooms the slide view.
* **Print** - Prints the presentation.
* **SlideShow** - Starts a slide show and Presenter View.

>In addition to injecting the required modules in your application, enable corresponding properties to extend the functionality for a PPTX Editor instance. Refer to the following table.

| Module | Dependent modules to be injected for extending the functionality of PPTX Editor in your application | Property to enable the functionality for a PPTX Editor instance |
|---|---|---|
|Toolbar|`PptxEditor.Inject(Toolbar)`|`<PptxEditorComponent enableToolbar={true} />`|
|ThumbnailView|`PptxEditor.Inject(ThumbnailView)`|`<PptxEditorComponent enableThumbnail={true} />`|
|Navigation|`PptxEditor.Inject(Navigation)`|`<PptxEditorComponent enableNavigation={true} />`|
|Magnification|`PptxEditor.Inject(Magnification)`|`<PptxEditorComponent enableMagnification={true} />`|
|Print|`PptxEditor.Inject(Print)`|`<PptxEditorComponent enablePrint={true} />`|
|SlideShow|`PptxEditor.Inject(SlideShow)`|`<PptxEditorComponent enableSlideShow={true} />`|

These modules should be injected into the PPTX Editor using `PptxEditor.Inject`.
