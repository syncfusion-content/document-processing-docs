---
layout: post
title: Ribbon Customization in Blazor Spreadsheet Component | Syncfusion
description: Checkout and learn here about ribbon customization in the Syncfusion Blazor Spreadsheet component and more.
platform: document-processing
control: Spreadsheet
documentation: ug
---

# Ribbon Customization in Blazor Spreadsheet Component

The Blazor Spreadsheet component provides a comprehensive ribbon interface that can be customized to match your application's needs. You can control the visibility, state, and layout of ribbon elements including tabs, groups, and items. Additionally, you can add custom tabs, groups, and items to extend the ribbon with your own functionality.

## Overview

The ribbon in the Spreadsheet component is organized hierarchically with tabs at the top level, groups as related containers within tabs, and items as individual controls within groups. Ribbon customization can be achieved either declaratively using property binding or dynamically using methods, depending on your application requirements.

## Ribbon Customization Through Property Binding

Property binding enables declarative customization of the ribbon during component initialization, making it ideal for defining static configurations in advance.

### Customize Built-in Ribbon Tabs

Built-in tabs can be customized using the [RibbonTabItems](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Spreadsheet.SfSpreadsheet.html#Syncfusion_Blazor_Spreadsheet_SfSpreadsheet_RibbonTabItems) property. Tabs can be hidden, reordered, and their display text changed.

| Property | Type | Description |
|--|--|--|
| TabId | string | The unique identifier of the ribbon tab (e.g., "homeTab", "insertTab") |
| IsVisible | bool | Controls whether the tab is visible in the ribbon. Default is **true** |
| Order | int? | Sets the tab's display order. Lower values appear first. Default is **null** |
| HeaderText | string | Overrides the tab's display label. |

{% tabs %}
{% highlight razor tabtitle="Index.razor" %}

@page "/"
@using Syncfusion.Blazor.Spreadsheet

<SfSpreadsheet RibbonTabItems="@GetTabCustomizations()">
    <SpreadsheetRibbon></SpreadsheetRibbon>
</SfSpreadsheet>

@code {

    private List<SpreadsheetRibbonTab> GetTabCustomizations()
    {
        return new List<SpreadsheetRibbonTab>
        {
            // Hide the Review tab
            new SpreadsheetRibbonTab { TabId = "reviewTab", IsVisible = false },
            
            // Reorder View tab to appear after Home
            new SpreadsheetRibbonTab { TabId = "viewTab", Order = 1 },
            
            // Rename the Insert tab
            new SpreadsheetRibbonTab { TabId = "insertTab", HeaderText = "Add Objects" }
        };
    }
}

{% endhighlight %}
{% endtabs %}

### Customize Built-in Ribbon Groups

Built-in groups within tabs can be customized using the [RibbonGroupItems](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Spreadsheet.SfSpreadsheet.html#Syncfusion_Blazor_Spreadsheet_SfSpreadsheet_RibbonGroupItems) property. Groups can be hidden and reordered within their parent tab.

| Property | Type | Description |
|--|--|--|
| GroupId | string | The unique identifier of the ribbon group (e.g., "clipboardGroup", "fontStyleGroup") |
| TabId | string | The ID of the parent tab containing this group |
| IsVisible | bool | Controls whether the group is visible. Default is **true** |
| Order | int? | Sets the group's display order within its tab. Lower values appear first. Default is **null** |

{% tabs %}
{% highlight razor tabtitle="Index.razor" %}

@page "/"
@using Syncfusion.Blazor.Spreadsheet

<SfSpreadsheet RibbonGroupItems="@GetGroupCustomizations()">
    <SpreadsheetRibbon></SpreadsheetRibbon>
</SfSpreadsheet>

@code {

    private List<SpreadsheetRibbonGroup> GetGroupCustomizations()
    {
        return new List<SpreadsheetRibbonGroup>
        {
            // Hide the Borders group in Home tab
            new SpreadsheetRibbonGroup { GroupId = "bordersGroup", TabId = "homeTab", IsVisible = false },
            
            // Move Font Alignment group to appear first in Home tab
            new SpreadsheetRibbonGroup { GroupId = "fontAlignmentGroup", TabId = "homeTab", Order = 0 }
        };
    }
}

{% endhighlight %}
{% endtabs %}

### Customize Built-in Ribbon Items

Individual ribbon items can be customized using the [RibbonItems](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Spreadsheet.SfSpreadsheet.html#Syncfusion_Blazor_Spreadsheet_SfSpreadsheet_RibbonItems) property. Items can be hidden, disabled, and reordered within their group.

| Property | Type | Description |
|--|--|--|
| ItemId | string | The unique identifier of the ribbon item (e.g., "bold", "italic").|
| GroupId | string | The ID of the parent group containing this item |
| IsVisible | bool | Controls whether the item is visible. Default is **true** |
| IsEnabled | bool? | Controls whether the item is enabled (clickable). Default is **null** |
| Order | int? | Sets the item's display order within its group. Lower values appear first. Default is **null** |

{% tabs %}
{% highlight razor tabtitle="Index.razor" %}

@page "/"
@using Syncfusion.Blazor.Spreadsheet

<SfSpreadsheet RibbonItems="@GetItemCustomizations()">
    <SpreadsheetRibbon></SpreadsheetRibbon>
</SfSpreadsheet>

@code {

    private List<SpreadsheetRibbonItem> GetItemCustomizations()
    {
        return new List<SpreadsheetRibbonItem>
        {
            // Hide the Strikethrough button
            new SpreadsheetRibbonItem { ItemId = "strikethrough", IsVisible = false },
            
            // Always disable the Protect Sheet button (still visible but grayed out)
            new SpreadsheetRibbonItem { ItemId = "protectSheet", IsEnabled = false },
            
            // Reorder Italic button to appear first in Font Style group
            new SpreadsheetRibbonItem { ItemId = "italic", Order = 0 }
        };
    }
}

{% endhighlight %}
{% endtabs %}

### Add Custom Ribbon Tabs

The ribbon can be extended with completely new tabs using the [CustomRibbonTabs](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Spreadsheet.SfSpreadsheet.html#Syncfusion_Blazor_Spreadsheet_SfSpreadsheet_CustomRibbonTabs) property. Custom tabs are rendered using Blazor components.

| Property | Type | Description |
|--|--|--|
| Index | int | The position where the tab will be inserted. Use **-1** to append at the end. Default is **-1** |
| Template | RenderFragment | The Blazor markup defining the tab's content and layout |

{% tabs %}
{% highlight razor tabtitle="Index.razor" %}

@page "/"
@using Syncfusion.Blazor.Spreadsheet
@using Syncfusion.Blazor.Ribbon

<SfSpreadsheet CustomRibbonTabs="@GetCustomTabs()">
    <SpreadsheetRibbon></SpreadsheetRibbon>
</SfSpreadsheet>

@code {

    private List<SpreadsheetCustomRibbonTab> GetCustomTabs()
    {
        return new List<SpreadsheetCustomRibbonTab>
        {
            new SpreadsheetCustomRibbonTab
            {
                Index = 2,  // Insert after Insert tab
                Template = CreateCustomTabTemplate()
            }
        };
    }

    private RenderFragment CreateCustomTabTemplate()
    {
        return @<RibbonTab ID="toolsTab" HeaderText="Tools">
            <RibbonGroups>
                <RibbonGroup ID="utilitiesGroup" HeaderText="Utilities">
                    <RibbonCollections>
                        <RibbonCollection>
                            <RibbonItems>
                                <RibbonItem Type="RibbonItemType.Button">
                                    <RibbonButtonSettings Content="Analyze" IconCss="e-icons e-chart" @onclick="OnAnalyzeClick"></RibbonButtonSettings>
                                </RibbonItem>
                            </RibbonItems>
                        </RibbonCollection>
                    </RibbonCollections>
                </RibbonGroup>
            </RibbonGroups>
        </RibbonTab>;
    }

    private void OnAnalyzeClick()
    {
        // Custom analyze logic
        Console.WriteLine("Analyze clicked");
    }
}

{% endhighlight %}
{% endtabs %}

### Add Custom Ribbon Groups

Custom groups can be added to existing tabs using the [CustomRibbonGroups](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Spreadsheet.SfSpreadsheet.html#Syncfusion_Blazor_Spreadsheet_SfSpreadsheet_CustomRibbonGroups) property.

| Property | Type | Description |
|--|--|--|
| TabId | string | The ID of the parent tab where the group will be added |
| Index | int | The position where the group will be inserted within the tab. Use **-1** to append at the end |
| Template | RenderFragment | The Blazor markup defining the group's content |

{% tabs %}
{% highlight razor tabtitle="Index.razor" %}

@page "/"
@using Syncfusion.Blazor.Spreadsheet
@using Syncfusion.Blazor.Ribbon

<SfSpreadsheet CustomRibbonGroups="@GetCustomGroups()">
    <SpreadsheetRibbon></SpreadsheetRibbon>
</SfSpreadsheet>

@code {

    private List<SpreadsheetCustomRibbonGroup> GetCustomGroups()
    {
        return new List<SpreadsheetCustomRibbonGroup>
        {
            new SpreadsheetCustomRibbonGroup
            {
                TabId = "homeTab",
                Index = 8,  // Insert after existing groups
                Template = CreateCustomGroupTemplate()
            }
        };
    }

    private RenderFragment CreateCustomGroupTemplate()
    {
        return @<RibbonGroup ID="exportGroup" HeaderText="Export">
            <RibbonCollections>
                <RibbonCollection>
                    <RibbonItems>
                        <RibbonItem Type="RibbonItemType.Button">
                            <RibbonButtonSettings Content="Export PDF" IconCss="e-icons e-export-pdf" @onclick="OnExportPdf"></RibbonButtonSettings>
                        </RibbonItem>
                    </RibbonItems>
                </RibbonCollection>
            </RibbonCollections>
        </RibbonGroup>;
    }

    private void OnExportPdf()
    {
        // Export to PDF logic
        Console.WriteLine("Export PDF clicked");
    }
}

{% endhighlight %}
{% endtabs %}

### Add Custom Ribbon Items

Custom items can be added to existing groups using the [CustomRibbonItems](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Spreadsheet.SfSpreadsheet.html#Syncfusion_Blazor_Spreadsheet_SfSpreadsheet_CustomRibbonItems) property.

| Property | Type | Description |
|--|--|--|
| GroupId | string | The ID of the parent group where the item will be added |
| Index | int | The position where the item will be inserted within the group. Use **-1** to append at the end |
| Template | RenderFragment | The Blazor markup defining the item's content |

{% tabs %}
{% highlight razor tabtitle="Index.razor" %}

@page "/"
@using Syncfusion.Blazor.Spreadsheet
@using Syncfusion.Blazor.Ribbon

<SfSpreadsheet CustomRibbonItems="@GetCustomItems()">
    <SpreadsheetRibbon></SpreadsheetRibbon>
</SfSpreadsheet>

@code {

    private List<SpreadsheetCustomRibbonItem> GetCustomItems()
    {
        return new List<SpreadsheetCustomRibbonItem>
        {
            new SpreadsheetCustomRibbonItem
            {
                GroupId = "clipboardGroup",
                Index = 3,  // Insert after Paste item
                Template = CreateCustomItemTemplate()
            }
        };
    }

    private RenderFragment CreateCustomItemTemplate()
    {
        return @<RibbonItem Type="RibbonItemType.Button">
            <RibbonButtonSettings Content="Paste Special" IconCss="e-icons e-paste-special" @onclick="OnPasteSpecial"></RibbonButtonSettings>
        </RibbonItem>;
    }

    private void OnPasteSpecial()
    {
        // Paste special logic
        Console.WriteLine("Paste Special clicked");
    }
}

{% endhighlight %}
{% endtabs %}

## Ribbon Customization Through Methods

Methods provide programmatic control over ribbon elements during the component lifecycle. This approach is ideal for dynamic customizations based on user actions or application state.

### Show and Hide Tabs

Tab visibility can be controlled using the [ShowRibbonTabs](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Spreadsheet.SfSpreadsheet.html#Syncfusion_Blazor_Spreadsheet_SfSpreadsheet_ShowRibbonTabs_System_Collections_Generic_List_System_String__) and [HideRibbonTabs](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Spreadsheet.SfSpreadsheet.html#Syncfusion_Blazor_Spreadsheet_SfSpreadsheet_HideRibbonTabs_System_Collections_Generic_List_System_String__) methods.

{% tabs %}
{% highlight razor tabtitle="Index.razor" %}

@page "/"
@using Syncfusion.Blazor.Spreadsheet
@using Syncfusion.Blazor.Buttons

<SfButton OnClick="HideTabs" Content="Hide Tabs"></SfButton>
<SfButton OnClick="ShowTabs" Content="Show Tabs"></SfButton>

<SfSpreadsheet @ref="SpreadsheetInstance">
    <SpreadsheetRibbon></SpreadsheetRibbon>
</SfSpreadsheet>

@code {
    public SfSpreadsheet SpreadsheetInstance { get; set; }

    private void HideTabs()
    {
        SpreadsheetInstance.HideRibbonTabs(new List<string> { "Review", "View" });
    }

    private void ShowTabs()
    {
        SpreadsheetInstance.ShowRibbonTabs(new List<string> { "Review", "View" });
    }
}

{% endhighlight %}
{% endtabs %}

### Enable and Disable Tabs

Tab interactivity can be controlled using the [EnableRibbonTabs](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Spreadsheet.SfSpreadsheet.html#Syncfusion_Blazor_Spreadsheet_SfSpreadsheet_EnableRibbonTabs_System_Collections_Generic_List_System_String__) and [DisableRibbonTabs](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Spreadsheet.SfSpreadsheet.html#Syncfusion_Blazor_Spreadsheet_SfSpreadsheet_DisableRibbonTabs_System_Collections_Generic_List_System_String__) methods. Disabled tabs appear grayed out but remain visible.

{% tabs %}
{% highlight razor tabtitle="Index.razor" %}

@page "/"
@using Syncfusion.Blazor.Spreadsheet
@using Syncfusion.Blazor.Buttons

<SfButton OnClick="DisableTabs" Content="Disable Tabs"></SfButton>
<SfButton OnClick="EnableTabs" Content="Enable Tabs"></SfButton>

<SfSpreadsheet @ref="SpreadsheetInstance">
    <SpreadsheetRibbon></SpreadsheetRibbon>
</SfSpreadsheet>

@code {
    public SfSpreadsheet SpreadsheetInstance { get; set; }

    private void DisableTabs()
    {
        SpreadsheetInstance.DisableRibbonTabs(new List<string> { "Home", "Review", "View" });
    }

    private void EnableTabs()
    {
        SpreadsheetInstance.EnableRibbonTabs(new List<string> { "Home", "Review", "View" });
    }
}

{% endhighlight %}
{% endtabs %}

### Show and Hide Items

Item visibility can be controlled using the [ShowRibbonItems](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Spreadsheet.SfSpreadsheet.html#Syncfusion_Blazor_Spreadsheet_SfSpreadsheet_ShowRibbonItems_System_Collections_Generic_List_System_String__) and [HideRibbonItems](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Spreadsheet.SfSpreadsheet.html#Syncfusion_Blazor_Spreadsheet_SfSpreadsheet_HideRibbonItems_System_Collections_Generic_List_System_String__) methods. Hidden items are completely removed from the ribbon interface.

{% tabs %}
{% highlight razor tabtitle="Index.razor" %}

@page "/"
@using Syncfusion.Blazor.Spreadsheet
@using Syncfusion.Blazor.Buttons

<SfButton OnClick="HideItems" Content="Hide Items"></SfButton>
<SfButton OnClick="ShowItems" Content="Show Items"></SfButton>

<SfSpreadsheet @ref="SpreadsheetInstance" DataSource="DataSourceBytes">
    <SpreadsheetRibbon></SpreadsheetRibbon>
</SfSpreadsheet>

@code {
    public SfSpreadsheet SpreadsheetInstance { get; set; }
    public byte[] DataSourceBytes { get; set; } = File.ReadAllBytes("wwwroot/Sample.xlsx");

    private void HideItems()
    {
        SpreadsheetInstance.HideRibbonItems(new List<string> { "cut", "paste" });
    }

    private void ShowItems()
    {
        SpreadsheetInstance.ShowRibbonItems(new List<string> { "cut", "paste", "strikethrough" });
    }
}

{% endhighlight %}
{% endtabs %}

### Enable and Disable Items

Item interactivity can be controlled using the [EnableRibbonItems](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Spreadsheet.SfSpreadsheet.html#Syncfusion_Blazor_Spreadsheet_SfSpreadsheet_EnableRibbonItems_System_Collections_Generic_List_System_String__) and [DisableRibbonItems](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Spreadsheet.SfSpreadsheet.html#Syncfusion_Blazor_Spreadsheet_SfSpreadsheet_DisableRibbonItems_System_Collections_Generic_List_System_String__) methods. Disabled items appear grayed out but remain visible.

{% tabs %}
{% highlight razor tabtitle="Index.razor" %}

@page "/"
@using Syncfusion.Blazor.Spreadsheet
@using Syncfusion.Blazor.Buttons

<SfButton OnClick="DisableItems" Content="Disable Items"></SfButton>
<SfButton OnClick="EnableItems" Content="Enable Items"></SfButton>

<SfSpreadsheet @ref="SpreadsheetInstance" DataSource="DataSourceBytes">
    <SpreadsheetRibbon></SpreadsheetRibbon>
</SfSpreadsheet>

@code {
    public SfSpreadsheet SpreadsheetInstance { get; set; }
    public byte[] DataSourceBytes { get; set; } = File.ReadAllBytes("wwwroot/Sample.xlsx");

    private void DisableItems()
    {
        SpreadsheetInstance.DisableRibbonItems(new List<string> { "cut", "italic", "bold" });
    }

    private void EnableItems()
    {
        SpreadsheetInstance.EnableRibbonItems(new List<string> { "cut", "italic", "bold" });
    }
}

{% endhighlight %}
{% endtabs %}

### Add Ribbon Tabs 

Custom tabs can be added dynamically using the [AddRibbonTab](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Spreadsheet.SfSpreadsheet.html#Syncfusion_Blazor_Spreadsheet_SfSpreadsheet_AddRibbonTab_Syncfusion_Blazor_Navigations_RibbonTab_System_Int32_) method.

{% tabs %}
{% highlight razor tabtitle="Index.razor" %}

@page "/"
@using Syncfusion.Blazor.Spreadsheet
@using Syncfusion.Blazor.Navigations
@using Syncfusion.Blazor.Buttons

<SfButton OnClick="AddTab" Content="Add Custom Tab"></SfButton>

<SfSpreadsheet @ref="SpreadsheetInstance">
    <SpreadsheetRibbon></SpreadsheetRibbon>
</SfSpreadsheet>

@code {
    public SfSpreadsheet SpreadsheetInstance { get; set; }

    private void AddTab()
    {
        var tab = new RibbonTab 
        { 
            HeaderText = "Custom",
            ID = "customTab" 
        };
        
        // Add tab at position 1 (after Home)
        SpreadsheetInstance.AddRibbonTab(tab, index: 1);
    }
}

{% endhighlight %}
{% endtabs %}

### Add Ribbon Items

Custom items can be added to existing groups using the [AddRibbonItems](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Spreadsheet.SfSpreadsheet.html#Syncfusion_Blazor_Spreadsheet_SfSpreadsheet_AddRibbonItems_System_String_System_Collections_Generic_List_Syncfusion_Blazor_Navigations_RibbonItem__System_Int32_Syncfusion_Blazor_Navigations_RibbonGroup_) method.

{% tabs %}
{% highlight razor tabtitle="Index.razor" %}

@page "/"
@using Syncfusion.Blazor.Spreadsheet
@using Syncfusion.Blazor.Navigations
@using Syncfusion.Blazor.Buttons

<SfButton OnClick="AddButton" Content="Add Custom Button"></SfButton>

<SfSpreadsheet @ref="SpreadsheetInstance">
    <SpreadsheetRibbon></SpreadsheetRibbon>
</SfSpreadsheet>

@code {
    public SfSpreadsheet SpreadsheetInstance { get; set; }

    private void AddButton()
    {
        var item = new RibbonItem
        {
            ID = "customButton",
            Type = RibbonItemType.Button,
            ButtonSettings = new RibbonButtonSettings
            {
                Content = "My Action",
                OnClick = EventCallback.Factory.Create<MouseEventArgs>(this, OnCustomAction)
            }
        };

        // Add item to a group in Home tab at index 0
        SpreadsheetInstance.AddRibbonItems("Home", new List<RibbonItem> { item }, index: 0);
    }

    private void OnCustomAction(MouseEventArgs args)
    {
        Console.WriteLine("Custom button clicked");
    }
}

{% endhighlight %}
{% endtabs %}

## File Menu Customization

The File menu provides customization through adding, hiding, showing, enabling, and disabling menu items.

### Add File Menu Items

Custom menu items can be added to the File menu using the [AddFileMenuItems](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Spreadsheet.SfSpreadsheet.html#Syncfusion_Blazor_Spreadsheet_SfSpreadsheet_AddFileMenuItems_System_Collections_Generic_List_Syncfusion_Blazor_Navigations_MenuItem__System_Int32_) method.

{% tabs %}
{% highlight razor tabtitle="Index.razor" %}

@page "/"
@using Syncfusion.Blazor.Spreadsheet
@using Syncfusion.Blazor.Navigations
@using Syncfusion.Blazor.Buttons

<SfButton OnClick="AddMenuItems" Content="Add Menu Items"></SfButton>

<SfSpreadsheet @ref="SpreadsheetInstance">
    <SpreadsheetRibbon></SpreadsheetRibbon>
</SfSpreadsheet>

@code {
    public SfSpreadsheet SpreadsheetInstance { get; set; }

    private void AddMenuItems()
    {
        var exportItems = new List<MenuItem>
        {
            new MenuItem { Id = "exportXlsx", Text = "XLSX", IconCss = "e-icons e-file-excel" },
            new MenuItem { Id = "exportCsv", Text = "CSV", IconCss = "e-icons e-file-export" }
        };

        var exportMenu = new List<MenuItem>
        {
            new MenuItem
            {
                Id = "exportAs",
                Text = "Export As",
                IconCss = "e-icons e-export",
                Items = exportItems
            }
        };

        // Add export menu at position 0
        SpreadsheetInstance.AddFileMenuItems(exportMenu, index: 0);
    }
}

{% endhighlight %}
{% endtabs %}

### Show and Hide File Menu Items

Menu item visibility can be controlled using the [ShowFileMenuItems](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Spreadsheet.SfSpreadsheet.html#Syncfusion_Blazor_Spreadsheet_SfSpreadsheet_ShowFileMenuItems_System_Collections_Generic_List_System_String__) and [HideFileMenuItems](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Spreadsheet.SfSpreadsheet.html#Syncfusion_Blazor_Spreadsheet_SfSpreadsheet_HideFileMenuItems_System_Collections_Generic_List_System_String__) methods.

{% tabs %}
{% highlight razor tabtitle="Index.razor" %}

@page "/"
@using Syncfusion.Blazor.Spreadsheet
@using Syncfusion.Blazor.Buttons

<SfButton OnClick="HideItems" Content="Hide Menu Items"></SfButton>
<SfButton OnClick="ShowItems" Content="Show Menu Items"></SfButton>

<SfSpreadsheet @ref="SpreadsheetInstance">
    <SpreadsheetRibbon></SpreadsheetRibbon>
</SfSpreadsheet>

@code {
    public SfSpreadsheet SpreadsheetInstance { get; set; }

    private void HideItems()
    {
        // Hide menu items
        SpreadsheetInstance.HideFileMenuItems(new List<string> { "Open", "Save As"});
    }

    private void ShowItems()
    {
        // Show previously hidden menu items
        SpreadsheetInstance.ShowFileMenuItems(new List<string> { "Open", "Save As"});
    }
}

{% endhighlight %}
{% endtabs %}

### Enable and Disable File Menu Items

Menu item interactivity can be controlled using the [EnableFileMenuItems](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Spreadsheet.SfSpreadsheet.html#Syncfusion_Blazor_Spreadsheet_SfSpreadsheet_EnableFileMenuItems_System_Collections_Generic_List_System_String__) and [DisableFileMenuItems](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Spreadsheet.SfSpreadsheet.html#Syncfusion_Blazor_Spreadsheet_SfSpreadsheet_DisableFileMenuItems_System_Collections_Generic_List_System_String__) methods.

{% tabs %}
{% highlight razor tabtitle="Index.razor" %}

@page "/"
@using Syncfusion.Blazor.Spreadsheet
@using Syncfusion.Blazor.Buttons

<SfButton OnClick="EnableItems" Content="Enable Menu Items"></SfButton>
<SfButton OnClick="DisableItems" Content="Disable Menu Items"></SfButton>

<SfSpreadsheet @ref="SpreadsheetInstance">
    <SpreadsheetRibbon></SpreadsheetRibbon>
</SfSpreadsheet>

@code {
    public SfSpreadsheet SpreadsheetInstance { get; set; }

    private void EnableItems()
    {
        // Enable menu items
        SpreadsheetInstance.EnableFileMenuItems(new List<string> { "Open", "Save As" });
    }

    private void DisableItems()
    {
        // Disable menu items (appear grayed out)
        SpreadsheetInstance.DisableFileMenuItems(new List<string> { "Open", "Save As" });
    }
}

{% endhighlight %}
{% endtabs %}

## Reference

The following section contains identifier references for customizing the ribbon through property binding and methods. Use these IDs when configuring ribbon customizations through the **RibbonTabItems**, **RibbonGroupItems**, and **RibbonItems** properties, or when calling dynamic control methods during component execution.

### Ribbon Tab

| Tab ID | Display Name | Description |
|--|--|--|
| `homeTab` | Home | Contains formatting, editing, and data protection commands |
| `insertTab` | Insert | Contains commands for inserting images, hyperlinks, and functions |
| `formulasTab` | Formulas | Contains calculation options and named range management commands |
| `reviewTab` | Review | Contains worksheet protection and name manager commands |
| `viewTab` | View | Contains view options such as gridlines and display settings |

### Ribbon Group

| Group ID | Tab | Description |
|--|--|--|
| `undoRedoGroup` | Home | Undo and redo cell modifications |
| `clipboardGroup` | Home | Cut, copy, and paste operations |
| `numberFormatGroup` | Home | Number format selection and application |
| `fontFamilyGroup` | Home | Font family selection |
| `fontSizeGroup` | Home | Font size adjustment |
| `fontStyleGroup` | Home | Text formatting options: bold, italic, underline, strikethrough |
| `bordersGroup` | Home | Border styling and color application |
| `backgroundColorGroup` | Home | Cell background color and cell merge operations |
| `fontAlignmentGroup` | Home | Text alignment and wrap options |
| `conditionalFormattingGroup` | Home | Conditional formatting rule creation and management |
| `dataOperationsGroup` | Home | Data clearing and sorting operations |
| `insertGroup` | Insert | Hyperlink and image insertion |
| `insertFunctionsGroup` | Formulas | Function insertion and formula building |
| `calculationOptionGroup` | Formulas | Calculation mode selection |
| `manualCalculationGroup` | Formulas | Manual sheet and workbook calculation |
| `namedRangesGroup` | Formulas | Named range definition and management |
| `protectionGroup` | Review | Worksheet and workbook protection |
| `viewGroup` | View | Grid display and view customization options |

### Ribbon Items

| Item ID | Description |
|--|--|
| `undo` | Undo the last cell modification |
| `redo` | Redo the last undone action |
| `cut` | Remove selected cells to clipboard |
| `copy` | Copy selected cells to clipboard |
| `paste` | Paste clipboard contents to selected cells |
| `numberFormat` | Apply number format to selected cells |
| `fontFamily` | Change the font family of selected text |
| `fontSize` | Adjust the font size of selected text |
| `bold` | Apply or remove bold formatting |
| `italic` | Apply or remove italic formatting |
| `underline` | Apply or remove underline formatting |
| `strikethrough` | Apply or remove strikethrough formatting |
| `fontColor` | Change the color of selected text |
| `borderPicker` | Apply borders to selected cells |
| `colorPicker` | Set the background color of selected cells |
| `mergeCell` | Merge selected cells into one |
| `horizontalAlignment` | Set horizontal text alignment |
| `verticalAlignment` | Set vertical text alignment |
| `wrapText` | Enable or disable text wrapping in cells |
| `clear` | Clear contents from selected cells |
| `conditionalFormat` | Create and apply conditional formatting rules |
| `sort` | Sort data in ascending or descending order |
| `link` | Insert or edit a hyperlink |
| `image` | Insert an image into the worksheet |
| `insertFunction` | Insert a formula function |
| `calculationOption` | Change the calculation mode |
| `calculateSheet` | Recalculate the current sheet |
| `calculateWorkbook` | Recalculate all sheets in the workbook |
| `nameManager` | Define and manage named ranges |
| `protectSheet` | Enable or disable worksheet protection |
| `protectWorkbook` | Enable or disable workbook protection |
| `gridlines` | Show or hide gridlines in the worksheet |
