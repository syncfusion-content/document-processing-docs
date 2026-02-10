---
layout: post
title: Customize the context menu in Angular PDF Viewer | Syncfusion
description: Learn how to add and customize custom context menu options in the Angular PDF Viewer using addCustomMenu, customContextMenuSelect, and related events.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Customize the context menu in PDF Viewer

The PDF Viewer supports adding custom options to the context menu using the `addCustomMenu()` method; define custom actions with `customContextMenuSelect()`. See the addCustomMenu and [customContextMenuSelect()](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer#customcontextmenuselect) API.

### Add a custom option

The following example adds custom options to the context menu.

```ts
  public document: string = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
  public resource: string = "https://cdn.syncfusion.com/ej2/23.2.6/dist/ej2-pdfviewer-lib";
  ngOnInit(): void {
      // ngOnInit function
  }
  public menuItems: MenuItemModel[] = [
    {
      text: 'Search In Google',
      id: 'search_in_google',
      iconCss: 'e-icons e-search'
    },
    {
      text: 'Lock Annotation',
      iconCss: 'e-icons e-lock',
      id: 'lock_annotation'
    },
    {
      text: 'Unlock Annotation',
      iconCss: 'e-icons e-unlock',
      id: 'unlock_annotation'
    },
    {
      text: 'Lock Form Fields',
      iconCss: 'e-icons e-lock',
      id: 'read_only_true'
    },
    {
      text: 'Unlock Form Fields',
      iconCss: 'e-icons e-unlock',
      id: 'read_only_false'
    },
  ]
  public documentLoaded(e: LoadEventArgs): void {
    var pdfViewer = (<any>document.getElementById('pdfViewer')).ej2_instances[0];
    pdfViewer.addCustomMenu(this.menuItems, false, false);
  }

```

### Customize the default vs context menu

Toggle the display of the default context menu. When the addCustomMenu parameter is `true`, the default menu is hidden; when `false`, default menu items are displayed alongside custom items.

```js
  public document: string = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
  public resource: string = "https://cdn.syncfusion.com/ej2/23.2.6/dist/ej2-pdfviewer-lib";
  ngOnInit(): void {
      // ngOnInit function
  }
  public menuItems: MenuItemModel[] = [
    {
      text: 'Search In Google',
      id: 'search_in_google',
      iconCss: 'e-icons e-search'
    },
    {
      text: 'Lock Annotation',
      iconCss: 'e-icons e-lock',
      id: 'lock_annotation'
    },
    {
      text: 'Unlock Annotation',
      iconCss: 'e-icons e-unlock',
      id: 'unlock_annotation'
    },
    {
      text: 'Lock Form Fields',
      iconCss: 'e-icons e-lock',
      id: 'read_only_true'
    },
    {
      text: 'Unlock Form Fields',
      iconCss: 'e-icons e-unlock',
      id: 'read_only_false'
    },
  ]
  public documentLoaded(e: LoadEventArgs): void {
    var pdfViewer = (<any>document.getElementById('pdfViewer')).ej2_instances[0];
    pdfViewer.addCustomMenu(this.menuItems, false, false);
  }
```

#### show or hide custom items before opening

Use [customContextMenuBeforeOpen()](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer#customcontextmenubeforeopen) to hide or show custom options dynamically.

```js
export class CustomContextMenuComponent implements OnInit {
  public document = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
  public resource: string = 'https://cdn.syncfusion.com/ej2/24.1.41/dist/ej2-pdfviewer-lib';
  ;
  ngOnInit(): void {
  }
  public menuItems: MenuItemModel[] = [
    {
      text: 'Search In Google',
      id: 'search_in_google',
      iconCss: 'e-icons e-search'
    },
    {
      text: 'Lock Annotation',
      iconCss: 'e-icons e-lock',
      id: 'lock_annotation'
    },
    {
      text: 'Unlock Annotation',
      iconCss: 'e-icons e-unlock',
      id: 'unlock_annotation'
    },
    {
      text: 'Lock Form Fields',
      iconCss: 'e-icons e-lock',
      id: 'read_only_true'
    },
    {
      text: 'Unlock Form Fields',
      iconCss: 'e-icons e-unlock',
      id: 'read_only_false'
    },
  ]
  public documentLoaded(e: LoadEventArgs): void {
    var pdfViewer = (<any>document.getElementById('pdfViewer')).ej2_instances[0];
    pdfViewer.addCustomMenu(this.menuItems, false, false);
  }

  public customContextMenuSelect = (e: any): void => {
    var pdfViewer = (<any>document.getElementById('pdfViewer')).ej2_instances[0];
    switch (e.id) {
      case 'search_in_google':
        for (var i = 0; i < pdfViewer.textSelectionModule.selectionRangeArray.length; i++) {
          var content = pdfViewer.textSelectionModule.selectionRangeArray[i].textContent;
          if ((pdfViewer.textSelectionModule.isTextSelection) && (\/\S\/.test(content))) {
            window.open('http://google.com/search?q=' + content);
          }
        }
        break;
      case 'lock_annotation':
        this.lockAnnotations(e);
        break;
      case 'unlock_annotation':
        this.unlockAnnotations(e);
        break;
      case 'read_only_true':
        this.setReadOnlyTrue(e);
        break;
      case 'read_only_false':
        this.setReadOnlyFalse(e);
        break;
      case 'formfield properties':
        break;
      default:
        break;
    }
  }

  public customContextMenuBeforeOpen = (e: any): void => {
    var pdfViewer = (<any>document.getElementById('pdfViewer')).ej2_instances[0];
    for (var i = 0; i < e.ids.length; i++) {
      var search = document.getElementById(e.ids[i]);
      if (search) {
        search.style.display = 'none';
        if (e.ids[i] === 'search_in_google' && (pdfViewer.textSelectionModule) && pdfViewer.textSelectionModule.isTextSelection) {
          search.style.display = 'block';
        } else if (e.ids[i] === "lock_annotation" || e.ids[i] === "unlock_annotation") {
          var isLockOption = e.ids[i] === "lock_annotation";
          for (var j = 0; j < pdfViewer.selectedItems.annotations.length; j++) {
            var selectedAnnotation: any = pdfViewer.selectedItems.annotations[j];
            if (selectedAnnotation && selectedAnnotation.annotationSettings) {
              var shouldDisplay = (isLockOption && !selectedAnnotation.annotationSettings.isLock) ||
                (!isLockOption && selectedAnnotation.annotationSettings.isLock);
              search.style.display = shouldDisplay ? 'block' : 'none';
            }
          }
        } else if ((e.ids[i] === "read_only_true" || e.ids[i] === "read_only_false") && pdfViewer.selectedItems.formFields.length !== 0) {
          var isReadOnlyOption = e.ids[i] === "read_only_true";
          for (var j = 0; j < pdfViewer.selectedItems.formFields.length; j++) {
            var selectedFormFields = pdfViewer.selectedItems.formFields[j];
            if (selectedFormFields) {
              var selectedFormField = pdfViewer.selectedItems.formFields[j].isReadonly;
              var displayMenu = (isReadOnlyOption && !selectedFormField) || (!isReadOnlyOption && selectedFormField);
              search.style.display = displayMenu ? 'block' : 'none';
            }
          }
        } else if (e.ids[i] === 'formfield properties' && pdfViewer.selectedItems.formFields.length !== 0) {
          search.style.display = 'block';
        }
      }
    }
  }

}
```
The following is the output of the custom context menu with customization.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pdfviewer/angular/custom-context-menu/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pdfviewer/angular/custom-context-menu/src/main.ts %}
{% endhighlight %}
{% endtabs %}

N> To set up the server-backed PDF Viewer, add the following service URL in `app.component.ts`:
`public service: string = 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer'`
Then configure the PDF Viewer template with the `[serviceUrl]='service'` attribute on the viewer container.

{% previewsample "/document-processing/samples/pdfviewer/angular/custom-context-menu" %}

[View sample in GitHub](https://github.com/SyncfusionExamples/angular-pdf-viewer-examples/tree/master/How%20to/Custom%20Context%20Menu)