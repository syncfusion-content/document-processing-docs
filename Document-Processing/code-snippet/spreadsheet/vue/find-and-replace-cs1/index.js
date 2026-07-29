import Vue from 'vue';
import { SpreadsheetPlugin } from '@syncfusion/ej2-vue-spreadsheet';
import { getDefaultData } from './data.js';

Vue.use(SpreadsheetPlugin);

new Vue({
  el: '#app',
  template: `
    <ejs-spreadsheet
      ref="spreadsheet"
      :actionBegin="onActionBegin">
      <e-sheets>
        <e-sheet :name="'Sheet1'">
          <e-ranges>
            <e-range :dataSource="defaultData" :startCell="'A1'"></e-range>
          </e-ranges>
        </e-sheet>
      </e-sheets>
    </ejs-spreadsheet>
  `,
  data() {
    return {
      defaultData: getDefaultData,
    };
  },
  methods: {
    onActionBegin(args) {
      const action = args.action;
      const eventArgs = args.args && args.args.eventArgs;

      // Intercept "Replace All" before it runs
      if (action === 'beforeReplaceAll' && eventArgs) {
        const spreadsheet = this.$refs.spreadsheet && this.$refs.spreadsheet.ej2Instances;
        if (!spreadsheet) return;

        // Currently active sheet's selection (e.g., "A1:C5")
        const selectedRange = spreadsheet.getActiveSheet().selectedRange;
        if (!selectedRange) return;

        // Build a collection of fully qualified addresses within the selection
        const selectedRangeCollection = this.generateCellCollection(selectedRange, spreadsheet);

        // Replace All event gives an addressCollection (array of "Sheet!A1" strings)
        const replaceAllCollection = eventArgs.addressCollection;
        if (!Array.isArray(replaceAllCollection)) return;

        // Filter to only keep cells that fall inside the current selection
        const selectedSet = new Set(selectedRangeCollection);
        const updatedCollection = replaceAllCollection.map(cell =>
          cell && selectedSet.has(cell) ? cell : null
        );

        if (updatedCollection.length > 0) {
          // Overwrite the action's address collection so replace-all only affects selection
          eventArgs.addressCollection = updatedCollection;
        }
      }
    },

    generateCellCollection(range, spreadsheet) {
      const collection = [];

      let [startCell, endCell] = range.split(':');
      endCell = endCell || startCell;

      const activeSheetName = spreadsheet.getActiveSheet().name;

      const matchParts = (cellRef) => cellRef.match(/[A-Z]+|\d+/g) || [];
      const [startCol, startRowStr] = matchParts(startCell);
      const [endCol, endRowStr] = matchParts(endCell);

      const colRange = [
        startCol.toUpperCase().charCodeAt(0),
        endCol.toUpperCase().charCodeAt(0),
      ];
      const rowRange = [parseInt(startRowStr, 10), parseInt(endRowStr, 10)];

      for (let col = colRange[0]; col <= colRange[1]; col++) {
        for (let row = rowRange[0]; row <= rowRange[1]; row++) {
          collection.push(`${activeSheetName}!${String.fromCharCode(col)}${row}`);
        }
      }
      return collection;
    },
  },
});