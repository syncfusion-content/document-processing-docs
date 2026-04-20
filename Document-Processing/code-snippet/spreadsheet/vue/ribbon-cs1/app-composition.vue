<template>
  <ejs-spreadsheet ref="spreadsheet" :created="created" :fileMenuBeforeOpen="fileMenuBeforeOpen"
    :fileMenuItemSelect="fileMenuItemSelect" :openUrl="openUrl" :saveUrl="saveUrl" :showFormulaBar="false"
    :showSheetTabs="false" :allowInsert="false" :allowDelete="false" :allowMerge="false">
    <e-sheets>
      <e-sheet>
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
</template>

<script setup>

import { SpreadsheetComponent as EjsSpreadsheet, ColumnsDirective as EColumns, ColumnDirective as EColumn, RangesDirective as ERanges, RangeDirective as ERange, SheetsDirective as ESheets, SheetDirective as ESheet } from "@syncfusion/ej2-vue-spreadsheet";
import { data } from './data.js';
import { DropDownButton } from '@syncfusion/ej2-splitbuttons';
import { createElement } from '@syncfusion/ej2-base';

const spreadsheet = ref(null);
const dataSource = data;
const openUrl = 'https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/open';
const saveUrl = 'https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/save';

const created = function () {
  spreadsheet.value.cellFormat({ fontWeight: 'bold', textAlign: 'center' }, 'A1:F1');
  // Hiding the `Insert` from ribbon.
  spreadsheet.value.hideRibbonTabs(['Insert']);
  // Set disabled state to `View` ribbon tab.
  spreadsheet.value.enableRibbonTabs(['View'], false);
  /// Adding the `Help` ribbon tab at the last index.
  // Specify the ribbon tab header text in last optional argument(`insertBefore`) for inserting new tab before any existing tab.
  spreadsheet.value.addRibbonTabs([{
    header: { text: 'Help' }, content: [{
      text: 'Feedback', tooltipText: 'Feedback',
      click: function () { /* Any click action for this toolbar item will come here. */ }
    }]
  }]);
  // Hiding the unwanted toobar items from `Home` by specifying its index.
  spreadsheet.value.hideToolbarItems('Home', [0, 1, 2, 4, 14, 15, 21, 24]);
  // Set diable state to `Underline`, 'Wrap text` toobar items from `Home` by specifying the item id.
  spreadsheet.value.enableToolbarItems(
    'Home', [`${spreadsheet.value.ej2Instances.element.id}_underline`, `${spreadsheet.value.ej2Instances.element.id}_wrap`], false);
  // Set disable state to `Protect Sheet` toolbar item from `Data` by mentioning its index.
  spreadsheet.value.enableToolbarItems('Data', [0], false);
  // Adding the new `Custom Formulas` toolbar item under `Formulas` tab for adding custom formulas.
  spreadsheet.value.addToolbarItems(
    'Formulas', [{ type: 'Separator' }, {
      text: 'Custom Formulas', tooltipText: 'Custom Formulas',
      // You can set click handler for each new custom toolbar item.
      click: function () {
        // You can add custom formualas here.
      }
    }]);
  // Adding new custom item `Import` after the existing `Open` item. By default, new item will add after the specified item.
  spreadsheet.value.addFileMenuItems([{ text: 'Import', iconCss: 'e-open e-icons' }], 'Open');
  // Adding new custom item `Export As` after the existing `Save As` item.
  // Set `insertAfter` optional argument as `false` for adding new item before the specified item.
  spreadsheet.value.addFileMenuItems(
    [{
      text: 'Export As', iconCss: 'e-save e-icons', items: [{ text: 'XLSX', iconCss: 'e-xlsx e-icons' },
      { text: 'XLS', iconCss: 'e-xls e-icons' }, { text: 'CSV', iconCss: 'e-csv e-icons' }]
    }],
    'Save As', false);
  // Adding the new `custom dropdown button` in the ribbon toolbar item under the `Data` tab for adding a custom dropdown button using the addToolbarItems method in the spreadsheet ribbon.
  spreadsheet.value.addToolbarItems('Data', [{ type: 'Separator' }, { id: 'custombtn', tooltipText: 'Custom Btn', template: appendDropdownBtn('custombtn') }], 7);
};
const fileMenuBeforeOpen = function () {
  // Because the file menu items are created dynamically, you need to perform the hide or show and enable/disable operations
  // under filemenu before open event.
  // Hiding the `Save As` and `Open` item.
  spreadsheet.value.hideFileMenuItems(['Save As', 'Open']);
  // Set disable state to `New` item. You can perform any file menu items customization by specifying the item id,
  // if it has more than one same item text. Set the last argument `isUniqueId` as true for using the item id.
  spreadsheet.value.enableFileMenuItems([`${spreadsheet.value.ej2Instances.element.id}_New`], false, true);
}

const fileMenuItemSelect = function (args) {
  // Custom file menu items select handler.
  switch (args.item.text) {
    case 'Import': select(`#${spreadsheet.value.element.id}_fileUpload`, spreadsheet.value.element).click();
      break;
    case 'XLSX': spreadsheet.value.save({ saveType: 'Xlsx' });
      break;
    case 'XLS': spreadsheet.value.save({ saveType: 'Xls' });
      break;
    case 'CSV': spreadsheet.value.save({ saveType: 'Csv' });
      break;
  }
}

const appendDropdownBtn = function (id) {
  let ddlItems = [
    {
      text: 'Download Excel',
    },
    {
      text: 'Download CSV',
    },
  ];
  let btnObj = new DropDownButton({
    items: ddlItems,
    content: 'Download',
    iconCss: 'e-icons e-download',
    select: function (args) {
      alert(args.item.text + ' clicked');
    },
  });
  btnObj.appendTo(createElement('button', { id: id }));
  return btnObj.element;
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
</style>
