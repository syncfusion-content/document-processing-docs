---
layout: post
title: Ribbon Customization in Blazor Spreadsheet Component | Syncfusion
description: Learn how to customize the ribbon, tabs, groups, items, and File menu in the Syncfusion Blazor Spreadsheet component.
platform: document-processing
control: Spreadsheet
documentation: ug
---

# Ribbon Customization in Blazor Spreadsheet Component

The [Blazor Spreadsheet Editor](https://www.syncfusion.com/spreadsheet-editor-sdk/blazor-spreadsheet-editor) component includes a ribbon interface that can be customized to match your application's needs. You can control the visibility, state, and layout of tabs, groups, and items, or add custom tabs, groups, and items to extend the ribbon with your own functionality.

## Overview

The Spreadsheet ribbon is organized hierarchically: tabs at the top level, groups as related containers within tabs, and items as individual controls within groups. Customization can be performed declaratively using property binding or dynamically using methods, depending on your application requirements.

## Customizing the Ribbon Using Property Binding

Property binding enables declarative customization of the ribbon during component initialization, making it ideal for defining static configurations in advance.

### Customizing Built-in Ribbon Tabs

Built-in tabs can be customized using the [RibbonTabItems](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Spreadsheet.SfSpreadsheet.html#Syncfusion_Blazor_Spreadsheet_SfSpreadsheet_RibbonTabItems) property. Tabs can be hidden, reordered, and their display text changed.

| Property | Type | Description |
|--|--|--|
| TabId | string | The unique identifier of the ribbon tab (for example, `homeTab`, `insertTab`). |
| IsVisible | bool | Controls whether the tab is visible in the ribbon. The default is **true**. |
| Order | int? | Sets the tab's display order. Lower values appear first. The default is **null**. |
| HeaderText | string | Overrides the tab's display label. |

{% tabs %}
{% highlight razor tabtitle="Index.razor" %}

@page "/"
@using Syncfusion.Blazor.Spreadsheet

<SfSpreadsheet>
    <SpreadsheetRibbon RibbonTabItems="@GetTabCustomizations()"></SpreadsheetRibbon>
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

### Customizing Built-in Ribbon Groups

Built-in groups within tabs can be customized using the [RibbonGroupItems](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Spreadsheet.SfSpreadsheet.html#Syncfusion_Blazor_Spreadsheet_SfSpreadsheet_RibbonGroupItems) property. Groups can be hidden and reordered within their parent tab.

| Property | Type | Description |
|--|--|--|
| GroupId | string | The unique identifier of the ribbon group (for example, `clipboardGroup`, `fontStyleGroup`). |
| TabId | string | The ID of the parent tab containing this group. |
| IsVisible | bool | Controls whether the group is visible. The default is **true**. |
| Order | int? | Sets the group's display order within its tab. Lower values appear first. The default is **null**. |

{% tabs %}
{% highlight razor tabtitle="Index.razor" %}

@page "/"
@using Syncfusion.Blazor.Spreadsheet

<SfSpreadsheet>
    <SpreadsheetRibbon RibbonGroupItems="@GetGroupCustomizations()"></SpreadsheetRibbon>
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

### Customizing Built-in Ribbon Items

Individual ribbon items can be customized using the [RibbonItems](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Spreadsheet.SfSpreadsheet.html#Syncfusion_Blazor_Spreadsheet_SfSpreadsheet_RibbonItems) property. Items can be hidden, disabled, and reordered within their group.

| Property | Type | Description |
|--|--|--|
| ItemId | string | The unique identifier of the ribbon item (for example, `bold`, `italic`). |
| GroupId | string | The ID of the parent group containing this item. |
| IsVisible | bool | Controls whether the item is visible. The default is **true**. |
| IsEnabled | bool? | Controls whether the item is enabled. The default is **null**. |
| Order | int? | Sets the item's display order within its group. Lower values appear first. The default is **null**. |

{% tabs %}
{% highlight razor tabtitle="Index.razor" %}

@page "/"
@using Syncfusion.Blazor.Spreadsheet

<SfSpreadsheet>
    <SpreadsheetRibbon RibbonItems="@GetItemCustomizations()"></SpreadsheetRibbon>
</SfSpreadsheet>

@code {

    private List<SpreadsheetRibbonItem> GetItemCustomizations()
    {
        return new List<SpreadsheetRibbonItem>
        {
            // Hide the Strikethrough button
            new SpreadsheetRibbonItem { ItemId = "strikethrough", IsVisible = false },
            
            // Always disable the Link button (still visible but grayed out)
            new SpreadsheetRibbonItem { ItemId = "link", IsEnabled = false },
            
            // Reorder Italic button to appear first in Font Style group
            new SpreadsheetRibbonItem { ItemId = "italic", Order = 0 }
        };
    }
}

{% endhighlight %}
{% endtabs %}

### Adding Custom Ribbon Tabs

The ribbon can be extended with completely new tabs using the [CustomRibbonTabs](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Spreadsheet.SfSpreadsheet.html#Syncfusion_Blazor_Spreadsheet_SfSpreadsheet_CustomRibbonTabs) property. Custom tabs are rendered using Blazor components.

| Property | Type | Description |
|--|--|--|
| Index | int | The position where the tab is inserted. |
| Template | RenderFragment | The Blazor markup defining the tab's content and layout. |

{% tabs %}
{% highlight razor tabtitle="Index.razor" %}

@page "/"
@using Syncfusion.Blazor.Spreadsheet
@using Syncfusion.Blazor.Ribbon

<SfSpreadsheet>
    <SpreadsheetRibbon CustomRibbonTabs="@GetCustomTabs()"></SpreadsheetRibbon>
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

### Adding Custom Ribbon Groups

Custom groups can be added to existing tabs using the [CustomRibbonGroups](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Spreadsheet.SfSpreadsheet.html#Syncfusion_Blazor_Spreadsheet_SfSpreadsheet_CustomRibbonGroups) property.

| Property | Type | Description |
|--|--|--|
| TabId | string | The ID of the parent tab where the group is added. |
| Index | int | The position where the group is inserted within the tab. |
| Template | RenderFragment | The Blazor markup defining the group's content. |

{% tabs %}
{% highlight razor tabtitle="Index.razor" %}

@page "/"
@using Syncfusion.Blazor.Spreadsheet
@using Syncfusion.Blazor.Ribbon

<SfSpreadsheet>
    <SpreadsheetRibbon CustomRibbonGroups="@GetCustomGroups()"></SpreadsheetRibbon>
</SfSpreadsheet>

@code {

    private List<SpreadsheetCustomRibbonGroup> GetCustomGroups()
    {
        return new List<SpreadsheetCustomRibbonGroup>
        {
            new SpreadsheetCustomRibbonGroup
            {
                TabId = "homeTab",
                Index = 8,  // Insert after the existing groups
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

### Adding Custom Ribbon Items

Custom items can be added to existing groups using the [CustomRibbonItems](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Spreadsheet.SfSpreadsheet.html#Syncfusion_Blazor_Spreadsheet_SfSpreadsheet_CustomRibbonItems) property.

| Property | Type | Description |
|--|--|--|
| GroupId | string | The ID of the parent group where the item is added. |
| Index | int | The position where the item is inserted within the group. If the index exceeds the group size, the item is appended. |
| Template | RenderFragment | The Blazor markup defining the item's content. |

{% tabs %}
{% highlight razor tabtitle="Index.razor" %}

@page "/"
@using Syncfusion.Blazor.Spreadsheet
@using Syncfusion.Blazor.Ribbon

<SfSpreadsheet>
    <SpreadsheetRibbon CustomRibbonItems="@GetCustomItems()"></SpreadsheetRibbon>
</SfSpreadsheet>

@code {

    private List<SpreadsheetCustomRibbonItem> GetCustomItems()
    {
        return new List<SpreadsheetCustomRibbonItem>
        {
            new SpreadsheetCustomRibbonItem
            {
                GroupId = "fontStyleGroup",
                Index = 4,  // Insert at position 4 within the group
                Template = CreateCustomItemTemplate()
            }
        };
    }

    private RenderFragment CreateCustomItemTemplate()
    {
        return @<RibbonItem Type="RibbonItemType.Button">
            <RibbonButtonSettings Content="Highlight Text"
                                  IconCss="e-icons e-highlight"
                                  @onclick="OnHighlightText">
            </RibbonButtonSettings>
        </RibbonItem>;
    }

    private void OnHighlightText()
    {
        // Highlight logic
        Console.WriteLine("Highlight Text clicked");
    }
}

{% endhighlight %}
{% endtabs %}

## Customizing the Ribbon Using Methods

Methods provide programmatic control over ribbon elements during the component lifecycle. They are well suited for dynamic customizations based on user actions or application state.

### Showing and Hiding Tabs

Tab visibility can be controlled using the [ShowRibbonTabs()](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Spreadsheet.SfSpreadsheet.html#Syncfusion_Blazor_Spreadsheet_SfSpreadsheet_ShowRibbonTabs_System_Collections_Generic_List_System_String__) and [HideRibbonTabs()](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Spreadsheet.SfSpreadsheet.html#Syncfusion_Blazor_Spreadsheet_SfSpreadsheet_HideRibbonTabs_System_Collections_Generic_List_System_String__) methods.

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

N> If a tab name in the list does not match a built-in tab, the call is ignored and no error is raised.

### Enabling and Disabling Tabs

Tab interactivity can be controlled using the [EnableRibbonTabs()](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Spreadsheet.SfSpreadsheet.html#Syncfusion_Blazor_Spreadsheet_SfSpreadsheet_EnableRibbonTabs_System_Collections_Generic_List_System_String__) and [DisableRibbonTabs()](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Spreadsheet.SfSpreadsheet.html#Syncfusion_Blazor_Spreadsheet_SfSpreadsheet_DisableRibbonTabs_System_Collections_Generic_List_System_String__) methods.

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

### Showing and Hiding Items

Item visibility can be controlled using the [ShowRibbonItems()](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Spreadsheet.SfSpreadsheet.html#Syncfusion_Blazor_Spreadsheet_SfSpreadsheet_ShowRibbonItems_System_Collections_Generic_List_System_String__) and [HideRibbonItems()](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Spreadsheet.SfSpreadsheet.html#Syncfusion_Blazor_Spreadsheet_SfSpreadsheet_HideRibbonItems_System_Collections_Generic_List_System_String__) methods. Hidden items are completely removed from the ribbon interface.

{% tabs %}
{% highlight razor tabtitle="Index.razor" %}

@page "/"
@using Syncfusion.Blazor.Spreadsheet
@using Syncfusion.Blazor.Buttons

<SfButton OnClick="HideItems" Content="Hide Items"></SfButton>
<SfButton OnClick="ShowItems" Content="Show Items"></SfButton>

<SfSpreadsheet @ref="SpreadsheetInstance">
    <SpreadsheetRibbon></SpreadsheetRibbon>
</SfSpreadsheet>

@code {
    public SfSpreadsheet SpreadsheetInstance { get; set; }

    private void HideItems()
    {
        SpreadsheetInstance.HideRibbonItems(new List<string> { "cut", "paste" });
    }

    private void ShowItems()
    {
        SpreadsheetInstance.ShowRibbonItems(new List<string> { "cut", "paste" });
    }
}

{% endhighlight %}
{% endtabs %}

N> Item IDs are case-sensitive. An unknown item ID is silently ignored.

### Enabling and Disabling Items

Item interactivity can be controlled using the [EnableRibbonItems()](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Spreadsheet.SfSpreadsheet.html#Syncfusion_Blazor_Spreadsheet_SfSpreadsheet_EnableRibbonItems_System_Collections_Generic_List_System_String__) and [DisableRibbonItems()](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Spreadsheet.SfSpreadsheet.html#Syncfusion_Blazor_Spreadsheet_SfSpreadsheet_DisableRibbonItems_System_Collections_Generic_List_System_String__) methods. Disabled items remain visible but appear grayed out and cannot be clicked.

{% tabs %}
{% highlight razor tabtitle="Index.razor" %}

@page "/"
@using Syncfusion.Blazor.Spreadsheet
@using Syncfusion.Blazor.Buttons

<SfButton OnClick="DisableItems" Content="Disable Items"></SfButton>
<SfButton OnClick="EnableItems" Content="Enable Items"></SfButton>

<SfSpreadsheet @ref="SpreadsheetInstance">
    <SpreadsheetRibbon></SpreadsheetRibbon>
</SfSpreadsheet>

@code {
    public SfSpreadsheet SpreadsheetInstance { get; set; }

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

### Adding Ribbon Tabs

Custom tabs can be added dynamically using the [AddRibbonTab()](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Spreadsheet.SfSpreadsheet.html#Syncfusion_Blazor_Spreadsheet_SfSpreadsheet_AddRibbonTab_Syncfusion_Blazor_Ribbon_RibbonTab_System_Int32_) method.

| Parameter | Type | Description |
|--|--|--|
| tab | Class | The [RibbonTab](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Ribbon.RibbonTab.html) model to add to the ribbon. The tab can contain custom groups and items. |
| index | int | The zero-based index at which to insert the new tab within the ribbon. |

{% tabs %}
{% highlight razor tabtitle="Index.razor" %}

@page "/"
@using Syncfusion.Blazor.Spreadsheet
@using Syncfusion.Blazor.Buttons
@using Syncfusion.Blazor.Ribbon

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

### Adding Ribbon Items

Custom items can be added to existing groups using the [AddRibbonItems()](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Spreadsheet.SfSpreadsheet.html#Syncfusion_Blazor_Spreadsheet_SfSpreadsheet_AddRibbonItems_System_String_System_Collections_Generic_List_Syncfusion_Blazor_Ribbon_RibbonItem__System_Int32_Syncfusion_Blazor_Ribbon_RibbonGroup_) method.

| Parameter | Type | Description |
|--|--|--|
| tabName | string | The **displayed tab name** (for example, `Home`) that contains the target group. |
| items | List<RibbonItem> | The list of items to add. A list with a single item is also accepted. |
| index | int | The zero-based collection index where items should be inserted within the tab. |
| group *(optional)* | Class | The target group. When omitted, the first available group in the tab is used. |

{% tabs %}
{% highlight razor tabtitle="Index.razor" %}

@page "/"
@using Syncfusion.Blazor.Spreadsheet
@using Syncfusion.Blazor.Buttons
@using Syncfusion.Blazor.Ribbon

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

        // Add the item to the first group in the Home tab at index 0
        SpreadsheetInstance.AddRibbonItems("Home", new List<RibbonItem> { item }, index: 0);
    }

    private void OnCustomAction(MouseEventArgs args)
    {
        Console.WriteLine("Custom button clicked");
    }
}

{% endhighlight %}
{% endtabs %}

## Customizing the File Menu

The File menu in the Spreadsheet component can be customized to add, show or hide, and enable or disable menu items, allowing dynamic control over its functionality based on application requirements.

### Adding File Menu Items

Custom menu items can be added to the File menu using the [AddFileMenuItems()](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Spreadsheet.SfSpreadsheet.html#Syncfusion_Blazor_Spreadsheet_SfSpreadsheet_AddFileMenuItems_System_Collections_Generic_List_Syncfusion_Blazor_Navigations_MenuItem__System_Int32_) method.

| Parameter | Type | Description |
|--|--|--|
| items | List<MenuItem> | The list of menu items to add. |
| index | int | The zero-based index at which to insert the menu items within the File menu. |

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

        // Insert the export menu at position 0
        SpreadsheetInstance.AddFileMenuItems(exportMenu, index: 0);
    }
}

{% endhighlight %}
{% endtabs %}

### Showing and Hiding File Menu Items

Menu item visibility can be controlled using the [ShowFileMenuItems()](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Spreadsheet.SfSpreadsheet.html#Syncfusion_Blazor_Spreadsheet_SfSpreadsheet_ShowFileMenuItems_System_Collections_Generic_List_System_String__) and [HideFileMenuItems()](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Spreadsheet.SfSpreadsheet.html#Syncfusion_Blazor_Spreadsheet_SfSpreadsheet_HideFileMenuItems_System_Collections_Generic_List_System_String__) methods.

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
        SpreadsheetInstance.HideFileMenuItems(new List<string> { "Open", "Save As" });
    }

    private void ShowItems()
    {
        // Show previously hidden menu items
        SpreadsheetInstance.ShowFileMenuItems(new List<string> { "Open", "Save As" });
    }
}

{% endhighlight %}
{% endtabs %}

### Enabling and Disabling File Menu Items

Menu item interactivity can be controlled using the [EnableFileMenuItems()](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Spreadsheet.SfSpreadsheet.html#Syncfusion_Blazor_Spreadsheet_SfSpreadsheet_EnableFileMenuItems_System_Collections_Generic_List_System_String__) and [DisableFileMenuItems()](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Spreadsheet.SfSpreadsheet.html#Syncfusion_Blazor_Spreadsheet_SfSpreadsheet_DisableFileMenuItems_System_Collections_Generic_List_System_String__) methods.

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

| Tab ID | Header Text | Description |
|--|--|--|
| `homeTab` | Home | Contains formatting, editing, and data operations commands. |
| `insertTab` | Insert | Contains commands for inserting images, hyperlinks, and functions. |
| `formulasTab` | Formulas | Contains calculation options and named-range management commands. |
| `reviewTab` | Review | Contains worksheet and workbook protection commands. |
| `viewTab` | View | Contains view options such as gridlines. |

### Ribbon Group

| Group ID | Tab | Description |
|--|--|--|
| `undoRedoGroup` | Home | Undo and redo cell modifications. |
| `clipboardGroup` | Home | Cut, copy, and paste operations. |
| `numberFormatGroup` | Home | Number format selection and application. |
| `fontFamilyGroup` | Home | Font family selection. |
| `fontSizeGroup` | Home | Font size adjustment. |
| `fontStyleGroup` | Home | Text formatting options: bold, italic, underline, strikethrough, font color. |
| `bordersGroup` | Home | Border styling and color application. |
| `backgroundColorGroup` | Home | Cell background color and cell merge operations. |
| `fontAlignmentGroup` | Home | Text alignment and wrap options. |
| `conditionalFormattingGroup` | Home | Conditional formatting rule creation and management. |
| `dataOperationsGroup` | Home | Data clearing and sorting operations. |
| `insertGroup` | Insert | Hyperlink and image insertion. |
| `insertFunctionsGroup` | Formulas | Function insertion and formula building. |
| `calculationOptionGroup` | Formulas | Calculation mode selection. |
| `manualCalculationGroup` | Formulas | Manual sheet and workbook calculation. |
| `namedRangesGroup` | Formulas | Named range definition and management. |
| `protectionGroup` | Review | Worksheet and workbook protection. |
| `viewGroup` | View | Grid display and view options. |

### Ribbon Items

| Item ID | Description |
|--|--|
| `undo` | Undo the last cell modification. |
| `redo` | Redo the last undone action. |
| `cut` | Remove selected cells to clipboard. |
| `copy` | Copy selected cells to clipboard. |
| `paste` | Paste clipboard contents to selected cells. |
| `numberFormat` | Apply a number format to the selected cells. |
| `fontFamily` | Change the font family of selected text. |
| `fontSize` | Adjust the font size of selected text. |
| `bold` | Apply or remove bold formatting. |
| `italic` | Apply or remove italic formatting. |
| `underline` | Apply or remove underline formatting. |
| `strikethrough` | Apply or remove strikethrough formatting. |
| `fontColor` | Change the color of selected text. |
| `borderPicker` | Apply borders to selected cells. |
| `colorPicker` | Set the background color of selected cells. |
| `mergeCell` | Merge selected cells into one. |
| `horizontalAlignment` | Set horizontal text alignment. |
| `verticalAlignment` | Set vertical text alignment. |
| `wrapText` | Enable or disable text wrapping in cells. |
| `conditionalFormat` | Create and apply conditional formatting rules. |
| `clear` | Clear contents from selected cells. |
| `sort` | Sort data in ascending or descending order. |
| `link` | Insert or edit a hyperlink. |
| `image` | Insert an image into the worksheet. |
| `insertFunction` | Insert a formula function. |
| `calculationOption` | Change the calculation mode. |
| `calculateSheet` | Recalculate the current sheet. |
| `calculateWorkbook` | Recalculate all sheets in the workbook. |
| `nameManager` | Define and manage named ranges. |
| `protectSheet` | Enable or disable worksheet protection. |
| `protectWorkbook` | Enable or disable workbook protection. |
| `gridlines` | Show or hide gridlines in the worksheet. |