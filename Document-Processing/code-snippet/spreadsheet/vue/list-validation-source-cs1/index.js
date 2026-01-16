import Vue from "vue";
import { SpreadsheetPlugin } from "@syncfusion/ej2-vue-spreadsheet";
import { data, groupData } from './data.js';
Vue.use(SpreadsheetPlugin);

new Vue({
  el: '#app',
  template: `
    <ejs-spreadsheet ref="spreadsheet" :created="created" >
    <e-sheets>
      <e-sheet name="Car Sales Report">
        <e-ranges>
          <e-range :dataSource="defaultData" startCell="A1"></e-range>
        </e-ranges>
        <e-columns>
          <e-column :width=200></e-column>
          <e-column :width=140></e-column>
          <e-column :width=90></e-column>
        </e-columns>
        <e-rows>
          <e-row :index=0 customHeight="true">
            <e-cells>
              <e-cell :index=1 value="Group ID"></e-cell>
            </e-cells>
          </e-row>
        </e-rows>
      </e-sheet>
      <e-sheet name="List Validation Source">
        <e-ranges>
          <e-range :dataSource="grpData" startCell="A1"></e-range>
        </e-ranges>
        <e-columns>
          <e-column :width=200></e-column>
          <e-column :width=140></e-column>
        </e-columns>
      </e-sheet>
    </e-sheets>
  </ejs-spreadsheet>
`,

  data: () => {
    return {
      defaultData: data,
      grpData: groupData
    }
  },
  methods: {
    created: function () {
      var spreadsheet = this.$refs.spreadsheet;
      // Apply styles to the specified range in the active sheet.
      spreadsheet.cellFormat({ fontWeight: 'bold', textAlign: 'center', verticalAlign: 'middle' }, 'A1:B1');
      //Pass the value1 as the reference of cell range to provide more values.
      spreadsheet.addDataValidation(
        {
          type: 'List',
          inCellDropDown: true,
          value1: '=List Validation source!$B$2:$B$41',
        },
        'B2:B30'
      );
    }
  }
});