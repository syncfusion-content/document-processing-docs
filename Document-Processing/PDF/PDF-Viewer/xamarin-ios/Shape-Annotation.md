---
layout: post
title:  Add & modify shapes using PDF viewer Xamarin.iOS | Syncfusion
description: PDF viewer Xamarin.iOS allows user to add, move and delete shapes such as line, rectangle & ellipse PDF document
platform: document-processing
control: SfPdfViewer
documentation: ug
---

# Working with Shape Annotations

Shape Annotations are used to add annotations in the form of shapes such as rectangle, ellipse, horizontal line, and vertical line at the specific area of interest. PDF viewer allows you to include shape annotations in a PDF document and provides options to modify or remove the existing shape annotations. The supported shape annotations are: 

1. Rectangle
2. Circle
3. Line
4. Arrow
5. Polygon
6. Cloud

## Adding shape annotations using toolbar

### Enabling the shape annotation mode

Set the [`AnnotationMode`](https://help.syncfusion.com/cr/xamarin-ios/Syncfusion.SfPdfViewer.iOS~Syncfusion.SfPdfViewer.iOS.SfPdfViewer~AnnotationMode.html) of the PDF Viewer to any of the shape annotations to enable it. Once the shape annotation mode is set, zooming, panning, and scrolling will be disabled. A shape annotation can be drawn only on the currently visible pages. Refer to the following code.

{% tabs %}
{% highlight c# %}

//Initialize the SfPdfViewer
SfPdfViewer pdfViewer = new SfPdfViewer(); 

//Setting the annotation mode to Rectangle
pdfViewer.AnnotationMode = AnnotationMode.Rectangle;

{% endhighlight %}
{% endtabs %}

### Disabling shape annotation mode

Set the [`AnnotationMode`](https://help.syncfusion.com/cr/xamarin-ios/Syncfusion.SfPdfViewer.iOS~Syncfusion.SfPdfViewer.iOS.SfPdfViewer~AnnotationMode.html) of the PDF Viewer to `None` to disable the shape annotation mode. When the shape annotation mode is disabled, zooming, panning, and scrolling will be enabled again.

{% tabs %}
{% highlight c# %}

//Initialize the SfPdfViewer
SfPdfViewer pdfViewer = new SfPdfViewer(); 

//Setting the annotation mode to None
pdfViewer.AnnotationMode = AnnotationMode.None;

{% endhighlight %}
{% endtabs %}

### Detecting the inclusion of shape annotations

The [`ShapeAnnotationAdded`](https://help.syncfusion.com/cr/xamarin-ios/Syncfusion.SfPdfViewer.iOS~Syncfusion.SfPdfViewer.iOS.SfPdfViewer~ShapeAnnotationAdded_EV.html) event will be raised when a shape annotation is added to the PDF. The properties of the added shape annotation can be retrieved from the [`ShapeAnnotationAddedEventArgs`](https://help.syncfusion.com/cr/xamarin-ios/Syncfusion.SfPdfViewer.iOS~Syncfusion.SfPdfViewer.iOS.ShapeAnnotationAddedEventArgs.html) parameter of the event handler. 

{% tabs %}
{% highlight c# %}

//Initialize the SfPdfViewer
SfPdfViewer pdfViewer = new SfPdfViewer(); 

//Wire up the ShapeAnnotionAdded Event
pdfViewer.ShapeAnnotationAdded += PdfViewer_ShapeAnnotationAdded;

{% endhighlight %}
{% endtabs %}

The following code shows how to retrieve the properties of the added shape annotation.

{% tabs %}
{% highlight c# %}

private void PdfViewer_ShapeAnnotationAdded(object sender, ShapeAnnotationAddedEventArgs args)
        {
            //Get the added shape annotation type
            AnnotationMode annotationMode = args.AnnotationType;

            //Get the bounds of the added shape annotation
            CGRect bounds = args.Bounds;

            //Get the page number in which the added shape annotation is present
            int pageNumber = args.PageNumber;

            //Get the data points of the added shape annotation
            List<CGPoint> dataPoints = args.DataPoints;

            //Get the opacity value of the added shape annotation
            nfloat opacity = args.Opacity;            

            //Get the position of the added shape annotation within the page
            CGPoint position = args.Position;

            //Get the stroke color of the added shape annotation 
            UIColor strokeColor = args.StrokeColor;

            //Get the thickness of the added shape annotation
            float thickness = args.Thickness;

        }

{% endhighlight %}
{% endtabs %}

## Adding the shape annotations programmatically 

By `AddAnnotation` method, You can add the shape annotations programmatically. The created shape annotation object passed as a parameter. The `ShapeAnnotation` instance acquires the `ShapeAnnotationType`, page number and bounds as the parameters. 

The following code sample illustrates the adding of rectangle annotation programmatically. 

{% tabs %}
{% highlight c# %}

//Bounds in which the rectangle shape annotation should be added
Rectangle bounds = new Rectangle(100, 100, 200, 200);

//Creates a new rectangle shape annotation
ShapeAnnotation shapeAnnotation = new ShapeAnnotation(ShapeAnnotationType.Rectangle, 1, rectangle);         

//Sets the stroke color for the rectangle shape annotation 
shapeAnnotation.Settings.StrokeColor = Color.Red;

//Add the rectangle shape annotation to the specified page
pdfViewer.AddAnnotation(shapeAnnotation);

{% endhighlight %}
{% endtabs %}

N> For the purpose of illustration, we have only provided the code example for adding rectangle annotation. But the same procedure can be followed for adding other shape annotations too.

## How to draw a cloud shape annotation?

To draw a cloud shape annotation, you should set the `BorderEffect` property of the shape annotation settings to `BorderEffect.Cloudy`. Only the rectangle and polygon annotations can be drawn with cloud border style. The following sample code illustrates how to draw a rectangle annotation with the cloud border style.

{% tabs %}
{% highlight c# %}

SfPdfViewer pdfViewer = new SfPdfViewer();

pdfViewer.AnnotationMode = AnnotationMode.Rectangle;

pdfViewer.AnnotationSettings.Rectangle.Settings.BorderEffect = BorderEffect.Cloudy;

{% endhighlight %}
{% endtabs %}

N> The value of `BorderEffect` property will does not affect other shape annotations such as circle, line, and arrow annotations. For complex cloud polygons, the cloud border-style appearance might differ from other PDF readers like Adobe.

## Detecting tap on shape annotations

Tapping a shape annotation selects it or deselects it if it is already selected. The [`ShapeAnnotationTapped`](https://help.syncfusion.com/cr/xamarin-ios/Syncfusion.SfPdfViewer.iOS~Syncfusion.SfPdfViewer.iOS.SfPdfViewer~ShapeAnnotationTapped_EV.html) event is raised when a shape annotation is tapped. The properties of the tapped shape annotation can be retrieved from the [`ShapeAnnotationTappedEventArgs`](https://help.syncfusion.com/cr/xamarin-ios/Syncfusion.SfPdfViewer.iOS~Syncfusion.SfPdfViewer.iOS.ShapeAnnotationTappedEventArgs_members.html) parameter of the event handler. 

{% tabs %}
{% highlight c# %}

//Initialize the SfPdfViewer
SfPdfViewer pdfViewer = new SfPdfViewer(); 

//Wire up the ShapeAnnotionTapped event
pdfViewer.ShapeAnnotationTapped += PdfViewer_ShapeAnnotationTapped;

{% endhighlight %}
{% endtabs %}

The following code shows how to retrieve the properties of the tapped shape annotation.

{% tabs %}
{% highlight c# %}

private void PdfViewer_ShapeAnnotationTapped(object sender, ShapeAnnotationTappedEventArgs args)
        {
            //Get the tapped shape annotation type
            AnnotationMode annotationMode = args.AnnotationType;

            //Get the bounds of the tapped shape annotation
            CGRect bounds = args.Bounds;

            //Get the page number in which the tapped shape annotation is present
            int pageNumber = args.PageNumber;

            //Get the data points of the tapped shape annotation
            List<CGPoint> dataPoints = args.DataPoints;

            //Get the opacity value of the tapped shape annotation
            nfloat opacity = args.Opacity;

            //Get the position of the tapped shape annotation within the page
            CGPoint position = args.Position;

            //Get the stroke color of the tapped shape annotation 
            UIColor strokeColor = args.StrokeColor;

            //Get the thickness of the tapped shape annotation
            float thickness = args.Thickness;
        }

{% endhighlight %}
{% endtabs %}


## Selecting Shape annotations

You can select a shape annotation by tapping it. When a shape annotation is selected, the [`ShapeAnnotationSelected`](https://help.syncfusion.com/cr/xamarin-ios/Syncfusion.SfPdfViewer.iOS.SfPdfViewer.html#Syncfusion_SfPdfViewer_iOS_SfPdfViewer_ShapeAnnotationSelected) event will be raised. The properties of the selected shape annotation can be retrieved from the [`ShapeAnnotationSelectedEventArgs`](https://help.syncfusion.com/cr/xamarin-ios/Syncfusion.SfPdfViewer.iOS.ShapeAnnotationSelectedEventArgs.html) parameter of the event handler.  

{% tabs %}
{% highlight c# %}

//Initialize the SfPdfViewer
SfPdfViewer pdfViewer = new SfPdfViewer();

//Wire up the ShapeAnnotionSelected event
pdfViewer.ShapeAnnotationSelected += PdfViewer_ShapeAnnotationSelected;

{% endhighlight %}
{% endtabs %}

The following code shows how to retrieve the properties of the selected shape annotation.

{% tabs %}
{% highlight c# %}

private void PdfViewer_ShapeAnnotationSelected(object sender, ShapeAnnotationSelectedEventArgs args)
{
//Get the selected shape annotation type
AnnotationMode annotationMode = args.AnnotationType;

//Get the bounds of the selected shape annotation
CGRect bounds = args.Bounds;

//Get the page number in which the selected shape annotation is present
int pageNumber = args.PageNumber;

//Get the list of other annotations that overlap the selected annotation
System.Collections.Generic.List<IAnnotation> overlappedAnnotation = args.OverlappedAnnotations;
}

{% endhighlight %}
{% endtabs %}

### Selecting shape annotation programmatically

By `SelectAnnotation` method, You can select the shape annotation programmatically. The specified shape annotation object passed as a parameter.

The following code sample illustrates the same.

{% tabs %}
{% highlight c# %}

//Selects the specified shape annotation
pdfViewer.SelectAnnotation(shapeAnnotation);

{% endhighlight %}
{% endtabs %}

N> Once `SelectAnnotation` method is called and as long as the annotation stays selected, the `SelectedAnnotation` property will return the same instance as the parameter of this method.

## Deselecting Shape annotations

You can deselect a selected shape annotation by tapping on it or somewhere else on the PDF page. Deselection can be detected using the [`ShapeAnnotationDeselected`](https://help.syncfusion.com/cr/xamarin-ios/Syncfusion.SfPdfViewer.iOS.SfPdfViewer.html#Syncfusion_SfPdfViewer_iOS_SfPdfViewer_ShapeAnnotationDeselected) event. The properties of the deselected shape annotation can be retrieved from the [`ShapeAnnotationDeselectedEventArgs`](https://help.syncfusion.com/cr/xamarin-ios/Syncfusion.SfPdfViewer.iOS.ShapeAnnotationDeselectedEventArgs.html) parameter of the event handler. 

{% tabs %}
{% highlight c# %}

//Initialize the SfPdfViewer
SfPdfViewer pdfViewer = new SfPdfViewer(); 

//Wire up the ShapeAnnotionDeselected event
pdfViewer.ShapeAnnotationDeselected = PdfViewer_ShapeAnnotationDeselected;

{% endhighlight %}
{% endtabs %}

The following code shows how to retrieve the properties of the deselected shape annotation.

{% tabs %}
{% highlight c# %}

private void PdfViewer_ShapeAnnotationDeselected(object sender, ShapeAnnotationDeselectedEventArgs args) 
{ 
//Get the deselected shape annotation type
AnnotationMode annotationType = args.AnnotationType; 

//Retrieves the bounds of the deselected shape annotation. 
CGRect bounds = args.Bounds; 

//Retrieves the page number where the deselected shape annotation resides. 
int page = args.PageNumber; 
}

{% endhighlight %}
{% endtabs %}

### Deselecting shape annotation programmatically

By `DeselectAnnotation` method, You can deselect the shape annotation programmatically. The specified shape annotation object passed as a parameter. 

The following code sample illustrates the same.

{% tabs %}
{% highlight c# %}

//Deselects the specified shape annotation
pdfViewer.DeselectAnnotation(shapeAnnotation);

{% endhighlight %}
{% endtabs %}

N> Calling `DeselectAnnotation` method has no effect if the given annotation is not selected. The `SelectedAnnotation` property will return null until any other annotation gets selected.

## Moving or resizing the selected shape annotation

To move or resize a shape annotation it should first be selected. After the appearance of the selector, tapping and dragging anywhere inside the selector will move the shape annotation. Tapping on the bubbles around the selector and dragging would resize the shape annotation. 

### Detecting the move or resize of a shape Annotation

The [`AnnotationMovedOrResized`](https://help.syncfusion.com/cr/xamarin-ios/Syncfusion.SfPdfViewer.iOS.SfPdfViewer.html#Syncfusion_SfPdfViewer_iOS_SfPdfViewer_AnnotationMovedOrResized) event will be raised when you move or resize the selected annotation. The properties of the moved or re-sized shape annotation can be retrieved from the [`AnnotationMovedOrResizedEventArgs`](https://help.syncfusion.com/cr/xamarin-ios/Syncfusion.SfPdfViewer.iOS.AnnotationMovedOrResizedEventArgs.html) parameter of the event handler. 

{% tabs %}
{% highlight c# %}

//Initialize the SfPdfViewer
SfPdfViewer pdfViewer = new SfPdfViewer(); 

//Wire up the AnnotationMovedOrResized event
pdfViewer.AnnotationMovedOrResized = PdfViewer_AnnotationMovedOrResized;

{% endhighlight %}
{% endtabs %}

The following code shows how to retrieve the properties of the moved or re-sized shape annotation.

{% tabs %}
{% highlight c# %}

private void PdfViewer_AnnotationMovedOrResized(object sender, AnnotationMovedOrResizedEventArgs args)
        {
            //Determine whether the moved or resized annotation is a shape annotation or some other annotation. 
            if (sender as ShapeAnnotation != null)
            {
                //The annotation is a shape annotation 
            }
            else
            {
                //The annotation is not a shape annotation
            }

            //Retrieve the old bounds of the shape annotation 
            CGRect oldBounds = args.OldBounds;

            //Retrieve the new bounds of the shape annotation 
            CGRect newBounds = args.NewBounds;

            //Get the page number in which the shape annotation is moved or re-sized            
            int pageNumber = args.PageNumber;

            //Get the opacity value of the shape annotation            
            nfloat opacity = args.Opacity;

            //Get the color of the shape annotation
            UIColor color = args.Color;

            //Get the thickness of the shape annotation
            float thickness = args.Thickness;
        }

{% endhighlight %}
{% endtabs %}

## Deleting the shape annotations

The PDF Viewer allows you to remove a selected annotation or all the annotations in the PDF document.

### Removing a selected annotation

The following code sample shows how to remove the selected shape annotation from the PDF document.

{% tabs %}
{% highlight c# %}

ShapeAnnotation shapeAnnotation;
private void PdfViewer_ShapeAnnotationSelected(object sender, ShapeAnnotationSelectedEventArgs args)
        {
            //Cast the sender object as shape annotation. 
            shapeAnnotation = sender as ShapeAnnotation;
        }

private void deleteShapeAnnotationButton_Clicked(object sender, EventArgs e)
        {
            //Delete the shape annotation 
            pdfViewer.RemoveAnnotation(shapeAnnotation);
        }
{% endhighlight %}
{% endtabs %}

## Detecting the removal of a shape Annotation

The [`ShapeAnnotationRemoved`](https://help.syncfusion.com/cr/xamarin-ios/Syncfusion.SfPdfViewer.iOS.SfPdfViewer.html#Syncfusion_SfPdfViewer_iOS_SfPdfViewer_ShapeAnnotationRemoved) event will be raised when a shape annotation is removed from the PDF. The properties of the removed shape annotation can be retrieved from the [`ShapeAnnotationRemovedEventArgs`](https://help.syncfusion.com/cr/xamarin-ios/Syncfusion.SfPdfViewer.iOS.ShapeAnnotationRemovedEventArgs.html) parameter of the event handler. 

{% tabs %}
{% highlight c# %}

//Initialize the SfPdfViewer
SfPdfViewer pdfViewer = new SfPdfViewer(); 

//Wire up the ShapeAnnotionRemoved Event
pdfViewer.ShapeAnnotationRemoved = PdfViewer_ShapeAnnotationRemoved;

{% endhighlight %}
{% endtabs %}

The following code shows how to retrieve the properties of the removed shape annotation.

{% tabs %}
{% highlight c# %}

private void PdfViewerControl_ShapeAnnotationRemoved(object sender, ShapeAnnotationRemovedEventArgs args)
        {
            //Get the removed shape annotation type
            AnnotationMode annotationMode = args.AnnotationType;

            //Get the bounds of the removed shape annotation
            CGRect bounds = args.Bounds;

            //Get the data points of the removed shape annotation
            List<CGPoint> dataPoints = args.DataPoints;

            //Get the page number in which the removed shape annotation was present
            int pageNumber = args.PageNumber; 
        }

{% endhighlight %}
{% endtabs %}

## Customizing the appearance of shape annotations

You can customize the default values of [`stroke color`](https://help.syncfusion.com/cr/xamarin-ios/Syncfusion.SfPdfViewer.iOS.ShapeAnnotationSettings.html#Syncfusion_SfPdfViewer_iOS_ShapeAnnotationSettings_StrokeColor), [`opacity`](https://help.syncfusion.com/cr/xamarin-ios/Syncfusion.SfPdfViewer.iOS.ShapeAnnotationSettings.html#Syncfusion_SfPdfViewer_iOS_ShapeAnnotationSettings_Opacity), [`maximum height`](https://help.syncfusion.com/cr/xamarin-ios/Syncfusion.SfPdfViewer.iOS.ShapeAnnotationSettings.html#Syncfusion_SfPdfViewer_iOS_ShapeAnnotationSettings_MaximumHeight), [`minimum height`](https://help.syncfusion.com/cr/xamarin-ios/Syncfusion.SfPdfViewer.iOS.ShapeAnnotationSettings.html#Syncfusion_SfPdfViewer_iOS_ShapeAnnotationSettings_MinimumHeight), [`maximum width`](https://help.syncfusion.com/cr/xamarin-ios/Syncfusion.SfPdfViewer.iOS.ShapeAnnotationSettings.html#Syncfusion_SfPdfViewer_iOS_ShapeAnnotationSettings_MaximumWidth), [`minimum width`](https://help.syncfusion.com/cr/xamarin-ios/Syncfusion.SfPdfViewer.iOS.ShapeAnnotationSettings.html#Syncfusion_SfPdfViewer_iOS_ShapeAnnotationSettings_MinimumWidth), [`display text`](https://help.syncfusion.com/cr/xamarin-ios/Syncfusion.SfPdfViewer.iOS.ShapeAnnotationSettings.html#Syncfusion_SfPdfViewer_iOS_ShapeAnnotationSettings_Text), [`text background color`](https://help.syncfusion.com/cr/xamarin-ios/Syncfusion.SfPdfViewer.iOS.ShapeAnnotationSettings.html#Syncfusion_SfPdfViewer_iOS_ShapeAnnotationSettings_TextBackgroundColor), [`text color`](https://help.syncfusion.com/cr/xamarin-ios/Syncfusion.SfPdfViewer.iOS.ShapeAnnotationSettings.html#Syncfusion_SfPdfViewer_iOS_ShapeAnnotationSettings_TextColor), [`text opacity`](https://help.syncfusion.com/cr/xamarin-ios/Syncfusion.SfPdfViewer.iOS.ShapeAnnotationSettings.html#Syncfusion_SfPdfViewer_iOS_ShapeAnnotationSettings_TextOpacity), [`text size`](https://help.syncfusion.com/cr/xamarin-ios/Syncfusion.SfPdfViewer.iOS.ShapeAnnotationSettings.html#Syncfusion_SfPdfViewer_iOS_ShapeAnnotationSettings_TextSize), [`interaction (locked)`](https://help.syncfusion.com/cr/xamarin-ios/Syncfusion.SfPdfViewer.iOS.AnnotationSettings.html#Syncfusion_SfPdfViewer_iOS_AnnotationSettings_IsLocked), [`thickness`](https://help.syncfusion.com/cr/xamarin-ios/Syncfusion.SfPdfViewer.iOS.ShapeAnnotationSettings.html#Syncfusion_SfPdfViewer_iOS_ShapeAnnotationSettings_Thickness), [`fill color`](https://help.syncfusion.com/cr/xamarin-ios/Syncfusion.SfPdfViewer.iOS.ShapeAnnotationSettings.html#Syncfusion_SfPdfViewer_iOS_ShapeAnnotationSettings_FillColor), `minimum size` and `minimum length` of the shape annotations that are to be added. 

N>This will not affect the shape annotations that were already added. The following properties are common to all the shape annotations. In all code samples, the Rectangle shape annotation is used for illustration purposes. 

### Setting the default stroke color

You can set the default stroke color for the shape annotations by using the [`StrokeColor`](https://help.syncfusion.com/cr/xamarin-ios/Syncfusion.SfPdfViewer.iOS.ShapeAnnotationSettings.html#Syncfusion_SfPdfViewer_iOS_ShapeAnnotationSettings_StrokeColor) property. Refer to the following code example

{% tabs %}
{% highlight c# %}

//Initialize the SfPdfViewer
SfPdfViewer pdfViewer = new SfPdfViewer(); 

//Setting the stroke color for rectangle shape annotation
pdfViewer.AnnotationSettings.Rectangle.Settings.StrokeColor = UIColor.Red;

{% endhighlight %}
{% endtabs %}

### Setting the default opacity

You can set the default opacity for the shape annotations by using the [`Opacity`](https://help.syncfusion.com/cr/xamarin-ios/Syncfusion.SfPdfViewer.iOS.ShapeAnnotationSettings.html#Syncfusion_SfPdfViewer_iOS_ShapeAnnotationSettings_Opacity) property. The opacity value ranges from 0 to 1. Refer to the following code example.

{% tabs %}
{% highlight c# %}

//Initialize the SfPdfViewer
SfPdfViewer pdfViewer = new SfPdfViewer(); 

//Setting the opacity for rectangle shape annotation
pdfViewer.AnnotationSettings.Rectangle.Settings.Opacity = 0.5f;

{% endhighlight %}
{% endtabs %}

### Setting the default fill color

You can set the default fill color for the shape annotations by using the [`FillColor`](https://help.syncfusion.com/cr/xamarin-ios/Syncfusion.SfPdfViewer.iOS.ShapeAnnotationSettings.html#Syncfusion_SfPdfViewer_iOS_ShapeAnnotationSettings_FillColor) property. Refer to the following code example.

{% tabs %}
{% highlight c# %}

//Initialize the SfPdfViewer
SfPdfViewer pdfViewer = new SfPdfViewer(); 

//Setting the fill color for rectangle shape annotation
pdfViewer.AnnotationSettings.Rectangle.Settings.FillColor = UIColor.Blue;

{% endhighlight %}
{% endtabs %}

### Setting the default thickness

You can set the thickness for the shape annotations by using the [`Thickness`](https://help.syncfusion.com/cr/xamarin-ios/Syncfusion.SfPdfViewer.iOS.ShapeAnnotationSettings.html#Syncfusion_SfPdfViewer_iOS_ShapeAnnotationSettings_Thickness) property. Refer to the following code example.

{% tabs %}
{% highlight c# %}

//Initialize the SfPdfViewer
SfPdfViewer pdfViewer = new SfPdfViewer(); 

//Setting thickness for the rectangle shape annotation
pdfViewer.AnnotationSettings.Rectangle.Settings.Thickness = 5;

{% endhighlight %}
{% endtabs %}

### Setting the default text

You can set the text for the shape annotations by using the [`Text`](https://help.syncfusion.com/cr/xamarin-ios/Syncfusion.SfPdfViewer.iOS.ShapeAnnotationSettings.html#Syncfusion_SfPdfViewer_iOS_ShapeAnnotationSettings_Text) property. Refer to the following code example.

{% tabs %}
{% highlight c# %}

//Initialize the SfPdfViewer
SfPdfViewer pdfViewer = new SfPdfViewer(); 

//Setting the text for rectangle shape annotation
pdfViewer.AnnotationSettings.Rectangle.Settings.Text = "Area";

{% endhighlight %}
{% endtabs %}

### Setting the default text background color

You can set the background color for the text assigned to the shape annotations by using the [`TextBackgroundColor`](https://help.syncfusion.com/cr/xamarin-ios/Syncfusion.SfPdfViewer.iOS.ShapeAnnotationSettings.html#Syncfusion_SfPdfViewer_iOS_ShapeAnnotationSettings_TextBackgroundColor) property. Refer to the following code example.

{% tabs %}
{% highlight c# %}

//Initialize the SfPdfViewer
SfPdfViewer pdfViewer = new SfPdfViewer(); 

//Setting the text background color for rectangle shape annotation
pdfViewer.AnnotationSettings.Rectangle.Settings.TextBackgroundColor = UIColor.Black;

{% endhighlight %}
{% endtabs %}

### Setting the default text color

You can set the color for the text assigned to the shape annotations by using the [`TextColor`](https://help.syncfusion.com/cr/xamarin-ios/Syncfusion.SfPdfViewer.iOS.ShapeAnnotationSettings.html#Syncfusion_SfPdfViewer_iOS_ShapeAnnotationSettings_TextColor) property. Refer to the following code example.

{% tabs %}
{% highlight c# %}

//Initialize the SfPdfViewer
SfPdfViewer pdfViewer = new SfPdfViewer(); 

//Setting the text color for rectangle shape annotation
pdfViewer.AnnotationSettings.Rectangle.Settings.TextColor = UIColor.Black;

{% endhighlight %}
{% endtabs %}

### Setting the default text opacity

You can set the opacity for the text assigned to the shape annotations by using the [`TextOpacity`](https://help.syncfusion.com/cr/xamarin-ios/Syncfusion.SfPdfViewer.iOS.ShapeAnnotationSettings.html#Syncfusion_SfPdfViewer_iOS_ShapeAnnotationSettings_TextOpacity) property. Refer to the following code example.

{% tabs %}
{% highlight c# %}

//Initialize the SfPdfViewer
SfPdfViewer pdfViewer = new SfPdfViewer(); 

//Setting the text opacity for rectangle shape annotation
pdfViewer.AnnotationSettings.Rectangle.Settings.TextOpacity = 0.5f;

{% endhighlight %}
{% endtabs %}

### Setting the default text size

You can set the size for the text assigned to the shape annotations by using the [`TextSize`](https://help.syncfusion.com/cr/xamarin-ios/Syncfusion.SfPdfViewer.iOS.ShapeAnnotationSettings.html#Syncfusion_SfPdfViewer_iOS_ShapeAnnotationSettings_TextSize) property. Refer to the following code example.

{% tabs %}
{% highlight c# %}

//Initialize the SfPdfViewer
SfPdfViewer pdfViewer = new SfPdfViewer(); 

//Setting the text opacity for rectangle shape annotation
pdfViewer.AnnotationSettings.Rectangle.Settings.TextOpacity = 0.5f;

{% endhighlight %}
{% endtabs %}

### Setting the default minimum size and minimum length

By the `MinimumSize` property, You can set the minimum size to which the rectangle and circle shape annotations could be resized. 

By the `MinimumLength` property, You can set the minimum length to which the annotations could be resized for line and arrow.

Refer the following code example:

{% tabs %}
{% highlight c# %}

//Sets the minimum size for the rectangle annotations
pdfViewer.AnnotationSettings.Rectangle.Settings.MinimumSize = new CGSize(10, 10);

//Sets the minimum size for the circle annotations
pdfViewer.AnnotationSettings.Circle.Settings.MinimumSize = new CGSize(10, 10);

//Sets the minimum length for the line annotations
pdfViewer.AnnotationSettings.Line.Settings.MinimumLength = 10;

//Sets the minimum length for the arrow annotations
pdfViewer.AnnotationSettings.Arrow.Settings.MinimumLength = 10;

{% endhighlight %}
{% endtabs %}

N> The value of `MinimumSize` property will does not affect line, arrow, and polygon annotations. Also, the value of `MinimumLength` property will does not affect rectangle, circle, and polygon annotations.

### Setting the default border style

You can set the border style for the rectangle and polygon annotations using the `BorderEffect` property.  

Refer the following code example:

{% tabs %}
{% highlight c# %}

//Sets the cloud border style for rectangle annotation
pdfViewer.AnnotationSettings.Rectangle.Settings.BorderEffect = BorderEffect.Cloudy;

//Sets the cloud border style for polygon annotation 
pdfViewer.AnnotationSettings.Polygon.Settings.BorderEffect = BorderEffect.Cloudy;

{% endhighlight %}
{% endtabs %}

N> The value of `BorderEffect` property will does not affect other shape annotations such as circle, line, and arrow annotations. 

### Setting the default minimum height

You can set the minimum height for the shape annotations by using the [`MinimumHeight`](https://help.syncfusion.com/cr/xamarin-ios/Syncfusion.SfPdfViewer.iOS.ShapeAnnotationSettings.html#Syncfusion_SfPdfViewer_iOS_ShapeAnnotationSettings_MaximumHeight) property. Refer to the following code example.

{% tabs %}
{% highlight c# %}

//Initialize the SfPdfViewer
SfPdfViewer pdfViewer = new SfPdfViewer(); 

//Setting the minimum height for rectangle shape annotation
pdfViewer.AnnotationSettings.Rectangle.Settings.MinimumHeight = 20;

{% endhighlight %}
{% endtabs %}

N> The [MinimumHeight]( https://help.syncfusion.com/cr/xamarin-ios/Syncfusion.SfPdfViewer.iOS.ShapeAnnotationSettings.html#Syncfusion_SfPdfViewer_iOS_ShapeAnnotationSettings_MinimumHeight) property have been marked as obsolete. Use the `MinimumSize` and `MinimumLength` properties instead.

### Setting the default minimum width

You can set the minimum width for the shape annotations by using the [`MinimumWidth`](https://help.syncfusion.com/cr/xamarin-ios/Syncfusion.SfPdfViewer.iOS.ShapeAnnotationSettings.html#Syncfusion_SfPdfViewer_iOS_ShapeAnnotationSettings_MinimumWidth) property. Refer to the following code example. 

{% tabs %}
{% highlight c# %}

//Initialize the SfPdfViewer
SfPdfViewer pdfViewer = new SfPdfViewer(); 

//Setting the minimum width for rectangle shape annotation
pdfViewer.AnnotationSettings.Rectangle.Settings.MinimumWidth = 20;

{% endhighlight %}
{% endtabs %}

N> The [MinimumWidth](https://help.syncfusion.com/cr/xamarin-ios/Syncfusion.SfPdfViewer.iOS.ShapeAnnotationSettings.html#Syncfusion_SfPdfViewer_iOS_ShapeAnnotationSettings_MinimumWidth) property have been marked as obsolete. Use the `MinimumSize` and `MinimumLength` properties instead.

### Setting the default maximum height

You can set the maximum height for the shape annotations by using the [`MaximumHeight`](https://help.syncfusion.com/cr/xamarin-ios/Syncfusion.SfPdfViewer.iOS.ShapeAnnotationSettings.html#Syncfusion_SfPdfViewer_iOS_ShapeAnnotationSettings_MaximumHeight) property. Refer to the following code example. 

{% tabs %}
{% highlight c# %}

//Initialize the SfPdfViewer
SfPdfViewer pdfViewer = new SfPdfViewer(); 

//Setting the maximum height for rectangle shape annotation
pdfViewer.AnnotationSettings.Rectangle.Settings.MaximumHeight = 60;

{% endhighlight %}
{% endtabs %}

### Setting the default maximum width

You can set the maximum width for the shape annotations by using the [`MaximumWidth`](https://help.syncfusion.com/cr/xamarin-ios/Syncfusion.SfPdfViewer.iOS.ShapeAnnotationSettings.html#Syncfusion_SfPdfViewer_iOS_ShapeAnnotationSettings_MaximumWidth) property. Refer to the following code example. 

{% tabs %}
{% highlight c# %}

//Initialize the SfPdfViewer
SfPdfViewer pdfViewer = new SfPdfViewer(); 

//Setting the minimum width for rectangle shape annotation
pdfViewer.AnnotationSettings.Rectangle.Settings.MinimumWidth = 20;

{% endhighlight %}
{% endtabs %}

### Changing the properties of a selected shape annotation

You can change the properties of the selected annotation by casting the sender parameter of the [`ShapeAnnotationSelected`](https://help.syncfusion.com/cr/xamarin-ios/Syncfusion.SfPdfViewer.iOS.SfPdfViewer.html#Syncfusion_SfPdfViewer_iOS_SfPdfViewer_ShapeAnnotationSelected) event handler to ShapeAnnotation and modifying its properties. The following code shows how to change the properties.

{% tabs %}
{% highlight c# %}

//Initialize the SfPdfViewer
SfPdfViewer pdfViewer = new SfPdfViewer(); 

//Wire up the ShapeAnnotionRemoved Event
pdfViewer.ShapeAnnotationSelected = PdfViewer_ShapeAnnotationSelected;

 private void PdfViewer_ShapeAnnotationSelected(object sender, ShapeAnnotationSelectedEventArgs args)
        {
            //Get the type of the annotation. Here, it is a rectangle.
            AnnotationMode annotationMode = args.AnnotationType;

            //Cast the sender object as shape annotation. 
            ShapeAnnotation selectedShapeAnnotation = sender as ShapeAnnotation;

            //Set the stroke color of the selected annotation using the shape annotation settings. 
            selectedShapeAnnotation.Settings.StrokeColor = UIColor.Blue;

            //Set the opacity of the selected annotation using the shape annotation settings. 
            selectedShapeAnnotation.Settings.Opacity = 0.3f;

            //Set the thickness of the selected annotation using the shape annotation settings. 
            selectedShapeAnnotation.Settings.Thickness = 3;

            //Set the fill color of the selected annotation using the shape annotation settings. 
            selectedShapeAnnotation.Settings.FillColor = UIColor.Red;

            //Set the minimum size for the selected annotation using the shape annotation settings.
            selectedShapeAnnotation.Settings.MinimumSize = new CGSize(20, 20);

            //Set the maximum width for the selected annotation using the shape annotation settings.
            selectedShapeAnnotation.Settings.MaximumWidth = 80;

            //Set the maximum height for the selected annotation using the shape annotation settings.
            selectedShapeAnnotation.Settings.MaximumHeight = 80;

            //Set the text for the selected annotation using the shape annotation settings.
            selectedShapeAnnotation.Settings.Text = "Rectangle";

            //Set the text background color for the selected annotation using the shape annotation settings.
            selectedShapeAnnotation.Settings.TextBackgroundColor = UIColor.Black;

            //Set the text color for the selected annotation using the shape annotation settings.
            selectedShapeAnnotation.Settings.TextColor = UIColor.Black;

            //Set the text opacity for the selected annotation using the shape annotation settings.
            selectedShapeAnnotation.Settings.TextOpacity = 0.5f;

            //Set the text size for the selected annotation using the shape annotation settings.
            selectedShapeAnnotation.Settings.TextSize = 12;
        }

{% endhighlight %}
{% endtabs %}

## How to lock or unlock the shape annotations?
 
To lock or unlock all the shape annotation, set the `IsLocked` API to `true` or `false` respectively, and the following sample explains the same. But other annotation types can be moved, resized, removed or their attributes can be changed. 

{% tabs %}
{% highlight c# %}

//Disable the arrow annotation interaction such as move, resize, remove, and attributes changes.
pdfViewerControl.AnnotationSettings.Arrow.Settings.IsLocked = true;
 
//Disable the line annotation interaction such as move, resize, remove, and attributes changes.
pdfViewerControl.AnnotationSettings.Line.Settings.IsLocked = true;
 
//Disable the rectangle annotation interaction such as move, resize, remove, and attributes changes.
pdfViewerControl.AnnotationSettings.Rectangle.Settings.IsLocked = true;
 
//Disable the circle annotation interaction such as move, resize, remove, and attributes changes.
pdfViewerControl.AnnotationSettings.Circle.Settings.IsLocked = true;
 
//Disable the polygon annotation interaction such as move, resize, remove, and attributes changes.
pdfViewerControl.AnnotationSettings.Polygon.Settings.IsLocked = true;

{% endhighlight %}
{% endtabs %}
 
Interactions with shape annotation types such as move, resize, remove or attribute changes will be allowed only if the `SfPdfViewer.AnnotationSettings.IsLocked` API is set to `false`. The following code prevents the unlocking of the shape annotations, although the `IsLocked` property of the shape annotation is set to `false`.
 
{% tabs %}
{% highlight c# %}

//Disable the shape annotation interaction, though its 'IsLocked' property is set to ‘false’ .
pdfViewerControl.AnnotationSettings.IsLocked = true;
pdfViewerControl.AnnotationSettings.Arrow.Settings.IsLocked = false;
pdfViewerControl.AnnotationSettings.Line.Settings.IsLocked = false;
pdfViewerControl.AnnotationSettings.Rectangle.Settings.IsLocked = false;
pdfViewerControl.AnnotationSettings.Circle.Settings.IsLocked = false;
pdfViewerControl.AnnotationSettings.Polygon.Settings.IsLocked = false;

{% endhighlight %}
{% endtabs %}

N> The `IsLocked` properties of the classes [RectangleAnnotation](https://help.syncfusion.com/cr/xamarin/Syncfusion.SfPdfViewer.XForms.RectangleAnnotation.html), [CircleAnnotation](https://help.syncfusion.com/cr/xamarin/Syncfusion.SfPdfViewer.XForms.CircleAnnotation.html), [LineAnnotation](https://help.syncfusion.com/cr/xamarin/Syncfusion.SfPdfViewer.XForms.LineAnnotation.html) and [ArrowAnnotation](https://help.syncfusion.com/cr/xamarin/Syncfusion.SfPdfViewer.XForms.ArrowAnnotation.html) have been marked as obsolete. Use the `RectangleAnnotation.Settings.IsLocked`, `CircleAnnotation.Settings.IsLocked`, `LineAnnotation.Settings.IsLocked` and `ArrowAnnotation.Settings.IsLocked` properties instead.

## How to enable or disable the shape annotation selection?

To enable or disable the shape annotation selection, set the `Constraints` API to `AnnotationConstraints.Selectable` or `~AnnotationConstraints.Selectable` respectively, and the following sample explains the same. But other annotation types can be selected, moved, resized, removed or their attributes can be changed. 

{% tabs %}
{% highlight c# %}

//Disable the selection of arrow annotations.
pdfViewerControl.AnnotationSettings.Arrow.Settings.Constraints = ~AnnotationConstraints.Selectable;
 
//Disable the selection of line annotations.
pdfViewerControl.AnnotationSettings.Line.Settings.Constraints = ~AnnotationConstraints.Selectable;
 
//Disable the selection of rectangle annotations. 
pdfViewerControl.AnnotationSettings.Rectangle.Settings.Constraints = ~AnnotationConstraints.Selectable;
 
//Disable the selection of circle annotations.
pdfViewerControl.AnnotationSettings.Circle.Settings.Constraints = ~AnnotationConstraints.Selectable;
 
//Disable the selection of polygon annotations.
pdfViewerControl.AnnotationSettings.Polygon.Settings.Constraints = ~AnnotationConstraints.Selectable;

{% endhighlight %}
{% endtabs %}

Shape annotation selection will be allowed only if the `SfPdfViewer.AnnotationSettings.Constraints` API is set to `AnnotationConstraints.Selectable`. The following code prevents the shape annotations selection, even though the `Constraints` property of the shape annotation is set to `AnnotationConstraints.Selectable`.

{% tabs %}
{% highlight c# %}

//Disable the shape annotation selection, though its 'Constraints' property is set to ‘AnnotationConstraints.Selectable’ 
pdfViewerControl.AnnotationSettings.Constraints= ~AnnotationConstraints.Selectable;
pdfViewerControl.AnnotationSettings.Arrow.Settings.Constraints = AnnotationConstraints.Selectable;
pdfViewerControl.AnnotationSettings.Line.Settings.Constraints = AnnotationConstraints.Selectable;
pdfViewerControl.AnnotationSettings.Rectangle.Settings.Constraints = AnnotationConstraints.Selectable;
pdfViewerControl.AnnotationSettings.Circle.Settings.Constraints = AnnotationConstraints.Selectable;
pdfViewerControl.AnnotationSettings.Polygon.Settings.Constraints = AnnotationConstraints.Selectable;

{% endhighlight %}
{% endtabs %}

## How to get the list of Annotations that overlaps the selected shape Annotation

You can retrieve the list of Annotations that overlaps the selected shape Annotation from the [`ShapeAnnotationSelectedEventArgs`](https://help.syncfusion.com/cr/xamarin-ios/Syncfusion.SfPdfViewer.iOS.ShapeAnnotationSelectedEventArgs.html) parameter of the [`ShapeAnnotationSelected`](https://help.syncfusion.com/cr/xamarin-ios/Syncfusion.SfPdfViewer.iOS.SfPdfViewer.html#Syncfusion_SfPdfViewer_iOS_SfPdfViewer_ShapeAnnotationSelected) event handler.

{% tabs %}
{% highlight c# %}

//Initialize the SfPdfViewer
SfPdfViewer pdfViewer = new SfPdfViewer();

//Wire up the ShapeAnnotionSelected event
pdfViewer.ShapeAnnotationSelected += PdfViewer_ShapeAnnotationSelected;

private void PdfViewer_ShapeAnnotationSelected(object sender, ShapeAnnotationSelectedEventArgs args)
        {
            // Get the list of Annotations that overlap the selected Annotation
            System.Collections.Generic.List<IAnnotation> overlappedAnnotation = args.OverlappedAnnotations;
        }

{% endhighlight %}
{% endtabs %}

## How to get and set the name of the shape annotations?

The PDF Viewer allows the users to get and set the name of shape annotations through the [Name](https://help.syncfusion.com/cr/xamarin-ios/Syncfusion.SfPdfViewer.iOS.IAnnotation.html#Syncfusion_SfPdfViewer_iOS_IAnnotation_Name) API. 

The following code sample explains modifying the name of the shape annotation in the [ShapeAnnotationAdded](https://help.syncfusion.com/cr/xamarin-ios/Syncfusion.SfPdfViewer.iOS.SfPdfViewer.html#Syncfusion_SfPdfViewer_iOS_SfPdfViewer_ShapeAnnotationAdded) event.

{% tabs %}
{% highlight c# %}

private void PdfViewerControl_ShapeAnnotationAdded(object sender, ShapeAnnotationAddedEventArgs args)
{
//Sets the name for the annotation.
(sender as ShapeAnnotation).Name = "Shape1";           
}

{% endhighlight %}
{% endtabs %}

N> For illustration purposes, we have only provided the sample for modifying the name of the shape annotation in the [ShapeAnnotationAdded](https://help.syncfusion.com/cr/xamarin-ios/Syncfusion.SfPdfViewer.iOS.SfPdfViewer.html#Syncfusion_SfPdfViewer_iOS_SfPdfViewer_ShapeAnnotationAdded) event. But this can be done in all other events as well. 
