
import Vue from "vue";
import { SpreadsheetPlugin } from "@syncfusion/ej2-vue-spreadsheet";
import { ButtonPlugin } from "@syncfusion/ej2-vue-buttons";
import { budgetData,salaryData } from './data.js';
import { Dialog } from '@syncfusion/ej2-popups';
Vue.use(SpreadsheetPlugin);
Vue.use(ButtonPlugin);


new Vue({
	el: '#app',
	template: `
 <div> <ejs-button id='customBtn' v-on:click.native="btnClick"> Unlock cells</ejs-button>
 <div id="dialog"></div>
              <ejs-spreadsheet ref="spreadsheet" id="spreadsheet" :created="created">
                <e-sheets>
                  <e-sheet name="Budget" :isProtected="true" :protectSettings="{ selectCells: true }">
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
              </ejs-spreadsheet>
              </div>
`,

   data: () => {
    return {
       dialogObj: Dialog,
      dataSource1: budgetData,
      dataSource2: salaryData,
       dlgButtons: [{ click: this.lockCells, buttonModel: { isPrimary:'true', content: 'Learn More' } }],
    }
  },
   methods: {
   created: function () {
       var spreadsheet = this.$refs.spreadsheet;
     spreadsheet.cellFormat({ fontWeight: 'bold', textAlign: 'center' }, 'A1:D1');
       spreadsheet.cellFormat({ fontWeight: 'bold'}, 'A11:D11');
        spreadsheet.cellFormat({ fontWeight: 'bold', textAlign: 'center' }, 'Salary!A1:D1');
        // Creating dialog component,
        var dialogObj = new Dialog({
          header: 'Spreadsheet',
          target: document.getElementById('spreadsheet'),
          content: '"A1:F3" range of cells has been unlocked.',
          showCloseIcon: true,
          isModel: true,
          visible: false,
          width: '500px',
          buttons: [{
              click: this.lockCells.bind(this), buttonModel: { content: 'Ok', isPrimary: true }
          }]
      });
      dialogObj.appendTo('#dialog');

      },
      btnClick: function() {
        var dialogObj= document.getElementById("dialog").ej2_instances[0];
        dialogObj.show();
   },
   lockCells: function() {
        var spreadsheet = this.$refs.spreadsheet;
        var dialogObj= document.getElementById("dialog").ej2_instances[0];
        spreadsheet.lockCells('A1:F3', false);
        dialogObj.hide();
    }
    }

});