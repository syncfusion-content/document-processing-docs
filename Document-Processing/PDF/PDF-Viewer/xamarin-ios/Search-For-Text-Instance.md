---
layout: post
title:  Search text in PDF using PDF viewer Xamarin.iOS | Syncfusion
description: Search text support allows the user to locate and highlight text instances in the PDF document using PDF Viewer Xamarin.iOS
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
{% highlight c# %}

		SfPdfViewer pdfViewerControl;
        UITextField searchTextField;

		public override void ViewDidLoad()
        {
            base.ViewDidLoad();

            pdfViewerControl = new SfPdfViewer();
            pdfViewerControl.Frame = new CGRect(this.View.Frame.X, 60, this.View.Frame.Width, this.View.Frame.Height - 20);
            searchTextField = new UITextField();
            searchTextField.Frame = new CGRect(150, 10, 300, 40);
            searchTextField.BorderStyle = UITextBorderStyle.Line;
            searchTextField.ShouldReturn += (textField) =>
            {
                pdfViewerControl.SearchText(searchTextField.Text);
                return true;
            };
                this.View.AddSubview(searchTextField);
            this.View.AddSubview(pdfViewerControl);

        }

        public override void ViewDidAppear(bool animated)
        {
            base.ViewDidAppear(animated);
            var fileStream = typeof(MainViewController).GetTypeInfo().Assembly.GetManifestResourceStream("GettingStartediOS.Assets.GIS Succinctly.pdf");
            pdfViewerControl.LoadDocument(fileStream);
        }

{% endhighlight %}
{% endtabs %}


## How to identify if there is no match of the text being searched?

SearchCompleted event in the PDF viewer can be used to track the completion of the text search operation, NoMatchFound property of TextSearchEventArgs (event argument of this event) can be used to find if no match of text is being found.

{% tabs %}
{% highlight c# %}

		SfPdfViewer pdfViewerControl;
        UITextField searchTextField;
       
        public MainViewController() : base("MainViewController", null)
        {
        }

        public override void DidReceiveMemoryWarning()
        {
            base.DidReceiveMemoryWarning();

            // Release any cached data, images, etc that aren't in use.
        }

        public override void ViewDidLoad()
        {
            base.ViewDidLoad();

            pdfViewerControl = new SfPdfViewer();
            pdfViewerControl.Frame = new CGRect(this.View.Frame.X, 60, this.View.Frame.Width, this.View.Frame.Height - 20);
            pdfViewerControl.SearchCompleted += PdfViewerControl_SearchCompleted;
            searchTextField = new UITextField();
            searchTextField.Frame = new CGRect(150, 10, 300, 40);
            searchTextField.BorderStyle = UITextBorderStyle.Line;
            searchTextField.ShouldReturn += (textField) =>
            {
                pdfViewerControl.SearchText(searchTextField.Text);
                return true;
            };
                this.View.AddSubview(searchTextField);
            this.View.AddSubview(pdfViewerControl);

        }

        private void PdfViewerControl_SearchCompleted(object sender, TextSearchEventArgs args)
        {
            bool isMatchFound = args.NoMatchFound;
        }

        public override void ViewDidAppear(bool animated)
        {
            base.ViewDidAppear(animated);
            var fileStream = typeof(MainViewController).GetTypeInfo().Assembly.GetManifestResourceStream("GettingStartediOS.Assets.GIS Succinctly.pdf");
            pdfViewerControl.LoadDocument(fileStream);
        }

{% endhighlight %}
{% endtabs %}

## How to navigate to the next match of the text?

SearchNext method of PDF viewer can be used to navigate to the successive match of the text in the PDF document. 

{% tabs %}
{% highlight c# %}

		SfPdfViewer pdfViewerControl;
        UITextField searchTextField;
        UIButton searchNextButton;

		public override void ViewDidLoad()
        {
            base.ViewDidLoad();

            pdfViewerControl = new SfPdfViewer();
            pdfViewerControl.Frame = new CGRect(this.View.Frame.X, 60, this.View.Frame.Width, this.View.Frame.Height - 20);
            searchNextButton = new UIButton();
            searchNextButton.Frame = new CGRect(500, 5, 150, 50);
            searchNextButton.SetTitle("SearchNext", UIControlState.Normal);
            searchNextButton.TouchUpInside += SearchNextButton_TouchUpInside;
            searchNextButton.SetTitleColor(UIColor.Black, UIControlState.Normal);
            searchNextButton.BackgroundColor = UIColor.LightGray;
            this.View.AddSubview(searchNextButton);
            searchTextField = new UITextField();
            searchTextField.Frame = new CGRect(150, 10, 300, 40);
            searchTextField.BorderStyle = UITextBorderStyle.Line;
            searchTextField.ShouldReturn += (textField) =>
            {
                pdfViewerControl.SearchText(searchTextField.Text);
                return true;
            };
            this.View.AddSubview(searchTextField);
            this.View.AddSubview(pdfViewerControl);

        }

        private void SearchNextButton_TouchUpInside(object sender, EventArgs e)
        {
            pdfViewerControl.SearchNext(searchTextField.Text);
        }

        public override void ViewDidAppear(bool animated)
        {
            base.ViewDidAppear(animated);
            var fileStream = typeof(MainViewController).GetTypeInfo().Assembly.GetManifestResourceStream("GettingStartediOS.Assets.GIS Succinctly.pdf");
            pdfViewerControl.LoadDocument(fileStream);
        }

{% endhighlight %}
{% endtabs %}

## How to navigate to the previous match of the text?

SearchPrevious method of PDF viewer can be used to navigate to the previous match of the text in the PDF document. 

{% tabs %}
{% highlight c# %}

SfPdfViewer pdfViewerControl;
        UITextField searchTextField;
        UIButton searchPreviousButton;

public override void ViewDidLoad()
        {
            base.ViewDidLoad();

            pdfViewerControl = new SfPdfViewer();
            pdfViewerControl.Frame = new CGRect(this.View.Frame.X, 60, this.View.Frame.Width, this.View.Frame.Height - 20);
            searchPreviousButton = new UIButton();
            searchPreviousButton.Frame = new CGRect(500, 5, 150, 50);
            searchPreviousButton.SetTitle("SearchNext", UIControlState.Normal);
            searchPreviousButton.TouchUpInside += SearchPreviousButton_TouchUpInside;
            searchPreviousButton.SetTitleColor(UIColor.Black, UIControlState.Normal);
            searchPreviousButton.BackgroundColor = UIColor.LightGray;
            this.View.AddSubview(searchPreviousButton);
            searchTextField = new UITextField();
            searchTextField.Frame = new CGRect(150, 10, 300, 40);
            searchTextField.BorderStyle = UITextBorderStyle.Line;
            searchTextField.ShouldReturn += (textField) =>
            {
                pdfViewerControl.SearchText(searchTextField.Text);
                return true;
            };
            this.View.AddSubview(searchTextField);
            this.View.AddSubview(pdfViewerControl);

        }

        private void SearchPreviousButton_TouchUpInside(object sender, EventArgs e)
        {
            pdfViewerControl.SearchNext(searchTextField.Text);
        }

        public override void ViewDidAppear(bool animated)
        {
            base.ViewDidAppear(animated);
            var fileStream = typeof(MainViewController).GetTypeInfo().Assembly.GetManifestResourceStream("GettingStartediOS.Assets.GIS Succinctly.pdf");
            pdfViewerControl.LoadDocument(fileStream);
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
{% highlight c# %}

		SfPdfViewer pdfViewerControl;
        UITextField searchTextField;

		public override void ViewDidLoad()
        {
            base.ViewDidLoad();

            pdfViewerControl = new SfPdfViewer();
            pdfViewerControl.Frame = new CGRect(this.View.Frame.X, 60, this.View.Frame.Width, this.View.Frame.Height - 20);
            pdfViewerControl.SearchCompleted += PdfViewerControl_SearchCompleted;
            searchTextField = new UITextField();
            searchTextField.Frame = new CGRect(150, 10, 300, 40);
            searchTextField.BorderStyle = UITextBorderStyle.Line;
            searchTextField.ShouldReturn += (textField) =>
            {
                pdfViewerControl.SearchText(searchTextField.Text);
                return true;
            };
            this.View.AddSubview(searchTextField);
            this.View.AddSubview(pdfViewerControl);

        }

        private void PdfViewerControl_SearchCompleted(object sender, TextSearchEventArgs args)
        {
            bool isNoMoreOccurrenceFound = args.NoMoreOccurrence;
        }

        public override void ViewDidAppear(bool animated)
        {
            base.ViewDidAppear(animated);
            var fileStream = typeof(MainViewController).GetTypeInfo().Assembly.GetManifestResourceStream("GettingStartediOS.Assets.GIS Succinctly.pdf");
            pdfViewerControl.LoadDocument(fileStream);
        }

{% endhighlight %}
{% endtabs %}

## How to cancel text search?

CancelSearch method of the PDF viewer can be used to cancel the text search progress. When the text search is in progress this method can be used to cancel the same, when text search is completed, this method can be used to clear all the highlighted texts in the PDF viewer.

{% tabs %}
{% highlight c# %}

		SfPdfViewer pdfViewerControl;
        UITextField searchTextField;
        UIButton cancelSearchButton;

		public override void ViewDidLoad()
        {
            base.ViewDidLoad();

            pdfViewerControl = new SfPdfViewer();
            pdfViewerControl.Frame = new CGRect(this.View.Frame.X, 60, this.View.Frame.Width, this.View.Frame.Height - 20);
            cancelSearchButton = new UIButton();
            cancelSearchButton.Frame = new CGRect(500, 5, 150, 50);
            cancelSearchButton.SetTitle("Cancel", UIControlState.Normal);
            cancelSearchButton.TouchUpInside += cancelSearchButton_TouchUpInside;
            cancelSearchButton.SetTitleColor(UIColor.Black, UIControlState.Normal);
            cancelSearchButton.BackgroundColor = UIColor.LightGray;
            this.View.AddSubview(cancelSearchButton);
            searchTextField = new UITextField();
            searchTextField.Frame = new CGRect(150, 10, 300, 40);
            searchTextField.BorderStyle = UITextBorderStyle.Line;
            searchTextField.ShouldReturn += (textField) =>
            {
                pdfViewerControl.SearchText(searchTextField.Text);
                return true;
            };
            this.View.AddSubview(searchTextField);
            this.View.AddSubview(pdfViewerControl);

        }

        private void cancelSearchButton_TouchUpInside(object sender, EventArgs e)
        {
            pdfViewerControl.CancelSearch();
        }

        public override void ViewDidAppear(bool animated)
        {
            base.ViewDidAppear(animated);
            var fileStream = typeof(MainViewController).GetTypeInfo().Assembly.GetManifestResourceStream("GettingStartediOS.Assets.GIS Succinctly.pdf");
            pdfViewerControl.LoadDocument(fileStream);
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
	
After the adding the search toolbar, the MainViewController.cs file will look as like the below code snippet.

{% tabs %}
{% highlight c# %}

		SfPdfViewer pdfViewerControl;
        private const float DefaultToolbarHeight = 50f;

        private UIView parentView;
        private UIView toolbar;
        UITextField pageNumberField = new UITextField();
        UILabel totalPageLabel = new UILabel();
        UIButton previousPageButton = new UIButton();
        UIButton nextPageButton = new UIButton();
        UIToolbar toolBar = new UIToolbar();
        UISearchBar searchBar = new UISearchBar();
        UIButton searchButton = new UIButton();
        UIButton backButton = new UIButton();
        UIToolbar searchToolBar = new UIToolbar();
        CGRect toolBarFrame = new CGRect();

		public override void ViewDidLoad()
        {
            base.ViewDidLoad();
            parentView = new UIView(this.View.Frame);

            pdfViewerControl = new SfPdfViewer();
            pdfViewerControl.PageChanged += PdfViewerControl_PageChanged;
            pageNumberField.Text = "1";
            toolbar = createTopToolbar();
            parentView.AddSubview(pdfViewerControl);
            this.View.AddSubview(parentView);
            this.View.AddSubview(toolbar);

        }

        protected virtual UIView createTopToolbar()
        {
            var toolBarFrame = new CGRect();
            toolBarFrame = this.View.Frame;
            toolBarFrame.Height = DefaultToolbarHeight;
            toolBarFrame.Y = 20;
            toolBar.Frame = toolBarFrame;

            toolBar.AutoresizingMask = UIViewAutoresizing.FlexibleBottomMargin | UIViewAutoresizing.FlexibleWidth;

            pageNumberField.ShouldReturn += (textField) =>
            {
                textField.ResignFirstResponder();
                int input = 0;
                if (int.TryParse(pageNumberField.Text, out input) && input > 0 && (input <= pdfViewerControl.PageCount))
                {
                    pdfViewerControl.GoToPage(input);
                }
                pageNumberField.Text = pdfViewerControl.PageNumber.ToString();
                return true;
            };

            pageNumberField.BorderStyle = UITextBorderStyle.RoundedRect;
            pageNumberField.Frame = new CGRect(65, 5, 45, 40);
            pageNumberField.HorizontalAlignment = UIControlContentHorizontalAlignment.Center;
            pageNumberField.TextAlignment = UITextAlignment.Center;
            toolBar.Add(pageNumberField);


            totalPageLabel.Frame = new CGRect(120, 5, 40, 40);
            toolBar.Add(totalPageLabel);

            nextPageButton.HorizontalAlignment = UIControlContentHorizontalAlignment.Center;
            nextPageButton.Frame = new CGRect(175, 5, 40, 40);
            nextPageButton.HorizontalAlignment = UIControlContentHorizontalAlignment.Center;
            nextPageButton.TouchUpInside += NextPageButton_TouchUpInside1;
            nextPageButton.SetBackgroundImage(UIImage.FromFile("PageDown.png"), UIControlState.Normal);
            toolBar.Add(nextPageButton);

            previousPageButton.Frame = new CGRect(230, 5, 40, 40);
            previousPageButton.HorizontalAlignment = UIControlContentHorizontalAlignment.Center;
            previousPageButton.TouchUpInside += PreviousPageButton_TouchUpInside1; ;
            previousPageButton.SetBackgroundImage(UIImage.FromFile("PageUp.png"), UIControlState.Normal);
            toolBar.Add(previousPageButton);

            searchButton.Frame = new CGRect(parentView.Frame.Width - 50, 5, 40, 40);
            searchButton.HorizontalAlignment = UIControlContentHorizontalAlignment.Center;
            searchButton.TouchUpInside += SearchButtonClicked;
            searchButton.SetBackgroundImage(UIImage.FromFile("Search.png"), UIControlState.Normal);
            toolBar.Add(searchButton);
            return toolBar;
        }

        void SearchButtonClicked(object sender, EventArgs ea)
        {
            toolbar.RemoveFromSuperview();
            backButton.Enabled = true;
            CreateSearchTopToolbar();
            toolbar = searchToolBar;
            searchBar.BecomeFirstResponder();
            View.AddSubview(toolbar);
        }

        protected virtual UIView CreateSearchTopToolbar()
        {
            toolBarFrame = View.Frame;
            toolBarFrame.Height = DefaultToolbarHeight;
            toolBarFrame.Y = 20;
            searchToolBar.Frame = toolBarFrame;

            searchToolBar.AutoresizingMask = UIViewAutoresizing.FlexibleBottomMargin | UIViewAutoresizing.FlexibleWidth;

            if ((UIDevice.CurrentDevice).UserInterfaceIdiom == UIUserInterfaceIdiom.Pad)
                backButton.Frame = new CGRect(20, 2, 50, 50);
            else
                backButton.Frame = new CGRect(2, 5, 40, 40);

            backButton.HorizontalAlignment = UIControlContentHorizontalAlignment.Center;
            backButton.TouchUpInside += BackButtonClicked;
            backButton.SetBackgroundImage(UIImage.FromFile("Back.png"), UIControlState.Normal);

            searchToolBar.Add(backButton);
            if ((UIDevice.CurrentDevice).UserInterfaceIdiom == UIUserInterfaceIdiom.Pad)
                searchBar.Frame = new CGRect(95, 5, 270, 40);
            else
                searchBar.Frame = new CGRect(40, 5, 140, 40);

            searchBar.Placeholder = "Enter text to search";
            searchBar.TextChanged += SearchBar_TextChanged;
            searchBar.SearchButtonClicked += SearchBar_SearchButtonClicked;
            searchToolBar.Add(searchBar);


            return searchToolBar;
        }

        private void SearchBar_TextChanged(object sender, UISearchBarTextChangedEventArgs e)
        {
            if ((sender as UISearchBar).Text == string.Empty)
            {
                pdfViewerControl.CancelSearch();
            }
        }

        private void SearchCancelClicked(object sender, EventArgs e)
        {
            pdfViewerControl.CancelSearch();
            searchBar.Text = String.Empty;
        }

        private void SearchBar_SearchButtonClicked(object sender, EventArgs e)
        {
            searchBar.ResignFirstResponder();
            pdfViewerControl.SearchText(searchBar.Text);
        }
        void BackButtonClicked(object sender, EventArgs ea)
        {
            pdfViewerControl.CancelSearch();
            searchBar.Text = String.Empty;
            UpdateToolBarValues();
            searchToolBar.RemoveFromSuperview();
            toolBar.RemoveFromSuperview();
            toolbar = toolBar;
            View.AddSubview(toolbar);
        }

        public void UpdateToolBarValues()
        {
            pageNumberField.Text = pdfViewerControl.PageNumber.ToString();

        }
        private void PreviousPageButton_TouchUpInside1(object sender, EventArgs e)
        {
            pdfViewerControl.GoToPreviousPage();
        }

        private void NextPageButton_TouchUpInside1(object sender, EventArgs e)
        {
            pdfViewerControl.GoToNextPage();
        }

        private void PdfViewerControl_PageChanged(object sender, PageChangedEventArgs args)
        {
            pageNumberField.Text = pdfViewerControl.PageNumber.ToString();
        }
        private void NextPageButton_TouchUpInside(object sender, EventArgs e)
        {
            pdfViewerControl.GoToNextPage();
        }

        private void PreviousPageButton_TouchUpInside(object sender, EventArgs e)
        {
            pdfViewerControl.GoToPreviousPage();
        }

        public override void ViewDidAppear(bool animated)
        {
            base.ViewDidAppear(animated);
            var fileStream = typeof(MainViewController).GetTypeInfo().Assembly.GetManifestResourceStream("GettingStartediOS.Assets.GIS Succinctly.pdf");
            pdfViewerControl.LoadDocument(fileStream);
            totalPageLabel.Text = "/ " + pdfViewerControl.PageCount.ToString();
        }

        public override void ViewDidLayoutSubviews()
        {
            base.ViewDidLayoutSubviews();
            parentView.Frame = new CGRect(this.View.Frame.X, DefaultToolbarHeight + 20, this.View.Frame.Width, this.View.Frame.Height - DefaultToolbarHeight - 20);
        }

{% endhighlight %}
{% endtabs %}

## Customizing search highlight color

The colors in which the current instance and other instances are highlighted can be customized. The TextSearchSettings class in the PDF viewer instance can be used for this purpose.

{% tabs %}
{% highlight c# %}

pdfViewerControl.TextSearchSettings.CurrentInstanceColor = UIColor.Blue;
pdfViewerControl.TextSearchSettings.OtherInstanceColor = UIColor.Green;

{% endhighlight %}
{% endtabs %}