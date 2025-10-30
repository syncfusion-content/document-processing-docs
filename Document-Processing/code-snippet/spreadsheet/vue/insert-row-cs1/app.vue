<template>
  <ejs-spreadsheet ref="spreadsheet" :created="created" :showFormulaBar="false" :showSheetTabs="false"
    :showRibbon="false">
    <e-sheets>
      <e-sheet>
        <e-ranges>
          <e-range :dataSource="dataSource" startCell="B1"></e-range>
        </e-ranges>
        <e-columns>
          <e-column :width=20></e-column>
          <e-column :width=90></e-column>
          <e-column :width=220></e-column>
          <e-column :width=90></e-column>
          <e-column :width=140></e-column>
          <e-column :width=90></e-column>
          <e-column :width=100></e-column>
          <e-column :width=100></e-column>
        </e-columns>
      </e-sheet>
    </e-sheets>
  </ejs-spreadsheet>
</template>

<script>
import { SpreadsheetComponent, ColumnsDirective, ColumnDirective, RangesDirective, RangeDirective, SheetsDirective, SheetDirective } from "@syncfusion/ej2-vue-spreadsheet";
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
    "e-column": ColumnDirective
  },
  data: () => {
    return {
      dataSource: data,
      // Rows model that is going to insert dynamically
      rowsModel: [
        {
          index: 9, // Need to specify the index for the first row collection, the specified rows will be inserted in this index.
          cells: [{ value: '' }, { value: '8' }, { value: 'Northwoods Cranberry Sauce' }, { value: '3' }, { value: '12 - 12 oz jars' },
          { value: '40.00' }, { value: '6' }, { value: 'false' }]
        },
        {
          cells: [{ value: '' }, { value: '9' }, { value: 'Mishi Kobe Niku' }, { value: '4' }, { value: '18 - 500 g pkgs.' },
          { value: '97.00' }, { value: '29' }, { value: 'true' }]
        }
      ]
    }
  },
  methods: {
    created: function () {
      let spreadsheet = this.$refs.spreadsheet;
      // Applies style formatting before inserting the rows
      spreadsheet.cellFormat({ fontWeight: 'bold', textAlign: 'center' }, 'B1:H1');
      // inserting a empty row at 0th index
      spreadsheet.insertRow();
      // inserting 2 rows at the 9th index with data
      spreadsheet.insertRow(this.rowsModel);
      // Applies style formatting after the rows are inserted
      spreadsheet.cellFormat({ textAlign: 'center' }, 'B3:B12');
      spreadsheet.cellFormat({ textAlign: 'center' }, 'D3:D12');
      spreadsheet.cellFormat({ textAlign: 'center' }, 'F3:H12');
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
