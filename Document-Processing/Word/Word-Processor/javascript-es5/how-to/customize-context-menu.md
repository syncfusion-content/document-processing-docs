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

Document Editor allows you to add custom option in context menu. It can be achieved by using the [`addCustomMenu()`](https://ej2.syncfusion.com/javascript/documentation/api/document-editor/contextMenu#addcustommenu) method and custom action is defined using the [`customContextMenuSelect`](https://ej2.syncfusion.com/javascript/documentation/api/document-editor/customContentMenuEventArgs)

### Add Custom Option

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

Document Editor allows you to customize the added custom option and also to hide/show default context menu.

#### Hide default context menu items

The following code shows how to hide default context menu and add custom option in context menu.

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

The following code shows how to hide/show added custom option in context menu using the [`customContextMenuBeforeOpen`](https://ej2.syncfusion.com/javascript/documentation/api/document-editor/beforeOpenCloseCustomContentMenuEventArgs).

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

The following is the output of custom context menu with customization.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/document-editor/javascript-es5/customize-context-menu-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/document-editor/javascript-es5/customize-context-menu-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/document-editor/javascript-es5/customize-context-menu-cs1" %}

#### Customize Context Menu with sub-menu items

Document Editor allows you to customize the Context Menu with sub-menu items. It can be achieved by using the [`addCustomMenu()`](https://ej2.syncfusion.com/javascript/documentation/api/document-editor/contextMenu#addcustommenu) method.

The following code shows how to add a sub items in the custom option in context menu in Document Editor Container.
 
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