---
layout: post
title: Customize context menu in JavaScript (ES5) DocumentEditor | Syncfusion
description: Learn here all about Customize context menu in Syncfusion JavaScript (ES5) Document editor control of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Customize context menu 
documentation: ug
domainurl: ##DomainURL##
---

# Customize context menu in JavaScript (ES5) Document editor

## How to customize context menu in Document Editor

[JavaScript DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/javascript-docx-editor) (Document Editor) allows you to add custom options to the context menu. Use the [`addCustomMenu()`](https://ej2.syncfusion.com/javascript/documentation/api/document-editor/contextMenu#addcustommenu) method to add a custom option, and handle the selection with the [`customContextMenuSelect`](https://ej2.syncfusion.com/javascript/documentation/api/document-editor/customContentMenuEventArgs) event.

### Add custom option

The following code shows how to add custom option in context menu.

```js
var documentEditor = new ej.documenteditor.DocumentEditor({
    isReadOnly: false,
    serviceUrl: 'https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/'
});
documentEditor.enableAllModules();
documentEditor.appendTo('#DocumentEditor');
//Creating custom menu items
var menuItems = [
    {
        text: 'Search In Google',
        id: 'search_in_google',
        iconCss: 'e-icons e-de-ctnr-find'
    }
];
//Adding custom options
documentEditor.contextMenu.addCustomMenu(menuItems, false);
//To handle contextmenu select event
documentEditor.customContextMenuSelect = function (args) {
    var item = args.id;
    var id = documentEditor.element.id;
    switch (item) {
        case id + 'search_in_google':
            var searchContent = documentEditor.selection.text;
            if (!documentEditor.selection.isEmpty && /\S/.test(searchContent)) {
                window.open('http://google.com/search?q=' + searchContent);
            }
            break;
    }
};
```

### Customize custom option in context menu

The Document Editor allows you to customize an added custom option and also to hide or show default context menu items.

#### Hide default context menu items

The following code shows how to replace the default context menu and add a custom option in the context menu.

```js
var documentEditor = new ej.documenteditor.DocumentEditor({
    isReadOnly: false,
    serviceUrl: 'https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/'
});
documentEditor.enableAllModules();
documentEditor.appendTo('#DocumentEditor');
//Creating custom menu items
var menuItems = [
    {
        text: 'Search In Google',
        id: 'search_in_google',
        iconCss: 'e-icons e-de-ctnr-find'
    }
];
//Adding custom options
documentEditor.contextMenu.addCustomMenu(menuItems, true);
```

#### Customize added context menu items

The following code shows how to show or hide an added custom option in the context menu using the [`customContextMenuBeforeOpen`](https://ej2.syncfusion.com/javascript/documentation/api/document-editor/beforeOpenCloseCustomContentMenuEventArgs) event.

```js
var documentEditor = new ej.documenteditor.DocumentEditor({
    isReadOnly: false, serviceUrl: 'https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/'
});
documentEditor.enableAllModules();
documentEditor.appendTo('#DocumentEditor');
//Creating custom menu items
var menuItems = [
    {
        text: 'Search In Google',
        id: 'search_in_google',
        iconCss: 'e-icons e-de-ctnr-find'
    }
];
//Adding custom options
documentEditor.contextMenu.addCustomMenu(menuItems, false);
//To show/hide custom menu item
documentEditor.customContextMenuBeforeOpen = function (args) {
    var search = document.getElementById(args.ids[0]);
    search.style.display = 'none';
    var searchContent = documentEditor.selection.text;
    if ((!documentEditor.selection.isEmpty) && (/\S/.test(searchContent))) {
        search.style.display = 'block';
    }
};
//To handle contextmenu select event
documentEditor.customContextMenuSelect = function (args) {
    var item = args.id;
    var id = documentEditor.element.id;
    switch (item) {
        case id + 'search_in_google':
            var searchContent = documentEditor.selection.text;
            if (!documentEditor.selection.isEmpty && /\S/.test(searchContent)) {
                window.open('http://google.com/search?q=' + searchContent);
            }
            break;
    }
};
```

The following is the output of the custom context menu with customization.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/document-editor/javascript-es5/customize-context-menu-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/document-editor/javascript-es5/customize-context-menu-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/document-editor/javascript-es5/customize-context-menu-cs1" %}

#### Customize context menu with sub-menu items

The Document Editor allows you to customize the context menu with sub-menu items. It can be achieved by using the [`addCustomMenu()`](https://ej2.syncfusion.com/javascript/documentation/api/document-editor/contextMenu#addcustommenu) method.

The following code shows how to add sub-items inside a custom context menu option in the Document Editor container.
 
```js

// creating Custom Options
var menuItems = [
  {
    text: 'Form field',
    id: 'form field',
    iconCss: 'e-de-formfield e-icons',
    items: [
      {
        text: 'Text form',
        id: 'Text form',
        iconCss: 'e-icons e-de-textform'
      },
      {
        text: 'Check box',
        id: 'Check box',
        iconCss: 'e-icons e-de-checkbox-form'
      },
      {
        text: 'Drop down',
        id: 'Drop down',
        iconCss: 'e-icons e-de-dropdownform'
      }
    ]
  }
];

//Initialize Document Editor component.
var container = new ej.documenteditor.DocumentEditorContainer({
  enableToolbar: true,
  height: '590px'
});

//Open the default document in `created` event.
container.created = function () {
  // adding Custom Options
  container.documentEditor.contextMenu.addCustomMenu(menuItems, false, true);
};

//Render Document Editor Container component.
container.appendTo('#DocumentEditor');
```

## Online demo

Explore how to customize the context menu in the JavaScript (ES5) Document Editor for working with Word documents in this live demo [here](https://document.syncfusion.com/demos/docx-editor/javascript-es5/#/material3/document-editor/custom-context-menu.html).