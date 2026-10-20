import Vue from "vue";
import { SpreadsheetPlugin } from "@syncfusion/ej2-vue-spreadsheet";
import { defaultData } from './data.js';
Vue.use(SpreadsheetPlugin);

new Vue({
	el: '#app',
	template: `
  <div>
    <ejs-spreadsheet ref="spreadsheet" :created="created" :allowOpen="true" :allowSave="true" :openUrl="openUrl" :saveUrl="saveUrl">
      <e-sheets>
          <e-sheet name="Project Budget">
            <e-ranges>
              <e-range :dataSource="dataSource"></e-range>
            </e-ranges>
            <e-columns>
              <e-column></e-column>
              <e-column></e-column>
              <e-column></e-column>
              <e-column></e-column>
              <e-column></e-column>
              <e-column></e-column>
              <e-column></e-column>
              <e-column></e-column>
              <e-column></e-column>
              <e-column></e-column>
            </e-columns>
          </e-sheet>
      </e-sheets>
    </ejs-spreadsheet>
  </div>
`,

  data: () => {
    return {
      dataSource: defaultData,
      openUrl: 'https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/open',
      saveUrl: 'https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/save'
    };
  },
  methods: {
    created: function () {
      var spreadsheet = this.$refs.spreadsheet;
      spreadsheet.suspendRefresh();
      spreadsheet.insertRow(0, 0);
      spreadsheet.updateCell({ value: 'Project Budget Tracker - Q2 2026' }, 'A1');
      spreadsheet.merge('A1:K1');
      spreadsheet.updateCell({ value: 'Reference' }, 'K2');
      spreadsheet.updateCell({ value: 'Total Budget' }, 'A13');
      spreadsheet.updateCell({ formula: '=SUM(F3:F12)' }, 'F13');
      spreadsheet.updateCell({ formula: '=SUM(G3:G12)' }, 'G13');
      spreadsheet.updateCell({ formula: '=SUM(H3:H12)' }, 'H13');
      spreadsheet.addHyperlink('https://help.syncfusion.com/document-processing/excel/spreadsheet/vue/overview', 'K3:K12', 'Open Guide');
      spreadsheet.cellFormat({ fontWeight: 'bold', fontSize: '14pt', textAlign: 'center', verticalAlign: 'middle', backgroundColor: '#4472C4', color: '#FFFFFF' }, 'A1:K1');
      spreadsheet.cellFormat({ fontWeight: 'bold', textAlign: 'center', backgroundColor: '#EAEAEA' }, 'A2:K2');
      spreadsheet.numberFormat('$#,##0.00', 'F3:H13');
      spreadsheet.addDataValidation({ type: 'WholeNumber', operator: 'Between', value1: '1', value2: '5', isHighlighted: true }, 'J3:J12');
      spreadsheet.wrap('A3:A12', true);
      spreadsheet.setBorder({ border: '1px solid #C8C8C8' }, 'A2:K13', 'Outer');
      spreadsheet.setRowHeight(50, 0);
      spreadsheet.setRowsHeight(30, ['1:13']);
      spreadsheet.setColWidth(220, 0);
      spreadsheet.setColumnsWidth(90, ['B:K']);
      spreadsheet.resumeRefresh();
    }
  }

});