---
layout: post
title: Formatting in Blazor Spreadsheet Component | Syncfusion
description: Checkout and learn all about formatting options in the Syncfusion Blazor Spreadsheet component | Syncfusion.
platform: document-processing
control: Spreadsheet
documentation: ug
---

# Formatting in Blazor Spreadsheet Component

Formatting options improve data readability and presentation. The Blazor Spreadsheet component provides various formatting options, which can be categorized into:

* Number Formatting
* Text Formatting
* Cell Formatting

The entire formatting functionality can be globally enabled or disabled using the [AllowCellFormatting](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Spreadsheet.SfSpreadsheet.html#Syncfusion_Blazor_Spreadsheet_SfSpreadsheet_AllowCellFormatting) property. By default, [AllowCellFormatting](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Spreadsheet.SfSpreadsheet.html#Syncfusion_Blazor_Spreadsheet_SfSpreadsheet_AllowCellFormatting) is set to **true**.

## Number Formatting

Number formatting in the Blazor Spreadsheet component controls how numeric, date, and time values are displayed without altering their underlying data. The component offers Excel-like number formats that are culture-aware, integrate with undo/redo operations, and respect worksheet protection settings. These formats can be applied through the Ribbon toolbar or programmatically.

The number formatting functionality can be globally enabled or disabled using the [AllowNumberFormatting](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Spreadsheet.SfSpreadsheet.html#Syncfusion_Blazor_Spreadsheet_SfSpreadsheet_AllowNumberFormatting) property. By default, [AllowNumberFormatting](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Spreadsheet.SfSpreadsheet.html#Syncfusion_Blazor_Spreadsheet_SfSpreadsheet_AllowNumberFormatting) is set to **true**.

### Supported Categories

The Blazor Spreadsheet component provides several built-in number format categories to control how numeric, date, and time values are displayed. These formats are culture-aware and ensure proper rendering of decimal separators, currency symbols, and date/time patterns.

| Category | Example Format String | Result Example |
|---|---|---|
| General | `General` | 1234.567 |
| Number | `#,##0.00` | 1234.57 |
| Currency | `$#,##0.00` | $1,234.57 |
| Accounting | `_($* #,##0.00_);_($* (#,##0.00);_($* "-"??_);_(@_)` | $ 1,234.57 |
| Percentage | `0.00%` | 8.90% |
| Scientific | `0.00E+00` | 1.23E+03 |
| Fraction | `# ?/?` | 123 1/2 |
| Short Date | `m/d/yyyy` | 03/15/2025 |
| Long Date | `dddd, mmmm dd, yyyy` | Saturday, March 15, 2025 |
| Time | `h:mm:ss AM/PM` | 3:45:30 PM |

### Applying Number Formats via UI

Number formats can be applied through the UI using the following method:

* Click the **Home** tab in the Ribbon.
* Open the **Number Format** dropdown.
* The dropdown displays previews of built-in formats based on the current culture.

![Blazor Spreadsheet showing Number Format Dropdown in Ribbon](./images/number-format-ribbon.gif)

### Applying Number Formats Programmatically

Number formats can be applied programmatically to the current selection or a specified range using the [NumberFormatAsync](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Spreadsheet.SfSpreadsheet.html#Syncfusion_Blazor_Spreadsheet_SfSpreadsheet_NumberFormatAsync_System_String_System_String_) method. This method accepts a format string and an optional cell address.

| Parameter | Type | Description |
| -- | -- | -- |
| format | string | The built-in format or a supported custom pattern. |
| cellAddress | string (Optional) | The address of the target range where the number format is applied (e.g., `"Sheet1!A2:A5"` or `"A2:A5"`). If the sheet name is not specified, the number format is applied to the specified range in the active sheet. When cellAddress is omitted, the current selection is formatted. |

{% tabs %}
{% highlight razor tabtitle="Index.razor" %}

@using Syncfusion.Blazor.Spreadsheet

<button @onclick="ApplyFormat">Apply number format</button>
<SfSpreadsheet @ref="SpreadsheetInstance" DataSource="DataSourceBytes">
    <SpreadsheetRibbon></SpreadsheetRibbon>
</SfSpreadsheet>

@code {
    public SfSpreadsheet SpreadsheetInstance;
    public byte[] DataSourceBytes { get; set; }

    protected override void OnInitialized()
    {
        string filePath = "wwwroot/Sample.xlsx";
        DataSourceBytes = File.ReadAllBytes(filePath);
    }

    private async Task ApplyFormat()
    {
        // Apply custom percentage format to range A2:A5
        await SpreadsheetInstance.NumberFormatAsync("0.00%", "A2:A5");
        // Apply custom short date format to cell D1 on Sheet2
        await SpreadsheetInstance.NumberFormatAsync("mm/dd/yyyy", "Sheet2!D1");
    }
}
{% endhighlight %}
{% endtabs %}

N> If the built-in formats do not meet specific requirements, custom patterns can be applied programmatically using the [NumberFormatAsync](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Spreadsheet.SfSpreadsheet.html#Syncfusion_Blazor_Spreadsheet_SfSpreadsheet_NumberFormatAsync_System_String_System_String_) method. Patterns must be compatible with Excel-style format strings.

## Text and Cell Formatting

Text and cell formatting enhances the visual presentation of data by applying styles such as font changes, colors, borders, and alignment to individual cells or cell ranges. This helps organize content and emphasize important information for faster interpretation.

### Text Formatting

Text formatting options include:

*   **Bold** - Applies a heavier font weight to make the text stand out in the Spreadsheet.

*   **Italic** - Slants the text to give it a distinct look, often used for emphasis or to highlight differences.

*   **Underline** - Adds a line below the text, commonly used for emphasis or to indicate hyperlinks.

*   **Strikethrough** - Draws a line through the text, often used to show completed tasks or outdated information.

*   **Font Family** - Changes the typeface of the text (e.g., Arial, Calibri, Times New Roman, and more) to enhance readability or visual appeal.

*   **Font Size** - Adjusts the size of the text to create visual hierarchy or improve readability in the Spreadsheet.

*   **Font Color** - Changes the color of the text to improve visual hierarchy or to organize information using color codes.

### Cell Formatting

Cell formatting options include:

*   **Fill Color** - Adds color to the cell background to visually organize data or highlight important information.

*   **Horizontal Alignment** - Controls the position of text from left to right within a cell. Options include:
    *   **Left** - Default for text
    *   **Center** - Useful for headings
    *   **Right** - Default for numbers

*   **Vertical Alignment** - Controls the position of text from top to bottom within a cell. Options include:
    *   **Top** – Aligns content to the top of the cell
    *   **Middle** – Centers content vertically
    *   **Bottom** – Default alignment

*   **Wrap Text** - Displays long content on multiple lines within a single cell, preventing it from overflowing into adjacent cells. To enable text wrapping:
    1.  Select the target cell or range (e.g., C5).
    2.  Go to the Home tab.
    3.  Click Wrap Text in the ribbon to toggle text wrapping for the selected cells.

Text and cell formatting can be applied or removed from a cell or range by using the options available in the component's built-in **Ribbon** under the **Home** tab.

### Borders

Borders visually separate cells and define tables or sections within a worksheet. The Blazor Spreadsheet component supports various border types, styles, colors, and sizes. The available border options are:

| Border Type | Description |
|-------------|-------------|
| Top Border | Applies a border to the top edge of a cell or range of cells. |
| Left Border | Applies a border to the left edge of a cell or range of cells. |
| Right Border | Applies a border to the right edge of a cell or range of cells. |
| Bottom Border | Applies a border to the bottom edge of a cell or range of cells. |
| No Border | Removes all borders from a cell or range of cells. |
| All Border | Applies borders to all sides of a cell or range of cells. |
| Horizontal Border | Applies borders to the top and bottom edges of a cell or range. |
| Vertical Border | Applies borders to the left and right edges of a cell or range. |
| Outside Border | Applies borders to the outer edges of a range of cells. |
| Inside Border | Applies borders to the inner edges of a range of cells |

Border color, size, and style can also be customized. The supported sizes and styles are:

| Type   | Description                      |
|--------|----------------------------------|
| Thin   | Specifies a `1px` border size. |
| Medium | Specifies a `2px` border size.       |
| Thick  | Specifies a `3px` border size.       |
| Solid  | Creates a `solid` border.  |
| Dashed | Creates a `dashed` border.|
| Dotted | Creates a `dotted` border.|
| Double | Creates a `double` border.|

### Applying Borders via UI

Borders can be applied through the UI using the following method:

* Click the **Home** tab in the Ribbon.
* Open the **Borders** dropdown.
* Select the desired border style, color, and size from the dropdown.

![Blazor Spreadsheet displaying available border options on the Home tab in the Ribbon toolbar](./images/borders.gif)

### Applying Borders Programmatically

Borders can be applied programmatically to a specific cell or range of cells using the [SetBordersAsync](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Spreadsheet.SfSpreadsheet.html#Syncfusion_Blazor_Spreadsheet_SfSpreadsheet_SetBordersAsync_Syncfusion_Blazor_Spreadsheet_BorderType_Syncfusion_XlsIO_ExcelLineStyle_System_String_System_String_) method. The available parameters in the [SetBordersAsync](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Spreadsheet.SfSpreadsheet.html#Syncfusion_Blazor_Spreadsheet_SfSpreadsheet_SetBordersAsync_Syncfusion_Blazor_Spreadsheet_BorderType_Syncfusion_XlsIO_ExcelLineStyle_System_String_System_String_)  method are:

| Parameter | Type | Description |
| -- | -- | -- |
| borderType | BorderType | Specifies the type of border to apply (e.g., `BorderType.OutsideBorders`, `BorderType.AllBorders`, `BorderType.TopBorder`). |
| lineStyle | Syncfusion.XlsIO.ExcelLineStyle | Defines the line style of the border (e.g., `Syncfusion.XlsIO.ExcelLineStyle.Thin`, `Syncfusion.XlsIO.ExcelLineStyle.Medium`, `Syncfusion.XlsIO.ExcelLineStyle.Dashed`). |
| borderColor | string | The border color in hexadecimal or named CSS color format (e.g., `"#000000"`, `"red"`, `"#2196F3"`). |
| cellAddress | string (Optional) | The address of the target cell or range (e.g., `"A1"`, `"A1:C5"`, or `"Sheet2!B2:D4"`). If omitted, the operation targets the current selection. |

{% tabs %}
{% highlight razor tabtitle="Index.razor" %}
@using Syncfusion.Blazor.Spreadsheet
@using Syncfusion.XlsIO

<button @onclick="ApplyBorders">Apply Borders</button>
<SfSpreadsheet @ref="SpreadsheetInstance" DataSource="DataSourceBytes"></SfSpreadsheet>

@code {
    public SfSpreadsheet SpreadsheetInstance { get; set; }
    public byte[] DataSourceBytes { get; set; }

    protected override void OnInitialized()
    {
        string filePath = "wwwroot/Sample.xlsx";
        DataSourceBytes = File.ReadAllBytes(filePath);
    }
    public async Task ApplyBorders()
    {
        await SpreadsheetInstance.SetBordersAsync(BorderType.OutsideBorders, ExcelLineStyle.Medium, "#FF0000", "A1:C5");
        await SpreadsheetInstance.SetBordersAsync(BorderType.AllBorders, ExcelLineStyle.Dashed, "#0000FF", "B2:D4");
    }
}
{% endhighlight %}
{% endtabs %}

# Conditional Formatting

Conditional formatting helps you to format a cell or range of cells based on the conditions applied. You can enable or disable conditional formats by using the `AllowConditionalFormat` property.

> The default value for the `AllowConditionalFormat` property is `true`.

## Apply Conditional Formatting

You can apply conditional formatting by using one of the following ways:

* Select the conditional formatting icon in the Ribbon toolbar under the Home Tab.

* Using the `ConditionalFormatAsync()` method to define the condition.

Conditional formatting has the following types in the spreadsheet:

## Highlight Cells Rules

Highlight cells rules option in the conditional formatting enables you to highlight cells with a preset color depending on the cell's value.

The following options can be given for the highlight cells rules as type:

### ConditionalFormatType - Highlight Cells Rules

| Enum | Value | Purpose |
|------|-------|---------|
| `GreaterThan` | GreaterThan | Highlights cells with values greater than a specified threshold |
| `LessThan` | LessThan | Highlights cells with values less than a specified threshold |
| `Between` | Between | Highlights cells with values falling within a specified range |
| `EqualTo` | EqualTo | Highlights cells with values equal to a specified value |
| `ContainsText` | ContainsText | Highlights cells containing specified text |
| `DateOccur` | DateOccur | Highlights cells containing dates matching a specified time period |
| `Duplicate` | Duplicate | Highlights cells with duplicate values within the evaluated range |
| `Unique` | Unique | Highlights cells with unique values within the evaluated range |

The following preset colors can be used for formatting styles:

### ConditionalFormatColor - Preset Colors

| Enum | Value | Purpose |
|------|-------|---------|
| `RedFillWithDarkRedText` | RedFillWithDarkRedText | Light Red Fill with Dark Red Text |
| `YellowFillWithDarkYellowText` | YellowFillWithDarkYellowText | Yellow Fill with Dark Yellow Text |
| `GreenFillWithDarkGreenText` | GreenFillWithDarkGreenText | Green Fill with Dark Green Text |
| `RedFill` | RedFill | Red Fill |
| `RedText` | RedText | Red Text |

## Top Bottom Rules

Top bottom rules option in the conditional formatting allows you to apply formatting to the cells that satisfy a statistical condition with other cells in the range.

The following options can be given for the top bottom rules as type:

### ConditionalFormatType - Top/Bottom Rules

| Enum | Value | Purpose |
|------|-------|---------|
| `Top10Items` | Top10Items | Highlights the top N items in the range by value rank |
| `Bottom10Items` | Bottom10Items | Highlights the bottom N items in the range by value rank |
| `Top10Percentage` | Top10Percentage | Highlights the top N percent of items in the range by value |
| `Bottom10Percentage` | Bottom10Percentage | Highlights the bottom N percent of items in the range by value |
| `BelowAverage` | BelowAverage | Highlights cells with values below the average of the range |
| `AboveAverage` | AboveAverage | Highlights cells with values above the average of the range |

## Data Bars

You can apply data bars to represent the data graphically inside a cell. The longest bar represents the highest value and the shorter bars represent the smaller values.

The following options can be given for the data bars as type:

### ConditionalFormatType - Data Bars

| Enum | Value | Purpose |
|------|-------|---------|
| `BlueDataBar` | BlueDataBar | Data bar visualization with blue fill color |
| `GreenDataBar` | GreenDataBar | Data bar visualization with green fill color |
| `RedDataBar` | RedDataBar | Data bar visualization with red fill color |
| `OrangeDataBar` | OrangeDataBar | Data bar visualization with orange fill color |
| `LightBlueDataBar` | LightBlueDataBar | Data bar visualization with light blue fill color |
| `PurpleDataBar` | PurpleDataBar | Data bar visualization with purple fill color |

## Color Scales

Using color scales, you can format your cells with two or three colors, where different color shades represent the different cell values. In the Green-Yellow-Red (GYR) Color Scale, the cell that holds the minimum value is colored as red. The cell that holds the median is colored as yellow, and the cell that holds the maximum value is colored as green. All other cells are colored proportionally.

The following options can be given for the color scales as type:

### ConditionalFormatType - Color Scales

| Enum | Value | Purpose |
|------|-------|---------|
| `GreenYellowRedColorScale` | GreenYellowRedColorScale | Three-color scale (Green → Yellow → Red) |
| `RedYellowGreenColorScale` | RedYellowGreenColorScale | Three-color scale (Red → Yellow → Green) |
| `GreenWhiteRedColorScale` | GreenWhiteRedColorScale | Three-color scale (Green → White → Red) |
| `RedWhiteGreenColorScale` | RedWhiteGreenColorScale | Three-color scale (Red → White → Green) |
| `BlueWhiteRedColorScale` | BlueWhiteRedColorScale | Two-color scale (Blue → White → Red) |
| `RedWhiteBlueColorScale` | RedWhiteBlueColorScale | Two-color scale (Red → White → Blue) |
| `WhiteRedColorScale` | WhiteRedColorScale | Two-color scale (White → Red) |
| `RedWhiteColorScale` | RedWhiteColorScale | Two-color scale (Red → White) |
| `GreenWhiteColorScale` | GreenWhiteColorScale | Two-color scale (Green → White) |
| `WhiteGreenColorScale` | WhiteGreenColorScale | Two-color scale (White → Green) |
| `GreenYellowColorScale` | GreenYellowColorScale | Two-color scale (Green → Yellow) |
| `YellowGreenColorScale` | YellowGreenColorScale | Two-color scale (Yellow → Green) |

## Icon Sets

Icon sets will help you to visually represent your data with icons. Every icon represents a range of values. In the Three Arrows (colored) icon, the green arrow icon represents the values greater than 67%, the yellow arrow icon represents the values between 33% to 67%, and the red arrow icon represents the values less than 33%.

The following options can be given for the icon sets as type:

### ConditionalFormatType - Icon Sets

| Enum | Value | Purpose |
|------|-------|---------|
| `ThreeArrows` | ThreeArrows | Three-arrow icon set with colored indicators |
| `ThreeArrowsGray` | ThreeArrowsGray | Three-arrow icon set with grayscale coloring |
| `FourArrowsGray` | FourArrowsGray | Four-arrow icon set with grayscale coloring |
| `FourArrows` | FourArrows | Four-arrow icon set with colored indicators |
| `FiveArrowsGray` | FiveArrowsGray | Five-arrow icon set with grayscale coloring |
| `FiveArrows` | FiveArrows | Five-arrow icon set with colored indicators |
| `ThreeTrafficLights1` | ThreeTrafficLights1 | Three traffic light icon set with standard coloring |
| `ThreeTrafficLights2` | ThreeTrafficLights2 | Three traffic light icon set with alternate coloring |
| `ThreeSigns` | ThreeSigns | Three-sign icon set with caution-style icons |
| `FourTrafficLights` | FourTrafficLights | Four traffic light icon set |
| `FourRedToBlack` | FourRedToBlack | Four-icon set progressing from red to black |
| `ThreeSymbols` | ThreeSymbols | Three-symbol icon set with colored symbols |
| `ThreeSymbols2` | ThreeSymbols2 | Alternative three-symbol icon set with colored symbols |
| `ThreeFlags` | ThreeFlags | Three-flag icon set for categorization |
| `FourRating` | FourRating | Four-star rating icon set |
| `FiveQuarters` | FiveQuarters | Five-quarters icon set for fractional representation |
| `FiveRating` | FiveRating | Five-star rating icon set |
| `ThreeTriangles` | ThreeTriangles | Three-triangle icon set for direction or trend indication |
| `ThreeStars` | ThreeStars | Three-star icon set for rating representation |
| `FiveBoxes` | FiveBoxes | Five-box icon set for level or stage representation |

## Custom Format

Using the custom format for conditional formatting you can set cell styles like color, background color, font style, font weight, and underline.

In the MAY and JUN columns, we have applied conditional formatting custom format.

> In the Conditional format, custom format is supported for Highlight cell rules and Top bottom rules.

## Clear Rules

You can clear the defined rules by using one of the following ways:

* Using the "Clear Rules" option in the Conditional Formatting button of HOME Tab in the ribbon to clear the rule from selected cells.

* Using the `ClearConditionalFormatsAsync()` method to clear the defined rules.

{% tabs %}
{% highlight razor tabtitle="Index.razor" %}
<SfButton OnClick="ApplyConditionalRule">Apply Rule</SfButton>
<SfSpreadsheet @ref="SpreadsheetInstance"></SfSpreadsheet>

@code {
    public SfSpreadsheet SpreadsheetInstance { get; set; }

    private async Task ApplyConditionalRule()
    {
        var rule = new ConditionalFormatRule
        {
            ConditionalFormatType = ConditionalFormatType.GreaterThan,
            PrimaryValue = "100",
            Range = "A1:A10",
            ConditionalFormatColor = ConditionalFormatColor.GreenFillWithDarkGreenText
        };

        await SpreadsheetInstance.ConditionalFormatAsync(rule);
    }
}
{% endhighlight %}
{% endtabs %}

## Limitations of Conditional Formatting

The following features have some limitations in Conditional Formatting:

* Insert row/column between the conditional formatting.
* Conditional formatting with formula support.
* Copy and paste the conditional formatting applied cells.
* Custom rule support.
 
### Limitations

*   A custom number format UI dialog is not available, custom formats must be applied using the API.
*  After inserting a row or column, border expansion is not currently supported.