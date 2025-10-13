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
import { DataUtil } from '@syncfusion/ej2-data';
import { tradeData } from './data.js';

const dataSource = tradeData;
const spreadsheet = ref(null);

const sortComplete = function (args) {
  spreadsheet.value.selectRange(args.range);
  // code here.
}

const dataBound = function () {
  if (spreadsheet.value.ej2Instances.activeSheetIndex === 0) {
    spreadsheet.value.sort({ sortDescriptors: { field: 'F', sortComparer: mySortComparer }, containsHeader: true }, 'A1:H20');
  }
}

const mySortComparer = function (x, y) {
  // custom sort comparer to sort based on the custom list.
  let customList = ['Perfect', 'Sufficient', 'Insufficient'];
  let comparer = DataUtil.fnSort('Ascending');
  return comparer(x ? customList.indexOf(x.value) : x, y ? customList.indexOf(y.value) : y);
};
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
