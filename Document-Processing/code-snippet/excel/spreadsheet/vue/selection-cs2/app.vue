<template>
  <ejs-spreadsheet ref="spreadsheet" :created="created" :selectionSettings="selectionSettings">
    <e-sheets>
      <e-sheet name="Price Details">
        <e-ranges>
          <e-range :dataSource="dataSource1"></e-range>
        </e-ranges>
        <e-columns>
          <e-column :width=100></e-column>
          <e-column :width=100></e-column>
          <e-column :width=100></e-column>
          <e-column :width=100></e-column>
        </e-columns>
      </e-sheet>
    </e-sheets>
  </ejs-spreadsheet>
</template>

<script>
import { SpreadsheetComponent, ColumnsDirective, ColumnDirective, RangesDirective, RangeDirective, SheetsDirective, SheetDirective, getRangeAddress } from "@syncfusion/ej2-vue-spreadsheet";
import { priceData } from './data.js';

export default {
  name: "App",
  components: {
    "ejs-spreadsheet": SpreadsheetComponent,
    "e-sheets": SheetsDirective,
    "e-sheet": SheetDirective,
    "e-ranges": RangesDirective,
    "e-range": RangeDirective,
    "e-columns": ColumnsDirective,
    "e-column": ColumnDirective
  },
  data: () => {
    return {
      selectionSettings: { mode: 'Multiple' },
      dataSource1: priceData
    }
  },
  methods: {
    created: function () {
      let spreadsheet = this.$refs.spreadsheet;
      spreadsheet.cellFormat({ fontWeight: 'bold', textAlign: 'center' }, 'A1:H1');
      let rowCount = spreadsheet.ej2Instances.getActiveSheet().rowCount;
      spreadsheet.selectRange(getRangeAddress([0, 2, rowCount, 2]));
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
