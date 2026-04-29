---
layout: post
title: Customize context menu in Angular PDF Viewer | Syncfusion
description: Learn here all about how to add and customize custom context menu options in the Angular PDF Viewer using addCustomMenu, and related events.
control: PDF Viewer
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# How to Customize the context menu in PDF Viewer in Angular

The PDF Viewer supports extensive customization of the context menu, including reaching specific goals like adding new items, hiding default options, and handling custom click events.

## Add Custom Context Menu Items

You can add custom options to the context menu using the [addCustomMenu()](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/index-default#addcustommenu) method. This is typically implemented during the [`documentLoad`](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/index-default#documentload) event.

### Implementation Guide

1. Define the menu items as an array of objects.
2. Call the [`addCustomMenu`](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/index-default#addcustommenu) method within the [`documentLoad`](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/index-default#documentload) event handler.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}
import { Component, ViewChild } from '@angular/core';
import {
  PdfViewerComponent,PdfViewerModule,ToolbarService,
  NavigationService,AnnotationService,LinkAnnotationService,
  BookmarkViewService,ThumbnailViewService,PrintService,
  TextSelectionService,TextSearchService,
  FormFieldsService,FormDesignerService,
} from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PdfViewerModule],
  providers: [
    ToolbarService,NavigationService,AnnotationService,
    LinkAnnotationService,BookmarkViewService,ThumbnailViewService,
    PrintService,TextSelectionService,
    TextSearchService,FormFieldsService,
    FormDesignerService,
  ],
  template: `
    <ejs-pdfviewer
      #pdfviewer
      id="PdfViewer"
      [documentPath]="document"
      [resourceUrl]="resource"
      (documentLoad)="documentLoad()"
      (customContextMenuSelect)="customContextMenuSelect($event)"
      (customContextMenuBeforeOpen)="customContextMenuBeforeOpen($event)"
      style="height: 100vh; width: 100%; display: block"
    >
    </ejs-pdfviewer>
  `,
})
export class AppComponent {
  @ViewChild('pdfviewer')
  public pdfviewerObj!: PdfViewerComponent;

  public document = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';

  public resource =
    'https://cdn.syncfusion.com/ej2/32.2.3/dist/ej2-pdfviewer-lib';

  public menuItems = [
    {
      text: 'Search In Google',
      id: 'search_in_google',
      iconCss: 'e-icons e-search',
    },
    {
      text: 'Lock Annotation',
      id: 'lock_annotation',
      iconCss: 'e-icons e-lock',
    },
    {
      text: 'Unlock Annotation',
      id: 'unlock_annotation',
      iconCss: 'e-icons e-unlock',
    },
    {
      text: 'Lock Form Field',
      id: 'read_only_true',
      iconCss: 'e-icons e-lock',
    },
    {
      text: 'Unlock Form Field',
      id: 'read_only_false',
      iconCss: 'e-icons e-unlock',
    },
  ];

  /* ---------------------------------- */
  /* Document Load */
  /* ---------------------------------- */
  documentLoad(): void {
    this.pdfviewerObj.addCustomMenu(this.menuItems, false);
  }

  /* ---------------------------------- */
  /* Context Menu Select */
  /* ---------------------------------- */
  customContextMenuSelect(args: any): void {
    switch (args.id) {
      case 'search_in_google':
        this.searchInGoogle();
        break;
      case 'lock_annotation':
        this.lockAnnotation();
        break;
      case 'unlock_annotation':
        this.unlockAnnotation();
        break;
      case 'read_only_true':
        this.setFormFieldReadOnly(true);
        break;
      case 'read_only_false':
        this.setFormFieldReadOnly(false);
        break;
    }
    args.cancel = false;
  }

  /* ---------------------------------- */
  /* Google Search */
  /* ---------------------------------- */
  searchInGoogle(): void {
    const textModule = this.pdfviewerObj.textSelectionModule;
    if (textModule?.isTextSelection) {
      textModule.selectionRangeArray.forEach((range: any) => {
        if (/\S/.test(range.textContent)) {
          window.open(`https://www.google.com/search?q=${range.textContent}`);
        }
      });
    }
  }

  /* ---------------------------------- */
  /* Lock Annotation */
  /* ---------------------------------- */
  lockAnnotation(): void {
    const selected = this.pdfviewerObj.selectedItems.annotations[0];
    if (!selected) return;

    const annotation = this.pdfviewerObj.annotationCollection.find(
      (a: any) => a.uniqueKey === selected.id
    );

    if (annotation) {
      const settings = annotation.annotationSettings as any;
      settings.isLock = true;
      annotation.isCommentLock = true;
      this.pdfviewerObj.annotation.editAnnotation(annotation);
    }
  }

  /* ---------------------------------- */
  /* Unlock Annotation */
  /* ---------------------------------- */
  unlockAnnotation(): void {
    const selected = this.pdfviewerObj.selectedItems.annotations[0];
    if (!selected) return;

    const annotation = this.pdfviewerObj.annotationCollection.find(
      (a: any) => a.uniqueKey === selected.id
    );

    if (annotation) {
      const settings = annotation.annotationSettings as any;
      settings.isLock = false;
      annotation.isCommentLock = false;
      this.pdfviewerObj.annotation.editAnnotation(annotation);
    }
  }

  /* ---------------------------------- */
  /* Form Field Read-only Handling */
  /* ---------------------------------- */
  setFormFieldReadOnly(isReadOnly: boolean): void {
    const fields = this.pdfviewerObj.selectedItems.formFields;
    fields.forEach((field: any) => {
      this.pdfviewerObj.formDesignerModule.updateFormField(field, {
        isReadOnly: isReadOnly,
      } as any);
    });
  }

  /* ---------------------------------- */
  /* Context Menu Visibility */
  /* ---------------------------------- */
  customContextMenuBeforeOpen(args: any): void {
    args.ids.forEach((id: string) => {
      const menuItem = document.getElementById(id);
      if (!menuItem) return;

      menuItem.style.display = 'none';

      if (
        id === 'search_in_google' &&
        this.pdfviewerObj.textSelectionModule?.isTextSelection
      ) {
        menuItem.style.display = 'block';
      }

      if (
        (id === 'lock_annotation' || id === 'unlock_annotation') &&
        this.pdfviewerObj.selectedItems.annotations.length
      ) {
        const selected = this.pdfviewerObj.selectedItems.annotations[0];
        const isLocked = (selected.annotationSettings as any)?.isLock;
        menuItem.style.display =
          (id === 'lock_annotation' && !isLocked) ||
          (id === 'unlock_annotation' && isLocked)
            ? 'block'
            : 'none';
      }

      if (
        (id === 'read_only_true' || id === 'read_only_false') &&
        this.pdfviewerObj.selectedItems.formFields.length
      ) {
        const field = this.pdfviewerObj.selectedItems.formFields[0];
        const readonly = field.isReadonly;
        menuItem.style.display =
          (id === 'read_only_true' && !readonly) ||
          (id === 'read_only_false' && readonly)
            ? 'block'
            : 'none';
      }
    });
  }
}

{% endhighlight %}
{% endtabs %}

## Handle Click Events for Custom Menu Items

The [customContextMenuSelect()](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/index-default#customcontextmenuselect) method defines actions for custom menu items. The implementation is included in the Angular component above in the `customContextMenuSelect()` method.

## Dynamic Context Menu Customization

The [customContextMenuBeforeOpen()](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/index-default#customcontextmenuselect) event allows for dynamic showing or hiding of items based on selection or document state. The implementation is included in the Angular component above in the `customContextMenuBeforeOpen()` method.

## Disable the Context Menu Entirely

The context menu in the PDF Viewer can be fully disabled by setting the [`contextMenuOption`](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/index-default#contextmenuoption) property to `None`.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}
import { Component, ViewChild } from '@angular/core';
import {
  PdfViewerComponent,PdfViewerModule,
  ToolbarService,NavigationService,
  LinkAnnotationService,BookmarkViewService,
  ThumbnailViewService,PrintService,
  TextSelectionService,TextSearchService,
  AnnotationService,FormDesignerService,
  FormFieldsService,
} from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PdfViewerModule],
  providers: [
    ToolbarService,NavigationService,
    LinkAnnotationService,BookmarkViewService,
    ThumbnailViewService,PrintService,
    TextSelectionService,TextSearchService,
    AnnotationService,FormDesignerService,
    FormFieldsService,
  ],
  template: `
    <ejs-pdfviewer
      id="pdfViewer"
      [documentPath]="document"
      [resourceUrl]="resource"
      [contextMenuOption]="contextMenuOption"
      style="height: 100%; width: 100%; display: block"
    >
    </ejs-pdfviewer>
  `,
})
export class AppComponent {
  public document: string =
    'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';

  public resource: string =
    'https://cdn.syncfusion.com/ej2/32.2.3/dist/ej2-pdfviewer-lib';

  public contextMenuOption: string = 'None';
}
{% endhighlight %}
{% endtabs %}

N> The context menu customization works with standalone and non-standalone Angular components, providing flexible integration options for your application.