<template>
  <ejs-spreadsheet ref="spreadsheet" :created="created" >
    <e-sheets>
      <e-sheet name="Car Sales Report">
        <e-ranges>
          <e-range :dataSource="defaultData" startCell="A1"></e-range>
        </e-ranges>
        <e-columns>
          <e-column :width=200></e-column>
          <e-column :width=140></e-column>
          <e-column :width=90></e-column>
        </e-columns>
        <e-rows>
          <e-row :index=0 customHeight="true">
            <e-cells>
              <e-cell :index=1 value="Group ID"></e-cell>
            </e-cells>
          </e-row>
        </e-rows>
      </e-sheet>
      <e-sheet name="List Validation Source">
        <e-ranges>
          <e-range :dataSource="grpData" startCell="A1"></e-range>
        </e-ranges>
        <e-columns>
          <e-column :width=200></e-column>
          <e-column :width=140></e-column>
        </e-columns>
      </e-sheet>
    </e-sheets>
  </ejs-spreadsheet>
</template>

<script setup>
import { ref } from 'vue';
import { SpreadsheetComponent as EjsSpreadsheet, ColumnsDirective as EColumns, ColumnDirective as EColumn, SheetsDirective as ESheets, SheetDirective as ESheet, RangesDirective as ERanges, RangeDirective as ERange, CellsDirective as ECells, CellDirective as ECell, RowsDirective as ERows, RowDirective as ERow } from "@syncfusion/ej2-vue-spreadsheet";
import { data, groupData } from './data.js';

const defaultData = data;
const grpData = groupData;

const spreadsheet = ref(null);

const created = function () {
  // Apply styles to the specified range in the active sheet.
  spreadsheet.cellFormat({ fontWeight: 'bold', textAlign: 'center', verticalAlign: 'middle' }, 'A1:B1');
  //Pass the value1 as the reference of cell range to provide more values.
  spreadsheet.addDataValidation(
    {
        type: 'List',
        inCellDropDown: true,
        value1: '=List Validation source!$B$2:$B$41',
    },
    'B2:B30'
  );
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
