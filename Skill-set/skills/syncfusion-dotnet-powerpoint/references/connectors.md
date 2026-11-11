# Working with Connectors

> Adding, editing, updating, and removing connectors between shapes in PowerPoint presentations. Support for different connector types and connection properties.

---

## Required Usings

```csharp
using Syncfusion.Presentation;
```

---

## Add Connector Between Two Shapes

### Minimal Code
```csharp
IConnector connector = slide.Shapes.AddConnector(ConnectorType.Elbow, shape1, 0, shape2, 4);
```

### Full Example
```csharp
using (IPresentation pptxDoc = Presentation.Create())
{
    // Add a slide to the PowerPoint file
    ISlide slide = pptxDoc.Slides.Add(SlideLayoutType.Blank);
    // Add a rectangle shape on the slide
    IShape rectangle = slide.Shapes.AddShape(AutoShapeType.Rectangle, 200, 300, 100, 100);
    // Add an oval shape on the slide
    IShape oval = slide.Shapes.AddShape(AutoShapeType.Oval, 400, 10, 100, 100);
    // Add elbow connector and connect the end points of connector with specified port positions
    // 0 = beginning shape port position, 4 = end shape port position
    IConnector connector = slide.Shapes.AddConnector(ConnectorType.Elbow, rectangle, 0, oval, 4);
    // Save the PowerPoint Presentation as stream
    FileStream outputStream = new FileStream("Sample.pptx", FileMode.Create);
    pptxDoc.Save(outputStream);
}
```

### Connector Types
```csharp
ConnectorType.Straight          // Straight line connector
ConnectorType.Elbow             // Elbow connector with right angles
ConnectorType.Curve             // Curved connector
```

### Port Positions
```csharp
// Common port position values
0   // Top
1   // Right
2   // Bottom
3   // Left
4   // Center
```

### Placeholders
- `ConnectorType.Elbow` → Replace with desired connector type
- `rectangle`, `oval` → Replace with actual shape instances
- `0`, `4` → Replace with desired port positions
- `"Sample.pptx"` → Replace with desired output filename

---

## Add Single Point Connector

### Minimal Code
```csharp
IConnector connector = slide.Shapes.AddConnector(ConnectorType.Straight, 0, 0, 470, 150);
connector.BeginConnect(rectangle, 0);
```

### Full Example
```csharp
// Create a new PowerPoint file
using (IPresentation pptxDoc = Presentation.Create())
{
    // Add a slide to the PowerPoint file
    ISlide slide = pptxDoc.Slides.Add(SlideLayoutType.Blank);
    // Add a rectangle shape on the slide
    IShape rectangle = slide.Shapes.AddShape(AutoShapeType.Rectangle, 420, 250, 100, 100);
    // Add connector with specified bounds
    IConnector connector = slide.Shapes.AddConnector(ConnectorType.Straight, 0, 0, 470, 150);
    // Connect the beginning point of the connector with rectangle shape
    connector.BeginConnect(rectangle, 0);
    // Set the beginning cap of the connector as arrow
    connector.LineFormat.BeginArrowheadStyle = ArrowheadStyle.Arrow;
    // Change the connector color
    // Set the connector fill type as solid
    connector.LineFormat.Fill.FillType = FillType.Solid;
    // Set the connector solid fill as black
    connector.LineFormat.Fill.SolidFill.Color = ColorObject.Black;
    // Save the PowerPoint Presentation as stream
    FileStream outputStream = new FileStream("Sample.pptx", FileMode.Create);
    pptxDoc.Save(outputStream);
}
```

### Connector Bounds
```csharp
slide.Shapes.AddConnector(ConnectorType.Straight, startX, startY, endX, endY);
// Parameters: (Type, StartXPosition, StartYPosition, EndXPosition, EndYPosition)
```

### Placeholders
- `0, 0, 470, 150` → Replace with desired start and end coordinates
- `rectangle` → Replace with actual shape instance
- `0` → Replace with desired port position
- `"Sample.pptx"` → Replace with desired output filename

---

## Edit Connector

### Minimal Code
```csharp
IConnector connector = slide.Shapes[2] as IConnector;
connector.LineFormat.BeginArrowheadStyle = ArrowheadStyle.ArrowOpen;
connector.LineFormat.DashStyle = LineDashStyle.DashDotDot;
```

### Full Example
```csharp
// Loads a PowerPoint file in stream
FileStream inputStream = new FileStream("Sample.pptx", FileMode.Open);
// Opens the loaded PowerPoint file
using (IPresentation pptxDoc = Presentation.Open(inputStream))
{
    // Get the first slide of a PowerPoint file
    ISlide slide = pptxDoc.Slides[0];
    // Get the connector from a slide
    IConnector connector = slide.Shapes[2] as IConnector;
    // Set the begin cap for the connector
    connector.LineFormat.BeginArrowheadStyle = ArrowheadStyle.ArrowOpen;
    // Set the line format for the connector
    connector.LineFormat.DashStyle = LineDashStyle.DashDotDot;
    // Disconnect the end connection of the connector if end point is connected
    if (connector.EndConnectedShape != null)
        connector.EndDisconnect();
    // Insert a triangle shape into slide
    IShape triangle = slide.Shapes.AddShape(AutoShapeType.IsoscelesTriangle, 600, 500, 150, 150);
    // Declare the end connection site index
    int connectionSiteIndex = 4;
    // Reconnect the end point of connector with triangle shape
    if (connectionSiteIndex < triangle.ConnectionSiteCount)
        connector.EndConnect(triangle, connectionSiteIndex);
    // Save the PowerPoint Presentation as stream
    FileStream outputStream = new FileStream("Connector.pptx", FileMode.Create);
    pptxDoc.Save(outputStream);
}
```

### Arrowhead Styles
```csharp
connector.LineFormat.BeginArrowheadStyle = ArrowheadStyle.Arrow;        // Arrow
connector.LineFormat.BeginArrowheadStyle = ArrowheadStyle.ArrowOpen;    // Open arrow
connector.LineFormat.BeginArrowheadStyle = ArrowheadStyle.Diamond;      // Diamond
connector.LineFormat.BeginArrowheadStyle = ArrowheadStyle.Circle;       // Circle

// For end arrowhead
connector.LineFormat.EndArrowheadStyle = ArrowheadStyle.Arrow;
```

### Line Dash Styles
```csharp
connector.LineFormat.DashStyle = LineDashStyle.Solid;        // Solid line
connector.LineFormat.DashStyle = LineDashStyle.Dash;         // Dashed line
connector.LineFormat.DashStyle = LineDashStyle.Dot;          // Dotted line
connector.LineFormat.DashStyle = LineDashStyle.DashDot;      // Dash-dot line
connector.LineFormat.DashStyle = LineDashStyle.DashDotDot;   // Dash-dot-dot line
```

### Connection Operations
```csharp
connector.BeginConnect(shape, portPosition);        // Connect beginning point
connector.EndConnect(shape, portPosition);          // Connect end point
connector.BeginDisconnect();                        // Disconnect beginning point
connector.EndDisconnect();                          // Disconnect end point
```

### Placeholders
- `[2]` → Replace with desired shape index
- `ArrowheadStyle.Arrow` → Replace with desired arrowhead style
- `LineDashStyle.DashDotDot` → Replace with desired dash style
- `triangle` → Replace with actual shape instance
- `4` → Replace with desired port position
- `"Connector.pptx"` → Replace with desired output filename

---

## Update Connector Position

### Minimal Code
```csharp
rectangle.Left = 600;
rectangle.Top = 200;
connector.Update();
```

### Full Example
```csharp
// Loads a PowerPoint file in stream
FileStream inputStream = new FileStream("Sample.pptx", FileMode.Open);
// Opens the loaded PowerPoint file
using (IPresentation pptxDoc = Presentation.Open(inputStream))
{
    // Get the first slide of a PowerPoint file
    ISlide slide = pptxDoc.Slides[0];
    // Get the rectangle shape from a slide
    IShape rectangle = slide.Shapes[0] as IShape;
    // Get the connector from a slide
    IConnector connector = slide.Shapes[2] as IConnector;
    // Change the X and Y position of the rectangle
    rectangle.Left = 600;
    rectangle.Top = 200;
    // Update the connector to connect with previously updated shape
    connector.Update();
    // Save the PowerPoint Presentation as stream
    FileStream outputStream = new FileStream("Connector.pptx", FileMode.Create);
    pptxDoc.Save(outputStream);
}
```

### Important Note
After modifying the position of connected shapes, always call the `Update()` method on the connector to reflect the changes and maintain proper connection routing.

### Placeholders
- `600`, `200` → Replace with desired left and top position values
- `[0]`, `[2]` → Replace with desired shape indices
- `"Sample.pptx"` → Replace with actual input file path
- `"Connector.pptx"` → Replace with desired output filename

---

## Remove Connector

### Minimal Code
```csharp
IConnector connector = slide.Shapes[2] as IConnector;
slide.Shapes.Remove(connector);
```

### Full Example
```csharp
// Loads a PowerPoint file in stream
FileStream inputStream = new FileStream("Sample.pptx", FileMode.Open);
// Opens the loaded PowerPoint file
using (IPresentation pptxDoc = Presentation.Open(inputStream))
{
    // Get the first slide of a PowerPoint file
    ISlide slide = pptxDoc.Slides[0];
    // Get the connector from a slide
    IConnector connector = slide.Shapes[2] as IConnector;
    // Remove the connector from slide
    slide.Shapes.Remove(connector);
    // Save the PowerPoint Presentation as stream
    FileStream outputStream = new FileStream("Connector.pptx", FileMode.Create);
    pptxDoc.Save(outputStream);
}
```

### Remove All Connectors
```csharp
// Remove all connectors from a slide
while (slide.Shapes.Count > 0)
{
    IShape shape = slide.Shapes[0];
    if (shape is IConnector)
    {
        slide.Shapes.Remove(shape);
    }
    else
    {
        break;
    }
}
```

### Placeholders
- `[2]` → Replace with desired connector shape index
- `"Sample.pptx"` → Replace with actual input file path
- `"Connector.pptx"` → Replace with desired output filename

---

## Connector Properties Reference

### Connection Information
```csharp
// Get connected shape information
IShape beginConnectedShape = connector.BeginConnectedShape;   // Get beginning connected shape
IShape endConnectedShape = connector.EndConnectedShape;       // Get end connected shape
int connectionSiteCount = shape.ConnectionSiteCount;         // Get available connection sites
```

### Line Formatting
```csharp
// Line color
connector.LineFormat.Fill.FillType = FillType.Solid;
connector.LineFormat.Fill.SolidFill.Color = ColorObject.Black;

// Line width
connector.LineFormat.Width = 2.0f;

// Line transparency
connector.LineFormat.Fill.SolidFill.Transparency = 0.5f;
```

### Position and Size
```csharp
connector.Left = 100;          // Left position
connector.Top = 100;           // Top position
connector.Width = 200;         // Width
connector.Height = 200;        // Height
```

### Placeholders
- `ColorObject.Black` → Replace with desired color
- `2.0f` → Replace with desired line width
- `0.5f` → Replace with transparency value (0-1)
