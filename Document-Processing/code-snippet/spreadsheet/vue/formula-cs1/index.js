
import Vue from "vue";
import { SpreadsheetPlugin } from "@syncfusion/ej2-vue-spreadsheet";
import { data } from './data.js';
Vue.use(SpreadsheetPlugin);

new Vue({
	el: '#app',
	template: `
  <ejs-spreadsheet
  ref="spreadsheet"
  :created="created"
  :showRibbon="false"
  :showSheetTabs="false"
>
  <e-sheets>
    <e-sheet>
      <e-ranges>
        <e-range :dataSource="dataSource" startCell="A2"></e-range>
      </e-ranges>
      <e-columns>
        <e-column :width="150"></e-column>
        <e-column :width="120"></e-column>
        <e-column :width="120"></e-column>
        <e-column :width="120"></e-column>
        <e-column :width="120"></e-column>
        <e-column :width="120"></e-column>
      </e-columns>
      <e-rows>
        <e-row :height="40" customHeight="true">
          <e-cells>
            <e-cell value="Monthly Expense" colSpan="5"></e-cell>
            <e-cell formula="=SUM(E2:E10)"></e-cell>
          </e-cells>
        </e-row>
        <e-row :height="30" customHeight="true"></e-row>
        <e-row :index="11">
          <e-cells>
            <e-cell value="Totals"></e-cell>
            <e-cell formula="=SUM(B3:B11)"></e-cell>
            <e-cell formula="=SUM(C3:C11)"></e-cell>
            <e-cell formula="=SUM(D3:D11)"></e-cell>
          </e-cells>
        </e-row>
        <e-row>
          <e-cells>
            <e-cell
              :index="1"
              value="Number of Categories"
              :colSpan="2"
            ></e-cell>
            <e-cell index="3" formula="=COUNTA(A3:A11)"></e-cell>
          </e-cells>
        </e-row>
        <e-row>
          <e-cells>
            <e-cell :index="1" value="Average Spend" :colSpan="2"></e-cell>
            <e-cell
              index="3"
              formula="=AVERAGE(B3:B11)"
              format="$#,##0"
            ></e-cell>
          </e-cells>
        </e-row>
        <e-row>
          <e-cells>
            <e-cell :index="1" value="Min Spend" :colSpan="2"></e-cell>
            <e-cell index="3" formula="=MIN(B3:B11)" format="$#,##0"></e-cell>
          </e-cells>
        </e-row>
        <e-row>
          <e-cells>
            <e-cell :index="1" value="Max Spend" :colSpan="2"></e-cell>
            <e-cell index="3" formula="=Max(B3:B11)" format="$#,##0"></e-cell>
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
    // Custom function to calculate percentage between two cell values.
    calculatePercentage(firstCell, secondCell) {
      return Number(firstCell) / Number(secondCell);
    },
    // Custom function to calculate round down for values.
    roundDownHandler(value, digit) {
      let multiplier = Math.pow(10, digit);
      return Math.floor(value * multiplier) / multiplier;
    },

    created: function () {
      var spreadsheet = this.$refs.spreadsheet;
      spreadsheet.cellFormat(
        { fontWeight: "bold", textAlign: "center" },
        "A2:F2"
      );
      spreadsheet.numberFormat("$#,##0", "B3:D12");
      spreadsheet.numberFormat("0%", "E3:E12");
      // Adding custom function for calculating the percentage between two cells.
      spreadsheet.addCustomFunction(this.calculatePercentage, "PERCENTAGE");
      // Adding custom function for calculating round down for the value.
      spreadsheet.addCustomFunction(this.roundDownHandler, "ROUNDDOWN");
      // Calculate percentage using custom added formula in E12 cell.
      spreadsheet.updateCell({ formula: "=PERCENTAGE(C12,D12)" }, "E12");
      // Calculate round down for average values using custom added formula in F12 cell.
      spreadsheet.updateCell({ formula: "=ROUNDDOWN(F11,1)" }, "F12");
    },
  },

});