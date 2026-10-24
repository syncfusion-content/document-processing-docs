<template>
  <ejs-spreadsheet ref="spreadsheet" :contextMenuBeforeOpen="contextMenuBeforeOpen"></ejs-spreadsheet>
</template>

<script setup>
import { SpreadsheetComponent as EjsSpreadsheet } from "@syncfusion/ej2-vue-spreadsheet";
import { closest } from "@syncfusion/ej2-base";

const contextMenuBeforeOpen = function (args) {
  if (closest(args.event.target, ".e-sheet-content")) {
    console.log("Cell Context Menu");
  } else if (closest(args.event.target, ".e-colhdr-table")) {
    console.log("Column Header Context Menu");
  } else if (closest(args.event.target, ".e-rowhdr-table")) {
    console.log("Row Header Context Menu");
  } else if (closest(args.event.target, ".e-toolbar-item")) {
    console.log("Footer Context Menu");
  }
}
</script>

<style>
@import '../node_modules/@syncfusion/ej2-tailwind3-theme/styles/spreadsheet/index.css';
</style>
