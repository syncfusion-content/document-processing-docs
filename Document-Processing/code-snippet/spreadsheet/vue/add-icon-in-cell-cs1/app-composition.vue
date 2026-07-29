<template>
  <ejs-spreadsheet
    ref="spreadsheet"
    :created="onCreated"
    :beforeCellRender="onBeforeCellRender">
  </ejs-spreadsheet>
</template>

<script setup>
import { ref } from 'vue';
import {
  SpreadsheetComponent as EjsSpreadsheet,
  ColumnsDirective as EColumns,
  ColumnDirective as EColumn,
  RangesDirective as ERanges,
  RangeDirective as ERange,
  SheetsDirective as ESheets,
  SheetDirective as ESheet
} from '@syncfusion/ej2-vue-spreadsheet';

const spreadsheet = ref(null);

const createPlusIconWrapper = () => {
  const wrapperDiv = document.createElement('div');
  wrapperDiv.className = 'e-custom-wrapper';
  const iconSpan = document.createElement('span');
  iconSpan.className = 'e-icons e-plus e-custom-icon';
  wrapperDiv.appendChild(iconSpan);
  return wrapperDiv;
};

const onCreated = () => {
  const ss = spreadsheet.value && spreadsheet.value.ej2Instances;
  if (!ss) return;

  ss.updateCell({ template: 'plus-icon' }, 'A1');
  ss.updateCell({ template: 'plus-icon' }, 'B1');
  ss.updateCell({ template: 'plus-icon' }, 'C1');
  ss.resize();

  ss.addRibbonTabs([
    {
      header: { text: 'Template' },
      content: [
        {
          text: 'Add Icon',
          tooltipText: 'Initialize',
          click: () => {
            const inst = spreadsheet.value && spreadsheet.value.ej2Instances;
            if (!inst) return;
            const sheet = inst.getActiveSheet();
            inst.updateCell({ template: 'plus-icon' }, sheet.activeCell);
            inst.resize();
          },
        },
      ],
    },
  ]);
};

const onBeforeCellRender = (args) => {
  if (args.cell && args.cell.template === 'plus-icon') {
    const wrapperDiv = createPlusIconWrapper();
    args.element.insertBefore(wrapperDiv, args.element.firstChild);
  }
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