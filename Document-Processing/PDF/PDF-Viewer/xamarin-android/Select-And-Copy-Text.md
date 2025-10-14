---
layout: post
title:  Select & copy text using PDF viewer Xamarin.Android | Syncfusion
description: Select and copy text support allows user to select the text in the PDF document and copy it to the clipboard using PDF Viewer Xamarin.Android
platform: document-processing
control: SfPdfViewer
documentation: ug
---

# Select and copy the text

The PDF viewer supports text selection and copy feature, which allows user to select the text in the PDF document and copy it to the clipboard. This section illustrates about how to use this feature.

<table>

<tr>
<th>Property</th>
<th>Action</th>
</tr>

<tr>
<td>IsTextSelectionEnabled</td>
<td>Gets or sets the value that enables or disables the text selection feature in the PDF viewer. This property when set to true enables text selection and vice versa. By default, this property is set to true.</td>
</tr>

</table>

{% tabs %}
{% highlight axml %}

<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:orientation="vertical"
    android:layout_width="match_parent"
    android:layout_height="match_parent">
  <Syncfusion.SfPdfViewer.Android.SfPdfViewer
        android:layout_width="match_parent"
        android:layout_height="match_parent"
        android:id="@+id/pdfviewercontrol" />
</LinearLayout>

{% endhighlight %}
{% endtabs %}

{% tabs %}
{% highlight c# %}

		SfPdfViewer pdfViewer;
    
        protected override void OnCreate(Bundle bundle)
        {
            base.OnCreate(bundle);
            SetContentView(Resource.Layout.Main);
            pdfViewer = FindViewById<SfPdfViewer>(Resource.Id.pdfviewercontrol);
            Stream PdfStream = Assets.Open("GIS Succinctly.pdf");
            pdfViewer.LoadDocument(PdfStream);

            //Text selection feature in the PDF viewer is disabled.
            pdfViewer.IsTextSelectionEnabled = false;
        }

{% endhighlight %}
{% endtabs %}

## How to enable or disable the context menu?

By default, PDF viewer comes with a context menu that will be displayed above the selected text in the PDF document, which has a button (option) to copy the selected text. The display of the context menu can be disabled by setting ShowContextMenu property of the TextSelectionSettings class to false. The below code illustrates the same. By default, context menu will be enabled in the PDF viewer. 

{% tabs %}
{% highlight axml %}

<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:orientation="vertical"
    android:layout_width="match_parent"
    android:layout_height="match_parent">
  <Syncfusion.SfPdfViewer.Android.SfPdfViewer
        android:layout_width="match_parent"
        android:layout_height="match_parent"
        android:id="@+id/pdfviewercontrol" />
</LinearLayout>

{% endhighlight %}
{% endtabs %}

{% tabs %}
{% highlight c# %}

		SfPdfViewer pdfViewer;
        protected override void OnCreate(Bundle bundle)
        {
            base.OnCreate(bundle);
            SetContentView(Resource.Layout.Main);
            pdfViewer = FindViewById<SfPdfViewer>(Resource.Id.pdfviewercontrol);
            Stream PdfStream = Assets.Open("GIS Succinctly.pdf");
            pdfViewer.LoadDocument(PdfStream);
      
            //The display of the default context menu for the text selection is disabled.
            pdfViewer.TextSelectionSettings.ShowContextMenu = false;
        }

{% endhighlight %}
{% endtabs %}

## How to modify the selection and its handle color?

The color used for text selection and the color of the handle can be customized based on the developer’s requirements. The properties TextSelectionColor and TextSelectionHandleColor of the TextSelectionSettings class can be used to customize them. The below code snippet illustrates the same.

{% tabs %}
{% highlight axml %}

<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:orientation="vertical"
    android:layout_width="match_parent"
    android:layout_height="match_parent">
  <Syncfusion.SfPdfViewer.Android.SfPdfViewer
        android:layout_width="match_parent"
        android:layout_height="match_parent"
        android:id="@+id/pdfviewercontrol" />
</LinearLayout>

{% endhighlight %}
{% endtabs %}

{% tabs %}
{% highlight c# %}
		
		SfPdfViewer pdfViewer;

        protected override void OnCreate(Bundle bundle)
        {
            base.OnCreate(bundle);
            SetContentView(Resource.Layout.Main);
            pdfViewer = FindViewById<SfPdfViewer>(Resource.Id.pdfviewercontrol);
            Stream PdfStream = Assets.Open("GIS Succinctly.pdf");
            pdfViewer.LoadDocument(PdfStream);

            //Customizing the color being displayed while selecting the text from PDF document.
            pdfViewer.TextSelectionSettings.TextSelectionColor = Color.Argb(59, 255, 0, 0);
            //Customizing the color of text selection handler displayed while selecting the text from PDF document.
            pdfViewer.TextSelectionSettings.TextSelectionHandleColor = Color.Argb(0, 255, 0, 0);

        }

{% endhighlight %}
{% endtabs %}

## How to acquire selected text?

The completion of the text selection action would trigger TextSelectionCompleted event.  The event argument of this event will contain a copy of the selected text in the String format. 

{% tabs %}
{% highlight axml %}

<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:orientation="vertical"
    android:layout_width="match_parent"
    android:layout_height="match_parent">
  <Syncfusion.SfPdfViewer.Android.SfPdfViewer
        android:layout_width="match_parent"
        android:layout_height="match_parent"
        android:id="@+id/pdfviewercontrol" />
</LinearLayout>

{% endhighlight %}
{% endtabs %}

{% tabs %}
{% highlight c# %}

SfPdfViewer pdfViewer;

protected override void OnCreate(Bundle bundle)
{
     
     base.OnCreate(bundle);
     SetContentView(Resource.Layout.Main);
     pdfViewer = FindViewById<SfPdfViewer>(Resource.Id.pdfviewercontrol);
     Stream PdfStream = Assets.Open("GIS Succinctly.pdf");
     pdfViewer.LoadDocument(PdfStream);

     //Wiring up the TextSelectionCompleted event.
     pdfViewer.TextSelectionCompleted += PdfViewer_TextSelectionCompleted;

}

private void PdfViewer_TextSelectionCompleted(object sender, TextSelectionCompletedEventArgs args)
{

    //The selected text is acquired and stored in the variable selectedText.
    var selectedText = args.SelectedText;

}

{% endhighlight %}
{% endtabs %}

## How to acquire page number, page bounds and selected region?

The completion of the text selection action would trigger TextSelectionCompleted event.  The event argument would contain details about the page number in which the selection operation is performed, bounds of the page and the selection region. 

{% tabs %}
{% highlight axml %}

<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:orientation="vertical"
    android:layout_width="match_parent"
    android:layout_height="match_parent">
  <Syncfusion.SfPdfViewer.Android.SfPdfViewer
        android:layout_width="match_parent"
        android:layout_height="match_parent"
        android:id="@+id/pdfviewercontrol" />
</LinearLayout>

{% endhighlight %}
{% endtabs %}

{% tabs %}
{% highlight c# %}

SfPdfViewer pdfViewer;

    
protected override void OnCreate(Bundle bundle)
{
    base.OnCreate(bundle);
    SetContentView(Resource.Layout.Main);
    pdfViewer = FindViewById<SfPdfViewer>(Resource.Id.pdfviewercontrol);
    Stream PdfStream = Assets.Open("GIS Succinctly.pdf");
    pdfViewer.LoadDocument(PdfStream);

    //Wired up the TextSelectionCompleted event.
    pdfViewer.TextSelectionCompleted += PdfViewer_TextSelectionCompleted;
 }

private void PdfViewer_TextSelectionCompleted(object sender, TextSelectionCompletedEventArgs args)
{
                
     //The number of the page in which the selection is performed is acquired.
     var pageNumberOfSelectedText = args.PageNumber;

     //The region of the text being selected is acquired.
     var selectedTextRegion = args.SelectedRegion;

     //The bounds of the page in which the selection is performed is acquired.
     var pageBounds = args.PageBounds;
}

{% endhighlight %}
{% endtabs %}

## How to get the start index and end index of the selected text?

The completion of the text selection action would trigger the [TextSelectionCompleted](https://help.syncfusion.com/cr/xamarin-android/Syncfusion.SfPdfViewer.Android.SfPdfViewer.html#Syncfusion_SfPdfViewer_Android_SfPdfViewer_TextSelectionCompleted) event. The event argument would contain details about the start index and end index of the selected text. 

{% tabs %}
{% highlight c# %}

private void PdfViewerControl_TextSelectionCompleted(object sender, TextSelectionCompletedEventArgs args) 
{
	//Starting index of the selected text on the page. 
	int startIndex = args.SelectedTextStartIndex; 

	//Ending index of the selected text on the page.
	int endIndex= args.SelectedTextEndIndex; 
}

{% endhighlight %}
{% endtabs %}

N> The values of [SelectedTextStartIndex](https://help.syncfusion.com/cr/xamarin-android/Syncfusion.SfPdfViewer.Android.TextSelectionCompletedEventArgs.html#Syncfusion_SfPdfViewer_Android_TextSelectionCompletedEventArgs_SelectedTextStartIndex) and [SelectedTextEndIndex](https://help.syncfusion.com/cr/xamarin-android/Syncfusion.SfPdfViewer.Android.TextSelectionCompletedEventArgs.html#Syncfusion_SfPdfViewer_Android_TextSelectionCompletedEventArgs_SelectedTextEndIndex) properties correspond only to the text present in the page on which the text is selected. 

## How to customize the text selection context menu?

By default, the text selection context menu contains built-in menu items such as Copy, Highlight, Underline, and Strikethrough. You can add additional items in the text selection context menu by creating an instance of type [TextSelectionMenuItem](https://help.syncfusion.com/cr/xamarin-android/Syncfusion.SfPdfViewer.Android.TextSelectionMenuItem.html) and add the item to the [TextSelectionSettings.MenuOptions.Items](https://help.syncfusion.com/cr/xamarin-android/Syncfusion.SfPdfViewer.Android.TextSelectionMenu.html#Syncfusion_SfPdfViewer_Android_TextSelectionMenu_Items) property. 
As the type of this property is ObservableCollection, the following operations can be performed on the text selection context menu items. 

1.	Adding a new item
2.	Clearing the menu items
3.	Inserting a new item
4.	Removing an existing item

Below code illustrates adding a new menu item to the text selection context menu.

{% tabs %}
{% highlight c# %}

        TextSelectionMenuItem menuItem = new TextSelectionMenuItem();

		//The text to display on the menu item
		menuItem.Text = “Find text”;

		//The ID to uniquely identify the menu item. 
		menuItem.Id = "find_text";
		pdfViewer.TextSelectionSettings.MenuOptions.Items.Add(menuItem);

{% endhighlight %}
{% endtabs %}

### How to handle the click event of the menu item?

The [TextSelectionMenuItemClicked](https://help.syncfusion.com/cr/xamarin-android/Syncfusion.SfPdfViewer.Android.TextSelectionMenu.html#Syncfusion_SfPdfViewer_Android_TextSelectionMenu_TextSelectionMenuItemClicked) event is raised when any menu item is clicked. While performing the intended operation when a menu item is clicked, the selected text can be obtained as described in the [above](https://help.syncfusion.com/xamarin-android/sfpdfviewer/select-and-copy-text#how-to-acquire-selected-text) section. 

{% tabs %}
{% highlight c# %}

private void PdfViewerControl_TextSelectionMenuItemClicked(object sender, TextSelectionMenuItemClickedEventArgs args) 
{
	TextSelectionMenuItem menuItem = sender as TextSelectionMenuItem;
	switch(menuItem.Id)
	{
		//Perform the intended operation after identifying the menu item from its ‘Id’ value. 
	}
}

{% endhighlight %}
{% endtabs %}