---
title: How to reorder conditional formats based on priority value? | Syncfusion
description: This page explains how to reorder conditional formatting rules in XlsIO based on their internal Priority attribute to achieve consistent behavior with Microsoft Excel.
platform: document-processing
control: XlsIO
documentation: UG
---

# How to reorder conditional formats based on priority value?

In Microsoft Excel, when multiple conditional formatting rules are applied to a range, the rules are serialized sequentially in the sheet.xml file. However, this serialization order does not represent the actual evaluation order. Excel determines the correct rule processing sequence using the **Priority** attribute defined for each conditional formatting rule.

XlsIO parses conditional formatting rules in the same order in which they are serialized in the Excel file. This behavior aligns with the sheet.xml data structure but does not reflect Excel's rule evaluation order, which is based on priority.

To achieve consistency with Excel's behavior, use the `GetSortedConditionalFormats` helper method that reorders conditional formatting rules based on their internal Priority value using reflection.

The following code example demonstrates how to retrieve and sort conditional formats by priority.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using Syncfusion.XlsIO;
using Syncfusion.XlsIO.Implementation;

class Program
{
    static void Main(string[] args)
    {
        using (ExcelEngine excelEngine = new ExcelEngine())
        {
            // Instantiate the Excel application object
            IApplication application = excelEngine.Excel;

            // Assign default application version
            application.DefaultVersion = ExcelVersion.Xlsx;

            // Open a workbook with conditional formatting applied
            IWorkbook workbook = application.Workbooks.Open(Path.GetFullPath(@"Data/InputTemplate.xlsx"));

            // Access first worksheet from the workbook
            IWorksheet worksheet = workbook.Worksheets[0];

            // Get conditional formats from cell B3
            IConditionalFormats conditionalFormats = worksheet["B3"].ConditionalFormats;

            // Get sorted conditional formats based on internal Priority
            List<ConditionalFormatImpl> sortedFormats = GetSortedConditionalFormats(conditionalFormats);

            // Display the formula from each conditional format in priority order
            for (int i = 0; i < sortedFormats.Count; i++)
            {
                IConditionalFormat format = sortedFormats[i];
                Console.WriteLine(format.FirstFormula);
            }

            // Save the workbook
            workbook.SaveAs(Path.GetFullPath(@"Output/Output.xlsx"));
        }
    }

    /// <summary>
    /// Retrieves conditional format implementations sorted by their internal Priority value.
    /// This ensures the formats are processed in the same order as Microsoft Excel.
    /// </summary>
    /// <param name="conditionalFormats">The conditional formats collection from XlsIO.</param>
    /// <returns>A list of ConditionalFormatImpl sorted by priority.</returns>
    static List<ConditionalFormatImpl> GetSortedConditionalFormats(IConditionalFormats conditionalFormats)
    {
        List<ConditionalFormatImpl> result = new List<ConditionalFormatImpl>();

        // Use reflection to access the internal GetCondition method and Priority property
        MethodInfo getConditionMethod = typeof(ConditionalFormatWrapper).GetMethod("GetCondition", BindingFlags.Instance | BindingFlags.NonPublic);
        PropertyInfo priorityProp = typeof(ConditionalFormatImpl).GetProperty("Priority", BindingFlags.Instance | BindingFlags.NonPublic);

        // Iterate through each conditional format in the collection
        for (int i = 0; i < conditionalFormats.Count; i++)
        {
            IConditionalFormat format = conditionalFormats[i];
            ConditionalFormatImpl impl = format as ConditionalFormatImpl;

            // If format is a wrapper type, invoke GetCondition to get the underlying implementation
            if (impl == null && format is ConditionalFormatWrapper wrapper)
            {
                impl = getConditionMethod.Invoke(wrapper, null) as ConditionalFormatImpl;
            }

            if (impl != null)
            {
                result.Add(impl);
            }
        }

        // Sort by Priority value to match Excel's evaluation order
        return result.OrderBy(f => (int)priorityProp.GetValue(f)).ToList();
    }
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using Syncfusion.XlsIO;
using Syncfusion.XlsIO.Implementation;

class Program
{
    static void Main(string[] args)
    {
        using (ExcelEngine excelEngine = new ExcelEngine())
        {
            // Instantiate the Excel application object
            IApplication application = excelEngine.Excel;

            // Assign default application version
            application.DefaultVersion = ExcelVersion.Xlsx;

            // Open a workbook with conditional formatting applied
            IWorkbook workbook = application.Workbooks.Open("InputTemplate.xlsx");

            // Access first worksheet from the workbook
            IWorksheet worksheet = workbook.Worksheets[0];

            // Get conditional formats from cell B3
            IConditionalFormats conditionalFormats = worksheet["B3"].ConditionalFormats;

            // Get sorted conditional formats based on internal Priority
            List<ConditionalFormatImpl> sortedFormats = GetSortedConditionalFormats(conditionalFormats);

            // Display the formula from each conditional format in priority order
            for (int i = 0; i < sortedFormats.Count; i++)
            {
                IConditionalFormat format = sortedFormats[i];
                Console.WriteLine(format.FirstFormula);
            }

            // Save the workbook
            workbook.SaveAs("Output.xlsx");
        }
    }

    /// <summary>
    /// Retrieves conditional format implementations sorted by their internal Priority value.
    /// This ensures the formats are processed in the same order as Microsoft Excel.
    /// </summary>
    /// <param name="conditionalFormats">The conditional formats collection from XlsIO.</param>
    /// <returns>A list of ConditionalFormatImpl sorted by priority.</returns>
    static List<ConditionalFormatImpl> GetSortedConditionalFormats(IConditionalFormats conditionalFormats)
    {
        List<ConditionalFormatImpl> result = new List<ConditionalFormatImpl>();

        // Use reflection to access the internal GetCondition method and Priority property
        MethodInfo getConditionMethod = typeof(ConditionalFormatWrapper).GetMethod("GetCondition", BindingFlags.Instance | BindingFlags.NonPublic);
        PropertyInfo priorityProp = typeof(ConditionalFormatImpl).GetProperty("Priority", BindingFlags.Instance | BindingFlags.NonPublic);

        // Iterate through each conditional format in the collection
        for (int i = 0; i < conditionalFormats.Count; i++)
        {
            IConditionalFormat format = conditionalFormats[i];
            ConditionalFormatImpl impl = format as ConditionalFormatImpl;

            // If format is a wrapper type, invoke GetCondition to get the underlying implementation
            if (impl == null && format is ConditionalFormatWrapper wrapper)
            {
                impl = getConditionMethod.Invoke(wrapper, null) as ConditionalFormatImpl;
            }

            if (impl != null)
            {
                result.Add(impl);
            }
        }

        // Sort by Priority value to match Excel's evaluation order
        return result.OrderBy(f => (int)priorityProp.GetValue(f)).ToList();
    }
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Imports System
Imports System.Collections.Generic
Imports System.Linq
Imports System.Reflection
Imports Syncfusion.XlsIO

Module Program
    Sub Main(args As String())
        Using excelEngine As New ExcelEngine()
            ' Instantiate the Excel application object
            Dim application As IApplication = excelEngine.Excel

            ' Assign default application version
            application.DefaultVersion = ExcelVersion.Xlsx

            ' Open a workbook with conditional formatting applied
            Dim workbook As IWorkbook = application.Workbooks.Open("InputTemplate.xlsx")

            ' Access first worksheet from the workbook
            Dim worksheet As IWorksheet = workbook.Worksheets(0)

            ' Get conditional formats from cell B3
            Dim conditionalFormats As IConditionalFormats = worksheet("B3").ConditionalFormats

            ' Get sorted conditional formats based on internal Priority
            Dim sortedFormats As List(Of ConditionalFormatImpl) = GetSortedConditionalFormats(conditionalFormats)

            ' Display the formula from each conditional format in priority order
            For i As Integer = 0 To sortedFormats.Count - 1
                Dim format As IConditionalFormat = sortedFormats(i)
                Console.WriteLine(format.FirstFormula)
            Next

            ' Save the workbook
            workbook.SaveAs("Output.xlsx")
        End Using
    End Sub

    ''' <summary>
    ''' Retrieves conditional format implementations sorted by their internal Priority value.
    ''' This ensures the formats are processed in the same order as Microsoft Excel.
    ''' </summary>
    ''' <param name="conditionalFormats">The conditional formats collection from XlsIO.</param>
    ''' <returns>A list of ConditionalFormatImpl sorted by priority.</returns>
    Function GetSortedConditionalFormats(conditionalFormats As IConditionalFormats) As List(Of ConditionalFormatImpl)
        Dim result As New List(Of ConditionalFormatImpl)()

        ' Use reflection to access the internal GetCondition method and Priority property
        Dim getConditionMethod As MethodInfo = GetType(ConditionalFormatWrapper).GetMethod("GetCondition", BindingFlags.Instance Or BindingFlags.NonPublic)
        Dim priorityProp As PropertyInfo = GetType(ConditionalFormatImpl).GetProperty("Priority", BindingFlags.Instance Or BindingFlags.NonPublic)

        ' Iterate through each conditional format in the collection
        For i As Integer = 0 To conditionalFormats.Count - 1
            Dim format As IConditionalFormat = conditionalFormats(i)
            Dim impl As ConditionalFormatImpl = TryCast(format, ConditionalFormatImpl)

            ' If format is a wrapper type, invoke GetCondition to get the underlying implementation
            If impl Is Nothing AndAlso TypeOf format Is ConditionalFormatWrapper Then
                Dim wrapper As ConditionalFormatWrapper = DirectCast(format, ConditionalFormatWrapper)
                impl = TryCast(getConditionMethod.Invoke(wrapper, Nothing), ConditionalFormatImpl)
            End If

            If impl IsNot Nothing Then
                result.Add(impl)
            End If
        Next

        ' Sort by Priority value to match Excel's evaluation order
        Return result.OrderBy(Function(f) CInt(priorityProp.GetValue(f))).ToList()
    End Function
End Module
{% endhighlight %}
{% endtabs %}