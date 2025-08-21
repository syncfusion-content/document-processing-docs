
import Vue from "vue";
import { SpreadsheetPlugin } from "@syncfusion/ej2-vue-spreadsheet";
import { data } from './data.js';
Vue.use(SpreadsheetPlugin);

new Vue({
	el: '#app',
	template: `
   <ejs-spreadsheet ref="spreadsheet" :created="created" :showFormulaBar="false"
                :showSheetTabs="false">
                <e-sheets>
                  <!-- Hiding the headers and gridlines in 'Price Details' sheet -->
                  <e-sheet :showGridLines="false" :showHeaders="false">
                    <e-ranges>
                      <e-range :dataSource="dataSource"></e-range>
                    </e-ranges>
                    <e-columns>
                      <e-column :width=150></e-column>
                      <e-column :width=110></e-column>
                      <e-column :width=110></e-column>
                      <e-column :width=85></e-column>
                      <e-column :width=85></e-column>
                      <e-column :width=85></e-column>
                      <e-column :width=85></e-column>
                      <e-column :width=85></e-column>
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
        spreadsheet.cellFormat({ textAlign: 'center' }, 'D2:H11');
        // The gridlines have been removed to set border for the range of cells
        spreadsheet.setBorder({ border: '1px solid #e0e0e0' }, 'A1:H11');
      }
    }

});