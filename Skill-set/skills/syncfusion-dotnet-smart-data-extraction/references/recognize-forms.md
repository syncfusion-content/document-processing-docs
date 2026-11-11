# Recognize Forms — API Reference

`FormRecognizer` accepts a `Stream` input (PDF or image), `FormRecognizeOptions` configures how `FormRecognizer` detects form controls (textboxes, checkboxes, radio buttons, signatures), filters results by confidence, and restricts processing to specific pages and returns recognized form fields as a `PdfLoadedDocument`, `Stream`, or JSON string.

---

## 1. Configure `FormRecognizeOptions`
```csharp
FormRecognizer recognizer = new FormRecognizer();
recognizer.FormRecognizeOptions.DetectTextboxes = false;
recognizer.FormRecognizeOptions.DetectCheckboxes = false;
recognizer.FormRecognizeOptions.DetectRadioButtons = false;
recognizer.FormRecognizeOptions.DetectSignatures = false;
recognizer.FormRecognizeOptions.ConfidenceThreshold = 0.9;
// Single pages
recognizer.FormRecognizeOptions.PageRange = new int[,] { { 3 }, { 8 } };
// Continuous range (pages 3–8)
recognizer.FormRecognizeOptions.PageRange = new int[,] { { 3, 8 } };
```

## 2. Return `PdfLoadedDocument` with detected form elements

```csharp
FormRecognizer recognizer = new FormRecognizer();
using FileStream input = new FileStream("Input.pdf", FileMode.Open, FileAccess.Read);
PdfLoadedDocument doc = recognizer.RecognizeFormAsPdfDocument(input);
doc.Save("Output.pdf");
```

## 3. Return `PdfLoadedDocument` with detected form elements as Asynchronous (with timeout)

```csharp
using (FileStream stream = new FileStream(inputPath, FileMode.Open, FileAccess.Read))
{
    FormRecognizer recognizer = new FormRecognizer();
    var cts = new CancellationTokenSource(TimeSpan.FromSeconds(2));
    PdfLoadedDocument doc = await recognizer.RecognizeFormAsPdfDocumentAsync(input, cts);
    doc.Save("Output.pdf");
}
```

## 4. Return the recognized PDF as a `Stream`

```csharp
FormRecognizer recognizer = new FormRecognizer();
using FileStream input = new FileStream("Input.pdf", FileMode.Open, FileAccess.Read);
Stream output = recognizer.RecognizeFormAsPdfStream(input);
using FileStream fs = File.Create("Output.pdf");
output.Seek(0, SeekOrigin.Begin);
output.CopyTo(fs);
```

## 5. Return the recognized PDF as a `Stream` as Asynchronous (with timeout)

```csharp
using (FileStream stream = new FileStream(inputPath, FileMode.Open, FileAccess.Read))
{
    FormRecognizer recognizer = new FormRecognizer();
    var cts = new CancellationTokenSource(TimeSpan.FromSeconds(2));
    Stream output = await recognizer.RecognizeFormAsPdfStreamAsync(input, cts);
}
```

## 6. Return the recognition result as a JSON string

```csharp
FormRecognizer recognizer = new FormRecognizer();
using FileStream input = new FileStream("Input.pdf", FileMode.Open, FileAccess.Read);
string json = recognizer.RecognizeFormAsJson(input);
File.WriteAllText("Output.json", json);
```

## 7. Return the recognition result as a JSON string as Asynchronous (with timeout)

```csharp
using (FileStream stream = new FileStream(inputPath, FileMode.Open, FileAccess.Read))
{
    FormRecognizer recognizer = new FormRecognizer();
    var cts = new CancellationTokenSource(TimeSpan.FromSeconds(2));
    string json = await recognizer.RecognizeFormAsJsonAsync
    (input, cts);
}
```

## 8. Combined Example

```csharp
FormRecognizer recognizer = new FormRecognizer();
using FileStream input = new FileStream("Input.pdf", FileMode.Open, FileAccess.Read);

recognizer.FormRecognizeOptions = new FormRecognizeOptions
{
    DetectTextboxes     = true,
    DetectCheckboxes    = true,
    DetectRadioButtons  = false,
    DetectSignatures    = false,
    ConfidenceThreshold = 0.85,
    PageRange           = new int[,] { { 1, 5 } }
};

string json = recognizer.RecognizeFormAsJson(input);
File.WriteAllText("Output.json", json);
```

---

## Property Summary

- `FormRecognizeOptions  FormRecognizeOptions` - get/set form recognizer options (page ranges, confidence, configure form types to be deduct)

## Method Summary

| Method | Returns | Sync/Async |
|---|---|---|
| `RecognizeFormAsPdfDocument(Stream)` | `PdfLoadedDocument` | Sync |
| `RecognizeFormAsPdfDocumentAsync(Stream, CancellationToken?)` | `Task<PdfLoadedDocument>` | Async |
| `RecognizeFormAsPdfStream(Stream)` | `Stream` | Sync |
| `RecognizeFormAsPdfStreamAsync(Stream, CancellationToken?)` | `Task<Stream>` | Async |
| `RecognizeFormAsJson(Stream)` | `string` | Sync |
| `RecognizeFormAsJsonAsync(Stream, CancellationToken?)` | `Task<string>` | Async |