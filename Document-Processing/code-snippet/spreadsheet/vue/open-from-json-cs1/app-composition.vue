<template>
  <ejs-spreadsheet ref="spreadsheet" :created="created"></ejs-spreadsheet>
</template>

<script setup>
import { ref } from "vue";
import { SpreadsheetComponent as EjsSpreadsheet } from '@syncfusion/ej2-vue-spreadsheet';
import { jsonData } from './data.json';

const spreadsheet = ref(null);

const created = function () {
  // Load workbook JSON data into the Spreadsheet using openFromJson.
  spreadsheet.value.openFromJson({ file: jsonData });
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
@import '../node_modules/@syncfusion/ej2-vue-spreadsheet/styles/tailwind3.css';
</style>