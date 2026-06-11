
import Vue from "vue";
import { SpreadsheetPlugin } from "@syncfusion/ej2-vue-spreadsheet";
import { defaultData } from './data.js';
Vue.use(SpreadsheetPlugin);

new Vue({
	el: '#app',
	template: `
   <ejs-spreadsheet ref="spreadsheet">
   <e-sheets>
          <e-sheet :frozenRows=2  :frozenColumns=2 >
            <e-ranges>
              <e-range :dataSource="dataSource"></e-range>
            </e-ranges>
             <e-columns>
                      <e-column :width=120></e-column>
                      <e-column :width=180></e-column>
                      <e-column :width=100></e-column>
                      <e-column :width=120></e-column>
                      <e-column :width=120></e-column>
              </e-columns>
          </e-sheet>
        </e-sheets></ejs-spreadsheet>
`,

   data: () => {
    return {
      dataSource: defaultData,
    }
  }

});