
import Vue from "vue";
import { SpreadsheetPlugin } from "@syncfusion/ej2-vue-spreadsheet";
import { budgetData  } from './data.js';
import { ButtonPlugin } from "@syncfusion/ej2-vue-buttons";
Vue.use(ButtonPlugin);
Vue.use(SpreadsheetPlugin);

new Vue({
	el: '#app',
	template: `
  <div>
  <ejs-button className="e-btn custom-btn" v-on:click.native="readOnlyRow()">Make Row 2 readOnly</ejs-button>
  <ejs-button className="e-btn custom-btn" v-on:click.native="readOnlyCell()">Make E5 cell readOnly</ejs-button>
  <ejs-button className="e-btn custom-btn" v-on:click.native="removeReadOnly()">Remove readOnly</ejs-button>
  <ejs-button className="e-btn custom-btn" v-on:click.native="readOnlyCol()">Make Column A readOnly</ejs-button>
  <ejs-spreadsheet ref="spreadsheet">
    <e-sheets>
      <e-sheet name="Budget">
        <e-ranges>
          <e-range :dataSource="dataSource1"></e-range>
        </e-ranges>
        <e-rows>
          <e-row :index="3" :isReadOnly="true"></e-row>
          <e-row :index="4" >
            <e-cells>
              <e-cell :index="5" :isReadOnly="true"></e-cell>
            </e-cells>
          </e-row>
        </e-rows>
        <e-columns>
          <e-column :width=100></e-column>
          <e-column :width=100></e-column>
          <e-column :width=100 :isReadOnly="true"></e-column>
          <e-column :width=100></e-column>
          <e-column :width=100></e-column>
          <e-column :width=100></e-column>
        </e-columns>
      </e-sheet>
    </e-sheets>
  </ejs-spreadsheet>
  </div>
`,

   data: () => {
    return {
      dataSource1: budgetData
    }
  },
  methods: {
    readOnlyRow: function() {
      var spreadsheet = this.$refs.spreadsheet;
      spreadsheet.setRangeReadOnly(true, '2:2', spreadsheet.activeSheetIndex);
    },
    readOnlyCol: function() {
      var spreadsheet = this.$refs.spreadsheet;
      spreadsheet.setRangeReadOnly(true, 'A:A', spreadsheet.activeSheetIndex);
    },
    readOnlyCell: function() {
      var spreadsheet = this.$refs.spreadsheet;
      spreadsheet.setRangeReadOnly(true, 'E5:E5', spreadsheet.activeSheetIndex);
    },
    removeReadOnly: function() {
      var spreadsheet = this.$refs.spreadsheet;
      spreadsheet.setRangeReadOnly(false, '2:2', spreadsheet.activeSheetIndex);
      spreadsheet.setRangeReadOnly(false, 'A:A', spreadsheet.activeSheetIndex);
      spreadsheet.setRangeReadOnly(false, 'E5:E5', spreadsheet.activeSheetIndex);
    }
  }

});