<template>
  <ejs-spreadsheet ref="spreadsheet" :created="created" :showFormulaBar="false" :allowDelete="true" :showRibbon="false">
    <e-sheets>
      <e-sheet name="Sheet1">
        <e-ranges>
          <e-range :dataSource="dataSource"></e-range>
        </e-ranges>
        <e-columns>
          <e-column :width=90></e-column>
          <e-column :width=220></e-column>
          <e-column :width=90></e-column>
          <e-column :width=140></e-column>
          <e-column :width=90></e-column>
          <e-column :width=100></e-column>
          <e-column :width=100></e-column>
        </e-columns>
      </e-sheet>
      <e-sheet name="Sheet2">
        <e-ranges>
          <e-range :dataSource="dataSource"></e-range>
        </e-ranges>
        <e-columns>
          <e-column :width=90></e-column>
          <e-column :width=220></e-column>
          <e-column :width=90></e-column>
          <e-column :width=140></e-column>
          <e-column :width=90></e-column>
          <e-column :width=100></e-column>
          <e-column :width=100></e-column>
        </e-columns>
      </e-sheet>
    </e-sheets>
  </ejs-spreadsheet>
</template>

<script setup>
import { ref } from "vue";
import { SpreadsheetComponent as EjsSpreadsheet, ColumnsDirective as EColumns, ColumnDirective as EColumn, RangesDirective as ERanges, RangeDirective as ERange, SheetsDirective as ESheets, SheetDirective as ESheet } from "@syncfusion/ej2-vue-spreadsheet";
import { data } from './data.js';

const dataSource = data;
const spreadsheet = ref(null);

const created = function () {
  spreadsheet.value.cellFormat({ fontWeight: 'bold', textAlign: 'center' }, 'A1:H1');
  // deleting the rows from 8th to 10th index. To delete row, the third argument of enum type is passed as 'Row', the last argument specifies the sheet name or index in which the delete operation will perform. By default,active sheet will be considered. It is applicable only for model type Row and Column.
  spreadsheet.value.delete(8, 10, 'Row', 0); // startIndex, endIndex, Row, sheet index
  // deleting the 2nd and 5th indexed columns
  spreadsheet.value.delete(2, 2, 'Column', 'Sheet2');
  spreadsheet.value.delete(5, 5, 'Column');
  spreadsheet.value.delete(0, 0, "Sheet"); // delete the first sheet. sheet index starts from 0
  // Applies style formatting after deleted the rows and columns
  spreadsheet.value.cellFormat({ textAlign: 'center' }, 'A2:A8');
  spreadsheet.value.cellFormat({ textAlign: 'center' }, 'D2:G8');
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
