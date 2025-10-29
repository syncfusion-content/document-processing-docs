<template>
  <ejs-spreadsheet ref="spreadsheet" :allowSorting='true' :dataBound="dataBound" :beforeSort="beforeSort"
    :sortComplete="sortComplete">
    <e-sheets>
      <e-sheet>
        <e-ranges>
          <e-range :dataSource="dataSource"></e-range>
        </e-ranges>
      </e-sheet>
    </e-sheets></ejs-spreadsheet>
</template>

<script setup>
import { ref } from "vue";
import { SpreadsheetComponent as EjsSpreadsheet, RangesDirective as ERanges, RangeDirective as ERange, SheetsDirective as ESheets, SheetDirective as ESheet } from "@syncfusion/ej2-vue-spreadsheet";
import { defaultData } from './data.js';

const spreadsheet = ref(null);
const dataSource = defaultData;

const dataBound = function () {
  if (spreadsheet.value.ej2Instances.activeSheetIndex === 0) {
    spreadsheet.value.sort({ containsHeader: true }, 'A1:H11');
  }
}
const beforeSort = function (args) {
  //code here to handle sorting arguments.
}
const sortComplete = function (args) {
  spreadsheet.value.selectRange(args.range);
  // code here.
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
