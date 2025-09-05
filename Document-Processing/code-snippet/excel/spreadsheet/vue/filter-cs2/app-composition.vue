<template>
  <div>
    <ejs-button class="e-btn custom-btn" @click="getFilterData">Get Filtered Data</ejs-button>
    <ejs-spreadsheet ref="spreadsheet" :created="created">
      <e-sheets>
        <e-sheet>
          <e-ranges>
            <e-range :dataSource="dataSource"></e-range>
          </e-ranges>
          <e-columns>
            <e-column :width="width1"></e-column>
            <e-column :width="width2"></e-column>
            <e-column :width="width2"></e-column>
            <e-column :width="width1"></e-column>
            <e-column :width="width2"></e-column>
            <e-column :width="width3"></e-column>
          </e-columns>
        </e-sheet>
      </e-sheets></ejs-spreadsheet>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { SpreadsheetComponent as EjsSpreadsheet, ColumnsDirective as EColumns, ColumnDirective as EColumn, RangesDirective as ERanges, RangeDirective as ERange, SheetsDirective as ESheets, SheetDirective as ESheet } from "@syncfusion/ej2-vue-spreadsheet";
import { ButtonComponent as EjsButton } from "@syncfusion/ej2-vue-buttons";
import { defaultData } from './data.js';

const spreadsheet = ref(null);
const dataSource = defaultData;
const width1 = 180;
const width2 = 130;
const width3 = 120;

const created = function () {
  spreadsheet.value.cellFormat({ fontWeight: 'bold', textAlign: 'center', verticalAlign: 'middle' }, 'A1:F1');
  let predicates = [{
    field: 'C',
    operator: 'equal',
    value: 'Pink',
    matchCase: false
  }];
  spreadsheet.value.applyFilter(predicates, 'A1:C7');
}
const getFilterData = function () {
  let activeSheet = spreadsheet.value.ej2Instances.getActiveSheet();
  let usedRange = activeSheet.usedRange;
  for (let i = 0; i <= usedRange.rowIndex; i++) {
    // Get the filtered row using isFiltered property.
    let filteredRow = (activeSheet.rows[i]).isFiltered;
    if (!filteredRow) {
      let rowData = spreadsheet.value.getRowData(i);
      console.log("Row:", i + 1, "Cells", rowData);
    }
  }
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

.custom-btn {
  margin: 0 0 10px 0;
}
</style>
