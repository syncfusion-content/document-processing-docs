<template>
  <div>
    <ejs-spreadsheet ref="spreadsheet" :created="created" :allowOpen="true" :allowSave="true"
      :openUrl="openUrl" :saveUrl="saveUrl">
      <e-sheets>
        <e-sheet name="Project Budget">
          <e-ranges>
            <e-range :dataSource="dataSource"></e-range>
          </e-ranges>
          <e-columns>
            <e-column></e-column>
            <e-column></e-column>
            <e-column></e-column>
            <e-column></e-column>
            <e-column></e-column>
            <e-column></e-column>
            <e-column></e-column>
            <e-column></e-column>
            <e-column></e-column>
            <e-column></e-column>
          </e-columns>
        </e-sheet>
      </e-sheets>
    </ejs-spreadsheet>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { SpreadsheetComponent as EjsSpreadsheet, ColumnsDirective as EColumns, ColumnDirective as EColumn, RangesDirective as ERanges, RangeDirective as ERange, SheetsDirective as ESheets, SheetDirective as ESheet } from "@syncfusion/ej2-vue-spreadsheet";
import { defaultData } from './data.js';

const dataSource = defaultData;
const spreadsheet = ref(null);
const openUrl = 'https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/open';
const saveUrl = 'https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/save';

const created = function () {
  spreadsheet.value.suspendRefresh();
  spreadsheet.value.insertRow(0, 0);
  spreadsheet.value.updateCell({ value: 'Project Budget Tracker - Q2 2026' }, 'A1');
  spreadsheet.value.merge('A1:K1');
  spreadsheet.value.updateCell({ value: 'Reference' }, 'K2');
  spreadsheet.value.updateCell({ value: 'Total Budget' }, 'A13');
  spreadsheet.value.updateCell({ formula: '=SUM(F3:F12)' }, 'F13');
  spreadsheet.value.updateCell({ formula: '=SUM(G3:G12)' }, 'G13');
  spreadsheet.value.updateCell({ formula: '=SUM(H3:H12)' }, 'H13');
  spreadsheet.value.addHyperlink('https://help.syncfusion.com/document-processing/excel/spreadsheet/vue/overview', 'K3:K12', 'Open Guide');
  spreadsheet.value.cellFormat({ fontWeight: 'bold', fontSize: '14pt', textAlign: 'center', verticalAlign: 'middle', backgroundColor: '#4472C4', color: '#FFFFFF' }, 'A1:K1');
  spreadsheet.value.cellFormat({ fontWeight: 'bold', textAlign: 'center', backgroundColor: '#EAEAEA' }, 'A2:K2');
  spreadsheet.value.numberFormat('$#,##0.00', 'F3:H13');
  spreadsheet.value.addDataValidation({ type: 'WholeNumber', operator: 'Between', value1: '1', value2: '5', isHighlighted: true }, 'J3:J12');
  spreadsheet.value.wrap('A3:A12', true);
  spreadsheet.value.setBorder({ border: '1px solid #C8C8C8' }, 'A2:K13', 'Outer');
  spreadsheet.value.setRowHeight(50, 0);
  spreadsheet.value.setRowsHeight(30, ['1:13']);
  spreadsheet.value.setColWidth(220, 0);
  spreadsheet.value.setColumnsWidth(90, ['B:K']);
  spreadsheet.value.resumeRefresh();
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-spreadsheet/styles/tailwind3.css";
@import '../node_modules/@syncfusion/ej2-base/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-grids/styles/tailwind3.css';
@import "../node_modules/@syncfusion/ej2-spreadsheet/styles/tailwind3.css";
</style>
