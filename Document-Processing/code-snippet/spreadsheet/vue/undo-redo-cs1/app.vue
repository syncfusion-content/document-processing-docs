<template>
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
      </e-sheets>
    </ejs-spreadsheet>
  </div>
</template>

<script>
import { SpreadsheetComponent, ColumnsDirective, ColumnDirective, RangesDirective, RangeDirective, SheetsDirective, SheetDirective, getRangeIndexes } from "@syncfusion/ej2-vue-spreadsheet";
import { addClass, removeClass } from '@syncfusion/ej2-base';
import { ButtonComponent } from "@syncfusion/ej2-vue-buttons";
import { defaultData } from './data.js';

export default {
  name: "App",
  components: {
    "ejs-button": ButtonComponent,
    "ejs-spreadsheet": SpreadsheetComponent,
    "e-sheets": SheetsDirective,
    "e-sheet": SheetDirective,
    "e-ranges": RangesDirective,
    "e-range": RangeDirective,
    "e-columns": ColumnsDirective,
    "e-column": ColumnDirective
  },
  data: () => {
    return {
      dataSource: defaultData,
      width1: 130,
      width2: 96
    }
  },
  methods: {
    actionComplete: function (args) {
      let actionEvents = args;
      let spreadsheet = this.$refs.spreadsheet;
      if (actionEvents.eventArgs.action == "customCSS") {
        let Element = spreadsheet.ej2Instances.getCell(actionEvents.eventArgs.rowIdx, actionEvents.eventArgs.colIdx);
        if (actionEvents.isUndoRedo && actionEvents.isUndo) {
          removeClass([Element], 'customClass'); // To remove the custom class in undo action
        }
        else {
          addClass([Element], 'customClass');// To add the custom class in redo action
        }
      }
    },

    updateCollection: function () {
      let spreadsheet = this.$refs.spreadsheet;
      let cell = spreadsheet.ej2Instances.getActiveSheet().activeCell;
      let cellIdx = getRangeIndexes(cell);
      let Element = spreadsheet.ej2Instances.getCell(cellIdx[0], cellIdx[1]);
      if (!Element.classList.contains("customClass")) {
        addClass([Element], 'customClass'); // To add the custom class in active cell element
        spreadsheet.ej2Instances.updateUndoRedoCollection({ eventArgs: { class: 'customClass', rowIdx: cellIdx[0], colIdx: cellIdx[1], action: 'customCSS' } }); // To update the undo redo collection
      }
    }
  }
}
</script>
<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-grids/styles/material.css';
@import "../node_modules/@syncfusion/ej2-vue-spreadsheet/styles/material.css";

.customClass.e-cell {
  background-color: red;
}
</style>
