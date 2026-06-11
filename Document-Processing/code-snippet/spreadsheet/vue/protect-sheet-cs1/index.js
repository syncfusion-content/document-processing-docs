
import Vue from "vue";
import { SpreadsheetPlugin } from "@syncfusion/ej2-vue-spreadsheet";
import { salaryData, budgetData  } from './data.js';
Vue.use(SpreadsheetPlugin);

new Vue({
	el: '#app',
	template: `
  <ejs-spreadsheet ref="spreadsheet" :created="created">
                <e-sheets>
                  <e-sheet name="Budget" :isProtected="true" :protectSettings="{ selectCells: true }">
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
                  <e-sheet name="Salary">
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
      dataSource1: budgetData,
      dataSource2: salaryData,
    }
  },
  methods: {
   created: function () {
       var spreadsheet = this.$refs.spreadsheet;
     spreadsheet.cellFormat({ fontWeight: 'bold', textAlign: 'center' }, 'A1:D1');
        spreadsheet.cellFormat({ fontWeight: 'bold'}, 'A11:D11');
        spreadsheet.cellFormat({ fontWeight: 'bold', textAlign: 'center' }, 'Salary!A1:D1');
        spreadsheet.protectSheet(1, { selectCells: true});
      }
    }

});