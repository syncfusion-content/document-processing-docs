
import Vue from "vue";
import { SpreadsheetPlugin } from "@syncfusion/ej2-vue-spreadsheet";
import { conditionalFormatData } from './data.js';
Vue.use(SpreadsheetPlugin);

new Vue({
	el: '#app',
	template: `
   <ejs-spreadsheet ref="spreadsheet" :created="created" :showFormulaBar="false">
  <e-sheets>
    <e-sheet name="Car Sales Record">
      <e-ranges>
        <e-range :dataSource="dataSource"></e-range>
      </e-ranges>
      <e-columns>
        <e-column :width=120></e-column>
      </e-columns>
      <e-conditionalformats>
        <e-conditionalformat type="GreaterThan", cFColor="RedFT", value="700", range="B2:B9" ></e-conditionalformat>
        <e-conditionalformat type="Bottom10Items", cFColor="YellowFT", value="4", range="C2:C9"></e-conditionalformat>
        <e-conditionalformat type="BlueDataBar", range="D2:D9"></e-conditionalformat>
      </e-conditionalformats>
    </e-sheet>
  </e-sheets>
</ejs-spreadsheet>
`,

   data: () => {
    return {
      dataSource: conditionalFormatData,
    }
  },
  methods: {
  created: function () {
      var spreadsheet = this.$refs.spreadsheet;
      spreadsheet.cellFormat({ fontWeight: 'bold', textAlign: 'center' }, 'A1:N1');
      spreadsheet.conditionalFormat({ type: "RYGColorScale", range: 'E2:E9' });
      spreadsheet.conditionalFormat({ type: "ThreeArrows", range: 'H2:H9' });
    //Custom format
        spreadsheet.conditionalFormat({ type: 'Top10Items', value: '1',
            format: { style: { color: '#ffffff', backgroundColor: '#009999', fontWeight: 'bold'}}, range: 'F2:F9' });
        spreadsheet.conditionalFormat({ type: 'Bottom10Items', value: '1',
            format: { style: { color: '#ffffff', backgroundColor: '#c68d53', fontWeight: 'bold'}}, range: 'G2:G9' });
      }
    }

});