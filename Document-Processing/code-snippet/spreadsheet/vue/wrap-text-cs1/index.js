
import Vue from "vue";
import { SpreadsheetPlugin } from "@syncfusion/ej2-vue-spreadsheet";
import { data } from './data.js';
Vue.use(SpreadsheetPlugin);

new Vue({
	el: '#app',
	template: `
   <ejs-spreadsheet ref="spreadsheet" :created="created" :showFormulaBar="false">
  <e-sheets>
    <e-sheet name="Movie List">
      <e-ranges>
        <e-range :dataSource="dataSource"></e-range>
      </e-ranges>
      <e-columns>
        <e-column index=1 :width="100"></e-column>
        <e-column :width="140"></e-column>
        <e-column :width="90"></e-column>
        <e-column :width="150"></e-column>
        <e-column :width="120"></e-column>
        <e-column :width="90"></e-column>
        <e-column :width="180"></e-column>
      </e-columns>
      <e-rows>
        <e-row :height="30"></e-row>
        <e-row>
          <e-cells>
            <e-cell :index=7 wrap="true"></e-cell>
          </e-cells>
        </e-row>
        <e-row>
          <e-cells>
            <e-cell :index=7 wrap="true"></e-cell>
          </e-cells>
        </e-row>
        <e-row>
          <e-cells>
            <e-cell :index=7 wrap="true"></e-cell>
          </e-cells>
        </e-row>
        <e-row>
          <e-cells>
            <e-cell :index=7 wrap="true"></e-cell>
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
    }
  },
  methods: {
  created: function () {
      var spreadsheet = this.$refs.spreadsheet;
      spreadsheet.cellFormat({ fontWeight: 'bold', textAlign: 'center' }, 'A1:H1');
      spreadsheet.cellFormat({ verticalAlign: 'middle' }, 'A1:H5');
      spreadsheet.cellFormat({ textAlign: 'center' }, 'A2:B5');
      spreadsheet.cellFormat({ textAlign: 'center' }, 'D2:D5');
      // To wrap the cells from E2 to E5 range
      spreadsheet.wrap('E2:E5');
      // To unwrap the H3 cell
      spreadsheet.wrap('H3', false);
      }
    }

});