
import Vue from "vue";
import { SpreadsheetPlugin } from "@syncfusion/ej2-vue-spreadsheet";
import { priceData, budgetData  } from './data.js';
Vue.use(SpreadsheetPlugin);

new Vue({
	el: '#app',
	template: `
  <ejs-spreadsheet ref="spreadsheet" :created="created" :showFormulaBar="false">
                <e-sheets>
                  <e-sheet name="Price Details">
                    <e-ranges>
                      <e-range :dataSource="dataSource1"></e-range>
                    </e-ranges>
                    <e-columns>
                      <e-column :width=100></e-column>
                      <e-column :width=100></e-column>
                      <e-column :width=100></e-column>
                      <e-column :width=100></e-column>
                    </e-columns>
                  </e-sheet>
                  <e-sheet name="Budget Details">
                    <e-ranges>
                      <e-range :dataSource="dataSource2"></e-range>
                    </e-ranges>
                    <e-columns>
                      <e-column :width=100></e-column>
                      <e-column :width=100></e-column>
                      <e-column :width=100></e-column>
                      <e-column :width=100></e-column>
                      </e-columns>
                  </e-sheet>
                </e-sheets>
              </ejs-spreadsheet>
`,

   data: () => {
    return {
      dataSource1: priceData,
      dataSource2: budgetData,
    }
  },
  methods: {
   created: function () {
       var spreadsheet = this.$refs.spreadsheet;
    spreadsheet.cellFormat({ fontWeight: 'bold', textAlign: 'center' }, 'A1:H1');
        spreadsheet.cellFormat({ fontWeight: 'bold', textAlign: 'center' }, 'Budget Details!A1:D1');
      }
    }

});