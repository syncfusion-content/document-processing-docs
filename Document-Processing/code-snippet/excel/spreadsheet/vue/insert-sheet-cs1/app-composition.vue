<template>
  <ejs-spreadsheet ref="spreadsheet" :created="created" :showFormulaBar="false" :showRibbon="false">
    <e-sheets>
      <e-sheet name="Price Details">
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

const spreadsheet = ref(null);
const dataSource = data;
const created = function () {
  // Applies style formatting to the active sheet before inserting a new sheet
  spreadsheet.value.cellFormat({ fontWeight: 'bold', textAlign: 'center' }, 'A1:H1');
  spreadsheet.value.cellFormat({ textAlign: 'center' }, 'D2:H11');
  // inserting a new sheet with data at 1st index
  // You can also insert empty sheets by specifying the start and end sheet index instead of sheet model
  spreadsheet.value.insertSheet([{
    index: 1,
    name: 'Inserted Sheet',
    ranges: [{ dataSource: dataSource }],
    columns: [{ width: 150 }, { width: 110 }, { width: 110 }, { width: 85 }, { width: 85 }, { width: 85 }, { width: 85 },
    { width: 85 }]
  }]);
  // Applies style formatting for the inserted sheet
  spreadsheet.value.cellFormat({ fontWeight: 'bold', textAlign: 'center' }, 'Inserted Sheet!A1:H1');
  spreadsheet.value.cellFormat({ textAlign: 'center' }, 'Inserted Sheet!D2:H11');
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
