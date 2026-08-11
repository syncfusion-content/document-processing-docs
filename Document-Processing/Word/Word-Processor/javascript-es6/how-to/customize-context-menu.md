---
layout: post
title: Customize Context Menu in JavaScript (ES6) DOCX Editor | Syncfusion
description: Learn how to customize the context menu in Syncfusion JavaScript (ES6) Document Editor to add a custom option using the addCustomMenu method.
platform: document-processing
control: Customize Context Menu
documentation: ug
domainurl: ##DomainURL##
---

# Customize Context Menu in JavaScript (ES6) Document Editor

## How to customize the context menu in the Document Editor

[TypeScript DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/javascript-docx-editor) (Document Editor) allows you to add a custom option to the context menu. It can be achieved by using the [`addCustomMenu()`](https://ej2.syncfusion.com/documentation/api/document-editor/contextMenu#addcustommenu) method, and the custom action is defined using the [`customContextMenuSelect`](https://ej2.syncfusion.com/documentation/api/document-editor/customContentMenuEventArgs).

### Add Custom Option

The following code shows how to add a custom option to the context menu.

```ts
let documentEditor: DocumentEditor = new DocumentEditor({
    isReadOnly: false, serviceUrl: 'https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/'
});
documentEditor.enableAllModules();
documentEditor.appendTo('#DocumentEditor');
//Creating custom menu items
let menuItems: MenuItemModel[] = [
    {
        text: 'Search In Google',
        id: 'search_in_google',
        iconCss: 'e-icons e-de-ctnr-find'
    }];
//Adding custom options
documentEditor.contextMenu.addCustomMenu(menuItems, false);
//To handle contextmenu select event
documentEditor.customContextMenuSelect = (args: CustomContentMenuEventArgs): void => {
    let item: string = args.id;
    let id: string = documentEditor.element.id;
    switch (item) {
        case id + 'search_in_google':
            let searchContent: string = documentEditor.selection.text;
            if (!documentEditor.selection.isEmpty && /\S/.test(searchContent)) {
                window.open('https://google.com/search?q=' + searchContent);
            }
            break;
    }
};
```

### Customize custom option in the context menu

The Document Editor allows you to customize the added custom option and also to hide/show the default context menu.

#### Hide default context menu items

The following code shows how to hide the default context menu and add a custom option to the context menu.

```ts
let documentEditor: DocumentEditor = new DocumentEditor({
    isReadOnly: false, serviceUrl: 'https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/'
});
documentEditor.enableAllModules();
documentEditor.appendTo('#DocumentEditor');
//Creating custom menu items
let menuItems: MenuItemModel[] = [
    {
        text: 'Search In Google',
        id: 'search_in_google',
        iconCss: 'e-icons e-de-ctnr-find'
    }];
//Adding custom options
documentEditor.contextMenu.addCustomMenu(menuItems, true);
```

#### Customize added context menu items

The following code shows how to hide/show the added custom option in the context menu using the [`customContextMenuBeforeOpen`](https://ej2.syncfusion.com/documentation/api/document-editor/beforeOpenCloseCustomContentMenuEventArgs).

```ts
let documentEditor: DocumentEditor = new DocumentEditor({
    isReadOnly: false, serviceUrl: 'https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/'
});
documentEditor.enableAllModules();
documentEditor.appendTo('#DocumentEditor');
//Creating custom menu items
let menuItems: MenuItemModel[] = [
    {
        text: 'Search In Google',
        id: 'search_in_google',
        iconCss: 'e-icons e-de-ctnr-find'
    }];
//Adding custom options
documentEditor.contextMenu.addCustomMenu(menuItems, false);
//To show/hide custom menu item
documentEditor.customContextMenuBeforeOpen = (args: BeforeOpenCloseCustomContentMenuEventArgs): void => {
    let search: HTMLElement = document.getElementById(args.ids[0]);
    search.style.display = 'none';
    let searchContent: string = documentEditor.selection.text;
    if ((!documentEditor.selection.isEmpty) && (/\S/.test(searchContent))) {
        search.style.display = 'block';
    }
};
//To handle contextmenu select event
documentEditor.customContextMenuSelect = (args: CustomContentMenuEventArgs): void => {
    let item: string = args.id;
    let id: string = documentEditor.element.id;
    switch (item) {
        case id + 'search_in_google':
            let searchContent: string = documentEditor.selection.text;
            if (!documentEditor.selection.isEmpty && /\S/.test(searchContent)) {
                window.open('https://google.com/search?q=' + searchContent);
            }
            break;
    }
};
```

The following is the output of the custom context menu with customization.

 

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/document-editor/javascript-es6/customize-context-menu-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/document-editor/javascript-es6/customize-context-menu-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "/document-processing/code-snippet/document-editor/javascript-es6/customize-context-menu-cs1" %}



#### Customize Context Menu with sub-menu items

The Document Editor allows you to customize the context menu with sub-menu items. It can be achieved by using the [`addCustomMenu()`](https://ej2.syncfusion.com/documentation/api/document-editor/contextMenu#addcustommenu) method.

The following code shows how to add sub-items to the custom option in the context menu in the Document Editor Container.
 
```ts
import {
  DocumentEditorContainer,
  Toolbar,
} from '@syncfusion/ej2-documenteditor';
import { MenuItemModel } from '@syncfusion/ej2-navigations';

//Inject required modules.
DocumentEditorContainer.Inject(Toolbar);

//Creating custom options
let menuItems: MenuItemModel[] = [
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
//Initialize Document Editor component.
let container: DocumentEditorContainer = new DocumentEditorContainer({
  enableToolbar: true,
  height: '590px',
});

//Open the default document in `created` event.
container.created = function () {
  //Adding custom options
  container.documentEditor.contextMenu.addCustomMenu(menuItems, false, true);
};
//Render Document Editor Container component.
container.appendTo('#DocumentEditor');
```

### Online Demo

Explore how to customize the context menu in the JavaScript DOCX Editor for working with Word documents in this live demo [here](https://document.syncfusion.com/demos/docx-editor/javascript/#/material3/document-editor/custom-context-menu.html).