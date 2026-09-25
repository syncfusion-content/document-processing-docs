<template>
  <ejs-spreadsheet ref="spreadsheet">
    <e-sheets>
      <e-sheet name="Famous Quotes">
        <e-columns>
          <e-column :width="160"></e-column>
          <e-column :width="110"></e-column>
          <e-column :width="110"></e-column>
          <e-column :width="100"></e-column>
          <e-column :width="100"></e-column>
          <e-column :width="110"></e-column>
        </e-columns>

        <e-rows>
          <e-row>
            <e-cells>
              <e-cell
                value="Famous Quotes"
                :style="{ fontWeight: 'bold', fontSize: '16pt' }">
              </e-cell>
            </e-cells>
          </e-row>

          <e-row>
            <e-cells>
              <e-cell
                value="Success is the sum of small efforts repeated day after day."
                :style="{ fontSize: '14pt' }">
              </e-cell>
            </e-cells>
          </e-row>

          <e-row>
            <e-cells>
              <e-cell
                value="Quality is never an accident it is always the result of intelligent effort."
                :style="{ fontSize: '14pt' }">
              </e-cell>
            </e-cells>
          </e-row>

          <e-row>
            <e-cells>
              <e-cell
                value="The future depends on what you do today and how consistently you do it."
                :style="{ fontSize: '14pt' }">
              </e-cell>
            </e-cells>
          </e-row>

          <e-row>
            <e-cells>
              <e-cell
                value="Well organized information helps teams make better decisions and achieve goals."
                :style="{ fontSize: '14pt' }">
              </e-cell>
            </e-cells>
          </e-row>

          <e-row>
            <e-cells>
              <e-cell
                value="Great achievements are built through planning persistence and continuous improvement."
                :style="{ fontSize: '14pt' }">
              </e-cell>
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