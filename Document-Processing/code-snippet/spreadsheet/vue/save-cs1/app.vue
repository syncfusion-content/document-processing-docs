<template>
  <div>
    <ejs-dropdownbutton :items='items' :select='itemSelect'>Save</ejs-dropdownbutton>
    <ejs-spreadsheet ref="spreadsheet">
      <e-sheets>
        <e-sheet>
          <e-ranges>
            <e-range :dataSource="dataSource"></e-range>
          </e-ranges>
          <e-columns>
            <e-column :width="width1"></e-column>
            <e-column :width="width2"></e-column>
          </e-columns>
        </e-sheet>
      </e-sheets>
    </ejs-spreadsheet>
  </div>
</template>

<script>

import { SpreadsheetComponent, ColumnsDirective, ColumnDirective, RowsDirective, RowDirective, CellsDirective, CellDirective, RangesDirective, RangeDirective, SheetsDirective, SheetDirective, getRangeIndexes } from "@syncfusion/ej2-vue-spreadsheet";
import { addClass, removeClass } from '@syncfusion/ej2-base';
import { DropDownButtonComponent } from "@syncfusion/ej2-vue-splitbuttons";
import { defaultData } from './data.js';


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
      dataSource: defaultData,
      width1: 130,
      width2: 96,
      items: [
        {
          text: "Save As xlsx"
        },
        {
          text: "Save As xls"
        },
        {
          text: "Save As csv"
        },
        {
          text: "Save As pdf"
        }
      ]
    }
  },
  methods: {
    itemSelect: function (args) {
      let spreadsheet = this.$refs.spreadsheet;
      if (args.item.text === 'Save As xlsx')
        spreadsheet.save({ url: 'https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/save', fileName: "Sample", saveType: "Xlsx" });
      if (args.item.text === 'Save As xls')
        spreadsheet.save({ url: 'https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/save', fileName: "Sample", saveType: "Xls" });
      if (args.item.text === 'Save As csv')
        spreadsheet.save({ url: 'https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/save', fileName: "Sample", saveType: "Csv" });
      if (args.item.text === 'Save As pdf')
        spreadsheet.save({ url: 'https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/save', fileName: "Sample", saveType: "Pdf" });
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
