---
layout: post
title: Magnification in JavaScript ES6 PPTX Editor | Syncfusion
description: Zoom a presentation in the JavaScript ES6 PPTX Editor from the status bar and ribbon, fit the slide to the window, and enable or disable zooming.
control: Magnification
platform: document-processing
documentation: ug
domainurl:
---

# Magnification in JavaScript ES6 PPTX Editor

The JavaScript ES6 PPTX Editor provides magnification so you can enlarge or reduce the slide in the view area. You can zoom from the status bar, fit the slide to the window, and choose a zoom level from the View ribbon.

Zooming is available when the `Magnification` module is injected and `enableMagnification` is `true`. By default, `enableMagnification` is `true` and `zoom` is `100`. The supported range is **10%** to **400%**. Values outside that range are clamped, and an invalid value is ignored.

## Zooming via status bar

The status bar at the bottom of the editor includes a zoom cluster:

* **-** decreases the zoom by 10 percentage points.
* The slider snaps to 25%, 50%, 75%, 100%, 125%, 150%, 200%, 300%, and 400%.
* **+** increases the zoom by 10 percentage points.
* The percentage label shows the current zoom.
* The fit icon fits the whole slide in the view area.

These controls call the editor zoom APIs. You can use the same APIs from code.

To enable magnification, inject the `Magnification` module and add the dependent component styles from the **../node_modules/@syncfusion** package folder.

```css
@import '../node_modules/@syncfusion/ej2-base/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-lists/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/material3
...(truncated 5026 chars from an earlier turn)