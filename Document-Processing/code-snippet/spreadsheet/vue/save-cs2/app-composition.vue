<template>
  <div>
    <ejs-spreadsheet ref="spreadsheet">
      <e-sheets>
        <e-sheet name="Car Sales Report">
          <e-ranges-collection>
            <e-range :dataSource="salesData" />
          </e-ranges-collection>
        </e-sheet>
      </e-sheets>
    </ejs-spreadsheet>

    <button class="e-btn e-primary" @click="onClick">Save</button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { SpreadsheetComponent, SheetsDirective, SheetDirective, RangesDirective, RangeDirective } from "@syncfusion/ej2-vue-spreadsheet";
import { salesData } from "./data";

const spreadsheet = ref(null);

const onClick = () => {
  spreadsheet.value?.save({
    url: "https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/save",
    fileName: "Worksheet",
    saveType: "Xlsx"
  });
};
</script>