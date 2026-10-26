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

The following table lists some of the Spreadsheet localization keys that are available in the resource file.

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

The following example localizes the Spreadsheet to French.

{% tabs %}
{% highlight razor tabtitle="~/Pages/Index.razor" %}
@using Syncfusion.Blazor
@using Syncfusion.Blazor.Spreadsheet

<SfSpreadsheet>
    <SpreadsheetRibbon></SpreadsheetRibbon>
</SfSpreadsheet>
{% endhighlight %}
{% highlight csharp tabtitle="Program.cs" %}
using System.Globalization;
using Syncfusion.Blazor;
using Syncfusion.Blazor.Localization;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddSingleton<ISyncfusionStringLocalizer, SpreadsheetLocalizer>();
builder.Services.AddSyncfusionBlazor();

var app = builder.Build();
app.Run();

public class SpreadsheetLocalizer : ISyncfusionStringLocalizer
{
    public string GetText(string key)
    {
        return SfResources.ResourceManager.GetString(key) ?? key;
    }
}
{% endhighlight %}
{% endtabs %}

## Internationalization

The Blazor Spreadsheet uses the current .NET culture to display culture-specific values such as numbers, dates, times, currencies, and percentages.

The following example uses the `fr-FR` culture and formats values according to that culture.

{% tabs %}
{% highlight razor tabtitle="~/Pages/Index.razor" %}
@using System.Globalization
@using Syncfusion.Blazor.Spreadsheet

<SfSpreadsheet>
    <SpreadsheetSheets>
        <SpreadsheetSheet>
            <SpreadsheetRows>
                <SpreadsheetRow>
                    <SpreadsheetCells>
                        <SpreadsheetCell Value="1234.56"></SpreadsheetCell>
                        <SpreadsheetCell Value="03/15/2025"></SpreadsheetCell>
                        <SpreadsheetCell Value="15:30"></SpreadsheetCell>
                        <SpreadsheetCell Value="0.85"></SpreadsheetCell>
                    </SpreadsheetCells>
                </SpreadsheetRow>
            </SpreadsheetRows>
            <SpreadsheetColumns>
                <SpreadsheetColumn Width="140"></SpreadsheetColumn>
                <SpreadsheetColumn Width="140"></SpreadsheetColumn>
                <SpreadsheetColumn Width="140"></SpreadsheetColumn>
                <SpreadsheetColumn Width="140"></SpreadsheetColumn>
            </SpreadsheetColumns>
        </SpreadsheetSheet>
    </SpreadsheetSheets>
</SfSpreadsheet>

@code {
    protected override void OnInitialized()
    {
        var culture = new CultureInfo("fr-FR");
        CultureInfo.DefaultThreadCurrentCulture = culture;
        CultureInfo.DefaultThreadCurrentUICulture = culture;
    }
}
{% endhighlight %}
{% endtabs %}

## Right to left (RTL)

Enable right-to-left layout for an individual Spreadsheet by setting the `EnableRtl` property to `true`.

{% tabs %}
{% highlight razor tabtitle="~/Pages/Index.razor" %}
@using Syncfusion.Blazor.Spreadsheet

<SfSpreadsheet EnableRtl="true">
    <SpreadsheetSheets>
        <SpreadsheetSheet></SpreadsheetSheet>
    </SpreadsheetSheets>
</SfSpreadsheet>
{% endhighlight %}
{% highlight csharp tabtitle="Program.cs" %}
using Syncfusion.Blazor;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddSyncfusionBlazor();
{% endhighlight %}
{% endtabs %}

You can also enable RTL globally in `Program.cs` by using `AddSyncfusionBlazor()` with RTL enabled in the service configuration used by the application.

## See also

- [Localization](https://blazor.syncfusion.com/documentation/common/localization)
- [Globalization](https://blazor.syncfusion.com/documentation/common/globalization)
- [Right-to-left support](https://blazor.syncfusion.com/documentation/common/right-to-left)
