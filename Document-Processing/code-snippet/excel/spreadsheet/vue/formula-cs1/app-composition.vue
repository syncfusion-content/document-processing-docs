<template>
  <ejs-spreadsheet ref="spreadsheet" :created="created" :showRibbon="false" :showSheetTabs="false">
    <e-sheets>
      <e-sheet>
        <e-ranges>
          <e-range :dataSource="dataSource" startCell="A2"></e-range>
        </e-ranges>
        <e-columns>
          <e-column :width="150"></e-column>
          <e-column :width="120"></e-column>
          <e-column :width="120"></e-column>
          <e-column :width="120"></e-column>
          <e-column :width="120"></e-column>
          <e-column :width="120"></e-column>
        </e-columns>
        <e-rows>
          <e-row :height="40" customHeight="true">
            <e-cells>
              <e-cell value="Monthly Expense" colSpan="5"></e-cell>
              <e-cell formula="=SUM(E2:E10)"></e-cell>
            </e-cells>
          </e-row>
          <e-row :height="30" customHeight="true"></e-row>
          <e-row :index="11">
            <e-cells>
              <e-cell value="Totals"></e-cell>
              <e-cell formula="=SUM(B3:B11)"></e-cell>
              <e-cell formula="=SUM(C3:C11)"></e-cell>
              <e-cell formula="=SUM(D3:D11)"></e-cell>
            </e-cells>
          </e-row>
          <e-row>
            <e-cells>
              <e-cell :index="1" value="Number of Categories" :colSpan="2"></e-cell>
              <e-cell index="3" formula="=COUNTA(A3:A11)"></e-cell>
            </e-cells>
          </e-row>
          <e-row>
            <e-cells>
              <e-cell :index="1" value="Average Spend" :colSpan="2"></e-cell>
              <e-cell index="3" formula="=AVERAGE(B3:B11)" format="$#,##0"></e-cell>
            </e-cells>
          </e-row>
          <e-row>
            <e-cells>
              <e-cell :index="1" value="Min Spend" :colSpan="2"></e-cell>
              <e-cell index="3" formula="=MIN(B3:B11)" format="$#,##0"></e-cell>
            </e-cells>
          </e-row>
          <e-row>
            <e-cells>
              <e-cell :index="1" value="Max Spend" :colSpan="2"></e-cell>
              <e-cell index="3" formula="=Max(B3:B11)" format="$#,##0"></e-cell>
            </e-cells>
          </e-row>
        </e-rows>
      </e-sheet>
    </e-sheets>
  </ejs-spreadsheet>
</template>

<script setup>
import { ref } from "vue";
import { SpreadsheetComponent as EjsSpreadsheet, ColumnsDirective as EColumns, ColumnDirective as EColumn, RowsDirective as ERows, RowDirective as ERow, CellsDirective as ECells, CellDirective as ECell, RangesDirective as ERanges, RangeDirective as ERange, SheetsDirective as ESheets, SheetDirective as ESheet } from "@syncfusion/ej2-vue-spreadsheet";
import { data } from './data.js';

const spreadsheet = ref(null);
const dataSource = data;

// Custom function to calculate percentage between two cell values.
const calculatePercentage = function (firstCell, secondCell) {
  return Number(firstCell) / Number(secondCell);
}
// Custom function to calculate round down for values.
const roundDownHandler = function (value, digit) {
  let multiplier = Math.pow(10, digit);
  return Math.floor(value * multiplier) / multiplier;
}

const created = function () {
  spreadsheet.value.cellFormat(
    { fontWeight: "bold", textAlign: "center" },
    "A2:F2"
  );
  spreadsheet.value.numberFormat("$#,##0", "B3:D12");
  spreadsheet.value.numberFormat("0%", "E3:E12");
  // Adding custom function for calculating the percentage between two cells.
  spreadsheet.value.addCustomFunction(calculatePercentage, "PERCENTAGE");
  // Adding custom function for calculating round down for the value.
  spreadsheet.value.addCustomFunction(roundDownHandler, "ROUNDDOWN");
  // Calculate percentage using custom added formula in E12 cell.
  spreadsheet.value.updateCell({ formula: "=PERCENTAGE(C12,D12)" }, "E12");
  // Calculate round down for average values using custom added formula in F12 cell.
  spreadsheet.value.updateCell({ formula: "=ROUNDDOWN(F11,1)" }, "F12");
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-dropdowns/styles/material.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-grids/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-spreadsheet/styles/material.css";
</style>
