---
layout: post
title: Slide Show in Angular PPTX Editor | Syncfusion
description: Slide Show in Angular PPTX Editor starts a presentation from the beginning, from the current slide, or in Presenter View.
control: SlideShow
platform: document-processing
documentation: ug
domainurl:
---

# Slide Show in Angular PPTX Editor

The Slide Show tab starts a full-screen presentation of the loaded slides. It includes **From Beginning**, **From Current Slide**, and **Presenter View**.

Slide Show is available only when the `SlideShow` module is injected and `enableSlideShow` is `true`. By default, `enableSlideShow` is `true`. If the module is not injected, or `enableSlideShow` is `false`, the Slide Show actions do nothing. They also do nothing when no presentation is loaded.

N> Slides are rendered as HTML, CSS, and SVG. Slide transitions and animations are not played.

## From Beginning

**From Beginning** starts the presentation at the first slide. You can also press `F5`.

The following example injects the `SlideShow` module and starts the presentation from the first slide after the presentation is created.

```ts
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { PptxEditorComponent, SlideShowService } from '@syncfusion/ej2-angular-pptxeditor';

@Component({
    standalone: true,
    selector: 'app-container',
    template: `<ejs-pptxeditor #pptx_editor id="pptx-editor" height="590px" style="display:block" [enableSlideShow]="true" documentPath="https://document.syncfusion.com/content/pptxeditor-resources/Sample.pptx" (created)="onCreated()"></ejs-pptxeditor>`,
    encapsulation: ViewEncapsulation.None,
    providers: [SlideShowService]
})
export class AppComponent {
    @ViewChild('pptx_editor')
    public pptxEditor?: PptxEditorComponent;

    public onCreated(): void {
        setTimeout(() => {
            this.pptxEditor?.startSlideShowFromBeginning();
        }, 1000);
    }
}
```

```ts
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import 'zone.js';
bootstrapApplication(AppComponent).catch((err) => console.error(err));
```

## From Current Slide

**From Current Slide** starts the presentation at the slide that is currently selected in the editor. You can also press `Shift+F5`.

```ts
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { PptxEditorComponent, SlideShowService } from '@syncfusion/ej2-angular-pptxeditor';

@Component({
    standalone: true,
    selector: 'app-container',
    template: `<ejs-pptxeditor #pptx_editor id="pptx-editor" height="590px" style="display:block" [enableSlideShow]="true" documentPath="https://document.syncfusion.com/content/pptxeditor-resources/Sample.pptx" (created)="onCreated()"></ejs-pptxeditor>`,
    encapsulation: ViewEncapsulation.None,
    providers: [SlideShowService]
})
export class AppComponent {
    @ViewChild('pptx_editor')
    public pptxEditor?: PptxEditorComponent;

    public onCreated(): void {
        setTimeout(() => {
            this.pptxEditor?.startSlideShowFromCurrent();
        }, 1000);
    }
}
```

```ts
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import 'zone.js';
bootstrapApplication(AppComponent).catch((err) => console.error(err));
```

## Presenter View

**Presenter View** opens the presenter panel for the running presentation. If a presentation is not already running, the editor starts one from the current slide and then opens Presenter View.

Presenter View shows the current slide, the next slide, speaker notes when they are available, a timer, and the slide counter. It also provides previous, next, and jump actions. Closing Presenter View keeps the presentation running.

N> Presenter View is an in-page panel. It does not open a separate window.

```ts
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { PptxEditorComponent, SlideShowService } from '@syncfusion/ej2-angular-pptxeditor';

@Component({
    standalone: true,
    selector: 'app-container',
    template: `<ejs-pptxeditor #pptx_editor id="pptx-editor" height="590px" style="display:block" [enableSlideShow]="true" documentPath="https://document.syncfusion.com/content/pptxeditor-resources/Sample.pptx" (created)="onCreated()"></ejs-pptxeditor>`,
    encapsulation: ViewEncapsulation.None,
    providers: [SlideShowService]
})
export class AppComponent {
    @ViewChild('pptx_editor')
    public pptxEditor?: PptxEditorComponent;

    public onCreated(): void {
        setTimeout(() => {
            this.pptxEditor?.startPresenterView();
        }, 1000);
    }
}
```

```ts
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import 'zone.js';
bootstrapApplication(AppComponent).catch((err) => console.error(err));
```

## Keyboard shortcuts

| Action | Shortcut |
| --- | --- |
| From Beginning | `F5` |
| From Current Slide | `Shift+F5` |
| Next slide | `Space`, `Enter`, `Right`, `Down`, or `PageDown` |
| Previous slide | `Left`, `Up`, `Backspace`, or `PageUp` |
| Exit | `Esc` |

You can also move to the next slide by clicking or tapping the slide. Moving the mouse shows the slide show controls, including Presenter View and Exit.
