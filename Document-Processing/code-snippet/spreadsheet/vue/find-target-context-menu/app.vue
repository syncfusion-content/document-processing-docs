<template>
  <ejs-spreadsheet ref="spreadsheet" :contextMenuBeforeOpen="contextMenuBeforeOpen"></ejs-spreadsheet>
</template>

<script>
import { SpreadsheetComponent } from "@syncfusion/ej2-vue-spreadsheet";
import { closest } from "@syncfusion/ej2-base";

export default {
  name: "App",
  components: {
    "ejs-spreadsheet": SpreadsheetComponent
  },
  methods: {
    contextMenuBeforeOpen: function (args) {
      if (closest(args.event.target, ".e-sheet-content")) {
        console.log("Cell Context Menu");
      } else if (closest(args.event.target, ".e-colhdr-table")) {
        console.log("Column Header Context Menu");
      } else if (closest(args.event.target, ".e-rowhdr-table")) {
        console.log("Row Header Context Menu");
      } else if (closest(args.event.target, ".e-toolbar-item")) {
        console.log("Footer Context Menu");
      }
    },
  },
};
</script>

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-grids/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-vue-spreadsheet/styles/tailwind3.css";
</style>