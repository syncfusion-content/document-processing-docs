# Sections

> Organize and manage slides using sections — add, insert, move, clone, and remove sections in a PowerPoint presentation.

---
## Required Usings

```csharp
using Syncfusion.Presentation;
```
---
## Add New Slide to a Section

### Minimal Code
```csharp
// Create a new presentation
ISection section = pptxDoc.Sections.Add();
// Set a name for the section
section.Name = "SectionDemo";
// Add a blank slide to the section
ISlide slide = section.AddSlide(SlideLayoutType.Blank);
// Add content to the slide
```
### Placeholders
- `"SectionDemo"` → Replace with `"{section-name}"`
- `SlideLayoutType.Blank` → Replace with the desired `SlideLayoutType`
- `"Section.pptx"` → Replace with `"{output-file-path}"`
---

## Add Existing Slide to a Section

### Minimal Code
```csharp
// Open an existing presentation
// Add a new section
pptxDoc.Sections.Add();
// Move the first slide (index 0) into the new section (index 0)
pptxDoc.Slides[0].MoveToSection(0);
// Save
```
### Placeholders
- `pptxDoc.Slides[0]` → Replace with the desired slide index
- `MoveToSection(0)` → Replace `0` with the target section index
---

## Insert a Section at a Specific Position

### Minimal Code
```csharp
// Open an existing presentation
// Create a new section
ISection section = pptxDoc.Sections.Add();
section.Name = "InsertedSection";
// Insert it at the second position (index 1)
pptxDoc.Sections.Insert(1, section);
// Remove the duplicate appended section at the end
pptxDoc.Sections.RemoveAt(pptxDoc.Sections.Count - 1);
// Save
```
### Placeholders
- `"InsertedSection"` → Replace with `"{section-name}"`
- `Insert(1, section)` → Replace `1` with the desired insertion index
- `"Section.pptx"` → Replace with `"{output-file-path}"`
---

## Move a Section to a Different Position

### Minimal Code
```csharp
// Open an existing presentation
// Move the section at index 2 to position 3
pptxDoc.Sections[2].Move(3);
// Save
```
### Placeholders
- `pptxDoc.Sections[2]` → Replace `2` with the source section index
- `Move(3)` → Replace `3` with the target position index
---

## Move a Slide Between Sections

### Minimal Code
```csharp
// Open an existing presentation
// Get the first slide of the second section
ISlide slide = pptxDoc.Sections[1].Slides[0];
// Move the slide to the first section (index 0)
slide.MoveToSection(0);
// Save
```
### Placeholders
- `pptxDoc.Sections[1].Slides[0]` → Replace indices with source section and slide index
- `MoveToSection(0)` → Replace `0` with the target section index
---

## Clone and Merge Section Slides

### Minimal Code
```csharp
// Open a source presentation
// Clone all slides from the third section (index 2)
ISlides slides = pptxDoc.Sections[2].Clone();
// Create (or open) a destination presentation
pptxDoc = Presentation.Create();
// Add the cloned slides to the destination
foreach (ISlide slide in slides)
    pptxDoc.Slides.Add(slide);
// Save
```
### Placeholders
- `pptxDoc.Sections[2]` → Replace `2` with the source section index
- `Presentation.Create()` → Can be replaced with `Presentation.Open(...)` to merge into an existing file
---

## Remove a Specific Section

### Minimal Code
```csharp
// Open an existing presentation
// Remove the second section (index 1)
pptxDoc.Sections.Remove(pptxDoc.Sections[1]);
// Save
```
### Placeholders
- `pptxDoc.Sections[1]` → Replace `1` with the index of the section to remove
---

## Remove All Sections

### Minimal Code
```csharp
// Open an existing presentation
// Clear all sections
pptxDoc.Sections.Clear();
// Save
```
### Placeholders
- `"Sections.pptx"` → Replace with `"{output-file-path}"`
````