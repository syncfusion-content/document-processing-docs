---
layout: post
title: Slide Show in React PPTX Editor | Syncfusion
description: Slide Show in React PPTX Editor starts a presentation from the beginning, from the current slide, or in Presenter View.
control: SlideShow
platform: document-processing
documentation: ug
domainurl:
---

# Slide Show in React PPTX Editor

The Slide Show tab starts a full-screen presentation of the loaded slides. It includes **From Beginning**, **From Current Slide**, and **Presenter View**. The same options are available in the **Present** dropdown.

Slide Show is available only when the `SlideShow` module is injected and `enableSlideShow` is `true`. By default, `enableSlideShow` is `true`. If the module is not injected, or `enableSlideShow` is `false`, the Slide Show actions do nothing. They also do nothing when no presentation is loaded.

N> Slides are rendered as HTML, CSS, and SVG. Slide transitions and animations are not played.

## From Beginning

**From Beginning** starts the presentation at the first slide.

The following example injects the `SlideShow` module and starts the presentation from the first slide after the presentation is created.

```tsx
import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { PptxEditorComponent, SlideShow } from '@syncfusion/ej2-react-pptxeditor';

PptxEditorComponent.Inject(SlideShow);

function App() {
    let editor: PptxEditorComponent;
    function onCreated(): void {
        setTimeout(() => {
        editor.startSlideShowFromBeginning();
    }, 1000);
    }
    return (
        <PptxEditorComponent
            id="pptx-editor"
            ref={(scope: PptxEditorComponent) => { editor = scope; }}
            documentPath="https://document.syncfusion.com/content/pptxeditor-resources/Sample.pptx"
            enableSlideShow={true}
            created={onCreated}
        />
    );
}
export default App;
createRoot(document.getElementById('sample')).render(<App />);
```

## From Current Slide

**From Current Slide** starts the presentation at the slide that is currently selected in the editor.

```tsx
import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { PptxEditorComponent, SlideShow } from '@syncfusion/ej2-react-pptxeditor';

PptxEditorComponent.Inject(SlideShow);

function App() {
    let editor: PptxEditorComponent;
    function startFromCurrent(): void {
         setTimeout(() => {
        editor.startSlideShowFromCurrent();
    }, 1000);
    }
    return (
            <PptxEditorComponent
                id="pptx-editor"
                ref={(scope: PptxEditorComponent) => { editor = scope; }}
                documentPath="https://document.syncfusion.com/content/pptxeditor-resources/Sample.pptx"
                enableSlideShow={true}
            />
    );
}
export default App;
createRoot(document.getElementById('sample')).render(<App />);
```

## Presenter View

**Presenter View** opens the presenter panel for the running presentation. If a presentation is not already running, the editor starts one from the current slide and then opens Presenter View.

Presenter View shows the current slide, the next slide, speaker notes when they are available, a timer, and the slide counter. It also provides previous, next, and jump actions. Closing Presenter View keeps the presentation running.

N> Presenter View is an in-page panel. It does not open a separate window.

```tsx
import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { PptxEditorComponent, SlideShow } from '@syncfusion/ej2-react-pptxeditor';

PptxEditorComponent.Inject(SlideShow);

function App() {
    let editor: PptxEditorComponent;
    function openPresenterView(): void {
        setTimeout(() => {
        editor.startPresenterView();
    }, 1000);
    }
    return (
            <PptxEditorComponent
                id="pptx-editor"
                ref={(scope: PptxEditorComponent) => { editor = scope; }}
                documentPath="https://document.syncfusion.com/content/pptxeditor-resources/Sample.pptx"
                enableSlideShow={true}
            />
    );
}
export default App;
createRoot(document.getElementById('sample')).render(<App />);
```


## Present Dropdown

The **Present** dropdown in the Slide Show toolbar provides the same three options: **From Beginning**, **From Current Slide**, and **Presenter View**.

## Enable or Disable Slide Show

The following example demonstrates how to disable the slide show. `enableSlideShow` controls whether Slide Show is available. The default value is `true`, so Slide Show works when the `SlideShow` module is injected. Set `enableSlideShow` to `false` to disable it. Slide Show actions then do nothing.

```tsx
import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { PptxEditorComponent, SlideShow } from '@syncfusion/ej2-react-pptxeditor';

PptxEditorComponent.Inject(SlideShow);

function App() {
    return (
        <PptxEditorComponent
            id="pptx-editor"
            documentPath="https://document.syncfusion.com/content/pptxeditor-resources/Sample.pptx"
            enableSlideShow={false}
        />
    );
}
export default App;
createRoot(document.getElementById('sample')).render(<App />);
```
