---
layout: post
title: Ej1 api migration in EJ2 TypeScript Spreadsheet control | Syncfusion
description: Learn here all about Ej1 api migration in Syncfusion EJ2 TypeScript Spreadsheet control of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Ej1 api migration 
documentation: ug
---

# Ej1 api migration in EJ2 TypeScript Spreadsheet control

This article describes the API migration process of the Spreadsheet component from Essential<sup style="font-size:70%">&reg;</sup> JS 1 to Essential<sup style="font-size:70%">&reg;</sup> JS 2.

## Editing

|Behavior | API in Essential<sup style="font-size:70%">&reg;</sup> JS 1 | API in Essential<sup style="font-size:70%">&reg;</sup> JS 2 |
|--------- | ----------- | ----------- |
| Enables or disables the editing feature | **Property:** *allowEditing* <br><br>`new ej.Spreadsheet($("#sheet"), { allowEditing: true });`| **Property:** *allowEditing* <br><br>`let spreadsheet: Spreadsheet = new Spreadsheet({ allowEditing: true });`<br>`spreadsheet.appendTo('#sheet');`|
| Edit a particular cell | **Method:** *XLEdit.editCell* <br><br>`let xlObj = $("#sheet").data("ejSpreadsheet");  xlObj.XLEdit.editCell(1, 1);`| **Method:** *startEdit* <br><br>`let ssObj: Spreadsheet = document.getElementById("sheet").ej2_instances[0];`<br>`ssObj.selectRange('A1'); ssObj.startEdit();`|
| Save the edited cell value | **Method:** *XLEdit.saveCell* <br><br>`let xlObj = $("#sheet").data("ejSpreadsheet");  xlObj.XLEdit.saveCell();` | **Method:** *endEdit* <br><br>`let ssObj: Spreadsheet = document.getElementById("sheet").ej2_instances[0];`<br>`ssObj.endEdit();`|
| Update a particular cell value | **Method:** *XLEdit.updateCell* <br><br>`let xlObj = $("#sheet").data("ejSpreadsheet");  xlObj.XLEdit.updateCell({rowIndex: 1, colIndex: 1}, "product");`| **Method:** *updateCell* <br><br>`let ssObj: Spreadsheet = document.getElementById("sheet").ej2_instances[0];`<br>`ssObj.updateCell({ value: 'product' }, 'A1');`|
| Triggers when the cell is edited | **Event:** *cellEdit* <br><br>`new ej.Spreadsheet($("#sheet"), { cellEdit: (args) => { } });`| **Event:** *cellEdit* <br><br>`new Spreadsheet({ cellEdit: (args) => { } });`|
| Triggers when the edited cell is saved | **Event:** *cellSave* <br><br>`new ej.Spreadsheet($("#sheet"), { cellSave: (args) => { } });`| **Event:** *cellSave* <br><br>`new Spreadsheet({ cellSave: (args) => { } });`|

## Selection

|Behavior | API in Essential<sup style="font-size:70%">&reg;</sup> JS 1 | API in Essential<sup style="font-size:70%">&reg;</sup> JS 2 |
|--------- | ----------- | ----------- |
| Enables or disables the selection feature | **Property:** *allowSelection* <br><br>`new ej.Spreadsheet($("#sheet"), { allowSelection: true });`| **Property:** *selectionSettings.mode* <br><br>`new Spreadsheet({ selectionSettings: { mode: 'Multiple' } });`|
| Defines active cell in the sheet | **Property:** *selectionSettings.activeCell* <br><br>`new ej.Spreadsheet($("#sheet"), { selectionSettings: { activeCell: "A1" } });`| **Property:** *activeCell* <br><br>`new Spreadsheet({ sheets: [{ activeCell: "A1 }] });`|
| Set selection unit | **Property:** *selectionSettings.selectionUnit* <br><br>`new ej.Spreadsheet($("#sheet"), { selectionSettings: { selectionUnit: ej.Spreadsheet.SelectionUnit.Single } });`| **Property:** *selectionSettings.mode* <br><br>`new Spreadsheet({ selectionSettings: { mode: 'Single' } });`|
| Select the specified range of cells | **Method:** *XLSelection.selectRange* <br><br>`let xlObj = $("#sheet").data("ejSpreadsheet");  xlObj.XLSelection.selectRange("A1:B2");`| **Method:** *selectRange* <br><br>`let ssObj: Spreadsheet = document.getElementById("sheet").ej2_instances[0];`<br>`ssObj.selectRange("A1:B2");`|
| Select a cell or range | **Method:** *performSelection* <br><br>`let xlObj = $("#sheet").data("ejSpreadsheet");  xlObj.performSelection("B1:C3");`| **Method:** *selectRange* <br><br>`let ssObj: Spreadsheet = document.getElementById("sheet").ej2_instances[0];`<br>`ssObj.selectRange("B1:C3");`|
| Triggers before the cell selection | **Event:** *beforeCellSelect* <br><br>`new ej.Spreadsheet($("#sheet"), { beforeCellSelect: (args) => { } });`| **Event:** *beforeSelect* <br><br>`new Spreadsheet({ beforeSelect: (args) => { } });`|
| Triggers when the cell is selected | **Event:** *cellSelected* <br><br>`new ej.Spreadsheet($("#sheet"), { cellSelected: (args) => { } });`| **Event:** *select* <br><br>`new Spreadsheet({ select: (args) => { } });`|

## Clipboard

|Behavior | API in Essential<sup style="font-size:70%">&reg;</sup> JS 1 | API in Essential<sup style="font-size:70%">&reg;</sup> JS 2 |
|--------- | ----------- | ----------- |
| Enables or disables the clipboard feature | **Property:** *allowClipboard* <br><br>`new ej.Spreadsheet($("#sheet"), { allowClipboard: true });`| **Property:** *enableClipboard* <br><br>`new Spreadsheet({ enableClipboard: true });`|
| Copy the selected cells | **Method:** *XLClipboard.copy* <br><br>`let xlObj = $("#sheet").data("ejSpreadsheet");  xlObj.XLClipboard.copy();`| **Method:** *copy* <br><br>`let ssObj: Spreadsheet = document.getElementById("sheet").ej2_instances[0];`<br>`ssObj.copy("A1");`|
| Cut the selected cells | **Method:** *XLClipboard.cut* <br><br>`let xlObj = $("#sheet").data("ejSpreadsheet");  xlObj.XLClipboard.cut();`| **Method:** *cut* <br><br>`let ssObj: Spreadsheet = document.getElementById("sheet").ej2_instances[0];`<br>`ssObj.cut("A1");`|
| Paste the cut or copied cells data | **Method:** *XLClipboard.paste* <br><br>`let xlObj = $("#sheet").data("ejSpreadsheet");  xlObj.XLClipboard.paste();`| **Method:** *paste* <br><br>`let ssObj: Spreadsheet = document.getElementById("sheet").ej2_instances[0];`<br>`ssObj.paste("B1");`|

## Formulas

|Behavior | API in Essential<sup style="font-size:70%">&reg;</sup> JS 1 | API in Essential<sup style="font-size:70%">&reg;</sup> JS 2 |
|--------- | ----------- | ----------- |
| Enables or disables the formula bar | **Property:** *allowFormulaBar* <br><br>`new ej.Spreadsheet($("#sheet"), { allowFormulaBar: true });`| **Property:** *showFormulaBar* <br><br>`new Spreadsheet({ showFormulaBar: true });`|
| Set name manager | **Property:** *nameManager* <br><br>`new ej.Spreadsheet($("#sheet"), { nameManager: [{ name: "inputRange", refersto: "=Sheet1!$A$1:$A$2" }] });`| **Property:** *definedNames* <br><br>`new Spreadsheet({ definedNames: [{ name: 'namedRange1', refersTo: 'Sheet1!A1:B5' }] });`|
| Add the custom formulas | **Property:** *customFormulas* <br><br>`new ej.Spreadsheet($("#sheet"), { customFormulas: [{ formulaName:"CUSTOMTOTAL", functionName:"customTotal" }] });`<br>`function customTotal(args) { }`| **Method:** *addCustomFunction* <br><br>`let ssObj: Spreadsheet = document.getElementById("sheet").ej2_instances[0];`<br>`ssObj.addCustomFunction("CustomFuntion", "SQRT");`<br>`window.CustomFuntion = num => Math.sqrt(num);`|
| Method to Add custom formulas | **Method:** *addCustomFormula* <br><br>`let xlObj = $("#sheet").data("ejSpreadsheet"); xlObj.addCustomFormula("CUSTOMTOTAL", "customTotal");`<br>`function customTotal(args){ }`| **Method:** *addCustomFunction* <br><br>`let ssObj: Spreadsheet = document.getElementById("sheet").ej2_instances[0];`<br>`ssObj.addCustomFunction("CustomFuntion", "SQRT");`<br>`window.CustomFuntion = num => Math.sqrt(num);`|
| Add a name for a range in the name manager | **Method:** *XLRibbon.addNamedRange* <br><br>`let xlObj = $("#sheet").data("ejSpreadsheet");  xlObj.XLRibbon.addNamedRange("PRICE_LIST", "=Sheet1!$A$2:$A$7");`| **Method:** *addDefinedName* <br><br>`let ssObj: Spreadsheet = document.getElementById("sheet").ej2_instances[0];`<br>`ssObj.addDefinedName({name: 'value', refersTo: '=Sheet1!B2' });`|
| Delete the defined name for a range in the name manager | **Method:** *XLRibbon.removeNamedRange* <br><br>`let xlObj = $("#sheet").data("ejSpreadsheet");  xlObj.XLRibbon.removeNamedRange("PRICE_LIST");`| **Method:** *removeDefinedName* <br><br>`let ssObj: Spreadsheet = document.getElementById("sheet").ej2_instances[0];`<br>`ssObj.removeDefinedName('value');`|

## Formatting

|Behavior | API in Essential<sup style="font-size:70%">&reg;</sup> JS 1 | API in Essential<sup style="font-size:70%">&reg;</sup> JS 2 |
|--------- | ----------- | ----------- |
| Enables or disables the cell format feature | **Property:** *allowCellFormatting* <br><br>`new ej.Spreadsheet($("#sheet"), { allowCellFormatting: true });`| **Property:** *allowCellFormatting* <br><br>`new Spreadsheet({ allowCellFormatting: true });`|
| Enables or disables the conditional format feature | **Property:** *allowConditionalFormats* <br><br>`new ej.Spreadsheet($("#sheet"), { allowConditionalFormats: true });`| **Property:** *allowConditionalFormat* <br><br>`new Spreadsheet({ allowConditionalFormat: true });`|
| Enables or disables the cell border feature | **Property:** *formatSettings.allowCellBorder* <br><br>`new ej.Spreadsheet($("#sheet"), { formatSettings: { allowCellBorder: true } });`| By default, it is enabled by enabling the `allowCellFormatting` property |
| Enables or disables the decimal places | **Property:** *formatSettings.allowDecimalPlaces* <br><br>`new ej.Spreadsheet($("#sheet"), { formatSettings: { allowDecimalPlaces: true } });`| By default, it is enabled by enabling the `allowNumberFormatting` property|
| Specifies the conditional formatting for the range of cells | **Property:** *sheets.cFormatRule* <br><br>`new ej.Spreadsheet($("#sheet"), { sheets: [{ cFormatRule: [{ action: ej.Spreadsheet.CFormatRule.LessThan, inputs: ["30"], color: ej.Spreadsheet.CFormatHighlightColor.RedFillwithDarkRedText, range: "A1:E1" }] }] });`| **Property:** *sheets.conditionalFormats* <br><br>`new Spreadsheet({ sheets: [{ conditionalFormats: [{ type: "GreaterThan", cFColor: "RedFT", value: 700, range: "B2:B9" }] }] });`|
| Clear the applied conditional formatting rules | **Method:** *XLCFormat.clearCF* <br><br>`let xlObj = $("#sheet").data("ejSpreadsheet");  xlObj.XLCFormat.clearCF([1, 0, 7, 0]);`| **Method:** *clearConditionalFormat* <br><br>`let ssObj: Spreadsheet = document.getElementById("sheet").ej2_instances[0];`<br>`ssObj.clearConditionalFormat("A1:B3");`|
| Set the conditional formatting rule | **Method:** *XLCFormat.setCFRule* <br><br>`let xlObj = $("#sheet").data("ejSpreadsheet");  xlObj.XLCFormat.setCFRule({ action: "lessthan", inputs: ["30"], color: "yellowft", range: "H3:H7" });`| **Method:** *conditionalFormat* <br><br>`let ssObj: Spreadsheet = document.getElementById("sheet").ej2_instances[0];`<br>`ssObj.conditionalFormat({type:"GreaterThan" cFColor:"RedFT" value:"700", range:"B2:B9"});`|
| Set format style for the range of cells | **Method:** *XLFormat.format* <br><br>`let xlObj = $("#sheet").data("ejSpreadsheet");  xlObj.XLFormat.format({style:{ "background-color": "#C0C0C0"}}, "A1:C10");`| **Method:** *cellFormat* <br><br>`let ssObj: Spreadsheet = document.getElementById("sheet").ej2_instances[0];`<br>`ssObj.cellFormat({ fontWeight: 'bold', fontSize: '12pt', backgroundColor: '#279377', color: '#ffffff' }, 'A2:E2');`|
| Triggers before formatting the cells | **Event:** *beforeCellFormat* <br><br>`new ej.Spreadsheet($("#sheet"), { beforeCellFormat: (args) => { } });`| **Event:** *beforeCellFormat* <br><br>`new Spreadsheet({ beforeCellFormat: (args) => { } });`|
| Specifies the border for the cell | **Property:** *sheets.border* <br><br>`new ej.Spreadsheet($("#sheet"), { sheets: [{ border: [{ type: ej.Spreadsheet.BorderType.AllBorder, color: "#456534", range: "C6:D9" }] }] });`| **Property:** *sheets.rows.cells.border* <br><br>`new Spreadsheet({ sheets: [{ rows: [{ cells: [{ border: '1px solid #456534' }] }] }] });`|
| Set border for the specified range of cells | **Method:** *setBorder* <br><br>`let xlObj = $("#sheet").data("ejSpreadsheet");  xlObj.setBorder({ style: "solid", type: "outside", color: "#000000"}, "B2:B6");`| **Method:** *setBorder* <br><br>`let ssObj: Spreadsheet = document.getElementById("sheet").ej2_instances[0];`<br>`ssObj.setBorder({ border: "1px solid #000000" }, "B2:B6", "Outer");`|

## Filtering

|Behavior | API in Essential<sup style="font-size:70%">&reg;</sup> JS 1 | API in Essential<sup style="font-size:70%">&reg;</sup> JS 2 |
|--------- | ----------- | ----------- |
| Enables or disables the filtering feature | **Property:** *allowFiltering* <br><br>`new ej.Spreadsheet($("#sheet"), { allowFiltering: true });`| **Property:** *allowFiltering* <br><br>`new Spreadsheet({ allowFiltering: true });`|
| Clear the filter in the filtered columns | **Method:** *XLFilter.clearFilter* <br><br>`let xlObj = $("#sheet").data("ejSpreadsheet");  xlObj.XLFilter.clearFilter();`| **Method:** *clearFilter* <br><br>`let ssObj: Spreadsheet = document.getElementById("sheet").ej2_instances[0];`<br>`ssObj.clearFilter();`|
| Apply filter for the specified range of cells | **Method:** *XLFilter.filter* <br><br>`let xlObj = $("#sheet").data("ejSpreadsheet");  xlObj.XLFilter.filter("A3:C8");`| **Method:** *applyFilter* <br><br>`let ssObj: Spreadsheet = document.getElementById("sheet").ej2_instances[0];`<br>`ssObj.applyFilter([{ field: 'E', operator: 'equal', value: '20' }], 'A1:H1');`|

## Sorting

|Behavior | API in Essential<sup style="font-size:70%">&reg;</sup> JS 1 | API in Essential<sup style="font-size:70%">&reg;</sup> JS 2 |
|--------- | ----------- | ----------- |
| Enables or disables the sorting feature | **Property:** *allowSorting* <br><br>`new ej.Spreadsheet($("#sheet"), { allowSorting: true });`| **Property:** *allowSorting* <br><br>`new Spreadsheet({ allowSorting: true });`|
| Sort a particular range of cells based on its values | **Method:** *XLSort.sortByRange* <br><br>`let xlObj = $("#sheet").data("ejSpreadsheet");  xlObj.XLSort.sortByRange("A1:D3", "B",  "ascending");`| **Method:** *sort* <br><br>`let ssObj: Spreadsheet = document.getElementById("sheet").ej2_instances[0];`<br>`ssObj.sort({ sortDescriptors: { order: 'Ascending' }, containsHeader: true}, 'A1:H11');`|

## Hyperlink

|Behavior | API in Essential<sup style="font-size:70%">&reg;</sup> JS 1 | API in Essential<sup style="font-size:70%">&reg;</sup> JS 2 |
|--------- | ----------- | ----------- |
| Enables or disables the hyperlink feature | **Property:** *allowHyperlink* <br><br>`new ej.Spreadsheet($("#sheet"), { allowHyperlink: true });`| **Property:** *allowHyperlink* <br><br>`new Spreadsheet({ allowHyperlink: true });`|
| Remove the hyperlink in the specified cells | **Method:** *removeHyperlink* <br><br>`let xlObj = $("#sheet").data("ejSpreadsheet");  xlObj.removeHyperlink("A2:A3");`| **Method:** *removeHyperlink* <br><br>`let ssObj: Spreadsheet = document.getElementById("sheet").ej2_instances[0];`<br>`ssObj.removeHyperlink("A2:A3");`|
| Set the hyperlink in the specified cells | **Method:** *setHyperlink* <br><br>`let xlObj = $("#sheet").data("ejSpreadsheet");  xlObj.setHyperlink("A2:A3",{"cellAddr":"A2:A8"}, 3);`| **Method:** *addHyperlink* <br><br>`let ssObj: Spreadsheet = document.getElementById("sheet").ej2_instances[0];`<br>`ssObj.addHyperlink({ address: 'B2' }, 'A1');`|

## Protection

|Behavior | API in Essential<sup style="font-size:70%">&reg;</sup> JS 1 | API in Essential<sup style="font-size:70%">&reg;</sup> JS 2 |
|--------- | ----------- | ----------- |
| Enables or disables the lock cell feature | **Property:** *allowLockCell* <br><br>`new ej.Spreadsheet($("#sheet"), { allowLockCell: true });`| By default, it is enabled.|
| Protect or Unprotect the active sheet | **Method:** *protectSheet* <br><br>`let xlObj = $("#sheet").data("ejSpreadsheet");  xlObj.protectSheet();`| **Method:** *protectSheet* <br><br>`let ssObj: Spreadsheet = document.getElementById("sheet").ej2_instances[0];`<br>`ssObj.protectSheet(0, {});`|
| Lock or Unlock the range of cells | **Method:** *lockCells* <br><br>`let xlObj = $("#sheet").data("ejSpreadsheet");  xlObj.lockCells("A3:B5", true);`| **Method:** *lockCells* <br><br>`let ssObj: Spreadsheet = document.getElementById("sheet").ej2_instances[0];`<br>`ssObj.lockCells("A3:B5", true);`|

## Find and Replace

|Behavior | API in Essential<sup style="font-size:70%">&reg;</sup> JS 1 | API in Essential<sup style="font-size:70%">&reg;</sup> JS 2 |
|--------- | ----------- | ----------- |
| Enables or disables the find & replace feature | **Property:** *allowSearching* <br><br>`new ej.Spreadsheet($("#sheet"), { allowSearching: true });`| **Property:** *allowFindAndReplace* <br><br>`new Spreadsheet({ allowFindAndReplace: true });`|
| Find the next occurrence of the given value | **Method:** *XLSearch.findNext* <br><br>`let xlObj = $("#sheet").data("ejSpreadsheet");  xlObj.XLSearch.findNext("g", {isCSen: false, isEMatch: false, type: "value", mode: "sheet", searchBy: "rows"}, 1);`| **Method:** *find* <br><br>`let ssObj: Spreadsheet = document.getElementById("sheet").ej2_instances[0];`<br>`ssObj.find({ value: "Jenna Schoolfield", sheetIndex: 1, findOpt: "next", mode: "Sheet", isCSen: false, isEMatch: false, searchBy: "By Row" });`|
| Find the previous occurrence of the  given value | **Method:** *XLSearch.findPrevious* <br><br>`let xlObj = $("#sheet").data("ejSpreadsheet");  xlObj.XLSearch.findPrevious("g", {isCSen: true, isEMatch: false, type: "value", mode: "sheet", searchBy: "columns"}, 1);`| **Method:** *find* <br><br>`let ssObj: Spreadsheet = document.getElementById("sheet").ej2_instances[0];`<br>`ssObj.find({ value: "Jenna Schoolfield", sheetIndex: 1, findOpt: "previous", mode: "Sheet", isCSen: false, isEMatch: false, searchBy: "By Row" });`|
| Find and replace all the data by sheet | **Method:** *XLSearch.replaceAllBySheet* <br><br>`let xlObj = $("#sheet").data("ejSpreadsheet");  xlObj.XLSearch.replaceAllBySheet("Sheet", "Spreadsheet", true, false);`| **Method:** *replace* <br><br>`let ssObj: Spreadsheet = document.getElementById("sheet").ej2_instances[0];`<br>`ssObj.replace({replaceValue: 'new value', mode: 'Sheet', replaceBy: 'replaceAll', value: '10'});`|
| Find and replace all the data by workbook | **Method:** *XLSearch.replaceAllByBook* <br><br>`let xlObj = $("#sheet").data("ejSpreadsheet");  xlObj.XLSearch.replaceAllByBook("Sheet", "Spreadsheet", true, false);`| **Method:** *replace* <br><br>`let ssObj: Spreadsheet = document.getElementById("sheet").ej2_instances[0];`<br>`ssObj.replace({replaceValue: 'new value', mode: 'Workbook', replaceBy: 'replaceAll', value: '10'});`|

## Ribbon

|Behavior | API in Essential<sup style="font-size:70%">&reg;</sup> JS 1 | API in Essential<sup style="font-size:70%">&reg;</sup> JS 2 |
|--------- | ----------- | ----------- |
| Show or hide the ribbon | **Property:** *showRibbon* <br><br>`new ej.Spreadsheet($("#sheet"), { showRibbon: true });`| **Property:** *showRibbon* <br><br>`new Spreadsheet({ showRibbon: true });`|
| Add the menu items in the file menu | **Method:** *XLRibbon.addMenuItem* <br><br>`let xlObj = $("#sheet").data("ejSpreadsheet");  xlObj.XLRibbon.addMenuItem([{ id: "newitem", text: "New Item", parentId: "FILE" }], 2);`| **Method:** *addFileMenuItems* <br><br>`let ssObj: Spreadsheet = document.getElementById("sheet").ej2_instances[0];`<br>`ssObj.addFileMenuItems([{ text: 'New Item' }], "Save As");`|
| Add the tab in the ribbon | **Method:** *XLRibbon.addTab* <br><br>`let xlObj = $("#sheet").data("ejSpreadsheet"); let tabGroup = [{ alignType: ej.Ribbon.AlignType.Rows, content: [{ groups: [{ id: "new", text: "New", toolTip: "New", buttonSettings: { contentType: ej.ContentType.ImageOnly, imagePosition: ej.ImagePosition.ImageTop, prefixIcon: "e-icon e-ssr-cut",click: "executeAction" }}], defaults: { type: ej.Ribbon.Type.Button, width: 60, height: 70} }] }];xlObj.XLRibbon.addTab("Tab2", tabGroup, 2);` | **Method:** *addRibbonTabs* <br><br>`let ssObj: Spreadsheet = document.getElementById("sheet").ej2_instances[0];`<br>`ssObj.addRibbonTabs([{ header: { text: 'Custom' }, content: [{ text: 'Custom', tooltipText: 'Custom Btn' }] }], 'Data');`|
| Disable ribbon items | **Method:** *XLRibbon.disableRibbonItems* <br><br>`let xlObj = $("#sheet").data("ejSpreadsheet");  xlObj.XLRibbon.disableRibbonItems(["Spreadsheet_Ribbon_Insert_Illustrations_Pictures"]);`| **Method:** *enableToolbarItems* <br><br>`let ssObj: Spreadsheet = document.getElementById("sheet").ej2_instances[0];`<br>`ssObj.enableToolbarItems('Home', ['spreadsheet_line-through'], false);`|
| Enable ribbon items | **Method:** *XLRibbon.enableRibbonItems* <br><br>`let xlObj = $("#sheet").data("ejSpreadsheet");  xlObj.XLRibbon.enableRibbonItems(["Spreadsheet_Ribbon_Insert_Illustrations_Pictures"]);`| **Method:** *enableToolbarItems* <br><br>`let ssObj: Spreadsheet = document.getElementById("sheet").ej2_instances[0];`<br>`ssObj.enableToolbarItems('Home', ['spreadsheet_line-through']);`|
| Hide the file menu in the ribbon tab | **Method:** *XLRibbon.hideMenu* <br><br>`let xlObj = $("#sheet").data("ejSpreadsheet");  xlObj.XLRibbon.hideMenu();`| **Method:** *hideFileMenuItems* <br><br>`let ssObj: Spreadsheet = document.getElementById("sheet").ej2_instances[0];`<br>`ssObj.hideFileMenuItems(['File']);`|
| Triggers when the file menu item is selected | **Event:** *menuClick* <br><br>`new ej.Spreadsheet($("#sheet"), { menuClick: (args) => { } });`| **Event:** *fileMenuItemSelect* <br><br>`new Spreadsheet({ fileMenuItemSelect: (args) => { } });`|

## Undo and Redo

|Behavior | API in Essential<sup style="font-size:70%">&reg;</sup> JS 1 | API in Essential<sup style="font-size:70%">&reg;</sup> JS 2 |
|--------- | ----------- | ----------- |
| Enables or disables the undo and redo feature | **Property:** *allowUndoRedo* <br><br>`new ej.Spreadsheet($("#sheet"), { allowUndoRedo: true });`| **Property:** *allowUndoRedo* <br><br>`new Spreadsheet({ allowUndoRedo: true });`|
| Update the details for custom undo and redo operations. | **Method:** *updateUndoRedoCollection* <br><br>`let xlObj = $("#sheet").data("ejSpreadsheet");  xlObj.updateUndoRedoCollection({ action: "custom", cell: xlObj.getActiveCell(), sheetIndex: 1 });`| **Method:** *updateUndoRedoCollection* <br><br>`let ssObj: Spreadsheet = document.getElementById("sheet").ej2_instances[0];`<br>`ssObj.updateUndoRedoCollection({ eventArgs: { class: 'customClass', rowIdx: 0, colIdx: 0, action: 'customCSS' } });`|

## Worksheet

|Behavior | API in Essential<sup style="font-size:70%">&reg;</sup> JS 1 | API in Essential<sup style="font-size:70%">&reg;</sup> JS 2 |
|--------- | ----------- | ----------- |
| Set active sheet index in the workbook | **Property:** *activeSheetIndex* <br><br>`new ej.Spreadsheet($("#sheet"), { activeSheetIndex: true });`| **Property:** *activeSheetIndex* <br><br>`new Spreadsheet({ activeSheetIndex: true });`|
| Specifies the rows for a sheet | **Property:** *sheets.rows* <br><br>`new ej.Spreadsheet($("#sheet"), { sheets: [{ rows:[{ height:30, index: 1, cells:[{ value: "Item Name" }] }] }] });`| **Property:** *sheets.rows* <br><br>`new Spreadsheet({ sheets: [{ rows: [{ height:30, index:1, cells: [{ value: "Item Name"  }] }] }] });`|
| Specifies the cells of a row | **Property:** *sheets.rows.cells* <br><br>`new ej.Spreadsheet($("#sheet"), { sheets: [{ rows:[{ cells:[{ index: 1, value: "Item Name", style: { "font-weight": "bold", "color": "#FFFFFF", "background-color": "#428bca" }, format: { type: "general" }, hyperlink: { webAddr: "www.google.com" }, isLocked: true }] }] }] });`| **Property:** *sheets.rows.cells* <br><br>`new Spreadsheet({ sheets: [{ rows: [{ cells: [{ index:1, value: "Item Name", style:{ fontFamily: 'Axettac Demo', verticalAlign: 'middle', textAlign: 'center', fontSize: '18pt', fontWeight: 'bold', color: '#279377', backgroundColor: '#428bca', border: '1px solid #e0e0e0' }, format : "General", hyperlink: 'https://www.google.com/', isLocked: true  }] }] }] });`|
| Show or hide the grid lines | **Property:** *sheets.showGridlines* <br><br>`new ej.Spreadsheet($("#sheet"), { sheets: [{ showGridlines: true }] });`| **Property:** *sheets.showGridLines* <br><br>`new Spreadsheet({ sheets: [{ showGridLines: true }] });`|
| Show or hide the headings | **Property:** *sheets.showHeadings* <br><br>`new ej.Spreadsheet($("#sheet"), { sheets: [{ showHeadings: true }] });`| **Property:** *sheets.showHeaders* <br><br>`new Spreadsheet({ sheets: [{ showHeaders: true }] });`|
| Specifies the name for the sheet | **Property:** *sheets.sheetName* <br><br>`new ej.Spreadsheet($("#sheet"), { sheets: [{ sheetName: "Sheet Name" }] });`| **Property:** *sheets.name* <br><br>`new Spreadsheet({ sheets: [{ name: "Sheet Name }] });`|
| Show or hide the pager | **Property:** *showPager* <br><br>`new ej.Spreadsheet($("#sheet"), { showPager: true });`| **Property:** *showSheetTabs* <br><br>`new Spreadsheet({ showSheetTabs: true });`|
| Defines the number of rows to be rendered in the sheet | **Property:** *sheets.rowCount* <br><br>`new ej.Spreadsheet($("#sheet"), { sheets: [{ rowCount: 21 }] });`| **Property:** *sheets.rowCount* <br><br>`new Spreadsheet({ sheets: [{ rowCount: 21 }] });`|
| Defines the number of columns to be rendered in the sheet | **Property:** *sheets.colCount* <br><br>`new ej.Spreadsheet($("#sheet"), { sheets: [{ colCount: 25 }] });`| **Property:** *colCount* <br><br>`new Spreadsheet({ sheets: [{ colCount: 21 }] });`|

## Open and Save

|Behavior | API in Essential<sup style="font-size:70%">&reg;</sup> JS 1 | API in Essential<sup style="font-size:70%">&reg;</sup> JS 2 |
|--------- | ----------- | ----------- |
| Enables or disables the import feature | **Property:** *allowImport* <br><br>`new ej.Spreadsheet($("#sheet"), { allowImport: true });`| **Property:** *allowOpen* <br><br>`new Spreadsheet({ allowOpen: true });`|
| Enables or disables the exporting feature | **Property:** *exportSettings.allowExporting* <br><br>`new ej.Spreadsheet($("#sheet"), { exportSettings: { allowExporting: true } });`| **Property:** *allowSave* <br><br>`new Spreadsheet({ allowSave: true });`|
| Defines the excelUrl to export to the excel format | **Property:** *exportSettings.excelUrl* <br><br>`new ej.Spreadsheet($("#sheet"), { exportSettings: { excelUrl: "http://js.syncfusion.com/demos/ejservices/api/Spreadsheet/ExcelExport" } });`| **Property:** *saveUrl* <br><br>`new Spreadsheet({ saveUrl: 'https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/save' });`|
| Defines the  csvUrl to export to the csv format | **Property:** *exportSettings.csvUrl* <br><br>`new ej.Spreadsheet($("#sheet"), { exportSettings: { csvUrl: "http://js.syncfusion.com/demos/ejservices/api/Spreadsheet/CsvExport" } });`| **Property:** *saveUrl* <br><br>You can use the same service url and specify saveType as Csv in the beforeSave event`new Spreadsheet({ saveUrl: 'https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/save', beforeSave: (args) => { args.saveType = 'Csv' } });`|
| Import mapper to perform the import feature | **Property:** *importSettings.importMapper* <br><br>`new ej.Spreadsheet($("#sheet"), { importSettings: { importMapper: "http://js.syncfusion.com/demos/ejservices/api/Spreadsheet/Import"  } });`| **Property:** *openUrl* <br><br>`new Spreadsheet({ openUrl: 'https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/open' });`|
| Import excel file | **Method:** *import* <br><br>`let xlObj = $("#sheet").data("ejSpreadsheet"); xlObj.import({ file: file });`| **Method:** *open* <br><br>`let ssObj: Spreadsheet = document.getElementById("sheet").ej2_instances[0];`<br>`ssObj.open({ file: file });`|
| Load JSON data of the Spreadsheet | **Method:** *loadFromJSON* <br><br>`let xlObj = $("#sheet").data("ejSpreadsheet"); let response = xlObj.saveAsJSON(); xlObj.loadFromJSON(response);`| **Method:** *openFromJson* <br><br>`let ssObj: Spreadsheet = document.getElementById("sheet").ej2_instances[0];`<br>`ssObj.saveAsJson().then(response => (ssObj.openFromJson({ file: response.jsonObject })));`|
| Triggers when a file is imported | **Event:** *onImport* <br><br>`new ej.Spreadsheet($("#sheet"), { onImport: (args) => { } });`| **Event:** *openComplete* <br><br>`new Spreadsheet({ openComplete: (args) => { } });`|
| Triggers when the opened Excel file fails to load | **Event:** *openFailure* <br><br>`new ej.Spreadsheet($("#sheet"), { openFailure: (args) => { } });`| **Event:** *openFailure* <br><br>`new Spreadsheet({ openFailure: (args) => { } });`|
| Save the sheet data as Excel or CSV document | **Method:** *XLExport.export* <br><br>`let xlObj = $("#sheet").data("ejSpreadsheet");  xlObj.XLExport.export("Excel");`| **Method:** *save* <br><br>`let ssObj: Spreadsheet = document.getElementById("sheet").ej2_instances[0];`<br>`ssObj.save({ saveType: 'Xlsx' });`|
| Save the sheet data as Excel or CSV document | **Method:** *XLExport.export* <br><br>`let xlObj = $("#sheet").data("ejSpreadsheet");  xlObj.XLExport.export("Excel");`| **Method:** *save* <br><br>`let ssObj: Spreadsheet = document.getElementById("sheet").ej2_instances[0];`<br>`ssObj.save({ saveType: 'Xlsx' });`|
| Save JSON data of the Spreadsheet | **Method:** *saveAsJSON* <br><br>`let xlObj = $("#sheet").data("ejSpreadsheet"); let response = xlObj.saveAsJSON(); xlObj.loadFromJSON(response);`| **Method:** *saveAsJson* <br><br>`let ssObj: Spreadsheet = document.getElementById("sheet").ej2_instances[0];`<br>`ssObj.saveAsJson().then(response => (ssObj.openFromJson({ file: response.jsonObject })));`|

## Data Binding

|Behavior | API in Essential<sup style="font-size:70%">&reg;</sup> JS 1 | API in Essential<sup style="font-size:70%">&reg;</sup> JS 2 |
|--------- | ----------- | ----------- |
| Specifies the single range or multiple range settings for a sheet | **Property:** *sheets.rangeSettings* <br><br>`new ej.Spreadsheet($("#sheet"), { sheets: [{ rangeSettings: [{ dataSource: defaultData, showHeader: true, startCell: "A1", query: ej.Query().take(50) }] }] });`| **Property:** *sheets.ranges* <br><br>`new Spreadsheet({ sheets: [{ ranges: [{ dataSource:defaultData, startCell: "A1", showFieldAsHeader: true, query:query }] }] });`|

## Context Menu

|Behavior | API in Essential<sup style="font-size:70%">&reg;</sup> JS 1 | API in Essential<sup style="font-size:70%">&reg;</sup> JS 2 |
|--------- | ----------- | ----------- |
| Enables or disables the context menu | **Property:** *enableContextMenu* <br><br>`new ej.Spreadsheet($("#sheet"), { enableContextMenu: true });`| **Property:** *enableContextMenu* <br><br>`new Spreadsheet({ enableContextMenu: true });`|
| Dynamically add items in the context menu | **Method:** *XLCMenu.addItem* <br><br>`let xlObj = $("#sheet").data("ejSpreadsheet");  xlObj.XLCMenu.addItem(ej.Spreadsheet.ContextMenu.Cell, [{"text":"Added item 1!!!", "url":"#", "id": "Added item1", "spriteCssClass": "e-icon e-ss-cut" }], 'insertbefore');`| **Method:** *addContextMenuItems* <br><br>`let ssObj: Spreadsheet = new Spreadsheet({ contextMenuBeforeOpen: (args) => { ssObj.addContextMenuItems([{ text: 'Custom Item' }], 'Paste Special', false); } });`|
| Disable the items in the context menu | **Method:** *XLCMenu.disableItem* <br><br>`let xlObj = $("#sheet").data("ejSpreadsheet");  xlObj.XLCMenu.disableItem(ej.Spreadsheet.ContextMenu.Cell, [1,2,3]);`| **Method:** *enableContextMenuItems* <br><br>`let ssObj: Spreadsheet = new Spreadsheet({contextMenuBeforeOpen: (args) => { ssObj.enableContextMenuItems(['Copy'], false) } });`|
| Enable the items in the context menu | **Method:** *XLCMenu.enableItem* <br><br>`let xlObj = $("#sheet").data("ejSpreadsheet");  xlObj.XLCMenu.enableItem(ej.Spreadsheet.ContextMenu.Cell, [1,2,3]);`| **Method:** *enableContextMenuItems* <br><br>`let ssObj: Spreadsheet = new Spreadsheet({contextMenuBeforeOpen: (args) => { ssObj.enableContextMenuItems(['Copy'], true) } });`|
| Remove the items in the context menu | **Method:** *XLCMenu.removeItem* <br><br>`let xlObj = $("#sheet").data("ejSpreadsheet");  xlObj.XLCMenu.removeItem(ej.Spreadsheet.ContextMenu.Cell, [1,2,3]);`| **Method:** *removeContextMenuItems* <br><br>`let ssObj: Spreadsheet = new Spreadsheet({contextMenuBeforeOpen: (args) => { ssObj.removeContextMenuItems(['Copy']); } });`|
| Triggers before the context menu is opened | **Event:** *beforeOpen* <br><br>`new ej.Spreadsheet($("#sheet"), { beforeOpen: (args) => { } });`| **Event:** *contextMenuBeforeOpen* <br><br>`new Spreadsheet({ contextMenuBeforeOpen: (args) => { } });`|
| Triggers when the context menu item is selected | **Event:** *contextMenuClick* <br><br>`new ej.Spreadsheet($("#sheet"), { contextMenuClick: (args) => { } });`| **Event:** *contextMenuItemSelect* <br><br>`new Spreadsheet({ contextMenuItemSelect: (args) => { } });`|

## Cell Template

|Behavior | API in Essential<sup style="font-size:70%">&reg;</sup> JS 1 | API in Essential<sup style="font-size:70%">&reg;</sup> JS 2 |
|--------- | ----------- | ----------- |
| Enables or disables the cell type feature | **Property:** *allowCellType* <br><br>`new ej.Spreadsheet($("#sheet"), { allowCellType: true });`| By default, it is enabled. |
| Specifies the cell types for a cell or range | **Property:** *sheets.cellTypes* <br><br>`new ej.Spreadsheet($("#sheet"), { sheets: [{  cellTypes: [{ range: 'F5', settings: { type: ej.Spreadsheet.CustomCellType.Button, background-color': 'yellow', color: 'black', text: 'BUTTON' } }] }] });`| **Property:** *sheets.ranges.template* <br><br>`new Spreadsheet({ sheets: [{ ranges: [{ template : "<button class='e-button-template'>BUTTON</button>", address : "F5" }] }] });`|

## Merge

|Behavior | API in Essential<sup style="font-size:70%">&reg;</sup> JS 1 | API in Essential<sup style="font-size:70%">&reg;</sup> JS 2 |
|--------- | ----------- | ----------- |
| Enables or disables the  merge feature | **Property:** *allowMerging* <br><br>`new ej.Spreadsheet($("#sheet"), { allowMerging: true });`| **Property:** *allowMerge* <br><br>`new Spreadsheet({ allowMerge: true });`|
| Merge cells across | **Method:** *mergeAcrossCells* <br><br>`let xlObj = $("#sheet").data("ejSpreadsheet");  xlObj.mergeAcrossCells("A3:B5");`| **Method:** *merge* <br><br>`let ssObj: Spreadsheet = document.getElementById("sheet").ej2_instances[0];`<br>`ssObj.merge("A3:B5", "Horizontally");`|
| Merge the specified ranges | **Property:** *sheets.mergeCells* <br><br>`new ej.Spreadsheet($("#sheet"), { sheets: [{ mergeCells:["A1:A2"] }] });`| **Property:** *sheets.rows.cells.rowSpan & sheets.rows.cells.colSpan* <br><br>`new Spreadsheet({ sheets: [{ rows: [{ cells: [{ rowSpan:2, colSpan:2 }] }] }] });`|
| Method to merge the specified ranges | **Method:** *mergeCells* <br><br>`let xlObj = $("#sheet").data("ejSpreadsheet");  xlObj.mergeCells("A3:B5");`| **Method:** *merge* <br><br>`let ssObj: Spreadsheet = document.getElementById("sheet").ej2_instances[0];`<br>`ssObj.merge("A3:B5", "All");`|

## Insert and Delete

|Behavior | API in Essential<sup style="font-size:70%">&reg;</sup> JS 1 | API in Essential<sup style="font-size:70%">&reg;</sup> JS 2 |
|--------- | ----------- | ----------- |
| Enables or disables the delete feature | **Property:** *allowDelete* <br><br>`new ej.Spreadsheet($("#sheet"), { allowDelete: true });`| **Property:** *allowDelete* <br><br>`new Spreadsheet({ allowDelete: true });`|
| Enables or disables the insert feature | **Property:** *allowInsert* <br><br>`new ej.Spreadsheet($("#sheet"), { allowInsert: true });`| **Property:** *allowInsert* <br><br>`new Spreadsheet({ allowInsert: true });`|
| Add a new sheet | **Method:** *addNewSheet* <br><br>`let xlObj = $("#sheet").data("ejSpreadsheet");  xlObj.addNewSheet();`| **Method:** *insertSheet* <br><br>`let ssObj: Spreadsheet = document.getElementById("sheet").ej2_instances[0];`<br>`ssObj.insertSheet();`|
| Insert a column | **Method:** *insertEntireColumn* <br><br>`let xlObj = $("#sheet").data("ejSpreadsheet");  xlObj.insertEntireColumn(1, 2);`| **Method:** *insertColumn* <br><br>`let ssObj: Spreadsheet = document.getElementById("sheet").ej2_instances[0];`<br>`ssObj.insertColumn(1, 2);`|
| Insert a row | **Method:** *insertEntireRow* <br><br>`let xlObj = $("#sheet").data("ejSpreadsheet");  xlObj.insertEntireRow(1, 2);`| **Method:** *insertRow* <br><br>`let ssObj: Spreadsheet = document.getElementById("sheet").ej2_instances[0];`<br>`ssObj.insertRow(1, 2);`|
| Insert a sheet | **Method:** *insertSheet* <br><br>`let xlObj = $("#sheet").data("ejSpreadsheet");  xlObj.insertSheet();`| **Method:** *insertSheet* <br><br>`let ssObj: Spreadsheet = document.getElementById("sheet").ej2_instances[0];`<br>`ssObj.insertSheet();`|
| Delete the entire column | **Method:** *deleteEntireColumn* <br><br>`let xlObj = $("#sheet").data("ejSpreadsheet");  xlObj.deleteEntireColumn(2, 3);`| **Method:** *delete* <br><br>`let ssObj: Spreadsheet = document.getElementById("sheet").ej2_instances[0];`<br>`ssObj.delete(2, 3, 'Column');`|
| Delete the entire row | **Method:** *deleteEntireRow* <br><br>`let xlObj = $("#sheet").data("ejSpreadsheet");  xlObj.deleteEntireRow(2, 3);`| **Method:** *delete* <br><br>`let ssObj: Spreadsheet = document.getElementById("sheet").ej2_instances[0];`<br>`ssObj.delete(2, 3, 'Row');`|
| Delete a sheet | **Method:** *deleteSheet* <br><br>`let xlObj = $("#sheet").data("ejSpreadsheet");  xlObj.deleteSheet(2);`| **Method:** *delete* <br><br>`let ssObj: Spreadsheet = document.getElementById("sheet").ej2_instances[0];`<br>`ssObj.delete(2, null, 'Sheet');`|

## Clear

|Behavior | API in Essential<sup style="font-size:70%">&reg;</sup> JS 1 | API in Essential<sup style="font-size:70%">&reg;</sup> JS 2 |
|--------- | ----------- | ----------- |
| Enables or disables the clear feature | **Property:** *allowClear* <br><br>`new ej.Spreadsheet($("#sheet"), { allowClear: true });`| By default, it is enabled. |
| Clear all the data and format in the specified range of cells | **Method:** *clearAll* <br><br>`let xlObj = $("#sheet").data("ejSpreadsheet");  xlObj.clearAll("A2:A6");`| **Method:** *clear* <br><br>`let ssObj: Spreadsheet = document.getElementById("sheet").ej2_instances[0];`<br>`ssObj.clear({ type: "Clear All", range: "A2:A6" });`|
| Clear all the format in the specified range of cells | **Method:** *clearAllFormat* <br><br>`let xlObj = $("#sheet").data("ejSpreadsheet");  xlObj.clearAllFormat("A2:A6");`| **Method:** *clear* <br><br>`let ssObj: Spreadsheet = document.getElementById("sheet").ej2_instances[0];`<br>`ssObj.clear({ type: "Clear Formats", range: "A2:A6" });`|
| Clear the contents in the specified range of cells | **Method:** *clearContents* <br><br>`let xlObj = $("#sheet").data("ejSpreadsheet");  xlObj.clearContents("A2:A6");`| **Method:** *clear* <br><br>`let ssObj: Spreadsheet = document.getElementById("sheet").ej2_instances[0];`<br>`ssObj.clear({ type: "Clear Contents", range: "A2:A6" });`|

## Data Validation

|Behavior | API in Essential<sup style="font-size:70%">&reg;</sup> JS 1 | API in Essential<sup style="font-size:70%">&reg;</sup> JS 2 |
|--------- | ----------- | ----------- |
| Enables or disables the data validation feature | **Property:** *allowDataValidation* <br><br>`new ej.Spreadsheet($("#sheet"), { allowDataValidation: true });`| **Property:** *allowDataValidation* <br><br>`new Spreadsheet({ allowDataValidation: true });`|
| Apply data validation rules in a selected range of cells based on the defined condition | **Method:** *XLValidate.applyDVRules* <br><br>`let xlObj = $("#sheet").data("ejSpreadsheet");  xlObj.XLValidate.applyDVRules("A1:D3", ["Between", "15", "20"], "number" ,true, true);`| **Method:** *addDataValidation* <br><br>`let ssObj: Spreadsheet = document.getElementById("sheet").ej2_instances[0];`<br>`ssObj.addDataValidation({ type: 'TextLength', operator: 'LessThanOrEqualTo', value1: '4' }, 'A2:A5');`|
| Clear the applied validation rules in a specified range of cells | **Method:** *XLValidate.clearDV* <br><br>`let xlObj = $("#sheet").data("ejSpreadsheet");  xlObj.XLValidate.clearDV("A2:A7");`| **Method:** *removeDataValidation* <br><br>`let ssObj: Spreadsheet = document.getElementById("sheet").ej2_instances[0];`<br>`ssObj.removeDataValidation("A2:A5");`|
| Clear invalid data highlights in the given range | **Method:** *XLValidate.clearHighlightedValData* <br><br>`let xlObj = $("#sheet").data("ejSpreadsheet");  xlObj.XLValidate.clearHighlightedValData("A2:A7");`| **Method:** *removeInvalidHighlight* <br><br>`let ssObj: Spreadsheet = document.getElementById("sheet").ej2_instances[0];`<br>`ssObj.removeInvalidHighlight("A1:H5");`|
| Highlight invalid data in a specified range of cells | **Method:** *XLValidate.highlightInvalidData* <br><br>`let xlObj = $("#sheet").data("ejSpreadsheet");  xlObj.XLValidate.highlightInvalidData("A2:A7");`| **Method:** *addInvalidHighlight* <br><br>`let ssObj: Spreadsheet = document.getElementById("sheet").ej2_instances[0];`<br>`ssObj.addInvalidHighlight('A1:H5');`|

## Wrap

|Behavior | API in Essential<sup style="font-size:70%">&reg;</sup> JS 1 | API in Essential<sup style="font-size:70%">&reg;</sup> JS 2 |
|--------- | ----------- | ----------- |
| Enables or disables the wrap text feature | **Property:** *allowWrap* <br><br>`new ej.Spreadsheet($("#sheet"), { allowWrap: true });`| **Property:** *allowWrap* <br><br>`new Spreadsheet({ allowWrap: true });`|
| Unwrap the specified range of cells | **Method:** *unWrapText* <br><br>`let xlObj = $("#sheet").data("ejSpreadsheet");  xlObj.unWrapText("A1:B3");`| **Method:** *wrap* <br><br>`let ssObj: Spreadsheet = document.getElementById("sheet").ej2_instances[0];`<br>`ssObj.wrap("A1:B3", false);`|
| Wrap the specified range of cells | **Method:** *wrapText* <br><br>`let xlObj = $("#sheet").data("ejSpreadsheet");  xlObj.wrapText("A1:B3");`| **Method:** *wrap* <br><br>`let ssObj: Spreadsheet = document.getElementById("sheet").ej2_instances[0];`<br>`ssObj.wrap("A1:B3");`|

## Scrolling

|Behavior | API in Essential<sup style="font-size:70%">&reg;</sup> JS 1 | API in Essential<sup style="font-size:70%">&reg;</sup> JS 2 |
|--------- | ----------- | ----------- |
| Enables or disables the scrolling feature | **Property:** *scrollSettings.allowScrolling* <br><br>`new ej.Spreadsheet($("#sheet"), { scrollSettings: { allowScrolling: true } });`| **Property:** *allowScrolling* <br><br>`new Spreadsheet({ allowScrolling: true });`|
| Enables or disables the sheet on demand | **Property:** *scrollSettings.allowSheetOnDemand* <br><br>`new ej.Spreadsheet($("#sheet"), { scrollSettings: { allowSheetOnDemand: true } });`| By default, each sheet will be rendered on demand |
| Enables or disables the virtual scrolling feature | **Property:** *scrollSettings.allowVirtualScrolling* <br><br>`new ej.Spreadsheet($("#sheet"), { scrollSettings: { allowVirtualScrolling: true } });`| **Property:** *scrollSettings.enableVirtualization* <br><br>`new Spreadsheet({ scrollSettings: { enableVirtualization: true } });`|
| Set the scroll mode to finite | **Property:** *scrollSettings.scrollMode* <br><br>`new ej.Spreadsheet($("#sheet"), { scrollSettings: { scrollMode: ej.Spreadsheet.scrollMode.Normal } });`| **Property:** *scrollSettings.isFinite* <br><br>`new Spreadsheet({ scrollSettings: { isFinite: true } });`|
| Perform goto operation | **Method:** *XLScroll.goTo* <br><br>`let xlObj = $("#sheet").data("ejSpreadsheet");  xlObj.XLScroll.goTo("A30");`| **Method:** *goTo* <br><br>`let ssObj: Spreadsheet = document.getElementById("sheet").ej2_instances[0];`<br>`ssObj.goTo('A30');`|
| Scroll the sheet content to the specified cell address | **Method:** *XLScroll.scrollToCell* <br><br>`let xlObj = $("#sheet").data("ejSpreadsheet");  xlObj.XLScroll.scrollToCell("A30");`| **Method:** *goTo* <br><br>`let ssObj: Spreadsheet = document.getElementById("sheet").ej2_instances[0];`<br>`ssObj.goTo('A30');`|

## Comparision between EJ1 and EJ2 Spreadsheet features

The following table compares Excel functionality with the availability of EJ1 and EJ2 Spreadsheet features.

| **Features** | **Available in EJ1 Spreadsheet** | **Available in EJ2 Spreadsheet** | **Comments** |
| --- | --- | --- | --- |
| Ribbon | Yes | Yes | - |
| Formula bar | Yes | Yes | - |
| Sheet tab | Yes | Yes | - |
| Show / Hide gridlines and header | Yes | Yes | - |
| Scrolling | Partially | Yes | - |
| Selection | Yes | Yes | - |
| Editing | Yes | Yes | - |
| Formulae | Yes | Partially | EJ2 supports limited number of [`most used formulas`](https://ej2.syncfusion.com/documentation/spreadsheet/formulas#supported-formulas)  |
| Named range | Yes | Partially | EJ2 Spreadsheet Named range supports only in workbook scope |
| Data Binding | Yes | Yes | - |
| Formatting | Yes | Yes | - |
| Context menu | Yes | Yes | - |
| Keyboard navigation | Yes | Yes | - |
| Keyboard shortcuts | Yes | Yes | - |
| Sorting | Yes | Yes | - |
| Filtering | Yes | Yes | - |
| Hyperlink | Yes | Yes | - |
| Undo & redo | Yes | Yes | - |
| Open and Save | Yes | Yes | - |
| Resize / Autofit | Yes | Yes | - |
| Clipboard | Yes | Yes | - |
| Collaborative editing | No | Yes | - |
| Wrap text | Yes | Yes | - |
| Template | No | Yes | - |
| Merge cells | Yes | Yes | - |
| Show / Hide rows and columns | Yes | Yes | - |
| Sheet customizations | Yes | Partially | Move or copy sheet is not supported in EJ2 spreadsheet. |
| Data Validation | Yes | Yes | - |
| Table | Yes | No | - |
| Chart | Yes | Yes | - |
| Image | Yes | Yes | - |
| Conditional formatting | Yes | Yes | - |
| Freeze Pane | Yes | Yes | - |
| Scaling | No | No | - |
| Print | Yes | No | - |
| Grouping | No | No | - |
| Autofill | Yes | No | - |
| Auto Sum | Yes | Yes | - |
| Format painter | Yes | No | - |
| Cell Style | Yes | Partially | We can only customize the cell style in EJ2 Spreadsheet through API. |
| Protection | Yes | Partially | Custom encryption is not supported in EJ2 Spreadsheet's protect workbook. |
| Find and replace | Yes | Yes | - |
| Drag and Drop | Yes | No | - |
| Notes | Yes | No | - |
| Comments | No | No | - |
| Pivot table | Yes | No | - |
| Sparklines | Yes | No | - |
| Form controls | Yes | No | - |
| Shapes | No | No | - |
| Clear | Yes | Yes | - |

## Common Properties

|Behavior | API in Essential<sup style="font-size:70%">&reg;</sup> JS 1 | API in Essential<sup style="font-size:70%">&reg;</sup> JS 2 |
|--------- | ----------- | ----------- |
| Enables or disables the keyboard navigation feature | **Property:** *allowKeyboardNavigation* <br><br>`new ej.Spreadsheet($("#sheet"), { allowKeyboardNavigation: true });`| **Property:** *enableKeyboardNavigation* <br><br>`new Spreadsheet({ enableKeyboardNavigation: true });`|
| Enables or disables the resizing feature | **Property:** *allowResizing* <br><br>`new ej.Spreadsheet($("#sheet"), { allowResizing: true });`| **Property:** *allowResizing* <br><br>`new Spreadsheet({ allowResizing: true });`|
| Add the CSS class to the root element to customize the appearance | **Property:** *cssClass* <br><br>`new ej.Spreadsheet($("#sheet"), { cssClass: "custom-class" });`| **Property:** *cssClass* <br><br>`new Spreadsheet({ cssClass: "custom-class" });`|
| Enables or disables the  touch support | **Property:** *enableTouch* <br><br>`new ej.Spreadsheet($("#sheet"), { enableTouch: true });`| By default, it is enabled. |
| Overrides the global culture and localization | **Property:** *locale* <br><br>`new ej.Spreadsheet($("#sheet"), { locale: "en-ES" });`| **Property:** *locale* <br><br>`new Spreadsheet({ locale: "en-US" });`|
| Enables or disables the picture feature | **Property:** *pictureSettings.allowPictures* <br><br>`new ej.Spreadsheet($("#sheet"), { pictureSettings: { allowPictures: true } });`| **Property:** *allowImage* <br><br>`new Spreadsheet({ allowImage: true });`|
| Set the height of the Spreadsheet | **Property:** *scrollSettings.height* <br><br>`new ej.Spreadsheet($("#sheet"), { scrollSettings: { height: 600 } });`| **Property:** *height* <br><br>`new Spreadsheet({ height:600 });`|
| Set the width of the Spreadsheet | **Property:** *scrollSettings.width* <br><br>`new ej.Spreadsheet($("#sheet"), { scrollSettings: { width: 1300 } });`| **Property:** *width* <br><br>`new Spreadsheet({ width:1300 });`|
| Hide the specified columns | **Property:** *sheets.hideColumns* <br><br>`new ej.Spreadsheet($("#sheet"), { sheets: [{ hideColumns: [3] }] });`| **Property:** *sheets.columns.hidden* <br><br>`new Spreadsheet({ sheets: [{ columns: [{ index:3, hidden: true }] }] });`|
| Hide the specified rows | **Property:** *sheets.hideRows* <br><br>`new ej.Spreadsheet($("#sheet"), { sheets: [{ hideRows: [3] }] });`| **Property:** *sheets.rows.hidden* <br><br>`new Spreadsheet({ sheets: [{ rows: [{ index:3, hidden:true }] }] });`|

## Common Methods

|Behavior | API in Essential<sup style="font-size:70%">&reg;</sup> JS 1 | API in Essential<sup style="font-size:70%">&reg;</sup> JS 2 |
|--------- | ----------- | ----------- |
| Get the data in the specified range | **Method:** *getRangeData* <br><br>`let xlObj = $("#sheet").data("ejSpreadsheet");  xlObj.getRangeData({range: [2, 6, 2, 6], property: ["value", "value2", "format"], sheetIdx: 1});`| **Method:** *getData* <br><br>`let ssObj: Spreadsheet = document.getElementById("sheet").ej2_instances[0];`<br>`ssObj.getData(getRangeAddress('A1:D5')).then((cells)=>{ cells.forEach((cell, key)=>{  }) });`|
| Get the range indices array based on the specified alpha range | **Method:** *getRangeIndices* <br><br>`let xlObj = $("#sheet").data("ejSpreadsheet");  xlObj.getRangeIndices("A1:A9");`| **Method:** *getRangeIndexes* <br><br>`import { getRangeIndexes } from '@syncfusion/ej2-spreadsheet';`<br>`getRangeIndexes("A1:A9")`|
| Send a paging request to the specified sheet Index | **Method:** *gotoPage* <br><br>`let xlObj = $("#sheet").data("ejSpreadsheet");  xlObj.gotoPage(1);`| **Method:** *goTo* <br><br>`let ssObj: Spreadsheet = document.getElementById("sheet").ej2_instances[0];`<br>`ssObj.goTo('Sheet2!A1');`|
| Hide the specified columns | **Method:** *hideColumn* <br><br>`let xlObj = $("#sheet").data("ejSpreadsheet");  xlObj.hideColumn(1, 4);`| **Method:** *hideColumn* <br><br>`let ssObj: Spreadsheet = document.getElementById("sheet").ej2_instances[0];`<br>`ssObj.hideColumn(1, 4);`|
| Hide the specified rows | **Method:** *hideRow* <br><br>`let xlObj = $("#sheet").data("ejSpreadsheet");  xlObj.hideRow(1, 4);`| **Method:** *hideRow* <br><br>`let ssObj: Spreadsheet = document.getElementById("sheet").ej2_instances[0];`<br>`ssObj.hideRow(1, 4);`|
| Refresh the Spreadsheet | **Method:** *refreshSpreadsheet* <br><br>`let xlObj = $("#sheet").data("ejSpreadsheet");  xlObj.refreshSpreadsheet();`| **Method:** *refresh* <br><br>`let ssObj: Spreadsheet = document.getElementById("sheet").ej2_instances[0];`<br>`ssObj.refresh(0, {});`|
| Set the height for the rows | **Method:** *setHeightToRows* <br><br>`let xlObj = $("#sheet").data("ejSpreadsheet");  xlObj.setHeightToRows([{rowIndex: 2, height: 40}]);`| **Method:** *setRowHeight* <br><br>`let ssObj: Spreadsheet = document.getElementById("sheet").ej2_instances[0];`<br>`ssObj.setRowHeight(40, 2);`|
| Set the width for the columns | **Method:** *setWidthToColumns* <br><br>`let xlObj = $("#sheet").data("ejSpreadsheet");  xlObj.setWidthToColumns([{colIndex: 2, width: 40}]);`| **Method:** *setColWidth* <br><br>`let ssObj: Spreadsheet = document.getElementById("sheet").ej2_instances[0];`<br>`ssObj.setColWidth(40, 2);`|
| Show the hidden columns within the specified range | **Method:** *showColumn* <br><br>`let xlObj = $("#sheet").data("ejSpreadsheet");  xlObj.showColumn(3, 6);`| **Method:** *hideColumn* <br><br>`let ssObj: Spreadsheet = document.getElementById("sheet").ej2_instances[0];`<br>`ssObj.hideColumn(3, 6, false);`|
| Show the hidden rows in the specified range | **Method:** *showRow* <br><br>`let xlObj = $("#sheet").data("ejSpreadsheet");  xlObj.showRow(3, 6);`| **Method:** *hideRow* <br><br>`let ssObj: Spreadsheet = document.getElementById("sheet").ej2_instances[0];`<br>`ssObj.hideRow(3, 6, false);`|
| Show waiting pop-up in the Spreadsheet | **Method:** *showWaitingPopUp* <br><br>`let xlObj = $("#sheet").data("ejSpreadsheet");  xlObj.showWaitingPopUp();`| **Method:** *showSpinner* <br><br>`let ssObj: Spreadsheet = document.getElementById("sheet").ej2_instances[0];`<br>`ssObj.showSpinner();`|
| Hide displayed waiting pop-up in Spreadsheet | **Method:** *hideWaitingPopUp* <br><br>`let xlObj = $("#sheet").data("ejSpreadsheet");  xlObj.hideWaitingPopUp();`| **Method:** *hideSpinner* <br><br>`let ssObj: Spreadsheet = document.getElementById("sheet").ej2_instances[0];`<br>`ssObj.hideSpinner();`|
| Fit the height of rows | **Method:** *XLResize.fitHeight* <br><br>`let xlObj = $("#sheet").data("ejSpreadsheet");  xlObj.XLResize.fitHeight([2,3,4,5]);`| **Method:** *autoFit* <br><br>`let ssObj: Spreadsheet = document.getElementById("sheet").ej2_instances[0];`<br>`ssObj.autoFit('1:4');`|
| Fit the width of columns | **Method:** *XLResize.fitWidth* <br><br>`let xlObj = $("#sheet").data("ejSpreadsheet");  xlObj.XLResize.fitWidth([2,3,4,5]);`| **Method:** *autoFit* <br><br>`let ssObj: Spreadsheet = document.getElementById("sheet").ej2_instances[0];`<br>`ssObj.autoFit('A:D');`|
| Set the column width of the specified column index | **Method:** *XLResize.setColWidth* <br><br>`let xlObj = $("#sheet").data("ejSpreadsheet");  xlObj.XLResize.setColWidth(2, 100);`| **Method:** *setColWidth* <br><br>`let ssObj: Spreadsheet = document.getElementById("sheet").ej2_instances[0];`<br>`ssObj.setColWidth(100, 2);`|
| Set the row height of the specified row index | **Method:** *XLResize.setRowHeight* <br><br>`let xlObj = $("#sheet").data("ejSpreadsheet");  xlObj.XLResize.setRowHeight(2, 100);`| **Method:** *setRowHeight* <br><br>`let ssObj: Spreadsheet = document.getElementById("sheet").ej2_instances[0];`<br>`ssObj.setRowHeight(100, 2);`|

## Common Events

|Behavior | API in Essential<sup style="font-size:70%">&reg;</sup> JS 1 | API in Essential<sup style="font-size:70%">&reg;</sup> JS 2 |
|--------- | ----------- | ----------- |
| Triggers for every action before it starts | **Event:** *actionBegin* <br><br>`new ej.Spreadsheet($("#sheet"), { actionBegin: (args) => { } });`| **Event:** *actionBegin* <br><br>`new Spreadsheet({ actionBegin: (args) => { } });`|
| Triggers for every completed action | **Event:** *actionComplete* <br><br>`new ej.Spreadsheet($("#sheet"), { actionComplete: (args) => { } });`| **Event:** *actionComplete* <br><br>`new Spreadsheet({ actionComplete: (args) => { } });`|
| Triggers after the sheet is loaded | **Event:** *loadComplete* <br><br>`new ej.Spreadsheet($("#sheet"), { loadComplete: (args) => { } });`| **Event:** *created* <br><br>`new Spreadsheet({ created: () => { } });`|