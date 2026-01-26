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
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-dropdowns/styles/material.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-grids/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-spreadsheet/styles/material.css";
</style>
