<template>
   <ejs-spreadsheet ref="spreadsheet" :contextMenuBeforeOpen="contextMenuBeforeOpen"></ejs-spreadsheet>
</template>

<script setup>
import { ref } from "vue";
import { SpreadsheetComponent as EjsSpreadsheet } from "@syncfusion/ej2-vue-spreadsheet";

const spreadsheet = ref(null);

const contextMenuBeforeOpen = function () {
   // To remove context menu items.
   spreadsheet.value.removeContextMenuItems(["Insert Column"], false); //Items that needs to be removed, Set `true` if the given `text` is a unique id.
}
</script>

<style>
@import '../node_modules/@syncfusion/ej2-tailwind3-theme/styles/spreadsheet/index.css';
</style>
