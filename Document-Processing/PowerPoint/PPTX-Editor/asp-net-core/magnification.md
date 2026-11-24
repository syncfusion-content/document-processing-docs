---
layout: post
title: Magnification in ASP.NET Core PPTX Editor | Syncfusion
description: Zoom a presentation in the ASP.NET Core PPTX Editor from the status bar and ribbon, fit the slide to the window, and enable or disable zooming.
control: Magnification
platform: document-processing
documentation: ug
domainurl:
---

# Magnification in ASP.NET Core PPTX Editor

The ASP.NET Core PPTX Editor provides magnification so you can enlarge or reduce the slide in the view area. You can zoom from the status bar, fit the slide to the window, and choose a zoom level from the View ribbon.

Zooming is available when the `Magnification` module is injected and `enableMagnification` is `true`. By default, `enableMagnification` is `true` and `zoom` is `100`. The supported range is **10%** to **400%**. Values outside that range are clamped, and an invalid value is ignored.

## Zooming via status bar

The status bar at the bottom of the editor includes a zoom cluster:

* **-** decreases the zoom by 10 percentage points.
* The slider snaps to 25%, 50%, 75%, 100%, 125%, 150%, 200%, 300%, and 400%.
* **+** increases the zoom by 10 percentage points.
* The percentage label shows the current zoom.
* The fit icon fits the whole slide in the view area.

These controls call the editor zoom APIs. You can use the same APIs from code.

The following code shows how to enable magnification and zoom from the editor instance.

```aspx-cs
<ejs-pptxeditor id="pptxeditor" enableMagnification="true"></ejs-pptxeditor>
<script>
    ej.pptxeditor.PptxEditor.Inject(ej.pptxeditor.Magnification);

    document.addEventListener('DOMContentLoaded', function () {
        var pptxEditor = document.getElementById('pptxeditor').ej2_instances[0];
        // Status-bar - and + use the same 10-point step.
        pptxEditor.zoomIn();
        pptxEditor.zoomOut();

        // Set an explicit percentage. The value is clamped to 10-400.
        pptxEditor.setZoom(350);
    });
</script>
```

`zoomIn` and `zoomOut` change the current zoom by 10 percentage points. `setZoom` sets an absolute percentage. `zoomTo100` sets the zoom to 100%.

## Fit to window

**Fit to Window** scales the whole slide so it fits in the view area. Use it from:

* The fit icon on the status bar.
* **View** > **Fit to Window**.
* **View** > **Zoom** > **Fit to window**.

The following code fits the slide to the window from the editor instance. `fitWidth` fits the slide width instead, keeping the aspect ratio.

```aspx-cs
<ejs-pptxeditor id="pptxeditor" enableMagnification="true"></ejs-pptxeditor>
<script>
    ej.pptxeditor.PptxEditor.Inject(ej.pptxeditor.Magnification);

    document.addEventListener('DOMContentLoaded', function () {
        var pptxEditor = document.getElementById('pptxeditor').ej2_instances[0];
        // Fit the whole slide in the view area.
        pptxEditor.fitToWindow();

        // Fit the slide width in the view area.
        // pptxEditor.fitWidth();
    });
</script>
```

## Zooming via ribbon

The **View** tab **Zoom** group provides:

| Command | Behavior |
| --- | --- |
| Zoom > Fit to window | Fits the whole slide in the view area. |
| Zoom > Fit to width | Fits the slide width in the view area. |
| Zoom > 200%, 150%, 100%, 75%, 50% | Sets that zoom percentage. |
| Zoom > Zoom... | Opens the Zoom dialog for fit options, presets, and a custom percentage. |
| Fit to Window | Fits the whole slide in the view area. |

The same actions are available from the editor instance.

```aspx-cs
<ejs-pptxeditor id="pptxeditor" enableToolbar="true" enableMagnification="true"></ejs-pptxeditor>
<script>
    ej.pptxeditor.PptxEditor.Inject(ej.pptxeditor.Toolbar, ej.pptxeditor.Magnification);

    document.addEventListener('DOMContentLoaded', function () {
        var pptxEditor = document.getElementById('pptxeditor').ej2_instances[0];
        pptxEditor.setZoom(200);
        // Use and set the required zoom option based on your viewing preference.
        // pptxEditor.fitToWindow();
        // pptxEditor.fitWidth();
        // pptxEditor.zoomTo100();
    });
</script>
```

The `zoomChange` event is raised after the effective zoom percentage changes. `zoomType` is `percentage` for `setZoom`, `zoomIn`, `zoomOut`, and `zoomTo100`, and `fit` for a fit layout.

```aspx-cs
<ejs-pptxeditor id="pptxeditor" enableMagnification="true" zoomChange="onZoomChange"></ejs-pptxeditor>
<script>
    ej.pptxeditor.PptxEditor.Inject(ej.pptxeditor.Magnification);

    function onZoomChange(args) {
        // args.previousZoom, args.newZoom, args.zoomType
        console.log(args.previousZoom + ' -> ' + args.newZoom);
    }
</script>
```

## Enable or disable zooming

Zoom APIs and the status-bar zoom controls are active only when the `Magnification` module is injected and `enableMagnification` is `true`. Set `enableMagnification` to `false` to make zooming inert. The status-bar fit button, zoom step buttons, and zoom slider stay visible but are disabled.

```aspx-cs
<button id="disable-zoom">Disable zoom</button>
<button id="enable-zoom">Enable zoom</button>
<ejs-pptxeditor id="pptxeditor" enableMagnification="true"></ejs-pptxeditor>
<script>
    ej.pptxeditor.PptxEditor.Inject(ej.pptxeditor.Magnification, ej.pptxeditor.Toolbar);

    document.getElementById('disable-zoom').onclick = function () {
        var pptxEditor = document.getElementById('pptxeditor').ej2_instances[0];
        pptxEditor.enableMagnification = false;
    };
    document.getElementById('enable-zoom').onclick = function () {
        var pptxEditor = document.getElementById('pptxeditor').ej2_instances[0];
        pptxEditor.enableMagnification = true;
    };
</script>
```

While `enableMagnification` is `false`, `setZoom`, `zoomIn`, `zoomOut`, `zoomTo100`, `fitToWindow`, and `fitWidth` do nothing. The `Magnification` module must stay injected if you turn zooming back on.

## Notes

* Zoom percentage is clamped to 10-400.
* Status-bar **-** and **+** step by 10 percentage points. The slider uses the snap levels 25, 50, 75, 100, 125, 150, 200, 300, and 400.
* `fitToWindow` fits the whole slide. `fitWidth` fits the slide width and keeps the aspect ratio.
* Ribbon zoom commands require the injected `Toolbar` module and `enableToolbar` set to `true`, in addition to `Magnification`.
* Without the injected `Magnification` module, every zoom API does nothing.
