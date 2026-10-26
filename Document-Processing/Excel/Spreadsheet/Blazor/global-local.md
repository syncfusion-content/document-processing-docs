---
layout: post
title: Globalization in Blazor Spreadsheet | Syncfusion
description: Learn how to localize the Blazor Spreadsheet, display culture-specific values, and enable right-to-left layout.
platform: document-processing
control: Spreadsheet
documentation: ug
---

# Globalization in Blazor Spreadsheet

## Localization

Use resource files to localize the built-in text in the Blazor Spreadsheet. Add `SfResources.resx` and the required culture-specific resource file to the application's `Resources` folder, and set the access modifier of `SfResources.resx` to `Public`.

Create a class that implements `ISyncfusionStringLocalizer` and returns `SfResources.ResourceManager`. Then register the localizer and Syncfusion services in `Program.cs`.

When the application runs, set `CultureInfo.DefaultThreadCurrentCulture` and `CultureInfo.DefaultThreadCurrentUICulture` to the culture that you want to display.

The following example localizes the Spreadsheet to French.

```razor
@using System.Globalization
@using Syncfusion.Blazor
@using Syncfusion.Blazor.Spreadsheet

<SfSpreadsheet>
    <SpreadsheetRibbon></SpreadsheetRibbon>
</SfSpreadsheet>

@code {
    protected override void OnInitialized()
    {
        var culture = new CultureInfo("fr-FR");
        CultureInfo.DefaultThreadCurrentCulture = culture;
        CultureInfo.DefaultThreadCurrentUICulture = culture;
    }
}
```

```csharp
using System.Globalization;
using System.Resources;
using Syncfusion.Blazor;

public class SpreadsheetLocalizer : ISyncfusionStringLocalizer
{
    public ResourceManager GetResourceManager() => SfResources.ResourceManager;
}

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddSingleton<ISyncfusionStringLocalizer, SpreadsheetLocalizer>();
builder.Services.AddSyncfusionBlazor();

var app = builder.Build();
app.Run();
```

```xml
<!-- Resources/SfResources.resx -->
<data name="Cut" xml:space="preserve">
  <value>Couper</value>
</data>
<data name="Copy" xml:space="preserve">
  <value>Copier</value>
</data>
<data name="Paste" xml:space="preserve">
  <value>Coller</value>
</data>
```

If you are using a Blazor WebAssembly application, add `BlazorWebAssemblyLoadAllGlobalizationData="true"` in `wwwroot/index.html` so the culture-specific data is available to the app.

## Internationalization

The Blazor Spreadsheet uses the current .NET culture to display culture-specific values such as numbers, dates, times, currencies, and percentages.

The following example uses the `fr-FR` culture and formats values according to that culture.

```razor
@using System.Globalization
@using Syncfusion.Blazor.Spreadsheet

<SfSpreadsheet>
    <SpreadsheetSheets>
        <SpreadsheetSheet>
            <SpreadsheetRows>
                <SpreadsheetRow>
                    <SpreadsheetCells>
                        <SpreadsheetCell Value="1234.56"></SpreadsheetCell>
                        <SpreadsheetCell Value="15/03/2025"></SpreadsheetCell>
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
