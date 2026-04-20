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

<script setup>
import { ref } from "vue";
import { SpreadsheetComponent as EjsSpreadsheet, ColumnsDirective as EColumns, ColumnDirective as EColumn, RangesDirective as ERanges, RangeDirective as ERange, SheetsDirective as ESheets, SheetDirective as ESheet } from "@syncfusion/ej2-vue-spreadsheet";
import { ButtonComponent as EjsButton } from "@syncfusion/ej2-vue-buttons";
import { budgetData, salaryData } from './data.js';
import { Dialog } from '@syncfusion/ej2-popups';

const spreadsheet = ref(null);
let dialogObj;
const dataSource1 = budgetData;
const dataSource2 = salaryData;

const btnClick = function () {
  dialogObj = document.getElementById("dialog").ej2_instances[0];
  dialogObj.show();
}
const lockCells = function () {
  dialogObj = document.getElementById("dialog").ej2_instances[0];
  spreadsheet.value.lockCells('A1:F3', false);
  dialogObj.hide();
}
const dlgButtons = [{ click: lockCells, buttonModel: { isPrimary: 'true', content: 'Learn More' } }];
const created = function () {
  spreadsheet.value.cellFormat({ fontWeight: 'bold', textAlign: 'center' }, 'A1:D1');
  spreadsheet.value.cellFormat({ fontWeight: 'bold' }, 'A11:D11');
  spreadsheet.value.cellFormat({ fontWeight: 'bold', textAlign: 'center' }, 'Salary!A1:D1');
  // Creating dialog component,
  dialogObj = new Dialog({
    header: 'Spreadsheet',
    target: document.getElementById('spreadsheet'),
    content: '"A1:F3" range of cells has been unlocked.',
    showCloseIcon: true,
    isModel: true,
    visible: false,
    width: '500px',
    buttons: [{
      click: lockCells, buttonModel: { content: 'Ok', isPrimary: true }
    }]
  });
  dialogObj.appendTo('#dialog');
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
