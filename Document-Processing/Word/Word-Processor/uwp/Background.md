---
title: Background in UWP RichTextBox control | Syncfusion
description: Learn here all about Background support in Syncfusion UWP RichTextBox (SfRichTextBoxAdv) control and more.
platform: document-processing
control: SfRichTextBoxAdv
documentation: ug
keywords: background,background-color,overrides-document-background,layout-type,document-background
---

# Setting Background for RichTextBox
The RichTextBox control allows you to change the background color of the SfRichTextBoxAdv control. A background of a control is represented by the `Background` property of [`SfRichTextBoxAdv`](https://help.syncfusion.com/cr/uwp/Syncfusion.UI.Xaml.RichTextBoxAdv.SfRichTextBoxAdv.html) class. The default value of this property is black, which is set by the control's default template.

The following code illustrates how to apply color as background to the document.

{% tabs %}
{% highlight xaml %}
<RichTextBoxAdv:SfRichTextBoxAdv x:Name="richTextBoxAdv" Background="#6699cc" />


{% endhighlight %}
{% highlight c# %}
// Initializes a new instance of RichTextBoxAdv.
SfRichTextBoxAdv richTextBoxAdv = new SfRichTextBoxAdv();
// Sets the control background color
richTextBoxAdv.Background = new SolidColorBrush(Color.FromArgb(255, 102, 153, 204));


{% endhighlight %}
{% highlight VB %}
' Initializes a new instance of RichTextBoxAdv.
Dim richTextBoxAdv As New SfRichTextBoxAdv()

' Sets the control background color.
richTextBoxAdv.Background = New SolidColorBrush(Color.FromArgb(255, 102, 153, 204))


{% endhighlight %}

{% endtabs %}

**Pages layout**
![Pages layout](Image_images/control_page.PNG)

**Continuous layout**
![Continuous layout](Image_images/continous_noBackground.PNG)

**Block layout**
The block layout always inherits the control background color.
![Block layout](Image_images/Control_background_block.PNG)

## Setting background for document pages

The RichTextBox control allows you to change the background color of the document pages. A background of a document is represented by the [`Background`](https://help.syncfusion.com/cr/uwp/Syncfusion.UI.Xaml.RichTextBoxAdv.DocumentAdv.html#Syncfusion_UI_Xaml_RichTextBoxAdv_DocumentAdv_Background) property of [`DocumentAdv`](https://help.syncfusion.com/cr/uwp/Syncfusion.UI.Xaml.RichTextBoxAdv.DocumentAdv.html) class. The default value of this property is white.

The following code illustrates how to apply color as background to the document pages.

{% tabs %}
{% highlight c# %}
// Initializes a new instance of RichTextBoxAdv.
SfRichTextBoxAdv richTextBoxAdv = new SfRichTextBoxAdv();
// Sets the document background color
richTextBoxAdv.Document.Background.Color = Color.FromArgb(255, 102, 153, 204);


{% endhighlight %}
{% highlight VB %}
' Initializes a new instance of RichTextBoxAdv.
Dim richTextBoxAdv As New SfRichTextBoxAdv()
' Sets the document background color.
richTextBoxAdv.Document.Background.Color = Color.FromArgb(255, 102, 153, 204)
{% endhighlight %}
{% endtabs %}

## Maintain the same background for all documents

The document background property is independent for each document, so the background changes whenever the document changes. To keep the same background across all documents, subscribe to the `DocumentChanged` event and reset the background in the handler.

{% tabs %}
{% highlight c# %}
// Initializes a new instance of RichTextBoxAdv.
SfRichTextBoxAdv richTextBoxAdv = new SfRichTextBoxAdv();

// Subscribes to the DocumentChanged event to keep the same background for all documents.
richTextBoxAdv.DocumentChanged += (s, e) =>
{
    richTextBoxAdv.Document.Background.Color = Color.FromArgb(255, 102, 153, 204);
};
{% endhighlight %}
{% highlight VB %}
' Initializes a new instance of RichTextBoxAdv.
Dim richTextBoxAdv As New SfRichTextBoxAdv()

' Subscribes to the DocumentChanged event to keep the same background for all documents.
AddHandler richTextBoxAdv.DocumentChanged, Sub(s, e)
    richTextBoxAdv.Document.Background.Color = Color.FromArgb(255, 102, 153, 204)
End Sub
{% endhighlight %}
{% endtabs %}

Pages layout:
![Page background](Image_images/Pages_background.PNG)

Continuous layout:
![Continuous layout](Image_images/continous_layout.PNG)

## How to override the document background in `Continuous` layout type?
By default, the document background property is applied when the [`LayoutType`](./Layout-Types) is continuous. You can suppress the document background and apply the control background by setting [`OverridesDocumentBackground`](https://help.syncfusion.com/cr/uwp/Syncfusion.UI.Xaml.RichTextBoxAdv.SfRichTextBoxAdv.html#Syncfusion_UI_Xaml_RichTextBoxAdv_SfRichTextBoxAdv_OverridesDocumentBackground) property to true. The default value of this property is false.

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
richTextBoxAdv.Background = new SolidColorBrush(Colors.LightGreen);
// Sets the layout type as continuous
richTextBoxAdv.LayoutType = LayoutType.Continuous;
// Enable the OverridesDocumentBackground property.
richTextBoxAdv.OverridesDocumentBackground = true;


{% endhighlight %}
{% highlight VB %}
' Initializes a new instance of RichTextBoxAdv.
Dim richTextBoxAdv As New SfRichTextBoxAdv()
' Sets the control background color.
richTextBoxAdv.Background = New SolidColorBrush(Color.FromArgb(255, 102, 153, 204))
' Sets the layout type as continous 
richTextBoxAdv.LayoutType = LayoutType.Continuous
' Enable the OverridesDocumentBackground property
richTextBoxAdv.OverridesDocumentBackground = True

{% endhighlight %}

{% endtabs %}

Continuous layout (with `OverridesDocumentBackground="True"`):
![Continuous layout](Image_images/continous_layout.PNG)

N> This API is supported starting from release version v17.4.0.X.

## See also

- [Commands in UWP RichTextBox](./Commands)
- [Document Structure in UWP RichTextBox](./Document-Structure)
- [Document Properties in UWP RichTextBox](./Document-Properties)