<template>
  <ejs-spreadsheet ref="spreadsheet" :created="created">
  <e-sheets>
    <e-sheet name="PriceDetails">
        <e-columns>
          <e-column :width=88></e-column>
          <e-column :width=88></e-column>
          <e-column :width=106></e-column>
          <e-column :width=98></e-column>
          <e-column :width=88></e-column>
          <e-column :width=81></e-column>
        </e-columns>
        <e-rows>
          <e-row>
            <e-cells>
              <e-cell value="Seller Name" :style="style"></e-cell>
              <e-cell value="Customer Id" :style="style"></e-cell>
              <e-cell value="Customer Name" :style="style"></e-cell>
              <e-cell value="Product Name" :style="style"></e-cell>
              <e-cell value="Product Price" :style="style"></e-cell>
              <e-cell value="Total Price" :style="style"></e-cell>
            </e-cells>
          </e-row>
          <e-row>
            <e-cells>
              <e-cell value="John"></e-cell>
              <e-cell value="101"></e-cell>
              <e-cell value="Nash"></e-cell>
              <e-cell value="Digger"></e-cell>
              <e-cell value="50000"></e-cell>
              <e-cell value="1,45,000.00"></e-cell>
            </e-cells>
          </e-row>
          <e-row>
            <e-cells>
              <e-cell value="Mike"></e-cell>
              <e-cell value="25"></e-cell>
              <e-cell value="Jim"></e-cell>
              <e-cell value="Cherrypicker"></e-cell>
              <e-cell value="45000"></e-cell>
              <e-cell value="1,40,040.00"></e-cell>
            </e-cells>
          </e-row>
          <e-row>
            <e-cells>
              <e-cell value="shane"></e-cell>
              <e-cell value="35"></e-cell>
              <e-cell value="Sean"></e-cell>
              <e-cell value="Kango"></e-cell>
              <e-cell value="35000"></e-cell>
              <e-cell value="1,54,500.00"></e-cell>
            </e-cells>
          </e-row>
          <e-row>
            <e-cells>
              <e-cell value="John"></e-cell>
              <e-cell value="101"></e-cell>
              <e-cell value="Nash"></e-cell>
              <e-cell value="JCB"></e-cell>
              <e-cell value="90000"></e-cell>
              <e-cell value="1,00,095.00"></e-cell>
            </e-cells>
          </e-row>
        </e-rows>
      </e-sheet>
      </e-sheets>
  </ejs-spreadsheet>
</template>

<script>
import { SpreadsheetComponent, ColumnsDirective, ColumnDirective, RowsDirective, RowDirective, CellsDirective, CellDirective, SheetsDirective, SheetDirective } from "@syncfusion/ej2-vue-spreadsheet";

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
  data: () => {
    return {
      style: { fontWeight: "bold", textAlign: "center" }
    }
  },
  methods: {
    created: function () {
      let spreadsheet = this.$refs.spreadsheet;
      //Add Data validation to range.
      spreadsheet.addDataValidation({ type: 'Custom', value1: '=AND(B2>10, B2<100)' }, 'E2:E5');
      //Highlight Invalid Data.
      spreadsheet.addInvalidHighlight('E2:E5');
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
</style>
