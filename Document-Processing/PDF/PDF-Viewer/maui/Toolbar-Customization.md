---
layout: post
title: Customize the Toolbar in .NET MAUI PDF Viewer | Syncfusion
description: Learn how to show, hide, add, remove, and reorder toolbars and toolbar items in the Syncfusion® .NET MAUI PDF Viewer (SfPdfViewer) control.
platform: document-processing
control: SfPdfViewer
documentation: ug
keywords: .net maui pdf viewer, customize toolbar, show hide toolbar, add toolbar item, remove toolbar item, maui pdf viewer toolbar
---

# Toolbar Customization in .NET MAUI PDF Viewer (SfPdfViewer)

The [SfPdfViewer](https://help.syncfusion.com/cr/maui/Syncfusion.Maui.PdfViewer.SfPdfViewer.html) allows you to fully customize its built-in toolbars — including showing or hiding entire toolbars, and adding, removing, or reordering individual toolbar items. This flexibility lets you tailor the viewer's interface to match your application's workflow.

For the list of toolbar names and toolbar item names, see [Toolbar](https://help.syncfusion.com/maui/pdf-viewer/toolbar).

## Show and hide all toolbars

The built-in toolbars are visible by default. In certain scenarios, you might want to hide all the toolbars in the PDF Viewer to display the document in full view or to use customized toolbars based on your application needs. You can do this by setting the [ShowToolbars](https://help.syncfusion.com/cr/maui/Syncfusion.Maui.PdfViewer.SfPdfViewer.html#Syncfusion_Maui_PdfViewer_SfPdfViewer_ShowToolbars) property to `false`. Set it back to `true` to restore the built-in toolbars.

{% tabs %}
{% highlight C# %}

// Hide all toolbars
public MainPage()
{
    SfPdfViewer pdfViewer = new SfPdfViewer();
    pdfViewer.ShowToolbars = false;
}

{% endhighlight %}
{% endtabs %}

{% tabs %}
{% highlight XAML %}

<ContentPage.Content>
    <syncfusion:SfPdfViewer x:Name="pdfViewer"
                            DocumentSource="{Binding PdfDocumentStream}"
                            ShowToolbars="False" />
</ContentPage.Content>

{% endhighlight %}
{% endtabs %}

You can find the sample project from the [link provided here](https://github.com/SyncfusionExamples/maui-pdf-viewer-examples/tree/master/Toolbar%20customization/HideToolbars).

## Show and hide specific toolbars

Sometimes, you might need to hide specific toolbars instead of all. This can be useful if you want to simplify the user interface by removing unnecessary tools or creating a more focused environment for certain tasks. The `Toolbars` collection property in the PDF Viewer allows you to hide a specific toolbar by using its index or name.

### Hide specific toolbars by index

If you know the position of the toolbar you want to hide within the `Toolbars` collection, you can access and hide it using its index. For example, the following code hides the first and second toolbars in the collection.

{% tabs %}
{% highlight C# %}
if (pdfViewer?.Toolbars?.Count > 1)
{
    var firstToolbar = pdfViewer?.Toolbars[0];
    if (firstToolbar != null)
        firstToolbar.IsVisible = false; // Hide the first toolbar

    var secondToolbar = pdfViewer?.Toolbars[1];
    if (secondToolbar != null)
        secondToolbar.IsVisible = false; // Hide the second toolbar
}
{% endhighlight %}
{% endtabs %}

### Hide specific toolbars by name

By using the [GetByName](https://help.syncfusion.com/cr/maui/Syncfusion.Maui.PdfViewer.ToolbarItemCollection.html#Syncfusion_Maui_PdfViewer_ToolbarItemCollection_GetByName_System_String) method with a specified toolbar name, you can access and modify that toolbar's properties. The following example retrieves the `BottomToolbar` by name and hides it.

{% tabs %}
{% highlight C# %}
// On mobile, access the bottom toolbar using the GetByName method.
var toolbar = pdfViewer.Toolbars?.GetByName("BottomToolbar");
if (toolbar != null)
{
    toolbar.IsVisible = false; // Hide the bottom toolbar
}
{% endhighlight %}
{% endtabs %}

N> For the full list of toolbar names, see [Mobile toolbar names](https://help.syncfusion.com/maui/pdf-viewer/toolbar#mobile-toolbar-names) and [Desktop toolbar names](https://help.syncfusion.com/maui/pdf-viewer/toolbar#desktop-toolbar-names).

## Manage toolbar items

In addition to customizing the visibility of toolbars, you can customize the items within each toolbar. This includes adding new items, removing existing ones, or rearranging their order to suit your app's workflow better.

N> All toolbar customization code should run **after** the PDF Viewer has been initialized and attached to the visual tree. The recommended place is the `DocumentLoaded` event handler or the page's `OnAppearing()` override — not the constructor, where the toolbar may not yet be populated.

### Add a new toolbar item

To add an item to a toolbar, first create the UI element you want to include, then convert it into a `ToolbarItem`, and finally add it to the toolbar using the `Add` method. The following example creates a button and adds it to the `PrimaryToolbar`.

{% tabs %}
{% highlight C# tabtitle="MainPage.xaml.cs" %}
// Recommended: place inside the DocumentLoaded event handler or OnAppearing().
// Create the button you want to add to the toolbar.
Button fileOpenButton = new Button
{
    Text = "\ue712",
    FontSize = 24,
    IsEnabled = false,
    FontFamily = "Maui Material Assets",
    HorizontalOptions = LayoutOptions.Center,
    VerticalOptions = LayoutOptions.Center,
    BackgroundColor = Colors.Transparent,
    BorderColor = Colors.Transparent,
    Padding = 10,
    Margin = new Thickness(5, 0, 0, 0),
    Opacity = 0.5
};

// Access the PrimaryToolbar (desktop) and append the new item at the end.
pdfViewer.Toolbars?.GetByName("PrimaryToolbar")?.Items?.Add(
    new Syncfusion.Maui.PdfViewer.ToolbarItem(fileOpenButton, "FileOpenButton"));
{% endhighlight %}
{% endtabs %}

### Add a toolbar item at a specific index

To add an item at a specific index, use the [Insert](https://help.syncfusion.com/cr/maui/Syncfusion.Maui.PdfViewer.ToolbarItemCollection.html#Syncfusion_Maui_PdfViewer_ToolbarItemCollection_Insert_System_Int32_Syncfusion_Maui_PdfViewer_ToolbarItem) method. Use the [Index](https://help.syncfusion.com/cr/maui/Syncfusion.Maui.PdfViewer.ToolbarItem.html#Syncfusion_Maui_PdfViewer_ToolbarItem_Index) property to get the current index of an existing item, then insert the new item relative to it. The following example inserts a save button right after the `Print` button in the `PrimaryToolbar`.

{% tabs %}
{% highlight C# %}
// Create a button you want to add.
Button fileSaveButton = new Button
{
    Text = "\ue75f",
    FontSize = 24,
    FontFamily = "Maui Material Assets",
    HorizontalOptions = LayoutOptions.Center,
    VerticalOptions = LayoutOptions.Center,
    BackgroundColor = Colors.Transparent,
    BorderColor = Colors.Transparent,
    IsEnabled = false,
    Opacity = 0.5,
    Padding = 10
};

// Access the Print item in PrimaryToolbar and insert the new button after it.
var item = PdfViewer?.Toolbars?.GetByName("PrimaryToolbar")?.Items?.GetByName("Print");
if (item != null)
{
    PdfViewer?.Toolbars?.GetByName("PrimaryToolbar")?.Items?.Insert(
        item.Index + 1,
        new Syncfusion.Maui.PdfViewer.ToolbarItem(fileSaveButton, "FileSaveButton"));
}
{% endhighlight %}
{% endtabs %}

### Remove a toolbar item by index

You can access a specific item using its index and remove it from the toolbar's `Items` collection using the `Remove` method. The following example retrieves and removes the first item from the `TopToolbar`.

{% tabs %}
{% highlight C# %}
// Get the top toolbar on mobile platforms.
Syncfusion.Maui.PdfViewer.Toolbar? topToolbar = PdfViewer.Toolbars?.GetByName("TopToolbar");
if (topToolbar != null)
{
    // Get the first item from the toolbar.
    Syncfusion.Maui.PdfViewer.ToolbarItem? firstItem = topToolbar.Items?[0];
    if (firstItem != null)
    {
        // Remove the first item from the toolbar.
        topToolbar?.Items?.Remove(firstItem);
    }
}
{% endhighlight %}
{% endtabs %}

### Remove a toolbar item by name

Use the [GetByName](https://help.syncfusion.com/cr/maui/Syncfusion.Maui.PdfViewer.ToolbarItemCollection.html#Syncfusion_Maui_PdfViewer_ToolbarItemCollection_GetByName_System_String) method to access a specific item and then call [Remove](https://help.syncfusion.com/cr/maui/Syncfusion.Maui.PdfViewer.ToolbarItemCollection.html#Syncfusion_Maui_PdfViewer_ToolbarItemCollection_Remove_Syncfusion_Maui_PdfViewer_ToolbarItem) to remove it. The following example removes the `Outline` item from the `PrimaryToolbar`.

{% tabs %}
{% highlight C# %}
// Access the Outline item in PrimaryToolbar and remove it.
var item = pdfViewer.Toolbars?.GetByName("PrimaryToolbar")?.Items?.GetByName("Outline");
if (item != null)
{
    pdfViewer.Toolbars?.GetByName("PrimaryToolbar")?.Items?.Remove(item);
}
{% endhighlight %}
{% endtabs %}

### Remove an item from all toolbars

Each toolbar in [SfPdfViewer](https://help.syncfusion.com/cr/maui/Syncfusion.Maui.PdfViewer.SfPdfViewer.html) operates independently — removing an item from one toolbar does not affect others. To remove an item from all toolbars, iterate through the `Toolbars` collection and remove the item from each. The following example removes the `StickyNote` item from all toolbars.

{% tabs %}
{% highlight C# %}
// Iterate through all toolbars and remove the StickyNote item from each.
for (int i = 0; i < pdfViewer?.Toolbars?.Count; i++)
{
    var item = pdfViewer.Toolbars?[i]?.Items?.GetByName("StickyNote");
    if (item != null)
    {
        pdfViewer?.Toolbars?[i]?.Items?.Remove(item);
    }
}
{% endhighlight %}
{% endtabs %}

You can find the sample project for removing an item from the desktop toolbar using the [link provided here](https://github.com/SyncfusionExamples/maui-pdf-viewer-examples/tree/master/Toolbar%20customization/RemoveToolbarItemDesktop).

### Hide a toolbar item by index

To hide a toolbar item by its index, access the item in the `Items` collection and set its [IsVisible](https://help.syncfusion.com/cr/maui/Syncfusion.Maui.PdfViewer.ToolbarItem.html#Syncfusion_Maui_PdfViewer_ToolbarItem_IsVisible) property to `false`.

{% tabs %}
{% highlight C# %}
int indexToHide = 2; // Replace with the actual index of the item you want to hide.

var toolbar = pdfViewer.Toolbars?.GetByName("PrimaryToolbar");
if (toolbar != null && indexToHide >= 0 && indexToHide < toolbar.Items?.Count)
{
    var item = toolbar.Items[indexToHide];
    item.IsVisible = false; // Hide the item by index
}
{% endhighlight %}
{% endtabs %}

### Hide a toolbar item by name

Use the [GetByName](https://help.syncfusion.com/cr/maui/Syncfusion.Maui.PdfViewer.ToolbarItemCollection.html#Syncfusion_Maui_PdfViewer_ToolbarItemCollection_GetByName_System_String) method to access a specific item, then set its [IsVisible](https://help.syncfusion.com/cr/maui/Syncfusion.Maui.PdfViewer.ToolbarItem.html#Syncfusion_Maui_PdfViewer_ToolbarItem_IsVisible) property to `false`. The following example hides the `Search` item in the `PrimaryToolbar`.

{% tabs %}
{% highlight C# %}
// On desktop, access the Search button in the PrimaryToolbar and hide it.
var item = pdfViewer.Toolbars?.GetByName("PrimaryToolbar")?.Items?.GetByName("Search");
if (item != null)
{
    item.IsVisible = false; // Hide the search item
}
{% endhighlight %}
{% endtabs %}

### Hide an item in all toolbars

Each toolbar operates independently, so hiding an item in one toolbar does not affect others. To hide an item across all toolbars, iterate through the `Toolbars` collection. The following example hides the `Signature` icon in every toolbar where it appears.

{% tabs %}
{% highlight C# %}
// Iterate through all toolbars and hide the Signature item in each.
for (int i = 0; i < pdfViewer?.Toolbars?.Count; i++)
{
    var item = pdfViewer.Toolbars[i]?.Items?.GetByName("Signature");
    if (item != null)
    {
        item.IsVisible = false; // Hide the Signature item
    }
}
{% endhighlight %}
{% endtabs %}

N> You can identify items that appear in multiple toolbars by checking the availability column in [Mobile toolbar item names](https://help.syncfusion.com/maui/pdf-viewer/toolbar#mobile-toolbar-item-names) and [Desktop toolbar item names](https://help.syncfusion.com/maui/pdf-viewer/toolbar#desktop-toolbar-item-names).

## See Also

* [Toolbar — toolbar names and toolbar item names](https://help.syncfusion.com/maui/pdf-viewer/toolbar)
* [UI Customization](https://help.syncfusion.com/maui/pdf-viewer/ui-customization)
* [Annotations Overview](https://help.syncfusion.com/maui/pdf-viewer/annotations-overview)
* [Show or Hide Annotations](https://help.syncfusion.com/maui/pdf-viewer/show-hide)
