<template>
  <ejs-spreadsheet ref="spreadsheet" :created="created" :openUrl="openUrl" :saveUrl="saveUrl" :showFormulaBar="false"
    :showRibbon="false">
    <e-sheets>
      <!-- By default, state is set as 'visible'. We don’t  need to said it in the sample. -->
      <e-sheet name="Visible Sheet" state="Visible">
        <e-ranges>
          <e-range :dataSource="dataSource"></e-range>
        </e-ranges>
        <e-columns>
          <e-column :width=150></e-column>
          <e-column :width=110></e-column>
          <e-column :width=110></e-column>
          <e-column :width=85></e-column>
          <e-column :width=85></e-column>
          <e-column :width=85></e-column>
          <e-column :width=85></e-column>
          <e-column :width=85></e-column>
        </e-columns>
      </e-sheet>
      <!-- Sets sheet state as 'VeryHidden'. It can't be unhidden. -->
      <e-sheet name="Very Hidden Sheet" state="VeryHidden">
        <e-ranges>
          <e-range :dataSource="dataSource"></e-range>
        </e-ranges>
        <e-columns>
          <e-column :width=150></e-column>
          <e-column :width=110></e-column>
          <e-column :width=110></e-column>
          <e-column :width=85></e-column>
          <e-column :width=85></e-column>
          <e-column :width=85></e-column>
          <e-column :width=85></e-column>
          <e-column :width=85></e-column>
        </e-columns>
      </e-sheet>
      <!-- Sets sheet state as 'Hidden'. It can be unhidden dynamically. -->
      <e-sheet name="Hidden Sheet" state="Hidden">
        <e-ranges>
          <e-range :dataSource="dataSource"></e-range>
        </e-ranges>
        <e-columns>
          <e-column :width=150></e-column>
          <e-column :width=110></e-column>
          <e-column :width=110></e-column>
          <e-column :width=85></e-column>
          <e-column :width=85></e-column>
          <e-column :width=85></e-column>
          <e-column :width=85></e-column>
          <e-column :width=85></e-column>
        </e-columns>
      </e-sheet>
    </e-sheets>
  </ejs-spreadsheet>
</template>

<script setup>
import { ref } from "vue";
import { SpreadsheetComponent as EjsSpreadsheet, ColumnsDirective as EColumns, ColumnDirective as EColumn, RangesDirective as ERanges, RangeDirective as ERange, SheetsDirective as ESheets, SheetDirective as ESheet } from "@syncfusion/ej2-vue-spreadsheet";
import { data } from './data.js';

const spreadsheet = ref(null);
const dataSource = data;
const openUrl = 'https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/open';
const saveUrl = 'https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/save';

const created = function () {
  // Applies style formatting to active visible sheet.
  spreadsheet.value.cellFormat({ fontWeight: 'bold', textAlign: 'center' }, 'A1:H1');
  spreadsheet.value.cellFormat({ textAlign: 'center' }, 'D2:H11');
  // Applies style formatting to active hidden sheet.
  spreadsheet.value.cellFormat({ fontWeight: 'bold', textAlign: 'center' }, 'Hidden Sheet!A1:H1');
  spreadsheet.value.cellFormat({ textAlign: 'center' }, 'Hidden Sheet!D2:H11');
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
