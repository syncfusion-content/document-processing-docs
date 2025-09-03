<template>
  <div id="app">
    <ul>
      <ejs-checkbox label='Hide Default Context Menu' id="enable" @change="contextmenuHelper"
        checked="false"></ejs-checkbox>
      <ejs-checkbox label='Add Custom option at bottom' id="position" @change="contextmenuHelper"
        checked="false"></ejs-checkbox>
    </ul>
    <ejs-pdfviewer id="pdfViewer" ref="pdfViewer" :resourceUrl="resourceUrl" :documentPath="documentPath"
      :documentLoad="documentLoad" :customContextMenuBeforeOpen="customContextMenuBeforeOpen"
      :customContextMenuSelect="customContextMenuSelect">
    </ejs-pdfviewer>
  </div>
</template>

<script setup>
import { provide, ref } from "vue";
import {
  PdfViewerComponent as EjsPdfviewer, Toolbar, Magnification, Navigation, LinkAnnotation,
  BookmarkView, ThumbnailView, Print, TextSelection, TextSearch,
  Annotation, FormDesigner, FormFields, PageOrganizer
} from '@syncfusion/ej2-vue-pdfviewer';
import { CheckBoxComponent as EjsCheckbox } from "@syncfusion/ej2-vue-buttons";

const pdfViewer = ref(null);
const documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
const resourceUrl = "https://cdn.syncfusion.com/ej2/25.1.35/dist/ej2-pdfviewer-lib";
const menuItems = ref([{
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
]);

provide('PdfViewer', [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
  Print, TextSelection, TextSearch, Annotation, FormFields, FormDesigner, PageOrganizer]);

const documentLoad = function () {
  const viewer = pdfViewer.value.ej2Instances;
  viewer.addCustomMenu(menuItems.value, false, false);
}
const customContextMenuSelect = function (args) {
  const viewer = pdfViewer.value.ej2Instances;
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
    default:
      break;
  }
}

const customContextMenuBeforeOpen = function (args) {
  const viewer = pdfViewer.value.ej2Instances;
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
        for (var j = 0; j < viewer.selectedItems.formFields.length; j++) {
          var selectedFormFields = viewer.selectedItems.formFields[j];
          if (selectedFormFields) {
            var selectedFormField = viewer.selectedItems.formFields[j].isReadonly;
            var displayMenu = (isReadOnlyOption && !selectedFormField) || (!isReadOnlyOption && selectedFormField);
            search.style.display = displayMenu ? 'block' : 'none';
          }
        }
      } else if (args.ids[i] === 'formfield properties' && viewer.selectedItems.formFields.length !== 0) {
        search.style.display = 'block';
      }
    }
  }
}

const lockAnnotations = function (args) {
  const viewer = pdfViewer.value.ej2Instances;
  for (var i = 0; i < viewer.annotationCollection.length; i++) {
    if (viewer.annotationCollection[i].uniqueKey === viewer.selectedItems.annotations[0].id) {
      viewer.annotationCollection[i].annotationSettings.isLock = true;
      viewer.annotationCollection[i].isCommentLock = true;
      viewer.annotation.editAnnotation(viewer.annotationCollection[i]);
    }
    args.cancel = false;
  }
}

const unlockAnnotations = function (args) {
  const viewer = pdfViewer.value.ej2Instances;
  for (var i = 0; i < viewer.annotationCollection.length; i++) {
    if (viewer.annotationCollection[i].uniqueKey === viewer.selectedItems.annotations[0].id) {
      viewer.annotationCollection[i].annotationSettings.isLock = false;
      viewer.annotationCollection[i].isCommentLock = false;
      viewer.annotation.editAnnotation(viewer.annotationCollection[i]);
    }
    args.cancel = false;
  }
}

const setReadOnlyTrue = function (args) {
  const viewer = pdfViewer.value.ej2Instances;
  var selectedFormFields = viewer.selectedItems.formFields;
  for (var i = 0; i < selectedFormFields.length; i++) {
    var selectedFormField = selectedFormFields[i];
    if (selectedFormField) {
      viewer.formDesignerModule.updateFormField(selectedFormField, {
        isReadOnly: true,
      });
    }
    args.cancel = false;
  }
}

const setReadOnlyFalse = function (args) {
  const viewer = pdfViewer.value.ej2Instances;
  var selectedFormFields = viewer.selectedItems.formFields;
  for (var i = 0; i < selectedFormFields.length; i++) {
    var selectedFormField = selectedFormFields[i];
    if (selectedFormField) {
      viewer.formDesignerModule.updateFormField(selectedFormField, {
        isReadOnly: false,
      });
    }
    args.cancel = false;
  }
}

const contextmenuHelper = function () {
  const viewer = pdfViewer.value.ej2Instances;
  viewer.addCustomMenu(menuItems.value, enable.checked, position.checked);
}
</script>
<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-lists/styles/material.css';
@import '../node_modules/@syncfusion/ej2-vue-pdfviewer/styles/material.css';

#pdfViewer {
  height: 640px;
}
</style>
