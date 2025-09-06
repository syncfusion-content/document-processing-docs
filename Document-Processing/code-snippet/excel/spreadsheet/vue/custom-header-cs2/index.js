
import Vue from "vue";
import { SpreadsheetPlugin } from "@syncfusion/ej2-vue-spreadsheet";
import { createElement } from "@syncfusion/ej2-base";
import { data } from "./data.js";
Vue.use(SpreadsheetPlugin);
;
new Vue({
	el: '#app',
	template: `
  <ejs-spreadsheet
    ref="spreadsheet"
    :saveUrl="saveUrl"
    :allowSave="true"
    :fileMenuItemSelect="fileMenuItemSelect"
  >
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
      </e-sheet> </e-sheets
  ></ejs-spreadsheet>
`,

  data: () => {
    return {
      dataSource: data,
      width1: 180,
      width2: 130,
      width3: 120,
      saveUrl:
        "https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/save",
    };
  },
  methods: {
    fileMenuItemSelect: function (args) {
      var spreadsheet = this.$refs.spreadsheet;
      if (args.item.text === "Microsoft Excel") {
        args.cancel = true;
        spreadsheet.saveAsJson().then((response) => {
          var formData = new FormData();
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
              var anchor = createElement("a", {
                attrs: { download: "Sample.xlsx" },
              });
              var url = URL.createObjectURL(data);
              anchor.href = url;
              document.body.appendChild(anchor);
              anchor.click();
              URL.revokeObjectURL(url);
              document.body.removeChild(anchor);
            });
          });
        });
      }
    },
  },

});