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
  methods: {
    createPlusIconWrapper() {
      const wrapperDiv = document.createElement('div');
      wrapperDiv.className = 'e-custom-wrapper';
      const iconSpan = document.createElement('span');
      iconSpan.className = 'e-icons e-plus e-custom-icon';
      wrapperDiv.appendChild(iconSpan);
      return wrapperDiv;
    },
    onCreated() {
      const spreadsheet = this.$refs.spreadsheet && this.$refs.spreadsheet.ej2Instances;
      if (!spreadsheet) return;
      spreadsheet.updateCell({ template: 'plus-icon' }, 'A1');
      spreadsheet.updateCell({ template: 'plus-icon' }, 'B1');
      spreadsheet.updateCell({ template: 'plus-icon' }, 'C1');
      spreadsheet.resize();
      spreadsheet.addRibbonTabs([
        {
          header: { text: 'Template' },
          content: [
            {
              text: 'Add Icon',
              tooltipText: 'Initialize',
              click: () => {
                const ss = this.$refs.spreadsheet && this.$refs.spreadsheet.ej2Instances;
                if (!ss) return;
                const sheet = ss.getActiveSheet();
                ss.updateCell({ template: 'plus-icon' }, sheet.activeCell);
                ss.resize();
              },
            },
          ],
        },
      ]);
    },

    onBeforeCellRender(args) {
      if (args.cell && args.cell.template === 'plus-icon') {
        const wrapperDiv = this.createPlusIconWrapper();
        args.element.insertBefore(wrapperDiv, args.element.firstChild);
      }
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