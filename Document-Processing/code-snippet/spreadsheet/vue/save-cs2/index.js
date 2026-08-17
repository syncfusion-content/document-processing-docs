
import Vue from "vue";
import { SpreadsheetPlugin, getRangeIndexes } from "@syncfusion/ej2-vue-spreadsheet";
import { addClass, removeClass } from '@syncfusion/ej2-base';
import { DropDownButtonPlugin } from "@syncfusion/ej2-vue-splitbuttons";
import { defaultData } from './data.js';
Vue.use(SpreadsheetPlugin);
Vue.use(DropDownButtonPlugin);

new Vue({
	el: '#app',
	template: `
  <div>
    <ejs-dropdownbutton :items='items' :select='itemSelect'>Save</ejs-dropdownbutton>
    <ejs-spreadsheet ref="spreadsheet">
      <e-sheets>
          <e-sheet>
            <e-ranges>
              <e-range :dataSource="dataSource"></e-range>
            </e-ranges>
             <e-columns>
              <e-column :width="width1"></e-column>
              <e-column :width="width2"></e-column>
            </e-columns>
          </e-sheet>
        </e-sheets></ejs-spreadsheet>
        <div>
`,

   data: () => {
    return {
      dataSource: defaultData,
    }
  },
  methods: {
     onClick() {
      const spreadsheetObj = this.$refs.spreadsheet;
      if (!spreadsheetObj) return;
      spreadsheetObj.save({
        url: "https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/save",
        fileName: "Worksheet",
        saveType: "Xlsx"
      });
    }
  }

});