<template>
  <ejs-spreadsheet ref="spreadsheet" :openUrl="openUrl" :allowOpen="true" :created="created"></ejs-spreadsheet>
</template>

<script setup>
import { ref } from "vue";
import { SpreadsheetComponent as EjsSpreadsheet } from "@syncfusion/ej2-vue-spreadsheet";

const spreadsheet = ref(null);
const openUrl = 'https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/open';

const created = function () {
  fetch("https://cdn.syncfusion.com/scripts/spreadsheet/Sample.xlsx") // fetch the remote url
    .then((response) => {
      response.blob().then((fileBlob) => { // convert the excel file to blob
        let file = new File([fileBlob], "Sample.xlsx"); //convert the blob into file
        spreadsheet.value.open({ file: file }); // open the file into Spreadsheet
      })
    })
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