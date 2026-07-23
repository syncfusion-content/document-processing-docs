---
title: Background in WPF RichTextBox control | Syncfusion
description: Learn about the Background support in Syncfusion WPF RichTextBox (SfRichTextBoxAdv) control and more.
platform: document-processing
control: SfRichTextBoxAdv
documentation: ug
keywords: background
---

# Setting Background for WPF RichTextBox
The [WPF RichTextBox](https://www.syncfusion.com/docx-editor-sdk/wpf-docx-editor) control allows you to change background color of the control. A background of a control is represented by [`Background`](https://help.syncfusion.com/cr/wpf/Syncfusion.Windows.Controls.RichTextBoxAdv.SfRichTextBoxAdv.html#Syncfusion_Windows_Controls_RichTextBoxAdv_SfRichTextBoxAdv_Background) property of `SfRichTextBoxAdv` class. The default value of this property is black.

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
richTextBoxAdv.Background = New SolidColorBrush(Color.FromRgb(102, 153, 204))


{% endhighlight %}

{% endtabs %}

**Pages layout:**
![Changing Background color of Page Layout in WPF RichTextBox](Image_images/wpf-richtextbox-page-layout-background.PNG)

**Continuous layout:**
![Changing Background color of Continuous Layout in WPF RichTextBox](Image_images/wpf-richtextbox-continuous-layout-background.PNG)

**Block layout:**
The block layout always inherits the control background color.
![Changing Background color of Block Layout in WPF RichTextBox](Image_images/wpf-richtextbox-block-layout-background.PNG)

## How to override the document background in continuous layout type?
By default, the document background properties will be applied when the `LayoutType` is continuous. You can suppress the document background and apply the control background by setting [`OverridesDocumentBackground`](https://help.syncfusion.com/cr/wpf/Syncfusion.Windows.Controls.RichTextBoxAdv.SfRichTextBoxAdv.html#Syncfusion_Windows_Controls_RichTextBoxAdv_SfRichTextBoxAdv_OverridesDocumentBackground) property to true. The default value of this property is false.

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
//Enable the OverridesDocumentBackground property 
richTextBoxAdv.OverridesDocumentBackground = true;


{% endhighlight %}
{% highlight VB %}
' Initializes a new instance of RichTextBoxAdv.
Dim richTextBoxAdv As New SfRichTextBoxAdv()
' Sets the control background color.
richTextBoxAdv.Background = New SolidColorBrush(Color.FromRgb(102, 153, 204))
' Sets the layout type as continuous 
richTextBoxAdv.LayoutType = LayoutType.Continuous
' Enable the OverridesDocumentBackground property
richTextBoxAdv.OverridesDocumentBackground = true


{% endhighlight %}

{% endtabs %}

**Continuous layout:**
![Changing Background color of Continuous Layout in WPF RichTextBox](Image_images/wpf-richtextbox-continous-background.PNG)

## Setting Background for Document Pages

The RichTextBox control allows you to change background color of the document pages. A background of a document is represented by [`Background`](https://help.syncfusion.com/cr/wpf/Syncfusion.Windows.Controls.RichTextBoxAdv.DocumentAdv.html#Syncfusion_Windows_Controls_RichTextBoxAdv_DocumentAdv_Background) property of `DocumentAdv` class. The default value of this property is white.

N> 1. This API is supported starting from release version v17.4.0.39.
N> 2. This property is independent for a document. So the background will change when the document is changed.
N> 3. To maintain same background for all documents, you can reset this property in DocumentChanged event.

The following code illustrates how to apply color as background to the document pages.

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

**Pages layout:**
![Changing Background color of Page Layout in WPF RichTextBox](Image_images/wpf-richtextbox-pages-background.PNG)

**Continuous layout:**
![Changing Background color of Continuous Layout in WPF RichTextBox](Image_images/wpf-richtextbox-continous-background.PNG)

N> You can also explore our [WPF RichTextBox example](https://github.com/syncfusion/docx-editor-sdk-wpf-demos) to know how to render and configure the editing tools.
