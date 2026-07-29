import Vue from 'vue';
import { SpreadsheetPlugin } from '@syncfusion/ej2-vue-spreadsheet';
import { DropDownList } from '@syncfusion/ej2-dropdowns';
import { getCellIndexes, getCell, setCell } from '@syncfusion/ej2-spreadsheet';

Vue.use(SpreadsheetPlugin);

new Vue({
  el: '#app',
  template: `
    <ejs-spreadsheet
      ref="spreadsheet"
      :created="onCreated"
      :beforeCellRender="onBeforeCellRender">
    </ejs-spreadsheet>
  `,
  data() {
    return {
      dropDownOptions: [10, 20, 30, 40, 50, 60],
    };
  },
  methods: {
    onCreated() {
      const spreadsheet = this.$refs.spreadsheet && this.$refs.spreadsheet.ej2Instances;
      if (!spreadsheet) return;

      // Add custom Ribbon tab and button to inject dropdown into the active cell
      spreadsheet.addRibbonTabs([
        {
          header: { text: 'Template' },
          content: [
            {
              text: 'DropDown List',
              click: () => {
                const ss = this.$refs.spreadsheet && this.$refs.spreadsheet.ej2Instances;
                if (!ss) return;
                const sheet = ss.getActiveSheet();
                const [rowIdx, colIdx] = getCellIndexes(sheet.activeCell);
                const cellModel = getCell(rowIdx, colIdx, sheet);
                const cellEle = ss.getCell(rowIdx, colIdx);

                // Avoid re-render if the cell already uses the dropdown template
                if (cellModel && cellModel.template === 'dropdown-list') return;

                // Render dropdown in the cell
                this.addDropDownlist(cellEle, this.dropDownOptions);
                // Mark model template so it re-renders correctly on virtualization/rerender
                setCell(rowIdx, colIdx, sheet, { template: 'dropdown-list' }, true);
              },
            },
          ],
        },
      ]);

      // Set row height for a range
      spreadsheet.setRowsHeight(35, ['1:100']);

      // Initialize A1–D1 with dropdown template
      const activeSheet = spreadsheet.getActiveSheet();
      for (let colIdx = 0; colIdx <= 3; colIdx++) {
        setCell(0, colIdx, activeSheet, { template: 'dropdown-list' }, true);
      }

      spreadsheet.resize();
    },

    onBeforeCellRender(args) {
      // Render dropdown if a cell has template 'dropdown-list'
      if (args && args.cell && args.cell.template === 'dropdown-list') {
        this.addDropDownlist(args.element, this.dropDownOptions);
      }
    },

    // Render Syncfusion DropDownList into the provided cell element
    addDropDownlist(element, options) {
      if (!element) return;
      // Clear any previous content to avoid duplicates
      element.innerHTML = '';

      const inputEle = document.createElement('input');
      element.appendChild(inputEle);

      const spreadsheet = this.$refs.spreadsheet && this.$refs.spreadsheet.ej2Instances;

      // Instantiate EJ2 DropDownList
      new DropDownList(
        {
          placeholder: 'Select a value',
          dataSource: options,
          cssClass: 'e-dropdown-list',
          change: (event) => {
            if (!spreadsheet) return;
            const sheet = spreadsheet.getActiveSheet();
            // Update the active cell's value when dropdown changes
            spreadsheet.updateCell({ value: String(event.value) }, sheet.activeCell);
          },
        },
        inputEle
      );
    },
  },
});