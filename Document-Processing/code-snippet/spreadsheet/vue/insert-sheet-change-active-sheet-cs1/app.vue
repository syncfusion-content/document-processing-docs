<template>
  <div>
    <ejs-button class="e-btn custom-btn" v-on:click.native="insertSheet">Insert Sheet</ejs-button>
    <ejs-spreadsheet ref="spreadsheet">
      <e-sheets>
        <e-sheet name="Car Sales Report">
          <e-ranges>
            <e-range :dataSource="dataSource"></e-range>
          </e-ranges>
          <e-columns>
            <e-column :width=180></e-column>
            <e-column :width=130></e-column>
            <e-column :width=130></e-column>
            <e-column :width=180></e-column>
            <e-column :width=130></e-column>
            <e-column :width=120></e-column>
          </e-columns>
        </e-sheet>
      </e-sheets>
    </ejs-spreadsheet>
  </div>
</template>

<script>
import { SpreadsheetComponent, ColumnsDirective, ColumnDirective, RangesDirective, RangeDirective, SheetsDirective, SheetDirective } from "@syncfusion/ej2-vue-spreadsheet";
import { data, employeeData } from './data.js';
import { ButtonComponent } from "@syncfusion/ej2-vue-buttons";

export default {
  name: "App",
  components: {
    "ejs-button": ButtonComponent,
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
      dataSource: data
    }
  },
  methods: {
    insertSheet: function () {
      let spreadsheet = this.$refs.spreadsheet;
      spreadsheet.insertSheet(
        [
          {
            index: 1,
            name: 'new_sheet',
            ranges: [
              {
                dataSource: employeeData,
                startCell: 'A1'
              },
            ]
          },
        ]
      );
      // Use the timeout function to wait until the sheet is inserted.
      setTimeout(() => {
        // Method for switching to a new sheet.
        spreadsheet.goTo('new_sheet!A1');
      })
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

.custom-btn {
  margin-bottom: 10px;
}
</style>
