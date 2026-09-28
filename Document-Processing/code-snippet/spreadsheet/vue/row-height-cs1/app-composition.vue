<template>
  <ejs-spreadsheet ref="spreadsheet" :created="created">
    <e-sheets>
      <e-sheet>
        <e-ranges>
          <e-range :dataSource="dataSource"></e-range>
        </e-ranges>
      </e-sheet>
    </e-sheets>
  </ejs-spreadsheet>
</template>

<script setup>
import { ref } from "vue";
import { SpreadsheetComponent as EjsSpreadsheet, RangesDirective as ERanges, RangeDirective as ERange, SheetsDirective as ESheets, SheetDirective as ESheet } from "@syncfusion/ej2-vue-spreadsheet";
import { data } from './data.js';

const spreadsheet = ref(null);
const dataSource = data;

const created = function () {
  // To change height for single row
  spreadsheet.value.setRowsHeight(40, ['2']);
  // To change height for multiple rows
  spreadsheet.value.setRowsHeight(40, ['4:8', '10:12']);
}
</script>
<style>
@import '../node_modules/@syncfusion/ej2-tailwind3-theme/styles/spreadsheet/index.css';
</style>
