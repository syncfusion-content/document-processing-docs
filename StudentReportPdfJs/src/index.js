const fs = require('node:fs');
const path = require('node:path');
const { registerLicense } = require('@syncfusion/ej2-base');
const {
  PdfDocument, PdfPageSettings, PdfMargins, PdfGrid, PdfGridBuiltinStyle,
  PdfLayoutFormat, PdfLayoutType, PdfLayoutBreakType,
  PdfPageTemplateElement, PdfStandardFont, PdfFontFamily, PdfFontStyle,
  PdfBrush, PdfPen, PdfStringFormat, PdfTextAlignment, PdfVerticalAlignment,
  PdfPageNumberField, PdfPageCountField, PdfCompositeField
} = require('@syncfusion/ej2-pdf');

// Usage: node src/index.js [input.json] [output.pdf]
const inputPath = process.argv[2] ?? path.join('data', 'students.json');
const outputPath = process.argv[3] ?? path.join('output', 'StudentReport.pdf');

// A4 portrait, in points (1 pt = 1/72 inch)
const PAGE = { width: 595, height: 842 };
const MARGIN = 40; // matches the library default so every paginated page is identical
const CONTENT_WIDTH = PAGE.width - MARGIN * 2; // 523
const HEADER_HEIGHT = 60;
const FOOTER_HEIGHT = 30; // space kept free at the bottom of each page for the footer

// Column widths sum to CONTENT_WIDTH
const COLUMNS = [
  { field: 'studentId', headerText: 'Student ID', width: 68 },
  { field: 'studentName', headerText: 'Student Name', width: 130 },
  { field: 'className', headerText: 'Class', width: 50 },
  { field: 'marks', headerText: 'Marks', width: 55 },
  { field: 'totalScore', headerText: 'Total score', width: 72 },
  { field: 'percentage', headerText: 'Percentage', width: 80 },
  { field: 'grade', headerText: 'Grade', width: 68 }
];

function registerSyncfusionLicense() {
  let key = process.env.SYNCFUSION_LICENSE_KEY?.trim();
  const file = path.join(process.cwd(), 'SyncfusionLicense.txt');
  if (!key && fs.existsSync(file)) key = fs.readFileSync(file, 'utf8').trim();
  if (key) registerLicense(key);
  else console.warn('WARNING: no Syncfusion license key found; the PDF may carry an evaluation watermark.');
}

function loadReport(file) {
  if (!fs.existsSync(file)) throw new Error(`input file not found: ${file}`);
  let data;
  try {
    data = JSON.parse(fs.readFileSync(file, 'utf8'));
  } catch (e) {
    throw new Error(`invalid JSON in ${file}: ${e.message}`);
  }
  for (const k of ['schoolName', 'academicYear', 'term']) {
    if (!data[k]) throw new Error(`"${k}" is missing in ${file}`);
  }
  if (!Array.isArray(data.students) || data.students.length === 0) {
    throw new Error(`"students" must be a non-empty array in ${file}`);
  }
  return data;
}

// Header drawn on every page: school name, academic year and term.
function buildHeader(report) {
  const header = new PdfPageTemplateElement({ width: CONTENT_WIDTH, height: HEADER_HEIGHT });
  const center = new PdfStringFormat();
  center.alignment = PdfTextAlignment.center;
  center.lineAlignment = PdfVerticalAlignment.middle;
  const black = new PdfBrush({ r: 0, g: 0, b: 0 });
  header.graphics.drawString(
    report.schoolName,
    new PdfStandardFont(PdfFontFamily.helvetica, 16, PdfFontStyle.bold),
    { x: 0, y: 8, width: CONTENT_WIDTH, height: 24 }, black, center);
  header.graphics.drawString(
    `Academic Year: ${report.academicYear}   |   Term: ${report.term}`,
    new PdfStandardFont(PdfFontFamily.helvetica, 11),
    { x: 0, y: 34, width: CONTENT_WIDTH, height: 18 }, black, center);
  header.graphics.drawLine(new PdfPen({ r: 128, g: 128, b: 128 }, 0.75),
    { x: 0, y: HEADER_HEIGHT - 2 }, { x: CONTENT_WIDTH, y: HEADER_HEIGHT - 2 });
  return header;
}

// Footer: "Page {pageNumber} of {pageCount}" drawn on every page once pagination is complete,
// so the automatic fields resolve against the final page count.
function drawFooters(document) {
  const font = new PdfStandardFont(PdfFontFamily.helvetica, 9);
  const brush = new PdfBrush({ r: 0, g: 0, b: 0 });
  for (let i = 0; i < document.pageCount; i++) {
    const g = document.getPage(i).graphics;
    const composite = new PdfCompositeField({
      font,
      brush,
      pattern: 'Page {0} of {1}',
      automaticFields: [new PdfPageNumberField({ font }), new PdfPageCountField({ font })]
    });
    composite.draw(g, { x: CONTENT_WIDTH - 55, y: PAGE.height - MARGIN * 2 - 10 });
  }
}

function main() {
  const report = loadReport(inputPath);
  registerSyncfusionLicense();

  const document = new PdfDocument();
  const settings = new PdfPageSettings({ size: PAGE, margins: new PdfMargins(MARGIN) });
  document.pageSettings = settings;
  document.template.top = { template: buildHeader(report) };

  const page = document.addPage(settings);

  const headers = [{ cells: COLUMNS.map((c) => ({ value: c.headerText })) }];
  const rows = report.students.map((s) => ({
    cells: COLUMNS.map((c) => {
      const v = s[c.field];
      return { value: c.field === 'percentage' ? `${Number(v).toFixed(2)}%` : String(v ?? '') };
    })
  }));
  const widths = new Map(COLUMNS.map((c, i) => [i, c.width]));

  const grid = new PdfGrid(COLUMNS.length, widths, rows, headers, {
    builtInStyle: PdfGridBuiltinStyle.plainTable1
  });
  grid.repeatHeader = true;

  const format = new PdfLayoutFormat();
  format.layout = PdfLayoutType.paginate;
  format.break = PdfLayoutBreakType.fitPage;
  grid.draw(page, { x: 0, y: 0, width: CONTENT_WIDTH, height: PAGE.height - MARGIN * 2 - HEADER_HEIGHT - FOOTER_HEIGHT }, format);
  drawFooters(document);

  const bytes = document.save();
  const pageCount = document.pageCount;
  document.destroy();

  fs.mkdirSync(path.dirname(path.resolve(outputPath)), { recursive: true });
  fs.writeFileSync(outputPath, bytes);
  console.log(`SUCCESS: ${pageCount} page(s), ${report.students.length} student(s) -> ${path.resolve(outputPath)}`);
}

try {
  main();
  process.exit(0);
} catch (err) {
  console.error(`ERROR: ${err.message}`);
  process.exit(1);
}
