<template>
  <ejs-spreadsheet ref="spreadsheet" :created="created" :showFormulaBar="false" :showRibbon="false"
    :showSheetTabs="false" :allowInsert="false" :allowDelete="false" :allowEditing="false">
    <e-sheets>
      <e-sheet :showGridLines="false">
        <e-ranges>
          <e-range :dataSource="dataSource" startCell="A2"></e-range>
        </e-ranges>
        <e-columns>
          <e-column :width=100></e-column>
          <e-column :width=200></e-column>
          <e-column :width=110></e-column>
          <e-column :width=140></e-column>
          <e-column :width=90></e-column>
        </e-columns>
        <e-rows>
          <e-row :height=35 customHeight="true">
            <e-cells>
              <e-cell value="Order Summary" colSpan=5></e-cell>
            </e-cells>
          </e-row>
          <e-row :height=30>
            <e-cells>
              <e-cell index=2></e-cell>
            </e-cells>
          </e-row>
          <e-row :height=30></e-row>
          <e-row :height=30></e-row>
          <e-row :height=30></e-row>
          <e-row :height=30></e-row>
          <e-row :height=30></e-row>
          <e-row :height=30></e-row>
          <e-row :height=30></e-row>
          <e-row :height=30></e-row>
          <e-row :height=30></e-row>
          <e-row :height=30></e-row>
        </e-rows>
      </e-sheet>
    </e-sheets>
  </ejs-spreadsheet>
</template>

<script>

import { SpreadsheetComponent, SheetsDirective, SheetDirective, RangesDirective, RangeDirective, ColumnsDirective, ColumnDirective, RowsDirective, RowDirective, CellsDirective, CellDirective } from "@syncfusion/ej2-vue-spreadsheet";
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
    }
  },
  methods: {
    created: function () {
      let spreadsheet = this.$refs.spreadsheet;
      // Setting common styles to table header cells
      spreadsheet.cellFormat({ fontWeight: 'bold', fontSize: '12pt', backgroundColor: '#279377', color: '#ffffff' }, 'A2:E2');
      // Setting common styles to whole table cells
      spreadsheet.cellFormat({ verticalAlign: 'middle', fontFamily: 'Axettac Demo' }, 'A2:E12');
      spreadsheet.cellFormat({ textAlign: 'right' }, 'B2');
      spreadsheet.cellFormat({ fontFamily: 'Axettac Demo', verticalAlign: 'middle', textAlign: 'center', fontSize: '18pt', fontWeight: 'bold', color: '#279377', border: '1px solid #e0e0e0' }, 'A1');
      // Column wise styles setting
      spreadsheet.cellFormat({ textAlign: 'center' }, 'A2:A12');
      // Setting text-indent to 2 and 4 column
      let style = { textAlign: 'left', textIndent: '8pt' };
      spreadsheet.cellFormat(style, 'B2:B12');
      spreadsheet.cellFormat(style, 'D2:D12');
      spreadsheet.cellFormat({ fontStyle: 'italic', textAlign: 'right' }, 'C3:C12');
      spreadsheet.cellFormat({ textAlign: 'center' }, 'E2:E12');
      // Applied border to range of cells using 'setBorder' method
      spreadsheet.setBorder({ borderLeft: '1px solid #e0e0e0', borderRight: '1px solid #e0e0e0' }, 'A2:E2');
      spreadsheet.setBorder({ border: '1px solid #e0e0e0' }, 'A4:E11', 'Horizontal');
      spreadsheet.setBorder({ border: '1px solid #e0e0e0' }, 'A3:E12', 'Outer');
      spreadsheet.cellFormat({ color: '#10c469', textDecoration: 'line-through' }, 'E3:E4');
      spreadsheet.cellFormat({ color: '#10c469', textDecoration: 'line-through' }, 'E9');
      spreadsheet.cellFormat({ color: '#10c469', textDecoration: 'line-through' }, 'E12');
      spreadsheet.cellFormat({ color: '#FFC107', textDecoration: 'underline' }, 'E5');
      spreadsheet.cellFormat({ color: '#FFC107', textDecoration: 'underline' }, 'E8');
      spreadsheet.cellFormat({ color: '#FFC107', textDecoration: 'underline' }, 'E11');
      spreadsheet.cellFormat({ color: '#62c9e8' }, 'E6');
      spreadsheet.cellFormat({ color: '#62c9e8' }, 'E10');
      spreadsheet.cellFormat({ color: '#ff5b5b' }, 'E7');
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
