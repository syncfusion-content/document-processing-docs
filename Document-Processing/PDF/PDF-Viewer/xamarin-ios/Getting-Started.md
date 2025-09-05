---
layout: post
title:  View & review PDF using PDF Viewer Xamarin.iOS | Syncfusion
description: Getting started section demonstrates how to create an application that displays a PDF file using Xamarin.iOS PDF Viewer
platform: document-processing
control: SfPdfViewer
documentation: ug
---

# Getting started about PDF viewer

This section demonstrates how to create an application that displays a PDF file using SfPdfViewer control.

## Assembly Required

After installing Essential Studio<sup>®</sup> for Xamarin, you can find all the required assemblies in the installation folders,

{Syncfusion Essential Studio Installed location}\Essential Studio\{Essential Studio version}\Xamarin\lib\ios-unified\

Example: C:\Program Files (x86)\Syncfusion\Essential Studio\15.3.0.28\Xamarin\lib\ios-unified\

For creating a PDF Viewer for iOS, the following assemblies need to be referenced in your iOS project.

<table>
<tr>
<th>Project</th>
<th>Required assemblies</th>
</tr>
<tr>
<td>Xamarin.iOS</td>
<td>Syncfusion.Compression.Portable.dll<br/>Syncfusion.Pdf.Portable.dll<br/>Syncfusion.SfPdfViewer.iOS.dll<br/>Syncfusion.SfBusyIndicator.iOS.dll<br/>Syncfusion.SfRangeSlider.iOS.dll<br/>Syncfusion.SfProgressBar.iOS.dll<br/>Syncfusion.SfComboBox.iOS.dll<br/></td>
</tr>
</table>

N> Starting with v16.2.0.x, if you reference Syncfusion assemblies from trial setup or from the NuGet feed, you also have to include a license key in your projects. Please refer to [this link](https://help.syncfusion.com/common/essential-studio/licensing/license-key) to know about registering Syncfusion license key in your Xamarin.iOS application to use our components.

## Create a simple PDF Viewer

Create a blank iOS application in Xamarin Studio and name it as "GettingStartediOS". Add references to the above-mentioned assemblies in the project. 

Add a new folder named “Assets” to the project. Place the PDF document you need to display in the folder and set the PDF’s build action property to "Embedded Resource". Here GIS Succinctly.pdf file is used. 

Add a new ViewController to the project with the name “MainViewController”. In the FinishedLaunching method of AppDelegate.cs file, set the RootViewController property of the UIWindow to the added ViewController using the following code snippet. 

{% tabs %}
{% highlight c# %}

Window.RootViewController = new MainViewController();

{% endhighlight %}
{% endtabs %}

Please add the following code snippet In the MainViewController class

* In the MainViewController.cs file instantiate the SfPdfViewer in the override method ViewDidLoad
* Add the instance to the MainViewController’s View as a SubView. 
* Load the stream of the PDF to SfPdfViewer in the override method ViewDidAppear. 

{% tabs %}
{% highlight c# %}

SfPdfViewer pdfViewerControl;

    public override void ViewDidLoad()
    {
        base.ViewDidLoad();
        pdfViewerControl = new SfPdfViewer();
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

Deploying this project in an iOS device would display the PDF document and allow you to scroll and zoom through the pages.

## Loading a PDF from an URL

PDF documents can be loaded from a given URL into the PdfViewer by downloading the PDF and then loading the stream of the downloaded file into the PdfViewer. In the following code sample, the `HttpClient.GetAsync( )` method sends a GET request to the specified Uri as an asynchronous operation and the `HttpContent.ReadAsStreamAsync( )` method will serialize the HTTP content and returns a stream that represents the content as an asynchronous operation. Finally, the obtained stream is passed to the `LoadDocument( )` method of SfPdfViewer.

{% tabs %}
{% highlight c# %}

HttpClient httpClient = new HttpClient();
HttpResponseMessage response = await httpClient.GetAsync("https://www.syncfusion.com/downloads/support/directtrac/general/pd/GIS_Succinctly1774404643.pdf");
Stream pdfStream = await response.Content.ReadAsStreamAsync();
pdfViewerControl.LoadDocument(pdfStream);

{% endhighlight %}
{% endtabs %}

The sample that illustrates loading a PDF from an URL can be downloaded from the link below,
 
<https://www.syncfusion.com/downloads/support/directtrac/general/ze/LoadPDFFromURL-NativeIOS1584020980.zip> 

N> An Internet connection is necessary to get the stream from an URL. Please ensure that the device has a proper internet connection before running the sample application.

## Unloading PDF document from the Viewer

The SfPdfViewer control allows you to unload the PDF document from the viewer, when the PDF document is not in use anymore. This releases the PDF document and all its associated resources of the application.

You need to call the Unload method of SfPdfViewer control as in the below code snippet to achieve the same.

{% tabs %}
{% highlight c# %}

pdfViewerControl.Unload();

{% endhighlight %}
{% endtabs %}

## How to get & set the current page number?

PageChanged event of the PDF viewer can be used to track the change in the current page being displayed in the PDF viewer. 

This below code snippet demonstrates how to track the current page number being viewed using PageChanged event and how to navigate to the respective page in the PDF Viewer.

{% tabs %}
{% highlight c# %}

SfPdfViewer pdfViewerControl;
UITextField pageNumberField;

        public override void ViewDidLoad()
        {
            base.ViewDidLoad();
            pageNumberField = new UITextField();
            pageNumberField.Text = "1";
            pageNumberField.BorderStyle = UITextBorderStyle.Line;
            pageNumberField.Frame = new CGRect(0, 20, 100, 50);
            pageNumberField.TextAlignment = UITextAlignment.Center;
            pageNumberField.ShouldReturn += (textField) =>
            {
                int input = 0;
                if (int.TryParse(pageNumberField.Text, out input) && input > 0 && (input <= pdfViewerControl.PageCount))
                {
                    pdfViewerControl.GoToPage(input);
                    pageNumberField.Text = pdfViewerControl.PageNumber.ToString();
                }
                return true;
            };
                this.View.AddSubview(pageNumberField);
            pdfViewerControl = new SfPdfViewer();
            pdfViewerControl.Frame = new CGRect(this.View.Frame.X, 70, this.View.Frame.Width, this.View.Frame.Height - 30);
            pdfViewerControl.PageChanged += PdfViewerControl_PageChanged;
            this.View.AddSubview(pdfViewerControl);
        }

        private void PdfViewerControl_PageChanged(object sender, PageChangedEventArgs args)
        {
            pageNumberField.Text = args.PageNumber.ToString();
        }

        public override void ViewDidAppear(bool animated)
        {
            base.ViewDidAppear(animated);
            var fileStream = typeof(MainViewController).GetTypeInfo().Assembly.GetManifestResourceStream("GettingStartediOS.Assets.GIS Succinctly.pdf");
            pdfViewerControl.LoadDocument(fileStream);
        }

{% endhighlight %}
{% endtabs %}

N>When a page number which is not in the bounds (1 – page count) is provided as an input to the GoToPage method, no action will be performed. 

## How to get & set the current page number?

PageChanged event of the PDF viewer can be used to track the change in the current page being displayed in the PDF viewer. 

This below code snippet demonstrates how to track the current page number being viewed using PageChanged event and how to navigate to the respective page in the PDF Viewer.

{% tabs %}
{% highlight c# %}

SfPdfViewer pdfViewerControl;
UITextField pageNumberField;

public override void ViewDidLoad()
        {
            base.ViewDidLoad();
            pageNumberField = new UITextField();
            pageNumberField.Text = "1";
            pageNumberField.BorderStyle = UITextBorderStyle.Line;
            pageNumberField.Frame = new CGRect(0, 20, 100, 50);
            pageNumberField.TextAlignment = UITextAlignment.Center;
            pageNumberField.ShouldReturn += (textField) =>
            {
                int input = 0;
                if (int.TryParse(pageNumberField.Text, out input) && input > 0 && (input <= pdfViewerControl.PageCount))
                {
                    pdfViewerControl.GoToPage(input);
                    pageNumberField.Text = pdfViewerControl.PageNumber.ToString();
                }
                return true;
            };
                this.View.AddSubview(pageNumberField);
            pdfViewerControl = new SfPdfViewer();
            pdfViewerControl.Frame = new CGRect(this.View.Frame.X, 70, this.View.Frame.Width, this.View.Frame.Height - 30);
            pdfViewerControl.PageChanged += PdfViewerControl_PageChanged;
            this.View.AddSubview(pdfViewerControl);
        }

        private void PdfViewerControl_PageChanged(object sender, PageChangedEventArgs args)
        {
            pageNumberField.Text = args.PageNumber.ToString();
        }

        public override void ViewDidAppear(bool animated)
        {
            base.ViewDidAppear(animated);
            var fileStream = typeof(MainViewController).GetTypeInfo().Assembly.GetManifestResourceStream("GettingStartediOS.Assets.GIS Succinctly.pdf");
            pdfViewerControl.LoadDocument(fileStream);
        }

{% endhighlight %}
{% endtabs %}

N>When a page number which is not in the bounds (1 – page count) is provided as an input to the GoToPage method, no action will be performed. 

## How to dispose the managed resources of SfPdfViewer

The [`SfPdfViewer`](https://help.syncfusion.com/cr/xamarin-ios/Syncfusion.SfPdfViewer.iOS.SfPdfViewer.html) control allows you to dispose the managed resources which are associated with the viewer. You need to call the `Dispose` method of the [`SfPdfViewer`](https://help.syncfusion.com/cr/xamarin/Syncfusion.SfPdfViewer.XForms.SfPdfViewer.html) control as shown in the following code sample to achieve the same.

{% tabs %}
{% highlight c# %}

//Disposes all the managed resources of SfPdfViewer
pdfViewer.Dispose();

{% endhighlight %}
{% endtabs %}

## How to clear the undo and redo stack

The [`SfPdfViewer`](https://help.syncfusion.com/cr/xamarin-ios/Syncfusion.SfPdfViewer.iOS.SfPdfViewer.html) control allows you to clear the undo and redo stacks that contain the changes that are made to the annotations in the PDF document, by calling the `ClearUndoRedoStack` API. When this method is called, the `CanUndo` and `CanRedo` properties will be set to `false`.

{% tabs %}
{% highlight c# %}

//To clear the undo and redo stack 
pdfViewer.ClearUndoRedoStack();

{% endhighlight %}
{% endtabs %}

## How to get the total page number?

PageCount property of the PDF viewer can be used to acquire the total number of pages in the PDF document that is currently loaded. The PageCount property of the PDF viewer will be updated only after loading the PDF document, it can be tracked using DocumentLoaded event of the PDF viewer.

{% tabs %}
{% highlight c# %}

		SfPdfViewer pdfViewerControl;
		UILabel pageCountLabel;

		public override void ViewDidLoad()
        {
            base.ViewDidLoad();
            pdfViewerControl = new SfPdfViewer();
            pdfViewerControl.Frame = new CGRect(this.View.Frame.X, 70, this.View.Frame.Width, this.View.Frame.Height - 30);
            pdfViewerControl.DocumentLoaded += PdfViewerControl_DocumentLoaded;
            pageCountLabel = new UILabel();
            pageCountLabel.Frame = new CGRect(120, 5, 40, 40);
            pageCountLabel.TextAlignment = UITextAlignment.Center;
            this.View.AddSubview(pdfViewerControl);
            this.View.AddSubview(pageCountLabel);
        }

        private void PdfViewerControl_DocumentLoaded(object sender, EventArgs args)
        {
            pageCountLabel.Text = pdfViewerControl.PageCount.ToString();
        }

        public override void ViewDidAppear(bool animated)
        {
            base.ViewDidAppear(animated);
            var fileStream = typeof(MainViewController).GetTypeInfo().Assembly.GetManifestResourceStream("GettingStartediOS.Assets.GIS Succinctly.pdf");
            pdfViewerControl.LoadDocument(fileStream);
        }

{% endhighlight %}
{% endtabs %}

N>When the current page is the first page, GoToPreviousPage method will not have any effect. Similarly, when in last page, GoToNextPage method will not have any effect.

## How to lock or unlock all the annotations?

To lock or unlock all the annotations in a PDF, set the `SfPdfViewer.AnnotationSettings.IsLocked` API to `true` or `false` respectively. The default value of the API is false, and when it is set to true, annotations can be selected, but resizing, moving, editing, and removing actions will be disabled. Only the tapped and selected events from the annotations will be raised. The following code sample explains the same.

{% tabs %}
{% highlight c# %}

//Lock all the annotations
pdfViewerControl.AnnotationSettings.IsLocked = true;

{% endhighlight %}
{% endtabs %}

N>The lock operation can also be enabled or disabled for a particular annotation type such as shape, free text, text markup, etc. Please find the code samples to enable or disable interaction for particular annotation from their respective sections.

## How to enable or disable the annotation selection?

To enable or disable the annotation selection, set the `SfPdfViewer.AnnotationSettings.Constraints` API to `AnnotationConstraints.Selectable` or `~AnnotationConstraints.Selectable` respectively. Annotations will be selected by default, and when this API is set to `~AnnotationConstraints.Selectable`, annotation selection, moving, resizing, removing and attribute changes will be disabled. Only the tapped events of the annotations will be raised. The following code sample explains the same.

{% tabs %}
{% highlight c# %}

//Disable the selection of all annotation types.
pdfViewerControl.AnnotationSettings.Constraints = ~AnnotationConstraints.Selectable;

{% endhighlight %}
{% endtabs %}

N>The selection operation can also be enabled or disabled for a particular annotation type such as shape, free text, text markup, etc. Please find the code samples to enable or disable interaction for particular annotation from their respective sections.

## How to get the list of annotations present in the PDF?

By using `Annotations` property, You can get the list of annotations present in the PDF document.
  .
Refer the following code sample.

{% tabs %}
{% highlight c# %}

//Gets the list annotations present in the PDF
var annotations = pdfViewer.Annotations;

{% endhighlight %}
{% endtabs %}

N> The list remains empty if the PDF does not have any pre-existing annotations.

## Rendering the appearance content of annotations

By default, the PDF Viewer does not render the appearance content of annotations. But the appearance can be rendered by flattening the annotations before loading the PDF. This can be achieved by setting the [Flatten](https://help.syncfusion.com/cr/xamarin-android/Syncfusion.SfPdfViewer.Android.AnnotationSettings.html#Syncfusion_SfPdfViewer_Android_AnnotationSettings_Flatten) API to true. The default value of the API is set to false.

{% tabs %}
{% highlight c# %}

//Sets a value whether the annotations should be flattened when the PDF is loaded or not.
pdfViewerControl.AnnotationSettings.Flatten = true;

//Loads the PDF. 
pdfViewerControl.LoadDocument(stream);

{% endhighlight %}
{% endtabs %}

N>Annotations are only flattened when the page displayed in the viewer is only for viewing the appearance of annotations. Once the annotations are flattened, the interactions such as select, edit, resize, and remove cannot be performed. Setting the [Flatten](https://help.syncfusion.com/cr/xamarin-android/Syncfusion.SfPdfViewer.Android.AnnotationSettings.html#Syncfusion_SfPdfViewer_Android_AnnotationSettings_Flatten) property to `true` will does not affect the save and annotation export operations. The annotations will not be flattened in these operations.

## Designing a toolbar

This section depicts how to design a toolbar for the PDF viewer and include functionalities such as page navigation options. This simple toolbar consists of options such as current page number, total page count in the PDF document, go to previous page and go to next page.

In MainViewController.cs, add the below code snippet which contains the implementation for the following operations

* Access & display the current page number being displayed and navigate to the specified page.
* Display the total number of pages
* Navigate to the previous page
* Navigate to the next page

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
        

        public override void DidReceiveMemoryWarning()
        {
            base.DidReceiveMemoryWarning();

            // Release any cached data, images, etc that aren't in use.
        }

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
            return toolBar;
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

The final output will look as like in the below screenshot.

![PDF Viewer with custom toolbar](pdfviewer_images/gettingstarted.png)

This demo can be downloaded from the below link.

http://www.syncfusion.com/downloads/support/directtrac/general/ze/GettingStartediOS389189742