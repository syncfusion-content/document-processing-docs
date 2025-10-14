---
layout: post
title:  Working with magnification in PDF Viewer Xamarin.Android | Syncfusion
description: The PDF Viewer allows the users to magnify the PDF documents in multiple ways like setting maximum, minimum and custom zoom percentage.
platform: document-processing
control: SfPdfViewer
documentation: ug
---

# Working with magnification

Magnification of the PDF document can be done in multiple ways and the different ways are explained below.

## Set custom zoom percentage

The users can set custom magnification factor between 100 and 300 to magnify the document displayed. The following code explains this,

{% tabs %}
{% highlight c# %}

pdfViewerControl.ZoomPercentage = 150;

{% endhighlight %}
{% endtabs %}

## Get custom zoom factor

The following code explains accessing zoom factor in which the document is displayed in the viewer.

{% tabs %}
{% highlight c# %}

int zoom = pdfViewerControl.ZoomPercentage;

{% endhighlight %}
{% endtabs %}

## Set maximum zoom percentage

The PDF Viewer control allows you to set the maximum zoom percentage value for the PDF document being displayed. The following code example will set the maximum zoom percentage of PDF Viewer instance to 200.

{% tabs %}
{% highlight c# %}

pdfViewerControl.MaximumZoomPercentage = 200;

{% endhighlight %}
{% endtabs %}

## Set minimum zoom percentage

The PDF Viewer control allows you to set the minimum zoom percentage value for the PDF document being displayed. The following code example will set the minimum zoom percentage of PDF Viewer instance to 10.

{% tabs %}
{% highlight c# %}

pdfViewerControl.MinimumZoomPercentage = 10;

{% endhighlight %}
{% endtabs %}