<template>
  <ejs-spreadsheet ref="spreadsheet" :created="created" :showFormulaBar="false" :cellEdit="cellEdit"
    :beforeCellSave="beforeCellSave">
    <e-sheets>
      <e-sheet selectedRange="E11">
        <e-ranges>
          <e-range :dataSource="dataSource"></e-range>
        </e-ranges>
        <e-columns>
          <e-column :width=120></e-column>
          <e-column :width=180></e-column>
          <e-column :width=100></e-column>
          <e-column :width=120></e-column>
          <e-column :width=120></e-column>
        </e-columns>
        <e-rows>
          <e-row index="10">
            <e-cells>
              <e-cell index="3" value="Total Amount:" style="fontStyle"></e-cell>
              <e-cell formula="=SUM(E2:E10)"></e-cell>
            </e-cells>
          </e-row>
        </e-rows>
      </e-sheet>
    </e-sheets>
  </ejs-spreadsheet>
</template>

<script setup>
import { ref } from "vue";
import { SpreadsheetComponent as EjsSpreadsheet, ColumnsDirective as EColumns, ColumnDirective as EColumn, RowsDirective as ERows, RowDirective as ERow, CellsDirective as ECells, CellDirective as ECell, RangesDirective as ERanges, RangeDirective as ERange, SheetsDirective as ESheets, SheetDirective as ESheet } from "@syncfusion/ej2-vue-spreadsheet";
import { data } from './data.js';

const spreadsheet = ref(null);
const dataSource = data;
const fontStyle = { fontWeight: 'bold' };

const created = function () {
  spreadsheet.value.cellFormat({ fontWeight: 'bold', textAlign: 'center' }, 'A1:E1');
  spreadsheet.value.cellFormat({ textAlign: 'center' }, 'A2:A10');
  spreadsheet.value.cellFormat({ textAlign: 'center' }, 'C2:C10');
  spreadsheet.value.numberFormat('$#,##0.00', 'D2:D10');
  spreadsheet.value.numberFormat('$#,##0.00', 'E2:E11');
}
const cellEdit = function (args) {
  // Preventing the editing in 5th(Amount) column.
  if (args.address.includes('E')) { args.cancel = true; }
}
const beforeCellSave = function (args) {
  // Prevent saving the edited changes in 4th(Rate) column.
  if (args.address.includes('D')) {
    args.cancel = true;
    // Manually removes the editable state without saving the changes. Use `endEdit` method if you want to save the changes.
    spreadsheet.value.closeEdit();
  }
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
