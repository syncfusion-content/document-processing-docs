<template>
  <div>
    <ejs-dropdownbutton :items='items' :select='itemSelect'>Clear</ejs-dropdownbutton>
    <ejs-spreadsheet ref="spreadsheet" :created="created">
      <e-sheets>
        <e-sheet>
          <e-columns>
            <e-column :width=88></e-column>
            <e-column :width=88></e-column>
            <e-column :width=160></e-column>
            <e-column :width=100></e-column>
            <e-column :width=150></e-column>
          </e-columns>
          <e-ranges>
            <e-range :dataSource="dataSource"></e-range>
          </e-ranges>
        </e-sheet>
      </e-sheets></ejs-spreadsheet>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { SpreadsheetComponent as EjsSpreadsheet, ColumnsDirective as EColumns, ColumnDirective as EColumn, RangesDirective as ERanges, RangeDirective as ERange, SheetsDirective as ESheets, SheetDirective as ESheet } from "@syncfusion/ej2-vue-spreadsheet";
import { DropDownButtonComponent as EjsDropdownbutton } from "@syncfusion/ej2-vue-splitbuttons";
import { orderData } from './data.js';

const dataSource = orderData;
const spreadsheet = ref(null);
const items = [
  {
    text: "Clear All"
  },
  {
    text: "Clear Formats"
  },
  {
    text: "Clear Contents"
  },
  {
    text: "Clear Hyperlinks"
  }]
const created = function () {
  spreadsheet.value.cellFormat({ fontWeight: 'bold', fontSize: '12pt' }, 'A1:E1');
  spreadsheet.value.cellFormat({ color: '#10c469' }, 'B1:B10');
};

const itemSelect = function (args) {
  if (args.item.text === 'Clear All')
    spreadsheet.value.clear({ type: 'Clear All', range: 'D1:D10' }); // Clear the content, formats and hyperlinks applied in the provided range.
  if (args.item.text === 'Clear Formats')
    spreadsheet.value.clear({ type: 'Clear Formats', range: 'B1:B10' }); // Clear the formats applied in the provided range
  if (args.item.text === 'Clear Contents')
    spreadsheet.value.clear({ type: 'Clear Contents', range: 'A1:A10' }); // Clear the content in the provided range
  if (args.item.text === 'Clear Hyperlinks')
    spreadsheet.value.clear({ type: 'Clear Hyperlinks', range: 'F2:F6' }); // Clear the hyperlinks applied in the provided range
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
