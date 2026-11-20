---
layout: post
title: Print in Angular PPTX Editor | Syncfusion
description: Print feature in Angular PPTX Editor prints every slide of a loaded presentation through the browser print dialog using HTML, CSS, and SVG.
control: Print
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Print in Angular PPTX Editor

To print the loaded presentation, use the `print` method from the PPTX Editor instance. The method opens a print window that contains every slide, one slide per page, and invokes the browser print dialog.

Printing is available only when the `Print` module is injected and `enablePrint` is `true`. By default, `enablePrint` is `true`. If the module is not injected, or `enablePrint` is `false`, `print()` does nothing. `print()` also does nothing when no presentation is loaded.

N> The PPTX Editor prints slide content only. Speaker notes are not included in the print output.

## Print a loaded presentation

The following example injects the `Print` module, loads a presentation from `documentPath`, and prints it.

```ts
import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import {
    PptxEditorComponent,
    PrintService
} from '@syncfusion/ej2-angular-pptxeditor';

@Component({
    standalone: true,
    selector: 'app-root',
    template: `
    <div>
        <button (click)="onCreated()">Print</button>
        <ejs-pptxeditor
            #pptx_editor
            id="pptx-editor"
            style="display:block"
            [enablePrint]="true"
            documentPath="https://document.syncfusion.com/content/pptxeditor-resources/Sample.pptx">
        </ejs-pptxeditor>
    </div>`,
    encapsulation: ViewEncapsulation.None,
    imports: [PptxEditorComponent],
    providers: [PrintService]
})
export class AppComponent {
    @ViewChild('pptx_editor')
    public pptxEditor?: PptxEditorComponent;

    public onCreated(): void {
        console.log('Created event fired');
        this.pptxEditor?.print();
    }
}

```

```ts
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import 'zone.js';
bootstrapApplication(AppComponent).catch((err) => console.error(err));
```

You can also print from the File menu. When the `Print` module is injected and `enablePrint` is `true`, the File menu includes a **Print** item that calls `print()` for the loaded presentation. The item is disabled when print is not available.

## Disable print

Set `enablePrint` to `false` to hide the print workflow. The File menu **Print** item is disabled, and calling `print()` does nothing.

```ts
import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import {
    PptxEditorComponent,
    PrintService
} from '@syncfusion/ej2-angular-pptxeditor';

@Component({
    standalone: true,
    selector: 'app-root',
    template: `
    <div>
        <button (click)="onCreated()">Print</button>
        <ejs-pptxeditor
            #pptx_editor
            id="pptx-editor"
            style="display:block"
            [enablePrint]="false"
            documentPath="https://document.syncfusion.com/content/pptxeditor-resources/Sample.pptx">
        </ejs-pptxeditor>
    </div>`,
    encapsulation: ViewEncapsulation.None,
    imports: [PptxEditorComponent],
    providers: [PrintService]
})
export class AppComponent {
    @ViewChild('pptx_editor')
    public pptxEditor?: PptxEditorComponent;

    public onCreated(): void {
        console.log('Created event fired');
        this.pptxEditor?.print();
    }
}

```

```ts
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import 'zone.js';
bootstrapApplication(AppComponent).catch((err) => console.error(err));
```

## Print using a window object

You can print the presentation by passing a window instance. This is useful in hosts such as Electron, where a window instance is already available. Open the window from a user action so the browser does not treat it as a blocked popup. If the window cannot be opened, `print()` returns without printing.

```ts
import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import {
    PptxEditorComponent,
    PrintService
} from '@syncfusion/ej2-angular-pptxeditor';

@Component({
    standalone: true,
    selector: 'app-root',
    template: `
    <div>
        <button (click)="onPrint()">Print</button>
        <ejs-pptxeditor
            #pptx_editor
            id="pptx-editor"
            style="display:block"
            [enablePrint]="true"
            documentPath="https://document.syncfusion.com/content/pptxeditor-resources/Sample.pptx">
        </ejs-pptxeditor>
    </div>`,
    encapsulation: ViewEncapsulation.None,
    imports: [PptxEditorComponent],
    providers: [PrintService]
})
export class AppComponent {
    @ViewChild('pptx_editor')
    public pptxEditor?: PptxEditorComponent;

    public onPrint(): void {
        let printWindow: Window | null = window.open('', 'print', 'height=452,width=1024,tabbar=no');
        if (printWindow) {
            this.pptxEditor?.print(printWindow);
        }
    }
}

```

```ts
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import 'zone.js';
bootstrapApplication(AppComponent).catch((err) => console.error(err));
```
