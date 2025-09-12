<template>
  <ejs-spreadsheet ref="spreadsheet" :created="created" :showFormulaBar="false" :cellEdit="cellEdit"
    :beforeCellSave="beforeCellSave">
    <e-sheets>
      <e-sheet selectedRange="E11">
        <e-ranges>
          <e-range :dataSource="dataSource"></e-range>
        </e-ranges>
        <e-columns>
          <e-column :width=120></e-column>
          <e-column :width=180></e-column>
          <e-column :width=100></e-column>
          <e-column :width=120></e-column>
          <e-column :width=120></e-column>
        </e-columns>
        <e-rows>
          <e-row index="10">
            <e-cells>
              <e-cell index="3" value="Total Amount:" style="fontStyle"></e-cell>
              <e-cell formula="=SUM(E2:E10)"></e-cell>
            </e-cells>
          </e-row>
        </e-rows>
      </e-sheet>
    </e-sheets>
  </ejs-spreadsheet>
</template>

<script>

import { SpreadsheetComponent, ColumnsDirective, ColumnDirective, RowsDirective, RowDirective, CellsDirective, CellDirective, RangesDirective, RangeDirective, SheetsDirective, SheetDirective } from "@syncfusion/ej2-vue-spreadsheet";
import { data } from './data.js';

export default {
  name: "App",
  components: {
    "ejs-spreadsheet": SpreadsheetComponent,
    "e-sheets": SheetsDirective,
    "e-sheet": SheetDirective,
    "e-ranges": RangesDirective,
    "e-range": RangeDirective,
    "e-columns": ColumnsDirective,
    "e-column": ColumnDirective,
    "e-rows": RowsDirective,
    "e-row": RowDirective,
    "e-cells": CellsDirective,
    "e-cell": CellDirective
  },

  data: () => {
    return {
      dataSource: data,
      fontStyle: { fontWeight: 'bold' }
    }
  },
  methods: {
    created: function () {
      let spreadsheet = this.$refs.spreadsheet;
      spreadsheet.cellFormat({ fontWeight: 'bold', textAlign: 'center' }, 'A1:E1');
      spreadsheet.cellFormat({ textAlign: 'center' }, 'A2:A10');
      spreadsheet.cellFormat({ textAlign: 'center' }, 'C2:C10');
      spreadsheet.numberFormat('$#,##0.00', 'D2:D10');
      spreadsheet.numberFormat('$#,##0.00', 'E2:E11');
    },
    cellEdit: function (args) {
      // Preventing the editing in 5th(Amount) column.
      if (args.address.includes('E')) { args.cancel = true; }
    },
    beforeCellSave: function (args) {
      let spreadsheet = this.$refs.spreadsheet;
      // Prevent saving the edited changes in 4th(Rate) column.
      if (args.address.includes('D')) {
        args.cancel = true;
        // Manually removes the editable state without saving the changes. Use `endEdit` method if you want to save the changes.
        spreadsheet.closeEdit();
      }
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
