# Hyperlinks

Example showing adding a URL and mailto hyperlink.

---

> **Placeholders:**
> - `{sheet}` → Worksheet instance variable name
> - `{cell-range}` → Cell range for hyperlink (e.g., `'A1'`)
> - `{hyperlink-type}` → Type of hyperlink (e.g., `HyperlinkType.url`, `HyperlinkType.file`)
> - `{url-value}` → URL or file path (e.g., `'http://example.com'`, `'C:\\file.txt'`)
> - `{display-text}` → Visible text for hyperlink (e.g., `'Click Here'`)

---

```dart
final Workbook workbook = Workbook();
final Worksheet sheet = workbook.worksheets[0];

final Hyperlink hyperlink = sheet.hyperlinks.add(
  sheet.getRangeByName('A1'),
  HyperlinkType.url,
  'http://www.syncfusion.com',
);
hyperlink.textToDisplay = 'Syncfusion';
hyperlink.screenTip = 'Visit Syncfusion';

final Hyperlink emailLink = sheet.hyperlinks.add(
  sheet.getRangeByName('A3'),
  HyperlinkType.url,
  'mailto:support@syncfusion.com',
);
emailLink.textToDisplay = 'Email Support';
```

### Placeholders
- `'A1'`, `'A3'` → Replace with `'{cell-range}'` (target cell)
- `'http://www.syncfusion.com'` → Replace with `'{url-value}'` (web URL)
- `'mailto:support@syncfusion.com'` → Replace with `'mailto:{email-address}'` (email address)
- `'Syncfusion'`, `'Email Support'` → Replace with `'{display-text}'` (visible link text)

---

Use `sheet.hyperlinks.add()` with `HyperlinkType.url` for web or mailto links.
