<template>
  <ejs-spreadsheet
    ref="spreadsheet"
    :created="onCreated"
    :beforeCellRender="onBeforeCellRender">
  </ejs-spreadsheet>
</template>

<script>
import {
  SpreadsheetComponent,
  ColumnsDirective,
  ColumnDirective,
  RangesDirective,
  RangeDirective,
  SheetsDirective,
  SheetDirective
} from '@syncfusion/ej2-vue-spreadsheet';
import { DropDownList } from '@syncfusion/ej2-dropdowns';
import { getCellIndexes, getCell, setCell } from '@syncfusion/ej2-spreadsheet';

export default {
  name: 'App',
  components: {
    'ejs-spreadsheet': SpreadsheetComponent,
    'e-sheets': SheetsDirective,
    'e-sheet': SheetDirective,
    'e-ranges': RangesDirective,
    'e-range': RangeDirective,
    'e-columns': ColumnsDirective,
    'e-column': ColumnDirective
  },
  data() {
    return {
      dropDownOptions: [10, 20, 30, 40, 50, 60],
    };
  },
  methods: {
    onCreated() {
      const spreadsheet = this.$refs.spreadsheet && this.$refs.spreadsheet.ej2Instances;
      if (!spreadsheet) return;

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
                if (cellModel && cellModel.template === 'dropdown-list') return;
                this.addDropDownlist(cellEle, this.dropDownOptions);
                setCell(rowIdx, colIdx, sheet, { template: 'dropdown-list' }, true);
              },
            },
          ],
        },
      ]);

      spreadsheet.setRowsHeight(35, ['1:100']);

      const activeSheet = spreadsheet.getActiveSheet();
      for (let colIdx = 0; colIdx <= 3; colIdx++) {
        setCell(0, colIdx, activeSheet, { template: 'dropdown-list' }, true);
      }

      spreadsheet.resize();
    },

    onBeforeCellRender(args) {
      if (args && args.cell && args.cell.template === 'dropdown-list') {
        this.addDropDownlist(args.element, this.dropDownOptions);
      }
    },

    addDropDownlist(element, options) {
      if (!element) return;
      element.innerHTML = '';

      const inputEle = document.createElement('input');
      element.appendChild(inputEle);

      const spreadsheet = this.$refs.spreadsheet && this.$refs.spreadsheet.ej2Instances;

      new DropDownList(
        {
          placeholder: 'Select a value',
          dataSource: options,
          cssClass: 'e-dropdown-list',
          change: (event) => {
            if (!spreadsheet) return;
            const sheet = spreadsheet.getActiveSheet();
            spreadsheet.updateCell({ value: String(event.value) }, sheet.activeCell);
          },
        },
        inputEle
      );
    },
  },
};
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
</style>