
import Vue from "vue";
import { SpreadsheetPlugin } from "@syncfusion/ej2-vue-spreadsheet";
import { createElement } from "@syncfusion/ej2-base";
Vue.use(SpreadsheetPlugin);

new Vue({
	el: '#app',
	template: `
  <div>
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
    openUrl: 'https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/open'
  }
},
methods: {
  async handleSaveAsJson() {
      const spreadsheet = this.$refs.spreadsheet;
      if (!spreadsheet) return;
      const result = await spreadsheet.saveAsJson();
      const content = JSON.stringify(result.jsonObject, null, 2);
      this.savedJson = content;
    }
}

});