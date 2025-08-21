


import { createElement, print } from '@syncfusion/ej2-base';
import { Spreadsheet, SheetModel, MenuSelectEventArgs, UsedRangeModel } from '@syncfusion/ej2-spreadsheet';
import { budgetData, salaryData } from './datasource.ts';
import { DropDownButton, ItemModel, MenuEventArgs } from "@syncfusion/ej2-splitbuttons";

//Initialize action items.
let items: ItemModel[] = [
  {
    text: "Print"
  },
  {
    text: "Print All"
  }
];

// Initialize the DropDownButton component.
let drpDownBtn: DropDownButton = new DropDownButton({
  items: items,
  cssClass: "e-round-corner",
  select: (args: MenuEventArgs) => {
    if (args.item.text === 'Print') {
      printElement.querySelector(".e-sheet-content").innerHTML = document.querySelector(
        ".e-sheet-content"
      ).outerHTML; //  To add the spreadsheet table
      let usedRange: UsedRangeModel = spreadsheet.getActiveSheet().usedRange;
      let tbody: Element = printElement.querySelector('tbody');
      for (let i: number = tbody.getElementsByClassName('e-row').length; i >= 0; i--) {
        if (tbody.getElementsByClassName('e-row')[i] && parseInt(tbody.getElementsByClassName('e-row')[i].getAttribute('aria-rowindex')) > usedRange.rowIndex + 1) {
          tbody.getElementsByClassName('e-row')[i].remove();
        }
      }
      (printElement.querySelector('.e-sheet-content').children[0].getElementsByClassName('e-virtualtrack')[0] as HTMLElement).style.height = 'auto';
      print(printElement);
      printElement.querySelector(".e-sheet-content").innerHTML = '';
    }
    if (args.item.text === 'Print All') {
      let sheets: SheetModel[] = spreadsheet.sheets;
      if (spreadsheet.activeSheetIndex === 0) {
        printElement.querySelector(".e-sheet-content").innerHTML = document.querySelector(
          ".e-sheet-content"
        ).outerHTML; //  To add the spreadsheet table

        let usedRange: UsedRangeModel = spreadsheet.getActiveSheet().usedRange;
        let tbody: Element = printElement.querySelector('tbody');
        for (let i: number = tbody.getElementsByClassName('e-row').length; i >= 0; i--) {
          if (tbody.getElementsByClassName('e-row')[i] && parseInt(tbody.getElementsByClassName('e-row')[i].getAttribute('aria-rowindex')) > usedRange.rowIndex + 1) {
            tbody.getElementsByClassName('e-row')[i].remove();
          }
        }

        if (sheets[spreadsheet.activeSheetIndex + 1]) {
          spreadsheet.goTo(sheets[spreadsheet.activeSheetIndex + 1].name + "!A1");
          isPrint = true;
        } else {
          print(printElement);
          printElement.querySelector(".e-sheet-content").innerHTML = '';
        }
      } else {
        if (sheets[0]) {
          spreadsheet.goTo(sheets[0].name + "!A1");
          isPrint = true;
        }
      }
    }
  }
});

// Render initialized DropDownButton.
drpDownBtn.appendTo("#element");

let printElement: HTMLElement = createElement("div", {
  className: "e-sheet-panel",
  innerHTML:
    '<div class="e-spreadsheet-print"></div><div class="e-sheet"><div class="e-main-panel style="height:100%" style="overflow: unset"><div class="e-sheet-content" ></div></div></div>'
}); // creating same hierarchy of element as DOM
let isPrint: boolean = false;
let columns: ColumnModel[] = [{ width: 100 }, { width: 100 },{ width: 100},
    { width: 100 }];
let spreadsheet: Spreadsheet = new Spreadsheet({
  sheets: [{ name: 'Budget', ranges: [{ dataSource: budgetData }], columns: columns },
                {name: 'Salary', ranges: [{ dataSource: salaryData }], columns: columns}],
  created: (): void => {
    spreadsheet.cellFormat({ fontWeight: 'bold', textAlign: 'center' }, 'A1:D1');
    spreadsheet.cellFormat({ fontWeight: 'bold'}, 'A11:D11');
    spreadsheet.cellFormat({ fontWeight: 'bold', textAlign: 'center' }, 'Salary!A1:D1');
    spreadsheet.cellFormat({ fontWeight: 'bold'}, 'Salary!A7:D7');
  },
  dataBound: () => {
    if (isPrint) {
      printElement.querySelector(".e-sheet-content").innerHTML += document
        .querySelector(".e-sheet-content").outerHTML;
      let usedRange: UsedRangeModel = spreadsheet.getActiveSheet().usedRange;
      let tbody: Element = printElement.querySelector('.e-sheet-content').children[spreadsheet.activeSheetIndex].querySelector('tbody');
      for (let i: number = tbody.getElementsByClassName('e-row').length; i >= 0; i--) {
        if (tbody.getElementsByClassName('e-row')[i] && parseInt(tbody.getElementsByClassName('e-row')[i].getAttribute('aria-rowindex')) > usedRange.rowIndex + 1) {
          tbody.getElementsByClassName('e-row')[i].remove();
        }
      }
      let sheets: SheetModel[] = spreadsheet.sheets;
      if (sheets.length - 1 === spreadsheet.activeSheetIndex) {
        let count: number = printElement.querySelector(".e-sheet-content").childElementCount;
        if (count > 1) {
          for (let i: number = 0; i < count; i++) {
            (printElement.querySelector('.e-sheet-content').children[i].getElementsByClassName('e-virtualtrack')[0] as HTMLElement).style.height = 'auto';
            printElement.querySelector('.e-sheet-content').children[i].setAttribute('style', 'page-break-after: always;')
          }
        }
        print(printElement);
        isPrint = false;
        printElement.querySelector(".e-sheet-content").innerHTML = '';
      } else {
        if (sheets[spreadsheet.activeSheetIndex + 1]) {
          spreadsheet.goTo(sheets[spreadsheet.activeSheetIndex + 1].name + "!A1");
        }
      }
    }
  }
});

//Render initialized Spreadsheet component
spreadsheet.appendTo('#spreadsheet');


