<template>
  <ejs-spreadsheet ref="spreadsheet" :created="created" calculationMode="Automatic" >
    <e-sheets>
      <e-sheet name="Product Details">
        <e-ranges>
          <e-range :dataSource="dataSource" startCell="A1"></e-range>
        </e-ranges>
        <e-columns>
          <e-column :width=130></e-column>
          <e-column :width=92></e-column>
          <e-column :width=96></e-column>
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
