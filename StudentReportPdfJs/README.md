# Student Report PDF (JavaScript)

Node.js app that reads a JSON file and generates an A4 student report PDF with
[`@syncfusion/ej2-pdf`](https://www.npmjs.com/package/@syncfusion/ej2-pdf). Built following the
`Skill-set/skills/syncfusion-javascript-pdf` skill.

## What the PDF contains

- A4 portrait pages (595 x 842 pt)
- A `PdfGrid` with columns: Student ID, Student Name, Class, Marks, Total score, Percentage, Grade
- `PdfGridBuiltinStyle.plainTable1` applied to the grid
- Header row repeated on every page (`grid.repeatHeader = true`, paginated layout)
- Page header with school name, academic year and term
- Page footer with "Page X of Y" (`PdfPageNumberField` + `PdfPageCountField` in a `PdfCompositeField`)

## Prerequisites

- Node.js 18+
- Optional: a Syncfusion license key, via env var `SYNCFUSION_LICENSE_KEY` or a `SyncfusionLicense.txt`
  file in the folder you run from. Without one the library may add an evaluation watermark
  ([free community license](https://www.syncfusion.com/products/communitylicense)).

## Run

```bash
cd StudentReportPdfJs
npm install
npm start                                   # data/students.json -> output/StudentReport.pdf
node src/index.js path/to/input.json out/report.pdf   # custom input / output
```

## Input JSON

```json
{
  "schoolName": "Greenfield International School",
  "academicYear": "2024-2025",
  "term": "Term 2",
  "students": [
    { "studentId": "S1001", "studentName": "Aarav Sharma", "className": "8-A",
      "marks": 340, "totalScore": 500, "percentage": 68.0, "grade": "C" }
  ]
}
```

`schoolName`, `academicYear`, `term` and a non-empty `students` array are required; the app exits
with an error message otherwise. The sample file has 75 students so the table spans two pages.

## Project layout

```
data/students.json   sample input
src/index.js         PDF generation
output/              generated PDF (git-ignored)
```
