<template>
  <div>
    <ejs-spreadsheet id="spreadsheet" ref="spreadsheet" :openUrl="openUrl"></ejs-spreadsheet>
    <ejs-uploader :asyncSettings="path" :success="onSuccess" :allowedExtensions="allowExtentions"></ejs-uploader>
  </div>
</template>

<script setup>
import { SpreadsheetComponent as EjsSpreadsheet } from "@syncfusion/ej2-vue-spreadsheet";
import { UploaderComponent as EjsUploader } from "@syncfusion/ej2-vue-inputs";
import { getComponent } from "@syncfusion/ej2-base";

const allowExtentions = ".xlsx, .xls, .csv";
const path = {
  saveUrl: "https://services.syncfusion.com/vue/production/api/FileUploader/Save",
  removeUrl: "https://services.syncfusion.com/vue/production/api/FileUploader/Remove",
}
const openUrl = "https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/open";

const onSuccess = (args) => {
  let spreadsheet = getComponent(
    document.getElementById("spreadsheet"),
    "spreadsheet"
  );
  if (args.operation === "upload")
    spreadsheet.value.open({ file: args.file.rawFile });
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
