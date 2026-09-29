<template>
  <ejs-spreadsheet ref="spreadsheet" :allowSorting='true' :dataBound="dataBound" :sortComplete="sortComplete">
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
import { tradeData } from './data.js';

const spreadsheet = ref(null);
const dataSource = tradeData;

const dataBound = function () {
  let sortDescriptors = [
    {
      field: 'F',
      order: 'Ascending'
    },
    {
      field: 'E',
      order: 'Ascending'
    },
    {
      field: 'C',
      order: 'Descending'
    }];
  if (spreadsheet.value.ej2Instances.activeSheetIndex === 0) {
    spreadsheet.value.sort({ sortDescriptors: sortDescriptors, containsHeader: true }, 'A1:H30');
  }
}
const sortComplete = function (args) {
  spreadsheet.value.selectRange(args.range);
  // code here.
}
</script>
<style>
@import '../node_modules/@syncfusion/ej2-tailwind3-theme/styles/spreadsheet/index.css';
</style>
