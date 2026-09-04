---
layout: post
title: Find and Replace in Blazor Spreadsheet | Syncfusion
description: Learn how to search and replace cell values in a sheet or workbook using the find, replace, and go to features of the Syncfusion Blazor Spreadsheet.
platform: document-processing
control: Spreadsheet
documentation: ug
---

# Find and Replace in Blazor Spreadsheet

The [Blazor Spreadsheet Editor](https://www.syncfusion.com/spreadsheet-editor-sdk/blazor-spreadsheet-editor) component provides Find and Replace functionality that helps you search for target text and replace the found text with alternative text within a sheet or workbook. You can use the [AllowFindAndReplace](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Spreadsheet.SfSpreadsheet.html#Syncfusion_Blazor_Spreadsheet_SfSpreadsheet_AllowFindAndReplace) property to enable or disable Find and Replace functionality.

## Find

Find is used to select the matched contents of a cell within a sheet or workbook. It is extremely useful when working with large data sets.

### User Interface:

Find can be done by any of the following ways:

* Select the Search icon in the Ribbon toolbar or using Ctrl + F key to open the Find dialog.
* Using find Next and find Previous buttons to search the given value in workbook.
* Select the option button in Find dialog to open the Find and Replace dialog then select the below properties for enhanced searching.


| Option | Description |
|---|---|
| **Search within** | Search the target within the active **Sheet** (default) or in the entire **Workbook**. |
| **Search by** | Search either **By Rows** (default) or **By Columns**. |
| **Match case** | Find the matched value with case sensitivity. |
| **Match exact cell contents** | Find the exact matched cell value with entire cell match. |

### Find programmatically

The [FindAsync](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Spreadsheet.SfSpreadsheet.html#Syncfusion_Blazor_Spreadsheet_SfSpreadsheet_FindAsync_System_String_Syncfusion_Blazor_Spreadsheet_SearchScope_System_Boolean_System_Boolean_Syncfusion_Blazor_Spreadsheet_SearchDirection_Syncfusion_Blazor_Spreadsheet_FindOption_) method searches for the specified text in the spreadsheet and automatically navigates the active cell to the next or previous matching occurrence. The available parameters in the `FindAsync()` method are:

| Parameter | Type | Description |
|---|---|---|
| searchText | string | Specifies the text to search for. This parameter is required and cannot be null, empty, or contain only whitespace. |
| searchScope | [SearchScope](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Spreadsheet.SearchScope.html) *(optional)* | Specifies whether to search in the current sheet or the entire workbook. Accepts values from the `SearchScope` enumeration. If unspecified, the default is **SearchScope.CurrentSheet**.<br><br>**Possible values:**<br>• **SearchScope.CurrentSheet** – Searches only within the currently active worksheet.<br>• **SearchScope.EntireWorkbook** – Searches across all worksheets in the workbook. |
| matchCase | bool *(optional)* | Specifies whether the search should be case-sensitive. If unspecified, the default is **false** (case-insensitive). |
| matchEntireCell | bool *(optional)* | Specifies whether the search should match the entire cell content or allow partial matches. If unspecified, the default is **false** (partial matches allowed). |
| searchDirection | [SearchDirection](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Spreadsheet.SearchDirection.html) *(optional)* | Specifies the order in which cells are searched. Accepts values from the `SearchDirection` enumeration. If unspecified, the default is **SearchDirection.ByRows**.<br><br>**Possible values:**<br>• **SearchDirection.ByRows** – Searches cells row by row (left to right, top to bottom).<br>• **SearchDirection.ByColumns** – Searches cells column by column (top to bottom, left to right). |
| findOption | [FindOption](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Spreadsheet.FindOption.html) *(optional)* | Controls the navigation behavior between search results. Accepts values from the `FindOption` enumeration. If unspecified, the default is **FindOption.Next**.<br><br>**Possible values:**<br>• **FindOption.Next** – Navigates to the next matching occurrence.<br>• **FindOption.Previous** – Navigates to the previous matching occurrence. |

{% tabs %}
{% highlight razor tabtitle="Index.razor" %}

@page "/"
@using Syncfusion.Blazor.Spreadsheet
@using Syncfusion.Blazor.Buttons

<SfButton OnClick="FindMatch" Content="Find"></SfButton>

<SfSpreadsheet @ref="SpreadsheetInstance" DataSource="DataSourceBytes">
    <SpreadsheetRibbon></SpreadsheetRibbon>
</SfSpreadsheet>

@code {
    public byte[] DataSourceBytes { get; set; }
    public SfSpreadsheet SpreadsheetInstance;

    protected override void OnInitialized()
    {
        string filePath = "wwwroot/Sample.xlsx";
        DataSourceBytes = File.ReadAllBytes(filePath);
    }

    public async Task FindMatch()
    {
        await SpreadsheetInstance.FindAsync(
            searchText: "Error",
            searchScope: SearchScope.EntireWorkbook,
            matchCase: true,
            matchEntireCell: false,
            searchDirection: SearchDirection.ByColumns,
            findOption: FindOption.Previous);
    }
}

{% endhighlight %}
{% endtabs %}


## Replace

Replace is used to change the found contents of a cell within a sheet or workbook. Replace All is used to change all the matched contents of a cell within a sheet or workbook.

### user interface
Replace can be done by any of the following ways:

* Using Replace button to change the found value in sheet or workbook.
* Using ReplaceAll button to change all the found value’s in sheet or workbook.
* Using replace method to perform replace operation by passing the parameters replace.
* Using replace method to perform replace all operation by passing the parameter replaceall.

### Replace programmatically

The [ReplaceAsync](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Spreadsheet.SfSpreadsheet.html#Syncfusion_Blazor_Spreadsheet_SfSpreadsheet_ReplaceAsync_System_String_System_String_Syncfusion_Blazor_Spreadsheet_SearchScope_System_Boolean_System_Boolean_System_Boolean_) method searches for text matching the specified criteria and replaces either the first occurrence or all occurrences. The available parameters in the `ReplaceAsync()` method are:

| Parameter | Type | Description |
|---|---|---|
| searchText | string | Specifies the text to search for. This parameter is required and cannot be null, empty, or contain only whitespace. |
| replacementText | string | Specifies the text to replace the matched content with. If this parameter is **null**, it will be treated as an empty string. |
| searchScope | [SearchScope](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Spreadsheet.SearchScope.html) *(optional)* | Specifies the scope of the search operation. Accepts values from the `SearchScope` enumeration. If unspecified, the default is **SearchScope.CurrentSheet**.<br><br>**Possible values:**<br>• **SearchScope.CurrentSheet** – Replaces matched values only within the currently active sheet.<br>• **SearchScope.EntireWorkbook** – Replaces matched values across all worksheets in the workbook. |
| matchCase | bool *(optional)* | Specifies whether the search should be case-sensitive. If unspecified, the default is **false** (case-insensitive). |
| matchEntireCell | bool *(optional)* | Specifies whether the search text must match the entire cell content. If unspecified, the default is **false** (partial match allowed). |
| isReplaceAll | bool *(optional)* | Controls the replacement behavior. If unspecified, the default is **false**.<br><br>**Possible values:**<br>• **false** – Replaces only the first matched occurrence.<br>• **true** – Replaces all matched occurrences in a single atomic operation. |

{% tabs %}
{% highlight razor tabtitle="Index.razor" %}

@page "/"
@using Syncfusion.Blazor.Spreadsheet
@using Syncfusion.Blazor.Buttons

<SfButton OnClick="ReplaceFirstMatch" Content="Replace"></SfButton>
<SfButton OnClick="ReplaceAllMatches" Content="Replace All"></SfButton>

<SfSpreadsheet @ref="SpreadsheetInstance" DataSource="DataSourceBytes">
    <SpreadsheetRibbon></SpreadsheetRibbon>
</SfSpreadsheet>

@code {
    public byte[] DataSourceBytes { get; set; }
    public SfSpreadsheet SpreadsheetInstance;

    protected override void OnInitialized()
    {
        string filePath = "wwwroot/Sample.xlsx";
        DataSourceBytes = File.ReadAllBytes(filePath);
    }

    public async Task ReplaceFirstMatch()
    {
        // Replaces the first matched occurrence of "Sales" with "Revenue" in the active sheet.
        await SpreadsheetInstance.ReplaceAsync("Sales", "Revenue");
    }

    public async Task ReplaceAllMatches()
    {
        // Replaces all matched occurrences of "Sales" with "Revenue" across the entire workbook.
        await SpreadsheetInstance.ReplaceAsync("Sales", "Revenue",SearchScope.EntireWorkbook, false, false, true);
    }
}

{% endhighlight %}
{% endtabs %}


## Go to

Go To is used to navigate to a specific cell address in the sheet or workbook.

### user interface

* Using Ctrl + G key to open the Go To dialog.
* Using goTo method to perform Go To operation.

### Go to programmatically

The [GoTo](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Spreadsheet.SfSpreadsheet.html#Syncfusion_Blazor_Spreadsheet_SfSpreadsheet_GoTo_System_String_) method navigates to the specified cell or range and sets it as the active selection. If a sheet reference is included in the address, the method automatically switches to that sheet before navigating. The `cellAddress` parameter accepts various formats:

* Single cell reference (e.g., `"Sheet1!A1"`, `"Sheet1!B5"`) — Navigates to the specified cell within the active sheet.
* Cell range (e.g., `"Sheet1!A1:C5"`) — Navigates to and selects the specified range within the active sheet.

{% tabs %}
{% highlight razor tabtitle="Index.razor" %}

@page "/"
@using Syncfusion.Blazor.Spreadsheet
@using Syncfusion.Blazor.Buttons

<SfButton OnClick="GoToCell" Content="Go To"></SfButton>

<SfSpreadsheet @ref="SpreadsheetInstance" DataSource="DataSourceBytes">
    <SpreadsheetRibbon></SpreadsheetRibbon>
</SfSpreadsheet>

@code {
    public byte[] DataSourceBytes { get; set; }
    public SfSpreadsheet SpreadsheetInstance;

    protected override void OnInitialized()
    {
        string filePath = "wwwroot/Sample.xlsx";
        DataSourceBytes = File.ReadAllBytes(filePath);
    }

    public void GoToCell()
    {
        // Navigates to cell B12 within the active sheet.
        SpreadsheetInstance.GoTo("Sheet1:A1");
    }
}

{% endhighlight %}
{% endtabs %}

In the following sample, searching can be done in the following ways:

* Select the Home tab in the Ribbon toolbar, and then select the Search icon.
* Enter any value in the search textbox.
* the next (or previous) button to find the entered value in the spreadsheet.
* You can have more options to find values by selecting the more options in the search toolbar.

