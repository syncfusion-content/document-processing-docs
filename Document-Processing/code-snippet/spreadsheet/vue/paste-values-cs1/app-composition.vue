<template>
  <ejs-spreadsheet
    ref="spreadsheet"
    :actionBegin="onActionBegin">
    <e-sheets>
      <e-sheet :name="'Sheet1'">
        <e-ranges>
          <e-range :dataSource="defaultData" :startCell="'A1'"></e-range>
        </e-ranges>
      </e-sheet>
    </e-sheets>
  </ejs-spreadsheet>
</template>

<script setup>
import { ref } from 'vue';
import {
  SpreadsheetComponent as EjsSpreadsheet,
  SheetsDirective as ESheets,
  SheetDirective as ESheet,
  RangesDirective as ERanges,
  RangeDirective as ERange
} from '@syncfusion/ej2-vue-spreadsheet';
import { getDefaultData } from './data.js';

const spreadsheet = ref(null);
const defaultData = getDefaultData();

const onActionBegin = (args) => {
  if (args && args.action === 'clipboard' && args.args && args.args.eventArgs) {
    args.args.eventArgs.type = 'Values';
  }
};
</script>

<script>
export default {};
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