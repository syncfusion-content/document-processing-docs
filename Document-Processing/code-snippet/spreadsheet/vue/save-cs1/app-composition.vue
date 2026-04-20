<template>
  <div>
    <ejs-dropdownbutton :items='items' :select='itemSelect'>Save</ejs-dropdownbutton>
    <ejs-spreadsheet ref="spreadsheet">
      <e-sheets>
        <e-sheet>
          <e-ranges>
            <e-range :dataSource="dataSource"></e-range>
          </e-ranges>
          <e-columns>
            <e-column :width="width1"></e-column>
            <e-column :width="width2"></e-column>
          </e-columns>
        </e-sheet>
      </e-sheets>
    </ejs-spreadsheet>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { SpreadsheetComponent as EjsSpreadsheet, ColumnsDirective as EColumns, ColumnDirective as EColumn, RangesDirective as ERanges, RangeDirective as ERange, SheetsDirective as ESheets, SheetDirective as ESheet, getRangeIndexes } from "@syncfusion/ej2-vue-spreadsheet";
import { addClass, removeClass } from '@syncfusion/ej2-base';
import { DropDownButtonComponent as EjsDropdownbutton } from "@syncfusion/ej2-vue-splitbuttons";
import { defaultData } from './data.js';

const spreadsheet = ref(null);
const dataSource = defaultData
const width1 = 130
const width2 = 96
const items = [
  {
    text: "Save As xlsx"
  },
  {
    text: "Save As xls"
  },
  {
    text: "Save As csv"
  },
  {
    text: "Save As pdf"
  }
];

const itemSelect = function (args) {
  if (args.item.text === 'Save As xlsx')
    spreadsheet.value.save({ url: 'https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/save', fileName: "Sample", saveType: "Xlsx" });
  if (args.item.text === 'Save As xls')
    spreadsheet.value.save({ url: 'https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/save', fileName: "Sample", saveType: "Xls" });
  if (args.item.text === 'Save As csv')
    spreadsheet.value.save({ url: 'https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/save', fileName: "Sample", saveType: "Csv" });
  if (args.item.text === 'Save As pdf')
    spreadsheet.value.save({ url: 'https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/save', fileName: "Sample", saveType: "Pdf" });
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
@import '../node_modules/@syncfusion/ej2-grids/styles/material.css';
@import "../node_modules/@syncfusion/ej2-vue-spreadsheet/styles/material.css";
</style>
