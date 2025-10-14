---
layout: post
title:  Add and modify measurements using PDF Viewer Xamarin.iOS | Syncfusion
description: PDF Viewer Xamarin.iOS allows user to add, move and delete measurement annotations such as area, distance, perimeter, radius & volume.
platform: document-processing
control: SfPdfViewer
documentation: ug
---

# Working with measurements annotations

Measurement annotations are used to measure the distance, area, perimeter, radius, volume of the objects present in a PDF document.The PDF viewer allows you to include the measurement annotations in a PDF document and provides options to modify or remove the existing measurement annotations. The supported measurement annotations are listed as follows. 

1.	Area
2.	Distance
3.	Perimeter
4.	Radius
5.	Volume.

## Adding Measurement annotations

### Enabling the Measurement annotation mode

Set the [`AnnotationMode`](https://help.syncfusion.com/cr/xamarin-ios/Syncfusion.SfPdfViewer.iOS~Syncfusion.SfPdfViewer.iOS.SfPdfViewer~AnnotationMode.html) of the PDF Viewer to any of the measurement annotations to enable it. Once the measurement annotation mode is set, the zooming, panning, and scrolling will be disabled. The measurement annotations can be drawn only on the currently visible pages. Refer to the following code.

{% tabs %}
{% highlight c# %}

//Initialize the SfPdfViewer
SfPdfViewer pdfViewer = new SfPdfViewer(); 

//Setting the annotation mode to Area
pdfViewer.AnnotationMode = AnnotationMode.Area;

{% endhighlight %}
{% endtabs %}

### Disabling measurement annotation mode

Set the [`AnnotationMode`](https://help.syncfusion.com/cr/xamarin-ios/Syncfusion.SfPdfViewer.iOS~Syncfusion.SfPdfViewer.iOS.SfPdfViewer~AnnotationMode.html) of the PDF Viewer to `None` to disable the measurement annotation mode. When the measurement annotation mode is disabled, the zooming, panning, and scrolling will be enabled again.

{% tabs %}
{% highlight c# %}

//Initialize the SfPdfViewer
SfPdfViewer pdfViewer = new SfPdfViewer(); 

//Setting the annotation mode to None
pdfViewer.AnnotationMode = AnnotationMode.None;

{% endhighlight %}
{% endtabs %}

### Detecting the inclusion of measurement annotations

The [`ShapeAnnotationAdded`](https://help.syncfusion.com/cr/xamarin-ios/Syncfusion.SfPdfViewer.iOS~Syncfusion.SfPdfViewer.iOS.SfPdfViewer~ShapeAnnotationAdded_EV.html) event will be raised when a measurement annotation is added to the PDF. The properties of the added measurement annotation can be retrieved from the [`ShapeAnnotationAddedEventArgs`](https://help.syncfusion.com/cr/xamarin-ios/Syncfusion.SfPdfViewer.iOS~Syncfusion.SfPdfViewer.iOS.ShapeAnnotationAddedEventArgs.html) parameter of the event handler. 

{% tabs %}
{% highlight c# %}

//Initialize the SfPdfViewer
SfPdfViewer pdfViewer = new SfPdfViewer(); 

//Wire up the ShapeAnnotionAdded Event
pdfViewer.ShapeAnnotationAdded += PdfViewer_ShapeAnnotationAdded;

{% endhighlight %}
{% endtabs %}

The following code shows how to retrieve the properties of the added measurement annotation.

{% tabs %}
{% highlight c# %}

private void PdfViewer_ShapeAnnotationAdded(object sender, ShapeAnnotationAddedEventArgs args)
        {
            //Get the added measurement annotation type
            AnnotationMode annotationMode = args.AnnotationType;

            //Get the bounds of the added measurement annotation
            CGRect bounds = args.Bounds;

            //Get the page number in which the added measurement annotation is present
            int pageNumber = args.PageNumber;

            //Get the data points of the added measurement annotation
            List<CGPoint> dataPoints = args.DataPoints;

            //Get the opacity value of the added measurement annotation
            nfloat opacity = args.Opacity;            

            //Get the position of the added measurement annotation within the page
            CGPoint position = args.Position;

            //Get the stroke color of the added measurement annotation 
            UIColor strokeColor = args.StrokeColor;

            //Get the thickness of the added measurement annotation
            float thickness = args.Thickness;
        }

{% endhighlight %}
{% endtabs %}

## Detecting tap on measurement annotations

Tapping a measurement annotation selects it or deselects it if it is already selected. The [`ShapeAnnotationTapped`](https://help.syncfusion.com/cr/xamarin-ios/Syncfusion.SfPdfViewer.iOS~Syncfusion.SfPdfViewer.iOS.SfPdfViewer~ShapeAnnotationTapped_EV.html) event is raised when a measurement annotation is tapped. The properties of the tapped measurement annotation can be retrieved from the [`ShapeAnnotationTappedEventArgs`](https://help.syncfusion.com/cr/xamarin-ios/Syncfusion.SfPdfViewer.iOS~Syncfusion.SfPdfViewer.iOS.ShapeAnnotationTappedEventArgs.html) parameter of the event handler. 

{% tabs %}
{% highlight c# %}

//Initialize the SfPdfViewer
SfPdfViewer pdfViewer = new SfPdfViewer(); 

//Wire up the ShapeAnnotionTapped event
pdfViewer.ShapeAnnotationTapped += PdfViewer_ShapeAnnotationTapped;

{% endhighlight %}
{% endtabs %}

The following code shows how to retrieve the properties of the tapped measurement annotation.

{% tabs %}
{% highlight c# %}

private void PdfViewer_ShapeAnnotationTapped(object sender, ShapeAnnotationTappedEventArgs args)
        {
            //Get the tapped measurement annotation type
            AnnotationMode annotationMode = args.AnnotationType;

            //Get the bounds of the tapped measurement annotation
            CGRect bounds = args.Bounds;

            //Get the page number in which the tapped measurement annotation is present
            int pageNumber = args.PageNumber;

            //Get the data points of the tapped measurement annotation
            List<CGPoint> dataPoints = args.DataPoints;

            //Get the opacity value of the tapped measurement annotation
            nfloat opacity = args.Opacity;

            //Get the position of the tapped measurement annotation within the page
            CGPoint position = args.Position;

            //Get the stroke color of the tapped measurement annotation 
            UIColor strokeColor = args.StrokeColor;

            //Get the thickness of the tapped measurement annotation
            float thickness = args.Thickness;
        }

{% endhighlight %}
{% endtabs %}

## Selecting Measurement annotations

You can select a measurement annotation by tapping it. When a measurement annotation is selected, the [`ShapeAnnotationSelected`](https://help.syncfusion.com/cr/xamarin-ios/Syncfusion.SfPdfViewer.iOS~Syncfusion.SfPdfViewer.iOS.SfPdfViewer~ShapeAnnotationSelected_EV.html) event will be raised. The properties of the selected measurement annotation can be retrieved from the [`ShapeAnnotationSelectedEventArgs`](https://help.syncfusion.com/cr/xamarin-ios/Syncfusion.SfPdfViewer.iOS~Syncfusion.SfPdfViewer.iOS.ShapeAnnotationSelectedEventArgs.html) parameter of the event handler. 

{% tabs %}
{% highlight c# %}

//Initialize the SfPdfViewer
SfPdfViewer pdfViewer = new SfPdfViewer();

//Wire up the ShapeAnnotionSelected event
pdfViewer.ShapeAnnotationSelected += PdfViewer_ShapeAnnotationSelected;

{% endhighlight %}
{% endtabs %}

The following code shows how to retrieve the properties of the selected measurement annotation.

{% tabs %}
{% highlight c# %}

 private void PdfViewer_ShapeAnnotationSelected(object sender, ShapeAnnotationSelectedEventArgs args)
        {
            //Get the selected measurement annotation type
            AnnotationMode annotationMode = args.AnnotationType;

            //Get the bounds of the selected measurement annotation
            CGRect bounds = args.Bounds;

            //Get the page number in which the selected measurement annotation is present
            int pageNumber = args.PageNumber;

            //Gets the list of other annotations that overlap the selected annotation
            System.Collections.Generic.List<IAnnotation> overlappedAnnotation = args.OverlappedAnnotations;
        }

{% endhighlight %}
{% endtabs %}


## Deselecting measurement annotations

You can deselect a selected measurement annotation by tapping on it or somewhere else on the PDF page. Deselection can be detected using the [`ShapeAnnotationDeselected`](https://help.syncfusion.com/cr/xamarin-ios/Syncfusion.SfPdfViewer.iOS~Syncfusion.SfPdfViewer.iOS.SfPdfViewer~ShapeAnnotationDeselected_EV.html) event. The properties of the deselected measurement annotation can be retrieved from the [`ShapeAnnotationDeselectedEventArgs`](https://help.syncfusion.com/cr/xamarin-ios/Syncfusion.SfPdfViewer.iOS~Syncfusion.SfPdfViewer.iOS.ShapeAnnotationDeselectedEventArgs.html) parameter of the event handler. 

{% tabs %}
{% highlight c# %}

//Initialize the SfPdfViewer
SfPdfViewer pdfViewer = new SfPdfViewer(); 

//Wire up the ShapeAnnotionDeselected Event
pdfViewer.ShapeAnnotationDeselected = PdfViewer_ShapeAnnotationDeselected;

{% endhighlight %}
{% endtabs %}

The following code shows how to retrieve the properties of the deselected measurement annotation.

{% tabs %}
{% highlight c# %}

private void PdfViewer_ShapeAnnotationDeselected(object sender, ShapeAnnotationDeselectedEventArgs args)
        {
            //Get the deselected measurement annotation type
            AnnotationMode annotationType = args.AnnotationType;

            //Retrieves the bounds of the deselected measurement annotation. 
            CGRect bounds = args.Bounds;

            //Retrieves the page number where the deselected measurement annotation resides. 
            int page = args.PageNumber;
        }
		
{% endhighlight %}
{% endtabs %}

## Moving or resizing the selected measurement annotation

To move or resize the measurement annotation it should be selected. After the appearance of the selector, tapping and dragging anywhere inside the selector will move the measurement annotation. Tapping on the bubbles around the selector and dragging would resize the measurement annotation. 

### Detecting the move or resize of a measurement Annotation

The [`AnnotationMovedOrResized`](https://help.syncfusion.com/cr/xamarin-ios/Syncfusion.SfPdfViewer.iOS~Syncfusion.SfPdfViewer.iOS.SfPdfViewer~AnnotationMovedOrResized_EV.html) event will be raised when you move or resize the selected annotation. The properties of the moved or re-sized measurement annotation can be retrieved from the [`AnnotationMovedOrResizedEventArgs`](https://help.syncfusion.com/cr/xamarin-ios/Syncfusion.SfPdfViewer.iOS~Syncfusion.SfPdfViewer.iOS.AnnotationMovedOrResizedEventArgs.html) parameter of the event handler. 

{% tabs %}
{% highlight c# %}

//Initialize the SfPdfViewer
SfPdfViewer pdfViewer = new SfPdfViewer(); 

//Wire up the AnnotationMovedOrResized event
pdfViewer.AnnotationMovedOrResized = PdfViewer_AnnotationMovedOrResized;

{% endhighlight %}
{% endtabs %}

The following code shows how to retrieve the properties of the moved or re-sized measurement annotation.

{% tabs %}
{% highlight c# %}

private void PdfViewer_AnnotationMovedOrResized(object sender, AnnotationMovedOrResizedEventArgs args)
        {
            //Determine whether the moved or resized annotation is a measurement annotation or some other annotation. 
            if (sender as AreaAnnotation != null)
            {
                //The annotation is an area annotation 
            }
            else
            {
                //The annotation is not an area annotation
            }

            //Retrieve the old bounds of the measurement annotation
            CGRect oldBounds = args.OldBounds;

            //Retrieve the new bounds of the measurement annotation 
            CGRect newBounds = args.NewBounds;

            //Get the page number in which the measurement annotation is moved or re-sized
            int pageNumber = args.PageNumber;

            //Get the opacity value of the measurement annotation
            nfloat opacity = args.Opacity;

            //Get the color of the measurement annotation
            UIColor color = args.Color;

            //Get the thickness of the measurement annotation
            float thickness = args.Thickness;
        }
		
{% endhighlight %}
{% endtabs %}

## Deleting the measurement annotations

The PDF Viewer allows you to remove a selected annotation or all the annotations in the PDF document.

### Removing a selected annotation

The following code sample shows how to remove the selected area measurement annotation from the PDF document.

{% tabs %}
{% highlight c# %}
       
AreaAnnotation areaAnnotation; 
private void PdfViewer_ShapeAnnotationSelected(object sender, ShapeAnnotationSelectedEventArgs args)
        {
            //Cast the sender object as area annotation. 
            areaAnnotation = sender as AreaAnnotation;
        }

private void deleteShapeAnnotationButton_Clicked(object sender, EventArgs e)
        {
            //Delete the area annotation 
            pdfViewer.RemoveAnnotation(areaAnnotation);
        }

{% endhighlight %}
{% endtabs %}

### Detecting the removal of a measurement Annotation

The [`ShapeAnnotationRemoved`](https://help.syncfusion.com/cr/xamarin-ios/Syncfusion.SfPdfViewer.iOS~Syncfusion.SfPdfViewer.iOS.SfPdfViewer~ShapeAnnotationRemoved_EV.html) event will be raised when a measurement annotation is removed from the PDF.

{% tabs %}
{% highlight c# %}

//Initialize the SfPdfViewer
SfPdfViewer pdfViewer = new SfPdfViewer(); 

//Wire up the ShapeAnnotionRemoved Event
pdfViewer.ShapeAnnotationRemoved = PdfViewer_ShapeAnnotationRemoved;

{% endhighlight %}
{% endtabs %}

The properties of the removed measurement annotation can be retrieved from the [`ShapeAnnotationRemovedEventArgs`](https://help.syncfusion.com/cr/xamarin-ios/Syncfusion.SfPdfViewer.iOS~Syncfusion.SfPdfViewer.iOS.ShapeAnnotationRemovedEventArgs.html) parameter of the event handler. 

{% tabs %}
{% highlight c# %}

private void PdfViewerControl_ShapeAnnotationRemoved(object sender, ShapeAnnotationRemovedEventArgs args)
        {
            //Get the removed measurement annotation type
            AnnotationMode annotationMode = args.AnnotationType;

            //Get the bounds of the removed measurement annotation
            CGRect bounds = args.Bounds;

            //Get the data points of the removed measurement annotation
            List<CGPoint> dataPoints = args.DataPoints;

            //Get the page number in which the removed measurement annotation was present
            int pageNumber = args.PageNumber;
        }
		
{% endhighlight %}
{% endtabs %}

## Customizing the appearance of Measurement annotations

You can customize the default values of [`stroke color`](https://help.syncfusion.com/cr/cref_files/xamarin-ios/Syncfusion.SfPdfViewer.iOS~Syncfusion.SfPdfViewer.iOS.MeasurementAnnotationSettings~StrokeColor.html) , [`opacity`](https://help.syncfusion.com/cr/cref_files/xamarin-ios/Syncfusion.SfPdfViewer.iOS~Syncfusion.SfPdfViewer.iOS.MeasurementAnnotationSettings~Opacity.html), [`maximum height`](https://help.syncfusion.com/cr/xamarin-ios/Syncfusion.SfPdfViewer.iOS~Syncfusion.SfPdfViewer.iOS.MeasurementAnnotationSettings~MaximumHeight.html), [`minimum height`](https://help.syncfusion.com/cr/xamarin-ios/Syncfusion.SfPdfViewer.iOS~Syncfusion.SfPdfViewer.iOS.MeasurementAnnotationSettings~MinimumHeight.htm), [`maximum width`](https://help.syncfusion.com/cr/xamarin-ios/Syncfusion.SfPdfViewer.iOS~Syncfusion.SfPdfViewer.iOS.MeasurementAnnotationSettings~MaximumWidth.html), [`minimum width`](https://help.syncfusion.com/cr/xamarin-ios/Syncfusion.SfPdfViewer.iOS~Syncfusion.SfPdfViewer.iOS.MeasurementAnnotationSettings~MinimumWidth.html), [`display text`](https://help.syncfusion.com/cr/xamarin-ios/Syncfusion.SfPdfViewer.iOS~Syncfusion.SfPdfViewer.iOS.MeasurementAnnotationSettings~Text.html), [`text background color`](https://help.syncfusion.com/cr/xamarin-ios/Syncfusion.SfPdfViewer.iOS~Syncfusion.SfPdfViewer.iOS.MeasurementAnnotationSettings~TextBackgroundColor.html), [`text color`](https://help.syncfusion.com/cr/cref_files/xamarin-ios/Syncfusion.SfPdfViewer.iOS~Syncfusion.SfPdfViewer.iOS.MeasurementAnnotationSettings~TextColor.html), [`text opacity`](https://help.syncfusion.com/cr/cref_files/xamarin-ios/Syncfusion.SfPdfViewer.iOS~Syncfusion.SfPdfViewer.iOS.MeasurementAnnotationSettings~TextOpacity.html), [`text size`](https://help.syncfusion.com/cr/xamarin-ios/Syncfusion.SfPdfViewer.iOS~Syncfusion.SfPdfViewer.iOS.MeasurementAnnotationSettings~TextSize.html), [`interaction (locked)`](https://help.syncfusion.com/cr/xamarin-ios/Syncfusion.SfPdfViewer.iOS~Syncfusion.SfPdfViewer.iOS.AnnotationSettings~IsLocked.html), [`thickness`](https://help.syncfusion.com/cr/xamarin-ios/Syncfusion.SfPdfViewer.iOS~Syncfusion.SfPdfViewer.iOS.MeasurementAnnotationSettings~Thickness.html), and [`fill color`](https://help.syncfusion.com/cr/cref_files/xamarin-ios/Syncfusion.SfPdfViewer.iOS~Syncfusion.SfPdfViewer.iOS.MeasurementAnnotationSettings~FillColor.html) of the measurement annotations that are to be added.

N>This will not affect the measurement annotations that were already added. 

The following is the list of properties applicable to customize the appearance of the measurement annotations,


<table>
    <tr>
        <th>Properties<br/>
            <br/></th>        
        <th>
          Area
            <br/>
            <br/>
        </th>
          <th>
            Volume
            <br/>
            <br/>
        </th>
        <th>
            Distance
            <br/>
            <br/>
        </th>
		 <th>
            Radius
            <br/>
            <br/>
        </th>
		 <th>
            Perimeter
            <br/>
            <br/>
        </th>
    </tr>
    <tr>
        <td>
            Stroke Color
            <br/>
            <br/>
        </td>
        <td>
            Yes
            <br/>
            <br/>
        </td>
          <td>
            Yes 
            <br/>
            <br/>
        </td>
        <td>
            Yes
            <br/>
            <br/>
        </td>
		 <td>
            Yes
            <br/>
            <br/>
        </td>
		 <td>
            Yes
            <br/>
            <br/>
        </td>
    </tr>
	    <tr>
        <td>
            opacity
            <br/>
            <br/>
        </td>
        <td>
            Yes
            <br/>
            <br/>
        </td>
          <td>
            Yes 
            <br/>
            <br/>
        </td>
        <td>
            Yes
            <br/>
            <br/>
        </td>
		 <td>
            Yes
            <br/>
            <br/>
        </td>
		 <td>
            Yes
            <br/>
            <br/>
        </td>
    </tr>
	    <tr>
        <td>
          Fill color
            <br/>
            <br/>
        </td>
        <td>
            Yes
            <br/>
            <br/>
        </td>
          <td>
            Yes 
            <br/>
            <br/>
        </td>
        <td>
            Yes
            <br/>
            <br/>
        </td>
		 <td>
            Yes
            <br/>
            <br/>
        </td>
		 <td>
            Yes
            <br/>
            <br/>
        </td>
    </tr>
	<tr>
        <td>
          Thickness
            <br/>
            <br/>
        </td>
        <td>
            Yes
            <br/>
            <br/>
        </td>
          <td>
            Yes 
            <br/>
            <br/>
        </td>
        <td>
            Yes
            <br/>
            <br/>
        </td>
		 <td>
            Yes
            <br/>
            <br/>
        </td>
		 <td>
            Yes
            <br/>
            <br/>
        </td>
    </tr>
	<tr>
        <td>
          Text
            <br/>
            <br/>
        </td>
        <td>
            Yes
            <br/>
            <br/>
        </td>
          <td>
            Yes 
            <br/>
            <br/>
        </td>
        <td>
            Yes
            <br/>
            <br/>
        </td>
		 <td>
            Yes
            <br/>
            <br/>
        </td>
		 <td>
            Yes
            <br/>
            <br/>
        </td>
    </tr>
	<tr>
        <td>
          Text color
            <br/>
            <br/>
        </td>
        <td>
            Yes
            <br/>
            <br/>
        </td>
          <td>
            Yes 
            <br/>
            <br/>
        </td>
        <td>
            Yes
            <br/>
            <br/>
        </td>
		 <td>
            Yes
            <br/>
            <br/>
        </td>
		 <td>
            Yes
            <br/>
            <br/>
        </td>
    </tr>
	<tr>
        <td>
          Text background-color
            <br/>
            <br/>
        </td>
        <td>
            Yes
            <br/>
            <br/>
        </td>
          <td>
            Yes 
            <br/>
            <br/>
        </td>
        <td>
            Yes
            <br/>
            <br/>
        </td>
		 <td>
            Yes
            <br/>
            <br/>
        </td>
		 <td>
            Yes
            <br/>
            <br/>
        </td>
    </tr>
	<tr>
        <td>
          Text opacity
            <br/>
            <br/>
        </td>
        <td>
            Yes
            <br/>
            <br/>
        </td>
          <td>
            Yes 
            <br/>
            <br/>
        </td>
        <td>
            Yes
            <br/>
            <br/>
        </td>
		 <td>
            Yes
            <br/>
            <br/>
        </td>
		 <td>
            Yes
            <br/>
            <br/>
        </td>
    </tr>
	<tr>
        <td>
          Text size
            <br/>
            <br/>
        </td>
        <td>
            Yes
            <br/>
            <br/>
        </td>
          <td>
            Yes 
            <br/>
            <br/>
        </td>
        <td>
            Yes
            <br/>
            <br/>
        </td>
		 <td>
            Yes
            <br/>
            <br/>
        </td>
		 <td>
            Yes
            <br/>
            <br/>
        </td>
    </tr>
	<tr>
        <td>
          Minimum height
            <br/>
            <br/>
        </td>
        <td>
            Yes
            <br/>
            <br/>
        </td>
          <td>
            Yes 
            <br/>
            <br/>
        </td>
        <td>
            Yes
            <br/>
            <br/>
        </td>
		 <td>
            Yes
            <br/>
            <br/>
        </td>
		 <td>
            Yes
            <br/>
            <br/>
        </td>
    </tr>
	<tr>
        <td>
          Minimum width
            <br/>
            <br/>
        </td>
        <td>
            Yes
            <br/>
            <br/>
        </td>
          <td>
            Yes 
            <br/>
            <br/>
        </td>
        <td>
            Yes
            <br/>
            <br/>
        </td>
		 <td>
            Yes
            <br/>
            <br/>
        </td>
		 <td>
            Yes
            <br/>
            <br/>
        </td>
    </tr>
	<tr>
        <td>
         Maximum height
            <br/>
            <br/>
        </td>
        <td>
            Yes
            <br/>
            <br/>
        </td>
          <td>
            Yes 
            <br/>
            <br/>
        </td>
        <td>
            Yes
            <br/>
            <br/>
        </td>
		 <td>
            Yes
            <br/>
            <br/>
        </td>
		 <td>
            Yes
            <br/>
            <br/>
        </td>
    </tr>
	<tr>
        <td>
          Maximum width
            <br/>
            <br/>
        </td>
        <td>
            Yes
            <br/>
            <br/>
        </td>
          <td>
            Yes 
            <br/>
            <br/>
        </td>
        <td>
            Yes
            <br/>
            <br/>
        </td>
		 <td>
            Yes
            <br/>
            <br/>
        </td>
		 <td>
            Yes
            <br/>
            <br/>
        </td>
    </tr>
	<tr>
        <td>
          Maximum width
            <br/>
            <br/>
        </td>
        <td>
            Yes
            <br/>
            <br/>
        </td>
          <td>
            Yes 
            <br/>
            <br/>
        </td>
        <td>
            Yes
            <br/>
            <br/>
        </td>
		 <td>
            Yes
            <br/>
            <br/>
        </td>
		 <td>
            Yes
            <br/>
            <br/>
        </td>
    </tr>
	<tr>
        <td>
         Is Locked
            <br/>
            <br/>
        </td>
        <td>
            Yes
            <br/>
            <br/>
        </td>
          <td>
            Yes 
            <br/>
            <br/>
        </td>
        <td>
            Yes
            <br/>
            <br/>
        </td>
		 <td>
            Yes
            <br/>
            <br/>
        </td>
		 <td>
            Yes
            <br/>
            <br/>
        </td>
    </tr>
	<tr>
        <td>
        End style
            <br/>
            <br/>
        </td>
        <td>
            No
            <br/>
            <br/>
        </td>
          <td>
            No 
            <br/>
            <br/>
        </td>
        <td>
            Yes
            <br/>
            <br/>
        </td>
		 <td>
            No
            <br/>
            <br/>
        </td>
		 <td>
            No
            <br/>
            <br/>
        </td>
    </tr>
		<tr>
        <td>
       Begin style
            <br/>
            <br/>
        </td>
        <td>
            No
            <br/>
            <br/>
        </td>
          <td>
            No 
            <br/>
            <br/>
        </td>
        <td>
            Yes
            <br/>
            <br/>
        </td>
		 <td>
            No
            <br/>
            <br/>
        </td>
		 <td>
            No
            <br/>
            <br/>
        </td>
    </tr>
		<tr>
        <td>
        Leader extension
            <br/>
            <br/>
        </td>
        <td>
            No
            <br/>
            <br/>
        </td>
          <td>
            No 
            <br/>
            <br/>
        </td>
        <td>
            Yes
            <br/>
            <br/>
        </td>
		 <td>
            No
            <br/>
            <br/>
        </td>
		 <td>
            No
            <br/>
            <br/>
        </td>
    </tr>
		<tr>
        <td>
        LineCap position
            <br/>
            <br/>
        </td>
        <td>
            No
            <br/>
            <br/>
        </td>
          <td>
            No 
            <br/>
            <br/>
        </td>
        <td>
            Yes
            <br/>
            <br/>
        </td>
		 <td>
            No
            <br/>
            <br/>
        </td>
		 <td>
            No
            <br/>
            <br/>
        </td>
    </tr>
		<tr>
        <td>
        Leader length
            <br/>
            <br/>
        </td>
        <td>
            No
            <br/>
            <br/>
        </td>
          <td>
            No 
            <br/>
            <br/>
        </td>
        <td>
            Yes
            <br/>
            <br/>
        </td>
		 <td>
            No
            <br/>
            <br/>
        </td>
		 <td>
            No
            <br/>
            <br/>
        </td>
    </tr>
		<tr>
        <td>
        Depth
            <br/>
            <br/>
        </td>
        <td>
            No
            <br/>
            <br/>
        </td>
          <td>
            Yes 
            <br/>
            <br/>
        </td>
        <td>
            No
            <br/>
            <br/>
        </td>
		 <td>
            No
            <br/>
            <br/>
        </td>
		 <td>
            No
            <br/>
            <br/>
        </td>
    </tr>
		<tr>
        <td>
        IsAutoCloseEnabled
            <br/>
            <br/>
        </td>
        <td>
            No
            <br/>
            <br/>
        </td>
          <td>
            No 
            <br/>
            <br/>
        </td>
        <td>
            No
            <br/>
            <br/>
        </td>
		 <td>
            No
            <br/>
            <br/>
        </td>
		 <td>
            Yes
            <br/>
            <br/>
        </td>
    </tr>
</table>

N>The following properties are common to all the Measurement annotations. In all code samples, the Area measurement annotation is used for illustration purposes.

### Setting the default stroke color

You can set the default stroke color for the measurement annotations by using the [`StrokeColor`](https://help.syncfusion.com/cr/cref_files/xamarin-ios/Syncfusion.SfPdfViewer.iOS~Syncfusion.SfPdfViewer.iOS.MeasurementAnnotationSettings~StrokeColor.html) property. Refer to the following code example.

{% tabs %}
{% highlight c# %}

//Initialize the SfPdfViewer
SfPdfViewer pdfViewer = new SfPdfViewer(); 

//Setting the stroke color for area measurement annotation
pdfViewer.MeasurementSettings.Area.StrokeColor = UIColor.Red;

{% endhighlight %}
{% endtabs %}

### Setting the default opacity

You can set the default opacity for the measurement annotations by using the [`Opacity`](https://help.syncfusion.com/cr/cref_files/xamarin-ios/Syncfusion.SfPdfViewer.iOS~Syncfusion.SfPdfViewer.iOS.MeasurementAnnotationSettings~Opacity.html) property. The opacity value ranges from 0 to 1. Refer to the following code example.

{% tabs %}
{% highlight c# %}

//Initialize the SfPdfViewer
SfPdfViewer pdfViewer = new SfPdfViewer(); 

//Setting the opacity for area measurement 
annotationpdfViewer.MeasurementSettings.Area.Opacity = 0.5f;

{% endhighlight %}
{% endtabs %}

### Setting the default fill color

You can set the default fill color for the measurement annotations by using the [`FillColor`](https://help.syncfusion.com/cr/cref_files/xamarin-ios/Syncfusion.SfPdfViewer.iOS~Syncfusion.SfPdfViewer.iOS.MeasurementAnnotationSettings~FillColor.html) property. Refer to the following code example.

{% tabs %}
{% highlight c# %}

//Initialize the SfPdfViewer
SfPdfViewer pdfViewer = new SfPdfViewer(); 

//Setting the fill color for area measurement annotation
pdfViewer.MeasurementSettings.Area.FillColor = UIColor.Blue;

{% endhighlight %}
{% endtabs %}

### Setting the default thickness

You can set the thickness for the measurement annotations by using the [`Thickness`](https://help.syncfusion.com/cr/xamarin-ios/Syncfusion.SfPdfViewer.iOS~Syncfusion.SfPdfViewer.iOS.MeasurementAnnotationSettings~Thickness.html) property. Refer to the following code example.

{% tabs %}
{% highlight c# %}

//Initialize the SfPdfViewer
SfPdfViewer pdfViewer = new SfPdfViewer(); 

//Setting thickness for the area measurement annotation
pdfViewer.MeasurementSettings.Area.Thickness = 5;

{% endhighlight %}
{% endtabs %}

### Setting the default text

You can set the text for the measurement annotations by using the [`Text`](https://help.syncfusion.com/cr/xamarin-ios/Syncfusion.SfPdfViewer.iOS~Syncfusion.SfPdfViewer.iOS.MeasurementAnnotationSettings~Text.html) property. Refer to the following code example.

{% tabs %}
{% highlight c# %}

//Initialize the SfPdfViewer
SfPdfViewer pdfViewer = new SfPdfViewer(); 

//Setting the text for area measurement annotation
pdfViewer.MeasurementSettings.Area.Text = ?Area?;

{% endhighlight %}
{% endtabs %}

### Setting the default text background color

You can set the background color for the text assigned to the measurement annotations by using the [`TextBackgroundColor`](https://help.syncfusion.com/cr/xamarin-ios/Syncfusion.SfPdfViewer.iOS~Syncfusion.SfPdfViewer.iOS.MeasurementAnnotationSettings~TextBackgroundColor.html) property. Refer to the following code example.

{% tabs %}
{% highlight c# %}

//Initialize the SfPdfViewer
SfPdfViewer pdfViewer = new SfPdfViewer(); 

//Setting the text background color for area measurement annotation
pdfViewer.MeasurementSettings.Area.TextBackgroundColor = UIColor.Black

{% endhighlight %}
{% endtabs %}

### Setting the default text color

You can set the color for the text assigned to the measurement annotations by using the [`TextColor`](https://help.syncfusion.com/cr/cref_files/xamarin-ios/Syncfusion.SfPdfViewer.iOS~Syncfusion.SfPdfViewer.iOS.MeasurementAnnotationSettings~TextColor.html) property. Refer to the following code example.

{% tabs %}
{% highlight c# %}

//Initialize the SfPdfViewer
SfPdfViewer pdfViewer = new SfPdfViewer(); 

//Setting the text color for area measurement annotation
pdfViewer.MeasurementSettings.Area.TextColor = UIColor.Black;

{% endhighlight %}
{% endtabs %}

### Setting the default text opacity

You can set the opacity for the text assigned to the measurement annotations by using the [`TextOpacity`](https://help.syncfusion.com/cr/cref_files/xamarin-ios/Syncfusion.SfPdfViewer.iOS~Syncfusion.SfPdfViewer.iOS.MeasurementAnnotationSettings~TextOpacity.html) property. Refer to the following code example.

{% tabs %}
{% highlight c# %}

//Initialize the SfPdfViewer
SfPdfViewer pdfViewer = new SfPdfViewer(); 

//Setting the text opacity for area measurement annotation
pdfViewer.MeasurementSettings.Area.TextOpacity = 0.5f;

{% endhighlight %}
{% endtabs %}

### Setting the default text size

You can set the size for the text assigned to the measurement annotations by using the [`TextSize`](https://help.syncfusion.com/cr/xamarin-ios/Syncfusion.SfPdfViewer.iOS~Syncfusion.SfPdfViewer.iOS.MeasurementAnnotationSettings~TextSize.html) property. Refer to the following code example.

{% tabs %}
{% highlight c# %}

//Initialize the SfPdfViewer
SfPdfViewer pdfViewer = new SfPdfViewer(); 

//Setting the text size for area measurement annotation
pdfViewer.MeasurementSettings.Area.TextSize = 2;

{% endhighlight %}
{% endtabs %}

### Setting the default minimum height

You can set the minimum height for the measurement annotations by using the [`MinimumHeight`](https://help.syncfusion.com/cr/xamarin-ios/Syncfusion.SfPdfViewer.iOS~Syncfusion.SfPdfViewer.iOS.MeasurementAnnotationSettings~MinimumHeight.html) property. Refer to the following code example.

{% tabs %}
{% highlight c# %}

//Initialize the SfPdfViewer
SfPdfViewer pdfViewer = new SfPdfViewer(); 

//Setting the minimum height for area measurement annotation
pdfViewer.MeasurementSettings.Area.MinimumHeight = 20;

{% endhighlight %}
{% endtabs %}

### Setting the default minimum width

You can set the minimum width for the measurement annotations by using the [`MinimumWidth`](https://help.syncfusion.com/cr/xamarin-ios/Syncfusion.SfPdfViewer.iOS~Syncfusion.SfPdfViewer.iOS.MeasurementAnnotationSettings~MinimumWidth.html) property. Refer to the following code example.

{% tabs %}
{% highlight c# %}

//Initialize the SfPdfViewer
SfPdfViewer pdfViewer = new SfPdfViewer(); 

//Setting the minimum width for area measurement annotation
pdfViewer.MeasurementSettings.Area.MinimumWidth = 20;

{% endhighlight %}
{% endtabs %}

### Setting the default maximum height

You can set the maximum height for the measurement annotations by using the [`MaximumHeight`](https://help.syncfusion.com/cr/xamarin-ios/Syncfusion.SfPdfViewer.iOS~Syncfusion.SfPdfViewer.iOS.MeasurementAnnotationSettings~MaximumHeight.html) property. Refer to the following code example.

{% tabs %}
{% highlight c# %}

//Initialize the SfPdfViewer
SfPdfViewer pdfViewer = new SfPdfViewer(); 

//Setting the maximum height for area measurement annotation
pdfViewer.MeasurementSettings.Area.MaximumHeight = 60;

{% endhighlight %}
{% endtabs %}

### Setting the default maximum width

You can set the maximum width for the measurement annotations by using the [`MaximumWidth`](https://help.syncfusion.com/cr/xamarin-ios/Syncfusion.SfPdfViewer.iOS~Syncfusion.SfPdfViewer.iOS.MeasurementAnnotationSettings~MaximumWidth.html) property. Refer to the following code example.

{% tabs %}
{% highlight c# %}

//Initialize the SfPdfViewer
SfPdfViewer pdfViewer = new SfPdfViewer(); 

//Setting the maximum width for area measurement annotation
pdfViewer.MeasurementSettings.Area.MaximumWidth = 60;

{% endhighlight %}
{% endtabs %}

### Customizing the default appearance which is specific to the Distance Annotation

You can customize the default values of the [`begin style`](https://help.syncfusion.com/cr/xamarin-ios/Syncfusion.SfPdfViewer.iOS~Syncfusion.SfPdfViewer.iOS.DistanceAnnotation~BeginStyle.html), [`end style`](https://help.syncfusion.com/cr/xamarin-ios/Syncfusion.SfPdfViewer.iOS~Syncfusion.SfPdfViewer.iOS.DistanceAnnotation~EndStyle.html), [`leader extension`](https://help.syncfusion.com/cr/xamarin-ios/Syncfusion.SfPdfViewer.iOS~Syncfusion.SfPdfViewer.iOS.DistanceAnnotation~LeaderExtension.html), [`leader length`](https://help.syncfusion.com/cr/xamarin-ios/Syncfusion.SfPdfViewer.iOS~Syncfusion.SfPdfViewer.iOS.DistanceAnnotation~LeaderLength.html), and [`line cap position`](https://help.syncfusion.com/cr/xamarin-ios/Syncfusion.SfPdfViewer.iOS~Syncfusion.SfPdfViewer.iOS.DistanceAnnotation~LineCapPosition.html) of the distance Annotation to be added. 

N> This will not affect the already added distance annotations. 

You can set the begin style for the distance measurement annotations using the [`BeginStyle`](https://help.syncfusion.com/cr/xamarin-ios/Syncfusion.SfPdfViewer.iOS~Syncfusion.SfPdfViewer.iOS.DistanceAnnotation~BeginStyle.html) property. The BeginStyle is an enum property with values Round, Closed, Diamond, None, Open, and Square. 

Refer to the following code example.

{% tabs %}
{% highlight c# %}

//Initialize the SfPdfViewer
SfPdfViewer pdfViewer = new SfPdfViewer(); 

//Setting the begin style for distance measurement annotation
pdfViewer.MeasurementSettings.Distance.BeginStyle = BeginStyle.Round;

{% endhighlight %}
{% endtabs %}

You can set the end style for the distance measurement annotations using the [`EndStyle`](https://help.syncfusion.com/cr/xamarin-ios/Syncfusion.SfPdfViewer.iOS~Syncfusion.SfPdfViewer.iOS.DistanceAnnotation~EndStyle.html) property. The EndStyle is an enum property with values Round, Closed, Diamond, None, Open, and Square

Refer to the following code example.

{% tabs %}
{% highlight c# %}

//Initialize the SfPdfViewer
SfPdfViewer pdfViewer = new SfPdfViewer(); 

//Setting the end style for distance measurement annotation
pdfViewer.MeasurementSettings.Distance.EndStyle = EndStyle.Round;

{% endhighlight %}
{% endtabs %}

You can set the leader extension for the distance measurement annotations using the [`LeaderExtension`](https://help.syncfusion.com/cr/xamarin-ios/Syncfusion.SfPdfViewer.iOS~Syncfusion.SfPdfViewer.iOS.DistanceAnnotation~LeaderExtension.html) property. Refer to the following code example.

Refer to the following code example.

{% tabs %}
{% highlight c# %}

//Initialize the SfPdfViewer
SfPdfViewer pdfViewer = new SfPdfViewer(); 

//Setting the leader extension for distance measurement annotation
pdfViewer.MeasurementSettings.Distance.LeaderExtension = 30;

{% endhighlight %}
{% endtabs %}

You can set the leader length for the distance measurement annotations using the [`LeaderLength`](https://help.syncfusion.com/cr/xamarin-ios/Syncfusion.SfPdfViewer.iOS~Syncfusion.SfPdfViewer.iOS.DistanceAnnotation~LeaderLength.html) property. Refer to the following code example.

Refer to the following code example.

{% tabs %}
{% highlight c# %}

//Initialize the SfPdfViewer
SfPdfViewer pdfViewer = new SfPdfViewer(); 

//Setting the leader length for distance measurement annotation
pdfViewer.MeasurementSettings.Distance.LeaderLength = 30;

{% endhighlight %}
{% endtabs %}

You can set the line cap position for the distance measurement annotations using the [`LineCapPosition`](https://help.syncfusion.com/cr/xamarin-ios/Syncfusion.SfPdfViewer.iOS~Syncfusion.SfPdfViewer.iOS.DistanceAnnotation~LineCapPosition.html) property. Refer to the following code example. The LineCapPosition is an enum property with values Inline, and Top. 

Refer to the following code example.

{% tabs %}
{% highlight c# %}

//Initialize the SfPdfViewer
SfPdfViewer pdfViewer = new SfPdfViewer(); 

//Setting the line cap position for distance measurement annotation
pdfViewer.MeasurementSettings.Distance.LineCapPosition = LineCapPositon.Inline;

{% endhighlight %}
{% endtabs %}

### Customizing the default appearance which are specific to the Volume Annotation. 

You can customize the default depth value for the volume measurement annotations using the [`Depth`](https://help.syncfusion.com/cr/xamarin-ios/Syncfusion.SfPdfViewer.iOS~Syncfusion.SfPdfViewer.iOS.VolumeAnnotation~Depth.html) property.

The [`MeasurementUnit`](https://help.syncfusion.com/cr/xamarin-ios/Syncfusion.SfPdfViewer.iOS~Syncfusion.SfPdfViewer.iOS.MeasurementUnit.html) is an enum property with values Inch, Pica, Point, Centimeter, Millimeter, and Feet.

Refer to the following code example.

{% tabs %}
{% highlight c# %}

//Initialize the SfPdfViewer
SfPdfViewer pdfViewer = new SfPdfViewer(); 

//Setting the depth for volume measurement annotation
pdfViewer.MeasurementSettings.Volume.Depth = (1f, MeasurementUnit.Centimeter);

{% endhighlight %}
{% endtabs %}

### Customizing the default appearance which are specific to the Perimeter Annotation. 

You can customize the auto-close option for the perimeter measurement annotations using the [`IsAutoCloseEnabled`](https://help.syncfusion.com/cr/xamarin-ios/Syncfusion.SfPdfViewer.iOS~Syncfusion.SfPdfViewer.iOS.PerimeterAnnotation~IsAutoCloseEnabled.html) property. Once it is enabled, you can close the perimeter measurement annotation by moving the line nearer to the origin point or by double tapping on the PDF page. Refer to the following code example.

{% tabs %}
{% highlight c# %}

//Initialize the SfPdfViewer
SfPdfViewer pdfViewer = new SfPdfViewer(); 

//Setting the auto-close option for the perimeter measurement annotation
pdfViewer.MeasurementSettings.Perimeter.IsAutoClosedEnable=true;

{% endhighlight %}
{% endtabs %}

## How to get or set a scale ratio for the measurement Annotations

You can set the scale ratio for the measurement annotations by using the [`SfPdfViewer.MeasurementSettings.ScaleRatio`](https://help.syncfusion.com/cr/xamarin-ios/Syncfusion.SfPdfViewer.iOS~Syncfusion.SfPdfViewer.iOS.MeasurementSettings~ScaleRatio.html) property. Refer to the following code example.

The [`MeasurementUnit`](https://help.syncfusion.com/cr/xamarin-ios/Syncfusion.SfPdfViewer.iOS~Syncfusion.SfPdfViewer.iOS.MeasurementUnit.html) is an enum property with values Inch, Pica, Point, Centimeter, Millimeter, and Feet.

{% tabs %}
{% highlight c# %}

//Initialize the SfPdfViewer
SfPdfViewer pdfViewer = new SfPdfViewer(); 

//Setting the scale ratio for measurement annotation
pdfViewer.MeasurementSettings.ScaleRatio = ?1in = 2ft?;

{% endhighlight %}
{% endtabs %}

## How to get or set a value that indicates whether the existing measurement values should be updated when the scale ratio is changed.

You can get and set a value that indicates whether the existing measurement values should be updated when the scale ratio is changed using the [`SfPdfViewer.MeasurementSettings.ShouldUpdateScaleMeasureValue`](https://help.syncfusion.com/cr/xamarin-ios/Syncfusion.SfPdfViewer.iOS~Syncfusion.SfPdfViewer.iOS.MeasurementSettings~ShouldUpdateScaleMeasureValue.html) property. Refer to the following code example

{% tabs %}
{% highlight c# %}

//Initialize the SfPdfViewer
SfPdfViewer pdfViewer = new SfPdfViewer(); 

//Setting the value to update the scale ratio for the existing measurement annotation
pdfViewer.MeasurementSettings.ShouldUpdateScaleMeasureValue = true;

{% endhighlight %}
{% endtabs %}

## How to enable or disable measurement annotation interaction

The interaction operation can be enabled or disabled for the measurement annotation alone by setting the [`SfPdfViewer.MeasurementSettings.Area.IsLocked`](https://help.syncfusion.com/cr/cref_files/xamarin-ios/Syncfusion.SfPdfViewer.iOS~Syncfusion.SfPdfViewer.iOS.AreaAnnotation~IsLocked.html) API to false or true respectively.

For example, the following code disables the interaction operations for all measurement annotations in the PDF. But, the other annotation types can be selected, moved, resized, or removed.

{% tabs %}
{% highlight c# %}

//Disable the area annotation interaction
pdfViewerControl.MeasurementSettings.Area.IsLocked = true;

//Disable the perimeter annotation interaction
pdfViewerControl.MeasurementSettings.Perimeter.IsLocked = true;

//Disable the volume annotation interaction
pdfViewerControl.MeasurementSettings.Volume.IsLocked = true;

//Disable the distance annotation interaction
pdfViewerControl.MeasurementSettings.Distance.IsLocked = true;

{% endhighlight %}
{% endtabs %}

The interaction with the measurement annotation types will be allowed only if the [`SfPdfViewer.AnnotationSettings.IsLocked`](https://help.syncfusion.com/cr/xamarin-ios/Syncfusion.SfPdfViewer.iOS~Syncfusion.SfPdfViewer.iOS.AnnotationSettings~IsLocked.html) API is set to false. The following code does not allow the interactions with measurement annotations, although the IsLocked property of the measurement annotation is set to false.

{% tabs %}
{% highlight c# %}

//Disables the measurement annotation interaction, though its 'IsLocked' property is set to ?false?
 pdfViewerControl.AnnotationSettings.IsLocked = true;
 
//Disable the area annotation interaction
pdfViewerControl.MeasurementSettings.Area.IsLocked = false;

//Disable the perimeter annotation interaction
pdfViewerControl.MeasurementSettings.Perimeter.IsLocked = false;

//Disable the volume annotation interaction
pdfViewerControl.MeasurementSettings.Volume.IsLocked = false;

//Disable the distance annotation interaction
pdfViewerControl.MeasurementSettings.Distance.IsLocked = false;

{% endhighlight %}
{% endtabs %}

## How to get the list of Annotations that overlaps the selected measurement Annotation

You can retrieve the list of annotations that overlaps the selected measurement annotation from the [`ShapeAnnotationSelectedEventArgs`](https://help.syncfusion.com/cr/xamarin-ios/Syncfusion.SfPdfViewer.iOS~Syncfusion.SfPdfViewer.iOS.ShapeAnnotationSelectedEventArgs.html) parameter of the [`ShapeAnnotationSelected`](https://help.syncfusion.com/cr/cref_files/xamarin-ios/Syncfusion.SfPdfViewer.iOS~Syncfusion.SfPdfViewer.iOS.SfPdfViewer~ShapeAnnotationSelected_EV.html) event handler.

{% tabs %}
{% highlight c# %}

//Initialize the SfPdfViewer
SfPdfViewer pdfViewer = new SfPdfViewer();

//Wire up the ShapeAnnotationSelected event
pdfViewer.ShapeAnnotationSelected += PdfViewer_ShapeAnnotationSelected;

private void PdfViewer_ShapeAnnotationSelected(object sender, ShapeAnnotationSelectedEventArgs args)
        {
            //Gets the list of Annotations that overlap the selected Annotation
            System.Collections.Generic.List<IAnnotation> overlappedAnnotation = args.OverlappedAnnotations;
        }

{% endhighlight %}
{% endtabs %}
