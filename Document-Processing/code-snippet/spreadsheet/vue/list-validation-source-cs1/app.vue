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

<script>

import { SpreadsheetComponent, SheetsDirective, SheetDirective, RangesDirective, RangeDirective, ColumnsDirective, ColumnDirective, RowsDirective, RowDirective, CellsDirective, CellDirective } from "@syncfusion/ej2-vue-spreadsheet";
import { data, groupData } from './data.js';

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
      defaultData: data,
      grpData: groupData
    }
  },
  methods: {
    created: function () {
      let spreadsheet = this.$refs.spreadsheet;
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
  }
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
