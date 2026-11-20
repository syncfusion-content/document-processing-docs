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

**From Beginning** starts the presentation at the first slide.

The following example injects the `SlideShow` module and starts the presentation from the first slide after the presentation is created.

```ts
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { PptxEditorComponent, SlideShowService } from '@syncfusion/ej2-angular-pptxeditor';

@Component({
    standalone: true,
    selector: 'app-root',
    template: `
        <ejs-pptxeditor
            #pptx_editor
            id="pptx-editor"
            style="display:block"
            [enableSlideShow]="true"
            documentPath="https://document.syncfusion.com/content/pptxeditor-resources/Sample.pptx"
            (created)="onCreated()">
        </ejs-pptxeditor>
    `,
    encapsulation: ViewEncapsulation.None,
    imports: [PptxEditorComponent],
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

**From Current Slide** starts the presentation at the slide that is currently selected in the editor.

```ts
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { PptxEditorComponent, SlideShowService } from '@syncfusion/ej2-angular-pptxeditor';

@Component({
    standalone: true,
    selector: 'app-root',
    template: `
        <ejs-pptxeditor
            #pptx_editor
            id="pptx-editor"
            style="display:block"
            [enableSlideShow]="true"
            documentPath="https://document.syncfusion.com/content/pptxeditor-resources/Sample.pptx"
            (created)="onCreated()">
        </ejs-pptxeditor>
    `,
    encapsulation: ViewEncapsulation.None,
    imports: [PptxEditorComponent],
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
    selector: 'app-root',
    template: `
        <ejs-pptxeditor
            #pptx_editor
            id="pptx-editor"
            style="display:block"
            [enableSlideShow]="true"
            documentPath="https://document.syncfusion.com/content/pptxeditor-resources/Sample.pptx"
            (created)="onCreated()">
        </ejs-pptxeditor>
    `,
    encapsulation: ViewEncapsulation.None,
    imports: [PptxEditorComponent],
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


## Disable Slide Show

`enableSlideShow` controls whether Slide Show is available. The default value is `true`, so Slide Show works when the `SlideShow` module is injected. Set `enableSlideShow` to `false` to disable it. Slide Show actions then do nothing.

```ts
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { PptxEditorComponent, SlideShowService, ToolbarService } from '@syncfusion/ej2-angular-pptxeditor';

@Component({
    standalone: true,
    selector: 'app-root',
    template: `
        <ejs-pptxeditor
            #pptx_editor
            id="pptx-editor"
            style="display:block"
            [enableSlideShow]="false"
            documentPath="https://document.syncfusion.com/content/pptxeditor-resources/Sample.pptx">
        </ejs-pptxeditor>
    `,
    encapsulation: ViewEncapsulation.None,
    imports: [PptxEditorComponent],
    providers: [SlideShowService, ToolbarService]
})
export class AppComponent {
    @ViewChild('pptx_editor')
    public pptxEditor?: PptxEditorComponent;
}
```
