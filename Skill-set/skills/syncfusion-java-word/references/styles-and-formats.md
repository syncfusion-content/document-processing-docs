# Content Elements

> All block & inline content — paragraphs, headings, bullet lists, and numbered lists.

---

## Required common usings

```java
import com.syncfusion.docio.*;
```

## Add Paragraph

### Minimal Code

```java
WParagraph para = (WParagraph) section.addParagraph();
para.appendText("Your text here");
```

### With Formatting

```java
WParagraph para = (WParagraph) section.addParagraph();
para.appendText("Your text here");
para.getParagraphFormat().setAfterSpacing(6f);
para.getParagraphFormat().setBeforeSpacing(6f);

// Text formatting
IWTextRange text = para.appendText("Bold text");
text.getCharacterFormat().setBold(true);
text.getCharacterFormat().setFontSize(12f);
```

### Placeholders
- `"Your text here"` → Replace with `"{paragraph-text}"`

---

## Add Title / Headings

### Minimal Code

```java
WParagraph titlePara = (WParagraph) section.addParagraph();
titlePara.appendText("Document Title");
titlePara.applyStyle(BuiltinStyle.Heading1);
section.addParagraph(); // Spacing
```

### Built-in Styles

```java
// Heading levels
titlePara.applyStyle(BuiltinStyle.Heading1); // Main title
titlePara.applyStyle(BuiltinStyle.Heading2); // Section heading
titlePara.applyStyle(BuiltinStyle.Heading3); // Subsection heading
```

### Placeholders
- `"Document Title"` → Replace with `"{title}"`

---

## Add Bullets

### Minimal Code (Simple)

```java
WParagraph bullet = (WParagraph) section.addParagraph();
bullet.appendText("• Bullet point text");
```

### With List Style

```java
WParagraph bullet = (WParagraph) section.addParagraph();
bullet.appendText("Bullet point text");
bullet.getListFormat().applyDefBulletStyle();
```

### Multiple Bullets

```java
String[] items = { "First item", "Second item", "Third item" };
for (String item : items) {
    WParagraph bullet = (WParagraph) section.addParagraph();
    bullet.appendText(item);
    bullet.getListFormat().applyDefBulletStyle();
}
```

### Placeholders
- `"Bullet point text"` → Replace with `"{bullet-text}"`

---

## Add Numbered List

### Minimal Code

```java
WParagraph listItem = (WParagraph) section.addParagraph();
listItem.appendText("List item text");
listItem.getListFormat().applyDefNumberedStyle();
```

### Multiple Items

```java
String[] items = { "First step", "Second step", "Third step" };
for (String item : items) {
    WParagraph listItem = (WParagraph) section.addParagraph();
    listItem.appendText(item);
    listItem.getListFormat().applyDefNumberedStyle();
}
```

### Custom List Level

```java
WParagraph listItem = (WParagraph) section.addParagraph();
listItem.appendText("Main item");
listItem.getListFormat().applyDefNumberedStyle();

WParagraph subItem = (WParagraph) section.addParagraph();
subItem.appendText("Sub item");
subItem.getListFormat().applyDefNumberedStyle();
subItem.getListFormat().increaseIndentLevel(); // Indent level

subItem = (WParagraph)section.addParagraph();
subItem.appendText("Sub item 2");
subItem.getListFormat().continueListNumbering(); // Continues the list numbering from the previous list.
```

### Placeholders
- `"List item text"` → Replace with `"{list-item}"`
