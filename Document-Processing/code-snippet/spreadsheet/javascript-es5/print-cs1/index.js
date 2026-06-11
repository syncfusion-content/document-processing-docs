//Initialize action items.
var items = [
  {
    text: "Print"
  },
  {
    text: "Print All"
  }
];

// Initialize the DropDownButton component.
var drpDownBtn = new ej.splitbuttons.DropDownButton({
  items: items,
  cssClass: "e-round-corner",
  select: function (args) {
    if (args.item.text === 'Print') {
      printElement.querySelector(".e-sheet-content").innerHTML = document.querySelector(
        ".e-sheet-content"
      ).outerHTML; //  To add the spreadsheet table
      var usedRange = spreadsheet.getActiveSheet().usedRange;
      var tbody = printElement.querySelector('tbody');
      for (var i = tbody.getElementsByClassName('e-row').length; i >= 0; i--) {
        if (tbody.getElementsByClassName('e-row')[i] && parseInt(tbody.getElementsByClassName('e-row')[i].getAttribute('aria-rowindex')) > usedRange.rowIndex + 1) {
          tbody.getElementsByClassName('e-row')[i].remove();
        }
      }
      (printElement.querySelector('.e-sheet-content').children[0].getElementsByClassName('e-virtualtrack')[0]).style.height = 'auto';
      print(printElement);
      printElement.querySelector(".e-sheet-content").innerHTML = '';
    }
    if (args.item.text === 'Print All') {
      var sheets = spreadsheet.sheets;
      if (spreadsheet.activeSheetIndex === 0) {
        printElement.querySelector(".e-sheet-content").innerHTML = document.querySelector(
          ".e-sheet-content"
        ).outerHTML; //  To add the spreadsheet table

        var usedRange = spreadsheet.getActiveSheet().usedRange;
        var tbody = printElement.querySelector('tbody');
        for (var i = tbody.getElementsByClassName('e-row').length; i >= 0; i--) {
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

var printElement = document.createElement('div');
printElement.classList.add('e-sheet-panel');
// creating same hierarchy of element as DOM
printElement.innerHTML = '<div class="e-spreadsheet-print"></div><div class="e-sheet"><div class="e-main-panel style="height:100%" style="overflow: unset"><div class="e-sheet-content" ></div></div></div>';
var isPrint = false;
var columns = [{ width: 100 }, { width: 100 },{ width: 100},
    { width: 100 }];
var spreadsheet = new ej.spreadsheet.Spreadsheet({
  sheets: [{ name: 'Budget', ranges: [{ dataSource: budgetData }], columns: columns },
                {name: 'Salary', ranges: [{ dataSource: salaryData }], columns: columns}],
  created: function () {
    spreadsheet.cellFormat({ fontWeight: 'bold', textAlign: 'center' }, 'A1:D1');
    spreadsheet.cellFormat({ fontWeight: 'bold'}, 'A11:D11');
    spreadsheet.cellFormat({ fontWeight: 'bold', textAlign: 'center' }, 'Salary!A1:D1');
    spreadsheet.cellFormat({ fontWeight: 'bold'}, 'Salary!A7:D7');
  },
  dataBound: function () {
    if (isPrint) {
      printElement.querySelector(".e-sheet-content").innerHTML += document
        .querySelector(".e-sheet-content").outerHTML;
      var usedRange = spreadsheet.getActiveSheet().usedRange;
      var tbody = printElement.querySelector('.e-sheet-content').children[spreadsheet.activeSheetIndex].querySelector('tbody');
      for (var i = tbody.getElementsByClassName('e-row').length; i >= 0; i--) {
        if (tbody.getElementsByClassName('e-row')[i] && parseInt(tbody.getElementsByClassName('e-row')[i].getAttribute('aria-rowindex')) > usedRange.rowIndex + 1) {
          tbody.getElementsByClassName('e-row')[i].remove();
        }
      }
      var sheets = spreadsheet.sheets;
      if (sheets.length - 1 === spreadsheet.activeSheetIndex) {
        var count = printElement.querySelector(".e-sheet-content").childElementCount;
        if (count > 1) {
          for (var i = 0; i < count; i++) {
            (printElement.querySelector('.e-sheet-content').children[i].getElementsByClassName('e-virtualtrack')[0]).style.height = 'auto';
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

