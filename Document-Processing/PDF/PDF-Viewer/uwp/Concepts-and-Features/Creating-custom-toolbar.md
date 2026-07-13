---
layout: post
title: Creating a custom toolbar in UWP Pdf Viewer | Syncfusion
description: Learn here all about Creating a custom toolbar support in Syncfusion<sup>®</sup> UWP Pdf Viewer (SfPdfViewer) control, its elements, and more.
platform: document-processing
control: PDF viewer
documentation: ug
---

# Creating a custom toolbar in UWP PDF Viewer (SfPdfViewer)

The SfPdfViewer control does not include a built-in toolbar by default; however, a custom toolbar can be designed at the application level, with its buttons wired to the SfPdfViewer APIs.

## Creating separate UIs for desktop and mobile

Create a new UWP project (the name &#34;PdfViewerCustomToolbar&#34; is used here). By default, the project will contain a `MainPage.xaml` file and a `MainPage.xaml.cs` code-behind file. Create a new folder in the project with the name &#34;DeviceFamily-Mobile&#34;, and create another XAML file named `MainPage.xaml` in this folder. Open this file and set the `x:Class` attribute to `MainPage.xaml.cs`.

{% tabs %}
{% highlight xaml %}

x:Class="PdfViewerCustomToolbar.MainPage"

{% endhighlight %}
{% endtabs %}

Make sure that both XAML files are in the same namespace, &#34;PdfViewerCustomToolbar&#34;.

{%tabs%}
{%highlight xaml%}

xmlns:local="using:PdfViewerCustomToolbar"

{%endhighlight%}
{%endtabs%}

Two XAML files are used because the same UI design cannot be shared between desktop and mobile. One XAML file is used for the desktop UI, while the other is used for the mobile UI. The `MainPage.xaml.cs` file serves as the common code-behind for both XAML pages.

In the constructor of `MainPage`, set the `DataContext` to the SfPdfViewer instance.

{%tabs%}
{%highlight c#%}

this.DataContext = pdfViewer;

{%endhighlight%}
{%endtabs%}

The UI design of the application for desktop and mobile is illustrated in the following documentation pages. The link to the common sample can be found at the end of each documentation page.

1.	[Desktop design](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/uwp/concepts-and-features/ui-design-for-desktop)
2.	[Mobile design](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/uwp/concepts-and-features/ui-design-for-mobile)

## See Also
- [Localization](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/uwp/concepts-and-features/localization)
- [UI design for desktop](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/uwp/concepts-and-features/ui-design-for-desktop)
- [Customizing progress ring](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/uwp/concepts-and-features/customizing-progress-ring)