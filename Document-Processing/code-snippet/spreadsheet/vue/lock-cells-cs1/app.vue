<template>
  <div> <ejs-button id='customBtn' v-on:click.native="btnClick"> Unlock cells</ejs-button>
    <div id="dialog"></div>
    <ejs-spreadsheet ref="spreadsheet" id="spreadsheet" :created="created">
      <e-sheets>
        <e-sheet name="Budget" :isProtected="true" :protectSettings="{ selectCells: true }">
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
import { ButtonComponent } from "@syncfusion/ej2-vue-buttons";
import { budgetData, salaryData } from './data.js';
import { Dialog } from '@syncfusion/ej2-popups';

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
      dialogObj: Dialog,
      dataSource1: budgetData,
      dataSource2: salaryData,
      dlgButtons: [{ click: this.lockCells, buttonModel: { isPrimary: 'true', content: 'Learn More' } }],
    }
  },
  methods: {
    created: function () {
      let spreadsheet = this.$refs.spreadsheet;
      spreadsheet.cellFormat({ fontWeight: 'bold', textAlign: 'center' }, 'A1:D1');
      spreadsheet.cellFormat({ fontWeight: 'bold' }, 'A11:D11');
      spreadsheet.cellFormat({ fontWeight: 'bold', textAlign: 'center' }, 'Salary!A1:D1');
      // Creating dialog component,
      let dialogObj = new Dialog({
        header: 'Spreadsheet',
        target: document.getElementById('spreadsheet'),
        content: '"A1:F3" range of cells has been unlocked.',
        showCloseIcon: true,
        isModel: true,
        visible: false,
        width: '500px',
        buttons: [{
          click: this.lockCells.bind(this), buttonModel: { content: 'Ok', isPrimary: true }
        }]
      });
      dialogObj.appendTo('#dialog');

    },
    btnClick: function () {
      let dialogObj = document.getElementById("dialog").ej2_instances[0];
      dialogObj.show();
    },
    lockCells: function () {
      let spreadsheet = this.$refs.spreadsheet;
      let dialogObj = document.getElementById("dialog").ej2_instances[0];
      spreadsheet.lockCells('A1:F3', false);
      dialogObj.hide();
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
