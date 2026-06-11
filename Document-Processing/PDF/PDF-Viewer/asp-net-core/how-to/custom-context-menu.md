---
layout: post
title: Customize the context menu in ASP.NET Core PDF Viewer | Syncfusion
description: Learn how to add and customize context menu options in the ASP.NET Core PDF Viewer using addCustomMenu, customContextMenuSelect, and related events.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Customize the context menu in ASP.NET Core PDF Viewer

Extend the PDF Viewer's context menu with custom options using the `addCustomMenu()` method. Handle custom menu item clicks through the `customContextMenuSelect()` event to implement custom functionality.

## Add custom menu items

The following example demonstrates how to add custom options to the context menu:

```javascript
<script type="text/javascript">

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
            text: 'Lock Form Fields',
            iconCss: 'e-icons e-lock',
            id: 'read_only_true'
        },
        {
            text: 'Unlock Form Fields',
            iconCss: 'e-icons e-unlock',
            id: 'read_only_false'
        },
    ];

    function documentLoaded(arg) {
        var pdfviewer = document.getElementById('pdfviewer').ej2_instances[0];
        pdfviewer.addCustomMenu(menuItems, false, false);
    }
</script>
```

## Display custom or default menu items

Control whether to show only custom menu items or combine them with the default context menu:

- When the second parameter of `addCustomMenu()` is `true`, only custom menu items are displayed.
- When the second parameter is `false`, custom items appear alongside default menu options.

```javascript
<script type="text/javascript">
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
            text: 'Lock Form Fields',
            iconCss: 'e-icons e-lock',
            id: 'read_only_true'
        },
        {
            text: 'Unlock Form Fields',
            iconCss: 'e-icons e-unlock',
            id: 'read_only_false'
        },
    ];

    function documentLoaded(arg) {
        var pdfviewer = document.getElementById('pdfviewer').ej2_instances[0];
        pdfviewer.addCustomMenu(menuItems, true);
    }
</script>
```

## Show or hide menu items dynamically

Use the `customContextMenuBeforeOpen()` event to conditionally display or hide menu items based on the current context before the menu opens. This allows menu items to appear only when relevant.

```javascript
<script type="text/javascript">
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
            text: 'Lock Form Fields',
            iconCss: 'e-icons e-lock',
            id: 'read_only_true'
        },
        {
            text: 'Unlock Form Fields',
            iconCss: 'e-icons e-unlock',
            id: 'read_only_false'
        },
    ];

    function documentLoaded(arg) {
        var pdfviewer = document.getElementById('pdfviewer').ej2_instances[0];
        pdfviewer.addCustomMenu(menuItems, false, false);
    }

    function customContextMenuSelect(args) {
        switch (args.id) {
            case 'search_in_google':
                var pdfviewer = document.getElementById('pdfviewer').ej2_instances[0];
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

   function customContextMenuBeforeOpen(args) {
        for (var i = 0; i < args.ids.length; i++) {
            var search = document.getElementById(args.ids[i]);
            var pdfviewer = document.getElementById('pdfviewer').ej2_instances[0];
            search.style.display = 'none';
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
                    for (var j = 0; j < pdfviewer.selectedItems.formFields.length; j++) {
                        var selectedFormFields = pdfviewer.selectedItems.formFields[j];
                        if (selectedFormFields) {
                            var selectedFormField = pdfviewer.selectedItems.formFields[j].isReadonly;
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

</script>
```

## Sample: Custom context menu output

The following complete sample demonstrates a customized context menu with action handlers for all menu items:

```javascript
<script type="text/javascript">
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
            text: 'Lock Form Fields',
            iconCss: 'e-icons e-lock',
            id: 'read_only_true'
        },
        {
            text: 'Unlock Form Fields',
            iconCss: 'e-icons e-unlock',
            id: 'read_only_false'
        },
    ];

    function documentLoaded(arg) {
        var pdfviewer = document.getElementById('pdfviewer').ej2_instances[0];
        pdfviewer.addCustomMenu(menuItems, false, false);
    }

    function customContextMenuSelect(args) {
        switch (args.id) {
            case 'search_in_google':
                var pdfviewer = document.getElementById('pdfviewer').ej2_instances[0];
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

    function customContextMenuBeforeOpen(args) {
        for (var i = 0; i < args.ids.length; i++) {
            var search = document.getElementById(args.ids[i]);
            var pdfviewer = document.getElementById('pdfviewer').ej2_instances[0];
            search.style.display = 'none';
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
                    for (var j = 0; j < pdfviewer.selectedItems.formFields.length; j++) {
                        var selectedFormFields = pdfviewer.selectedItems.formFields[j];
                        if (selectedFormFields) {
                            var selectedFormField = pdfviewer.selectedItems.formFields[j].isReadonly;
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
        var pdfviewer = document.getElementById('pdfviewer').ej2_instances[0];
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
        var pdfviewer = document.getElementById('pdfviewer').ej2_instances[0];
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
        var pdfviewer = document.getElementById('pdfviewer').ej2_instances[0];
        var selectedFormFields = pdfviewer.selectedItems.formFields;
        for (var i = 0; i < selectedFormFields.length; i++) {
            var selectedFormField = selectedFormFields[i];
            if (selectedFormField) {
                pdfviewer.formDesignerModule.updateFormField(selectedFormField, {
                    isReadOnly: true,
                });
            }
            args.cancel = false;
        }
    }

    function setReadOnlyFalse(args) {
        var pdfviewer = document.getElementById('pdfviewer').ej2_instances[0];
        var selectedFormFields = pdfviewer.selectedItems.formFields;
        for (var i = 0; i < selectedFormFields.length; i++) {
            var selectedFormField = selectedFormFields[i];
            if (selectedFormField) {
                pdfviewer.formDesignerModule.updateFormField(selectedFormField, {
                    isReadOnly: false,
                });
            }
            args.cancel = false;
        }
    }

    function contextmenuHelper(args) {
        var pdfviewer = document.getElementById('pdfviewer').ej2_instances[0];
        pdfviewer.addCustomMenu(menuItems, enable.checked, position.checked);
    }

</script>

```

[View sample on GitHub](https://github.com/SyncfusionExamples/asp-core-pdf-viewer-examples/tree/master/How%20to/Custom%20Context%20Menu/PDFViewerSample)
