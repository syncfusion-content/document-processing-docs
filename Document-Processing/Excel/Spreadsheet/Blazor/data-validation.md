---
layout: post
title: Data Validation in Blazor Spreadsheet | Syncfusion
description: Learn about data validation in the Syncfusion Blazor Spreadsheet component, including validation rules and input restrictions.
platform: document-processing
control: Spreadsheet
documentation: ug
---

# Data Validation in Blazor Spreadsheet

Data validation in the [Blazor Spreadsheet Editor](https://www.syncfusion.com/spreadsheet-editor-sdk/blazor-spreadsheet-editor) restricts users from entering invalid data. Use the [AllowDataValidation](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Spreadsheet.SfSpreadsheet.html#Syncfusion_Blazor_Spreadsheet_SfSpreadsheet_AllowDataValidation) property to enable or disable data validation.

N> The default value for the [AllowDataValidation](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Spreadsheet.SfSpreadsheet.html#Syncfusion_Blazor_Spreadsheet_SfSpreadsheet_AllowDataValidation) property is **true**.

## Apply Validation

You can apply data validation to restrict the type of data or the values that users enter into a cell.

You can apply data validation by using one of the following ways:

* **Ribbon UI:** Select the **Data** tab in the **Ribbon** toolbar, and then choose the **Data Validation** item.
* **Programmatically:** Use the [AddDataValidationAsync()](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Spreadsheet.SfSpreadsheet.html#Syncfusion_Blazor_Spreadsheet_SfSpreadsheet_AddDataValidationAsync_Syncfusion_Blazor_Spreadsheet_ValidationRule_) method.


The validation settings are defined through the [ValidationRule](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Spreadsheet.ValidationRule.html) class, which specifies the validation type, the comparison operator, the values against which cell data is evaluated, and the target range:

| Property | Type | Description |
| -- | -- | -- |
| Range | string | Specifies the cell or range to which the rule is applied (for example, `"A2:A5"`). If not specified, the currently selected range in the active worksheet is used. |
| Type | [ValidationType](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Spreadsheet.ValidationType.html) | Specifies the type of data allowed: **Any**, **WholeNumber**, **Decimal**, **Date**, **Time**, **TextLength**, **List**, or **Custom**. The default value is **ValidationType.WholeNumber**. |
| Operator | [ValidationOperator](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Spreadsheet.ValidationOperator.html) | Specifies how the entered value is compared: **Between**, **NotBetween**, **EqualTo**, **NotEqualTo**, **GreaterThan**, **LessThan**, **GreaterThanOrEqualTo**, or **LessThanOrEqualTo**. The default value is **ValidationOperator.Between**. |
| Value1 | string | Specifies the primary validation value. For **Between** and **NotBetween**, this is the starting value of the range. For **Custom** validation, this specifies the custom formula (for example, `"=AND(B2>10, B2<100)"`). |
| Value2 | string | Specifies the secondary validation value. It is used only when the selected operator requires both a starting and an ending value (**Between**, **NotBetween**). |
| ListSource | string | Specifies the source of values for **List** validation. It accepts comma-separated values (for example, `"Wheelbarrow, JCB"`) or a cell range reference (for example, `"Sheet2!A2:A10"`). |
| IgnoreBlank | bool | When set to **true**, blank cells are ignored during validation. The default value is **true**. |
| ShowInCellDropdown | bool | When set to **true**, an in-cell dropdown is displayed for **List** validation, allowing users to pick a value from the list instead of typing it. The default value is **true**. |

## Clear Validation

Clear validation feature is used to remove the data validation rules applied to a cell or range. After the rules are removed, cell values are no longer validated against them.

You can clear data validation rule by using one of the following ways:

* **Ribbon UI:** Select the **Data** tab in the **Ribbon** toolbar, and then choose the **Clear Validation** item.
* **Programmatically:** Use the [RemoveDataValidationAsync()](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Spreadsheet.SfSpreadsheet.html#Syncfusion_Blazor_Spreadsheet_SfSpreadsheet_RemoveDataValidationAsync_System_String_) method. If no range is specified, the rules applied to the currently selected range in the active worksheet are removed.

{% tabs %}
{% highlight razor tabtitle="Index.razor" %}

@page "/"
@using Syncfusion.Blazor.Spreadsheet
@using Syncfusion.Blazor.Buttons

<SfButton OnClick="RemoveValidationRules" Content="Remove Validation"></SfButton>

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

    // Removes the data validation rules applied to the range A1:A10.
    public async Task RemoveValidationRules()
    {
        await SpreadsheetInstance.RemoveDataValidationAsync("A1:A10");
    }
}

{% endhighlight %}
{% endtabs %}

## Highlight Invalid Data

Use the Highlight Invalid Data feature to highlight the previously entered invalid values.

* Ribbon UI: Select the Data tab, then choose Highlight Invalid Data.


## Clear Highlighted Invalid Data

Clear highlight feature is used to remove the highlight from invalid cells.

* **Ribbon UI**: Select the Data tab, then choose Highlight Invalid Data.
* You can clear the highlighted invalid data by setting the [ShowInvalidDataHighlights](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Spreadsheet.SfSpreadsheet.html#Syncfusion_Blazor_Spreadsheet_SfSpreadsheet_ShowInvalidDataHighlights) property to **false**. 


## Custom Data Validation

The Spreadsheet supports custom data validation, allowing users to define their own validation rules for specific cells or ranges. This feature enables you to set conditions that the entered data must meet, making it particularly useful when predefined validation options, such as numbers, dates, or lists, are insufficient.

With custom validation, you can enforce rules using logical expressions or formulas to ensure that only valid data is entered into the Spreadsheet.

**Example:** Validate a number between 10 and 100 using the formula `=AND(B2>10, B2<100)`, where B2 is the cell being validated. The Spreadsheet evaluates entered values against the formula and displays an alert if validation fails.

You can apply custom data validation using two methods:

* **Ribbon UI:** Navigate to **Data** tab, select **Data Validation**, then choose **Custom** from the **Allow** dropdown.
* **Programmatically:** Use the [AddDataValidationAsync()](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Spreadsheet.SfSpreadsheet.html#Syncfusion_Blazor_Spreadsheet_SfSpreadsheet_AddDataValidationAsync_Syncfusion_Blazor_Spreadsheet_ValidationRule_) method with `Type` set to **ValidationType.Custom**.

The following code example demonstrates how to add custom data validation with a formula in a Spreadsheet:

{% tabs %}
{% highlight razor tabtitle="Index.razor" %}

@page "/"
@using Syncfusion.Blazor.Spreadsheet
@using Syncfusion.Blazor.Buttons

<SfButton OnClick="ApplyCustomValidation" Content="Apply Custom Validation"></SfButton>

<SfSpreadsheet @ref="SpreadsheetInstance" DataSource="DataSourceBytes" ShowInvalidDataHighlights="true">
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

    public async Task ApplyCustomValidation()
    {
        // Validate that each entered value in "E2:E5" is greater than 10 and less than 100.
        await SpreadsheetInstance.AddDataValidationAsync(new ValidationRule
        {
            Type = ValidationType.Custom,
            Value1 = "=AND(B2>10, B2<100)",
            Range = "E2:E5",
            IgnoreBlank = true
        });
    }
}

{% endhighlight %}
{% endtabs %}



