<template>
  <div class="control-pane">
    <div class="control-section spreadsheet-control">
      <div style="margin-bottom: 10px;">
        <button class="e-btn e-primary" @click="handleOpenFromJson">
          Load workbook JSON
        </button>
      </div>

      <div>
        <ejs-spreadsheet ref="spreadsheet" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { SpreadsheetComponent } from "@syncfusion/ej2-vue-spreadsheet";
import { jsonData } from "./datasource";

const spreadsheet = ref(null);

const handleOpenFromJson = () => {
  if (!spreadsheetRef.value) return;
  spreadsheet.value.openFromJson({ file: jsonData });
};
</script>

<style></style>