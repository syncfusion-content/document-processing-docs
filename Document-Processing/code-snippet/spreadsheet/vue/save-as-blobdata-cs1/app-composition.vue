<template>
  <div>
    <ejs-spreadsheet ref="spreadsheet" :openUrl="openUrl" :saveUrl="saveUrl" :beforeSave="beforeSave" :saveComplete="saveComplete">
      <e-sheets>
        <e-sheet name="Car Sales Report">
          <e-ranges>
            <e-range :dataSource="dataSource"></e-range>
          </e-ranges>
          <e-columns>
            <e-column :width=180></e-column>
            <e-column :width=130></e-column>
            <e-column :width=130></e-column>
            <e-column :width=180></e-column>
            <e-column :width=120></e-column>
            <e-column :width=130></e-column>
          </e-columns>
        </e-sheet>
      </e-sheets>
    </ejs-spreadsheet>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { SpreadsheetComponent as EjsSpreadsheet, SheetsDirective as ESheets, SheetDirective as ESheet, RangesDirective as ERanges, RangeDirective as ERange, ColumnsDirective as EColumns, ColumnDirective as EColumn } from "@syncfusion/ej2-vue-spreadsheet";
import { data } from './data.js';

const spreadsheet = ref(null);
const dataSource = data;
const openUrl = 'https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/open';
const saveUrl = 'https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/save';

const beforeSave = function (args) {
  args.needBlobData = true; // To trigger the saveComplete event.
  args.isFullPost = false; // Get the spreadsheet data as blob data in the saveComplete event.
}
const saveComplete = function (args) {
  // To obtain blob data.
  console.log("Spreadsheet BlobData: ", args.blobData);
}

</script>
<style>
@import '../node_modules/@syncfusion/ej2-tailwind3-theme/styles/spreadsheet/index.css';

.custom-btn {
  margin-bottom: 10px;
}
</style>
