<template>
  <div>
    <ejs-dropdownbutton :items='items' :select='itemSelect'>Clipboard</ejs-dropdownbutton>
    <ejs-spreadsheet ref="spreadsheet" :created="created">
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
      </e-sheets></ejs-spreadsheet>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { SpreadsheetComponent as EjsSpreadsheet, ColumnsDirective as EColumns, ColumnDirective as EColumn, RangesDirective as ERanges, RangeDirective as ERange, SheetsDirective as ESheets, SheetDirective as ESheet } from "@syncfusion/ej2-vue-spreadsheet";
import { DropDownButtonComponent as EjsDropdownbutton } from "@syncfusion/ej2-vue-splitbuttons";
import { defaultData } from './data.js';

const dataSource = defaultData;
const width1 = 130;
const width2 = 96;
const spreadsheet = ref(null);
const items = [
  {
    text: "Cut"
  },
  {
    text: "Copy"
  },
  {
    text: "Paste"
  }];

const created = function () {
  spreadsheet.value.cellFormat({ fontWeight: 'bold', textAlign: 'center' }, 'A1:H1');
};

const itemSelect = function (args) {
  if (args.item.text === 'Cut')
    spreadsheet.value.cut();
  if (args.item.text === 'Copy')
    spreadsheet.value.copy();
  if (args.item.text === 'Paste')
    spreadsheet.value.paste();
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-spreadsheet/styles/material.css";
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-grids/styles/material.css';
@import "../node_modules/@syncfusion/ej2-spreadsheet/styles/material.css";
</style>
