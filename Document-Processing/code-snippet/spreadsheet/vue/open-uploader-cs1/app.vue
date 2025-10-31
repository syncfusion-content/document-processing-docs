<template>
  <div>
    <ejs-spreadsheet id="spreadsheet" ref="spreadsheet" :openUrl="openUrl"></ejs-spreadsheet>
    <ejs-uploader :asyncSettings="path" :success="onSuccess" :allowedExtensions="allowExtentions"></ejs-uploader>
  </div>
</template>

<script>
import { SpreadsheetComponent } from "@syncfusion/ej2-vue-spreadsheet";
import { UploaderComponent } from "@syncfusion/ej2-vue-inputs";
import { getComponent } from "@syncfusion/ej2-base";

export default {
  name: "App",
  components: {
    "ejs-spreadsheet": SpreadsheetComponent,
    "ejs-uploader": UploaderComponent
  },
  data: () => {
    return {
      allowExtentions: ".xlsx, .xls, .csv",
      path: {
        saveUrl: "https://services.syncfusion.com/vue/production/api/FileUploader/Save",
        removeUrl: "https://services.syncfusion.com/vue/production/api/FileUploader/Remove"
      },
      openUrl: "https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/open"
    }
  },
  methods: {
    onSuccess: (args) => {
      let spreadsheet = getComponent(
        document.getElementById("spreadsheet"),
        "spreadsheet"
      );
      if (args.operation === "upload")
        spreadsheet.open({ file: args.file.rawFile });
    },
  },
};
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
