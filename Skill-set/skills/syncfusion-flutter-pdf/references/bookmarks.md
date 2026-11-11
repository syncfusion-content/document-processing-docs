# Bookmarks

> Add, insert, modify, and remove bookmarks in PDF documents for interactive navigation. Supports child bookmarks, color, text style, and destination.

---

## Add a Bookmark to a New PDF

```dart
//Add a bookmark at the document root level
PdfBookmark bookmark = document.bookmarks.add('Page 1');

//Set the destination page and position
bookmark.destination = PdfDestination(document.pages.add(), Offset(100, 100));

//Set text style (bold, italic, or both)
bookmark.textStyle = [PdfTextStyle.bold];

//Set bookmark color (RGB)
bookmark.color = PdfColor(255, 0, 0);
```

### Placeholders
- `'Page 1'` → Replace with your bookmark title
- `Offset(100, 100)` → Replace with the destination (x, y) coordinates on the page
- `PdfColor(255, 0, 0)` → Replace with desired RGB color

---

## Add Child Bookmarks

```dart
PdfPage page = document.pages.add();

//Create a root bookmark
PdfBookmark bookmark = document.bookmarks.add('Chapter 1');

//Insert a child bookmark at index 0
PdfBookmark childBookmark1 = bookmark.insert(0, 'Section 1.1');

//Add another child bookmark at the end
PdfBookmark childBookmark2 = bookmark.add('Section 1.2');

//Set text styles
childBookmark1.textStyle = [PdfTextStyle.bold, PdfTextStyle.italic];
childBookmark2.textStyle = [PdfTextStyle.italic];

//Set destinations
childBookmark1.destination = PdfDestination(page, Offset(100, 100));
childBookmark2.destination = PdfDestination(page, Offset(100, 400));

//Set colors
childBookmark1.color = PdfColor(0, 128, 0);
childBookmark2.color = PdfColor(0, 0, 255);
```

---

## Add Bookmarks to an Existing PDF

```dart
//Load an existing PDF document
PdfDocument document =
    PdfDocument(inputBytes: File('input.pdf').readAsBytesSync());

//Add a new bookmark to the existing document
PdfBookmark bookmark = document.bookmarks.add('Page 1');
bookmark.destination = PdfDestination(document.pages[0], Offset(20, 20));
bookmark.color = PdfColor(255, 0, 0);
bookmark.textStyle = [PdfTextStyle.bold];

//Set the bookmark action.
bookmark.action = PdfUriAction('http://www.google.com');

//Get if is expanded.
bool expand = bookmark.isExpanded;

File('output.pdf').writeAsBytes(await document.save());
document.dispose();
```

---

## Insert Bookmark at Specific Position in Existing PDF

```dart
//Insert a new bookmark at index 1 (second position)
PdfBookmark bookmark = document.bookmarks.insert(1, 'New Bookmark');
bookmark.destination = PdfDestination(document.pages[0], Offset(40, 40));
```

---

## Create a bookmark with a named destination in the outline. 

```dart
//Create a named destination.
PdfNamedDestination namedDestination = PdfNamedDestination('Page 1')
  ..destination = PdfDestination(document.pages.add(), Offset(100, 300));
//Add the named destination
document.namedDestinationCollection.add(namedDestination);
document.bookmarks.add('Page 1')
  //Set the named destination.
  ..namedDestination = namedDestination
  ..color = PdfColor(255, 0, 0);
```

---

## Get bookmarks count.

```dart
PdfDocument document = PdfDocument(inputBytes: inputBytes);
//get the bookmark count.
int count = document.bookmarks.count;
```

---

## Checks if the bookmark is in the collection.

```dart
PdfDocument document = PdfDocument(inputBytes: inputBytes);
//Add bookmarks to the document.
PdfBookmark bookmark = document.bookmarks.add('Page 1')
  ..destination = PdfDestination(document.pages.add(), Offset(20, 20));
//check whether the specified bookmark present in the collection
bool contains = document.bookmarks.contains(bookmark);
```

---

## Remove Bookmarks from Existing PDF

```dart
PdfBookmarkBase bookmarks = document.bookmarks;

//Remove by index
bookmarks.removeAt(1);

//Remove by bookmark title
bookmarks.remove('Page 1');

//Clear all the bookmarks.
document.bookmarks.clear();
```

---

## Modify Bookmarks in Existing PDF

```dart
PdfPage page = document.pages[1];
PdfBookmarkBase collection = document.bookmarks;

//Get the first bookmark and modify its properties
PdfBookmark bookmark = collection[0];
bookmark.color = PdfColor(0, 0, 255);
bookmark.destination = PdfDestination(page, Offset(20, 20));
bookmark.textStyle = [PdfTextStyle.italic];
bookmark.title = 'Updated Title';

//Add a child bookmark to the existing one
PdfBookmark childBookmark = bookmark.add('Child Section');
childBookmark.destination = PdfDestination(page, Offset(100, 100));
```

---

## Bookmark Properties Reference

| Property | Type | Description |
|---|---|---|
| `title` | `String` | The display text of the bookmark |
| `destination` | `PdfDestination` | The target page and position |
| `color` | `PdfColor` | Text color of the bookmark in the panel |
| `textStyle` | `List<PdfTextStyle>` | `bold`, `italic`, or both |

### Text Styles

```dart
bookmark.textStyle = [PdfTextStyle.bold];
bookmark.textStyle = [PdfTextStyle.italic];
bookmark.textStyle = [PdfTextStyle.bold, PdfTextStyle.italic];
```

### Destination

```dart
//Navigate to a specific position on a page
PdfDestination dest = PdfDestination(page, Offset(x, y));
bookmark.destination = dest;
```
