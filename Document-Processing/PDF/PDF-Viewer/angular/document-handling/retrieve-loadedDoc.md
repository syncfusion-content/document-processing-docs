---
layout: post
title: Retrieve the Loaded Document in Angular PDF Viewer | syncfusion
description: Learn how to access the loaded PDF document instance in the Angular PDF Viewer using ViewChild and the documentLoad event.
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Retrieve the Loaded Document Instance in Angular PDF Viewer

This page explains how to access the Angular PDF Viewer instance using Angular's `@ViewChild` decorator, listen for the [`documentLoad`](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/index-default#documentload) life-cycle event, and retrieve document information, page details, and metadata—so you can safely invoke viewer APIs after the PDF is loaded.

## Explanation: Why access the loaded document instance?

- The viewer instance (via **Angular ViewChild**) gives you a stable handle to call APIs such as [`zoom`](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/angular/magnification), [`print`](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/angular/print), [`download`](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/angular/download), and [`navigation`](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/angular/navigation).
- The **document load event** (fires after the PDF is parsed and pages are ready) is the correct moment to read **document information** (title, author, page count, etc.) and **page metrics**, and to trigger post‑load UI logic.
- Accessing the instance too early (before load completes) may cause null/undefined errors or incomplete information.

## Reference: What you can access/call after load

After the PDF is loaded you can:

- **Read document information**: title, author, subject, keywords (metadata), page count.
- **Read page details**: total pages, current page, page size(s).
- **Call Viewer APIs** (typical examples):
  - **Zoom / Fit**: `zoomTo(125)`; fit to page/width
  - **Navigation**: go to a specific page
  - **Interactions**: enable/disable features (based on injected services)
  - **Export**: `download()`, `print()`

> Always invoke these after the `documentLoad` event fires, or from user actions that occur after load. Guard calls with optional chaining or readiness flags.

## How‑to: Get the instance with a ref and read details on load

Below is a focused snippet showing:
1) Creating a **ref** for the viewer,
2) Wiring the **`documentLoad`** event, and
3) Reading basic **document info** and **page count**, then calling **viewer APIs** safely.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}
import { Component, AfterViewInit, ViewChild } from '@angular/core';
import {
  ToolbarService,
  MagnificationService,
  NavigationService,
  PrintService,
  PdfViewerModule,
} from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PdfViewerModule],
  template: `
    <div class="control-section">
      <ejs-pdfviewer
        #pdfViewer
        id="container"
        [resourceUrl]="resourceUrl"
        [documentPath]="document"
        [enableLocalStorage]="true"
        (documentLoad)="onDocumentLoad($event)"
        style="height: 640px; display: block;">
      </ejs-pdfviewer>
    </div>
  `,
  providers: [
    ToolbarService,
    MagnificationService,
    NavigationService,
    PrintService,
  ],
})
export class AppComponent implements AfterViewInit {
  @ViewChild('pdfViewer') public pdfviewer: any;

  public document: string =
    'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
  public resourceUrl: string =
    'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib';

  ngAfterViewInit(): void {
    // Component initialized
  }

  // Fires after the PDF is fully loaded and ready
  onDocumentLoad(args: any): void {
    // 1) Access the component instance
    const viewer = this.pdfviewer;
    if (!viewer) return;

    // 2) Read loaded document details (shape depends on event payload/version)
    console.log('documentLoad args:', args);

    // 3) Call viewer APIs (after load)
    const pageCount =
      (viewer && viewer.pageCount) ||
      (args && args.pageCount) ||
      '(unknown)';
    const documentName = (args && args.documentName) || '(unnamed)';
    console.log(`Loaded: ${documentName}, pages: ${pageCount}`);

    // Safe API calls after load
    viewer.magnification?.zoomTo(200);
    viewer.navigation?.goToPage(5);
  }
}
{% endhighlight %}
{% endtabs %}

**Notes**
- The event name is `documentLoad` (the callback receives load args).
- The exact event args and public methods available on the component may vary with the package version and injected services. Use `console.log(args)` once to see what’s present in your build.
- Always guard calls with optional chaining (e.g., `viewer?.magnification?.zoomTo(125)`).

## Tutorial: End‑to‑End — Read metadata & call APIs after load

This example demonstrates a complete flow:
- Setting up a **viewer ref**
- Subscribing to `documentLoad`
- Extracting **metadata** and **pages**
- Exposing **buttons** to call viewer APIs only after load

{% tabs %}
{% highlight ts tabtitle="Standalone" %}
import { Component, AfterViewInit, ViewChild } from '@angular/core';
import {
  ToolbarService,
  MagnificationService,
  NavigationService,
  PrintService,
  TextSelectionService,
  TextSearchService,
  PdfViewerModule,
} from '@syncfusion/ej2-angular-pdfviewer';

interface DocumentInfo {
  name: string;
  pageCount?: number;
  author?: string;
  title?: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PdfViewerModule],
  template: `
    <div>
      <div style="margin-bottom: 12px;">
        <strong>Status:</strong> {{ ready ? 'Document loaded' : 'Loading…' }}
        <br />
      </div>

      <div style="display: flex; gap: 8px; margin-bottom: 12px; flex-wrap: wrap;">
        <button (click)="zoomTo(100)" [disabled]="!ready">Zoom 100%</button>
        <button (click)="zoomTo(150)" [disabled]="!ready">Zoom 150%</button>
        <button (click)="goTo(1)" [disabled]="!ready">Go to Page 1</button>
        <button (click)="goTo(5)" [disabled]="!ready">Go to Page 5</button>
        <button (click)="printDoc()" [disabled]="!ready">Print</button>
        <button (click)="downloadDoc()" [disabled]="!ready">Download</button>
      </div>

      <div style="height: 80vh;">
        <ejs-pdfviewer
          #pdfViewer
          id="pdfViewer"
          [resourceUrl]="resourceUrl"
          [documentPath]="document"
          (documentLoad)="handleDocumentLoad($event)"
          style="height: 100%; width: 100%;">
        </ejs-pdfviewer>
      </div>
    </div>
  `,
  providers: [
    ToolbarService,
    MagnificationService,
    NavigationService,
    PrintService,
    TextSelectionService,
    TextSearchService,
  ],
})
export class AppComponent implements AfterViewInit {
  @ViewChild('pdfViewer') public pdfviewer: any;

  public document: string =
    'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
  public resourceUrl: string =
    'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib';

  public ready: boolean = false;
  public docInfo: DocumentInfo = {
    name: '',
    pageCount: undefined,
    author: '',
    title: '',
  };

  ngAfterViewInit(): void {
    // Component initialized
  }

  handleDocumentLoad(args: any): void {
    const viewer = this.pdfviewer;
    if (!viewer) return;

    console.log('documentLoad args:', args);

    this.docInfo = {
      name: args?.documentName || '',
      pageCount: (viewer?.pageCount) || (args?.pageCount),
      author: args?.documentInformation?.author || '',
      title: args?.documentInformation?.title || '',
    };

    // Defer just a tick to ensure layout/modules ready before calling APIs
    requestAnimationFrame(() => {
      try {
        if (viewer?.magnification?.zoomTo) {
          viewer.magnification.zoomTo(150); // default zoom after load
        }
        if (viewer?.navigation?.goToPage) {
          const targetPage = 1; // keep within bounds if you want to guard
          if (!this.docInfo.pageCount || targetPage <= this.docInfo.pageCount) {
            viewer.navigation.goToPage(targetPage);
          }
        }
      } catch (e) {
        console.warn('Post-load actions failed:', e);
      } finally {
        this.ready = true;
      }
    });
  }

  // ---- UI action handlers (module APIs) ----
  zoomTo(percent: number): void {
    const viewer = this.pdfviewer;
    try {
      viewer?.magnification?.zoomTo?.(percent);
    } catch (e) {
      console.warn('zoomTo failed:', e);
    }
  }

  goTo(page: number): void {
    const viewer = this.pdfviewer;
    try {
      viewer?.navigation?.goToPage?.(page);
    } catch (e) {
      console.warn('goToPage failed:', e);
    }
  }

  printDoc(): void {
    const viewer = this.pdfviewer;
    try {
      viewer?.print?.print?.();
    } catch (e) {
      console.warn('print failed:', e);
    }
  }

  downloadDoc(): void {
    const viewer = this.pdfviewer;
    try {
      viewer?.download?.();
    } catch (e) {
      console.warn('download failed:', e);
    }
  }
}
{% endhighlight %}
{% endtabs %}

## See also
- Angular PDF Viewer – [API Reference](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/index-default) ([methods](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/index-default#methods), [events](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/index-default#events), [properties](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/index-default#properties))
- Events: [`documentLoad`](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/index-default#documentload) and related argument shape (check your package version)
- [Modules and Services](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/angular/feature-module) (e.g., Magnification, Navigation, Print) — ensure the features you call are injected
