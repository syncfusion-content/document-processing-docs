
import Vue from "vue";
import { SpreadsheetPlugin } from "@syncfusion/ej2-vue-spreadsheet";
import { data } from './data.js';
Vue.use(SpreadsheetPlugin);

new Vue({
	el: '#app',
	template: `
   <ejs-spreadsheet ref="spreadsheet" :created="created" calculationMode="Manual">
    <e-sheets>
      <e-sheet name="Product Details">
        <e-ranges>
          <e-range :dataSource="dataSource" startCell="A1"></e-range>
        </e-ranges>
        <e-columns>
          <e-column :width=130></e-column>
          <e-column :width=92></e-column>
          <e-column :width=96></e-column>
        </e-columns>
      </e-sheet>
    </e-sheets>
  </ejs-spreadsheet>
`,

   data: () => {
    return {
      dataSource: data,
    }
  },
 methods: {
   created: function () {
     var spreadsheet = this.$refs.spreadsheet;
     spreadsheet.cellFormat({ fontWeight: 'bold', textAlign: 'center' }, 'A1:H1');
   }
 }

});