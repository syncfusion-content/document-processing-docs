# Multithreading with PdfToImageConverter

`PdfToImageConverter` is thread-safe. You can create multiple instances simultaneously to convert PDF documents to images across parallel threads.

---

## Using Tasks (async/await)

```csharp
int taskCount = 1000;
Task[] tasks = new Task[taskCount];
for (int i = 0; i < taskCount; i++)
{
    tasks[i] = Task.Run(() =>
    {
        using (FileStream inputStream = new FileStream(@"Input.pdf", FileMode.Open, FileAccess.Read))
        using (PdfToImageConverter imageConverter = new PdfToImageConverter(inputStream))
        {
            Stream outputStream = imageConverter.Convert(0, false, false);
            outputStream.Position = 0;
            using (FileStream outputFileStream = new FileStream("Output" + Guid.NewGuid().ToString() + ".jpeg", FileMode.Create, FileAccess.ReadWrite))
            {
                outputStream.CopyTo(outputFileStream);
            }
        }
    });
}
await Task.WhenAll(tasks);
```

---

## Using Parallel.For

```csharp
int limit = 50;
Parallel.For(0, limit, count =>
{
    using (FileStream inputStream = new FileStream(@"Input.pdf", FileMode.Open, FileAccess.Read))
    using (PdfToImageConverter imageConverter = new PdfToImageConverter(inputStream))
    {
        Stream outputStream = imageConverter.Convert(0, false, false);
        outputStream.Position = 0;
        using (FileStream outputFileStream = new FileStream("Output" + count + ".jpeg", FileMode.Create, FileAccess.Write))
        {
            outputStream.CopyTo(outputFileStream);
        }
    }
});
```
