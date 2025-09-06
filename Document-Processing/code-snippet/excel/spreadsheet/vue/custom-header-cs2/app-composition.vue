<template>
  <ejs-spreadsheet ref="spreadsheet" :saveUrl="saveUrl" :allowSave="true" :fileMenuItemSelect="fileMenuItemSelect">
    <e-sheets>
      <e-sheet>
        <e-ranges>
          <e-range :dataSource="dataSource"></e-range>
        </e-ranges>
        <e-columns>
          <e-column :width="width1"></e-column>
          <e-column :width="width2"></e-column>
          <e-column :width="width2"></e-column>
          <e-column :width="width1"></e-column>
          <e-column :width="width2"></e-column>
          <e-column :width="width3"></e-column>
        </e-columns>
      </e-sheet> </e-sheets></ejs-spreadsheet>
</template>

<script setup>
import { ref } from "vue";
import { SpreadsheetComponent as EjsSpreadsheet, ColumnsDirective as EColumns, ColumnDirective as EColumn, RangesDirective as ERanges, RangeDirective as ERange, SheetsDirective as ESheets, SheetDirective as ESheet } from "@syncfusion/ej2-vue-spreadsheet";
import { createElement } from "@syncfusion/ej2-base";
import { data } from "./data.js";

const spreadsheet = ref(null);
const dataSource = data;
const width1 = 180;
const width2 = 130;
const width3 = 120;
const saveUrl = "https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/save";

const fileMenuItemSelect = function (args) {
  if (args.item.text === "Microsoft Excel") {
    args.cancel = true;
    spreadsheet.value.saveAsJson().then((response) => {
      let formData = new FormData();
      formData.append(
        "JSONData",
        JSON.stringify(response.jsonObject.Workbook)
      );
      formData.append("fileName", "Sample");
      formData.append("saveType", "Xlsx");
      formData.append("pdfLayoutSettings", JSON.stringify({ fitSheetOnOnePage: false, orientation: "Portrait" }));
      fetch(
        "https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/save",
        {
          method: "POST",
          headers: { Authorization: "YOUR TEXT" },
          body: formData,
        }
      ).then((response) => {
        response.blob().then((data) => {
          let anchor = createElement("a", {
            attrs: { download: "Sample.xlsx" },
          });
          let url = URL.createObjectURL(data);
          anchor.href = url;
          document.body.appendChild(anchor);
          anchor.click();
          URL.revokeObjectURL(url);
          document.body.removeChild(anchor);
        });
      });
    });
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
