---
layout: post
title: Feature Modules in Vue PPTX Editor | Syncfusion
description: Modules in Vue PPTX Editor enable selective injection of toolbar, thumbnail, navigation, magnification, print, and slide show capabilities.
control: Feature module
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Feature Modules in Vue PPTX Editor

Vue PPTX Editor features are segregated into individual feature modules to enable selective referencing. By default, the PPTX Editor displays the loaded presentation in read-only mode. The required modules should be injected to extend its functionality. The following are the selective modules of PPTX Editor that can be included as required:

* **Toolbar** - Shows the built-in ribbon for user interaction.
* **ThumbnailView** - Shows slide thumbnails for quick slide navigation.
* **Navigation** - Enables navigation between presentation slides.
* **Magnification** - Provides zoom and fit options for enhanced slide viewing.
* **Print** - Prints the presentation.
* **SlideShow** - Starts Slide Show and Presenter View modes.

In addition to injecting the required modules in your application, enable corresponding properties to extend the functionality for a PPTX Editor instance. Refer to the following table.

| Module | Dependent modules to be injected for extending the functionality of PPTX Editor in your application | Property to enable the functionality for a PPTX Editor instance |
|---|---|---|
|Toolbar|`Toolbar`|`<ejs-pptxeditor :enableToolbar='true'></ejs-pptxeditor>`|
|ThumbnailView|`ThumbnailView`|`<ejs-pptxeditor :enableThumbnail='true'></ejs-pptxeditor>`|
|Navigation|`Navigation`|`<ejs-pptxeditor :enableNavigation='true'></ejs-pptxeditor>`|
|Magnification|`Magnification`|`<ejs-pptxeditor :enableMagnification='true'></ejs-pptxeditor>`|
|Print|`Print`|`<ejs-pptxeditor :enablePrint='true'></ejs-pptxeditor>`|
|SlideShow|`SlideShow`|`<ejs-pptxeditor :enableSlideShow='true'></ejs-pptxeditor>`|

These modules should be injected into the `provide` section and use `PptxEditor` as a key of the object.
