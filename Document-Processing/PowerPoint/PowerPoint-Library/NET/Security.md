---
title: Security in .NET PowerPoint Presentation | Syncfusion
description: Learn how to encrypt, decrypt, and secure PowerPoint presentations using the Syncfusion® .NET PowerPoint Presentation library.
platform: document-processing
control: Presentation
documentation: UG
---
# Security in .NET PowerPoint Presentation

To quickly start protecting PowerPoint presentations, please check out this video:
{% youtube "https://www.youtube.com/watch?v=GnnVPtrP9rE" %}

## Encrypting with password

You can protect a PowerPoint presentation by encrypting the document using a password. This prevents unauthorized users from accessing or making changes to the presentation. The input file (for example, `Template.pptx`) must already exist in the working directory.

The following code example demonstrates how to encrypt a PowerPoint presentation with a password.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PowerPoint-Examples/master/Security/Encrypt-PowerPoint-with-password/.NET/Encrypt-PowerPoint-with-password/Program.cs" %}
//Open an existing presentation.
using (IPresentation presentation = Presentation.Open("Template.pptx"))
{
    //Encrypt the presentation with a password.
    presentation.Encrypt("syncfusion");
    //Saves the presentation.
    presentation.Save("Sample.pptx");
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Open an existing presentation.
using (IPresentation presentation = Presentation.Open("Template.pptx"))
{
    //Encrypt the presentation with a password.
    presentation.Encrypt("syncfusion");
    //Saves the Presentation.
    presentation.Save("Sample.pptx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Open an existing presentation.
Using presentationDocument As IPresentation = Presentation.Open("Template.pptx")
    'Encrypt the presentation with a password.
    presentation.Encrypt("syncfusion")
    'Saves the Presentation.
    presentationDocument.Save("Sample.pptx")
End Using
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PowerPoint-Examples/tree/master/Security/Encrypt-PowerPoint-with-password).

## Decrypting the PowerPoint Presentation

Essential<sup>&reg;</sup> Presentation provides ability to remove the encryption from the PowerPoint Presentation. You can decrypt a PowerPoint Presentation by opening it with the password.

### Opening an Encrypted PowerPoint Presentation

The following code example demonstrates opening an encrypted PowerPoint presentation.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}
//Opens an existing presentation from the file system and decrypts it using the provided password.
using (IPresentation presentation = Presentation.Open("Sample.pptx", "PASSWORD!@1#$"))
{
    //Saves the presentation.
    presentation.Save("Output.pptx");
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Opens an existing presentation from the file system and decrypts it using the provided password.
using (IPresentation presentation = Presentation.Open("Sample.pptx", "PASSWORD!@1#$"))
{
    //Saves the presentation.
    presentation.Save("Output.pptx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Opens an existing presentation from the file system and decrypts it using the provided password.
Using presentationDocument As IPresentation = Presentation.Open("Sample.pptx", "PASSWORD!@1#$")
    'Saves the presentation.
    presentationDocument.Save("Output.pptx")
End Using
{% endhighlight %}

{% endtabs %}

### Removing the Encryption from a Presentation

The following code example demonstrates removing encryption from a PowerPoint presentation.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PowerPoint-Examples/master/Security/Remove-encryption/.NET/Remove-encryption/Program.cs" %}
//Opens an existing presentation from the file system and decrypts it using the provided password.
using (IPresentation presentation = Presentation.Open("Sample.pptx", "syncfusion"))
{
    //Decrypts the document.
    presentation.RemoveEncryption();
    //Saves the presentation.
    presentation.Save("Output.pptx");
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Opens an existing presentation from the file system and decrypts it using the provided password.
using (IPresentation presentation = Presentation.Open("Sample.pptx", "syncfusion"))
{
    //Decrypts the document.
    presentation.RemoveEncryption();
    //Saves the presentation.
    presentation.Save("Output.pptx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Opens an existing presentation from the file system and decrypts it using the provided password.
Using presentationDocument As IPresentation = Presentation.Open("Sample.pptx", "syncfusion")
    'Decrypts the document.
    presentationDocument.RemoveEncryption()
    'Saves the presentation.
    presentationDocument.Save("Output.pptx")
End Using
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PowerPoint-Examples/tree/master/Security/Remove-encryption).

## Write Protection

You can set write protection for a PowerPoint presentation and remove the protection from a write-protected PowerPoint presentation.

### Setting Write Protection

You can protect a PowerPoint presentation with a password to restrict unauthorized editing.

The following code example shows how to set write protection for a PowerPoint presentation.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PowerPoint-Examples/master/Security/Set-write-protection/.NET/Set-write-protection/Program.cs" %}
//Create a new instance for the PowerPoint presentation.
using (IPresentation pptxDoc = Presentation.Create())
{
    //Add a blank slide to the presentation.
    ISlide slide = pptxDoc.Slides.Add(SlideLayoutType.Blank);
    //Add a shape to the slide.
    IShape shape = slide.Shapes.AddShape(AutoShapeType.BlockArc, 0, 0, 200, 200);
    //Add a paragraph to the shape.
    IParagraph paragraph = shape.TextBody.AddParagraph("welcome");
    //Set the author name.
    pptxDoc.BuiltInDocumentProperties.Author = "Syncfusion";
    //Set the write protection for the presentation instance.
    pptxDoc.SetWriteProtection("MYPASSWORD");
    //Saves the presentation.
    pptxDoc.Save("Sample.pptx");
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Create a new instance for the PowerPoint presentation.
using (IPresentation pptxDoc = Presentation.Create())
{
    //Add a blank slide to the presentation.
    ISlide slide = pptxDoc.Slides.Add(SlideLayoutType.Blank);
    //Add a shape to the slide.
    IShape shape = slide.Shapes.AddShape(AutoShapeType.BlockArc, 0, 0, 200, 200);
    //Add a paragraph to the shape.
    IParagraph paragraph = shape.TextBody.AddParagraph("welcome");
    //Set the author name.
    pptxDoc.BuiltInDocumentProperties.Author = "Syncfusion";
    //Set the write protection for the presentation instance.
    pptxDoc.SetWriteProtection("MYPASSWORD");
    //Saves the presentation.
    pptxDoc.Save("Sample.pptx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Create a new instance for the PowerPoint presentation.
Using pptxDoc As IPresentation = Presentation.Create()
    'Add a blank slide to the presentation.
    Dim slide As ISlide = pptxDoc.Slides.Add(SlideLayoutType.Blank)
    'Add a shape to the slide.
    Dim shape As IShape = slide.Shapes.AddShape(AutoShapeType.BlockArc, 0, 0, 200, 200)
    'Add a paragraph to the shape.
    Dim paragraph As IParagraph = shape.TextBody.AddParagraph("welcome")
    'Set the author name.
    pptxDoc.BuiltInDocumentProperties.Author = "Syncfusion"
    'Set the write protection for the presentation instance.
    pptxDoc.SetWriteProtection("MYPASSWORD")
    'Saves the presentation.
    pptxDoc.Save("Sample.pptx")
End Using
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PowerPoint-Examples/tree/master/Security/Set-write-protection).

### Removing Write Protection

You can check whether a PowerPoint presentation is write protected and remove the protection. The `IsWriteProtected` property returns `true` when the presentation is read-only due to write protection.

The following code example shows how to remove write protection from a PowerPoint presentation.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PowerPoint-Examples/master/Security/Remove-write-protection/.NET/Remove-write-protection/Program.cs" %}
//Open the PowerPoint presentation.
using (IPresentation pptxDoc = Presentation.Open("Sample.pptx"))
{
    //Gets whether the presentation is write protected (read-only).
    bool writeProtected = pptxDoc.IsWriteProtected;
    //Check whether the presentation is write protected.
    if (writeProtected)
    {
        //Removes the write protection for the presentation instance.
        pptxDoc.RemoveWriteProtection();
    }
    //Saves the presentation.
    pptxDoc.Save("Output.pptx");
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Open the PowerPoint presentation.
using (IPresentation pptxDoc = Presentation.Open("Sample.pptx"))
{
    //Gets whether the presentation is write protected (read-only).
    bool writeProtected = pptxDoc.IsWriteProtected;
    //Check whether the presentation is write protected.
    if (writeProtected)
    {
        //Removes the write protection for the presentation instance.
        pptxDoc.RemoveWriteProtection();
    }
    //Saves the presentation.
    pptxDoc.Save("Output.pptx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Open the PowerPoint presentation.
Using pptxDoc As IPresentation = Presentation.Open("Sample.pptx")
    'Gets whether the presentation is write protected (read-only).
    Dim writeProtected As Boolean = pptxDoc.IsWriteProtected
    'Check whether the presentation is write protected.
    If writeProtected Then
        'Removes the write protection for the presentation instance.
        pptxDoc.RemoveWriteProtection()
    End If
    'Saves the presentation.
    pptxDoc.Save("Output.pptx")
End Using
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PowerPoint-Examples/tree/master/Security/Remove-write-protection).

N> 1. In Xamarin applications, encryption, decryption, and write protection are supported in .NET Standard 2.0 and later.
N> 2. In ASP.NET Core, encryption, decryption, and write protection are supported in .NET Core 2.0 and later.

## Online Demo

* Learn how to set write protection for a PowerPoint presentation with a password using the [.NET PowerPoint Library](https://www.syncfusion.com/document-sdk/net-powerpoint-library) in a live demo [here](https://document.syncfusion.com/demos/powerpoint/writeprotection#/tailwind).
* See how to encrypt and decrypt a PowerPoint presentation using the [.NET PowerPoint Library](https://www.syncfusion.com/document-sdk/net-powerpoint-library) in a live demo [here](https://document.syncfusion.com/demos/powerpoint/encryptanddecrypt#/tailwind).