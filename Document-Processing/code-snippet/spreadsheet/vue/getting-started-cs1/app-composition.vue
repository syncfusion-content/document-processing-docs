<template>
  <ejs-spreadsheet :openUrl="openUrl" :saveUrl="saveUrl"></ejs-spreadsheet>
</template>

<script setup>
import { SpreadsheetComponent as EjsSpreadsheet } from "@syncfusion/ej2-vue-spreadsheet";

const openUrl = 'https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/open';
const saveUrl = 'https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/save';
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
