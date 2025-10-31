


import {
  Spreadsheet,
  ProtectSettingsModel,
  SheetModel,
  getRangeAddress,
} from '@syncfusion/ej2-spreadsheet';

//Initialize Spreadsheet component

let spreadsheet: Spreadsheet = new Spreadsheet({
  openUrl:
    'https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/open',
  saveUrl:
    'https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/save',

  openComplete: (): void => {
    let sheets: SheetModel[] = spreadsheet.sheets;
    for (let index: number = 0; index < sheets.length; index++) {
      let name: string = spreadsheet.sheets[index].name;
      let protectSetting: ProtectSettingsModel = {
        selectCells: true,
        formatCells: false,
      };

      //To protect the sheet using sheet name
      spreadsheet.protectSheet(name, protectSetting);
      let address: string = getRangeAddress([
        0,
        0,
        sheets[index].usedRange.rowIndex,
        sheets[index].usedRange.colIndex,
      ]);
      //To lock the used range cells
      spreadsheet.lockCells(name + '!' + address, true);
    }
  },
});

spreadsheet.appendTo('#spreadsheet');



