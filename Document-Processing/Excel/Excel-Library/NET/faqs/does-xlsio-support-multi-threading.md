---
title: XlsIO support for multi threading | Syncfusion
description: This page explains whether the Syncfusion .NET Excel library (XlsIO) provides support for multi threading.
platform: document-processing
control: XlsIO
documentation: UG
---

# Does XlsIO library support multithreading and thread-safe?

Yes, the XlsIO library supports multithreading and is thread-safe. It allows you to create multiple workbook instances for tasks like creating, reading, editing, and converting Excel documents.

The following code example illustrates how to create multiple workbook instances to read several copies of the same Excel document and convert them to PDF using multithreading in C#:

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" %}
class MultiThreading
{
    //Defines the number of threads to be created
    private const int ThreadCount = 1000;
    public static void Main()
    {
        //Create an array of threads based on the ThreadCount
        Thread[] threads = new Thread[ThreadCount];
        for (int i = 0; i < ThreadCount; i++)
        {
            threads[i] = new Thread(ReadEditConvertExcel);
            threads[i].Start();
        }

        //Ensure all threads complete by calling Join on each thread
        for (int i = 0; i < ThreadCount; i++)
        {
            threads[i].Join();
        }
    }
    
    //Method to convert Excel to PDF
    static void ReadEditConvertExcel()
    {
        using (ExcelEngine excelEngine = new ExcelEngine())
        {
            IApplication application = excelEngine.Excel;
            application.DefaultVersion = ExcelVersion.Excel2016;
            FileStream inputStream = new FileStream("InputTemplate.xlsx", FileMode.Open, FileAccess.Read);
            IWorkbook workbook = application.Workbooks.Open(inputStream);
            inputStream.Close();
            IWorksheet sheet = workbook.Worksheets[0];

            //Add text, formula, and number in the worksheet
            sheet.Range["A1"].Text = "Hello World" + DateTime.Now;
            Console.WriteLine(sheet.Range["A1"].Text);
            sheet.Range["A2"].Formula = "=Now()";
            sheet.Range["A3"].Number = 12345;

            //Convert the Excel workbook to PDF
            XlsIORenderer xlsIORenderer = new XlsIORenderer();
            PdfDocument pdfDocument = xlsIORenderer.ConvertToPDF(workbook);

            //Save the PDF document
            MemoryStream fileStream = new MemoryStream();
            pdfDocument.Save(fileStream);
            fileStream.Close();
            pdfDocument.Dispose();
        }
    }
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
class MultiThreading
{
    //Defines the number of threads to be created
    private const int ThreadCount = 1000;
    public static void Main()
    {
        //Create an array of threads based on the ThreadCount
        Thread[] threads = new Thread[ThreadCount];
        for (int i = 0; i < ThreadCount; i++)
        {
            threads[i] = new Thread(ReadEditConvertExcel);
            threads[i].Start();
        }

        //Ensure all threads complete by calling Join on each thread
        for (int i = 0; i < ThreadCount; i++)
        {
            threads[i].Join();
        }
    }

    //Method to convert Excel to PDF
    static void ReadEditConvertExcel()
    {
        using (ExcelEngine excelEngine = new ExcelEngine())
        {
            IApplication application = excelEngine.Excel;
            application.DefaultVersion = ExcelVersion.Excel2016;
            IWorkbook workbook = application.Workbooks.Open("InputTemplate.xlsx");
            IWorksheet sheet = workbook.Worksheets[0];

            //Add text, formula, and number in the worksheet
            sheet.Range["A1"].Text = "Hello World" + DateTime.Now;
            Console.WriteLine(sheet.Range["A1"].Text);
            sheet.Range["A2"].Formula = "=Now()";
            sheet.Range["A3"].Number = 12345;

            //Convert the Excel workbook to PDF
            ExcelToPdfConverter converter = new ExcelToPdfConverter(workbook);
            PdfDocument pdfDocument = new PdfDocument();
            pdfDocument = converter.Convert();

            //Save the PDF document
            pdfDocument.Save("Output.pdf");
        }
    }
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Class MultiThreading
    'Defines the number of threads to be created
    Private Const ThreadCount As Integer = 1000

    Public Shared Sub Main()
        'Create an array of threads based on the ThreadCount
        Dim threads(ThreadCount - 1) As Thread
        For i As Integer = 0 To ThreadCount - 1
            threads(i) = New Thread(AddressOf ReadEditConvertExcel)
            threads(i).Start()
        Next

        'Ensure all threads complete by calling Join on each thread
        For i As Integer = 0 To ThreadCount - 1
            threads(i).Join()
        Next
    End Sub

    'Method to convert Excel to PDF
    Shared Sub ReadEditConvertExcel()
        Using excelEngine As ExcelEngine = New ExcelEngine()
            Dim application As IApplication = excelEngine.Excel
            application.DefaultVersion = ExcelVersion.Excel2016
            Dim workbook As IWorkbook = application.Workbooks.Open("InputTemplate.xlsx")
            Dim sheet As IWorksheet = workbook.Worksheets(0)

            'Add text, formula, and number in the worksheet
            sheet.Range("A1").Text = "Hello World" & DateTime.Now
            Console.WriteLine(sheet.Range("A1").Text)
            sheet.Range("A2").Formula = "=Now()"
            sheet.Range("A3").Number = 12345

            'Convert the Excel workbook to PDF
            Dim converter As ExcelToPdfConverter = New ExcelToPdfConverter(workbook)
            Dim pdfDocument As PdfDocument = converter.Convert()

            'Save the PDF document
            pdfDocument.Save("Output.pdf")
        End Using
    End Sub
End Class
{% endhighlight %}
{% endtabs %}