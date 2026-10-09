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
                      value="Annual Sales Report 2026 (Draft)"
                      :richText="[
                          { text: 'Annual Sales Report ', style: { fontWeight: 'bold' } },
                          { text: '2026', style: { color: '#0078D4' } },
                          { text: ' (Draft)', style: { fontStyle: 'italic' } }
                      ]"
                  ></e-cell>
              </e-cells>
          </e-row>

          <e-row>
              <e-cells>
                  <e-cell
                      value="Customer Loyalty Program"
                      :richText="[
                          { text: 'Customer Loyalty ', style: { textDecoration: 'underline' } },
                          { text: 'Program', style: { fontFamily: 'Georgia', fontSize: '14pt' } }
                      ]"
                  ></e-cell>
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
      </e-rows>
      </e-sheet>
    </e-sheets>
  </ejs-spreadsheet>
</template>

<script>

import { SpreadsheetComponent, SheetsDirective, SheetDirective, ColumnsDirective, ColumnDirective, RowsDirective, RowDirective, CellsDirective, CellDirective } from "@syncfusion/ej2-vue-spreadsheet";

export default {
  name: "App",
  components: {
    "ejs-spreadsheet": SpreadsheetComponent,
    "e-sheets": SheetsDirective,
    "e-sheet": SheetDirective,
    "e-columns": ColumnsDirective,
    "e-column": ColumnDirective,
    "e-rows": RowsDirective,
    "e-row": RowDirective,
    "e-cells": CellsDirective,
    "e-cell": CellDirective
  },
  methods: {
    created: function () {
    const spreadsheet = this.$refs.spreadsheet;

    spreadsheet.updateCell(
          {
              value: 'Premium Membership valid until 31st Dec 2026',
              richText: [
                  {
                      text: 'Premium Membership ',
                      style: { fontWeight: 'bold', color: '#2E7D32' }
                  },
                  {
                      text: 'valid until ',
                      style: { fontStyle: 'italic' }
                  },
                  {
                      text: '31',
                      style: { textDecoration: 'underline' }
                  },
                  {
                      text: 'st',
                      style: { verticalAlign: 'super' }
                  },
                  {
                      text: ' Dec 2026'
                  }
              ]
          },
          'A5'
      );
    }
  }
};
</script>

<style>
@import "../node_modules/@syncfusion/ej2-vue-spreadsheet/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-grids/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-spreadsheet/styles/tailwind3.css";
</style>