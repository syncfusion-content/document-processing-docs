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
import { DropDownList } from '@syncfusion/ej2-dropdowns';
import { getCellIndexes, getCell, setCell } from '@syncfusion/ej2-spreadsheet';

const spreadsheet = ref(null);
const dropDownOptions = [10, 20, 30, 40, 50, 60];

const onCreated = () => {
  const ss = spreadsheet.value && spreadsheet.value.ej2Instances;
  if (!ss) return;

  ss.addRibbonTabs([
    {
      header: { text: 'Template' },
      content: [
        {
          text: 'DropDown List',
          click: () => {
            const inst = spreadsheet.value && spreadsheet.value.ej2Instances;
            if (!inst) return;
            const sheet = inst.getActiveSheet();
            const [rowIdx, colIdx] = getCellIndexes(sheet.activeCell);
            const cellModel = getCell(rowIdx, colIdx, sheet);
            const cellEle = inst.getCell(rowIdx, colIdx);
            if (cellModel && cellModel.template === 'dropdown-list') return;
            addDropDownlist(cellEle, dropDownOptions);
            setCell(rowIdx, colIdx, sheet, { template: 'dropdown-list' }, true);
          },
        },
      ],
    },
  ]);

  ss.setRowsHeight(35, ['1:100']);

  const activeSheet = ss.getActiveSheet();
  for (let colIdx = 0; colIdx <= 3; colIdx++) {
    setCell(0, colIdx, activeSheet, { template: 'dropdown-list' }, true);
  }

  ss.resize();
};

const onBeforeCellRender = (args) => {
  if (args && args.cell && args.cell.template === 'dropdown-list') {
    addDropDownlist(args.element, dropDownOptions);
  }
};

const addDropDownlist = (element, options) => {
  if (!element) return;
  element.innerHTML = '';
  const inputEle = document.createElement('input');
  element.appendChild(inputEle);

  const ss = spreadsheet.value && spreadsheet.value.ej2Instances;

  new DropDownList(
    {
      placeholder: 'Select a value',
      dataSource: options,
      cssClass: 'e-dropdown-list',
      change: (event) => {
        if (!ss) return;
        const sheet = ss.getActiveSheet();
        ss.updateCell({ value: String(event.value) }, sheet.activeCell);
      },
    },
    inputEle
  );
};
</script>

<script>
export default {};
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