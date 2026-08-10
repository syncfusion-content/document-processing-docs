---
layout: post
title: Customize Context Menu in Angular DOCX Editor component | Syncfusion
description: Learn how to customize the context menu in the Syncfusion Angular Document Editor component of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Customize context menu
documentation: ug
domainurl: ##DomainURL##
---

# Customize Context Menu in Angular Document Editor component

## How to customize context menu in the Document Editor

Angular DOCX Editor allows you to add custom options to the context menu. Use the [`addCustomMenu()`](https://ej2.syncfusion.com/angular/documentation/api/document-editor/contextMenu#addcustommenu) method to add a custom option, and handle the selection with the [`customContextMenuSelect`](https://ej2.syncfusion.com/angular/documentation/api/document-editor/customContentMenuEventArgs) event.

### Add custom option

The following code shows how to add a custom option to the context menu.

```typescript
import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ToolbarService,
  DocumentEditorContainerComponent,
} from '@syncfusion/ej2-angular-documenteditor';
import { MenuItemModel } from '@syncfusion/ej2-navigations';
import {
  DocumentEditorContainerModule,
} from '@syncfusion/ej2-angular-documenteditor';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [DocumentEditorContainerModule],
  providers: [ToolbarService],
  template: `
    <ejs-documenteditorcontainer #documenteditor_default 
      serviceUrl="https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/" 
      height="600px" 
      style="display:block" 
      [documentEditorSettings]= "fontFamilies" [enableToolbar]=true (created)="onCreate()">
    </ejs-documenteditorcontainer>
  `,
})
export class AppComponent implements OnInit {
  @ViewChild('documenteditor_default')
  public container?: DocumentEditorContainerComponent;
  public fontFamilies = {
    fontFamilies: ['Algerian', 'Arial', 'Calibri', 'Cambria', 'Windings'],
  };
  ngOnInit(): void {}
  onCreate() {
    // creating Custom Options
    let menuItems: MenuItemModel[] = [
      {
        text: 'Search In Google',
        id: 'search_in_google',
        iconCss: 'e-icons e-de-ctnr-find',
      },
    ];
    // adding Custom Options
    this.container?.documentEditor.contextMenu.addCustomMenu(menuItems, false);
    // custom Options Select Event
    (
      this.container as DocumentEditorContainerComponent
    ).documentEditor.customContextMenuSelect = (args: any): void => {
      // custom Options Functionality
      let id = this.container?.documentEditor.element.id;
      switch (args.id) {
        case id + 'search_in_google':
          let searchContent=
            this.container?.documentEditor.selection.text;
          if (
            !this.container?.documentEditor.selection.isEmpty &&
            /\S/.test(searchContent as string)
          ) {
            window.open('http://google.com/search?q=' + searchContent);
          }
          break;
      }
    };
  }
}
```

N> The Web Service link `https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/` used in the serviceUrl property is intended solely for demonstration and evaluation purposes. For production deployment, please host your own Web Service with your required server configurations. You can refer and reuse the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server) for hosting your own Web Service and use it for the serviceUrl property.

### Customize custom option in context menu

The Document Editor allows you to customize an added custom option and also to hide or show default context menu items.

#### Hide default context menu items

Using the [`addCustomMenu()`](https://ej2.syncfusion.com/angular/documentation/api/document-editor/contextmenu#addcustommenu) method, you can replace the default context menu by setting the second parameter to `true`.

The following code shows how to replace the default context menu and add a custom option in the context menu.

```typescript
import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ToolbarService,
  DocumentEditorContainerComponent,
} from '@syncfusion/ej2-angular-documenteditor';
import { MenuItemModel } from '@syncfusion/ej2-navigations';
import {
  DocumentEditorContainerModule,
} from '@syncfusion/ej2-angular-documenteditor';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [DocumentEditorContainerModule],
  providers: [ToolbarService],
  template: `
    <ejs-documenteditorcontainer #documenteditor_default 
      serviceUrl="https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/" 
      height="600px" 
      style="display:block" 
      [documentEditorSettings]= "fontFamilies" [enableToolbar]=true (created)="onCreate()">
    </ejs-documenteditorcontainer>
  `,
})
export class AppComponent implements OnInit {
  @ViewChild('documenteditor_default')
  public container?: DocumentEditorContainerComponent;
  public fontFamilies = {
    fontFamilies: ['Algerian', 'Arial', 'Calibri', 'Cambria', 'Windings'],
  };
  ngOnInit(): void {}
  onCreate() {
    // creating Custom Options
    let menuItems: MenuItemModel[] = [
      {
          text: 'Search In Google',
          id: 'search_in_google',
          iconCss: 'e-icons e-de-ctnr-find'
      }];
  // adding Custom Options
  this.container?.documentEditor.contextMenu.addCustomMenu(menuItems, true);
  }
}
```

N> The Web Service link `https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/` used in the serviceUrl property is intended solely for demonstration and evaluation purposes. For production deployment, please host your own Web Service with your required server configurations. You can refer and reuse the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server) for hosting your own Web Service and use it for the serviceUrl property.

#### Customize added context menu items

The following code shows how to show or hide an added custom option in the context menu using the [`customContextMenuBeforeOpen`](https://ej2.syncfusion.com/angular/documentation/api/document-editor/beforeOpenCloseCustomContentMenuEventArgs) event.

```typescript
@Component({
      selector: 'app-root',
      // specifies the template string for the DocumentEditorContainer component
      template: `<ejs-documenteditorcontainer #documenteditor_default serviceUrl="https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/" height="600px" style="display:block" [documentEditorSettings]= "fontFamilies" [enableToolbar]=true (created)="onCreate()"> </ejs-documenteditorcontainer>`,
      providers: [ToolbarService]
})
export class AppComponent implements OnInit {
    @ViewChild('documenteditor_default')
    public container: DocumentEditorContainerComponent;
    public fontFamilies={fontFamilies :['Algerian', 'Arial', 'Calibri', 'Cambria', 'Windings']};
    ngOnInit(): void {
    }
    onCreate() {
        debugger;
     // creating Custom Options
     let menuItems: MenuItemModel[] = [
        {
            text: 'Search In Google',
            id: 'search_in_google',
            iconCss: 'e-icons e-de-ctnr-find'
        }];
    // adding Custom Options
    this.container.documentEditor.contextMenu.addCustomMenu(menuItems, false);
    // custom Options Select Event
    this.container.documentEditor.customContextMenuSelect = (args: any): void => {
        // custom Options Functionality
        let id: string = this.container.documentEditor.element.id;
        switch (args.id) {
            case id + 'search_in_google':
                let searchContent: string = this.container.documentEditor.selection.text;
                if (!this.container.documentEditor.selection.isEmpty && /\S/.test(searchContent)) {
                    window.open('http://google.com/search?q=' + searchContent);
                }
                break;
        }
    };
    //  custom options hide/show functionality
    this.container.documentEditor.customContextMenuBeforeOpen = (args: any): void => {
        let search: any = document.getElementById(args.ids[0]);
        search.style.display = 'none';
        let searchContent: string = this.container.documentEditor.selection.text;
        if (!this.container.documentEditor.selection.isEmpty && /\S/.test(searchContent)) {
            search.style.display = 'block';
        }
    };
    }
}
```

N> The Web Service link `https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/` used in the serviceUrl property is intended solely for demonstration and evaluation purposes. For production deployment, please host your own Web Service with your required server configurations. You can refer and reuse the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server) for hosting your own Web Service and use it for the serviceUrl property.

The following is the output of the custom context menu with customization.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/document-editor/angular/customize-context-menu-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/document-editor/angular/customize-context-menu-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "/document-processing/samples/document-editor/angular/customize-context-menu-cs1" %}

N> The Web Service link `https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/` used in the serviceUrl property is intended solely for demonstration and evaluation purposes. For production deployment, please host your own Web Service with your required server configurations. You can refer and reuse the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server) for hosting your own Web Service and use it for the serviceUrl property.

#### Customize context menu with sub-menu items

The Document Editor allows you to customize the context menu with sub-menu items. It can be achieved by using the [`addCustomMenu()`](https://ej2.syncfusion.com/angular/documentation/api/document-editor/contextMenu#addcustommenu) method.

The following code shows how to add sub-items inside a custom context menu option in the Document Editor container.
 
```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DocumentEditorContainerModule } from '@syncfusion/ej2-angular-documenteditor';

import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ToolbarService,
  DocumentEditorContainerComponent,
  CustomContentMenuEventArgs,
} from '@syncfusion/ej2-angular-documenteditor';
import { MenuItemModel } from '@syncfusion/ej2-navigations';
@Component({
  imports: [DocumentEditorContainerModule],

  standalone: true,
  selector: 'app-container',
  // specifies the template string for the DocumentEditorContainer component
  template: `<ejs-documenteditorcontainer #documenteditor_default serviceUrl="https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/" height="600px" style="display:block"  [enableToolbar]=true (created)="onCreate()"> </ejs-documenteditorcontainer>`,
  providers: [ToolbarService],
})
export class AppComponent implements OnInit {
  @ViewChild('documenteditor_default')
  public container?: DocumentEditorContainerComponent;
  ngOnInit(): void {}
  onCreate() {
    debugger;
    // creating Custom Options
    let menuItems = [
      {
        text: 'Form field',
        id: 'form field',
        iconCss: 'e-de-formfield e-icons',
        items: [
          {
            text: 'Text form',
            id: 'Text form',
            iconCss: 'e-icons e-de-textform',
          },
          {
            text: 'Check box',
            id: 'Check box',
            iconCss: 'e-icons e-de-checkbox-form',
          },
          {
            text: 'Drop down',
            id: 'Drop down',
            iconCss: 'e-icons e-de-dropdownform',
          },
        ],
      },
    ];

    (
      this.container as DocumentEditorContainerComponent
    ).documentEditor.contextMenu.addCustomMenu(menuItems, false, true);
  }
}
```

N> The Web Service link `https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/` used in the serviceUrl property is intended solely for demonstration and evaluation purposes. For production deployment, please host your own Web Service with your required server configurations. You can refer and reuse the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server) for hosting your own Web Service and use it for the serviceUrl property.

## Online demo

Explore how to customize the context menu in the Angular Document Editor for working with Word documents in this live demo [here](https://document.syncfusion.com/demos/docx-editor/angular/#/tailwind3/document-editor/custom-context-menu).