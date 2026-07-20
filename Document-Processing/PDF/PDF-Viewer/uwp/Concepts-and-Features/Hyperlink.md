---
layout: post
title: Hyperlink in UWP PDF Viewer control | Syncfusion
description: Learn here all about the Hyperlink support in the Syncfusion<sup>®</sup> UWP PDF Viewer (SfPdfViewer) control and more.
platform: document-processing
control: SfPdfViewerControl
documentation: ug
---

# Hyperlink in UWP PDF Viewer (SfPdfViewer)

The PDF Viewer control supports hyperlink navigation that detects document links and web links present in the PDF document pages. Tapping a table of contents (TOC) entry or hyperlink behaves as follows:

1) If the tapped text contains a web link, the URI associated with the hyperlink is opened in the default browser.

2) If the tapped text contains a document link, the PDF Viewer navigates to the associated destination page index.

## How to disable hyperlink navigation in PDF document using PDF Viewer control?

You can disable hyperlink navigation by setting the `AllowHyperlinkNavigation` property of the PDF Viewer to `false`. By default, hyperlink navigation is enabled in the PDF Viewer.

{% tabs %}
{% highlight xaml %}

<syncfusion:SfPdfViewerControl x:Name="pdfViewerControl" AllowHyperlinkNavigation="False"/>

{% endhighlight %}
{% endtabs %}

## How to acquire the properties of clicked URI from PDF Viewer?

You can acquire the details of the hyperlink that is tapped in the PDF Viewer control from the `HyperlinkEventArgs` of the `HyperlinkPointerPressed` event. Refer to the following code example for more details.

{% tabs %}
{% highlight xaml %}

<syncfusion:SfPdfViewerControl x:Name="pdfViewerControl" HyperlinkPointerPressed="pdfViewerControl_HyperlinkPointerPressed"/>

{% endhighlight %}
{% endtabs %}

{% tabs %}
{% highlight c# %}

        public void pdfViewerControl_HyperlinkPointerPressed(object sender,HyperlinkEventArgs args)
        {
            // Gets or sets a value indicating whether the hyperlink navigation was handled.
            args.Handled = false;

            // Gets the hyperlink being clicked.
            string uri = args.URI;

            // Gets the current page index of the hyperlink.
            int pageIndex = args.PageIndex;

            // Gets the destination page index of the hyperlink.
            int destinationPageIndex = args.DestinationPageIndex;

            // Gets the bounds of the hyperlink being clicked.
            RectangleF hyperlinkBound = args.Bounds;

            // Gets whether the tapped hyperlink is a Web Link or Document Link.
            HyperlinkType linkType = args.HyperlinkType;
        }


{% endhighlight %}
{% endtabs %}

## How to detect whether the mouse pointer is over the hyperlink text?

The `HyperlinkPointerMoved` event is raised when the mouse pointer is moved over the hyperlink text. Refer to the following code example for more details.

{% tabs %}
{% highlight xaml %}

<syncfusion:SfPdfViewerControl x:Name="pdfViewerControl" HyperlinkPointerMoved="pdfViewerControl_HyperlinkPointerMoved"/>

{% endhighlight %}
{% endtabs %}

{% tabs %}
{% highlight c# %}

        public void pdfViewerControl_HyperlinkPointerMoved(object sender,HyperlinkEventArgs args)
        {
            // Gets or sets a value indicating whether the hyperlink navigation was handled.
            args.Handled = false;

            // Gets the hyperlink under the pointer.
            string uri = args.URI;

            // Gets the current page index of the hyperlink.
            int pageIndex = args.PageIndex;

            // Gets the destination page index of the hyperlink.
            int destinationPageIndex = args.DestinationPageIndex;

            // Gets the bounds of the hyperlink under the pointer.
            RectangleF hyperlinkBound = args.Bounds;

            //Gets the whether the tapped hyper link is a Web Link or Document Link.
            HyperlinkType linkType = args.HyperlinkType

        }

{% endhighlight %}
{% endtabs %}

## How to restrict the URI navigation from the PDF Viewer?

By default, web link or document link navigation is performed on tapping the hyperlink text. This navigation can be restricted using the `Handled` property of the `HyperlinkEventArgs`. Refer to the following code snippet for more details.

{% tabs %}
{% highlight c# %}

        public void pdfViewerControl_HyperlinkPointerPressed(object sender,HyperlinkEventArgs args)
        {
            // Setting the property to true will restrict the URI navigation inside the PDF Viewer control. By default, the value is false.
            args.Handled = true;
        }

{% endhighlight %}
{% endtabs %}

## See Also
- [Bookmark Navigation](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/uwp/concepts-and-features/bookmark-navigation)
- [Viewing PDF](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/uwp/concepts-and-features/viewing-pdf)
- [Page Navigation](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/uwp/concepts-and-features/working-with-page-navigation)