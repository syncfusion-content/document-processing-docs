<template>
  <ejs-spreadsheet ref="spreadsheet" :created="created" :showFormulaBar="false">
    <e-sheets>
      <e-sheet>
        <e-columns>
          <e-column :width="200"></e-column>
        </e-columns>

        <e-rows>
          <e-row>
            <e-cells>
              <e-cell value="Plain Text"></e-cell>
            </e-cells>
          </e-row>

          <e-row>
            <e-cells>
              <e-cell
                value="Mineral Water H2O"
                :richText="[
                  { text: 'Mineral Water H' },
                  { text: '2', style: { verticalAlign: 'sub' } },
                  { text: 'O' }
                ]"
              ></e-cell>
            </e-cells>
          </e-row>

          <e-row>
            <e-cells>
              <e-cell
                value="Energy Supplement C6H12O6"
                :richText="[
                  { text: 'Energy Supplement C' },
                  { text: '6', style: { verticalAlign: 'sub' } },
                  { text: 'H' },
                  { text: '12', style: { verticalAlign: 'sub' } },
                  { text: 'O' },
                  { text: '6', style: { verticalAlign: 'sub' } }
                ]"
              ></e-cell>
            </e-cells>
          </e-row>

          <e-row>
            <e-cells>
              <e-cell value="H2O"></e-cell>
            </e-cells>
          </e-row>
        </e-rows>
      </e-sheet>
    </e-sheets>
  </ejs-spreadsheet>
</template>

<script setup>
import { ref } from "vue";
import { SpreadsheetComponent as EjsSpreadsheet, SheetsDirective as ESheets, SheetDirective as ESheet, RowsDirective as ERows, RowDirective as ERow, CellsDirective as ECells, CellDirective as ECell, ColumnsDirective as EColumns, ColumnDirective as EColumn } from "@syncfusion/ej2-vue-spreadsheet";

const spreadsheet = ref(null);

const created = () => {
  if (!spreadsheet.value) return;

  // Apply rich text to A4
  spreadsheet.value.updateCell(
    {
      richText: [
        { text: "H" },
        { text: "2", style: { verticalAlign: "sub" } },
        { text: "O" }
      ]
    },
    "A4"
  );

  // Apply superscript to A5
  spreadsheet.value.updateCell(
    {
      value: "X2",
      richText: [
        { text: "X" },
        { text: "2", style: { verticalAlign: "super" } }
      ]
    },
    "A5"
  );
};
</script>

<style>
@import '../node_modules/@syncfusion/ej2-base/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-grids/styles/tailwind3.css';
@import "../node_modules/@syncfusion/ej2-vue-spreadsheet/styles/tailwind3.css";
</style>