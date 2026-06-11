
import Vue from "vue";
import { SpreadsheetPlugin, getRangeIndexes } from "@syncfusion/ej2-vue-spreadsheet";
import { addClass, removeClass } from '@syncfusion/ej2-base';
import { ButtonPlugin } from "@syncfusion/ej2-vue-buttons";
import { defaultData } from './data.js';
Vue.use(SpreadsheetPlugin);
Vue.use(ButtonPlugin);

new Vue({
	el: '#app',
	template: `
  <div>
    <ejs-button id='customBtn' v-on:click.native="updateCollection">add/remove Class</ejs-button>
    <ejs-spreadsheet ref="spreadsheet" :actionComplete="actionComplete">
      <e-sheets>
          <e-sheet>
            <e-ranges>
              <e-range :dataSource="dataSource"></e-range>
            </e-ranges>
             <e-columns>
              <e-column :width="width1"></e-column>
              <e-column :width="width2"></e-column>
            </e-columns>
          </e-sheet>
        </e-sheets></ejs-spreadsheet>
        <div>
`,

   data: () => {
    return {
      dataSource: defaultData,
      width1: 130,
      width2: 96,
    }
  },
  methods: {
   actionComplete: function (args) {
        var actionEvents = args;
         var spreadsheet = this.$refs.spreadsheet;
        if (actionEvents.eventArgs.action == "customCSS") {
            var Element = spreadsheet.ej2Instances.getCell(actionEvents.eventArgs.rowIdx,actionEvents.eventArgs.colIdx);
            if (actionEvents.isUndoRedo && actionEvents.isUndo) {
                removeClass([Element],'customClass'); // To remove the custom class in undo action
            }
            else {
                addClass([Element],'customClass');// To add the custom class in redo action
            }
        }
    },

    updateCollection: function() {
    var spreadsheet = this.$refs.spreadsheet;
    var cell = spreadsheet.ej2Instances.getActiveSheet().activeCell;
    var cellIdx = getRangeIndexes(cell);
    var Element = spreadsheet.ej2Instances.getCell(cellIdx[0], cellIdx[1]);
    if (!Element.classList.contains("customClass")) {
        addClass([Element], 'customClass'); // To add the custom class in active cell element
        spreadsheet.ej2Instances.updateUndoRedoCollection({ eventArgs: { class: 'customClass', rowIdx: cellIdx[0], colIdx: cellIdx[1], action: 'customCSS' } }); // To update the undo redo collection
    }
   }
  }

});