# SmartArt

> Create, modify, and manage SmartArt diagrams — add nodes, change appearance, remove SmartArt, configure layouts.

---
## Required common usings

```csharp
using Syncfusion.DocIO;
using Syncfusion.DocIO.DLS;
using Syncfusion.OfficeChart;
```

## Required usings for Windows-Specific

```csharp
using System;
using System.IO;
```

## Create SmartArt

Add SmartArt diagrams with various layouts (List, Process, Cycle, Hierarchy, etc.).

### Minimal Code - Vertical Chevron List

#### Common for Cross-Platform and Windows-Specific
```csharp
var doc = new WordDocument();
doc.EnsureMinimal();
var para = doc.LastParagraph;

// Create SmartArt with Vertical Chevron List layout (432x252)
WSmartArt smartArt = para.AppendSmartArt(OfficeSmartArtType.VerticalChevronList, 432, 252);

// Configure nodes
smartArt.Nodes[0].TextBody.Text = "Planning";
smartArt.Nodes[1].TextBody.Text = "Execution";
smartArt.Nodes[2].TextBody.Text = "Review";

// Save document
var stream = new FileStream("output.docx", FileMode.Create, FileAccess.Write);
doc.Save(stream, FormatType.Docx);
stream.Close();
doc.Close();
```

### Other Layout Types
```csharp
OfficeSmartArtType.VerticalChevronList   // Vertical chevron list (steps/phases)
OfficeSmartArtType.SegmentedProcess      // Process workflow
OfficeSmartArtType.BlockCycle            // Continuous cycle
OfficeSmartArtType.Hierarchy             // Organization chart
OfficeSmartArtType.CounterBalanceArrows  // Relationship/balance
OfficeSmartArtType.GridMatrix            // Matrix layout
OfficeSmartArtType.BasicPyramid          // Pyramid/layered
OfficeSmartArtType.PictureStrips         // Picture-based layout
```

### Placeholders
- `OfficeSmartArtType.VerticalChevronList` → Replace with `"{smartart-type}"`
- `"Planning"`, `"Execution"`, `"Review"` → Replace with `"{node-text}"`
- `"output.docx"` → Replace with `"{output-file-path}"`

---

## Add Child Nodes

Add child nodes and populate data hierarchically.
### Common for Cross-Platform and Windows-Specific
```csharp
var doc = new WordDocument();
doc.EnsureMinimal();
var para = doc.LastParagraph;

WSmartArt smartArt = para.AppendSmartArt(OfficeSmartArtType.VerticalChevronList, 432, 252);
IOfficeSmartArtNode parentNode = smartArt.Nodes[0];
parentNode.TextBody.Text = "Project Phase";

// Add child nodes (if supported by layout)
if (parentNode.ChildNodes.Count > 0)
{
    parentNode.ChildNodes[0].TextBody.Text = "Sub-task 1";
    parentNode.ChildNodes[1].TextBody.Text = "Sub-task 2";
}

var stream = new FileStream("output.docx", FileMode.Create, FileAccess.Write);
doc.Save(stream, FormatType.Docx);
stream.Close();
doc.Close();
```

### Placeholders
- `"Project Phase"`, `"Sub-task 1"` → Replace with `"{text-content}"`
- `output.docx` → Replace with `"{output-file-path}"`

---

## Modify SmartArt Appearance

Change colors, fill, and text formatting.
### Common for Cross-Platform and Windows-Specific
```csharp
var stream = new FileStream("document.docx", FileMode.Open, FileAccess.Read);
var doc = new WordDocument(stream, FormatType.Docx);

var para = doc.LastParagraph;
WSmartArt smartArt = para.ChildEntities[0] as WSmartArt;

// Set background color
smartArt.Background.FillType = OfficeShapeFillType.Solid;
smartArt.Background.SolidFill.Color = Color.FromArgb(255, 242, 169, 132);

// Modify first node
IOfficeSmartArtNode node = smartArt.Nodes[0];
node.TextBody.Text = "Updated Text";
node.Shapes[0].Fill.SolidFill.Color = Color.FromArgb(255, 160, 43, 147);
node.Shapes[0].LineFormat.Fill.SolidFill.Color = Color.FromArgb(255, 160, 43, 147);

var outputStream = new FileStream("output.docx", FileMode.Create, FileAccess.Write);
doc.Save(outputStream, FormatType.Docx);
stream.Close();
outputStream.Close();
doc.Close();
```

### Placeholders
- `"document.docx"` → Replace with `"{input-file-path}"`
- `Color.FromArgb(255, 242, 169, 132)` → Replace with desired `{rgb-color}`
- `"Updated Text"` → Replace with `"{new-text}"`
- `"output.docx"` → Replace with `"{output-file-path}"`

---

## Remove SmartArt

Delete SmartArt from a document.
### Common for Cross-Platform and Windows-Specific
```csharp
var stream = new FileStream("document.docx", FileMode.Open, FileAccess.Read);
var doc = new WordDocument(stream, FormatType.Docx);

var para = doc.LastParagraph;

// Remove all SmartArt objects
for (int i = para.ChildEntities.Count - 1; i >= 0; i--)
{
    if (para.ChildEntities[i] is WSmartArt)
    {
        para.Items.RemoveAt(i);
    }
}

var outputStream = new FileStream("output.docx", FileMode.Create, FileAccess.Write);
doc.Save(outputStream, FormatType.Docx);
stream.Close();
outputStream.Close();
doc.Close();
```

### Placeholders
- `"document.docx"` → Replace with `"{input-file-path}"`
- `"output.docx"` → Replace with `"{output-file-path}"`

---

## Add New Node to SmartArt

Insert additional nodes into existing SmartArt.
### Common for Cross-Platform and Windows-Specific
```csharp
var stream = new FileStream("document.docx", FileMode.Open, FileAccess.Read);
var doc = new WordDocument(stream, FormatType.Docx);

WSmartArt smartArt = doc.LastParagraph.ChildEntities[0] as WSmartArt;

// Add a new node to SmartArt
IOfficeSmartArtNode newNode = smartArt.Nodes.Add();
newNode.TextBody.AddParagraph("New Node Added");

var outputStream = new FileStream("output.docx", FileMode.Create, FileAccess.Write);
doc.Save(outputStream, FormatType.Docx);
stream.Close();
outputStream.Close();
doc.Close();
```

### Placeholders
- `"document.docx"` → Replace with `"{input-file-path}"`
- `"New Node Added"` → Replace with `"{new-node-text}"`
- `"output.docx"` → Replace with `"{output-file-path}"`

---

## Add Nested Level Nodes

Create multi-level node hierarchy.
### Common for Cross-Platform and Windows-Specific
```csharp
var stream = new FileStream("document.docx", FileMode.Open, FileAccess.Read);
var doc = new WordDocument(stream, FormatType.Docx);

WSmartArt smartArt = doc.LastParagraph.ChildEntities[0] as WSmartArt;

// Add main node
IOfficeSmartArtNode mainNode = smartArt.Nodes.Add();
mainNode.TextBody.AddParagraph("Main Item");

// Add child node
IOfficeSmartArtNode childNode = mainNode.ChildNodes.Add();
childNode.TextBody.AddParagraph("Sub Item");

var outputStream = new FileStream("output.docx", FileMode.Create, FileAccess.Write);
doc.Save(outputStream, FormatType.Docx);
stream.Close();
outputStream.Close();
doc.Close();
```

### Placeholders
- `"document.docx"` → Replace with `"{input-file-path}"`
- `"Main Item"`, `"Sub Item"` → Replace with `"{text-content}"`
- `"output.docx"` → Replace with `"{output-file-path}"`

---

## Iterate and Modify Nodes

Access and update all nodes in SmartArt.
### Common for Cross-Platform and Windows-Specific
```csharp
var stream = new FileStream("document.docx", FileMode.Open, FileAccess.Read);
var doc = new WordDocument(stream, FormatType.Docx);

WSmartArt smartArt = doc.LastParagraph.ChildEntities[0] as WSmartArt;

// Iterate through all nodes
foreach (IOfficeSmartArtNode node in smartArt.Nodes)
{
    // Check and modify specific nodes
    if (node.TextBody.Text == "OldText")
    {
        node.TextBody.Paragraphs[0].TextParts[0].Text = "NewText";
    }
}

var outputStream = new FileStream("output.docx", FileMode.Create, FileAccess.Write);
doc.Save(outputStream, FormatType.Docx);
stream.Close();
outputStream.Close();
doc.Close();
```

### Placeholders
- `"document.docx"` → Replace with `"{input-file-path}"`
- `"OldText"`, `"NewText"` → Replace with `"{search-text}"`, `"{replacement-text}"`
- `"output.docx"` → Replace with `"{output-file-path}"`

---

## Remove Node from SmartArt

Delete a specific node by index.
### Common for Cross-Platform and Windows-Specific
```csharp
var stream = new FileStream("document.docx", FileMode.Open, FileAccess.Read);
var doc = new WordDocument(stream, FormatType.Docx);

WSmartArt smartArt = doc.LastParagraph.ChildEntities[0] as WSmartArt;

// Remove node at index 1
if (smartArt.Nodes.Count > 1)
{
    smartArt.Nodes.RemoveAt(1);
}

var outputStream = new FileStream("output.docx", FileMode.Create, FileAccess.Write);
doc.Save(outputStream, FormatType.Docx);
stream.Close();
outputStream.Close();
doc.Close();
```

### Placeholders
- `"document.docx"` → Replace with `"{input-file-path}"`
- `1` → Replace with `"{node-index}"`
- `"output.docx"` → Replace with `"{output-file-path}"`

---

## Assistant Nodes

Convert between assistant and normal nodes (for organizational charts).
### Common for Cross-Platform and Windows-Specific
```csharp
var doc = new WordDocument();
doc.EnsureMinimal();

// Create Organization Chart SmartArt
WSmartArt smartArt = doc.LastParagraph.AppendSmartArt(OfficeSmartArtType.OrganizationChart, 640, 426);

// Traverse nodes and modify assistant status
foreach (IOfficeSmartArtNode node in smartArt.Nodes)
{
    foreach (IOfficeSmartArtNode childNode in node.ChildNodes)
    {
        // Convert assistant node to normal
        if (childNode.IsAssistant)
        {
            childNode.IsAssistant = false;
        }
    }
}

var stream = new FileStream("output.docx", FileMode.Create, FileAccess.Write);
doc.Save(stream, FormatType.Docx);
stream.Close();
doc.Close();
```

### Placeholders
- `OfficeSmartArtType.OrganizationChart` → Use for hierarchical layouts
- `"output.docx"` → Replace with `"{output-file-path}"`
