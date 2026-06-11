<template>
  <ejs-spreadsheet ref="spreadsheet" :openUrl="openUrl" :allowOpen="true"
    :openComplete="openComplete"></ejs-spreadsheet>
</template>

<script setup>
import { ref } from "vue";
import { SpreadsheetComponent as EjsSpreadsheet, getRangeAddress } from "@syncfusion/ej2-vue-spreadsheet";

const spreadsheet = ref(null);
const openUrl = 'https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/open';

const openComplete = function () {
  let sheets = spreadsheet.value.sheets;
  for (let index = 0; index < sheets.length; index++) {
    let name = spreadsheet.value.sheets[index].name;
    let protectSetting = {
      selectCells: true,
      formatCells: false,
    };
    //To protect the sheet using sheet name
    spreadsheet.value.protectSheet(name, protectSetting);
    let address = getRangeAddress([
      0,
      0,
      sheets[index].usedRange.rowIndex,
      sheets[index].usedRange.colIndex,
    ]);
    //To lock the used range cells
    spreadsheet.value.lockCells(name + '!' + address, true);
  }
}
</script>
<style>
@import '../node_modules/@syncfusion/ej2-base/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-grids/styles/tailwind3.css';
@import "../node_modules/@syncfusion/ej2-vue-spreadsheet/styles/tailwind3.css";
</style>
