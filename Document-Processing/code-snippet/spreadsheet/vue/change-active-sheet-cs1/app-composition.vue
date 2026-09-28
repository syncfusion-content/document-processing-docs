<template>
  <ejs-spreadsheet ref="spreadsheet" :openUrl="openUrl" :saveUrl="saveUrl"
    :openComplete="openComplete"></ejs-spreadsheet>
</template>

<script setup>
import { ref } from 'vue';
import { SpreadsheetComponent as EjsSpreadsheet } from "@syncfusion/ej2-vue-spreadsheet";

const openUrl = 'https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/open';
const saveUrl = 'https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/save';
const spreadsheet = ref(null);

const openComplete = function () {
  if (spreadsheet.value) {
    spreadsheet.value.ej2Instances.activeSheetIndex = 2;
  }
}
</script>
<style>
@import '../node_modules/@syncfusion/ej2-tailwind3-theme/styles/spreadsheet/index.css';
</style>
