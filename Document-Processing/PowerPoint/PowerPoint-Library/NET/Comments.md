---

title: Comments in .NET PowerPoint Presentation | Syncfusion
description: Add, edit, view, and manage comments in PowerPoint presentations using the Syncfusion® .NET PowerPoint Presentation library.
platform: document-processing
control: Presentation
documentation: UG
keywords: comments
---
# Comments in .NET PowerPoint Presentation
A comment is a text note attached to a location on a slide. Each comment contains an unformatted text string, information about its author and the time it was added. In a PowerPoint slide, the comments and the reply comments are sequentially maintained in a single collection. The top most comment will have the index position 0 and the other comments and replies in that slide will have the incremental index positions.

## Adding a comment
The `Add` method appends a new comment to the slide at the specified location. The signature used below is:

{% tabs %}

{% highlight c# tabtitle="C#" %}
slide.Comments.Add(int left, int top, string authorName, string authorInitials, string text, DateTime dateTime)
{% endhighlight %}

{% endtabs %}

where `left` and `top` specify the X and Y position of the comment on the slide (in points).

The following code example demonstrates how to add a comment in a slide.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PowerPoint-Examples/master/Comments/Add-comments-in-PowerPoint/.NET/Add-comments-in-PowerPoint/Program.cs" %}
//Create a PowerPoint Presentation
IPresentation pptxDoc = Presentation.Create();
//Add a slide to the Presentation
ISlide slide = pptxDoc.Slides.Add(SlideLayoutType.Blank);
//Add a comment to the slide
slide.Comments.Add(10, 10, "Author1", "A1", "Can we change the font size to 20?", DateTime.Now);
//Save the PowerPoint Presentation
pptxDoc.Save("Comment.pptx");
//Close the Presentation
pptxDoc.Close();
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Create a PowerPoint Presentation
IPresentation pptxDoc = Presentation.Create();
//Add a slide to the Presentation
ISlide slide = pptxDoc.Slides.Add(SlideLayoutType.Blank);
//Add a comment to the slide
slide.Comments.Add(10, 10, "Author1", "A1", "Can we change the font size to 20?", DateTime.Now);
//Save the Presentation
pptxDoc.Save("Comment.pptx");
//Close the Presentation
pptxDoc.Close();
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Create a PowerPoint Presentation
Dim pptxDoc As IPresentation = Presentation.Create()
'Add a slide to the Presentation
Dim slide As ISlide = pptxDoc.Slides.Add(SlideLayoutType.Blank)
'Add a comment to the slide
slide.Comments.Add(10, 10, "Author1", "A1", "Can we change the font size to 20?", DateTime.Now)
'Save the Presentation
pptxDoc.Save("Comment.pptx")
'Close the Presentation
pptxDoc.Close()
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PowerPoint-Examples/tree/master/Comments/Add-comments-in-PowerPoint).

## Replying to a comment
The reply `Add` overload creates a child comment linked to the parent `IComment` provided as the last argument. Use it to add threaded replies to an existing comment.

The following code example demonstrates how to reply to an existing comment in a slide.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PowerPoint-Examples/master/Comments/Add-reply-comment-in-PowerPoint/.NET/Add-reply-comment-in-PowerPoint/Program.cs" %}
//Open a PowerPoint Presentation
IPresentation pptxDoc = Presentation.Open("Sample.pptx");
//Get the first slide from the Presentation
ISlide slide = pptxDoc.Slides[0];
//Get the comment in the slide
IComment comment = slide.Comments[0] as IComment;
//Add reply to the comment
slide.Comments.Add("Author2", "A2", "Yes, we can change the font size to 20", DateTime.Now, comment);
//Save the Presentation
pptxDoc.Save("ReplyComment.pptx");
//Close the Presentation
pptxDoc.Close();
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Open a PowerPoint Presentation
IPresentation pptxDoc = Presentation.Open("Sample.pptx");
//Get the first slide from the Presentation
ISlide slide = pptxDoc.Slides[0];
//Get the comment in the slide
IComment comment = slide.Comments[0] as IComment;
//Add reply to the comment
slide.Comments.Add("Author2", "A2", "Yes, we can change the font size to 20", DateTime.Now, comment);
//Save the Presentation
pptxDoc.Save("ReplyComment.pptx");
//Close the Presentation
pptxDoc.Close();
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Open a PowerPoint Presentation
Dim pptxDoc As IPresentation = Presentation.Open("Sample.pptx")
'Get the first slide from the Presentation
Dim slide As ISlide = pptxDoc.Slides(0)
'Get the comment in the slide
Dim comment As IComment = TryCast(slide.Comments(0), IComment)
'Add reply to the comment
slide.Comments.Add("Author2", "A2", "Yes, we can change the font size to 20", DateTime.Now, comment)
'Save the Presentation
pptxDoc.Save("ReplyComment.pptx")
'Close the Presentation
pptxDoc.Close()
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PowerPoint-Examples/tree/master/Comments/Add-reply-comment-in-PowerPoint).

## Modifying the comment
In addition to `Text` and `AuthorName`, an `IComment` also exposes editable properties such as `Initials` and `DateTime` for advanced scenarios.

### Modifying the comment text
The following code example demonstrates how to modify the text of a comment.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PowerPoint-Examples/master/Comments/Modify-comment-content/.NET/Modify-comment-content/Program.cs" %}
//Open a PowerPoint Presentation
IPresentation pptxDoc = Presentation.Open("Sample.pptx");
//Get the first slide from the Presentation
ISlide slide = pptxDoc.Slides[0];
//Get the comment from the slide
IComment comment = slide.Comments[0] as IComment;
//Modify the comment text
comment.Text = "The comment text content is changed";
//Save the Presentation
pptxDoc.Save("ModifyCommentText.pptx");
//Close the Presentation
pptxDoc.Close();
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Open a PowerPoint Presentation
IPresentation pptxDoc = Presentation.Open("Sample.pptx");
//Get the first slide from the Presentation
ISlide slide = pptxDoc.Slides[0];
//Get the comment from the slide
IComment comment = slide.Comments[0] as IComment;
//Modify the comment text
comment.Text = "The comment text content is changed";
//Save the Presentation
pptxDoc.Save("ModifyCommentText.pptx");
//Close the Presentation
pptxDoc.Close();
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Open a PowerPoint Presentation
Dim pptxDoc As IPresentation = Presentation.Open("Sample.pptx")
'Get the first slide from the Presentation
Dim slide As ISlide = pptxDoc.Slides(0)
'Get the comment from the slide
Dim comment As IComment = TryCast(slide.Comments(0), IComment)
'Modify the comment text
comment.Text = "The comment text content is changed"
'Save the Presentation
pptxDoc.Save("ModifyCommentText.pptx")
'Close the Presentation
pptxDoc.Close()
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PowerPoint-Examples/tree/master/Comments/Modify-comment-content).

### Modifying the comment author
The following code example demonstrates how to modify the author name of a comment.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PowerPoint-Examples/master/Comments/Modify-comment-author/.NET/Modify-comment-author/Program.cs" %}
//Open a PowerPoint Presentation
IPresentation pptxDoc = Presentation.Open("Sample.pptx");
//Get the first slide from the Presentation
ISlide slide = pptxDoc.Slides[0];
//Get the comment from the slide
IComment comment = slide.Comments[0] as IComment;
//Modify the comment author name
comment.AuthorName = "NewAuthor";
//Save the Presentation
pptxDoc.Save("ModifyCommentAuthor.pptx");
//Close the Presentation
pptxDoc.Close();
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Open a PowerPoint Presentation
IPresentation pptxDoc = Presentation.Open("Sample.pptx");
//Get the first slide from the Presentation
ISlide slide = pptxDoc.Slides[0];
//Get the comment from the slide
IComment comment = slide.Comments[0] as IComment;
//Modify the comment author name
comment.AuthorName = "NewAuthor";
//Save the Presentation
pptxDoc.Save("ModifyCommentAuthor.pptx");
//Close the Presentation
pptxDoc.Close();
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Open a PowerPoint Presentation
Dim pptxDoc As IPresentation = Presentation.Open("Sample.pptx")
'Get the first slide from the Presentation
Dim slide As ISlide = pptxDoc.Slides(0)
'Get the comment from the slide
Dim comment As IComment = TryCast(slide.Comments(0), IComment)
'Modify the comment author name
comment.AuthorName = "NewAuthor"
'Save the Presentation
pptxDoc.Save("ModifyCommentAuthor.pptx")
'Close the Presentation
pptxDoc.Close()
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PowerPoint-Examples/tree/master/Comments/Modify-comment-author).

## Deleting the comment

Deleting a comment will remove all its replies from the PowerPoint slide. You can also delete a specific reply from a comment thread. You can delete a comment by specifying its reference (`Remove(IComment)`) or by specifying its index (`RemoveAt(int)`).

### Deleting by reference
The following code example demonstrates how to delete a comment from a slide by passing its `IComment` reference to `Remove`.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PowerPoint-Examples/master/Comments/Delete-comment/.NET/Delete-comment/Program.cs" %}
//Open a PowerPoint Presentation
IPresentation pptxDoc = Presentation.Open("Sample.pptx");
//Get the first slide from the Presentation
ISlide slide = pptxDoc.Slides[0];
//Get a comment from the slide
IComment comment = slide.Comments[0];
//Remove the comment from the slide
slide.Comments.Remove(comment);
//Save the Presentation
pptxDoc.Save("DeleteComment.pptx");
//Close the Presentation
pptxDoc.Close();
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Open a PowerPoint Presentation
IPresentation pptxDoc = Presentation.Open("Sample.pptx");
//Get the first slide from the Presentation
ISlide slide = pptxDoc.Slides[0];
//Get a comment from the slide
IComment comment = slide.Comments[0];
//Remove the comment from the slide
slide.Comments.Remove(comment);
//Save the Presentation
pptxDoc.Save("DeleteComment.pptx");
//Close the Presentation
pptxDoc.Close();
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Open a PowerPoint Presentation
Dim pptxDoc As IPresentation = Presentation.Open("Sample.pptx")
'Get the first slide from the Presentation
Dim slide As ISlide = pptxDoc.Slides(0)
'Get a comment from the slide
Dim comment As IComment = slide.Comments(0)
'Remove the comment from the slide
slide.Comments.Remove(comment)
'Save the Presentation
pptxDoc.Save("DeleteComment.pptx")
'Close the Presentation
pptxDoc.Close()
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PowerPoint-Examples/tree/master/Comments/Delete-comment).

### Deleting by position
The following code example demonstrates how to delete a comment by specifying its index in the slide's `Comments` collection using `RemoveAt(int)`.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PowerPoint-Examples/master/Comments/Delete-comment-by-position/.NET/Delete-comment-by-position/Program.cs" %}
//Open a PowerPoint Presentation
IPresentation pptxDoc = Presentation.Open("Sample.pptx");
//Get the first slide from the Presentation
ISlide slide = pptxDoc.Slides[0];
//Remove the comment at index 1 from the slide
slide.Comments.RemoveAt(1);
//Save the Presentation
pptxDoc.Save("DeleteReplyComment.pptx");
//Close the Presentation
pptxDoc.Close();
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Open a PowerPoint Presentation
IPresentation pptxDoc = Presentation.Open("Sample.pptx");
//Get the first slide from the Presentation
ISlide slide = pptxDoc.Slides[0];
//Remove the comment at index 1 from the slide
slide.Comments.RemoveAt(1);
//Save the Presentation
pptxDoc.Save("DeleteReplyComment.pptx");
//Close the Presentation
pptxDoc.Close();
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Open a PowerPoint Presentation
Dim pptxDoc As IPresentation = Presentation.Open("Sample.pptx")
'Get the first slide from the Presentation
Dim slide As ISlide = pptxDoc.Slides(0)
'Remove the comment at index 1 from the slide
slide.Comments.RemoveAt(1)
'Save the Presentation
pptxDoc.Save("DeleteReplyComment.pptx")
'Close the Presentation
pptxDoc.Close()
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PowerPoint-Examples/tree/master/Comments/Delete-comment-by-position).

N> [Modern comments](https://support.microsoft.com/en-us/office/modern-comments-in-powerpoint-c0aa37bb-82cb-414c-872d-178946ff60ec) are not supported in .NET PowerPoint library.

## Online Demo

* Explore how to add comments to a PowerPoint presentation slide using the [.NET PowerPoint Library](https://www.syncfusion.com/document-sdk/net-powerpoint-library) (Presentation) in a live demo [here](https://document.syncfusion.com/demos/powerpoint/comment#/tailwind).