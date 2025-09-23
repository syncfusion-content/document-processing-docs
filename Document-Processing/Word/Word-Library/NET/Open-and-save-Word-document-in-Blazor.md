---
title: Open and save Word document in Blazor | DocIO | Syncfusion
description: Open and save Word documents in Blazor applications using Syncfusion<sup>&reg;</sup> .NET Word (DocIO) library without Microsoft Word or interop dependencies.
platform: document-processing
control: DocIO
documentation: UG
---

# Open and Save Word Document in Blazor

Syncfusion<sup>&reg;</sup> DocIO is a [.NET Core Word library](https://www.syncfusion.com/document-processing/word-framework/net-core/word-library) used to create, read, and edit **Word** documents programmatically without **Microsoft Word** or interop dependencies. Using this library, you can **open and save a Word document in Blazor**.

**Prerequisites:**

*   Visual Studio 2019 Preview
*   Install the [.NET Core SDK 3.1 Preview or Greater](https://dotnet.microsoft.com/en-us/download/dotnet/3.1)

## Server Application

Step 1: Create a new C# Blazor Server app project.
Select "Blazor Server App" from the template and click **Next**.

![Create Blazor Server application in Visual Studio](Blazor_Images/Blazor_Create.png)

Step 2: Install the `Syncfusion.DocIO.Net.Core` NuGet package.
To **open and save a Word document in a Blazor Server app**, install [Syncfusion.DocIO.Net.Core](https://www.nuget.org/packages/Syncfusion.DocIO.Net.Core) into your Blazor project.

![Install Syncfusion.DocIO.Net.Core NuGet Package](Blazor_Images/Install_Nuget.png)

N> Starting with v16.2.0.x, if you reference Syncfusion<sup>&reg;</sup> assemblies from trial setup or from the NuGet feed, you must also add the "Syncfusion.Licensing" assembly reference and include a license key in your projects. Refer to this [link](https://help.syncfusion.com/common/essential-studio/licensing/overview) to know about registering Syncfusion<sup>&reg;</sup> license key in your application to use our components.

Step 3: Create a Razor file named `DocIO` in the `Pages` folder.
Include the following namespaces in the file:		  

{% tabs %}
{% highlight c# tabtitle="C#" %}
@page "/DocIO"
@using System.IO;
@using Open_and_save_Word_document;
@inject Open_and_save_Word_document.Data.WordService service
@inject Microsoft.JSInterop.IJSRuntime JS
{% endhighlight %}
{% endtabs %}

Step 4: Add a button to `DocIO.razor`.
Include the following code to create a new button that triggers document processing:

{% tabs %}
{% highlight CSHTML %}
<h2>Syncfusion DocIO Library (DocIO)</h2>
<p>The Syncfusion DocIO library (DocIO) is a Blazor DocIO library used to create, read, edit, and convert Word files in your applications without Microsoft Office dependencies.</p>
<button class="btn btn-primary" @onclick="@OpenAndSaveDocument">Open and save Document</button>
{% endhighlight %}
{% endtabs %}

Step 5: Implement `OpenAndSaveDocument` method in `DocIO.razor`.
Add the following code snippet to open and save the Word document and download it.

{% tabs %}
{% highlight c# tabtitle="C#" %}
@code {
    MemoryStream documentStream;
    /// <summary>
    /// Open and save the Word document and download it
    /// </summary>
    protected async void OpenAndSaveDocument()
    {
        documentStream = service.OpenAndSaveDocument();
        await JS.SaveAs("Sample.docx", documentStream.ToArray());
    }
}
{% endhighlight %}
{% endtabs %}

Step 6: Create `WordService.cs` in the `Data` folder.
Include the following namespaces in the file:

{% tabs %}

{% highlight c# tabtitle="C#" %}
using Syncfusion.DocIO;
using Syncfusion.DocIO.DLS;
{% endhighlight %}

{% endtabs %}

Step 7: Create a new `MemoryStream` method named `OpenAndSaveDocument` in the `WordService` class, and include the following code snippet to **open an existing Word document in Blazor** Server app.

{% tabs %}

{% highlight c# tabtitle="C#" %}

public MemoryStream OpenAndSaveDocument()
{
    using (FileStream sourceStreamPath = new FileStream("Input.docx", FileMode.Open, FileAccess.Read, FileShare.ReadWrite))
    {
        // Open an existing Word document.
        using (WordDocument document = new WordDocument(sourceStreamPath, FormatType.Docx))
    }
}
{% endhighlight %}

{% endtabs %}

Step 8: Add below code example to add a paragraph in the Word document.

{% tabs %}

{% highlight c# tabtitle="C#" %}
// Access the section in a Word document.
IWSection section = document.Sections[0];
// Add a new paragraph to the section.
IWParagraph paragraph = section.AddParagraph();
paragraph.ParagraphFormat.FirstLineIndent = 36;
paragraph.BreakCharacterFormat.FontSize = 12f;
IWTextRange text = paragraph.AppendText("In 2000, Adventure Works Cycles bought a small manufacturing plant, Importadores Neptuno, located in Mexico. Importadores Neptuno manufactures several critical subcomponents for the Adventure Works Cycles product line. These subcomponents are shipped to the Bothell location for final product assembly. In 2001, Importadores Neptuno, became the sole manufacturer and distributor of the touring bicycle product group.");
text.CharacterFormat.FontSize = 12f;
{% endhighlight %}

{% endtabs %}

Step 9: Add below code example to **save the Word document in Blazor**.

{% tabs %}

{% highlight c# tabtitle="C#" %}
// Save the Word document to MemoryStream.
MemoryStream stream = new MemoryStream();
document.Save(stream, FormatType.Docx);
stream.Position = 0;
return stream;
{% endhighlight %}

{% endtabs %}

Step 10: Create `FileUtils.cs` for JavaScript interoperability.
Create a new class file named `FileUtils` in the project and add the following code to invoke the JavaScript action for file download in the browser.

{% tabs %}

{% highlight c# tabtitle="C#" %}

public static class FileUtils
{
    public static ValueTask<object> SaveAs(this IJSRuntime js, string filename, byte[] data)
       => js.InvokeAsync<object>(
            "saveAsFile",
            filename,
            Convert.ToBase64String(data));
}
{% endhighlight %}

{% endtabs %}

Step 11: Add JavaScript function to `_Host.cshtml`.
Add the following JavaScript function in the `_Host.cshtml` file located in the `Pages` folder.

{% tabs %}

{% highlight HTML %}

<script type="text/javascript">
    function saveAsFile(filename, bytesBase64) {
        if (navigator.msSaveBlob) {
            // Download document in Edge browser
            var data = window.atob(bytesBase64);
            var bytes = new Uint8Array(data.length);
            for (var i = 0; i < data.length; i++) {
                bytes[i] = data.charCodeAt(i);
            }
            var blob = new Blob([bytes.buffer], { type: "application/octet-stream" });
            navigator.msSaveBlob(blob, filename);
        }
        else {
            var link = document.createElement('a');
            link.download = filename;
            link.href = "data:application/octet-stream;base64," + bytesBase64;
            document.body.appendChild(link); // Needed for Firefox
            link.click();
            document.body.removeChild(link);
        }
    }
</script>

{% endhighlight %}

{% endtabs %}

Step 12: Add navigation link.
Add the following code snippet to the Navigation menu's Razor file in the `Shared` folder.

{% tabs %}

{% highlight HTML %}

<li class="nav-item px-3">
    <NavLink class="nav-link" href="docio">
        <span class="oi oi-list-rich" aria-hidden="true"></span> Create Word
    </NavLink>
</li>

{% endhighlight %}

{% endtabs %}

A complete working sample is available on [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Read-and-Save-document/Open-and-save-Word-document/Blazor/Blazor-Server-app).

Upon executing the program, the **Word document** will be generated as follows:

![Blazor Server output Word document](Blazor_Images/Blazor_Output.png)

Click [here](https://www.syncfusion.com/document-processing/word-framework/blazor) to explore the rich set of Syncfusion<sup>&reg;</sup> Word library (DocIO) features. 

## WASM Application

Step 1: Create a new C# Blazor WASM app project.
Select "Blazor WebAssembly App" from the template and click **Next**.

![Create Blazor WebAssembly application in Visual Studio](Blazor_Images/Blazor_WASM.png)

Step 2: Install the `Syncfusion.DocIO.Net.Core` NuGet package.
To **open and save a Word document in Blazor WASM app**, install [Syncfusion.DocIO.Net.Core](https://www.nuget.org/packages/Syncfusion.DocIO.Net.Core) into your Blazor project.

![Install Syncfusion.DocIO.Net.Core NuGet Package](Blazor_Images/Install_Nuget.png)

N> Starting with v16.2.0.x, if you reference Syncfusion<sup>&reg;</sup> assemblies from trial setup or from the NuGet feed, you must also add the "Syncfusion.Licensing" assembly reference and include a license key in your projects. Refer to this [link](https://help.syncfusion.com/common/essential-studio/licensing/overview) to know about registering Syncfusion<sup>&reg;</sup> license key in your application to use our components.

Step 3: Create a Razor file named `DocIO` in the `Pages` folder.
Add the following namespaces:

{% tabs %}

{% highlight c# tabtitle="C#" %}
@page "/DocIO"
@using Syncfusion.DocIO
@using Syncfusion.DocIO.DLS
{% endhighlight %}

{% endtabs %}

Step 4: Add a button to `DocIO.razor`.
Add the following code to create a new button that triggers document processing:

{% tabs %}

{% highlight CSHTML %}

<h2>Syncfusion DocIO Library (DocIO)</h2>
<p>The Syncfusion Blazor DocIO library (DocIO) used to create, read, edit, and convert DocIO files in your applications without Microsoft Office dependencies.</p>
<button class="btn btn-primary" @onclick="@OpenAndSaveWordDocument">Open and save Document</button>

{% endhighlight %}

{% endtabs %}

Step 5: Implement `OpenAndSaveDocument` method in `DocIO.razor`.
Create a new `async` method named `OpenAndSaveDocument` and include the following code snippet to **open an existing Word document in Blazor** WASM app.

{% tabs %}

{% highlight c# tabtitle="C#" %}

@functions {
    async void OpenAndSaveDocument()
    {
        using (Stream inputStream = await client.GetStreamAsync("Input.docx"))
        {
            // Open an existing Word document.
            using (WordDocument document = new WordDocument(inputStream, FormatType.Docx))
        }
    }
{% endhighlight %}

{% endtabs %}
Step 6: Add below code example to add a paragraph in the Word document.

{% tabs %}

{% highlight c# tabtitle="C#" %}
// Access the section in a Word document.
IWSection section = document.Sections[0];
// Add a new paragraph to the section.
IWParagraph paragraph = section.AddParagraph();
paragraph.ParagraphFormat.FirstLineIndent = 36;
paragraph.BreakCharacterFormat.FontSize = 12f;
IWTextRange text = paragraph.AppendText("In 2000, Adventure Works Cycles bought a small manufacturing plant, Importadores Neptuno, located in Mexico. Importadores Neptuno manufactures several critical subcomponents for the Adventure Works Cycles product line. These subcomponents are shipped to the Bothell location for final product assembly. In 2001, Importadores Neptuno, became the sole manufacturer and distributor of the touring bicycle product group.");
text.CharacterFormat.FontSize = 12f;
{% endhighlight %}

{% endtabs %}

Step 7: Add below code example to **save the Word document in Blazor**.

{% tabs %}

{% highlight c# tabtitle="C#" %}
// Save the Word document to MemoryStream.
using (MemoryStream stream = new MemoryStream())
{
    document.Save(stream, FormatType.Docx);
    stream.Position = 0;
    //Download the Word document in the browser.
    await JS.SaveAs("Sample.docx", stream.ToArray());
}
{% endhighlight %}

{% endtabs %}

Step 8: Create `FileUtils.cs` for JavaScript interoperability.
Create a new class file named `FileUtils` in the project and add the following code to invoke the JavaScript action for file download in the browser.

{% tabs %}

{% highlight c# tabtitle="C#" %}

public static class FileUtils
{
    public static ValueTask<object> SaveAs(this IJSRuntime js, string filename, byte[] data)
       => js.InvokeAsync<object>(
            "saveAsFile",
            filename,
            Convert.ToBase64String(data));
}
{% endhighlight %}

{% endtabs %}

Step 9: Add JavaScript function to `index.html`.
Add the following JavaScript function in the `index.html` file present under `wwwroot`.

{% tabs %}

{% highlight HTML %}

<script type="text/javascript">
    function saveAsFile(filename, bytesBase64) {
        if (navigator.msSaveBlob) {
            // Download document in Edge browser
            var data = window.atob(bytesBase64);
            var bytes = new Uint8Array(data.length);
            for (var i = 0; i < data.length; i++) {
                bytes[i] = data.charCodeAt(i);
            }
            var blob = new Blob([bytes.buffer], { type: "application/octet-stream" });
            navigator.msSaveBlob(blob, filename);
        }
        else {
            var link = document.createElement('a');
            link.download = filename;
            link.href = "data:application/octet-stream;base64," + bytesBase64;
            document.body.appendChild(link); // Needed for Firefox
            link.click();
            document.body.removeChild(link);
        }
    }
</script>
{% endhighlight %}

{% endtabs %}

Step 10: Add navigation link.
Add the following code snippet to the Navigation menu's Razor file in the `Shared` folder.

{% tabs %}

{% highlight HTML %}

<li class="nav-item px-3">
    <NavLink class="nav-link" href="docio">
        <span class="oi oi-list-rich" aria-hidden="true"></span> Create Word
    </NavLink>
</li>
{% endhighlight %}

{% endtabs %}

A complete working sample is available on [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Read-and-Save-document/Open-and-save-Word-document/Blazor/Blazor-WASM-app).

Upon executing the program, the **Word document** will be generated as follows:

![Blazor WASM output Word document](Blazor_Images/Blazor_Output.png)

N> While the Word library functions in WASM, server-side deployment is recommended. WASM deployment increases the application payload size.

Kindly explore the [supported and unsupported features of Word library in Blazor](https://help.syncfusion.com/document-processing/word/word-library/net/supported-and-unsupported-features#blazor-supported-features)

Click [here](https://www.syncfusion.com/document-processing/word-framework/blazor) to explore the rich set of Syncfusion<sup>&reg;</sup> Word library (DocIO) features.
