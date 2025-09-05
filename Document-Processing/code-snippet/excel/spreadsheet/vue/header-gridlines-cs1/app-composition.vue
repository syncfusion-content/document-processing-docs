<template>
  <ejs-spreadsheet ref="spreadsheet" :created="created" :showFormulaBar="false" :showSheetTabs="false">
    <e-sheets>
      <!-- Hiding the headers and gridlines in 'Price Details' sheet -->
      <e-sheet :showGridLines="false" :showHeaders="false">
        <e-ranges>
          <e-range :dataSource="dataSource"></e-range>
        </e-ranges>
        <e-columns>
          <e-column :width=150></e-column>
          <e-column :width=110></e-column>
          <e-column :width=110></e-column>
          <e-column :width=85></e-column>
          <e-column :width=85></e-column>
          <e-column :width=85></e-column>
          <e-column :width=85></e-column>
          <e-column :width=85></e-column>
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
  spreadsheet.value.cellFormat({ textAlign: 'center' }, 'D2:H11');
  // The gridlines have been removed to set border for the range of cells
  spreadsheet.value.setBorder({ border: '1px solid #e0e0e0' }, 'A1:H11');
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
