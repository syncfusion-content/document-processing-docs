---
layout: post
title: Navigation in Blazor SfPdfViewer Component | Syncfusion
description: Checkout and learn here all about navigation in Syncfusion Blazor SfPdfViewer component and much more.
platform: document-processing
control: SfPdfViewer
documentation: ug
---

# Navigation in Blazor SfPdfViewer Component

You can navigate between pages in Syncfusion<sup style="font-size:70%">&reg;</sup> SfPdfViewer in the following ways:

* Scroll through the pages.
* Click Go to pages in the built-in toolbar.
* Click the desired bookmark in bookmark pane.
* Click the desired page in thumbnail pane.
* Click hyperlink and table of contents.

## Page navigation

The built-in toolbar of SfPdfViewer contains the following page navigation tools:

* **First** **Page**: Navigates you to the first page in the document.
* **Last** **Page**: Navigates you to the last page in the document.
* **Next** **Page**: Scrolls forwards through pages, one page at a time.
* **Go** **To**: Allows you to quickly jump to the desired page number.
* **Previous** **Page**: Scrolls backwards through pages, one page at a time.

![Blazor SfPdfViewer with Page Navigation](../blazor-classic/images/blazor-pdfviewer-page-navigation.png)

You can enable or disable the page navigation option in SfPdfViewer default toolbar by setting the [EnableNavigation](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerBase.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerBase_EnableNavigation) property.

```cshtml

@using Syncfusion.Blazor.SfPdfViewer

<SfPdfViewer2 Width="100%"
              Height="100%"
              DocumentPath="@DocumentPath"
              EnableNavigation="false" />

@code{
    public string DocumentPath { get; set; } = "wwwroot/Data/PDF_Succinctly.pdf";
}

```

Also, you can programmatically perform page navigation as follows.

```cshtml

@using Syncfusion.Blazor.Buttons
@using Syncfusion.Blazor.Inputs
@using Syncfusion.Blazor.SfPdfViewer

<div style="display:inline-block">
    <SfButton OnClick="OnFirstPageClick">Go To First Page</SfButton>
</div>

<div style="display:inline-block">
    <SfButton OnClick="OnLastPageClick">Go To Last Page</SfButton>
</div>

<div style="display:inline-block">
    <SfButton OnClick="OnNextPageClick">Go To Next Page</SfButton>
</div>

<div style="display:inline-block">
    <SfTextBox @ref="@TextBox"></SfTextBox>
</div>

<div style="display:inline-block;">
    <SfButton OnClick="OnPageClick">Go To Page</SfButton>
</div>

<div style="display:inline-block">
    <SfButton OnClick="OnPreviousPageClick">Go To Previous Page</SfButton>
</div>

<SfPdfViewer2 Width="100%" Height="100%" DocumentPath="@DocumentPath" @ref="@Viewer" />

@code{
    SfPdfViewer2 Viewer;
    SfTextBox TextBox;
    public string DocumentPath { get; set; } = "wwwroot/data/PDF_Succinctly.pdf";

    public async void OnFirstPageClick(MouseEventArgs args)
    {
        await Viewer.GoToFirstPageAsync();
    }

    public async void OnLastPageClick(MouseEventArgs args)
    {
        await Viewer.GoToLastPageAsync();
    }

    public async void OnNextPageClick(MouseEventArgs args)
    {
        await Viewer.GoToNextPageAsync();
    }

    public async void OnPageClick(MouseEventArgs args)
    {
        int pageIndex =  int.Parse(TextBox.Value.ToString());
        await Viewer.GoToPageAsync(pageIndex);
    }

    public async void OnPreviousPageClick(MouseEventArgs args)
    {
        await Viewer.GoToPreviousPageAsync();
    }
}

```

## Bookmark navigation

The bookmarks saved in PDF files are loaded and listed in the bookmark pane (in the left navigation pane). The users can jump to areas of interest by clicking the desired bookmark easily.

![Blazor SfPdfViewer with Bookmark Navigation](../blazor-classic/images/blazor-pdfviewer-bookmark-navigation.png)

You can enable or disable the bookmark navigation pane by setting the [EnableBookmark](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerBase.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerBase_EnableBookmarkPanel) property.

```cshtml

@using Syncfusion.Blazor.SfPdfViewer

<SfPdfViewer2 Height="100%" Width="100%" DocumentPath="@DocumentPath" EnableBookmarkPanel="true" />

@code{
    public string DocumentPath { get; set; } = "wwwroot/Data/PDF_Succinctly.pdf";
}

```

## Page thumbnail navigation

Page thumbnails is the miniature representation of actual pages in the PDF files. This feature displays thumbnails of the pages and represents a link to the respective pages. Clicking a page thumbnail will display the respective page in the document view.

![Blazor SfPdfViewer with Page Thumbnail Navigation](../blazor-classic/images/blazor-pdfviewer-page-thumbnail-navigation.png)

You can enable or disable the thumbnail navigation pane by setting the [EnableThumbnail](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerBase.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerBase_EnableThumbnailPanel) property.

```cshtml

@using Syncfusion.Blazor.SfPdfViewer

<SfPdfViewer2 Height="100%" Width="100%" DocumentPath="@DocumentPath" EnableThumbnailPanel="true"/>

@code{
    public string DocumentPath { get; set; } = "wwwroot/Data/PDF_Succinctly.pdf";
}

```

### Open thumbnail panel programmatically

You can view the thumbnail navigation initially while loading the PDF document in the PDFViewer using the [IsThumbnailPanelOpen](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerBase.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerBase_IsThumbnailPanelOpen) property.

The following code illustrates how to open thumbnail panel programmatically.

```cshtml

@using Syncfusion.Blazor.SfPdfViewer

<!--IsThumbnailPanelOpen property will enable the thumbnail panel on initial rendering itself-->
<SfPdfViewer2 @ref="@SfPdfViewer"
              DocumentPath="@DocumentPath"
              IsThumbnailPanelOpen="true"
              Height="100%"
              Width="100%">
</SfPdfViewer2>

@code {

    public SfPdfViewer2 SfPdfViewer { get; set; }
    //Sets the PDF document path for initial loading.
    private string DocumentPath { get; set; } = "wwwroot/Data/PDF_Succinctly.pdf";
}

```

[View sample in GitHub](https://github.com/SyncfusionExamples/blazor-pdf-viewer-examples/tree/master/Thumbnail/Show%20thumbnail%20panel).

## Hyperlink navigation

Hyperlink navigation features enables navigation to the URLs (website links) in a PDF file.

![Blazor SfPdfViewer Hyperlink Navigation](../blazor-classic/images/blazor-pdfviewer-hyperlink-navigation.png)

## Table of content navigation

Table of contents navigation allows users to navigate to different parts of a PDF file that are listed in the table of contents section.

![Table of Content in Blazor SfPdfViewer](../blazor-classic/images/blazor-pdfviewer-title-of-content.png)

You can enable or disable both hyperlink and table of content navigation by setting the `EnableHyperlink` property.

```cshtml

@using Syncfusion.Blazor.SfPdfViewer

<SfPdfViewer2 Height="100%" Width="100%" DocumentPath="@DocumentPath" EnableHyperlink="true" />

@code{
    public string DocumentPath { get; set; } = "wwwroot/Data/PDF_Succinctly.pdf";
}

```

You can set the target attribute for a hyperlink in SfPdfViewer using the [HyperlinkOpenState](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerBase.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerBase_HyperlinkOpenState) property.

```cshtml

@using Syncfusion.Blazor.SfPdfViewer

<SfPdfViewer2 Height="100%"
              Width="100%" DocumentPath="@DocumentPath"
              EnableHyperlink="true"
              HyperlinkOpenState="LinkTarget.NewTab" />

@code{
    public string DocumentPath { get; set; } = "wwwroot/Data/PDF_Succinctly.pdf";
}
```

## Modern Navigation Panel

The SfPdfViewer includes a modern navigation panel that replaces the legacy panel. It expands the viewer's capabilities beyond simple thumbnails, bookmarks, and comments to offer a more comprehensive and interactive viewing experience.

You can toggle the visibility of this modern navigation panel using the `EnableNavigationPanel` property.

The following code snippet demonstrates how to enable the modern navigation panel:

```cshtml

@using Syncfusion.Blazor.SfPdfViewer;

<SfPdfViewer2 DocumentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
              Height="100%"
              Width="100%" 
              EnableNavigationPanel="true">
</SfPdfViewer2>

```

![Enable Modern Navigation Panel](../blazor-classic/images/enable_modern_navigation_panel.png)

### Default items in navigation panel

The modern navigation panel contains the following built-in items:

* Comment panel
* Thumbnail panel
* Bookmark panel

### Rearrange the default items of navigation panel

You can rearrange the order of the default navigation panel items by providing a list to the `BuiltInItems` property. The navigation toolbar will display the items in the order they appear in your list.

```cshtml

@using Syncfusion.Blazor.SfPdfViewer;

<SfPdfViewer2 DocumentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
              Height="100%"
              Width="100%" 
              EnableNavigationPanel="true">
              <NavigationToolbarSettings BuiltInItems="navigationToolbarItems"></NavigationToolbarSettings>
</SfPdfViewer2>

@code {
    List<NavigationToolbarItem> navigationToolbarItems = new List<NavigationToolbarItem>()
    {
        NavigationToolbarItem.Thumbnails,
        NavigationToolbarItem.Bookmarks,
        NavigationToolbarItem.CommentPanel,
    };
}

```

![Rearrange the default items of navigation panel](../blazor-classic/images/rearrange_navigation_panel_items.png)

### How to add customize items in the navigation panel

You can add custom items to the SfPdfViewer navigation toolbar. To do this, create a list of `CustomNavigationToolbarItem` objects and assign it to the `CustomItems` property.

Each CustomNavigationToolbarItem object has several properties to define its appearance and behavior: 
* `Index` : Sets the position of the item in the toolbar.
* `Name` : Assigns a custom name to the item.
* `TooltipText` : Defines the text that appears when hovering over the item.
* `HeaderText` : Sets the header text displayed at the top of the custom panel.
* `IconCss` : Specifies the CSS class for the item's icon.
* `Template` : Allows you to define a custom template for the panel's content. 
* `ItemType` : Determines the item's type, such as a clickable button `NavigationToolbarItemType.Button` or a visual separator `NavigationToolbarItemType.Separator`.

```cshtml

@using Syncfusion.Blazor.SfPdfViewer;

<SfPdfViewer2 DocumentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
              Height="100%"
              Width="100%" 
              EnableNavigationPanel="true">
              <NavigationToolbarSettings BuiltInItems="navigationToolbarItems" CustomItems="customNavigationToolbarItems"></NavigationToolbarSettings>
</SfPdfViewer2>

@code {
    List<NavigationToolbarItem> navigationToolbarItems = new List<NavigationToolbarItem>()
    {
        NavigationToolbarItem.Thumbnails,
        NavigationToolbarItem.Bookmarks,
        NavigationToolbarItem.CommentPanel,
    };
    List<CustomNavigationToolbarItem> customNavigationToolbarItems = new List<CustomNavigationToolbarItem>()
    {

        new CustomNavigationToolbarItem()
        {
         IconCss = "e-icons e-ai-chat",
         Index = 0,
         TooltipText = "AI Assistance",
         Name = "AI Assistance",
         HeaderText = "AI Assistance",
         ItemType = NavigationToolbarItemType.Button,
         Template = GetTemplate("AI Assistance")
        },
        new CustomNavigationToolbarItem()
        {
            Name = "Delete",
            HeaderText = "Delete",
            IconCss = "e-icons e-pv-annotation-delete-icon",
            Index = 4,
            TooltipText = "Delete",
            ItemType = NavigationToolbarItemType.Button,
            Template = GetTemplate("Delete")
        },
        new CustomNavigationToolbarItem()
        {
            Name = "Separator",
            Index = 1,
            ItemType = NavigationToolbarItemType.Separator
        },
        new CustomNavigationToolbarItem()
        {
            Name = "Separator",
            Index = 6,
            ItemType = NavigationToolbarItemType.Separator
        }
    };
    private static RenderFragment GetTemplate(string templatename)
    {
        return __builder =>
        {
            switch(templatename)
            {
                case "Delete":
                    <div class="custom-delete-toolbar">
                        <div class="delete-banner">
                            Are you sure you want to delete?
                        </div>
                        <input type="text" placeholder="Type 'DELETE' to confirm" class="delete-confirm-input" />
                    </div>
                    break;
                case "AI Assistance":
                    <div class="custom-ai-toolbar">
                        <div class="ai-banner">
                            AI Assistance
                        </div>
                        <input type="text"
                               placeholder="Ask your AI assistant..."
                               class="ai-input" />
                        <button class="ai-submit-button">Submit</button>
                    </div>
                    break;
            }
        };
    }
}

```

![Customize Items in the Navigation Panel](../blazor-classic/images/custom_navigation_toolbar_item.png)   

### Open or close navigation panel programmatically

You can programmatically open or close a navigation panel by calling the `ToggleItemByIndex` method. This method takes the index of the panel item and toggles its state which opens it if closed, and then closes it if open.

```cshtml

@using Syncfusion.Blazor.SfPdfViewer;

<button id="toggle-custom-panel-visibility-api-btn" @onclick="OpenCustomPanel">OpenCustomPanel</button>
<SfPdfViewer2 DocumentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
              @ref="pdfViewer"
              Height="100%"
              Width="100%" 
              EnableNavigationPanel="true">
              <NavigationToolbarSettings BuiltInItems="navigationToolbarItems" CustomItems="customNavigationToolbarItems"></NavigationToolbarSettings>
</SfPdfViewer2>

@code {
    private SfPdfViewer2? pdfViewer;
    List<NavigationToolbarItem> navigationToolbarItems = new List<NavigationToolbarItem>()
    {
        NavigationToolbarItem.Thumbnails,
        NavigationToolbarItem.Bookmarks,
        NavigationToolbarItem.CommentPanel,
    };
    List<CustomNavigationToolbarItem> customNavigationToolbarItems = new List<CustomNavigationToolbarItem>()
    {

        new CustomNavigationToolbarItem()
        {
         IconCss = "e-icons e-ai-chat",
         Index = 0,
         TooltipText = "AI Assistance",
         Name = "AI Assistance",
         HeaderText = "AI Assistance",
         ItemType = NavigationToolbarItemType.Button,
         Template = GetTemplate("AI Assistance")
        },
        new CustomNavigationToolbarItem()
        {
            Name = "Delete",
            HeaderText = "Delete",
            IconCss = "e-icons e-pv-annotation-delete-icon",
            Index = 4,
            TooltipText = "Delete",
            ItemType = NavigationToolbarItemType.Button,
            Template = GetTemplate("Delete")
        },
        new CustomNavigationToolbarItem()
        {
            Name = "Separator",
            Index = 1,
            ItemType = NavigationToolbarItemType.Separator
        },
        new CustomNavigationToolbarItem()
        {
            Name = "Separator",
            Index = 6,
            ItemType = NavigationToolbarItemType.Separator
        }
    };
    private static RenderFragment GetTemplate(string templatename)
    {
        return __builder =>
        {
            switch(templatename)
            {
                case "Delete":
                    <div class="custom-delete-toolbar">
                        <div class="delete-banner">
                            Are you sure you want to delete?
                        </div>
                        <input type="text" placeholder="Type 'DELETE' to confirm" class="delete-confirm-input" />
                    </div>
                    break;
                case "AI Assistance":
                    <div class="custom-ai-toolbar">
                        <div class="ai-banner">
                            AI Assistance
                        </div>
                        <input type="text"
                               placeholder="Ask your AI assistant..."
                               class="ai-input" />
                        <button class="ai-submit-button">Submit</button>
                    </div>
                    break;
            }
        };
    }
    private async Task OpenCustomPanel()
    {
        await pdfViewer.ToggleItemByIndex(3);
    }
}

```

![Open or Close Navigation Panel Programmatically](../blazor-classic/images/navigation_panel_toggleitembyindex.png)   

### How to add the customize template for the navigation panel

You can define a completely custom UI for a navigation panel by assigning a RenderFragment to the `Template` property of a `CustomNavigationToolbarItem`.

```cshtml

@using Syncfusion.Blazor.SfPdfViewer;

<SfPdfViewer2 DocumentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
              Height="100%"
              Width="100%" 
              EnableNavigationPanel="true">
              <NavigationToolbarSettings BuiltInItems="navigationToolbarItems" CustomItems="customNavigationToolbarItems"></NavigationToolbarSettings>
</SfPdfViewer2>

@code {
    List<NavigationToolbarItem> navigationToolbarItems = new List<NavigationToolbarItem>()
    {
        NavigationToolbarItem.Thumbnails,
        NavigationToolbarItem.Bookmarks,
        NavigationToolbarItem.CommentPanel,
    };
    List<CustomNavigationToolbarItem> customNavigationToolbarItems = new List<CustomNavigationToolbarItem>()
    {
        new CustomNavigationToolbarItem()
        {
            Name = "Delete",
            HeaderText = "Delete",
            IconCss = "e-icons e-pv-annotation-delete-icon",
            Index = 4,
            TooltipText = "Delete",
            ItemType = NavigationToolbarItemType.Button,
            Template = GetTemplate("Delete")
        }
    };
    private static RenderFragment GetTemplate(string templatename)
    {
        return __builder =>
        {
            switch(templatename)
            {
                case "Delete":
                    <div style="padding: 16px 24px; border-bottom: 1px solid #e5e7eb; display: flex; justify-content: space-between; align-items: center;">
                        <h3 style="margin: 0; font-size: 18px; font-weight: 600; color: #111827;">
                            Confirm Deletion
                        </h3>
                        <button style="background: transparent; border: none; font-size: 24px; line-height: 1; cursor: pointer; color: #6b7280;">&times;</button>
                    </div>
                    
                    <div style="padding: 24px; display: flex; flex-direction: column; align-items: center;">
                        <!-- Warning Icon -->
                        <div style="background-color: #fee2e2; border-radius: 50%; width: 48px; height: 48px; display: flex; justify-content: center; align-items: center; margin-bottom: 16px;">
                            <svg style="width: 24px; height: 24px; color: #ef4444;" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                            </svg>
                        </div>
                        
                        <p style="margin: 0 0 8px 0; font-size: 16px; font-weight: 500; color: #1f2937;">
                            Are you sure you want to delete this item?
                        </p>
                        <p style="margin: 0 0 24px 0; font-size: 14px; color: #6b7280;">
                            This action is permanent and cannot be undone. All associated data will be lost.
                        </p>
                        
                        <div style="width: 100%; text-align: left;">
                            <label for="delete-confirm-input" style="display: block; font-size: 14px; font-weight: 500; color: #374151; margin-bottom: 8px;">
                                To confirm, please type '<strong>DELETE</strong>'
                            </label>
                            <input type="text" id="delete-confirm-input" placeholder="DELETE" style="width: 100%; padding: 10px; border: 1px solid #d1d5db; border-radius: 6px; font-size: 14px; box-sizing: border-box;">
                        </div>
                    </div>
                    
                    <div style="padding: 16px 24px; background-color: #f9fafb; border-top: 1px solid #e5e7eb; display: flex; justify-content: flex-end; gap: 12px; border-bottom-left-radius: 12px; border-bottom-right-radius: 12px;">
                        <button style="background: #ffffff; color: #374151; border: 1px solid #d1d5db; padding: 10px 18px; border-radius: 6px; font-size: 14px; font-weight: 500; cursor: pointer;">
                            Cancel
                        </button>
                        <button style="background: #ef4444; color: white; border: none; padding: 10px 18px; border-radius: 6px; font-size: 14px; font-weight: 500; cursor: pointer; opacity: 0.5;" disabled>
                            Delete
                        </button>
                    </div>
                    break;
            }
        };
    }
}

```

![Customize Template for the Navigation Panel](../blazor-classic/images/custom_navigation_panel_template.png)

### Demand rendering for navigation panel

The SfPdfViewer allows you to specify a loading strategy for the content of the navigation panels to optimize performance. The available options are:

* `Dynamic` : The content for a panel is only loaded into the DOM when that panel is selected. When you switch to a different panel, the previous content is removed and replaced.
* `Init` : The content for all navigation panels is rendered during the initial load and is always present in the DOM.
* `Demand` : The content for a panel is loaded into the DOM the first time it is selected. The content is then kept in the DOM, even if you navigate to other panels.

```cshtml

@using Syncfusion.Blazor.SfPdfViewer;
@using Syncfusion.Blazor.Navigations;

<SfPdfViewer2 DocumentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
              Height="100%"
              Width="100%" 
              EnableNavigationPanel="true">
              <NavigationToolbarSettings BuiltInItems="navigationToolbarItems" CustomItems="customNavigationToolbarItems" LoadOn="ContentLoad.Demand"></NavigationToolbarSettings>
</SfPdfViewer2>

@code {
    List<NavigationToolbarItem> navigationToolbarItems = new List<NavigationToolbarItem>()
    {
        NavigationToolbarItem.Thumbnails,
        NavigationToolbarItem.Bookmarks,
        NavigationToolbarItem.CommentPanel,
    };
    List<CustomNavigationToolbarItem> customNavigationToolbarItems = new List<CustomNavigationToolbarItem>()
    {
        new CustomNavigationToolbarItem()
        {
            Name = "Delete",
            HeaderText = "Delete",
            IconCss = "e-icons e-pv-annotation-delete-icon",
            Index = 4,
            TooltipText = "Delete",
            ItemType = NavigationToolbarItemType.Button,
            Template = GetTemplate("Delete")
        },
        new CustomNavigationToolbarItem()
        {
            Name = "Separator",
            Index = 1,
            ItemType = NavigationToolbarItemType.Separator
        },
        new CustomNavigationToolbarItem()
        {
            Name = "Separator",
            Index = 6,
            ItemType = NavigationToolbarItemType.Separator
        }
    };
    private static RenderFragment GetTemplate(string templatename)
    {
        return __builder =>
        {
            switch(templatename)
            {
                case "Delete":
                    <div class="custom-delete-toolbar">
                        <div class="delete-banner">
                            Are you sure you want to delete?
                        </div>
                        <input type="text" placeholder="Type 'DELETE' to confirm" class="delete-confirm-input" />
                    </div>
                    break;
            }
        };
    }
}

```

### Modern Navigation Panel in Mobile view

On mobile devices, the navigation toolbar is collapsed into a toggle menu to save space. Custom items you add will appear at the beginning of this menu.

![Navigation Panel Mobile Mode](../blazor-classic/images/navigation_panel_mobile.png)

## See also

* [Magnification in Blazor SfPdfViewer Component](./magnification)