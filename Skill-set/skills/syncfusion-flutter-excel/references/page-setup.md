# Page Setup

Configure page setup and print settings for worksheets.

## Black and White Printing

Print worksheet in black and white:

```dart
final Workbook workbook = Workbook();
final Worksheet sheet = workbook.worksheets[0];

sheet.getRangeByName('A1:D4').text = 'Black and White';
sheet.pageSetup.isBlackAndWhite = true;

final List<int> bytes = workbook.saveAsStream();
workbook.dispose();
```

### Placeholders
- `'A1:D4'` → Replace with `'{cell-range}'` (cell range)
- `'Black and White'` → Replace with `'{text-value}'` (content)

## Show Gridlines

Print gridlines on the page:

```dart
sheet.getRangeByName('A1:D4').text = 'Gridlines';
sheet.pageSetup.showGridlines = true;
```

### Placeholders
- `'A1:D4'` → Replace with `'{cell-range}'` (cell range)
- `'Gridlines'` → Replace with `'{text-value}'` (content)

## Show Headings

Print row and column headings:

```dart
sheet.getRangeByName('A1:D4').text = 'Headings';
sheet.pageSetup.showHeadings = true;
```

### Placeholders
- `'{cell-range}'` - Cell range
- `'{text-value}'` - Content to display

## Center Content

Center worksheet content on page:

```dart
sheet.getRangeByName('A1:D4').text = 'Centered';
sheet.pageSetup.isCenterHorizontally = true;
sheet.pageSetup.isCenterVertically = true;
```

### Placeholders
- `'{cell-range}'` - Cell range
- `'{text-value}'` - Content to display

## Fit to Page

Shrink content to fit on single page:

```dart
sheet.getRangeByName('A1:X80').text = 'Fit to Page';
sheet.pageSetup.isFitToPage = true;
```

### Placeholders
- `'{cell-range}'` - Cell range
- `'{text-value}'` - Content to display

## Page Orientation

Set portrait or landscape orientation:

```dart
sheet.getRangeByName('A1:D4').text = 'Landscape';
sheet.pageSetup.orientation = ExcelPageOrientation.landscape;

// Portrait (default)
sheet.pageSetup.orientation = ExcelPageOrientation.portrait;
```

### Placeholders
- `'{cell-range}'` - Cell range
- `'{text-value}'` - Content to display
- `ExcelPageOrientation.landscape` → Orientation constant

## Page Order

Set printing order for multiple pages:

```dart
sheet.getRangeByName('A1:X80').text = 'Page Order';
sheet.pageSetup.order = ExcelPageOrder.overThenDown;  // Over then down
sheet.pageSetup.order = ExcelPageOrder.downThenOver;  // Down then over (default)
```

### Placeholders
- `'A1:X80'` → Replace with `'{cell-range}'` (cell range)
- `'Page Order'` → Replace with `'{text-value}'` (content)

## Print Cell Errors

Configure how cell errors are printed:

```dart
sheet.getRangeByName('D4').formula = 'ASIN(B4:C4)';
sheet.pageSetup.printErrors = CellErrorPrintOptions.dash;

// Other options:
// sheet.pageSetup.printErrors = CellErrorPrintOptions.displayed;
// sheet.pageSetup.printErrors = CellErrorPrintOptions.blank;
// sheet.pageSetup.printErrors = CellErrorPrintOptions.na;
```

### Placeholders
- `'D4'` → Replace with `'{cell-range}'` (cell range)
- `'ASIN(B4:C4)'` → Replace with `'{formula}'` (formula expression)
- `CellErrorPrintOptions.dash` → Replace with error print option constant

## Page Margins

Set margins for printed page (in inches):

```dart
sheet.getRangeByName('A1:M20').text = 'Margins';
sheet.pageSetup.topMargin = 1;
sheet.pageSetup.leftMargin = 2;
sheet.pageSetup.rightMargin = 1.25;
sheet.pageSetup.bottomMargin = 1;
sheet.pageSetup.headerMargin = 3.5;
sheet.pageSetup.footerMargin = 4;
```

### Placeholders
- `'{cell-range}'` - Cell range
- `'{text-value}'` - Content to display
- Margin values in inches (e.g., 1, 2, 1.25)

## Fit to Pages Tall

Fit worksheet to specified number of pages vertically:

```dart
sheet.getRangeByName('A1:D150').text = 'Data';
sheet.pageSetup.fitToPagesTall = 2;  // Fit to 2 pages tall
```

### Placeholders
- `'{cell-range}'` - Cell range
- `'{text-value}'` - Content to display
- `{page-count}` - Number of pages to fit

## Fit to Pages Wide

Fit worksheet to specified number of pages horizontally:

```dart
sheet.getRangeByName('A1:BB4').text = 'Data';
sheet.pageSetup.fitToPagesWide = 2;  // Fit to 2 pages wide
```

### Placeholders
- `'{cell-range}'` - Cell range
- `'{text-value}'` - Content to display
- `{page-count}` - Number of pages to fit

## Paper Size

Set paper size for printing:

```dart
sheet.getRangeByName('A1:M40').text = 'Paper Size';
sheet.pageSetup.paperSize = ExcelPaperSize.a2Paper;

// Other paper sizes:
// a1Paper, a2Paper, a3Paper, a4Paper, a5Paper
// paperFolio, paperLetter, paperLegal, paperTabloid
```

### Placeholders
- `'{cell-range}'` - Cell range
- `'{text-value}'` - Content to display
- `ExcelPaperSize.a2Paper` → Paper size constant

## Print Title Rows

Repeat title rows on each printed page:

```dart
sheet.getRangeByName('A1').text = 'Header 1';
sheet.getRangeByName('B1').text = 'Header 2';
sheet.getRangeByName('A2:A100').number = 1;
sheet.getRangeByName('B2:B100').text = 'Data';

sheet.pageSetup.printTitleRows = 'A1:D1';  // Row 1 repeats
```

### Placeholders
- `'{cell-range}'` - Cell reference
- `'{text-value}'` - Content to display
- `'{title-rows}'` - Row range to repeat

## Print Title Columns

Repeat title columns on each printed page:

```dart
sheet.getRangeByName('A1').text = 'Column Header';
sheet.getRangeByName('A2').text = 'Data 1';
sheet.getRangeByName('B1:MM1').number = 1;
sheet.getRangeByName('B2:MM2').text = 'Data';

sheet.pageSetup.printTitleColumns = 'A1:A4';  // Column A repeats
```

### Placeholders
- `'A1'`, `'A2'`, `'B1:MM1'`, `'B2:MM2'` → Replace with `'{cell-range}'` (cell ranges)
- `'Column Header'`, `'Data 1'`, `'Data'` → Replace with `'{text-value}'` (content)
- `'A1:A4'` → Replace with `'{title-columns}'` (title column range)

## Print Area

Specify range of cells to print:

```dart
sheet.getRangeByName('A1:M40').text = 'All Data';
sheet.pageSetup.printArea = 'A1:E10';  // Only print A1:E10
```

### Placeholders
- `'A1:M40'` → Replace with `'{cell-range}'` (cell range)
- `'All Data'` → Replace with `'{text-value}'` (content)
- `'A1:E10'` → Replace with `'{print-area}'` (print area range)

## Draft Quality

Print in draft quality (faster):

```dart
sheet.getRangeByName('A1:D4').text = 'Draft';
sheet.pageSetup.isDraft = true;
```

### Placeholders
- `'A1:D4'` → Replace with `'{cell-range}'` (cell range)
- `'Draft'` → Replace with `'{text-value}'` (content)

## Print Quality

Set print quality in DPI:

```dart
sheet.getRangeByName('A1:M20').text = 'High Quality';
sheet.pageSetup.printQuality = 700;  // 700 DPI
```

### Placeholders
- `'A1:M20'` → Replace with `'{cell-range}'` (cell range)
- `'High Quality'` → Replace with `'{text-value}'` (content)
- `700` → Replace with `'{dpi-value}'` (print quality in DPI)

## Complete Page Setup Example

Configure multiple page setup options:

```dart
final Workbook workbook = Workbook();
final Worksheet sheet = workbook.worksheets[0];

sheet.getRangeByName('A1:D1').text = 'Headers';
sheet.getRangeByName('A2:D100').text = 'Data';

// Print setup
sheet.pageSetup.orientation = ExcelPageOrientation.landscape;
sheet.pageSetup.paperSize = ExcelPaperSize.a4Paper;
sheet.pageSetup.isCenterHorizontally = true;
sheet.pageSetup.isCenterVertically = true;

// Margins
sheet.pageSetup.topMargin = 1;
sheet.pageSetup.leftMargin = 1.5;
sheet.pageSetup.rightMargin = 1.5;
sheet.pageSetup.bottomMargin = 1;

// Title and area
sheet.pageSetup.printTitleRows = 'A1:D1';
sheet.pageSetup.printArea = 'A1:D100';

// Print options
sheet.pageSetup.showGridlines = true;
sheet.pageSetup.showHeadings = true;
sheet.pageSetup.printQuality = 600;

final List<int> bytes = workbook.saveAsStream();
workbook.dispose();
```

### Placeholders
- `'{cell-range}'` - Cell range
- `'{text-value}'` - Content to display
- `ExcelPageOrientation.landscape`, `ExcelPaperSize.a4Paper` - Setup constants
- Margin values in inches (e.g., 1, 1.5)
- `600` → Replace with `'{dpi-value}'` (print quality in DPI)

## Multiple Sheets with Different Print Settings

Different page setup for each worksheet:

```dart
final Workbook workbook = Workbook(2);

// Sheet 1 - Portrait
final Worksheet sheet1 = workbook.worksheets[0];
sheet1.getRangeByName('A1:D100').text = 'Sheet1 Data';
sheet1.pageSetup.orientation = ExcelPageOrientation.portrait;
sheet1.pageSetup.printTitleRows = 'A1:D1';

// Sheet 2 - Landscape
final Worksheet sheet2 = workbook.worksheets[1];
sheet2.getRangeByName('A1:M100').text = 'Sheet2 Data';
sheet2.pageSetup.orientation = ExcelPageOrientation.landscape;
sheet2.pageSetup.printTitleColumns = 'A1:A100';

final List<int> bytes = workbook.saveAsStream();
workbook.dispose();
```

### Placeholders
- `Workbook(2)` → Replace with number of worksheets
- `'A1:D100'`, `'A1:M100'`, `'A1:D1'`, `'A1:A100'` → Replace with `'{cell-range}'` (cell ranges)
- `'Sheet1 Data'`, `'Sheet2 Data'` → Replace with `'{text-value}'` (content)
- `ExcelPageOrientation.portrait`, `ExcelPageOrientation.landscape` → Replace with orientation constants

## Page Orientations

**ExcelPageOrientation Options:**
- `portrait`: Vertical orientation (default)
- `landscape`: Horizontal orientation

## Page Orders

**ExcelPageOrder Options:**
- `overThenDown`: Print across, then down
- `downThenOver`: Print down, then across (default)

## Paper Sizes

**ExcelPaperSize Options:**
- `a1Paper`, `a2Paper`, `a3Paper`, `a4Paper` (ISO sizes)
- `a5Paper`, `a6Paper`
- `paperLetter`, `paperLegal`
- `paperTabloid`, `paperFolio`
- And 20+ other standard sizes

## Error Print Options

**CellErrorPrintOptions:**
- `displayed`: Print error as displayed in cell
- `blank`: Print as blank
- `dash`: Print as dash (---)
- `na`: Print as #N/A

## Notes

- Each worksheet can have independent page setup
- Margins are in inches (convert from cm if needed)
- Print area overrides isFitToPage setting
- Title rows/columns appear on every page in print
- Paper size and orientation affect page layout
- Print quality affects file size and output clarity
- Draft mode prints faster but with lower quality
- Margins include header/footer areas
