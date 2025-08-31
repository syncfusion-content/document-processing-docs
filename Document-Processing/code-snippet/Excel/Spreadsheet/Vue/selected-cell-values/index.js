
import Vue from "vue";
import { SpreadsheetPlugin, getRangeIndexes, getSwapRange, getRangeAddress } from "@syncfusion/ej2-vue-spreadsheet";
import { defaultData } from './data.js';
import { isNullOrUndefined } from '@syncfusion/ej2-base';
Vue.use(SpreadsheetPlugin);

new Vue({
  el: '#app',
  template: `<div>
  <ejs-button class="e-btn custom-btn" @click="getSelectedCellValues">Get Selected Cell Values</ejs-button>
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
    },
    getSelectedCellValues: function () {
      var spreadsheet = this.$refs.spreadsheet;
      var sheet = spreadsheet.ej2Instances.getActiveSheet();
      var selectedRange = sheet.selectedRange;
      var index = getRangeIndexes(selectedRange);
      var cellRange = getSwapRange(index);
      var swappedRange = getRangeAddress(cellRange);
      var valueObject = [];
      var range = sheet.name + '!' + swappedRange;
      // Get the collection of selected cell values by using the getData() method.
      spreadsheet.getData(range).then((cells) => {
        cells.forEach((cell) => {
          valueObject.push(isNullOrUndefined(cell.value) ? '' : cell.value);
        });
        console.log("Collection of selected cell values:", valueObject);
      });
    },
  }
});