<template>
  <div>
    <button type="button" class="custom-btn" @click="openFromUrl">Open from URL</button>
    <ejs-spreadsheet ref="spreadsheet"></ejs-spreadsheet>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { SpreadsheetComponent as EjsSpreadsheet } from "@syncfusion/ej2-vue-spreadsheet";

const spreadsheet = ref(null);
const fileUrl = "https://js.syncfusion.com/demos/ejservices/data/Spreadsheet/LargeData.xlsx";

const openFromUrl = () => {
  fetch(fileUrl)
    .then((response) => response.blob())
    .then((fileBlob) => {
      // Convert the fetched Blob data to a File before opening it in the Spreadsheet.
      const file = new File([fileBlob], "Sample.xlsx");
      spreadsheet.value.open({ file });
    });
};
</script>

<style>
@import '../node_modules/@syncfusion/ej2-tailwind3-theme/styles/spreadsheet/index.css';

.custom-btn {
  margin-bottom: 10px;
}
</style>
