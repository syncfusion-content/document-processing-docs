<template>
  <ejs-spreadsheet ref="spreadsheet" :created="created" :showFormulaBar="false">
    <e-sheets>
      <e-sheet name="Merge Cells">
        <e-ranges>
          <e-range :dataSource="dataSource"></e-range>
        </e-ranges>
        <e-columns>
          <e-column :width=90></e-column>
          <e-column :width=150></e-column>
          <e-column :width=100></e-column>
          <e-column :width=100></e-column>
          <e-column :width=100></e-column>
          <e-column :width=100></e-column>
          <e-column :width=100></e-column>
          <e-column :width=100></e-column>
          <e-column :width=100></e-column>
          <e-column :width=100></e-column>
          <e-column :width=120></e-column>
          <e-column :width=120></e-column>
          <e-column :width=120></e-column>
          <e-column :width=120></e-column>
          <e-column :width=120></e-column>
          <e-column :width=120></e-column>
          <e-column :width=100></e-column>
          <e-column :width=100></e-column>
          <e-column :width=100></e-column>
          <e-column :width=100></e-column>
        </e-columns>
        <e-rows>
          <e-row :height=35></e-row>
          <e-row :height=35>
            <e-cells>
              <e-cell :index=1 :rowSpan=2></e-cell>
              <e-cell :colSpan=2></e-cell>
              <e-cell :index=6 :colSpan=3></e-cell>
              <e-cell :index=10 :rowSpan=2 :colSpan=3></e-cell>
              <e-cell :index=13 :colSpan=2></e-cell>
              <e-cell :index=17 :colSpan=2></e-cell>
            </e-cells>
          </e-row>
          <e-row :height=35>
            <e-cells>
              <e-cell :index=3 :colSpan=3></e-cell>
              <e-cell :index=6 :colSpan=4></e-cell>
              <e-cell :index=13 :colSpan=3></e-cell>
              <e-cell :index=17 :colSpan=2></e-cell>
            </e-cells>
          </e-row>
          <e-row :height=35>
            <e-cells>
              <e-cell :index=2 :colSpan=3></e-cell>
              <e-cell :index=5 :colSpan=2></e-cell>
              <e-cell :index=7 :colSpan=3></e-cell>
              <e-cell :index=15 :colSpan=2></e-cell>
              <e-cell :index=17 :colSpan=2></e-cell>
            </e-cells>
          </e-row>
          <e-row :height=35>
            <e-cells>
              <e-cell :index=2 :colSpan=3></e-cell>
              <e-cell :index=6 :colSpan=4></e-cell>
              <e-cell :index=16 :colSpan=2></e-cell>
            </e-cells>
          </e-row>
          <e-row :height=35>
            <e-cells>
              <e-cell :index=2 :colSpan=4></e-cell>
              <e-cell :index=7 :colSpan=3></e-cell>
              <e-cell :index=15 :colSpan=2></e-cell>
              <e-cell :index=17 :colSpan=2></e-cell>
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
  spreadsheet.value.cellFormat({ fontWeight: 'bold', textAlign: 'center' }, 'A1:S1');
  spreadsheet.value.numberFormat('h:mm AM/PM', 'C1:S1');
  spreadsheet.value.cellFormat({ verticalAlign: 'middle' }, 'A1:S11');
  // Merging the `K4:M4` cells using method
  spreadsheet.value.merge('K4:M4');
  // Merging the 5th and 6th row cells across 11th, 12th and 13th column
  spreadsheet.value.merge('K5:M6', 'Vertically');
  // Merging the 18th and 19th column cells across 2nd, 3rd and 4th row
  spreadsheet.value.merge('N4:O6', 'Horizontally');
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