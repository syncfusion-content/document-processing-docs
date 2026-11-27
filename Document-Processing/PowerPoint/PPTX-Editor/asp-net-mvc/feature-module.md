---
layout: post
title: Feature Modules in ASP.NET MVC PPTX Editor | Syncfusion
description: Modules in ASP.NET MVC PPTX Editor enable selective injection of toolbar, thumbnail, navigation, magnification, print, and slide show capabilities.
platform: document-processing
control: Feature Module
documentation: ug
---

# Feature Modules in ASP.NET MVC PPTX Editor

ASP.NET MVC PPTX Editor features are segregated into individual feature-wise modules to enable selective referencing. By default, the PPTX Editor displays the loaded presentation in read-only mode. The required modules should be injected to extend its functionality. The following are the selective modules of the PPTX Editor that can be included as required:

* **Toolbar** - Shows the built-in ribbon for user interaction.
* **ThumbnailView** - Shows slide thumbnails for quick slide navigation.
* **Navigation** - Enables navigation between presentation slides.
* **Magnification** - Provides zoom and fit options for enhanced slide viewing.
* **Print** - Prints the presentation.
* **SlideShow** - Starts Slide Show and Presenter View modes.

N>In addition to injecting the required modules in your application, enable corresponding properties to extend the functionality for a PPTX Editor instance.

Refer to the following table.

| Module | Property to enable the functionality for a PPTX Editor instance |
|---|---|
|Toolbar|`@Html.EJS().PptxEditor("container").EnableToolbar(true).Render()`|
|ThumbnailView|`@Html.EJS().PptxEditor("container").EnableThumbnail(true).Render()`|
|Navigation|`@Html.EJS().PptxEditor("container").EnableNavigation(true).Render()`|
|Magnification|`@Html.EJS().PptxEditor("container").EnableMagnification(true).Render()`|
|Print|`@Html.EJS().PptxEditor("container").EnablePrint(true).Render()`|
|SlideShow|`@Html.EJS().PptxEditor("container").EnableSlideShow(true).Render()`|
