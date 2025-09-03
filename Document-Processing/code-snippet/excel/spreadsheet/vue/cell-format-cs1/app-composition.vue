<template>
  <ejs-spreadsheet ref="spreadsheet" :created="created" :showFormulaBar="false" :showRibbon="false"
    :showSheetTabs="false" :allowInsert="false" :allowDelete="false" :allowEditing="false">
    <e-sheets>
      <e-sheet :showGridLines="false">
        <e-ranges>
          <e-range :dataSource="dataSource" startCell="A2"></e-range>
        </e-ranges>
        <e-columns>
          <e-column :width=100></e-column>
          <e-column :width=200></e-column>
          <e-column :width=110></e-column>
          <e-column :width=140></e-column>
          <e-column :width=90></e-column>
        </e-columns>
        <e-rows>
          <e-row :height=35 customHeight="true">
            <e-cells>
              <e-cell value="Order Summary" colSpan=5></e-cell>
            </e-cells>
          </e-row>
          <e-row :height=30>
            <e-cells>
              <e-cell index=2></e-cell>
            </e-cells>
          </e-row>
          <e-row :height=30></e-row>
          <e-row :height=30></e-row>
          <e-row :height=30></e-row>
          <e-row :height=30></e-row>
          <e-row :height=30></e-row>
          <e-row :height=30></e-row>
          <e-row :height=30></e-row>
          <e-row :height=30></e-row>
          <e-row :height=30></e-row>
          <e-row :height=30></e-row>
        </e-rows>
      </e-sheet>
    </e-sheets>
  </ejs-spreadsheet>
</template>

<script setup>
import { ref } from 'vue';
import { SpreadsheetComponent as EjsSpreadsheet, ColumnsDirective as EColumns, ColumnDirective as EColumn, SheetsDirective as ESheets, SheetDirective as ESheet, RangesDirective as ERanges, RangeDirective as ERange, CellsDirective as ECells, CellDirective as ECell, RowsDirective as ERows, RowDirective as ERow } from "@syncfusion/ej2-vue-spreadsheet";
import { data } from './data.js';

const dataSource = data;
const spreadsheet = ref(null);

const created = function () {
  // Setting common styles to table header cells
  spreadsheet.value.cellFormat({ fontWeight: 'bold', fontSize: '12pt', backgroundColor: '#279377', color: '#ffffff' }, 'A2:E2');
  // Setting common styles to whole table cells
  spreadsheet.value.cellFormat({ verticalAlign: 'middle', fontFamily: 'Axettac Demo' }, 'A2:E12');
  spreadsheet.value.cellFormat({ textAlign: 'right' }, 'B2');
  spreadsheet.value.cellFormat({ fontFamily: 'Axettac Demo', verticalAlign: 'middle', textAlign: 'center', fontSize: '18pt', fontWeight: 'bold', color: '#279377', border: '1px solid #e0e0e0' }, 'A1');
  // Column wise styles setting
  spreadsheet.value.cellFormat({ textAlign: 'center' }, 'A2:A12');
  // Setting text-indent to 2 and 4 column
  let style = { textAlign: 'left', textIndent: '8pt' };
  spreadsheet.value.cellFormat(style, 'B2:B12');
  spreadsheet.value.cellFormat(style, 'D2:D12');
  spreadsheet.value.cellFormat({ fontStyle: 'italic', textAlign: 'right' }, 'C3:C12');
  spreadsheet.value.cellFormat({ textAlign: 'center' }, 'E2:E12');
  // Applied border to range of cells using 'setBorder' method
  spreadsheet.value.setBorder({ borderLeft: '1px solid #e0e0e0', borderRight: '1px solid #e0e0e0' }, 'A2:E2');
  spreadsheet.value.setBorder({ border: '1px solid #e0e0e0' }, 'A4:E11', 'Horizontal');
  spreadsheet.value.setBorder({ border: '1px solid #e0e0e0' }, 'A3:E12', 'Outer');
  spreadsheet.value.cellFormat({ color: '#10c469', textDecoration: 'line-through' }, 'E3:E4');
  spreadsheet.value.cellFormat({ color: '#10c469', textDecoration: 'line-through' }, 'E9');
  spreadsheet.value.cellFormat({ color: '#10c469', textDecoration: 'line-through' }, 'E12');
  spreadsheet.value.cellFormat({ color: '#FFC107', textDecoration: 'underline' }, 'E5');
  spreadsheet.value.cellFormat({ color: '#FFC107', textDecoration: 'underline' }, 'E8');
  spreadsheet.value.cellFormat({ color: '#FFC107', textDecoration: 'underline' }, 'E11');
  spreadsheet.value.cellFormat({ color: '#62c9e8' }, 'E6');
  spreadsheet.value.cellFormat({ color: '#62c9e8' }, 'E10');
  spreadsheet.value.cellFormat({ color: '#ff5b5b' }, 'E7');
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
