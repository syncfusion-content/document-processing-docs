<template>
  <ejs-spreadsheet :openUrl="openUrl" :allowOpen="true" :beforeOpen="beforeOpen"></ejs-spreadsheet>
</template>

<script setup>
import { SpreadsheetComponent as EjsSpreadsheet } from "@syncfusion/ej2-vue-spreadsheet";

const openUrl = "https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/open";

const beforeOpen = function (args) {
  args.requestData = {
    ...args.requestData,
    headers: { Authorization: "YOUR TEXT" }
  };
}
</script>

<style>
@import '../node_modules/@syncfusion/ej2-tailwind3-theme/styles/spreadsheet/index.css';
</style>
