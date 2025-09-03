
import Vue from "vue";
import { SpreadsheetPlugin } from "@syncfusion/ej2-vue-spreadsheet";
import { data, employeeData } from './data.js';
import { ButtonPlugin } from "@syncfusion/ej2-vue-buttons";
Vue.use(ButtonPlugin);
Vue.use(SpreadsheetPlugin);

new Vue({
  el: '#app',
  template: `<div>
  <ejs-button class="e-btn custom-btn" v-on:click.native="insertSheet">Insert Sheet</ejs-button>
    <ejs-spreadsheet ref="spreadsheet" >
      <e-sheets>
        <e-sheet name="Car Sales Report">
          <e-ranges>
            <e-range :dataSource="dataSource"></e-range>
          </e-ranges>
          <e-columns>
            <e-column :width=180></e-column>
            <e-column :width=130></e-column>
            <e-column :width=130></e-column>
            <e-column :width=180></e-column>
            <e-column :width=130></e-column>
            <e-column :width=120></e-column>
          </e-columns>
        </e-sheet>
      </e-sheets>
    </ejs-spreadsheet>
  </div>
`,

  data: () => {
    return {
      dataSource: data,
    }
  },
  methods: {
    insertSheet: function () {
      var spreadsheet = this.$refs.spreadsheet;
      spreadsheet.insertSheet(
        [
          {
            index: 1,
            name: 'new_sheet',
            ranges: [
              {
                dataSource: employeeData,
                startCell: 'A1'
              },
            ]
          },
        ]
      );
      // Use the timeout function to wait until the sheet is inserted.
      setTimeout(() => {
        // Method for switching to a new sheet.
        spreadsheet.goTo('new_sheet!A1');
      })
    }
  }

});