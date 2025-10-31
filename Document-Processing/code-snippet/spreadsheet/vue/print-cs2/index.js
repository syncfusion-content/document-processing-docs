
import Vue from "vue";
import { SpreadsheetPlugin } from "@syncfusion/ej2-vue-spreadsheet";
import { DropDownButtonPlugin } from "@syncfusion/ej2-vue-splitbuttons";
import { salaryData, budgetData  } from './data.js';
Vue.use(SpreadsheetPlugin);
Vue.use(DropDownButtonPlugin);

new Vue({
	el: '#app',
	template: `<div> <div id="print">
  <ejs-dropdownbutton :items='items' :select='itemSelect'>Print</ejs-dropdownbutton>
  <input type="checkbox" id="gridline"><label for="gridline">Allow Grid Lines</label>
  <input type="checkbox" id="header"><label for="header">Allow Row Column Header</label> </div>
  <ejs-spreadsheet ref="spreadsheet" :created="created" :allowOpen="true" :openUrl="openUrl" :allowSave="true" :saveUrl="saveUrl" >
    <e-sheets>
      <e-sheet name="Budget">
        <e-ranges>
          <e-range :dataSource="dataSource1"></e-range>
        </e-ranges>
        <e-columns>
          <e-column :width=100></e-column>
          <e-column :width=100></e-column>
          <e-column :width=100></e-column>
          <e-column :width=100></e-column>
        </e-columns>
      </e-sheet>
      <e-sheet name="Salary">
        <e-ranges>
          <e-range :dataSource="dataSource2"></e-range>
        </e-ranges>
        <e-columns>
          <e-column :width=100></e-column>
          <e-column :width=100></e-column>
          <e-column :width=100></e-column>
          <e-column :width=100></e-column>
        </e-columns>
      </e-sheet>
    </e-sheets>
  </ejs-spreadsheet> </div>
`,

data: () => {
    return {
      dataSource1: budgetData,
      dataSource2: salaryData,
      openUrl: 'https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/open',
      saveUrl: 'https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/save',
      items: [{ text: 'ActiveSheet' }, { text: 'Workbook' }]
    }
  },
  methods: {
   created: function () {
    var spreadsheet = this.$refs.spreadsheet;
    spreadsheet.cellFormat({ fontWeight: 'bold', textAlign: 'center' }, 'A1:H1');
    spreadsheet.cellFormat({ fontWeight: 'bold', textAlign: 'center' }, 'Salary!A1:H1');
  },

  itemSelect: function (args) {
    var spreadsheet = this.$refs.spreadsheet;
    if (spreadsheet) {
      const allowGridLines = document.getElementById('gridline');
      const allowRowColumnHeader = document.getElementById('header');
      spreadsheet.print({
        type: args.item.text,
        allowGridLines: allowGridLines.checked,
        allowRowColumnHeader: allowRowColumnHeader.checked
      });
    }
  }
}

});