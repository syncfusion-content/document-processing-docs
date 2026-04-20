<template>
  <ejs-spreadsheet ref="spreadsheet" :created="created" :showFormulaBar="false">
    <e-sheets>
      <e-sheet name="Movie List">
        <e-ranges>
          <e-range :dataSource="dataSource"></e-range>
        </e-ranges>
        <e-columns>
          <e-column index=1 :width="100"></e-column>
          <e-column :width="140"></e-column>
          <e-column :width="90"></e-column>
          <e-column :width="150"></e-column>
          <e-column :width="120"></e-column>
          <e-column :width="90"></e-column>
          <e-column :width="180"></e-column>
        </e-columns>
        <e-rows>
          <e-row :height="30"></e-row>
          <e-row>
            <e-cells>
              <e-cell :index=7 wrap="true"></e-cell>
            </e-cells>
          </e-row>
          <e-row>
            <e-cells>
              <e-cell :index=7 wrap="true"></e-cell>
            </e-cells>
          </e-row>
          <e-row>
            <e-cells>
              <e-cell :index=7 wrap="true"></e-cell>
            </e-cells>
          </e-row>
          <e-row>
            <e-cells>
              <e-cell :index=7 wrap="true"></e-cell>
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
const created = function () {
  spreadsheet.value.cellFormat({ fontWeight: 'bold', textAlign: 'center' }, 'A1:H1');
  spreadsheet.value.cellFormat({ verticalAlign: 'middle' }, 'A1:H5');
  spreadsheet.value.cellFormat({ textAlign: 'center' }, 'A2:B5');
  spreadsheet.value.cellFormat({ textAlign: 'center' }, 'D2:D5');
  // To wrap the cells from E2 to E5 range
  spreadsheet.value.wrap('E2:E5');
  // To unwrap the H3 cell
  spreadsheet.value.wrap('H3', false);
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
