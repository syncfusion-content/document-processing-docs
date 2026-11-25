<template>
  <div>
    <input type="file" accept=".xlsx,.xls,.csv" class="custom-btn" @change="openFile" />
    <ejs-spreadsheet ref="spreadsheet"></ejs-spreadsheet>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { SpreadsheetComponent as EjsSpreadsheet } from "@syncfusion/ej2-vue-spreadsheet";

const spreadsheet = ref(null);

const openFile = (event) => {
  const file = event.target.files[0];
  if (file) {
    spreadsheet.value.open({ file });
  }
};
</script>

<style>
@import '../node_modules/@syncfusion/ej2-tailwind3-theme/styles/spreadsheet/index.css';

.custom-btn {
  margin-bottom: 10px;
}
</style>
