
import Vue from "vue";
import { SpreadsheetPlugin } from "@syncfusion/ej2-vue-spreadsheet";
import { tradeData } from './data.js';
Vue.use(SpreadsheetPlugin);

new Vue({
	el: '#app',
	template: `
   <ejs-spreadsheet ref="spreadsheet" :allowFiltering='true' :dataBound="dataBound">
   <e-sheets>
          <e-sheet>
            <e-ranges>
              <e-range :dataSource="dataSource"></e-range>
            </e-ranges>
            <e-columns>
              <e-column :width="width1"></e-column>
              <e-column :width="width2"></e-column>
              <e-column :width="width3"></e-column>
              <e-column :width="width2"></e-column>
              <e-column :width="width2"></e-column>
              <e-column :width="width3"></e-column>
              <e-column :width="width1"></e-column>
              <e-column :width="width1"></e-column>
              <e-column :width="width4"></e-column>
              <e-column :width="width1"></e-column>
              <e-column :width="width2"></e-column>
              <e-column :width="width5"></e-column>
            </e-columns>
          </e-sheet>
        </e-sheets></ejs-spreadsheet>
`,

   data: () => {
    return {
      dataSource: tradeData,
      width1: 100,
      width2: 130,
      width3: 96,
      width4: 110,
      width5: 150,
    }
  },
  methods: {
  dataBound: function () {
      var spreadsheet = this.$refs.spreadsheet;
        if (spreadsheet.ej2Instances.activeSheetIndex === 0) {
            var departments = ['Sweden', 'Canada', 'UK'];
            var predicateList = []
            departments.forEach((department) => { predicateList.push({ field: 'D', predicate: 'or', operator: 'equal', value: department }); })
            spreadsheet.applyFilter(predicateList);
        }
      }
    }

});