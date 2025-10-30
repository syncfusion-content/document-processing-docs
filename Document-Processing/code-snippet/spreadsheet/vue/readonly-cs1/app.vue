<template>
  <div>
  <ejs-button className="e-btn custom-btn" v-on:click.native="readOnlyRow()">Make Row 2 readOnly</ejs-button>
  <ejs-button className="e-btn custom-btn" v-on:click.native="readOnlyCell()">Make E5 cell readOnly</ejs-button>
  <ejs-button className="e-btn custom-btn" v-on:click.native="removeReadOnly()">Remove readOnly</ejs-button>
  <ejs-button className="e-btn custom-btn" v-on:click.native="readOnlyCol()">Make Column A readOnly</ejs-button>
  <ejs-spreadsheet ref="spreadsheet">
    <e-sheets>
      <e-sheet name="Budget">
        <e-ranges>
          <e-range :dataSource="dataSource1"></e-range>
        </e-ranges>
        <e-rows>
          <e-row :index="3" :isReadOnly="true"></e-row>
          <e-row :index="4" >
            <e-cells>
              <e-cell :index="5" :isReadOnly="true"></e-cell>
            </e-cells>
          </e-row>
        </e-rows>
        <e-columns>
          <e-column :width=100></e-column>
          <e-column :width=100></e-column>
          <e-column :width=100 :isReadOnly="true"></e-column>
          <e-column :width=100></e-column>
          <e-column :width=100></e-column>
          <e-column :width=100></e-column>
        </e-columns>
      </e-sheet>
    </e-sheets>
  </ejs-spreadsheet>
  </div>
</template>

<script>
import { SpreadsheetComponent, ColumnsDirective, ColumnDirective, RangesDirective, RangeDirective, SheetsDirective, SheetDirective } from "@syncfusion/ej2-vue-spreadsheet";
import { budgetData } from './data.js';
import { ButtonComponent } from "@syncfusion/ej2-vue-buttons";

export default {
  name: "App",
  components: {
    "ejs-spreadsheet": SpreadsheetComponent,
    "ejs-button": ButtonComponent,
    "e-sheets": SheetsDirective,
    "e-sheet": SheetDirective,
    "e-ranges": RangesDirective,
    "e-rows": RowsDirective,
    "e-row": RowDirective,
    "e-cells": CellsDirective,
    "e-cell": CellDirective,
    "e-range": RangeDirective,
    "e-columns": ColumnsDirective,
    "e-column": ColumnDirective
  },
  data: () => {
    return {
      dataSource1: budgetData
    }
  },
  methods: {
    readOnlyRow() {
      var spreadsheet = this.$refs.spreadsheet;
      spreadsheet.setRangeReadOnly(true, '2:2', spreadsheet.activeSheetIndex);
    },
    readOnlyCol() {
      var spreadsheet = this.$refs.spreadsheet;
      spreadsheet.setRangeReadOnly(true, 'A:A', spreadsheet.activeSheetIndex);
    },
    readOnlyCell() {
      var spreadsheet = this.$refs.spreadsheet;
      spreadsheet.setRangeReadOnly(true, 'E5:E5', spreadsheet.activeSheetIndex);
    },
    removeReadOnly() {
      var spreadsheet = this.$refs.spreadsheet;
      spreadsheet.setRangeReadOnly(false, '2:2', spreadsheet.activeSheetIndex);
      spreadsheet.setRangeReadOnly(false, 'A:A', spreadsheet.activeSheetIndex);
      spreadsheet.setRangeReadOnly(false, 'E5:E5', spreadsheet.activeSheetIndex);
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
