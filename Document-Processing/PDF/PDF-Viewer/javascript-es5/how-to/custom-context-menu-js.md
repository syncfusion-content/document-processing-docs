---
layout: post
title: Customize context menu in Javascript PDF Viewer control | Syncfusion
description: Learn here all about Customize context menu in Syncfusion Javascript PDF Viewer control of Syncfusion Essential JS 2 and more.
platform: document-processing
control: PDF Viewer
publishingplatform: Javascript
documentation: ug
domainurl: ##DomainURL##
---

# Customize context menu in Javascript Pdfviewer control

PDF Viewer allows you to add custom option in context menu. It can be achieved by using the [addCustomMenu()](https://ej2.syncfusion.com/documentation/api/pdfviewer/#addcustommenu) method and custom action is defined using the [customContextMenuSelect()](https://ej2.syncfusion.com/documentation/api/pdfviewer/#customcontextmenuselect)method.

### Add Custom Option

The following code shows how to add custom option in context menu.

```js
var pdfviewer = new ej.pdfviewer.PdfViewer({
    documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    resourceUrl:'https://cdn.syncfusion.com/ej2/24.2.3/dist/ej2-pdfviewer-lib'
});
ej.pdfviewer.PdfViewer.Inject(ej.pdfviewer.TextSelection, ej.pdfviewer.TextSearch, ej.pdfviewer.Print, ej.pdfviewer.Navigation, ej.pdfviewer.Toolbar, ej.pdfviewer.Magnification, ej.pdfviewer.Annotation, ej.pdfviewer.FormDesigner, ej.pdfviewer.FormFields,ej.pdfviewer.PageOrganizer);

var menuItems = [
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
        text: 'Lock Form Field',
        iconCss: 'e-icons e-lock',
        id: 'read_only_true'
    },
    {
        text: 'UnLock Form Field',
        iconCss: 'e-icons e-unlock',
        id: 'read_only_false'
    },
];

pdfviewer.appendTo('#PdfViewer');

pdfviewer.documentLoad = function (args) {
    pdfviewer.addCustomMenu(menuItems, false, false);
}
```

### Customize custom option in context menu

The PDF Viewer feature enables customization of custom options and the ability to toggle the display of the default context menu. When the addCustomMenu parameter is set to `true`, the default menu is hidden; conversely, when it is set to `false`, the default menu items are displayed.

```js
var pdfviewer = new ej.pdfviewer.PdfViewer({
    documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    resourceUrl:'https://cdn.syncfusion.com/ej2/24.2.3/dist/ej2-pdfviewer-lib'
});
ej.pdfviewer.PdfViewer.Inject(ej.pdfviewer.TextSelection, ej.pdfviewer.TextSearch, ej.pdfviewer.Print, ej.pdfviewer.Navigation, ej.pdfviewer.Toolbar, ej.pdfviewer.Magnification, ej.pdfviewer.Annotation, ej.pdfviewer.FormDesigner, ej.pdfviewer.FormFields,ej.pdfviewer.PageOrganizer);

var menuItems = [
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
        text: 'Lock Form Field',
        iconCss: 'e-icons e-lock',
        id: 'read_only_true'
    },
    {
        text: 'UnLock Form Field',
        iconCss: 'e-icons e-unlock',
        id: 'read_only_false'
    },
];

pdfviewer.appendTo('#PdfViewer');

pdfviewer.documentLoad = function (args) {
    pdfviewer.addCustomMenu(menuItems, true);
}
```

#### Customize added context menu items

The following code shows how to hide/show added custom option in context menu using the [customContextMenuBeforeOpen()](https://ej2.syncfusion.com/documentation/api/pdfviewer/#customcontextmenubeforeopen) method.

```js
var pdfviewer = new ej.pdfviewer.PdfViewer({
    documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    resourceUrl:'https://cdn.syncfusion.com/ej2/24.2.3/dist/ej2-pdfviewer-lib'
});
ej.pdfviewer.PdfViewer.Inject(ej.pdfviewer.TextSelection, ej.pdfviewer.TextSearch, ej.pdfviewer.Print, ej.pdfviewer.Navigation, ej.pdfviewer.Toolbar, ej.pdfviewer.Magnification, ej.pdfviewer.Annotation, ej.pdfviewer.FormDesigner, ej.pdfviewer.FormFields,ej.pdfviewer.PageOrganizer);

var menuItems = [
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
        text: 'Lock Form Field',
        iconCss: 'e-icons e-lock',
        id: 'read_only_true'
    },
    {
        text: 'UnLock Form Field',
        iconCss: 'e-icons e-unlock',
        id: 'read_only_false'
    },
];

pdfviewer.appendTo('#PdfViewer');

pdfviewer.documentLoad = function (args) {
    pdfviewer.addCustomMenu(menuItems, false, false);
}

pdfviewer.customContextMenuSelect = function (args) {
    switch (args.id) {
        case 'search_in_google':
            for (var i = 0; i < pdfviewer.textSelectionModule.selectionRangeArray.length; i++) {
                var content = pdfviewer.textSelectionModule.selectionRangeArray[i].textContent;
                if ((pdfviewer.textSelectionModule.isTextSelection) && (/\S/.test(content))) {
                    window.open('http://google.com/search?q=' + content);
                }
            }
            break;
        case 'lock_annotation':
            lockAnnotations(args);
            break;
        case 'unlock_annotation':
            unlockAnnotations(args);
            break;
        case 'read_only_true':
            setReadOnlyTrue(args);
            break;
        case 'read_only_false':
            setReadOnlyFalse(args);
            break;
        case 'formfield properties':
            break;
        default:
            break;
    }
};

pdfviewer.customContextMenuBeforeOpen = function (args) {
    for (var i = 0; i < args.ids.length; i++) {
        var search = document.getElementById(args.ids[i]);
        if (search) {
            search.style.display = 'none';
            if (args.ids[i] === 'search_in_google' && (pdfviewer.textSelectionModule) && pdfviewer.textSelectionModule.isTextSelection) {
                search.style.display = 'block';
            } else if (args.ids[i] === "lock_annotation" || args.ids[i] === "unlock_annotation") {
                var isLockOption = args.ids[i] === "lock_annotation";
                for (var j = 0; j < pdfviewer.selectedItems.annotations.length; j++) {
                    var selectedAnnotation = pdfviewer.selectedItems.annotations[j];
                    if (selectedAnnotation && selectedAnnotation.annotationSettings) {
                        var shouldDisplay = (isLockOption && !selectedAnnotation.annotationSettings.isLock) ||
                            (!isLockOption && selectedAnnotation.annotationSettings.isLock);
                        search.style.display = shouldDisplay ? 'block' : 'none';
                    }
                }
            } else if ((args.ids[i] === "read_only_true" || args.ids[i] === "read_only_false") && pdfviewer.selectedItems.formFields.length !== 0) {
                var isReadOnlyOption = args.ids[i] === "read_only_true";
                for (var k = 0; k < pdfviewer.selectedItems.formFields.length; k++) {
                    var selectedFormFields = pdfviewer.selectedItems.formFields[k];
                    if (selectedFormFields) {
                        var selectedFormField = pdfviewer.selectedItems.formFields[k].isReadonly;
                        var displayMenu = (isReadOnlyOption && !selectedFormField) || (!isReadOnlyOption && selectedFormField);
                        search.style.display = displayMenu ? 'block' : 'none';
                    }
                }
            } else if (args.ids[i] === 'formfield properties' && pdfviewer.selectedItems.formFields.length !== 0) {
                search.style.display = 'block';
            }
        }
    }
};

function lockAnnotations(args) {
    for (var i = 0; i < pdfviewer.annotationCollection.length; i++) {
        if (pdfviewer.annotationCollection[i].uniqueKey === pdfviewer.selectedItems.annotations[0].id) {
            pdfviewer.annotationCollection[i].annotationSettings.isLock = true;
            pdfviewer.annotationCollection[i].isCommentLock = true;
            pdfviewer.annotation.editAnnotation(pdfviewer.annotationCollection[i]);
        }
        args.cancel = false;
    }
}

function unlockAnnotations(args) {
    for (var i = 0; i < pdfviewer.annotationCollection.length; i++) {
        if (pdfviewer.annotationCollection[i].uniqueKey === pdfviewer.selectedItems.annotations[0].id) {
            pdfviewer.annotationCollection[i].annotationSettings.isLock = false;
            pdfviewer.annotationCollection[i].isCommentLock = false;
            pdfviewer.annotation.editAnnotation(pdfviewer.annotationCollection[i]);
        }
        args.cancel = false;
    }
}

function setReadOnlyTrue(args) {
    var selectedFormFields = pdfviewer.selectedItems.formFields;
    for (var i = 0; i < selectedFormFields.length; i++) {
        var selectFormFields = selectedFormFields[i];
        if (selectFormFields) {
            pdfviewer.formDesignerModule.updateFormField(selectFormFields, {
                isReadOnly: true,
            });
        }
        args.cancel = false;
    }
}

function setReadOnlyFalse(args) {
    var selectedFormFields = pdfviewer.selectedItems.formFields;
    for (var i = 0; i < selectedFormFields.length; i++) {
        var selectFormFields = selectedFormFields[i];
        if (selectFormFields) {
            pdfviewer.formDesignerModule.updateFormField(selectFormFields, {
                isReadOnly: false,
            });
        }
        args.cancel = false;
    }
}
```
The following is the output of custom context menu with customization.

{% tabs %}
{% highlight ts tabtitle="index.js" %}
{% include code-snippet/pdfviewer/javascript-es5/custom-context-menu/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pdfviewer/javascript-es5/custom-context-menu/index.html %}
{% endhighlight %}
{% endtabs %}

N> To set up the **server-backed PDF Viewer**,
Add the below [serviceUrl](https://ej2.syncfusion.com/documentation/api/pdfviewer/#serviceurl) in the `index.ts` file
`pdfviewer.serviceUrl = 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer';`

{% previewsample "Document-Processing/code-snippet/pdfviewer/javascript-es5/custom-context-menu/index.html" %}

[View sample in GitHub](https://github.com/SyncfusionExamples/javascript-pdf-viewer-examples/tree/master/How%20to/Custom%20Context%20Menu)