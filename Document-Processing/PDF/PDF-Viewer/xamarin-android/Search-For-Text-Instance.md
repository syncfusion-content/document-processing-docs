---
layout: post
title:  Search text in PDF using PDF viewer Xamarin.Android | Syncfusion
description: Search text support allows the user to locate and highlight text instances in the PDF document using PDF Viewer Xamarin.Android
platform: document-processing
control: SfPdfViewer
documentation: ug
---

# Search for a text instance

PDF Viewer provides support to find and highlight texts in the PDF document and it provides the following methods to perform text search operations.

<table>

<tr>
<td>SearchText</td>
<td>Initiates text search and highlights all the matches of the searched text in the whole document.</td>
</tr>

<tr>
<td>SearchNext</td>
<td>Used to initiate text search and to traverse through the matches of the searched text in downwards direction.</td>
</tr>

<tr>
<td>SearchPrevious</td>
<td>Used to initiate text search and to traverse through the matches of the searched text in upward direction.</td>
</tr>

<tr>
<td>CancelSearch</td>
<td>Used to cancel the text search when text search is in progress and used to clear the highlights over the text matches.</td>
</tr>

</table>

## How to initiate text search?

SearchText method can be used to initiate text search operation. The text to be searched is provided as a parameter to this method.

{% tabs %}
{% highlight axml %}

<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:orientation="vertical"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:id="@+id/parentview">
  <FrameLayout
        android:id="@+id/parent"
        android:layout_width="match_parent"
        android:layout_height="50dp">
    <GridLayout
            android:id="@+id/toolbarGrid"
            android:background="#E9E9E9"
            android:layout_width="match_parent"
            android:columnCount="1"
            android:layout_height="50dp">
    <EditText
            android:id="@+id/search"
            android:layout_width="310dp"
            android:layout_height="30dp"
            android:layout_marginLeft="1dip"
            android:layout_marginTop="15dip"
            android:inputType="text"
            android:imeOptions="actionSearch"
            android:background="@drawable/SearchEntry"
            android:gravity="left" />
    </GridLayout>
  </FrameLayout>

  <Syncfusion.SfPdfViewer.Android.SfPdfViewer
        android:layout_width="match_parent"
        android:layout_height="match_parent"
        android:id="@+id/pdfviewercontrol" />
</LinearLayout>

{% endhighlight %}
{% endtabs %}


{% tabs %}
{% highlight c# %}

EditText searchView;
SfPdfViewer pdfViewer;

protected override void OnCreate(Bundle bundle)
{
    base.OnCreate(bundle);
    SetContentView(Resource.Layout.Main);
    
    //Access the controls in the design.
    pdfViewer = FindViewById<SfPdfViewer>(Resource.Id.pdfviewercontrol);
    searchView = FindViewById<EditText>(Resource.Id.search);

    searchView.FocusableInTouchMode = true;
    searchView.TextSize = 18;
    searchView.SetTextColor(Android.Graphics.Color.Rgb(103, 103, 103));
    searchView.TextAlignment = TextAlignment.Center;
    //Wire up KeyPress event with SearchView_KeyPress
    searchView.KeyPress += SearchView_KeyPress;

    //Access the document in the resource as stream and load it in the PDF viewer.
    Stream PdfStream = Assets.Open("GIS Succinctly.pdf");
    pdfViewer.LoadDocument(PdfStream);
}

private void SearchView_KeyPress(object sender, View.KeyEventArgs e)
{   
    //Condition passes when the search icon on the keyboard is being tapped.
    if (e.KeyCode == Keycode.Enter)
    {
        //Checks whether the entered string is empty or has only space character.
        if (!string.IsNullOrWhiteSpace(searchView.Text) && !string.IsNullOrEmpty(searchView.Text))
        {
            var searchText = searchView.Text;
            //Initiates text search.
            pdfViewer.SearchText(searchText);
        }
        InputMethodManager inputMethodManager = (InputMethodManager)mainView.Context.GetSystemService(Context.InputMethodService);
        inputMethodManager.HideSoftInputFromWindow(mainView.WindowToken, HideSoftInputFlags.None);
    }
}

{% endhighlight %}
{% endtabs %}


## How to identify if there is no instance of the text being searched?

SearchCompleted event in the PDF viewer can be used to track the completion of the text search operation, NoMatchFound property of TextSearchEventArgs (event argument of this event) can be used to find if no match of text is being found.

{% tabs %}
{% highlight axml %}

<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:orientation="vertical"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:id="@+id/parentview">
  <FrameLayout
        android:id="@+id/parent"
        android:layout_width="match_parent"
        android:layout_height="50dp">
    <GridLayout
            android:id="@+id/toolbarGrid"
            android:background="#E9E9E9"
            android:layout_width="match_parent"
            android:columnCount="1"
            android:layout_height="50dp">
    <EditText
            android:id="@+id/search"
            android:layout_width="310dp"
            android:layout_height="30dp"
            android:layout_marginLeft="1dip"
            android:layout_marginTop="15dip"
            android:inputType="text"
            android:imeOptions="actionSearch"
            android:background="@drawable/SearchEntry"
            android:gravity="left" />
    </GridLayout>
  </FrameLayout>

  <Syncfusion.SfPdfViewer.Android.SfPdfViewer
        android:layout_width="match_parent"
        android:layout_height="match_parent"
        android:id="@+id/pdfviewercontrol" />
</LinearLayout>

{% endhighlight %}
{% endtabs %}

{% tabs %}
{% highlight c# %}

EditText searchView;
SfPdfViewer pdfViewer;

protected override void OnCreate(Bundle bundle)
{
    base.OnCreate(bundle);
    SetContentView(Resource.Layout.Main);
    
    //Access the controls in the design.
    pdfViewer = FindViewById<SfPdfViewer>(Resource.Id.pdfviewercontrol);
    searchView = FindViewById<EditText>(Resource.Id.search);

    searchView.FocusableInTouchMode = true;
    searchView.TextSize = 18;
    searchView.SetTextColor(Android.Graphics.Color.Rgb(103, 103, 103));
    searchView.TextAlignment = TextAlignment.Center;

    //Wire up KeyPress event with SearchView_KeyPress
    searchView.KeyPress += SearchView_KeyPress;
    //Wire up SearchCompleted event with PdfViewer_SearchCompleted
    pdfViewer.SearchCompleted += PdfViewer_SearchCompleted;

    //Access the document in the resource as stream and load it in the PDF viewer.
    Stream PdfStream = Assets.Open("GIS Succinctly.pdf");
    pdfViewer.LoadDocument(PdfStream);
}

private void SearchView_KeyPress(object sender, View.KeyEventArgs e)
{   
    //Condition passes when the search icon on the keyboard is being tapped.
    if (e.KeyCode == Keycode.Enter)
    {
        //Checks whether the entered string is empty or has only space character.
        if (!string.IsNullOrWhiteSpace(searchView.Text) && !string.IsNullOrEmpty(searchView.Text))
        {
            var searchText = searchView.Text;
            //Initiates text search.
            pdfViewer.SearchText(searchText);
        }
        InputMethodManager inputMethodManager = (InputMethodManager)mainView.Context.GetSystemService(Context.InputMethodService);
        inputMethodManager.HideSoftInputFromWindow(mainView.WindowToken, HideSoftInputFlags.None);
    }
}

private void PdfViewer_SearchCompleted(object sender, TextSearchEventArgs args)
{
    bool isNoMatchFound = args.NoMatchFound;
}

{% endhighlight %}
{% endtabs %}

## How to navigate to the next match of the text?

SearchNext method of PDF viewer can be used to navigate to the successive match of the text in the PDF document. 

{% tabs %}
{% highlight axml %}

<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:orientation="vertical"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:id="@+id/parentview">
  <FrameLayout
        android:id="@+id/parent"
        android:layout_width="match_parent"
        android:layout_height="50dp">
    <GridLayout
            android:id="@+id/toolbarGrid"
            android:background="#E9E9E9"
            android:layout_width="match_parent"
            android:columnCount="1"
            android:layout_height="50dp">
    <EditText
            android:id="@+id/search"
            android:layout_width="310dp"
            android:layout_height="30dp"
            android:layout_marginLeft="1dip"
            android:layout_marginTop="15dip"
            android:inputType="text"
            android:imeOptions="actionSearch"
            android:background="@drawable/SearchEntry"
            android:gravity="left" />
        <ImageButton
          android:id="@+id/textSearchButton"
          android:layout_width="30dp"
          android:layout_height="30dp"
          android:background="#E9E9E9"
          android:src="@drawable/SearchIcon"
          android:layout_marginLeft="10dip"
          android:layout_marginTop="10dip"
          android:layout_marginRight="20dip"
          android:layout_marginBottom="10dip"
          android:layout_gravity="right" />
    </GridLayout>
  </FrameLayout>

  <Syncfusion.SfPdfViewer.Android.SfPdfViewer
        android:layout_width="match_parent"
        android:layout_height="match_parent"
        android:id="@+id/pdfviewercontrol" />
</LinearLayout>

{% endhighlight %}
{% endtabs %}


{% tabs %}
{% highlight c# %}

EditText searchView;
SfPdfViewer pdfViewer;
ImageButton textSearchButton;

protected override void OnCreate(Bundle bundle)
{
    base.OnCreate(bundle);
    SetContentView(Resource.Layout.Main);
    
    //Access the controls in the design.
    pdfViewer = FindViewById<SfPdfViewer>(Resource.Id.pdfviewercontrol);
    searchView = FindViewById<EditText>(Resource.Id.search);
    textSearchButton= FindViewById<ImageButton>(Resource.Id.textSearchButton);

    searchView.FocusableInTouchMode = true;
    searchView.TextSize = 18;
    searchView.SetTextColor(Android.Graphics.Color.Rgb(103, 103, 103));
    searchView.TextAlignment = TextAlignment.Center;

    //Wire up KeyPress event with SearchView_KeyPress
    searchView.KeyPress += SearchView_KeyPress;
    //Wire up SearchCompleted event with PdfViewer_SearchCompleted
    pdfViewer.SearchCompleted += PdfViewer_SearchCompleted;
    //Wire up Click event with TextSearchButton_Click
    textSearchButton.Click += TextSearchButton_Click;
    
    //Access the document in the resource as stream and load it in the PDF viewer.
    Stream PdfStream = Assets.Open("GIS Succinctly.pdf");
    pdfViewer.LoadDocument(PdfStream);
}

private void SearchView_KeyPress(object sender, View.KeyEventArgs e)
{   
    //Condition passes when the search icon on the keyboard is being tapped.
    if (e.KeyCode == Keycode.Enter)
    {
        //Checks whether the entered string is empty or has only space character.
        if (!string.IsNullOrWhiteSpace(searchView.Text) && !string.IsNullOrEmpty(searchView.Text))
        {
            var searchText = searchView.Text;
            //Initiates text search.
            pdfViewer.SearchText(searchText);
        }
        InputMethodManager inputMethodManager = (InputMethodManager)mainView.Context.GetSystemService(Context.InputMethodService);
        inputMethodManager.HideSoftInputFromWindow(mainView.WindowToken, HideSoftInputFlags.None);
    }
}

private void TextSearchButton_Click(object sender, System.EventArgs e)
{
    //Navigates to the successive matches of the text.
    pdfViewer.SearchNext(searchView.Text);
}

{% endhighlight %}
{% endtabs %}

## How to navigate to the previous match of the text?

SearchPrevious method of PDF viewer can be used to navigate to the previous match of the text in the PDF document. 

{% tabs %}
{% highlight axml %}

<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:orientation="vertical"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:id="@+id/parentview">
  <FrameLayout
        android:id="@+id/parent"
        android:layout_width="match_parent"
        android:layout_height="50dp">
    <GridLayout
            android:id="@+id/toolbarGrid"
            android:background="#E9E9E9"
            android:layout_width="match_parent"
            android:columnCount="1"
            android:layout_height="50dp">
    <EditText
            android:id="@+id/search"
            android:layout_width="310dp"
            android:layout_height="30dp"
            android:layout_marginLeft="1dip"
            android:layout_marginTop="15dip"
            android:inputType="text"
            android:imeOptions="actionSearch"
            android:background="@drawable/SearchEntry"
            android:gravity="left" />
        <ImageButton
          android:id="@+id/textSearchButton"
          android:layout_width="30dp"
          android:layout_height="30dp"
          android:background="#E9E9E9"
          android:src="@drawable/SearchIcon"
          android:layout_marginLeft="10dip"
          android:layout_marginTop="10dip"
          android:layout_marginRight="20dip"
          android:layout_marginBottom="10dip"
          android:layout_gravity="right" />
    </GridLayout>
  </FrameLayout>

  <Syncfusion.SfPdfViewer.Android.SfPdfViewer
        android:layout_width="match_parent"
        android:layout_height="match_parent"
        android:id="@+id/pdfviewercontrol" />
</LinearLayout>

{% endhighlight %}
{% endtabs %}

{% tabs %}
{% highlight c# %}

EditText searchView;
SfPdfViewer pdfViewer;
ImageButton textSearchButton;

protected override void OnCreate(Bundle bundle)
{
    base.OnCreate(bundle);
    SetContentView(Resource.Layout.Main);
    
    //Access the controls in the design.
    pdfViewer = FindViewById<SfPdfViewer>(Resource.Id.pdfviewercontrol);
    searchView = FindViewById<EditText>(Resource.Id.search);
    textSearchButton= FindViewById<ImageButton>(Resource.Id.textSearchButton);

    searchView.FocusableInTouchMode = true;
    searchView.TextSize = 18;
    searchView.SetTextColor(Android.Graphics.Color.Rgb(103, 103, 103));
    searchView.TextAlignment = TextAlignment.Center;

    //Wire up KeyPress event with SearchView_KeyPress
    searchView.KeyPress += SearchView_KeyPress;
    //Wire up SearchCompleted event with PdfViewer_SearchCompleted
    pdfViewer.SearchCompleted += PdfViewer_SearchCompleted;
    //Wire up Click event with TextSearchButton_Click
    textSearchButton.Click += TextSearchButton_Click;
    
    //Access the document in the resource as stream and load it in the PDF viewer.
    Stream PdfStream = Assets.Open("GIS Succinctly.pdf");
    pdfViewer.LoadDocument(PdfStream);
}

private void SearchView_KeyPress(object sender, View.KeyEventArgs e)
{   
    //Condition passes when the search icon on the keyboard is being tapped.
    if (e.KeyCode == Keycode.Enter)
    {
        //Checks whether the entered string is empty or has only space character.
        if (!string.IsNullOrWhiteSpace(searchView.Text) && !string.IsNullOrEmpty(searchView.Text))
        {
            var searchText = searchView.Text;
            //Initiates text search.
            pdfViewer.SearchText(searchText);
        }
        InputMethodManager inputMethodManager = (InputMethodManager)mainView.Context.GetSystemService(Context.InputMethodService);
        inputMethodManager.HideSoftInputFromWindow(mainView.WindowToken, HideSoftInputFlags.None);
    }
}

private void TextSearchButton_Click(object sender, System.EventArgs e)
{
    //Navigates to the previous matches of the text.
    pdfViewer.SearchPrevious(searchView.Text);
}

{% endhighlight %}
{% endtabs %}

## How to identify if a complete cycle of text search is performed?

Text search operation will start the process from the current page being displayed, then process the succeeding pages till last page of the document and then process the initial left-over pages if any.

For example, consider a PDF document which consists of 20 pages and the user initiates the text search operation from the page 10 (current page being displayed). 

* Now PDF viewer control will process the current page (page number 10) and highlight the matches if any
* Then the following pages from page 11 to 20 one by one will be processed and highlight the matches if any
* Once the end of the document is reached, the search will get started from page 1 to 9
* When the search process, finds the same matching instance again, then the NoMoreOccurrence property of the TextSearchEventArgs of SearchCompleted event will be set to true.

When we manually scroll the PDF document while navigating using the SearchNext() or SearchPrevious(), the search cycle will get restarted from the first matching instance of current page. 

{% tabs %}
{% highlight axml %}

<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:orientation="vertical"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:id="@+id/parentview">
  <FrameLayout
        android:id="@+id/parent"
        android:layout_width="match_parent"
        android:layout_height="50dp">
    <GridLayout
            android:id="@+id/toolbarGrid"
            android:background="#E9E9E9"
            android:layout_width="match_parent"
            android:columnCount="1"
            android:layout_height="50dp">
    <EditText
            android:id="@+id/search"
            android:layout_width="310dp"
            android:layout_height="30dp"
            android:layout_marginLeft="1dip"
            android:layout_marginTop="15dip"
            android:inputType="text"
            android:imeOptions="actionSearch"
            android:background="@drawable/SearchEntry"
            android:gravity="left" />
    </GridLayout>
  </FrameLayout>

  <Syncfusion.SfPdfViewer.Android.SfPdfViewer
        android:layout_width="match_parent"
        android:layout_height="match_parent"
        android:id="@+id/pdfviewercontrol" />
</LinearLayout>

{% endhighlight %}
{% endtabs %}

{% tabs %}
{% highlight c# %}

EditText searchView;
SfPdfViewer pdfViewer;

protected override void OnCreate(Bundle bundle)
{
    base.OnCreate(bundle);
    SetContentView(Resource.Layout.Main);
    
    //Access the controls in the design.
    pdfViewer = FindViewById<SfPdfViewer>(Resource.Id.pdfviewercontrol);
    searchView = FindViewById<EditText>(Resource.Id.search);

    searchView.FocusableInTouchMode = true;
    searchView.TextSize = 18;
    searchView.SetTextColor(Android.Graphics.Color.Rgb(103, 103, 103));
    searchView.TextAlignment = TextAlignment.Center;

    //Wire up KeyPress event with SearchView_KeyPress
    searchView.KeyPress += SearchView_KeyPress;
    //Wire up SearchCompleted event with PdfViewer_SearchCompleted
    pdfViewer.SearchCompleted += PdfViewer_SearchCompleted;

    //Access the document in the resource as stream and load it in the PDF viewer.
    Stream PdfStream = Assets.Open("GIS Succinctly.pdf");
    pdfViewer.LoadDocument(PdfStream);
}

private void SearchView_KeyPress(object sender, View.KeyEventArgs e)
{   
    //Condition passes when the search icon on the keyboard is being tapped.
    if (e.KeyCode == Keycode.Enter)
    {
        //Checks whether the entered string is empty or has only space character.
        if (!string.IsNullOrWhiteSpace(searchView.Text) && !string.IsNullOrEmpty(searchView.Text))
        {
            var searchText = searchView.Text;
            //Initiates text search.
            pdfViewer.SearchText(searchText);
        }
        InputMethodManager inputMethodManager = (InputMethodManager)mainView.Context.GetSystemService(Context.InputMethodService);
        inputMethodManager.HideSoftInputFromWindow(mainView.WindowToken, HideSoftInputFlags.None);
    }
}

private void PdfViewer_SearchCompleted(object sender, TextSearchEventArgs args)
{
    bool isNoMoreOccurrenceFound = args.NoMoreOccurrence;
}

{% endhighlight %}
{% endtabs %}

## How to cancel text search?

CancelSearch method can be used to cancel the text search progress. When the text search is in progress this method can be used to cancel the same, when text search is completed, this command can be used to clear all the highlighted texts in the PDF viewer.

{% tabs %}
{% highlight axml %}

<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:orientation="vertical"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:id="@+id/parentview">
  <FrameLayout>
        <EditText
            android:id="@+id/search"
            android:layout_width="310dp"
            android:layout_height="30dp"
            android:layout_marginLeft="1dip"
            android:layout_marginTop="15dip"
            android:inputType="text"
            android:imeOptions="actionSearch"
            android:background="@drawable/SearchEntry"
            android:gravity="left" />
        <ImageButton
            android:id="@+id/clearSearchResult"
            android:layout_width="20dp"
            android:layout_height="20dp"
            android:src="@drawable/CancelSearch"
            android:background="#E9E9E9"
            android:layout_marginTop="5dip"
            android:layout_marginRight="1dp"
            android:layout_gravity="right|center_vertical" />
      </FrameLayout>
  <Syncfusion.SfPdfViewer.Android.SfPdfViewer
        android:layout_width="match_parent"
        android:layout_height="match_parent"
        android:id="@+id/pdfviewercontrol" />
</LinearLayout>

{% endhighlight %}
{% endtabs %}

{% tabs %}
{% highlight c# %}

EditText searchView;
SfPdfViewer pdfViewer;
ImageButton clearSearchButton;

protected override void OnCreate(Bundle bundle)
{
    base.OnCreate(bundle);
    SetContentView(Resource.Layout.Main);
    
    //Access the controls in the design.
    pdfViewer = FindViewById<SfPdfViewer>(Resource.Id.pdfviewercontrol);
    searchView = FindViewById<EditText>(Resource.Id.search);
    clearSearchButton = FindViewById<ImageButton>(Resource.Id.clearSearchResult);

    searchView.FocusableInTouchMode = true;
    searchView.TextSize = 18;
    searchView.SetTextColor(Android.Graphics.Color.Rgb(103, 103, 103));
    searchView.TextAlignment = TextAlignment.Center;

    //Wire up KeyPress event with SearchView_KeyPress
    searchView.KeyPress += SearchView_KeyPress;
    //Wire up SearchCompleted event with PdfViewer_SearchCompleted
    pdfViewer.SearchCompleted += PdfViewer_SearchCompleted;
    //Wire up Click event with ClearSearchButton_Click
    clearSearchButton.Click += ClearSearchButton_Click;

    //Access the document in the resource as stream and load it in the PDF viewer.
    Stream PdfStream = Assets.Open("GIS Succinctly.pdf");
    pdfViewer.LoadDocument(PdfStream);
}

private void SearchView_KeyPress(object sender, View.KeyEventArgs e)
{   
    //Condition passes when the search icon on the keyboard is being tapped.
    if (e.KeyCode == Keycode.Enter)
    {
        //Checks whether the entered string is empty or has only space character.
        if (!string.IsNullOrWhiteSpace(searchView.Text) && !string.IsNullOrEmpty(searchView.Text))
        {
            var searchText = searchView.Text;
            //Initiates text search.
            pdfViewer.SearchText(searchText);
        }
        InputMethodManager inputMethodManager = (InputMethodManager)mainView.Context.GetSystemService(Context.InputMethodService);
        inputMethodManager.HideSoftInputFromWindow(mainView.WindowToken, HideSoftInputFlags.None);
    }
}

private void ClearSearchButton_Click (object sender, TextSearchEventArgs args)
{
    pdfViewer.CancelSearch(); 
}

{% endhighlight %}
{% endtabs %}

## How to track search progress?

Text search progress can be tracked using the TextSearchInitiated event and TextMatchFound event. 

### SearchInitiated

TextSearchInitiated event will be triggered soon after the call of the SearchText method, the event argument of this event will contain details about the text being searched.

### TextMatchFound

TextMatchFound event will be triggered once when the match of the text is found in the page of the PDF document. When text search is triggered using SearchText method this event would be triggered for every page in which the match is found, when text search is triggered using SearchNext or SearchPrevious methods, this event would be triggered for every match being found.

### SearchCompleted

TextSearchCompleted event will be triggered once when all the pages are being search for the match of the input text at-least once. The event argument would contain properties NoMatchFound and NoMoreOccurrenceFound.

When NoMatchFound is set to true, it means that the PDF viewer could not find any match for the searched text in the PDF document.

When NoMoreOccurrence is set to true, it means that the PDF viewer had completed one full cycle of search and has hit the first instance again.

## Implementing search bar with search features.

With the continuation of the getting started sample, you can extend the UI design to perform the text search in the PDF Viewer. Design the search toolbar in parallel to the main toolbar, here when the main toolbar is visible, search bar will be invisible and vice versa.

* Main toolbar – A new option to initiate text search toolbar will be added to the existing options.
* Search toolbar - A new and separate toolbar is created to search a text instance – it includes option to enter the text, perform search, cancel search and navigate back to the main toolbar.

After the adding the search toolbar, the Main.axml file will look as like the below code snippet.

{% tabs %}
{% highlight axml %}

<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:orientation="vertical"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:id="@+id/parentview">
  <FrameLayout
        android:id="@+id/parent"
        android:layout_width="match_parent"
        android:layout_height="50dp">
    <GridLayout
            android:id="@+id/toolbarGrid"
            android:background="#E9E9E9"
            android:layout_width="match_parent"
            android:columnCount="6"
            android:layout_height="50dp">
      <EditText
          android:id="@+id/pagenumberentry"
          android:layout_width="50dp"
          android:layout_height="30dp"
          android:layout_marginLeft="10dip"
          android:layout_marginTop="10dip"
          android:textAlignment="center"
          android:background="@drawable/edittextbg"
          android:textColor="@android:color/black"
          android:inputType="number"
          android:selectAllOnFocus="true"
          android:gravity="center" />
      <TextView
          android:textAlignment="center"
          android:textColor="@android:color/black"
          android:layout_marginLeft="10dip"
          android:layout_marginTop="10dip"
          android:textSize="18dp"
          android:text="/" />
      <TextView
          android:id="@+id/pagecounttext"
          android:layout_width="50dp"
          android:textAlignment="center"
          android:textColor="@android:color/black"
          android:layout_marginLeft="10dip"
          android:layout_marginTop="10dip"
          android:textSize="18dp"
          android:gravity="center"
          android:text="0" />
      <ImageButton
          android:id="@+id/pagedownbutton"
          android:background="#E9E9E9"
          android:layout_marginLeft="10dip"
          android:layout_marginTop="10dip"
          android:src="@drawable/pagedown" />
      <ImageButton
          android:id="@+id/pageupbutton"
          android:background="#E9E9E9"
          android:src="@drawable/pageup"
          android:layout_marginLeft="10dip"
          android:layout_marginTop="10dip" />
      <ImageButton
          android:id="@+id/searchButton"
          android:layout_width="30dp"
          android:layout_height="30dp"
          android:background="#E9E9E9"
          android:src="@drawable/SearchIcon"
          android:layout_marginLeft="10dip"
          android:layout_marginTop="10dip"
          android:layout_marginRight="10dip"
          android:layout_marginBottom="10dip"
          android:layout_gravity="right" />
    </GridLayout>
    <GridLayout
          android:id="@+id/searchGrid"
          android:background="#E9E9E9"
          android:layout_width="match_parent"
          android:columnCount="2"
          android:layout_height="50dp">
      <ImageButton
          android:id="@+id/backButton"
          android:layout_width="40dp"
          android:layout_height="30dp"
          android:background="#E9E9E9"
          android:src="@drawable/backIcon"
          android:layout_marginLeft="1dip"
          android:layout_marginTop="10dip" />
      <FrameLayout>
        <EditText
            android:id="@+id/search"
            android:layout_width="310dp"
            android:layout_height="30dp"
            android:layout_marginLeft="1dip"
            android:layout_marginTop="15dip"
            android:inputType="text"
            android:imeOptions="actionSearch"
            android:background="@drawable/SearchEntry"
            android:gravity="left" />
        <ImageButton
            android:id="@+id/clearSearchResult"
            android:layout_width="20dp"
            android:layout_height="20dp"
            android:src="@drawable/CancelSearch"
            android:background="#E9E9E9"
            android:layout_marginTop="5dip"
            android:layout_marginRight="1dp"
            android:layout_gravity="right|center_vertical" />
      </FrameLayout>
    </GridLayout>
  </FrameLayout>

  <Syncfusion.SfPdfViewer.Android.SfPdfViewer
        android:layout_width="match_parent"
        android:layout_height="match_parent"
        android:id="@+id/pdfviewercontrol" />
</LinearLayout>

{% endhighlight %}
{% endtabs %}

The code behind MainActivity.cs will be

{% tabs %}
{% highlight c# %}

using Android.App;
using Android.Widget;
using Android.OS;
using Syncfusion.SfPdfViewer.Android;
using System.IO;
using Android.Views;
using Android.Views.InputMethods;
using Android.Content;

namespace GettingStartedDroid
{
    [Activity(Label = "GettingStartedDroid", MainLauncher = true, Icon = "@drawable/icon")]
    public class MainActivity : Activity
    {
        SfPdfViewer pdfViewer;
        EditText pageNumberEntry;
        TextView pageCountText;
        ImageButton pageDownButton;
        ImageButton pageUpButton;
        LinearLayout mainView;
        GridLayout toolBarGrid;
        GridLayout searchBarGrid;
        EditText searchView;
        ImageButton searchButton;
        ImageButton backButton;
        ImageButton clearSearchButton;
        string searchText = string.Empty;

        protected override void OnCreate(Bundle bundle)
        {
            base.OnCreate(bundle);
            SetContentView(Resource.Layout.Main);

            //Access the controls in the design.
            pdfViewer = FindViewById<SfPdfViewer>(Resource.Id.pdfviewercontrol);
            pageNumberEntry = FindViewById<EditText>(Resource.Id.pagenumberentry);
            pageCountText = FindViewById<TextView>(Resource.Id.pagecounttext);
            pageDownButton = FindViewById<ImageButton>(Resource.Id.pagedownbutton);
            pageUpButton = FindViewById<ImageButton>(Resource.Id.pageupbutton);
            mainView = FindViewById<LinearLayout>(Resource.Id.parentview);
            toolBarGrid = FindViewById<GridLayout>(Resource.Id.toolbarGrid);
            searchBarGrid = FindViewById<GridLayout>(Resource.Id.searchGrid);
            searchButton = FindViewById<ImageButton>(Resource.Id.searchButton);
            searchView = FindViewById<EditText>(Resource.Id.search);
            backButton = FindViewById<ImageButton>(Resource.Id.backButton);
            clearSearchButton = FindViewById<ImageButton>(Resource.Id.clearSearchResult);

            //Wire up events.
            pageNumberEntry.KeyPress += PageNumberEntry_KeyPress;
            pageDownButton.Click += PageDownButton_Click;
            pageUpButton.Click += PageUpButton_Click;
            pdfViewer.DocumentLoaded += PdfViewer_DocumentLoaded;
            searchButton.Click += SearchButton_Click;
            backButton.Click += BackButton_Click;
            clearSearchButton.Click += ClearSearchButton_Click;

            searchView.SetHintTextColor(Android.Graphics.Color.Rgb(189, 189, 189));
            searchView.Hint = "Search text";
            searchView.FocusableInTouchMode = true;
            searchView.TextSize = 18;
            searchView.SetTextColor(Android.Graphics.Color.Rgb(103, 103, 103));
            searchView.TextAlignment = TextAlignment.Center;
            searchView.KeyPress += SearchView_KeyPress;
            searchView.TextChanged += SearchView_TextChanged;

            searchBarGrid.Visibility = ViewStates.Invisible;

            //Access the document in the resource as stream and load it in the PDF viewer.
            Stream PdfStream = Assets.Open("GIS Succinctly.pdf");
            pdfViewer.LoadDocument(PdfStream);
        }

        private void SearchView_TextChanged(object sender, Android.Text.TextChangedEventArgs e)
        {
            if (searchView.Text != string.Empty)
            {
                clearSearchButton.Visibility = ViewStates.Visible;
            }
            else
            {
                clearSearchButton.Visibility = ViewStates.Invisible;
            }
        }

        private void SearchView_KeyPress(object sender, View.KeyEventArgs e)
        {
            var editText = sender as EditText;
            if (e.KeyCode == Keycode.Enter)
            {
                if (!string.IsNullOrWhiteSpace(editText.Text) && !string.IsNullOrEmpty(editText.Text))
                {
                    searchText = editText.Text;
                    pdfViewer.SearchText(searchText);
                }
                InputMethodManager inputMethodManager = (InputMethodManager)mainView.Context.GetSystemService(Context.InputMethodService);
                inputMethodManager.HideSoftInputFromWindow(mainView.WindowToken, HideSoftInputFlags.None);
            }
        }

        private void ClearSearchButton_Click(object sender, System.EventArgs e)
        {
            pdfViewer.CancelSearch();
            searchView.Text = "";
            clearSearchButton.Visibility = ViewStates.Invisible;
            InputMethodManager inputMethodManager = (InputMethodManager)mainView.Context.GetSystemService(Context.InputMethodService);
            inputMethodManager.ShowSoftInput(searchView, ShowFlags.Implicit);
        }

        private void BackButton_Click(object sender, System.EventArgs e)
        {
            if (searchBarGrid.Visibility == ViewStates.Visible)
            {
                searchBarGrid.Visibility = ViewStates.Invisible;
                toolBarGrid.Visibility = ViewStates.Visible;
                pdfViewer.CancelSearch();
                searchView.Text = "";
                clearSearchButton.Visibility = ViewStates.Invisible;
                InputMethodManager inputMethodManager = (InputMethodManager)mainView.Context.GetSystemService(Context.InputMethodService);
                inputMethodManager.HideSoftInputFromWindow(mainView.WindowToken, HideSoftInputFlags.None);
            }
        }

        private void SearchButton_Click(object sender, System.EventArgs e)
        {
            if (toolBarGrid.Visibility == ViewStates.Visible)
            {
                toolBarGrid.Visibility = ViewStates.Invisible;
                searchBarGrid.Visibility = ViewStates.Visible;
                searchView.RequestFocus();
                clearSearchButton.Visibility = ViewStates.Invisible;
                InputMethodManager inputMethodManager = (InputMethodManager)mainView.Context.GetSystemService(Context.InputMethodService);
                inputMethodManager.ShowSoftInput(searchView, ShowFlags.Implicit);
            }
        }

        private void PdfViewer_DocumentLoaded(object sender, System.EventArgs args)
        {
            pageNumberEntry.Text = pdfViewer.PageNumber.ToString();
            pageCountText.Text = pdfViewer.PageCount.ToString();
        }

        private void PageUpButton_Click(object sender, System.EventArgs e)
        {
            pdfViewer.GoToPreviousPage();
        }

        private void PageDownButton_Click(object sender, System.EventArgs e)
        {
            pdfViewer.GoToNextPage();
        }

        private void PageNumberEntry_KeyPress(object sender, Android.Views.View.KeyEventArgs e)
        {
            e.Handled = false;
            if (e.Event.Action == KeyEventActions.Down && e.KeyCode == Keycode.Enter)
            {
                int pageNumber = 0;
                if (int.TryParse((pageNumberEntry.Text), out pageNumber))
                {
                    if ((pageNumber > 0) && (pageNumber <= pdfViewer.PageCount))
                        pdfViewer.GoToPage(pageNumber);
                    else
                    {
                        DisplayAlertDialog();
                        pageNumberEntry.Text = pdfViewer.PageNumber.ToString();
                    }
                }
                pageNumberEntry.ClearFocus();
                InputMethodManager inputMethodManager = (InputMethodManager)mainView.Context.GetSystemService(Context.InputMethodService);
                inputMethodManager.HideSoftInputFromWindow(mainView.WindowToken, HideSoftInputFlags.None);
            }
        }

        void DisplayAlertDialog()
        {
            AlertDialog.Builder alertDialog = new AlertDialog.Builder(mainView.Context);
            alertDialog.SetTitle("Error");
            alertDialog.SetMessage("Please enter the valid page number");
            alertDialog.SetPositiveButton("OK", (senderAlert, args) => { });
            Dialog dialog = alertDialog.Create();
            dialog.Show();
        }
    }
}

{% endhighlight %}
{% endtabs %}

## Customizing search highlight color

The colors in which the current instance and other instances are highlighted can be customized. The TextSearchSettings class in the PDF viewer instance can be used for this purpose.

{% tabs %}
{% highlight c# %}

pdfViewer.TextSearchSettings.OtherInstanceColor = Color.Argb(255, 0, 0, 200);
pdfViewer.TextSearchSettings.CurrentInstanceColor = Color.Argb(0, 0, 255, 200);

{% endhighlight %}
{% endtabs %}