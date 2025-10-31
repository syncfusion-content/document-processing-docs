<template>
  <ejs-spreadsheet ref="spreadsheet" :created="created" :showFormulaBar="false" :showRibbon="false"
    :showSheetTabs="false" :allowInsert="false" :allowDelete="false">
    <e-sheets>
      <e-sheet :showGridLines="false">
        <e-ranges>
          <e-range :dataSource="dataSource" startCell="A2"></e-range>
        </e-ranges>
        <e-columns>
          <e-column :width=140></e-column>
          <e-column :width=140></e-column>
          <e-column :width=160></e-column>
          <e-column :width=160></e-column>
          <e-column :width=160></e-column>
          <e-column :width=120></e-column>
        </e-columns>
        <e-rows>
          <e-row :height=35 customHeight="true">
            <e-cells>
              <e-cell value="Sales Team Summary" colSpan=6></e-cell>
            </e-cells>
          </e-row>
          <e-row :index=10>
            <e-cells>
              <e-cell index=1 value="Total:"></e-cell>
              <e-cell formula="=SUM(C3:C10)" format="$#,##0.00"></e-cell>
              <e-cell formula="=SUM(D3:D10)" format='_($* #,##0.00_);_($* (#,##0.00);_($* "-"??_);_(@_)'></e-cell>
              <e-cell formula="=SUM(E3:E10)" format='_($* #,##0.00_);_($* (#,##0.00);_($* "-"??_);_(@_)'></e-cell>
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
      dataSource: data
    }
  },
  methods: {
    created: function () {
      let spreadsheet = this.$refs.spreadsheet;
      spreadsheet.cellFormat({
        fontWeight: 'bold', fontSize: '12pt', backgroundColor: '#279377', textAlign: 'center',
        color: '#ffffff', borderBottom: '1px solid #e0e0e0'
      }, 'A2:F2');
      spreadsheet.cellFormat({ borderTop: '1px solid #e0e0e0', backgroundColor: '#EEEEEE' }, 'A11:F11');
      spreadsheet.cellFormat({ fontWeight: 'bold', fontStyle: 'italic' }, 'B11');
      spreadsheet.cellFormat({ verticalAlign: 'middle', textAlign: 'center', fontSize: '16pt', fontWeight: 'bold', border: '1px solid #e0e0e0', backgroundColor: '#EEEEEE', color: '#279377' }, 'A1');
      spreadsheet.setBorder({ border: '1px solid #e0e0e0' }, 'A2:F11', 'Outer');
      // Applied Accounting format to the cells from C3 to E10 range.
      spreadsheet.numberFormat('_($* #,##0.00_);_($* (#,##0.00);_($* "-"??_);_(@_)', 'C3:E10');
      // Applied Percentage format to the cells from C3 to E11 range.
      spreadsheet.numberFormat('0%', 'F3:F10');
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
