
import Vue from "vue";
import { SpreadsheetPlugin } from "@syncfusion/ej2-vue-spreadsheet";
import { data } from './data.js';
Vue.use(SpreadsheetPlugin);

new Vue({
	el: '#app',
	template: `
  <ejs-spreadsheet ref="spreadsheet" :created="created" :showFormulaBar="false" :cellEdit="cellEdit" :beforeCellSave="beforeCellSave">
  <e-sheets>
            <e-sheet selectedRange="E11">
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
                    <e-rows>
                      <e-row index="10">
                      <e-cells>
                      <e-cell index="3" value="Total Amount:" style="fontStyle"></e-cell>
                      <e-cell formula="=SUM(E2:E10)"></e-cell>
                      </e-cells>
                      </e-row>
                    </e-rows>
                  </e-sheet>
                </e-sheets>
</ejs-spreadsheet>
`,

   data: () => {
    return {
      dataSource: data,
       fontStyle: { fontWeight: 'bold' }
    }
  },
  methods: {
  created: function () {
      var spreadsheet = this.$refs.spreadsheet;
     spreadsheet.cellFormat({ fontWeight: 'bold', textAlign: 'center' }, 'A1:E1');
        spreadsheet.cellFormat({ textAlign: 'center' }, 'A2:A10');
        spreadsheet.cellFormat({ textAlign: 'center' }, 'C2:C10');
        spreadsheet.numberFormat('$#,##0.00', 'D2:D10');
        spreadsheet.numberFormat('$#,##0.00', 'E2:E11');
      },
      cellEdit: function (args) {
       // Preventing the editing in 5th(Amount) column.
        if (args.address.includes('E')) { args.cancel = true; }
      },
    beforeCellSave: function (args) {
      var spreadsheet = this.$refs.spreadsheet;
         // Prevent saving the edited changes in 4th(Rate) column.
        if (args.address.includes('D')) {
            args.cancel = true;
            // Manually removes the editable state without saving the changes. Use `endEdit` method if you want to save the changes.
            spreadsheet.closeEdit();
        }
      }
       },

});