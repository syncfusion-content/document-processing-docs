<template>
  <ejs-spreadsheet ref="spreadsheet" :contextMenuBeforeOpen="contextMenuBeforeOpen"></ejs-spreadsheet>
</template>

<script setup>
import { ref } from "vue";
import { SpreadsheetComponent as EjsSpreadsheet } from "@syncfusion/ej2-vue-spreadsheet";

const spreadsheet = ref(null);
const contextMenuBeforeOpen = function () {
  //To enable / disable context menu items.
  spreadsheet.value.enableContextMenuItems(['Rename'], false, false); // Contextmenu Items that needs to be enabled / disabled, Set true / false to enable / disable the menu items, Set true if the given text is a unique id.
}
</script>

<style>
@import '../node_modules/@syncfusion/ej2-tailwind3-theme/styles/spreadsheet/index.css';
</style>
