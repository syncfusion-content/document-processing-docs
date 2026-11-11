# Working with Lists

> Add ordered (numbered/alphabetical) and unordered (bullet/circle) lists to PDF pages, including nested sub-lists.

---

## Create Ordered List (Numbered)

```dart
//Create a new PDF document
PdfDocument document = PdfDocument();

//Create and draw an ordered list
PdfOrderedList(
        items: PdfListItemCollection(<String>[
          'Mammals',
          'Reptiles',
          'Birds',
          'Insects',
          'Aquatic Animals'
        ]),
        font: PdfStandardFont(PdfFontFamily.timesRoman, 20,
            style: PdfFontStyle.italic),
        indent: 20,
        format: PdfStringFormat(lineSpacing: 10))
    .draw(page: document.pages.add(), bounds: Rect.fromLTWH(0, 20, 0, 0));

//Save and dispose
File('Output.pdf').writeAsBytes(await document.save());
document.dispose();
```

### Placeholders
- List items → Replace with your actual list content
- Font family and size → Adjust as needed
- `indent: 20` → Adjust indentation in points
- `lineSpacing: 10` → Adjust spacing between items

---

## Create Ordered List and Configure Marker Styles

```dart
//Number style (default): 1, 2, 3...
PdfOrderedList numberedList = PdfOrderedList(
    items: PdfListItemCollection(['Item 1', 'Item 2', 'Item 3']),
    font: PdfStandardFont(PdfFontFamily.helvetica, 12),
    markerHierarchy: false);

//Available PdfNumberStyle options:
// PdfNumberStyle.numeric     → 1, 2, 3
// PdfNumberStyle.lowerLatin  → a, b, c
// PdfNumberStyle.upperLatin  → A, B, C
// PdfNumberStyle.lowerRoman  → i, ii, iii
// PdfNumberStyle.upperRoman  → I, II, III

PdfOrderedList alphaList = PdfOrderedList(
    items: PdfListItemCollection(['Apple', 'Banana', 'Cherry']),
    font: PdfStandardFont(PdfFontFamily.helvetica, 12),
    style: PdfNumberStyle.lowerRoman);
```

---

## Create Ordered List and Configure Marker

```dart
//Create a new ordered list.
PdfOrderedList(
    items: PdfListItemCollection(['Essential tools', 'Essential grid']),
    font: PdfStandardFont(PdfFontFamily.helvetica, 16,
        style: PdfFontStyle.italic))
  ..items[0].subList = PdfOrderedList(
      items: PdfListItemCollection(['PDF', 'DocIO']),
      marker: PdfOrderedMarker(
          style: PdfNumberStyle.numeric, delimiter: ',', suffix: ')')
          //Set the start number.
      ..startNumber = 2)
  ..draw(
      page: document.pages.add(), bounds: const Rect.fromLTWH(20, 20, 0, 0));
```

---

## Create Ordered List and layout event arguments.

```dart
PdfOrderedList(
    text: 'PDF\nXlsIO\nDocIO\nPPT',
    font: PdfStandardFont(PdfFontFamily.helvetica, 16,
        style: PdfFontStyle.italic),
    format: PdfStringFormat(lineSpacing: 20))
  //Begin item layout event.
  ..beginItemLayout = (Object sender, BeginItemLayoutArgs args) {
    args.item.text += '_Beginsave';
    PdfPage page = args.page;
  }
  //End item layout event.
  ..endItemLayout = (Object sender, EndItemLayoutArgs args) {
    args.page.graphics.drawRectangle(
        brush: PdfBrushes.red,
        bounds: const Rect.fromLTWH(400, 400, 100, 100));
    PdfListItem item = args.item;
  }
  ..draw(
      page: document.pages.add(), bounds: const Rect.fromLTWH(20, 20, 0, 0));
```

---

## Create Unordered List (Bullets)

```dart
//Create and draw an unordered list
PdfUnorderedList(
        text: 'Mammals\nReptiles\nBirds\nInsects\nAquatic Animals',
        style: PdfUnorderedMarkerStyle.disk,
        font: PdfStandardFont(PdfFontFamily.helvetica, 12),
        indent: 10,
        textIndent: 10,
        format: PdfStringFormat(lineSpacing: 10))
    .draw(page: document.pages.add(), bounds: Rect.fromLTWH(0, 10, 0, 0));
```

### Unordered Marker Styles

```dart
// PdfUnorderedMarkerStyle.disk     → filled circle bullet (●)
// PdfUnorderedMarkerStyle.circle   → hollow circle (○)
// PdfUnorderedMarkerStyle.square   → filled square (■)
// PdfUnorderedMarkerStyle.asterisk → asterisk (*)
// PdfUnorderedMarkerStyle.none     → no marker
```

---

## Create Unordered List Using PdfListItemCollection

```dart
PdfUnorderedList uList = PdfUnorderedList(
    items: PdfListItemCollection(['Flutter', 'Dart', 'Firebase']),
    style: PdfUnorderedMarkerStyle.disk,
    font: PdfStandardFont(PdfFontFamily.helvetica, 14),
    indent: 15,
    textIndent: 10,
    format: PdfStringFormat(lineSpacing: 8));

uList.draw(page: document.pages.add(), bounds: Rect.fromLTWH(10, 10, 0, 0));
```

---

## Create Nested Sub-Lists (Ordered)

```dart
PdfDocument document = PdfDocument();
PdfPage page = document.pages.add();
PdfFont font = PdfStandardFont(PdfFontFamily.helvetica, 14);
PdfStringFormat format = PdfStringFormat(lineSpacing: 10);

PdfListItemCollection items =
    PdfListItemCollection(['Mammals', 'Reptiles']);

PdfListItemCollection subItems1 = PdfListItemCollection([
  'Warm-blooded',
  'Have fur or hair',
  'Give birth to live young',
]);
PdfListItemCollection subItems2 = PdfListItemCollection([
  'Cold-blooded',
  'Body covered by scales',
  'Most lay eggs on land',
]);

//Create parent ordered list
PdfOrderedList oList =
    PdfOrderedList(items: items, font: font, format: format);

//Add sub-lists to each item
oList.items[0].subList = PdfOrderedList(
    items: subItems1, font: font, format: format, markerHierarchy: true);
oList.items[1].subList = PdfOrderedList(
    items: subItems2, font: font, format: format, markerHierarchy: true);

//Draw the list
oList.draw(
    page: page,
    bounds: Rect.fromLTWH(
        0, 10, page.getClientSize().width, page.getClientSize().height));

File('Output.pdf').writeAsBytes(await document.save());
document.dispose();
```

---

## Create Nested Sub-Lists (Unordered)

```dart
PdfFont font = PdfStandardFont(PdfFontFamily.helvetica, 14);
PdfStringFormat format = PdfStringFormat(lineSpacing: 10);

PdfListItemCollection items =
    PdfListItemCollection(['Fruits', 'Vegetables']);
PdfListItemCollection subItems1 =
    PdfListItemCollection(['Apple', 'Banana', 'Mango']);
PdfListItemCollection subItems2 =
    PdfListItemCollection(['Carrot', 'Broccoli', 'Spinach']);

//Create parent unordered list
PdfUnorderedList uList = PdfUnorderedList(
    items: items,
    font: font,
    format: format,
    style: PdfUnorderedMarkerStyle.disk);

//Add sub-lists
uList.items[0].subList = PdfUnorderedList(
    items: subItems1,
    font: font,
    format: format,
    style: PdfUnorderedMarkerStyle.circle);
uList.items[1].subList = PdfUnorderedList(
    items: subItems2,
    font: font,
    format: format,
    style: PdfUnorderedMarkerStyle.circle);

uList.draw(
    page: page,
    bounds: Rect.fromLTWH(
        0, 20, page.getClientSize().width, page.getClientSize().height));
```

---

## Notes

- List items using `text:` property use newline `\n` as delimiter.
- List items using `items:` property use `PdfListItemCollection`.
- `indent` controls the distance between the left edge and the marker.
- `textIndent` controls the distance between the marker and the item text.
- Use `PdfLayoutResult` when drawing lists sequentially to avoid content overlap.
