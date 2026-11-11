# SmartArt

> Create and customize SmartArt diagrams in PowerPoint presentations. Add, modify, and remove nodes; apply formatting; and manage hierarchical structures with visual representations.

---
## Required Usings

```csharp
using Syncfusion.Presentation;
```

---
## Adding SmartArt to a Slide

### Minimal Code

```csharp

// Add a SmartArt to the slide at the specified size and position
ISmartArt smartArt = slide.Shapes.AddSmartArt(SmartArtType.BasicBlockList, 0, 0, 640, 426);

```

### Placeholders

- `SmartArtType.BasicBlockList` → Replace with desired SmartArt type (e.g., `SmartArtType.OrganizationChart`, `SmartArtType.BasicProcess`)
- `0, 0, 640, 426` → Replace with position (x, y) and size (width, height) values
---

## Adding a Node to SmartArt

### Minimal Code

```csharp
// Add a SmartArt to the slide at the specified size and position
ISmartArt smartArt = slide.Shapes.AddSmartArt(SmartArtType.AlternatingHexagons, 0, 0, 640, 426);

// Add a new node to the SmartArt
ISmartArtNode newNode = smartArt.Nodes.Add();

// Set the text to the newly added node
newNode.TextBody.AddParagraph("{node-text}");
```

### Placeholders

- `"{node-text}"` → Replace with the text content for the node (e.g., `"New main node added"`)
- `SmartArtType.AlternatingHexagons` → Replace with desired SmartArt type
- `0, 0, 640, 426` → Replace with position and size values

---

## Adding Nested Level Nodes

### Minimal Code

```csharp
// Add a SmartArt to the slide at the specified size and position
ISmartArt smartArt = slide.Shapes.AddSmartArt(SmartArtType.AlternatingHexagons, 0, 0, 640, 426);

// Add a new node to the SmartArt
ISmartArtNode newNode = smartArt.Nodes.Add();

// Add a child node to the SmartArt node
ISmartArtNode childNode = newNode.ChildNodes.Add();

// Set text to the newly added child node
childNode.TextBody.AddParagraph("{child-node-text}");

```

### Placeholders

- `"{child-node-text}"` → Replace with the text content for the child node (e.g., `"Child node of the existing node"`)
- Multiple levels can be created by chaining `ChildNodes.Add()` calls
- Maximum nested levels vary based on SmartArt type

---

## Modifying SmartArt Appearance

### Minimal Code

```csharp

// Get the SmartArt from slide
ISmartArt smartArt = slide.Shapes[0] as ISmartArt;

// Get the first node
ISmartArtNode firstNode = smartArt.Nodes[0];

// Set the text content of node
firstNode.TextBody.AddParagraph("{node-text}");

// Set the fill type of node
firstNode.Shapes[0].Fill.FillType = FillType.Solid;

// Set the fill color of node
firstNode.Shapes[0].Fill.SolidFill.Color = ColorObject.GreenYellow;

// Set transparency value of fill (0-100)
firstNode.Shapes[0].Fill.SolidFill.Transparency = 30;

```

### Placeholders

- `"{node-text}"` → Replace with the text content for the node
- `ColorObject.GreenYellow` → Replace with desired color (e.g., `ColorObject.Red`, `ColorObject.Blue`)
- `30` → Replace with transparency percentage (0-100)
- `smartArt.Nodes[0]` → Replace index to access different nodes

---

## Iterating Through Child Nodes

### Minimal Code

```csharp
// Open an existing PowerPoint Presentation

// Traverse through shapes in the first slide
foreach (IShape shape in pptxDoc.Slides[0].Shapes)
{
    if (shape is ISmartArt)
    {
        // Traverse through all nodes inside SmartArt
        foreach (ISmartArtNode mainNode in (shape as ISmartArt).Nodes)
        {
            // Check and modify node content
            if (mainNode.TextBody.Text == "{old-content}")
            {
                // Change the node content
                mainNode.TextBody.Paragraphs[0].TextParts[0].Text = "{new-content}";
            }
        }
    }
}
        
```

### Placeholders

- `"{old-content}"` → Replace with the text to search for (e.g., `"Old Content"`)
- `"{new-content}"` → Replace with the replacement text (e.g., `"New Content"`)

---

## Removing a Node from SmartArt

### Minimal Code

```csharp
// Get the SmartArt from slide
ISmartArt smartArt = slide.Shapes[0] as ISmartArt;
// Remove a node at the specified index
smartArt.Nodes.RemoveAt("{node-index}");


```

### Placeholders

- `"{node-index}"` → Replace with the index of the node to remove (0-based, e.g., `4`)
- `slide.Shapes[0]` → Replace index to access different SmartArt diagrams

---

## Managing Assistant Nodes

### Minimal Code

```csharp

// Add an Organization Chart SmartArt
ISmartArt smartArt = slide.Shapes.AddSmartArt(SmartArtType.OrganizationChart, 0, 0, 640, 426.96);

// Traverse through all nodes of the SmartArt
foreach (ISmartArtNode node in smartArt.Nodes)
{
    // Check if the node is assistant or not
    if (node.IsAssistant)
    {
        // Set the assistant node to false (convert to normal node)
        node.IsAssistant = false;
    }
    else
    {
        // Set the node as assistant (optional)
        node.IsAssistant = true;
    }
}

```

### Placeholders

- `SmartArtType.OrganizationChart` → Best used with hierarchical SmartArt types that support assistant nodes
- `node.IsAssistant = true` → Sets a node as an assistant node
- `node.IsAssistant = false` → Converts an assistant node to a normal node

---
