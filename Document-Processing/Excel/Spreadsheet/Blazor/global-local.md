---
layout: post
title: Globalization in Blazor Spreadsheet | Syncfusion
description: Learn how to localize the Blazor Spreadsheet, display culture-specific values, and enable right-to-left layout.
control: Global local 
platform: document-processing
documentation: ug
---

# Globalization in Blazor Spreadsheet

## Localization

The `ISyncfusionStringLocalizer` interface lets you localize the default text used in the Blazor Spreadsheet. Add the `SfResources.resx` file and the required culture-specific resource file to your project, and register a custom localizer in `Program.cs`.

The following table lists some of the Spreadsheet localization terms available in the resource files.

| Locale keywords | Text |
|-----|-----|
| `Spreadsheet_Cut` | Cut |
| `Spreadsheet_Copy` | Copy |
| `Spreadsheet_Paste` | Paste |
| `Spreadsheet_PasteSpecial` | Paste Special |
| `Spreadsheet_All` | All |
| `Spreadsheet_Values` | Values |
| `Spreadsheet_Formats` | Formats |
| `Spreadsheet_Font` | Font |
| `Spreadsheet_FontSize` | Font Size |
| `Spreadsheet_Bold` | Bold |
| `Spreadsheet_Italic` | Italic |
| `Spreadsheet_Underline` | Underline |
| `Spreadsheet_Strikethrough` | Strikethrough |
| `Spreadsheet_TextColor` | Text Color |
| `Spreadsheet_FillColor` | Fill Color |
| `Spreadsheet_HorizontalAlignment` | Horizontal Alignment |
| `Spreadsheet_AlignLeft` | Align Left |
| `Spreadsheet_AlignCenter` | Center |
| `Spreadsheet_AlignRight` | Align Right |
| `Spreadsheet_VerticalAlignment` | Vertical Alignment |
| `Spreadsheet_AlignTop` | Align Top |
| `Spreadsheet_AlignMiddle` | Align Middle |
| `Spreadsheet_AlignBottom` | Align Bottom |
| `Spreadsheet_InsertFunction` | Insert Function |
| `Spreadsheet_Insert` | Insert |
| `Spreadsheet_Delete` | Delete |
| `Spreadsheet_Rename` | Rename |
| `Spreadsheet_Hide` | Hide |
| `Spreadsheet_Unhide` | Unhide |
| `Spreadsheet_NameBox` | Name Box |
| `Spreadsheet_ShowHeaders` | Show Headers |
| `Spreadsheet_HideHeaders` | Hide Headers |
| `Spreadsheet_ShowGridLines` | Show Gridlines |
| `Spreadsheet_HideGridLines` | Hide Gridlines |
| `Spreadsheet_AddSheet` | Add Sheet |
| `Spreadsheet_ListAllSheets` | List All Sheets |
| `Spreadsheet_FullScreen` | Full Screen |
| `Spreadsheet_CollapseToolbar` | Collapse Toolbar |
| `Spreadsheet_ExpandToolbar` | Expand Toolbar |
| `Spreadsheet_CollapseFormulaBar` | Collapse Formula Bar |
| `Spreadsheet_ExpandFormulaBar` | Expand Formula Bar |
| `Spreadsheet_File` | File |
| `Spreadsheet_Home` | Home |
| `Spreadsheet_Formulas` | Formulas |
| `Spreadsheet_View` | View |
| `Spreadsheet_New` | New |
| `Spreadsheet_Open` | Open |
| `Spreadsheet_SaveAs` | Save As |
| `Spreadsheet_ExcelXlsx` | Microsoft Excel |
| `Spreadsheet_ExcelXls` | Microsoft Excel 97-2003 |
| `Spreadsheet_CSV` | Comma-separated values |
| `Spreadsheet_FormulaBar` | Formula Bar |
| `Spreadsheet_Ok` | Ok |
| `Spreadsheet_Close` | Close |
| `Spreadsheet_Cancel` | Cancel |
| `Spreadsheet_Apply` | Apply |
| `Spreadsheet_MoreColors` | More Colors |
| `Spreadsheet_StandardColors` | Standard Colors |
| `Spreadsheet_General` | General |
| `Spreadsheet_Number` | Number |
| `Spreadsheet_Currency` | Currency |
| `Spreadsheet_Accounting` | Accounting |
| `Spreadsheet_ShortDate` | Short Date |
| `Spreadsheet_LongDate` | Long Date |
| `Spreadsheet_Time` | Time |
| `Spreadsheet_Percentage` | Percentage |
| `Spreadsheet_Fraction` | Fraction |
| `Spreadsheet_Scientific` | Scientific |
| `Spreadsheet_Text` | Text |
| `Spreadsheet_NumberFormat` | Number Format |
| `Spreadsheet_MobileFormulaBarPlaceHolder` | Enter value or Formula |
| `Spreadsheet_PasteAlert` | You can't paste it here because the copy area and paste area aren't in the same size. Please try pasting in a different range. |
| `Spreadsheet_DestroyAlert` | Are you sure you want to destroy the current workbook without saving and create a new workbook? |
| `Spreadsheet_SheetRenameInvalidAlert` | Sheet name contains invalid character. |
| `Spreadsheet_SheetRenameEmptyAlert` | Sheet name cannot be empty. |
| `Spreadsheet_SheetRenameAlreadyExistsAlert` | Sheet name already exists. Please enter another name. |
| `Spreadsheet_DeleteSheetAlert` | Are you sure you want to delete this sheet? |
| `Spreadsheet_DeleteSingleLastSheetAlert` | A Workbook must contain at least one visible worksheet. |
| `Spreadsheet_PickACategory` | Pick a category |
| `Spreadsheet_Description` | Description |
| `Spreadsheet_UnsupportedFile` | Unsupported File |
| `Spreadsheet_InvalidUrl` | Invalid Url |
| `Spreadsheet_InvalidPassword` | Invalid Password |
| `Spreadsheet_Duplicate` | Duplicate |
| `Spreadsheet_MoveRight` | Move Right |
| `Spreadsheet_MoveLeft` | Move Left |
| `Spreadsheet_InsertLeft` | Insert Left |
| `Spreadsheet_InsertRight` | Insert Right |
| `Spreadsheet_InsertRowsAbove` | Insert Rows Above |
| `Spreadsheet_InsertRowsBelow` | Insert Rows Below |
| `Spreadsheet_Sort` | Sort |
| `Spreadsheet_ClearAll` | Clear All |
| `Spreadsheet_ClearFormats` | Clear Formats |
| `Spreadsheet_ClearContents` | Clear Contents |
| `Spreadsheet_ClearHyperlinks` | Clear Hyperlinks |
| `Spreadsheet_Clear` | Clear |
| `Spreadsheet_Link` | Link |
| `Spreadsheet_Image` | Image |

## Internationalization

The Blazor Spreadsheet uses the current .NET culture to display culture-specific values such as numbers, dates, times, currencies, and percentages.

The following example uses the `fr-FR` culture and applies the relevant number formats to show localized output.

```razor
@using System.Globalization
@using Syncfusion.Blazor.Spreadsheet

<SfSpreadsheet @ref="SpreadsheetInstance" DataSource="SpreadsheetData">
</SfSpreadsheet>

@code {
    private SfSpreadsheet SpreadsheetInstance;

    private object[,] SpreadsheetData = new object[,]
    {
        { "Item", "Date", "Time", "Amount", "Percentage" },
        { "Sample", 45367, 0.6458333333, 1250.5, 0.875 }
    };

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        if (firstRender)
        {
            var culture = new CultureInfo("fr-FR");
            CultureInfo.DefaultThreadCurrentCulture = culture;
            CultureInfo.DefaultThreadCurrentUICulture = culture;

            await SpreadsheetInstance.NumberFormatAsync("dd/MM/yyyy", "B2");
            await SpreadsheetInstance.NumberFormatAsync("hh:mm", "C2");
            await SpreadsheetInstance.NumberFormatAsync("#,##0.00 €", "D2");
            await SpreadsheetInstance.NumberFormatAsync("0,00%", "E2");
        }
    }
}
```

## Right-to-left support

Enable right-to-left layout for an individual Spreadsheet by setting the `EnableRtl` property to `true`.

```razor
@using Syncfusion.Blazor.Spreadsheet

<SfSpreadsheet EnableRtl="true">
    <SpreadsheetSheets>
        <SpreadsheetSheet></SpreadsheetSheet>
    </SpreadsheetSheets>
</SfSpreadsheet>
```

You can also enable RTL globally in `Program.cs` by using `AddSyncfusionBlazor()` with RTL enabled in the service configuration used by the application.

## See also

- [Localization](https://blazor.syncfusion.com/documentation/common/localization)
- [Globalization](https://blazor.syncfusion.com/documentation/common/globalization)
- [Right-to-left support](https://blazor.syncfusion.com/documentation/common/right-to-left)
