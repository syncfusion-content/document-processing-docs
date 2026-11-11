# Footnotes & Endnotes

> Footnotes and endnotes — add footnotes, add endnotes, set positions, configure separators, modify content, and remove footnotes/endnotes.

---

## Required common usings

```csharp
using Syncfusion.DocIO;
using Syncfusion.DocIO.DLS;
```

## Required usings for Windows-Specific

```csharp
using System;
using System.IO;
```

## Add Footnotes

### Insert Footnote with Text

#### Common for Cross-Platform and Windows-Specific
```csharp
WordDocument document = new WordDocument();
IWSection section = document.AddSection();

IWParagraph paragraph = section.AddParagraph();
paragraph.AppendText("Working with footnotes");
paragraph.ApplyStyle(BuiltinStyle.Heading1);

paragraph = section.AddParagraph();
WFootnote footnote = (WFootnote)paragraph.AppendFootnote(FootnoteType.Footnote);
footnote.MarkerCharacterFormat.SubSuperScript = SubSuperScript.SuperScript;
paragraph.AppendText("Sample content for footnotes").CharacterFormat.Bold = true;

IWParagraph footnotePara = footnote.TextBody.AddParagraph();
footnotePara.AppendText("Footnote content at bottom of page.");
```

---

## Add Endnotes

### Insert Endnote with Text

#### Common for Cross-Platform and Windows-Specific
```csharp
WordDocument document = new WordDocument();
IWSection section = document.AddSection();

IWParagraph paragraph = section.AddParagraph();
paragraph.AppendText("Working with endnotes");
paragraph.ApplyStyle(BuiltinStyle.Heading1);

paragraph = section.AddParagraph();
WFootnote endnote = (WFootnote)paragraph.AppendFootnote(FootnoteType.Endnote);
endnote.MarkerCharacterFormat.SubSuperScript = SubSuperScript.SuperScript;
paragraph.AppendText("Sample content for endnotes").CharacterFormat.Bold = true;

IWParagraph endnotePara = endnote.TextBody.AddParagraph();
endnotePara.AppendText("Endnote content at end of document or section.");
```

---

## Set Positions & Numbering

### Configure Position and Numbering Format

#### Common for Cross-Platform and Windows-Specific
```csharp
// Set footnote position and numbering
document.FootnoteNumberFormat = FootEndNoteNumberFormat.Arabic;
document.FootnotePosition = FootnotePosition.PrintImmediatelyBeneathText;

// Set endnote position and numbering
document.EndnoteNumberFormat = FootEndNoteNumberFormat.LowerCaseRoman;
document.EndnotePosition = EndnotePosition.DisplayEndOfSection;

// Then add notes to document
IWParagraph para = section.AddParagraph();
WFootnote footnote = (WFootnote)para.AppendFootnote(FootnoteType.Footnote);
footnote.TextBody.AddParagraph().AppendText("Footnote content");
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

#### Common for Cross-Platform and Windows-Specific
```csharp
// Customize footnote separator
WTextBody footnoteSep = document.Footnotes.Separator;
footnoteSep.Paragraphs[0].Text = "--- Footnote Separator ---";

// Customize endnote separator
WTextBody endnoteSep = document.Endnotes.Separator;
endnoteSep.Paragraphs[0].Text = "--- Endnote Separator ---";

// Separator types: Separator (default line), Continuation Separator, Continuation Notice
```

---

## Modify Content

### Modify Existing Footnote or Endnote

#### Common for Cross-Platform and Windows-Specific
```csharp
// Open document (see Open and Save Document section)
WordDocument document = new WordDocument("input.docx"); // or FileStream for cross-platform

// Access footnote in paragraph
WParagraph paragraph = document.Sections[0].Paragraphs[6] as WParagraph;
WFootnote footnote = paragraph.ChildEntities[0] as WFootnote;

// Clear and update content
footnote.TextBody.ChildEntities.Clear();
WParagraph notePara = footnote.TextBody.AddParagraph() as WParagraph;
footnote.MarkerCharacterFormat.SubSuperScript = SubSuperScript.SuperScript;
notePara.AppendText("Modified footnote text.");

// Save (see Open and Save Document section)
```

---

## Remove Footnotes & Endnotes

### Remove Helper Method

#### Common for Cross-Platform and Windows-Specific
```csharp
private static void RemoveFootnoteEndnote(WTextBody textBody)
{
    for (int i = 0; i < textBody.ChildEntities.Count; i++)
    {
        IEntity entity = textBody.ChildEntities[i];
        
        if (entity.EntityType == EntityType.Paragraph)
        {
            WParagraph para = entity as WParagraph;
            for (int j = para.ChildEntities.Count - 1; j >= 0; j--)
                if (para.ChildEntities[j] is WFootnote)
                    para.ChildEntities.RemoveAt(j);
        }
        else if (entity.EntityType == EntityType.Table)
        {
            foreach (WTableRow row in (entity as WTable).Rows)
                foreach (WTableCell cell in row.Cells)
                    RemoveFootnoteEndnote(cell);
        }
        else if (entity.EntityType == EntityType.BlockContentControl)
            RemoveFootnoteEndnote((entity as BlockContentControl).TextBody);
    }
}
```

### Remove from Document

#### Common for Cross-Platform and Windows-Specific
```csharp
// Open document (see Open and Save Document section)
WordDocument document = new WordDocument("input.docx");

// Remove from all sections
foreach (WSection section in document.Sections)
    RemoveFootnoteEndnote(section.Body);

// Save (see Open and Save Document section)
```

---

## Practical Example: Document with Both Notes

### Complete Example with Footnotes and Endnotes

#### Common for Cross-Platform and Windows-Specific
```csharp
WordDocument document = new WordDocument();
IWSection section = document.AddSection();

document.FootnoteNumberFormat = FootEndNoteNumberFormat.Arabic;
document.EndnoteNumberFormat = FootEndNoteNumberFormat.LowerCaseRoman;
document.FootnotePosition = FootnotePosition.PrintAtBottomOfPage;
document.EndnotePosition = EndnotePosition.DisplayEndOfDocument;

IWParagraph title = section.AddParagraph();
title.AppendText("Document with Notes");
title.ApplyStyle(BuiltinStyle.Heading1);

// Add text with footnote
IWParagraph para1 = section.AddParagraph();
para1.AppendText("Sample text");
WFootnote footnote = (WFootnote)para1.AppendFootnote(FootnoteType.Footnote);
footnote.MarkerCharacterFormat.SubSuperScript = SubSuperScript.SuperScript;
para1.AppendText(" with footnote.");
footnote.TextBody.AddParagraph().AppendText("Footnote content");

// Add text with endnote
IWParagraph para2 = section.AddParagraph();
para2.AppendText("Another text");
WFootnote endnote = (WFootnote)para2.AppendFootnote(FootnoteType.Endnote);
endnote.MarkerCharacterFormat.SubSuperScript = SubSuperScript.SuperScript;
para2.AppendText(" with endnote.");
endnote.TextBody.AddParagraph().AppendText("Endnote content");

// Customize separator
document.Footnotes.Separator.Paragraphs[0].Text = "─────────────";
```

---

## Placeholders
- `"{input-document}"` → Replace with `"input.docx"` or file path
- `"{output-filename}"` → Replace with `"output.docx"` or desired file path
- `"Sample content for footnotes"` → Replace with actual text
- `"Footnote content"` → Replace with actual footnote text
- `"--- Footnote Separator ---"` → Replace with desired separator text
- Paragraph indices (e.g., `[6]`, `[1]`) depend on actual document structure
