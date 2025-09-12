
import Vue from "vue";
import { SpreadsheetPlugin } from "@syncfusion/ej2-vue-spreadsheet";
import { defaultData } from './data.js';
Vue.use(SpreadsheetPlugin);

new Vue({
  el: '#app',
  template: `<div>
  <ejs-button class="e-btn custom-btn" @click="getFilterData">Get Filtered Data</ejs-button>
  <ejs-spreadsheet ref="spreadsheet" :created="created">
    <e-sheets>
      <e-sheet>
        <e-ranges>
          <e-range :dataSource="dataSource"></e-range>
        </e-ranges>
        <e-columns>
          <e-column :width="width1"></e-column>
          <e-column :width="width2"></e-column>
          <e-column :width="width2"></e-column>
          <e-column :width="width1"></e-column>
          <e-column :width="width2"></e-column>
          <e-column :width="width3"></e-column>
        </e-columns>
      </e-sheet>
    </e-sheets></ejs-spreadsheet>
</div>
`,

  data: () => {
    return {
      dataSource: defaultData,
      width1: 180,
      width2: 130,
      width3: 120,
    }
  },
  methods: {
    created: function () {
      var spreadsheet = this.$refs.spreadsheet;
      spreadsheet.cellFormat({ fontWeight: 'bold', textAlign: 'center', verticalAlign: 'middle' }, 'A1:F1');
      // Construct the predicate model to be updated to the data.
      var predicates = [{
        field: 'C',
        operator: 'equal',
        value: 'Pink',
        matchCase: false
      }];
      // Apply filter to the specified range.
      spreadsheet.applyFilter(predicates, 'A1:C7');
    },
    getFilterData: function () {
      var spreadsheet = this.$refs.spreadsheet;
      var activeSheet = spreadsheet.ej2Instances.getActiveSheet();
      var usedRange = activeSheet.usedRange;
      for (var i = 0; i <= usedRange.rowIndex; i++) {
        // Get the filtered row using isFiltered property.
        var filteredRow = (activeSheet.rows[i]).isFiltered;
        if (!filteredRow) {
          var rowData = spreadsheet.getRowData(i);
          console.log("Row:", i + 1, "Cells", rowData);
        }
      }
    },
  }

});