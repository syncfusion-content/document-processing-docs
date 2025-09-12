
import Vue from "vue";
import { SpreadsheetPlugin } from "@syncfusion/ej2-vue-spreadsheet";
import { data } from './data.js';
Vue.use(SpreadsheetPlugin);

new Vue({
	el: '#app',
	template: `
   <ejs-spreadsheet ref="spreadsheet" :created="created" :allowOpen="true" :openUrl="openUrl" :allowSave="true" :saveUrl="saveUrl">
    <e-sheets>
      <e-sheet name="Price Details">
        <e-ranges>
          <e-range :dataSource="dataSource"></e-range>
        </e-ranges>
        <e-rows>
          <e-row :index="rowIndex" :cells="cells" ></e-row>
          <e-row :index="rowIndex1" :cells="cells1" ></e-row>
        </e-rows>
        <e-columns>
          <e-column :width="width1"></e-column>
          <e-column :width="width2"></e-column>
          <e-column :width="width2"></e-column>
          <e-column :width="width3"></e-column>
        </e-columns>
      </e-sheet>
    </e-sheets>
  </ejs-spreadsheet>
`,

   data: () => {
    return {
      dataSource: data,
      openUrl: 'https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/open',
      saveUrl: 'https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/save',
      width1: 180,
      width2: 130,
      width3: 120,
      rowIndex: 2,
      rowIndex1: 5,
      cells: [{index: 0, notes: 'These shoes have the highest sales in terms of quantity this month.'}],
      cells1: [{index: 0, notes: 'These shoes have been the most profitable this month.'}]
    }
  },
  methods: {
  created: function () {
      var spreadsheet = this.$refs.spreadsheet;
      spreadsheet.cellFormat({ fontWeight: 'bold', textAlign: 'center' }, 'A1:H1');
      spreadsheet.cellFormat({ verticalAlign: 'middle' }, 'A1:H11');
      }
    }
});