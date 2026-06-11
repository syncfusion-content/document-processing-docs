
import Vue from "vue";
import { SpreadsheetPlugin, getRangeAddress } from "@syncfusion/ej2-vue-spreadsheet";

Vue.use(SpreadsheetPlugin);

new Vue({
	el: '#app',
	template: `
   <ejs-spreadsheet ref="spreadsheet" :openUrl="openUrl" :allowOpen="true" :openComplete="openComplete"></ejs-spreadsheet>
`,

   data: () => {
    return {
      openUrl: 'https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/open',
    }
  },
  methods: {
    openComplete: function () {
        let spreadsheet = this.$refs.spreadsheet.ej2Instances;
        let sheets = spreadsheet.sheets;
        for (let index = 0; index < sheets.length; index++) {
            let name = spreadsheet.sheets[index].name;
            let protectSetting = {
                selectCells: true,
                formatCells: false,
            };
            //To protect the sheet using sheet name
            spreadsheet.protectSheet(name, protectSetting);
            let address = getRangeAddress([
                0,
                0,
                sheets[index].usedRange.rowIndex,
                sheets[index].usedRange.colIndex,
            ]);
            //To lock the used range cells
            spreadsheet.lockCells(name + '!' + address, true);
          }
        }
    }

});