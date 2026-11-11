# Document Structure

> Document lifecycle & page layout — creating, loading, saving, closing documents and configuring sections.

---

## Required common usings

```java
import com.syncfusion.docio.*;
import java.nio.file.Paths;
import java.io.FileInputStream;
import java.io.ByteArrayOutputStream;
```
## Create Document

### Minimal Code

```java
String outputPath = Paths.get(System.getProperty("user.dir"), "output", "document.docx").toString();
WordDocument doc = new WordDocument();
IWSection section = doc.addSection();
section.getPageSetup().getMargins().setAll(72f); // 1 inch margins

// Add content here
doc.save(outputPath);
doc.close();
System.out.println("SUCCESS: " + outputPath);
```

### Placeholders
- `"document.docx"` → Replace with `"{filename}.docx"`
- Add content operations between section creation and save

---

## Add Section

### Minimal Code

```java
IWSection section = doc.addSection();
section.getPageSetup().getMargins().setAll(72f); // 1 inch margins
```

### Options

```java
// Custom margins
section.getPageSetup().getMargins().setTop(72f);
section.getPageSetup().getMargins().setBottom(72f);
section.getPageSetup().getMargins().setLeft(72f);
section.getPageSetup().getMargins().setRight(72f);

// Page orientation
section.getPageSetup().setOrientation(PageOrientation.Portrait); // or LANDSCAPE
```

---

## Load Document

### From File Path

#### Common way Using Constructor
```java
String filePath = Paths.get(System.getProperty("user.dir"), "input", "template.docx").toString();
WordDocument doc = new WordDocument(filePath);
```

#### Common way Using Open Method
```java
String filePath = Paths.get(System.getProperty("user.dir"),"input","template.docx").toString();
WordDocument doc = new WordDocument();
doc.open(filePath, FormatType.Docx);
```

### From Stream

#### Common way Using Constructor
```java
FileInputStream fileStream = new FileInputStream("template.docx");
WordDocument doc = new WordDocument(fileStream, FormatType.Automatic);
```

#### Common way Using Open Method
```java
FileInputStream fileStream = new FileInputStream("template.docx");
WordDocument doc = new WordDocument();
doc.open(fileStream, FormatType.Automatic);
```

### Encrypted Document

```java
String filePath = Paths.get(System.getProperty("user.dir"), "input", "encrypted.docx").toString();
WordDocument doc = new WordDocument(filePath, FormatType.Automatic, "password");
```

### Read-Only Document

#### Common way From File Path
```java
WordDocument doc = new WordDocument();
doc.openReadOnly("template.docx", FormatType.Docx);
```

#### Common way Encrypted Read-Only Document
```java
WordDocument doc = new WordDocument();
doc.openReadOnly("template.docx", FormatType.Docx, "password");
```

### Placeholders
- `"template.docx"` → Replace with `"{filename}.docx"`
- `"password"` → Replace with actual password
- `FormatType.Automatic` → Auto-detects format; or use `FormatType.Docx`, `FormatType.Doc`, `FormatType.Rtf`, etc.

---

## Save Document

### To File Path

```java
String outputPath = Paths.get(System.getProperty("user.dir"),"output","document.docx").toString();
doc.save(outputPath, FormatType.Docx);
doc.close();
```

### To Stream

```java
ByteArrayOutputStream stream = new ByteArrayOutputStream();
doc.save(stream, FormatType.Docx);
```

### Supported Formats

```java
FormatType.Docx      // Word 2007+ (.docx) - recommended
FormatType.Rtf       // Rich Text Format (.rtf)
FormatType.Html      // HTML format
FormatType.Markdown  // Markdown format
FormatType.Txt       // Plain text
```

### Placeholders
- `"document.docx"` → Replace with `"{output-filename}"`
- `FormatType.Docx` → Replace with desired format type

