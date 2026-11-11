# Working with Tables

> Create and customize PDF tables using PdfGrid with columns, headers, rows, styles, and pagination.

---

## Create a Basic Table (PdfGrid)

```dart
//Create a new PDF document
PdfDocument document = PdfDocument();

//Create a PdfGrid
PdfGrid grid = PdfGrid();

//Add columns to the grid
grid.columns.add(count: 3);

//Add a header row
grid.headers.add(1);
PdfGridRow header = grid.headers[0];
header.cells[0].value = 'Employee ID';
header.cells[1].value = 'Employee Name';
header.cells[2].value = 'Salary';

//Add data rows
PdfGridRow row = grid.rows.add();
row.cells[0].value = 'E01';
row.cells[1].value = 'Clay';
row.cells[2].value = '\$10,000';

row = grid.rows.add();
row.cells[0].value = 'E02';
row.cells[1].value = 'Simon';
row.cells[2].value = '\$12,000';

//Draw the grid on the page
grid.draw(
    page: document.pages.add(), bounds: const Rect.fromLTWH(0, 0, 0, 0));

//Save and dispose
File('SampleOutput.pdf').writeAsBytes(await document.save());
document.dispose();
```

### Placeholders
- Column count `3` → Replace with desired number of columns
- Header cell values → Replace with your column headers
- Row cell values → Replace with your data values

---

## Apply Grid Style

```dart
//Apply global style to all cells in the grid
grid.style = PdfGridStyle(
    cellPadding: PdfPaddings(left: 2, right: 3, top: 4, bottom: 5),
    backgroundBrush: PdfBrushes.blue,
    textBrush: PdfBrushes.white,
    font: PdfStandardFont(PdfFontFamily.timesRoman, 14));
```

---

## Customize the Cell

```dart
//Set text alignment on a specific header cell
header.cells[0].style.stringFormat = PdfStringFormat(
    alignment: PdfTextAlignment.center,
    lineAlignment: PdfVerticalAlignment.bottom,
    wordSpacing: 10);

//Set text pen (outline color) on a cell
header.cells[1].style.textPen = PdfPens.mediumVioletRed;

//Set background brush on a cell
header.cells[2].style.backgroundBrush = PdfBrushes.yellow;
header.cells[2].style.textBrush = PdfBrushes.darkOrange;

//Apply a full cell style
row.cells[0].style = PdfGridCellStyle(
    backgroundBrush: PdfBrushes.lightYellow,
    cellPadding: PdfPaddings(left: 2, right: 3, top: 4, bottom: 5),
    font: PdfStandardFont(PdfFontFamily.timesRoman, 14),
    textBrush: PdfBrushes.black,
    textPen: PdfPens.orange);

//Set custom borders on a cell
row.cells[2].style.borders = PdfBorders(
    left:   PdfPen(PdfColor(240, 0, 0), width: 2),
    top:    PdfPen(PdfColor(0, 240, 0), width: 3),
    bottom: PdfPen(PdfColor(0, 0, 240), width: 4),
    right:  PdfPen(PdfColor(240, 100, 240), width: 5));
```

---

## Customize the Row

```dart
//Set row height
row2.height = 20;

//Set row span (merge cells vertically)
row1.cells[1].rowSpan = 2;

//Set the rows span
grid.rows.setSpan(0, 1, 2, 1);

//Apply row style
row1.style = PdfGridRowStyle(
    backgroundBrush: PdfBrushes.dimGray,
    textPen: PdfPens.lightGoldenrodYellow,
    textBrush: PdfBrushes.darkOrange,
    font: PdfStandardFont(PdfFontFamily.timesRoman, 12));
```

---

## Customize the Column

```dart
//Set column width
grid.columns[1].width = 150;

//Set column text format
PdfStringFormat format = PdfStringFormat(
    alignment: PdfTextAlignment.center,
    lineAlignment: PdfVerticalAlignment.bottom);
grid.columns[0].format = format;
```

---

## Adda a Column Span (Merge Cells Horizontally)

```dart
//Merge cells horizontally (span across multiple columns)
header.cells[0].columnSpan = 2;
```

---

## Get index of a particular cell in the collection.

```dart
PdfGrid grid = PdfGrid();
grid.columns.add(count: 3);
PdfGridRow header = grid.headers.add(1)[0];
header.cells[0].value = 'Employee ID';
header.cells[1].value = 'Employee Name';
header.cells[2].value = 'Salary';
PdfGridRow row1 = grid.rows.add();
//Gets the cell collection from the row
PdfGridCellCollection cellCollection = row1.cells;
//Gets the specific cell from the row collection
PdfGridCell cell1 = cellCollection[0];
cell1.value = 'E01';
cell1.style.cellPadding = PdfPaddings(left: 0, right: 0, top: 10, bottom: 10);
cellCollection[1].value = 'Clay';
cellCollection[2].value = '\$10000';
PdfGridRow row2 = grid.rows.add();
row2.cells[0].value = 'E02';
row2.cells[1].value = 'Simon';
row2.cells[2].value = '\$12,000';
//Gets the cells count
int cellsCount = cellCollection.count;
//Gets the index of particular cell
int index = cellCollection.indexOf(cell1);
```

---

## Configure built-in style options

```dart
PdfGridBuiltInStyleSettings tableStyleOption = PdfGridBuiltInStyleSettings();
tableStyleOption.applyStyleForBandedColumns = true;
tableStyleOption.applyStyleForBandedRows = true;
//Sets applyStyleForFirstColumn
tableStyleOption.applyStyleForFirstColumn = true;
//Sets applyStyleForHeaderRow
tableStyleOption.applyStyleForHeaderRow = true;
//Sets applyStyleForLastColumn
tableStyleOption.applyStyleForLastColumn = true;
//Sets applyStyleForLastRow
tableStyleOption.applyStyleForLastRow = true;
```

---

## Customize the full Table

```dart
//Create border
PdfBorders border = PdfBorders(
    left:   PdfPen(PdfColor(240, 0, 0), width: 2),
    top:    PdfPen(PdfColor(0, 240, 0), width: 3),
    bottom: PdfPen(PdfColor(0, 0, 240), width: 4),
    right:  PdfPen(PdfColor(240, 100, 240), width: 5));

//Create grid style
PdfGridStyle gridStyle = PdfGridStyle(
    cellSpacing: 2,
    cellPadding: PdfPaddings(left: 2, right: 3, top: 4, bottom: 5),
    borderOverlapStyle: PdfBorderOverlapStyle.inside,
    backgroundBrush: PdfBrushes.lightGray,
    textBrush: PdfBrushes.white,
    font: PdfStandardFont(PdfFontFamily.timesRoman, 14));

PdfGrid grid = PdfGrid();
grid.columns.add(count: 3);
grid.headers.add(1);

PdfGridRow header = grid.headers[0];
header.cells[0].value = 'Employee Id';
header.cells[1].value = 'Employee Name';
header.cells[2].value = 'Employee Role';

grid.rows.applyStyle(gridStyle);

PdfGridRow row1 = grid.rows.add();
row1.cells[0].value = 'E01';
row1.cells[1].value = 'Clay';
row1.cells[2].value = 'Product Manager';

PdfGridRow row2 = grid.rows.add();
row2.cells[0].value = 'E02';
row2.cells[1].value = 'Thomas';
row2.cells[2].value = 'Software Engineer';

grid.draw(
    page: document.pages.add(), bounds: const Rect.fromLTWH(0, 0, 0, 0));
```

---

## Apply Built-In Table Style

```dart
PdfGrid grid = PdfGrid();
grid.columns.add(count: 3);
grid.headers.add(1);

PdfGridRow header = grid.headers[0];
header.cells[0].value = 'Employee ID';
header.cells[1].value = 'Employee Name';
header.cells[2].value = 'Salary';

PdfGridRow row = grid.rows.add();
row.cells[0].value = 'E01';
row.cells[1].value = 'Clay';
row.cells[2].value = '\$10,000';

row = grid.rows.add();
row.cells[0].value = 'E02';
row.cells[1].value = 'Simon';
row.cells[2].value = '\$12,000';

//Configure built-in style options
PdfGridBuiltInStyleSettings tableStyleOption = PdfGridBuiltInStyleSettings();
tableStyleOption.applyStyleForBandedRows = true;
tableStyleOption.applyStyleForHeaderRow = true;

//Apply built-in style
grid.applyBuiltInStyle(PdfGridBuiltInStyle.listTable6ColorfulAccent1,
    settings: tableStyleOption);

grid.draw(
    page: document.pages.add(), bounds: const Rect.fromLTWH(10, 10, 0, 0));
```

### Available Built-In Styles (examples)
- `PdfGridBuiltInStyle.gridTable1Light`
- `PdfGridBuiltInStyle.gridTable4Accent1`
- `PdfGridBuiltInStyle.listTable6ColorfulAccent1`
- `PdfGridBuiltInStyle.listTable3`

---

## Create a Table Pagination (Flow Across Pages)

```dart
PdfGrid grid = PdfGrid();
grid.columns.add(count: 3);
grid.headers.add(1);

PdfGridRow header = grid.headers[0];
header.cells[0].value = 'Name';
header.cells[1].value = 'Age';
header.cells[2].value = 'Gender';

//Add many rows to trigger pagination
for (int i = 0; i < 50; i++) {
  PdfGridRow row = grid.rows.add();
  row.cells[0].value = 'Person $i';
  row.cells[1].value = '${20 + i}';
  row.cells[2].value = i % 2 == 0 ? 'Male' : 'Female';
}

//Enable pagination
PdfLayoutFormat format = PdfLayoutFormat(
    breakType: PdfLayoutBreakType.fitColumnsToPage,
    layoutType: PdfLayoutType.paginate);

grid.draw(
    page: document.pages.add(),
    bounds: const Rect.fromLTWH(0, 0, 0, 0),
    format: format);
```

---

## Create a Multiple Tables on Same Page

```dart
//First table
PdfGrid grid1 = PdfGrid();
grid1.columns.add(count: 2);
grid1.headers.add(1);
grid1.headers[0].cells[0].value = 'Product';
grid1.headers[0].cells[1].value = 'Price';
PdfGridRow r1 = grid1.rows.add();
r1.cells[0].value = 'Widget A'; r1.cells[1].value = '\$5.00';

//Draw first table and capture layout result
PdfLayoutResult result = grid1.draw(
    page: document.pages.add(),
    bounds: const Rect.fromLTWH(0, 0, 400, 300)) as PdfLayoutResult;

//Second table — positioned below the first using result.bounds.bottom
PdfGrid grid2 = PdfGrid();
grid2.columns.add(count: 2);
grid2.headers.add(1);
grid2.headers[0].cells[0].value = 'Employee';
grid2.headers[0].cells[1].value = 'Salary';
PdfGridRow r2 = grid2.rows.add();
r2.cells[0].value = 'Alice'; r2.cells[1].value = '\$10,000';

grid2.draw(
    page: result.page,
    bounds: Rect.fromLTWH(0, result.bounds.bottom + 20, 400, 300));
```

---

## Create a Table with grid cell layout event arguments.

```dart
PdfGrid grid = PdfGrid();

//Sets allowRowBreakingAcrossPages
grid.allowRowBreakingAcrossPages = true;

//Sets repeatHeader
grid.repeatHeader = true;

// Sets the event raised on starting cell lay outing.
grid.beginCellLayout = (Object sender, PdfGridBeginCellLayoutArgs args) {
  if (args.rowIndex == 1 && args.cellIndex == 1) {
    args.graphics.drawRectangle(
        pen: PdfPen(PdfColor(250, 100, 0), width: 2),
        brush: PdfBrushes.white,
        bounds: args.bounds);
  }
  if (args.isHeaderRow && args.cellIndex == 0) {
    args.graphics.drawRectangle(
        pen: PdfPen(PdfColor(250, 100, 0), width: 2),
        brush: PdfBrushes.white,
        bounds: args.bounds);
  }
};
// Sets the event raised on finished cell layout.
grid.endCellLayout = (Object sender, PdfGridEndCellLayoutArgs args) {
  if (args.isHeaderRow && args.cellIndex == 0) {
    args.graphics.drawRectangle(
        pen: PdfPen(PdfColor(250, 100, 0), width: 2),
        brush: PdfBrushes.white,
        bounds: args.bounds);
  }
  if (args.rowIndex == 1 && args.cellIndex == 1) {
    args.graphics.drawRectangle(
        pen: PdfPen(PdfColor(250, 100, 0), width: 2),
        brush: PdfBrushes.white,
        bounds: args.bounds);
  }
};
grid.style.cellPadding = PdfPaddings();
grid.style.cellPadding.all = 15;
grid.columns.add(count: 3);
grid.headers.add(1);
PdfGridRow header = grid.headers[0];
header.cells[0].value = 'Employee ID';
header.cells[1].value = 'Employee Name';
header.cells[2].value = 'Salary';
PdfGridRow row = grid.rows.add();
row.cells[0].value = 'E01';
row.cells[1].value = 'Clay';
row.cells[2].value = '\$10,000';
row = grid.rows.add();
row.cells[0].value = 'E02';
row.cells[1].value = 'Simon';
row.cells[2].value = '\$12,000';
//Draw the grid
grid.draw(
    page: document.pages.add(), bounds: Rect.zero);
```

---

## Create a table using the PdfGridCell image alignment type.

```dart
PdfGrid grid = PdfGrid();
grid.columns.add(count: 3);
PdfGridRow header = grid.headers.add(1)[0];
header.cells[0].value = 'Employee ID';
header.cells[1].value = 'Employee Name';
header.cells[2].value = 'Salary';
PdfGridRow row1 = grid.rows.add();
PdfGridCell cell1 = row1.cells[0];
//Sets the image alignment type of the PdfGridCell image
cell1.imagePosition = PdfGridImagePosition.center;
cell1.style.backgroundImage = PdfBitmap(imageData);
cell1.style.cellPadding = PdfPaddings(left: 0, right: 0, top: 10, bottom: 10);
row1.cells[1].value = 'Clay';
row1.cells[2].value = '\$10000';
PdfGridRow row2 = grid.rows.add();
row2.cells[0].value = 'E02';
row2.cells[1].value = 'Simon';
row2.cells[2].value = '\$12,000';
grid.draw(
    page: document.pages.add(), bounds: Rect.zero);
```