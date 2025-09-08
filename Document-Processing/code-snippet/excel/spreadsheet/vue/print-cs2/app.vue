<template>
  <div>
    <div id="print">
    <ejs-dropdownbutton :items='items' :select='itemSelect'>Print</ejs-dropdownbutton>
    <input type="checkbox" id="gridline"><label for="gridline">Allow Grid Lines</label>
    <input type="checkbox" id="header"><label for="header">Allow Row Column Header</label>
  </div>
  <ejs-spreadsheet ref="spreadsheet" :created="created" :allowOpen="true" :openUrl="openUrl" :allowSave="true" :saveUrl="saveUrl" >
    <e-sheets>
      <e-sheet name="Budget">
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
      <e-sheet name="Salary">
        <e-ranges>
          <e-range :dataSource="dataSource2"></e-range>
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
  </div>
</template>

<script>
import { SpreadsheetComponent, ColumnsDirective, ColumnDirective, RangesDirective, RangeDirective, SheetsDirective, SheetDirective } from "@syncfusion/ej2-vue-spreadsheet";
import { DropDownButtonComponent } from "@syncfusion/ej2-vue-splitbuttons";
import { salaryData, budgetData } from './data.js';

export default {
  name: "App",
  components: {
    "ejs-dropdownbutton": DropDownButtonComponent,
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
      dataSource1: budgetData,
      dataSource2: salaryData,
      openUrl: 'https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/open',
      saveUrl: 'https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/save',
      items: [{ text: 'ActiveSheet' }, { text: 'Workbook' }]
    }
  },
  methods: {
    created: function () {
      let spreadsheet = this.$refs.spreadsheet;
      spreadsheet.cellFormat({ fontWeight: 'bold', textAlign: 'center' }, 'A1:H1');
      spreadsheet.cellFormat({ fontWeight: 'bold', textAlign: 'center' }, 'Salary!A1:H1');
    },

    itemSelect: function (args) {
      let spreadsheet = this.$refs.spreadsheet;
      if (spreadsheet) {
        const allowGridLines = document.getElementById('gridline');
        const allowRowColumnHeader = document.getElementById('header');
        spreadsheet.print({
          type: args.item.text,
          allowGridLines: allowGridLines.checked,
          allowRowColumnHeader: allowRowColumnHeader.checked
        });
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
