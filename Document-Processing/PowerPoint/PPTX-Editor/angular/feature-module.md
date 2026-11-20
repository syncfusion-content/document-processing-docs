---
layout: post
title: Feature Modules in Angular PPTX Editor | Syncfusion
description: Modules in Angular PPTX Editor enable selective injection of toolbar, thumbnail, navigation, magnification, print, and slide show capabilities.
platform: document-processing
control: Feature module
documentation: ug
domainurl: ##DomainURL##
---

# Feature Modules in Angular PPTX Editor

Angular PPTX Editor features are segregated into individual feature-wise modules to enable selective referencing. By default, the PPTX Editor displays the loaded presentation in read-only mode. The required modules should be injected to extend its functionality. The following are the selective modules of PPTX Editor that can be included as required:

* **ToolbarService** - Shows the ribbon and title bar.
* **ThumbnailViewService** - Shows the slide thumbnail panel.
* **NavigationService** - Moves between slides.
* **MagnificationService** - Zooms the slide view.
* **PrintService** - Prints the presentation.
* **SlideShowService** - Starts a slide show and Presenter View.

>In addition to injecting the required modules in your application, enable corresponding properties to extend the functionality for a PPTX Editor instance. Refer to the following table.

| Module | Dependent modules to be injected for extending the functionality of PPTX Editor in your application | Property to enable the functionality for a PPTX Editor instance |
|---|---|---|
|ToolbarService|`ToolbarService`|`<ejs-pptxeditor [enableToolbar]=true></ejs-pptxeditor>`|
|ThumbnailViewService|`ThumbnailViewService`|`<ejs-pptxeditor [enableThumbnail]=true></ejs-pptxeditor>`|
|NavigationService|`NavigationService`|`<ejs-pptxeditor [enableNavigation]=true></ejs-pptxeditor>`|
|MagnificationService|`MagnificationService`|`<ejs-pptxeditor [enableMagnification]=true></ejs-pptxeditor>`|
|PrintService|`PrintService`|`<ejs-pptxeditor [enablePrint]=true></ejs-pptxeditor>`|
|SlideShowService|`SlideShowService`|`<ejs-pptxeditor [enableSlideShow]=true></ejs-pptxeditor>`|

These modules should be injected into the `providers` section of the root `NgModule` or component class.
