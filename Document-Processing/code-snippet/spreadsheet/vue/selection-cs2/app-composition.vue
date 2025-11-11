<template>
  <ejs-spreadsheet ref="spreadsheet" :created="created" :selectionSettings="selectionSettings">
    <e-sheets>
      <e-sheet name="Price Details">
        <e-ranges>
          <e-range :dataSource="dataSource1"></e-range>
        </e-ranges>
        <e-columns>
          <e-column :width=100></e-column>
          <e-column :width=100></e-column>
          <e-column :width=100></e-column>
          <e-column :width=100></e-column>
        </e-columns>
      </e-sheet>
    </e-sheets>
  </ejs-spreadsheet>
</template>

<script setup>
import { ref } from "vue";
import { SpreadsheetComponent as EjsSpreadsheet, ColumnsDirective as EColumns, ColumnDirective as EColumn, RangesDirective as ERanges, RangeDirective as ERange, SheetsDirective as ESheets, SheetDirective as ESheet, getRangeAddress } from "@syncfusion/ej2-vue-spreadsheet";
import { priceData } from './data.js';

const spreadsheet = ref(null);
const selectionSettings = { mode: 'Multiple' };
const dataSource1 = priceData;
const created = function () {
  spreadsheet.value.cellFormat({ fontWeight: 'bold', textAlign: 'center' }, 'A1:H1');
  let rowCount = spreadsheet.value.ej2Instances.getActiveSheet().rowCount;
  spreadsheet.value.selectRange(getRangeAddress([0, 2, rowCount, 2]));
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