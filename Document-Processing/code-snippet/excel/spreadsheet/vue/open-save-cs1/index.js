
import Vue from "vue";
import { SpreadsheetPlugin } from "@syncfusion/ej2-vue-spreadsheet";
import { data } from './data.js';
Vue.use(SpreadsheetPlugin);

new Vue({
	el: '#app',
	template: `
   <ejs-spreadsheet :saveUrl="saveUrl" :allowSave="true" :beforeSave="beforeSave">
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
          </e-sheet>
        </e-sheets></ejs-spreadsheet>
`,

   data: () => {
    return {
      dataSource: data,
      width1: 180,
      width2: 130,
      width3: 120,
      saveUrl: 'https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/save'
    }
  },
  methods: {
    beforeSave: function (args) {
        // your code snippets here
      }
    }

});