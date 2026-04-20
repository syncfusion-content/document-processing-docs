<template>
  <div>
    <ejs-dropdownbutton :items='items' :select='itemSelect'>Clipboard</ejs-dropdownbutton>
    <ejs-spreadsheet ref="spreadsheet" :created="created" :actionBegin="actionBeginHandler">
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
      </e-sheets></ejs-spreadsheet>
  </div>
</template>

<script>
import { SpreadsheetComponent, ColumnsDirective, ColumnDirective, RangesDirective, RangeDirective, SheetsDirective, SheetDirective } from "@syncfusion/ej2-vue-spreadsheet";
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
          text: "Cut"
        },
        {
          text: "Copy"
        },
        {
          text: "Paste"
        }]
    }
  },
  methods: {
    created: function () {
      let spreadsheet = this.$refs.spreadsheet;
      spreadsheet.cellFormat({ fontWeight: 'bold', textAlign: 'center' }, 'A1:H1');
    },// Triggers before the action begins.
    actionBeginHandler: function (pasteArgs) {
      // To cancel the paste action.
      if (pasteArgs.args.eventArgs.requestType === 'paste') {
        pasteArgs.args.eventArgs.cancel = true;
      }
    },
    itemSelect: function (args) {
      let spreadsheet = this.$refs.spreadsheet;
      if (args.item.text === 'Cut')
        spreadsheet.cut();
      if (args.item.text === 'Copy')
        spreadsheet.copy();
      if (args.item.text === 'Paste')
        spreadsheet.paste();
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
