<template>
  <ejs-spreadsheet ref="spreadsheet" :created="created" :showFormulaBar="false" :showSheetTabs="false"
    :showRibbon="false">
    <e-sheets>
      <e-sheet>
        <e-ranges>
          <e-range :dataSource="dataSource"></e-range>
        </e-ranges>
        <e-columns>
          <e-column :width=150></e-column>
          <e-column :width=100 :hidden="true"></e-column>
          <e-column :width=100 :hidden="true"></e-column>
          <e-column :width=80></e-column>
          <e-column :width=80></e-column>
          <e-column :width=80></e-column>
          <e-column :width=80></e-column>
          <e-column :width=80></e-column>
        </e-columns>
        <e-rows>
          <e-row index=2 :hidden="true"></e-row>
          <e-row :hidden="true"></e-row>
        </e-rows>
      </e-sheet>
    </e-sheets>
  </ejs-spreadsheet>
</template>

<script setup>
import { ref } from "vue";
import { SpreadsheetComponent as EjsSpreadsheet, ColumnsDirective as EColumns, ColumnDirective as EColumn, RowsDirective as ERows, RowDirective as ERow, RangesDirective as ERanges, RangeDirective as ERange, SheetsDirective as ESheets, SheetDirective as ESheet } from "@syncfusion/ej2-vue-spreadsheet";
import { data } from './data.js';

const spreadsheet = ref(null);
const dataSource = data;

const created = function () {
  spreadsheet.value.cellFormat({ fontWeight: 'bold', textAlign: 'center' }, 'A1:H1');
  // Unhide the 2nd index hidden column
  spreadsheet.value.hideColumn(1, 1, false);
  // Unhide the 3rd index hidden row
  spreadsheet.value.hideRow(3, 3, false);
  // Hiding the 6th index column
  spreadsheet.value.hideColumn(6);
  // Hiding the 8th and 9th index row
  spreadsheet.value.hideRow(8, 9);
  spreadsheet.value.cellFormat({ textAlign: 'center' }, 'D2:H11');
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
