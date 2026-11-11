# Footnotes & Endnotes

> Footnotes and endnotes — add footnotes, add endnotes, set positions, configure separators, modify content, and remove footnotes/endnotes.

---

## Required common usings

```java
import com.syncfusion.docio.*;
import java.io.FileInputStream;
import java.io.FileOutputStream;
```

## Add Footnotes

### Insert Footnote with Text

```java
WordDocument document = new WordDocument();
IWSection section = document.addSection();

IWParagraph paragraph = section.addParagraph();
paragraph.appendText("Working with footnotes");
paragraph.applyStyle(BuiltinStyle.Heading1);

paragraph = section.addParagraph();
WFootnote footnote = (WFootnote) paragraph.appendFootnote(FootnoteType.Footnote);
footnote.getMarkerCharacterFormat().setSubSuperScript(SubSuperScript.SuperScript);
paragraph.appendText("Sample content for footnotes").getCharacterFormat().setBold(true);

IWParagraph footnotePara = footnote.getTextBody().addParagraph();
footnotePara.appendText("Footnote content at bottom of page.");
```

---

## Add Endnotes

### Insert Endnote with Text

```java
WordDocument document = new WordDocument();
IWSection section = document.addSection();

IWParagraph paragraph = section.addParagraph();
paragraph.appendText("Working with endnotes");
paragraph.applyStyle(BuiltinStyle.Heading1);

paragraph = section.addParagraph();
WFootnote endnote = (WFootnote) paragraph.appendFootnote(FootnoteType.Endnote);
endnote.getMarkerCharacterFormat().setSubSuperScript(SubSuperScript.SuperScript);
paragraph.appendText("Sample content for endnotes").getCharacterFormat().setBold(true);

IWParagraph endnotePara = endnote.getTextBody().addParagraph();
endnotePara.appendText("Endnote content at end of document or section.");
```

---

## Set Positions & Numbering

### Configure Position and Numbering Format

```java
// Set footnote position and numbering
document.setFootnoteNumberFormat(FootEndNoteNumberFormat.Arabic);
document.setFootnotePosition(FootnotePosition.PrintImmediatelyBeneathText);

// Set endnote position and numbering
document.setEndnoteNumberFormat(FootEndNoteNumberFormat.LowerCaseRoman);
document.setEndnotePosition(EndnotePosition.DisplayEndOfSection);

// Then add notes to document
IWParagraph para = section.addParagraph();
WFootnote footnote = (WFootnote) para.appendFootnote(FootnoteType.Footnote);
footnote.getTextBody().addParagraph().appendText("Footnote content");
```

### Position & Numbering Options
| Type | Option | Value |
|------|--------|-------|
| **Footnote Position** | PrintAtBottomOfPage | At bottom of page (default) |
| | PrintImmediatelyBeneathText | Immediately beneath text |
| **Endnote Position** | DisplayAtEndOfDocument | At end of document |
| | DisplayEndOfSection | At end of section |
| **Number Format** | Arabic | 1, 2, 3... |
| | UpperCaseRoman | I, II, III... |
| | LowerCaseRoman | i, ii, iii... |
| | UpperCaseLetter | A, B, C... |
| | LowerCaseLetter | a, b, c... |

---

## Footnote & Endnote Separators

### Modify Separators

```java
// Customize footnote separator
WTextBody footnoteSep = document.getFootnotes().getSeparator();
footnoteSep.getParagraphs().get(0).setText("--- Footnote Separator ---");

WTextBody endnoteSep = document.getEndnotes().getSeparator();
endnoteSep.getParagraphs().get(0).setText("--- Endnote Separator ---");

// Separator types: Separator (default line), Continuation Separator, Continuation Notice
```

---

## Modify Content

### Modify Existing Footnote or Endnote

```java
// Open document (see Open and Save Document section)
WordDocument document = new WordDocument("input.docx");

// Access footnote in paragraph
WParagraph paragraph = (WParagraph) document.getSections().get(0).getParagraphs().get(6);
WFootnote footnote = (WFootnote) paragraph.getChildEntities().get(0);

// Clear and update content
footnote.getTextBody().getChildEntities().clear();
WParagraph notePara = (WParagraph) footnote.getTextBody().addParagraph();
footnote.getMarkerCharacterFormat().setSubSuperScript(SubSuperScript.SuperScript);
notePara.appendText("Modified footnote text.");

// Save (see Open and Save Document section)
```

---

## Remove Footnotes & Endnotes

### Remove Helper Method

```java
private static void removeFootnoteEndnote(WTextBody textBody) throws Exception {
    for (int i = 0; i < textBody.getChildEntities().getCount(); i++) {
        IEntity entity = textBody.getChildEntities().get(i);

        if (entity.getEntityType() == EntityType.Paragraph) {
            WParagraph para = (WParagraph) entity;
            for (int j = para.getChildEntities().getCount() - 1; j >= 0; j--) {
                if (para.getChildEntities().get(j) instanceof WFootnote) {
                    para.getChildEntities().removeAt(j);
                }
            }
        } else if (entity.getEntityType() == EntityType.Table) {
            WTable table = (WTable) entity;
            for (int r = 0; r < table.getRows().getCount(); r++) {
                WTableRow row = table.getRows().get(r);
                for (int c = 0; c < row.getCells().getCount(); c++) {
                    WTableCell cell = row.getCells().get(c);
                    removeFootnoteEndnote(cell);
                }
            }
        } else if (entity.getEntityType() == EntityType.BlockContentControl) {
            removeFootnoteEndnote(((BlockContentControl) entity).getTextBody());
        }
    }
}
```

### Remove from Document

```java
// Open document (see Open and Save Document section)
WordDocument document = new WordDocument("input.docx");

// Remove from all sections
for (int i = 0; i < document.getSections().getCount(); i++) {
    WSection section = document.getSections().get(i);
    removeFootnoteEndnote(section.getBody());
}
// Save (see Open and Save Document section)
```

---

## Practical Example: Document with Both Notes

### Complete Example with Footnotes and Endnotes

```java
WordDocument document = new WordDocument();
IWSection section = document.addSection();

document.setFootnoteNumberFormat(FootEndNoteNumberFormat.Arabic);
document.setEndnoteNumberFormat(FootEndNoteNumberFormat.LowerCaseRoman);
document.setFootnotePosition(FootnotePosition.PrintAtBottomOfPage);
document.setEndnotePosition(EndnotePosition.DisplayEndOfDocument);

IWParagraph title = section.addParagraph();
title.appendText("Document with Notes");
title.applyStyle(BuiltinStyle.Heading1);

// Add text with footnote
IWParagraph para1 = section.addParagraph();
para1.appendText("Sample text");
WFootnote footnote = (WFootnote) para1.appendFootnote(FootnoteType.Footnote);
footnote.getMarkerCharacterFormat().setSubSuperScript(SubSuperScript.SuperScript);
para1.appendText(" with footnote.");
footnote.getTextBody().addParagraph().appendText("Footnote content");

// Add text with endnote
IWParagraph para2 = section.addParagraph();
para2.appendText("Another text");
WFootnote endnote = (WFootnote) para2.appendFootnote(FootnoteType.Endnote);
endnote.getMarkerCharacterFormat().setSubSuperScript(SubSuperScript.SuperScript);
para2.appendText(" with endnote.");
endnote.getTextBody().addParagraph().appendText("Endnote content");

// Customize separator
document.getFootnotes().getSeparator().getParagraphs().get(0).setText("─────────────");
```

---

## Placeholders
- `"{input-document}"` → Replace with `"input.docx"` or file path
- `"{output-filename}"` → Replace with `"output.docx"` or desired file path
- `"Sample content for footnotes"` → Replace with actual text
- `"Footnote content"` → Replace with actual footnote text
- `"--- Footnote Separator ---"` → Replace with desired separator text
- Paragraph indices (e.g., `[6]`, `[1]`) depend on actual document structure
