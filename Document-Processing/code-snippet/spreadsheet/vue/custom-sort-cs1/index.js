
import Vue from "vue";
import { SpreadsheetPlugin } from "@syncfusion/ej2-vue-spreadsheet";
import { DataManager, DataUtil } from '@syncfusion/ej2-data';
import { tradeData } from './data.js';
Vue.use(SpreadsheetPlugin);

new Vue({
	el: '#app',
	template: `
   <ejs-spreadsheet ref="spreadsheet" :allowSorting='true' :dataBound="dataBound" :sortComplete="sortComplete">
   <e-sheets>
          <e-sheet>
            <e-ranges>
              <e-range :dataSource="dataSource"></e-range>
            </e-ranges>
          </e-sheet>
        </e-sheets></ejs-spreadsheet>
`,

   data: () => {
    return {
      dataSource: tradeData,
    }
  },
  methods: {
    dataBound: function () {
        var spreadsheet = this.$refs.spreadsheet;
        if (spreadsheet.ej2Instances.activeSheetIndex === 0) {
           spreadsheet.sort({sortDescriptors: { field: 'F',  sortComparer: this.mySortComparer }, containsHeader: true}, 'A1:H20');
        }
    },
    sortComplete: function (args) {
        var spreadsheet = this.$refs.spreadsheet;
        spreadsheet.selectRange(args.range);
        // code here.
    },

    mySortComparer: function (x, y) {
   // custom sort comparer to sort based on the custom list.
    var customList = ['Perfect', 'Sufficient', 'Insufficient'];
    var comparer = DataUtil.fnSort('Ascending');
    return comparer(x ? customList.indexOf(x.value) : x, y ? customList.indexOf(y.value) : y);
     };
  }

});