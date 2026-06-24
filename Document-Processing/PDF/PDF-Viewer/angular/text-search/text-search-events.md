---
layout: post
title: Text search Events in Angular PDF Viewer control | Syncfusion
description: Learn how to handle text search events, and run programmatic searches in the Syncfusion Angular PDF Viewer.
platform: document-processing
control: Text search
documentation: ug
domainurl: ##DomainURL##
---

# Text Search Events in Angular PDF Viewer

The Angular PDF Viewer triggers events during text search operations, allowing you to customize behavior and respond to different stages of the search process.

## textSearchStart

The [textSearchStart](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer#textsearchstart) event fires as soon as a search begins from the toolbar interface or through the [`textSearch.searchText`](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/textsearch#searchtext) method. Use to reset UI state, log analytics, or cancel the default search flow before results are processed.

- Event arguments: [TextSearchStartEventArgs](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/textSearchStartEventArgs) exposes:
  - `searchText`: the term being searched.
  - `matchCase`: indicates whether case-sensitive search is enabled.
  - `name`: event name.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}
import { Component, ViewChild } from '@angular/core';
import {
  PdfViewerComponent,
  PdfViewerModule,
  ToolbarService,
  NavigationService,
  TextSearchService,
  TextSelectionService,
  PrintService,
  MagnificationService,
  AnnotationService,
  FormDesignerService,
  FormFieldsService,
  PageOrganizerService,
  type TextSearchStartEventArgs,
} from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PdfViewerModule],
  providers: [
    ToolbarService,
    NavigationService,
    TextSearchService,
    TextSelectionService,
    PrintService,
    MagnificationService,
    AnnotationService,
    FormDesignerService,
    FormFieldsService,
    PageOrganizerService,
  ],
  template: `
    <ejs-pdfviewer
      #pdfviewer
      id="PdfViewer"
      [documentPath]="document"
      [resourceUrl]="resource"
      (textSearchStart)="onTextSearchStart($event)"
      style="height: 100%; width: 100%; display: block"
    >
    </ejs-pdfviewer>
  `,
})
export class AppComponent {
  @ViewChild('pdfviewer')
  public pdfviewerObj!: PdfViewerComponent;

  public document: string =
    'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';

  public resource: string =
    'https://cdn.syncfusion.com/ej2/32.2.3/dist/ej2-pdfviewer-lib';

  onTextSearchStart(args: TextSearchStartEventArgs): void {
    console.log(`Text search started for: "${args.searchText}"`);
  }
}
{% endhighlight %}
{% endtabs %}

## textSearchHighlight

The [textSearchHighlight](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer#textsearchhighlight) event triggers whenever a search result is brought into view, including navigation between matches. Use to draw custom overlays or synchronize adjacent UI elements when a match is highlighted.

- Event arguments: [TextSearchHighlightEventArgs](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/textSearchHighlightEventArgs) exposes:
  - `bounds`: `RectangleBoundsModel` representing the highlighted match.
  - `pageNumber`: page index where the match is highlighted.
  - `searchText`: the active search term.
  - `matchCase`: indicates whether case-sensitive search was used.
  - `name`: event name.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}
import { Component, ViewChild } from '@angular/core';
import {
  PdfViewerComponent,
  PdfViewerModule,
  ToolbarService,
  NavigationService,
  TextSearchService,
  TextSelectionService,
  PrintService,
  MagnificationService,
  AnnotationService,
  FormDesignerService,
  FormFieldsService,
  PageOrganizerService,
  type TextSearchHighlightEventArgs,
} from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PdfViewerModule],
  providers: [
    ToolbarService,
    NavigationService,
    TextSearchService,
    TextSelectionService,
    PrintService,
    MagnificationService,
    AnnotationService,
    FormDesignerService,
    FormFieldsService,
    PageOrganizerService,
  ],
  template: `
    <ejs-pdfviewer
      #pdfviewer
      id="PdfViewer"
      [documentPath]="document"
      [resourceUrl]="resource"
      (textSearchHighlight)="onTextSearchHighlight($event)"
      style="height: 100%; width: 100%; display: block"
    >
    </ejs-pdfviewer>
  `,
})
export class AppComponent {
  @ViewChild('pdfviewer')
  public pdfviewerObj!: PdfViewerComponent;

  public document: string =
    'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';

  public resource: string =
    'https://cdn.syncfusion.com/ej2/32.2.3/dist/ej2-pdfviewer-lib';

  onTextSearchHighlight(args: TextSearchHighlightEventArgs): void {
    console.log('Highlighted match bounds:', args.bounds);
  }
}
{% endhighlight %}
{% endtabs %}

## textSearchComplete

The [textSearchComplete](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer#textsearchcomplete) event runs after the search engine finishes scanning the document for the current query. Use to update match counts, toggle navigation controls, or notify users when no results were found.

- **Typical uses**:
  - Update UI with the total number of matches and enable navigation controls.
  - Hide loading indicators or show a "no results" message if none were found.
  - Record analytics for search effectiveness.
- **Event arguments**: [TextSearchCompleteEventArgs](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/textSearchCompleteEventArgs) exposes:
  - `searchText`: the searched term.
  - `matchCase`: indicates whether case-sensitive search was used.
  - `name`: event name.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}
import { Component, ViewChild } from '@angular/core';
import {
  PdfViewerComponent,
  PdfViewerModule,
  ToolbarService,
  NavigationService,
  TextSearchService,
  TextSelectionService,
  PrintService,
  MagnificationService,
  AnnotationService,
  FormDesignerService,
  FormFieldsService,
  PageOrganizerService,
  type TextSearchCompleteEventArgs,
} from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PdfViewerModule],
  providers: [
    ToolbarService,
    NavigationService,
    TextSearchService,
    TextSelectionService,
    PrintService,
    MagnificationService,
    AnnotationService,
    FormDesignerService,
    FormFieldsService,
    PageOrganizerService,
  ],
  template: `
    <ejs-pdfviewer
      #pdfviewer
      id="PdfViewer"
      [documentPath]="document"
      [resourceUrl]="resource"
      (textSearchComplete)="onTextSearchComplete($event)"
      style="height: 100%; width: 100%; display: block"
    >
    </ejs-pdfviewer>
  `,
})
export class AppComponent {
  @ViewChild('pdfviewer')
  public pdfviewerObj!: PdfViewerComponent;

  public document: string =
    'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';

  public resource: string =
    'https://cdn.syncfusion.com/ej2/32.2.3/dist/ej2-pdfviewer-lib';

  onTextSearchComplete(args: TextSearchCompleteEventArgs): void {
    console.log('Text search completed.', args);
  }
}
{% endhighlight %}
{% endtabs %}

[View Sample in GitHub](https://github.com/SyncfusionExamples/angular-pdf-viewer-examples)

## See Also

- [Text Search Features](./text-search-features)
- [Find Text](./find-text)
- [Extract Text](../how-to/extract-text)
- [Extract Text Options](../how-to/extract-text-option)
- [Extract Text Completed](../how-to/extract-text-completed)