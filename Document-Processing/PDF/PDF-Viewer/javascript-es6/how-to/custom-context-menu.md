---
layout: post
title: Customize the context menu in TypeScript PDF Viewer | Syncfusion
description: Learn how to add and customize custom context menu options in the TypeScript PDF Viewer using addCustomMenu, customContextMenuSelect, and related events.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Customize the context menu in PDF Viewer

PDF Viewer supports adding custom options to the context menu using the [addCustomMenu()](https://ej2.syncfusion.com/documentation/api/pdfviewer#addcustommenu) method. Define actions for custom items with the [customContextMenuSelect()](https://ej2.syncfusion.com/documentation/api/pdfviewer#customcontextMenuselect) method.

### Add a custom option

The following example adds custom options to the context menu.

```ts
    let viewer: PdfViewer = new PdfViewer();
    viewer.documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
    viewer.resourceUrl = "https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib";
    var menuItems: MenuItemModel[] = [
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
            text: 'Unlock Form Field',
            iconCss: 'e-icons e-unlock',
            id: 'read_only_false'
        },
    ];

    viewer.documentLoad = function (args) {
        viewer.addCustomMenu(menuItems, true);
    }

    viewer.customContextMenuSelect = function (args) {
        switch (args.id) {
            case 'search_in_google':
                for (var i = 0; i < viewer.textSelectionModule.selectionRangeArray.length; i++) {
                    var content = viewer.textSelectionModule.selectionRangeArray[i].textContent;
                    if ((viewer.textSelectionModule.isTextSelection) && (/\S/.test(content))) {
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
```

### Customize the default vs custom menu

Toggle the display of the default context menu. When the addCustomMenu parameter is `true`, the default menu is hidden; when `false`, default menu items are displayed alongside custom items.

```ts

    let viewer: PdfViewer = new PdfViewer();
    viewer.documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
    viewer.resourceUrl = "https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib";
    var menuItems: MenuItemModel[] = [
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
            text: 'Unlock Form Field',
            iconCss: 'e-icons e-unlock',
            id: 'read_only_false'
        },
    ];

    viewer.documentLoad = function (args) {
        viewer.addCustomMenu(menuItems, true);
    }

```

#### Show or hide custom items before opening

Use [customContextMenuBeforeOpen()](https://ej2.syncfusion.com/documentation/api/pdfviewer#customcontextMenubeforeopen) to hide or show custom options dynamically.

```ts

    let viewer: PdfViewer = new PdfViewer();
    viewer.documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
    viewer.resourceUrl = "https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib";
    var menuItems: MenuItemModel[] = [
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
            text: 'Unlock Form Field',
            iconCss: 'e-icons e-unlock',
            id: 'read_only_false'
        },
    ];

viewer.documentLoad = function (args) {
    viewer.addCustomMenu(menuItems, false, false);
}

viewer.customContextMenuSelect = function (args) {
    switch (args.id) {
        case 'search_in_google':
            for (var i = 0; i < viewer.textSelectionModule.selectionRangeArray.length; i++) {
                var content = viewer.textSelectionModule.selectionRangeArray[i].textContent;
                if ((viewer.textSelectionModule.isTextSelection) && (\/\S\/.test(content))) {
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

viewer.customContextMenuBeforeOpen = function (args) {
    for (var i = 0; i < args.ids.length; i++) {
        var search = document.getElementById(args.ids[i]);
        if (search) {
            search.style.display = 'none';
            if (args.ids[i] === 'search_in_google' && (viewer.textSelectionModule) && viewer.textSelectionModule.isTextSelection) {
                search.style.display = 'block';
            } else if (args.ids[i] === "lock_annotation" || args.ids[i] === "unlock_annotation") {
                var isLockOption = args.ids[i] === "lock_annotation";
                for (var j = 0; j < viewer.selectedItems.annotations.length; j++) {
                    var selectedAnnotation = viewer.selectedItems.annotations[j];
                    if (selectedAnnotation && selectedAnnotation.annotationSettings) {
                        var shouldDisplay = (isLockOption && !selectedAnnotation.annotationSettings.isLock) ||
                            (!isLockOption && selectedAnnotation.annotationSettings.isLock);
                        search.style.display = shouldDisplay ? 'block' : 'none';
                    }
                }
            } else if ((args.ids[i] === "read_only_true" || args.ids[i] === "read_only_false") && viewer.selectedItems.formFields.length !== 0) {
                var isReadOnlyOption = args.ids[i] === "read_only_true";
                for (var k = 0; k < viewer.selectedItems.formFields.length; k++) {
                    var selectedFormFields = viewer.selectedItems.formFields[k];
                    if (selectedFormFields) {
                        var selectedFormField = viewer.selectedItems.formFields[k].isReadonly;
                        var displayMenu = (isReadOnlyOption && !selectedFormField) || (!isReadOnlyOption && selectedFormField);
                        search.style.display = displayMenu ? 'block' : 'none';
                    }
                }
            } else if (args.ids[i] === 'formfield properties' && viewer.selectedItems.formFields.length !== 0) {
                search.style.display = 'block';
            }
        }
    }
};

function lockAnnotations(args) {
    for (var i = 0; i < viewer.annotationCollection.length; i++) {
        if (viewer.annotationCollection[i].uniqueKey === viewer.selectedItems.annotations[0].id) {
            viewer.annotationCollection[i].annotationSettings.isLock = true;
            viewer.annotationCollection[i].isCommentLock = true;
            viewer.annotation.editAnnotation(viewer.annotationCollection[i]);
        }
        args.cancel = false;
    }
}

function unlockAnnotations(args) {
    for (var i = 0; i < viewer.annotationCollection.length; i++) {
        if (viewer.annotationCollection[i].uniqueKey === viewer.selectedItems.annotations[0].id) {
            viewer.annotationCollection[i].annotationSettings.isLock = false;
            viewer.annotationCollection[i].isCommentLock = false;
            viewer.annotation.editAnnotation(viewer.annotationCollection[i]);
        }
        args.cancel = false;
    }
}

function setReadOnlyTrue(args) {
    var selectedFormFields = viewer.selectedItems.formFields;
    for (var i = 0; i < selectedFormFields.length; i++) {
        var selectFormFields = selectedFormFields[i];
        if (selectFormFields) {
            viewer.formDesignerModule.updateFormField(selectFormFields, {
                isReadOnly: true,
            });
        }
        args.cancel = false;
    }
}

function setReadOnlyFalse(args) {
    var selectedFormFields = viewer.selectedItems.formFields;
    for (var i = 0; i < selectedFormFields.length; i++) {
        var selectFormFields = selectedFormFields[i];
        if (selectFormFields) {
            viewer.formDesignerModule.updateFormField(selectFormFields, {
                isReadOnly: false,
            });
        }
        args.cancel = false;
    }
}
```

The following is the output of the custom context menu with customization.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/pdfviewer/javascript-es6/custom-context-menu/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pdfviewer/javascript-es6/custom-context-menu/index.html %}
{% endhighlight %}
{% endtabs %}

N> To set up the **server-backed PDF Viewer**,
Add the below [serviceUrl](https://ej2.syncfusion.com/documentation/api/pdfviewer#serviceurl) in the `index.ts` file
`viewer.serviceUrl = 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer/';`

{% previewsample "/document-processing/code-snippet/pdfviewer/javascript-es5/custom-context-menu" %}
