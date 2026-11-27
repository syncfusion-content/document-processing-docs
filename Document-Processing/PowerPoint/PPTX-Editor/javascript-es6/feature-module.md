---
layout: post
title: Feature Modules in TypeScript PPTX Editor | Syncfusion
description: Modules in TypeScript PPTX Editor enable selective injection of toolbar, thumbnail, navigation, magnification, print, and slide show capabilities.
platform: document-processing
control: Feature Module
documentation: ug
domainurl: ##DomainURL##
---

# Feature Modules in TypeScript PPTX Editor

TypeScript PPTX Editor features are segregated into individual feature modules to enable selective referencing. By default, the PPTX Editor displays the loaded presentation in read-only mode. The required modules should be injected to extend its functionality. The following are the selective modules of the PPTX Editor that can be included as needed:

* **Toolbar** - Shows the built-in ribbon for user interaction.
* **ThumbnailView** - Shows slide thumbnails for quick slide navigation.
* **Navigation** - Enables navigation between presentation slides.
* **Magnification** - Provides zoom and fit options for enhanced slide viewing.
* **Print** - Prints the presentation.
* **SlideShow** - Starts Slide Show and Presenter View modes.

N> In addition to injecting the required modules in your application, enable the corresponding properties to extend the functionality for a PPTX Editor instance. Refer to the following table.

| Module | Dependent modules to be injected for extending the functionality of the PPTX Editor in your application | Property to enable the functionality for a PPTX Editor instance |
|---|---|---|
|Toolbar|`PptxEditor.Inject(Toolbar)`|`let pptxeditor: PptxEditor = new PptxEditor({ enableToolbar: true });`|
|ThumbnailView|`PptxEditor.Inject(ThumbnailView)`|`let pptxeditor: PptxEditor = new PptxEditor({ enableThumbnail: true });`|
|Navigation|`PptxEditor.Inject(Navigation)`|`let pptxeditor: PptxEditor = new PptxEditor({ enableNavigation: true });`|
|Magnification|`PptxEditor.Inject(Magnification)`|`let pptxeditor: PptxEditor = new PptxEditor({ enableMagnification: true });`|
|Print|`PptxEditor.Inject(Print)`|`let pptxeditor: PptxEditor = new PptxEditor({ enablePrint: true });`|
|SlideShow|`PptxEditor.Inject(SlideShow)`|`let pptxeditor: PptxEditor = new PptxEditor({ enableSlideShow: true });`|
