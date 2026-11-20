---
layout: post
title: Feature Modules in ASP.NET Core PPTX Editor | Syncfusion
description: Modules in ASP.NET Core PPTX Editor enable selective injection of toolbar, thumbnail, navigation, magnification, print, and slide show capabilities.
platform: document-processing
control: Feature Module
documentation: ug
---

# Feature Modules in ASP.NET Core PPTX Editor

ASP.NET Core PPTX Editor features are segregated into individual feature-wise modules to enable selective referencing. By default, the PPTX Editor displays the loaded presentation in read-only mode. The required modules should be injected to extend its functionality. The following are the selective modules of PPTX Editor that can be included as required:

* **Toolbar** - Shows the ribbon and title bar.
* **ThumbnailView** - Shows the slide thumbnail panel.
* **Navigation** - Moves between slides.
* **Magnification** - Zooms the slide view.
* **Print** - Prints the presentation.
* **SlideShow** - Starts a slide show and Presenter View.

N>In addition to injecting the required modules in your application, enable corresponding properties to extend the functionality for a PPTX Editor instance.

Refer to the following table.

| Module | Property to enable the functionality for a PPTX Editor instance |
|---|---|
|Toolbar|`<ejs-pptxeditor enableToolbar=true></ejs-pptxeditor>`|
|ThumbnailView|`<ejs-pptxeditor enableThumbnail=true></ejs-pptxeditor>`|
|Navigation|`<ejs-pptxeditor enableNavigation=true></ejs-pptxeditor>`|
|Magnification|`<ejs-pptxeditor enableMagnification=true></ejs-pptxeditor>`|
|Print|`<ejs-pptxeditor enablePrint=true></ejs-pptxeditor>`|
|SlideShow|`<ejs-pptxeditor enableSlideShow=true></ejs-pptxeditor>`|
