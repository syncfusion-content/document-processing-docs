---
layout: post
title: Comments in .NET MAUI PDF Viewer | Syncfusion
description: Learn here all about how to add comments or replies to annotations in Syncfusion<sup>®</sup> .NET MAUI PDF Viewer (SfPdfViewer) control.
platform: document-processing
control: SfPdfViewer
documentation: ug
keywords: .net maui pdf viewer, .net maui view pdf, pdf viewer in .net maui, .net maui open pdf, maui pdf viewer, maui pdf view
---

# Comments in .NET MAUI PDF Viewer (SfPdfViewer)
The PDF Viewer control provides options to add, edit, and delete comments for the following annotations in PDF documents:
1. Ink annotation
2. Shape annotation
3. Stamp annotation
4. Sticky note annotation
5. Text markup annotation
6. Free text annotation
7. Signature annotation

## Showing/Hiding the Comment panel
The built-in Comment Panel in the PDF Viewer displays annotation comments. You can show or hide this panel using the IsCommentsPanelVisible property. The default value of this property is false.
{% tabs %}
{% highlight c# %}

// Show the comment panel in the PDF Viewer 
PdfViewer.IsCommentsPanelVisible = true;

{% endhighlight %}
{% endtabs %}

{% tabs %}
{% highlight XAML %}

<syncfusion:SfPdfViewer x:Name="PdfViewer" IsCommentsPanelVisible = "True" > 
</syncfusion:SfPdfViewer>
 
{% endhighlight %}
{% endtabs %}


## Comment panel
Annotation comments can be added to the PDF using the comment panel. Comment panel can be opened by using Built-in toolbar, In the toolbar you can see the comments button in the primary toolbar for desktop and top toolbar for mobile. A comment panel will appear.
The following image represents how to add the comments using the toolbar on the desktop.

![Annotations comments Built-in toolbar](Images/Annotations/desktop-comment.gif)

The following image represents how to add comments using the toolbar on mobile.

![Annotations comments Built-in toolbar](Images/Annotations/mobile-comment.gif)

## Adding comments or replies
Follow these steps to add comments or replies :
1. Select the annotation in the PDF document and open the comment panel.
2. The corresponding comment thread is highlighted in the comment panel.
3. Add comments and replies using the comment panel.
4. Using the reply button in the comment panel, you can add a comment directly to a specific annotation, ensuring the discussion stays linked to that annotation.
5. Multiple replies can be added to a comment.

## Add comments or replies programmatically
These can add comments or replies to existing annotations programmatically by accessing the specific annotation from the Annotations collection. This allows you to enhance collaboration and provide feedback directly within the PDF.
The following example explains how to add comments or replies to specific annotations in the PDF document.

{% tabs %}
{% highlight c# %}

ReadOnlyObservableCollection<Annotation> annotations = pdfViewer.Annotations;
Annotation annotation = annotations[0];
Comment comment = new Comment()
{
    Text = "First Annotations",
    Author="User Name",
    ModifiedDate= DateTime.Now, 
};
annotation.Comments.Add(comment);

{% endhighlight %}
{% endtabs %}

## Editing the comments and comments replies of the annotations
Comments and replies can be edited through the context menu available under the More Options in the Comment Panel. Follow the steps below:
Select the annotation comment in the comment panel.

1. Click More options in the comment or reply to container.
2. Select Edit from the context menu.
3. An editable text box appears. Change the content of the comment or reply.

## Delete Comment or Comment Replies
Comments and replies can be deleted through the context menu available under the More Options in the Comment Panel. Follow the steps below:
1. Select the annotation comment in the comment panel.
2. Click More options in the comment or reply to container.
3. Select Delete from the context menu.
   
**Note :** Deleting the root comment from the comment panel also deletes the associated annotation.
