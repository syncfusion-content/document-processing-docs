<template>
  <ejs-spreadsheet ref="spreadsheet" :created="created" :showRibbon="false" :beforeDataBound="beforeDataBound"
    :showSheetTabs="false">
    <e-definednames>
      <e-definedname name="Categories" refersTo="=Budget Details!A3:A11"></e-definedname>
      <e-definedname name="MonthlySpendings" refersTo="=Budget Details!B3:B11"></e-definedname>
      <e-definedname name="AnnualSpendings" refersTo="=Budget Details!C3:C11"></e-definedname>
    </e-definednames>
    <e-sheets>
      <e-sheet name="Budget Details">
        <e-ranges>
          <e-range :dataSource="dataSource" startCell="A2"></e-range>
        </e-ranges>
        <e-columns>
          <e-column :width=150></e-column>
          <e-column :width=120></e-column>
          <e-column :width=120></e-column>
          <e-column :width=120></e-column>
          <e-column :width=120></e-column>
        </e-columns>
        <e-rows>
          <e-row :height=40 customHeight="true">
            <e-cells>
              <e-cell value="Monthly Expense" colSpan=5></e-cell>
              <e-cell formula="=SUM(E2:E10)"></e-cell>
            </e-cells>
          </e-row>
          <e-row :height=30 customHeight="true"></e-row>
          <e-row :index=11>
            <e-cells>
              <e-cell value="Totals"></e-cell>
              <e-cell formula="=SUM(MonthlySpendings)"></e-cell>
              <e-cell formula="=SUM(AnnualSpendings)"></e-cell>
              <e-cell formula="=SUM(LastYearSpendings)"></e-cell>
            </e-cells>
          </e-row>
          <e-row>
            <e-cells>
              <e-cell :index=1 value="Number of Categories" :colSpan=2></e-cell>
              <e-cell index=3 formula="=COUNTA(Categories)"></e-cell>
            </e-cells>
          </e-row>
          <e-row>
            <e-cells>
              <e-cell :index=1 value="Average Spend" :colSpan=2></e-cell>
              <e-cell index=3 formula="=AVERAGE(MonthlySpendings)" format="$#,##0"></e-cell>
            </e-cells>
          </e-row>
          <e-row>
            <e-cells>
              <e-cell :index=1 value="Min Spend" :colSpan=2></e-cell>
              <e-cell index=3 formula="=MIN(MonthlySpendings)" format="$#,##0"></e-cell>
            </e-cells>
          </e-row>
          <e-row>
            <e-cells>
              <e-cell :index=1 value="Max Spend" :colSpan=2></e-cell>
              <e-cell index=3 formula="=Max(MonthlySpendings)" format="$#,##0"></e-cell>
            </e-cells>
          </e-row>
        </e-rows>
      </e-sheet>
    </e-sheets>
  </ejs-spreadsheet>
</template>

<script setup>
import { ref } from "vue";
import { SpreadsheetComponent as EjsSpreadsheet, ColumnsDirective as EColumns, ColumnDirective as EColumn, RowsDirective as ERows, RowDirective as ERow, CellsDirective as ECells, CellDirective as ECell, RangesDirective as ERanges, RangeDirective as ERange, SheetsDirective as ESheets, SheetDirective as ESheet, DefinedNamesDirective as EDefinednames, DefinedNameDirective as EDefinedname } from "@syncfusion/ej2-vue-spreadsheet";
import { data } from './data.js';

const dataSource = data;
const spreadsheet = ref(null);
const calculatePercentage = function (firstCell, secondCell) {
  return Number(firstCell) / Number(secondCell);
}

const beforeDataBound = function () {
  // Adding name dynamically for `last year spending` and `percentage change` ranges.
  spreadsheet.value.addDefinedName({ name: 'LastYearSpendings', refersTo: '=D3:D11' });
  spreadsheet.value.addDefinedName({ name: 'PercentageChange', refersTo: '=E3:E11' });
}
const created = function () {
  spreadsheet.value.cellFormat({ fontWeight: 'bold', textAlign: 'center' }, 'A2:E2');
  spreadsheet.value.cellFormat({ fontWeight: 'bold', textAlign: 'right' }, 'B13:B16');
  spreadsheet.value.cellFormat({ fontStyle: 'italic', fontWeight: 'bold' }, 'A12');
  spreadsheet.value.cellFormat({ textAlign: 'center', fontWeight: 'bold', verticalAlign: 'middle', fontStyle: 'italic', fontSize: '15pt' }, 'A1');
  spreadsheet.value.numberFormat('$#,##0', 'B3:D12');
  spreadsheet.value.numberFormat('0%', 'E3:E12');

  // Adding custom function for calculating the percentage between two cells.
  spreadsheet.value.addCustomFunction(calculatePercentage, 'PERCENTAGE');
  // Calculate percentage using custom added formula in E12 cell.
  spreadsheet.value.updateCell({ formula: '=PERCENTAGE(C12,D12)' }, 'E12');
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
