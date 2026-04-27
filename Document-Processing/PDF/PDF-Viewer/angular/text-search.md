---
layout: post
title: Text search in Angular PDF Viewer component | Syncfusion
description: Learn here all about Text search in Syncfusion Angular PDF Viewer component of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Text search
documentation: ug
domainurl: ##DomainURL##
---
# Text Search in Angular PDF Viewer component

The Text Search option in the PDF Viewer finds and highlights matching text within a document. Enable or disable text search using the example code snippets below.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}

import { Component, OnInit } from '@angular/core';
import { LinkAnnotationService, BookmarkViewService, MagnificationService,
         ThumbnailViewService, ToolbarService, NavigationService,
         TextSearchService, AnnotationService, TextSelectionService,
         PrintService
       } from '@syncfusion/ej2-angular-pdfviewer';
@Component({
  selector: 'app-container',
  // specifies the template string for the PDF Viewer component
  template: `<div class="content-wrapper">
                <ejs-pdfviewer id="pdfViewer"
                              [documentPath]='document'
                              [enableTextSearch]='true'
                              style="height:640px;display:block">
                </ejs-pdfviewer>
            </div>`,
  providers: [ LinkAnnotationService, BookmarkViewService, MagnificationService,
               ThumbnailViewService, ToolbarService, NavigationService,
               AnnotationService, TextSearchService, TextSelectionService,
               PrintService]
  })
  export class AppComponent implements OnInit {
      public document = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
  }

{% endhighlight %}

{% highlight ts tabtitle="Server-Backed" %}

import { Component, OnInit } from '@angular/core';
import { LinkAnnotationService, BookmarkViewService, MagnificationService,
         ThumbnailViewService, ToolbarService, NavigationService,
         TextSearchService, AnnotationService, TextSelectionService,
         PrintService
       } from '@syncfusion/ej2-angular-pdfviewer';
@Component({
  selector: 'app-container',
  // specifies the template string for the PDF Viewer component
  template: `<div class="content-wrapper">
                <ejs-pdfviewer id="pdfViewer"
                              [serviceUrl]='service'
                              [documentPath]='document'
                              [enableTextSearch]='true'
                              style="height:640px;display:block">
                </ejs-pdfviewer>
            </div>`,
  providers: [ LinkAnnotationService, BookmarkViewService, MagnificationService,
               ThumbnailViewService, ToolbarService, NavigationService,
               AnnotationService, TextSearchService, TextSelectionService,
               PrintService]
  })
  export class AppComponent implements OnInit {
      public service = 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer';
      public document = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
  }

{% endhighlight %}
{% endtabs %}

## Text search Features

### Real time search suggestion while typing
Typing into the search input displays real-time suggestions that update as characters are entered, helping users discover matches quickly.

![Search suggestion popup while typing](./images/SingleSearchPopup.png)

### Selecting Search Suggestions from the Popup
Selecting a suggestion from the popup navigates directly to its occurrences in the document.

![Selecting a suggestion from the search popup](./images/SearchResultFromPopup.png)

### Search Text with enabling 'Match Case' checkbox
With the 'Match Case' option enabled, only exact case-sensitive matches are highlighted and navigable.

![Match Case enabled highlights exact-case matches](./images/SearchNavigationMatchCase.png)

### Search Text without enabling 'Match Case' checkbox
When 'Match Case' is disabled, matches are found regardless of letter case, highlighting all occurrences of the search term.

![Case-insensitive search highlighting](./images/SearchNavigationNoMatchCase.png)

### Search list of text by enabling 'Match Any Word' checkbox
When 'Match Any Word' is enabled, the input is split into words and suggestions are shown for each word, enabling matches for any individual term.

![Search suggestions for multiple words](./images/MultiSearchPopup.png)

The following text search methods are available in the PDF Viewer:

* [**Search text**](https://ej2.syncfusion.com/documentation/api/pdfviewer/textSearch/#searchtext):- Searches the target text in the PDF document and highlights occurrences in the pages.
* [**Search next**](https://ej2.syncfusion.com/documentation/api/pdfviewer/textSearch/#searchnext):- Navigates to the next occurrence of the searched text.
* [**Search previous**](https://ej2.syncfusion.com/documentation/api/pdfviewer/textSearch/#searchprevious):- Navigates to the previous occurrence of the searched text.
* [**Cancel text search**](https://ej2.syncfusion.com/documentation/api/pdfviewer/textSearch/#canceltextsearch):- Cancels the ongoing search and removes highlighted occurrences.

![Search navigation controls](images/search.png)

## Find text method
The `findText` method searches for a string or an array of strings and returns the bounding rectangles for each match. Searches can be case-sensitive and may be restricted to a single page when a `pageIndex` is provided; otherwise, results span all pages where matches occur.

### Find and get the bounds of a text
Searches for the specified text within the document and returns the bounding rectangles of the matched text. The search can be case-sensitive based on the provided parameter. It returns the bounding rectangles for all pages in the document where the text was found. The below code snippet shows how to get the bounds of the given text:

{% tabs %}
{% highlight ts tabtitle="Standalone" %}

```ts
import { Component, OnInit } from "@angular/core";
import {
  LinkAnnotationService,
  BookmarkViewService,
  MagnificationService,
  ThumbnailViewService,
  ToolbarService,
  NavigationService,
  AnnotationService,
  TextSearchService,
  TextSelectionService,
  PrintService,
  FormFieldsService,
  FormDesignerService,
} from "@syncfusion/ej2-angular-pdfviewer";

@Component({
  selector: "app-root",
  // specifies the template string for the PDF Viewer component
  template: `<div class="content-wrapper">
    <button #btn1 (click)="textBounds()">Text Bounds</button>
    <ejs-pdfviewer
      id="pdfViewer"
      [serviceUrl]="service"
      [documentPath]="document"
      style="height:640px;display:block"
    ></ejs-pdfviewer>
  </div>`,
  providers: [
    LinkAnnotationService,
    BookmarkViewService,
    MagnificationService,
    ThumbnailViewService,
    ToolbarService,
    NavigationService,
    AnnotationService,
    TextSearchService,
    TextSelectionService,
    PrintService,
    FormFieldsService,
    FormDesignerService,
  ],
})
export class AppComponent implements OnInit {
  public document = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
  ngOnInit(): void {}

  textBounds() {
    let viewer = (<any>document.getElementById("pdfViewer")).ej2_instances[0];
    console.log(viewer.textSearch.findText('pdf', false));
  }
}
```
{% endhighlight %}
{% highlight ts tabtitle="Server-backed" %}

```ts
import { Component, OnInit } from "@angular/core";
import {
  LinkAnnotationService,
  BookmarkViewService,
  MagnificationService,
  ThumbnailViewService,
  ToolbarService,
  NavigationService,
  AnnotationService,
  TextSearchService,
  TextSelectionService,
  PrintService,
  FormFieldsService,
  FormDesignerService,
} from "@syncfusion/ej2-angular-pdfviewer";

@Component({
  selector: "app-root",
  // specifies the template string for the PDF Viewer component
  template: `<div class="content-wrapper">
    <button #btn1 (click)="textBounds()">Text Bounds</button>
    <ejs-pdfviewer
      id="pdfViewer"
      [serviceUrl]="service"
      [documentPath]="document"
      style="height:640px;display:block"
    ></ejs-pdfviewer>
  </div>`,
  providers: [
    LinkAnnotationService,
    BookmarkViewService,
    MagnificationService,
    ThumbnailViewService,
    ToolbarService,
    NavigationService,
    AnnotationService,
    TextSearchService,
    TextSelectionService,
    PrintService,
    FormFieldsService,
    FormDesignerService,
  ],
})
export class AppComponent implements OnInit {
  public service =
    "https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer";
  public document = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
  ngOnInit(): void {}

  textBounds() {
    let viewer = (<any>document.getElementById("pdfViewer")).ej2_instances[0];
    console.log(viewer.textSearch.findText('pdf', false));
  }
}
```
{% endhighlight %}
{% endtabs %}

### Find and get the bounds of a text on the desired page
Searches for the specified text within the document and returns the bounding rectangles of the matched text. The search can be case-sensitive based on the provided parameter. It returns the bounding rectangles for that page in the document where the text was found. The below code snippet shows how to get the bounds of the given text from the desired page:

{% tabs %}
{% highlight ts tabtitle="Standalone" %}

```ts
import { Component, OnInit } from "@angular/core";
import {
  LinkAnnotationService,
  BookmarkViewService,
  MagnificationService,
  ThumbnailViewService,
  ToolbarService,
  NavigationService,
  AnnotationService,
  TextSearchService,
  TextSelectionService,
  PrintService,
  FormFieldsService,
  FormDesignerService,
} from "@syncfusion/ej2-angular-pdfviewer";

@Component({
  selector: "app-root",
  // specifies the template string for the PDF Viewer component
  template: `<div class="content-wrapper">
    <button #btn1 (click)="textBounds()">Text Bounds</button>
    <ejs-pdfviewer
      id="pdfViewer"
      [serviceUrl]="service"
      [documentPath]="document"
      style="height:640px;display:block"
    ></ejs-pdfviewer>
  </div>`,
  providers: [
    LinkAnnotationService,
    BookmarkViewService,
    MagnificationService,
    ThumbnailViewService,
    ToolbarService,
    NavigationService,
    AnnotationService,
    TextSearchService,
    TextSelectionService,
    PrintService,
    FormFieldsService,
    FormDesignerService,
  ],
})
export class AppComponent implements OnInit {
  public document = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
  ngOnInit(): void {}

  textBounds() {
    let viewer = (<any>document.getElementById("pdfViewer")).ej2_instances[0];
    console.log(viewer.textSearch.findText('pdf', false, 7));
  }
}
```
{% endhighlight %}
{% highlight ts tabtitle="Server-backed" %}

```ts
import { Component, OnInit } from "@angular/core";
import {
  LinkAnnotationService,
  BookmarkViewService,
  MagnificationService,
  ThumbnailViewService,
  ToolbarService,
  NavigationService,
  AnnotationService,
  TextSearchService,
  TextSelectionService,
  PrintService,
  FormFieldsService,
  FormDesignerService,
} from "@syncfusion/ej2-angular-pdfviewer";

@Component({
  selector: "app-root",
  // specifies the template string for the PDF Viewer component
  template: `<div class="content-wrapper">
    <button #btn1 (click)="textBounds()">Text Bounds</button>
    <ejs-pdfviewer
      id="pdfViewer"
      [serviceUrl]="service"
      [documentPath]="document"
      style="height:640px;display:block"
    ></ejs-pdfviewer>
  </div>`,
  providers: [
    LinkAnnotationService,
    BookmarkViewService,
    MagnificationService,
    ThumbnailViewService,
    ToolbarService,
    NavigationService,
    AnnotationService,
    TextSearchService,
    TextSelectionService,
    PrintService,
    FormFieldsService,
    FormDesignerService,
  ],
})
export class AppComponent implements OnInit {
  public service =
    "https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer";
  public document = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
  ngOnInit(): void {}

  textBounds() {
    let viewer = (<any>document.getElementById("pdfViewer")).ej2_instances[0];
    console.log(viewer.textSearch.findText('pdf', false, 7));
  }
}
```
{% endhighlight %}
{% endtabs %}

### Find and get the bounds of the list of text
Searches for an array of strings within the document and returns the bounding rectangles for each occurrence. The search can be case-sensitive based on the provided parameters. It returns the bounding rectangles for all pages in the document where the strings were found.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}

```ts
import { Component, OnInit } from "@angular/core";
import {
  LinkAnnotationService,
  BookmarkViewService,
  MagnificationService,
  ThumbnailViewService,
  ToolbarService,
  NavigationService,
  AnnotationService,
  TextSearchService,
  TextSelectionService,
  PrintService,
  FormFieldsService,
  FormDesignerService,
} from "@syncfusion/ej2-angular-pdfviewer";

@Component({
  selector: "app-root",
  // specifies the template string for the PDF Viewer component
  template: `<div class="content-wrapper">
    <button #btn1 (click)="textBounds()">Text Bounds</button>
    <ejs-pdfviewer
      id="pdfViewer"
      [serviceUrl]="service"
      [documentPath]="document"
      style="height:640px;display:block"
    ></ejs-pdfviewer>
  </div>`,
  providers: [
    LinkAnnotationService,
    BookmarkViewService,
    MagnificationService,
    ThumbnailViewService,
    ToolbarService,
    NavigationService,
    AnnotationService,
    TextSearchService,
    TextSelectionService,
    PrintService,
    FormFieldsService,
    FormDesignerService,
  ],
})
export class AppComponent implements OnInit {
  public document = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
  ngOnInit(): void {}

  textBounds() {
    let viewer = (<any>document.getElementById("pdfViewer")).ej2_instances[0];
    console.log(viewer.textSearch.findText(['pdf', 'adobe'], false));
  }
}
```
{% endhighlight %}
{% highlight ts tabtitle="Server-backed" %}

```ts
import { Component, OnInit } from "@angular/core";
import {
  LinkAnnotationService,
  BookmarkViewService,
  MagnificationService,
  ThumbnailViewService,
  ToolbarService,
  NavigationService,
  AnnotationService,
  TextSearchService,
  TextSelectionService,
  PrintService,
  FormFieldsService,
  FormDesignerService,
} from "@syncfusion/ej2-angular-pdfviewer";

@Component({
  selector: "app-root",
  // specifies the template string for the PDF Viewer component
  template: `<div class="content-wrapper">
    <button #btn1 (click)="textBounds()">Text Bounds</button>
    <ejs-pdfviewer
      id="pdfViewer"
      [serviceUrl]="service"
      [documentPath]="document"
      style="height:640px;display:block"
    ></ejs-pdfviewer>
  </div>`,
  providers: [
    LinkAnnotationService,
    BookmarkViewService,
    MagnificationService,
    ThumbnailViewService,
    ToolbarService,
    NavigationService,
    AnnotationService,
    TextSearchService,
    TextSelectionService,
    PrintService,
    FormFieldsService,
    FormDesignerService,
  ],
})
export class AppComponent implements OnInit {
  public service =
    "https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer";
  public document = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
  ngOnInit(): void {}

  textBounds() {
    let viewer = (<any>document.getElementById("pdfViewer")).ej2_instances[0];
    console.log(viewer.textSearch.findText(['pdf', 'adobe'], false));
  }
}
```
{% endhighlight %}
{% endtabs %}

### Find and get the bounds of the list of text on desired page
Searches for an array of strings within the document and returns the bounding rectangles for each occurrence. The search can be case-sensitive based on the provided parameters. It returns the bounding rectangles for these search strings on that particular page where the strings were found.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}

```ts
import { Component, OnInit } from "@angular/core";
import {
  LinkAnnotationService,
  BookmarkViewService,
  MagnificationService,
  ThumbnailViewService,
  ToolbarService,
  NavigationService,
  AnnotationService,
  TextSearchService,
  TextSelectionService,
  PrintService,
  FormFieldsService,
  FormDesignerService,
} from "@syncfusion/ej2-angular-pdfviewer";

@Component({
  selector: "app-root",
  // specifies the template string for the PDF Viewer component
  template: `<div class="content-wrapper">
    <button #btn1 (click)="textBounds()">Text Bounds</button>
    <ejs-pdfviewer
      id="pdfViewer"
      [serviceUrl]="service"
      [documentPath]="document"
      style="height:640px;display:block"
    ></ejs-pdfviewer>
  </div>`,
  providers: [
    LinkAnnotationService,
    BookmarkViewService,
    MagnificationService,
    ThumbnailViewService,
    ToolbarService,
    NavigationService,
    AnnotationService,
    TextSearchService,
    TextSelectionService,
    PrintService,
    FormFieldsService,
    FormDesignerService,
  ],
})
export class AppComponent implements OnInit {
  public document = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
  ngOnInit(): void {}

  textBounds() {
    let viewer = (<any>document.getElementById("pdfViewer")).ej2_instances[0];
    console.log(viewer.textSearch.findText(['pdf', 'adobe'], false, 7));
  }
}
```
{% endhighlight %}
{% highlight ts tabtitle="Server-backed" %}

```ts
import { Component, OnInit } from "@angular/core";
import {
  LinkAnnotationService,
  BookmarkViewService,
  MagnificationService,
  ThumbnailViewService,
  ToolbarService,
  NavigationService,
  AnnotationService,
  TextSearchService,
  TextSelectionService,
  PrintService,
  FormFieldsService,
  FormDesignerService,
} from "@syncfusion/ej2-angular-pdfviewer";

@Component({
  selector: "app-root",
  // specifies the template string for the PDF Viewer component
  template: `<div class="content-wrapper">
    <button #btn1 (click)="textBounds()">Text Bounds</button>
    <ejs-pdfviewer
      id="pdfViewer"
      [serviceUrl]="service"
      [documentPath]="document"
      style="height:640px;display:block"
    ></ejs-pdfviewer>
  </div>`,
  providers: [
    LinkAnnotationService,
    BookmarkViewService,
    MagnificationService,
    ThumbnailViewService,
    ToolbarService,
    NavigationService,
    AnnotationService,
    TextSearchService,
    TextSelectionService,
    PrintService,
    FormFieldsService,
    FormDesignerService,
  ],
})
export class AppComponent implements OnInit {
  public service =
    "https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer";
  public document = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
  ngOnInit(): void {}

  textBounds() {
    let viewer = (<any>document.getElementById("pdfViewer")).ej2_instances[0];
    console.log(viewer.textSearch.findText(['pdf', 'adobe'], false, 7));
  }
}
```
{% endhighlight %}
{% endtabs %}

[View sample in GitHub](https://github.com/SyncfusionExamples/angular-pdf-viewer-examples/tree/master/How%20to/TextSearch)

## See also

* [Toolbar items](./toolbar)
* [Feature Modules](./feature-module)