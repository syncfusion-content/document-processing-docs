
import Vue from "vue";
import { SpreadsheetPlugin } from "@syncfusion/ej2-vue-spreadsheet";
import { UploaderPlugin } from "@syncfusion/ej2-vue-inputs";
import { getComponent } from "@syncfusion/ej2-base";
Vue.use(SpreadsheetPlugin);
Vue.use(UploaderPlugin);

new Vue({
	el: '#app',
	template: `
  <div>
  <ejs-spreadsheet
    id="spreadsheet"
    ref="spreadsheet"
    :openUrl="openUrl"
  ></ejs-spreadsheet>
  <ejs-uploader
    :asyncSettings="path"
    :success="onSuccess"
    :allowedExtensions="allowExtentions"
  ></ejs-uploader>
</div>
`,

data: () => {
  return {
    allowExtentions: ".xlsx, .xls, .csv",
    path: {
      saveUrl:
        "https://services.syncfusion.com/vue/production/api/FileUploader/Save",
      removeUrl:
        "https://services.syncfusion.com/vue/production/api/FileUploader/Remove",
    },
    openUrl:
      "https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/open",
  };
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
}

});