---
layout: post
title: Magnification in React PPTX Editor | Syncfusion
description: Zoom a presentation in the React PPTX Editor from the status bar and ribbon, fit the slide to the window, and enable or disable zooming.
control: Magnification
platform: document-processing
documentation: ug
domainurl:
---

# Magnification in React PPTX Editor

The React PPTX Editor provides magnification so you can enlarge or reduce the slide in the view area. You can zoom from the status bar, fit the slide to the window, and choose a zoom level from the View ribbon.

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

```css
@import '../node_modules/@syncfusion/ej2-base/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-lists/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-ribbon/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-pptxeditor/styles/material3.css';
```

```jsx
import * as React from 'react';
import { PptxEditorComponent, Inject, Magnification } from '@syncfusion/ej2-react-pptxeditor';

function App() {
    let pptxEditor: PptxEditorComponent;
    const onCreated = () => {
        // Status-bar - and + use the same 10-point step.
        pptxEditor.zoomIn();
        pptxEditor.zoomOut();

        // Set an explicit percentage. The value is clamped to 10-400.
        pptxEditor.setZoom(150);
    };
    return (
        <div className="control-pane">
            <PptxEditorComponent
                ref={(scope) => { pptxEditor = scope; }}
                enableMagnification={true}
                zoom={100}
                created={onCreated}>
                <Inject services={[Magnification]} />
            </PptxEditorComponent>
        </div>
    );
}
export default App;
```

`zoomIn` and `zoomOut` change the current zoom by 10 percentage points. `setZoom` sets an absolute percentage. `zoomTo100` sets the zoom to 100%.

## Fit to window

**Fit to Window** scales the whole slide so it fits in the view area. Use it from:

* The fit icon on the status bar.
* **View** > **Fit to Window**.
* **View** > **Zoom** > **Fit to window**.

The following code fits the slide to the window from the editor instance. `fitWidth` fits the slide width instead, keeping the aspect ratio.

```jsx
import * as React from 'react';
import { PptxEditorComponent, Inject, Magnification } from '@syncfusion/ej2-react-pptxeditor';

function App() {
    let pptxEditor: PptxEditorComponent;
    const onCreated = () => {
        // Fit the whole slide in the view area.
        pptxEditor.fitToWindow();

        // Fit the slide width in the view area.
        // pptxEditor.fitWidth();
    };
    return (
        <div className="control-pane">
            <PptxEditorComponent
                ref={(scope: PptxEditorComponent) => { pptxEditor = scope; }}
                enableMagnification={true}
                created={onCreated}>
                <Inject services={[Magnification]} />
            </PptxEditorComponent>
        </div>
    );
}
export default App;
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

The same actions are available from the editor instance:

```jsx
import * as React from 'react';
import { PptxEditorComponent, Inject, Magnification, Toolbar } from '@syncfusion/ej2-react-pptxeditor';

function App() {
     let pptxEditor: PptxEditorComponent;
    const onCreated = () => {
        pptxEditor.setZoom(200);
        // Use and set the required zoom option based on your viewing preference.
        // pptxEditor.fitToWindow();
        // pptxEditor.fitWidth();
        // pptxEditor.zoomTo100();
    };
    return (
        <div className="control-pane">
            <PptxEditorComponent
                ref={(scope: PptxEditorComponent) => { pptxEditor = scope; }}
                enableToolbar={true}
                enableMagnification={true}
                created={onCreated}>
                <Inject services={[Toolbar, Magnification]} />
            </PptxEditorComponent>
        </div>
    );
}
export default App;
```

The `zoomChange` event is raised after the effective zoom percentage changes. `zoomType` is `percentage` for `setZoom`, `zoomIn`, `zoomOut`, and `zoomTo100`, and `fit` for a fit layout.

```jsx
import * as React from 'react';
import { PptxEditorComponent, Inject, Magnification } from '@syncfusion/ej2-react-pptxeditor';

function App() {
    const onZoomChange = (args: { previousZoom: number; newZoom: number }) => {
        // args.previousZoom, args.newZoom, args.zoomType
        console.log(args.previousZoom + ' -> ' + args.newZoom);
    };
    return (
        <div className="control-pane">
            <PptxEditorComponent enableMagnification={true} zoomChange={onZoomChange}>
                <Inject services={[Magnification]} />
            </PptxEditorComponent>
        </div>
    );
}
export default App;
```

## Enable or disable zooming

Zoom APIs and the status-bar zoom controls are active only when the `Magnification` module is injected and `enableMagnification` is `true`. Set `enableMagnification` to `false` to make zooming inert. The status-bar fit button, zoom step buttons, and zoom slider stay visible but are disabled.

```jsx
import * as React from 'react';
import { useRef } from 'react';
import { PptxEditorComponent, Inject, Magnification, Toolbar } from '@syncfusion/ej2-react-pptxeditor';

function App() {
    const pptxEditor = useRef<PptxEditorComponent | null>(null);
    const disableZoom = () => {
        if (pptxEditor.current) {
            pptxEditor.current.enableMagnification = false;
        }
    };
    const enableZoom = () => {
        if (pptxEditor.current) {
            pptxEditor.current.enableMagnification = true;
        }
    };
    return (
        <div className="control-pane">
            <button onClick={disableZoom}>Disable zoom</button>
            <button onClick={enableZoom}>Enable zoom</button>
            <PptxEditorComponent ref={pptxEditor} enableMagnification={true}>
                <Inject services={[Magnification, Toolbar]} />
            </PptxEditorComponent>
        </div>
    );
}
export default App;
```

While `enableMagnification` is `false`, `setZoom`, `zoomIn`, `zoomOut`, `zoomTo100`, `fitToWindow`, and `fitWidth` do nothing. The `Magnification` module must stay injected if you turn zooming back on.

## Notes

* Zoom percentage is clamped to 10-400.
* Status-bar **-** and **+** step by 10 percentage points. The slider uses the snap levels 25, 50, 75, 100, 125, 150, 200, 300, and 400.
* `fitToWindow` fits the whole slide. `fitWidth` fits the slide width and keeps the aspect ratio.
* Ribbon zoom commands require the injected `Toolbar` module and `enableToolbar` set to `true`, in addition to `Magnification`.
* Without the injected `Magnification` module, every zoom API does nothing.
