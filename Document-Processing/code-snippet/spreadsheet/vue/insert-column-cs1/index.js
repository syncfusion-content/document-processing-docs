
import Vue from "vue";
import { SpreadsheetPlugin, getCellAddress } from "@syncfusion/ej2-vue-spreadsheet";
import { data  } from './data.js';
Vue.use(SpreadsheetPlugin);

new Vue({
	el: '#app',
	template: `
  <ejs-spreadsheet ref="spreadsheet" :created="created" :showFormulaBar="false"
                :showSheetTabs="false" :showRibbon="false">
                <e-sheets>
                  <e-sheet>
                    <e-ranges>
                      <e-range :dataSource="dataSource" startCell="A2"></e-range>
                    </e-ranges>
                    <e-columns>
                      <e-column :width=90></e-column>
                      <e-column :width=220></e-column>
                      <e-column :width=90></e-column>
                      <e-column :width=140></e-column>
                      <e-column :width=100></e-column>
                      <e-column :width=100></e-column>
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
      // Applies style formatting before inserting the column
        spreadsheet.cellFormat({ fontWeight: 'bold', textAlign: 'center' }, 'A2:G2');
        // inserting a empty column at 0th index
        spreadsheet.insertColumn();
        // inserting 1 column at the 5th index with column model
        spreadsheet.insertColumn([{ index: 5, width: 90 }]);
        let rowIndex = 1;
        // Updating the 5th column data
        var cellsModel=  [{ value: 'Unit Price', style: { fontWeight: 'bold', textAlign: 'center' } }, { value: '18.00' },
        { value: '19.00' }, { value: '10.00' }, { value: '22.00' }, { value: '21.35' }, { value: '25.00' }, { value: '30.00' },
        { value: '21.00' }, { value: '40.00' }, { value: '97.00' }]
         cellsModel.forEach((cell) => {
            spreadsheet.updateCell(cell, getCellAddress(rowIndex, 5)); rowIndex++;
        });
        // Applies style formatting after the rows are inserted
        spreadsheet.cellFormat({ textAlign: 'center' }, 'B3:B12');
       spreadsheet.cellFormat({ textAlign: 'center' }, 'D3:D12');
        spreadsheet.cellFormat({ textAlign: 'center' }, 'F3:H12');
      }
    }

});