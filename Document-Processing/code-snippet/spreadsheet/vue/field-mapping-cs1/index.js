
import Vue from "vue";
import { SpreadsheetPlugin } from "@syncfusion/ej2-vue-spreadsheet";
import { budgetData  } from './data.js';
Vue.use(SpreadsheetPlugin);

new Vue({
	el: '#app',
	template: `
  <div>
  <ejs-spreadsheet ref="spreadsheet">
    <e-sheets>
      <e-sheet name="Budget">
        <e-ranges>
          <e-range :dataSource="dataSource1" :fieldsOrder="fieldsOrder"></e-range>
        </e-ranges>
        <e-columns>
          <e-column :width=100></e-column>
          <e-column :width=100></e-column>
          <e-column :width=100></e-column>
          <e-column :width=100></e-column>
          <e-column :width=100></e-column>
          <e-column :width=100></e-column>
        </e-columns>
      </e-sheet>
    </e-sheets>
  </ejs-spreadsheet>
  </div>
`,

   data: () => {
    return {
      dataSource1: budgetData,
      fieldsOrder: ['Projected Cost', 'Actual Cost', 'Expense Type', 'Difference']
    }
  },

});