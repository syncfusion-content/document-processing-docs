---
title: Background in UWP RichTextBox control | Syncfusion
description: Learn here all about Background support in Syncfusion UWP RichTextBox (SfRichTextBoxAdv) control and more.
platform: document-processing
control: SfRichTextBoxAdv
documentation: ug
keywords: background,background-color,overrides-document-background,layout-type,document-background
---

# Setting Background for RichTextBox
The RichTextBox control allows you to change the background color of the SfRichTextBoxAdv control. A background of a control is represented by the [`Background`](https://help.syncfusion.com/cr/uwp/Syncfusion.SfRichTextBoxAdv.SfRichTextBoxAdv.html#background) property of [`SfRichTextBoxAdv`](https://help.syncfusion.com/cr/uwp/Syncfusion.SfRichTextBoxAdv.SfRichTextBoxAdv.html) class. The default value of this property is black, which is set by the control's default template. The XAML snippets in this document assume the `RichTextBoxAdv` namespace is mapped to `clr-namespace:Syncfusion.UI.Xaml.RichTextBoxAdv;assembly=Syncfusion.SfRichTextBoxAdv.UWP`.

The following code illustrates how to apply color as background to the document.

{% tabs %}
{% highlight xaml %}
<RichTextBoxAdv:SfRichTextBoxAdv x:Name="richTextBoxAdv" Background="#6699cc" />


{% endhighlight %}
{% highlight c# %}
// Initializes a new instance of RichTextBoxAdv.
SfRichTextBoxAdv richTextBoxAdv = new SfRichTextBoxAdv();
// Sets the control background color
richTextBoxAdv.Background = new SolidColorBrush(Color.FromRgb(102, 153, 204));


{% endhighlight %}
{% highlight VB %}
' Initializes a new instance of RichTextBoxAdv.
Dim richTextBoxAdv As New SfRichTextBoxAdv()

' Sets the control background color.
richTextBoxAdv.Background = New SolidColorBrush With {.Color = Color.FromRgb(102, 153, 204)}


{% endhighlight %}

{% endtabs %}

**Pages layout**
![Pages layout](Image_images/control_page.PNG)

**Continuous layout** (default — no override)
![Continuous layout](Image_images/continous_noBackground.PNG)

**Block layout**
The block layout always inherits the control background color.
![Block layout](Image_images/Control_background_block.PNG)

## Setting background for document pages

The RichTextBox control allows you to change the background color of the document pages. A background of a document is represented by the [`Background`](https://help.syncfusion.com/cr/uwp/Syncfusion.SfRichTextBoxAdv.DocumentAdv.html#background) property of [`DocumentAdv`](https://help.syncfusion.com/cr/uwp/Syncfusion.SfRichTextBoxAdv.DocumentAdv.html) class. The default value of this property is white.

N> This property is independent for a document, so the background will change when the document is changed. To maintain the same background for all documents, you can reset this property in the `DocumentChanged` event.

The following code illustrates how to apply color as background to the document pages.

N> To keep the same document background for all documents, subscribe to the `DocumentChanged` event and reset the background in the handler:
```csharp
richTextBoxAdv.DocumentChanged += (s, e) =>
{
    richTextBoxAdv.Document.Background.Color = Color.FromRgb(102, 153, 204);
};
```

{% tabs %}
{% highlight c# %}
// Initializes a new instance of RichTextBoxAdv.
SfRichTextBoxAdv richTextBoxAdv = new SfRichTextBoxAdv();
// Sets the document background color
richTextBoxAdv.Document.Background.Color = Color.FromRgb(102, 153, 204);


{% endhighlight %}
{% highlight VB %}
' Initializes a new instance of RichTextBoxAdv.
Dim richTextBoxAdv As New SfRichTextBoxAdv()
' Sets the document background color.
richTextBoxAdv.Document.Background.Color = Color.FromRgb(102, 153, 204)



{% endhighlight %}

{% endtabs %}


Pages layout:
![Page background](Image_images/Pages_background.PNG)

Continuous layout:
![Continuous layout](Image_images/continous_layout.PNG)

N> This API is supported starting from release version v17.4.0.X.

## See Also

- [LayoutType](https://help.syncfusion.com/cr/uwp/Syncfusion.SfRichTextBoxAdv.LayoutType.html)
- [DocumentAdv](https://help.syncfusion.com/cr/uwp/Syncfusion.SfRichTextBoxAdv.DocumentAdv.html)
- [SfRichTextBoxAdv](https://help.syncfusion.com/cr/uwp/Syncfusion.SfRichTextBoxAdv.SfRichTextBoxAdv.html)
- [Getting started with UWP RichTextBox](https://help.syncfusion.com/uwp/richtextbox/getting-started)

## How to override the document background in `Continuous` layout type?
By default, the document background property is applied when the [`LayoutType`](https://help.syncfusion.com/cr/uwp/Syncfusion.SfRichTextBoxAdv.LayoutType.html) is continuous. You can suppress the document background and apply the control background by setting [`OverridesDocumentBackground`](https://help.syncfusion.com/cr/uwp/Syncfusion.SfRichTextBoxAdv.SfRichTextBoxAdv.html#overridesdocumentbackground) property to true. The default value of this property is false.

N> This property is valid only when the `LayoutType` is continuous.

The following code illustrates how to override the document background color.

{% tabs %}
{% highlight xaml %}
<RichTextBoxAdv:SfRichTextBoxAdv x:Name="richTextBoxAdv" LayoutType="Continuous" Background="#6699cc" OverridesDocumentBackground="True" />


{% endhighlight %}
{% highlight c# %}
// Initializes a new instance of RichTextBoxAdv.
SfRichTextBoxAdv richTextBoxAdv = new SfRichTextBoxAdv();
// Sets the control background color
richTextBoxAdv.Background = new SolidColorBrush(Color.FromRgb(102, 153, 204));
// Sets the layout type as continuous
richTextBoxAdv.LayoutType = LayoutType.Continuous;
// Enable the OverridesDocumentBackground property.
richTextBoxAdv.OverridesDocumentBackground = true;


{% endhighlight %}
{% highlight VB %}
' Initializes a new instance of RichTextBoxAdv.
Dim richTextBoxAdv As New SfRichTextBoxAdv()
' Sets the control background color.
richTextBoxAdv.Background = new SolidColorBrush(Color.FromRgb(102, 153, 204))
' Sets the layout type as continuous.
richTextBoxAdv.LayoutType = LayoutType.Continuous
' Enables the OverridesDocumentBackground property.
richTextBoxAdv.OverridesDocumentBackground = true


{% endhighlight %}

{% endtabs %}

Continuous layout (with `OverridesDocumentBackground="True"`):
![Continuous layout](Image_images/continous_layout.PNG)
