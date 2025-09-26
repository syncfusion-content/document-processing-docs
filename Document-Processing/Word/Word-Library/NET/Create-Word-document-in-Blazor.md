---
title: Create Word document in Blazor | DocIO | Syncfusion 
description: Create Word documents without Microsoft Word or interop dependencies in Blazor applications using Syncfusion<sup>&reg;</sup> .NET Word (DocIO) library.
platform: document-processing
control: DocIO
documentation: UG
---

# Create Word Document in Blazor

Syncfusion<sup>&reg;</sup> Essential<sup>&reg;</sup> DocIO is a [.NET Core Word library](https://www.syncfusion.com/document-processing/word-framework/net-core/word-library) used to create, read, and edit **Word** documents programmatically without **Microsoft Word** or interop dependencies. Using this library, a **create a Word document in Blazor**.

To quickly get started with creating a Word document in Blazor, watch this video:

{% youtube "https://www.youtube.com/watch?v=yVfDlpewbpU" %}

## Web Server Application

**Prerequisites:**

*   Visual Studio 2022.
*   Install [.NET 8 SDK](https://dotnet.microsoft.com/en-us/download/dotnet/8.0) or later.

Step 1: Create a new C# Blazor Web app project.
*   Select "Blazor Web App" from the template and click **Next**.

![Create Blazor Web App application in Visual Studio](Blazor_Images/Blazor_image_Web_App.png)

*   Name the project and click **Next**.

![Name the Blazor Web App in Visual Studio](Blazor_Images/Blazor_image_Web_ProjectName.png)

*   Select the framework and click **Create** button.

![Select the framework in Blazor Web Server Side app in Visual Studio](Blazor_Images/Blazor_image_Server_Web_Additional_Information.png)

Step 2: Install the `Syncfusion.DocIO.Net.Core` NuGet package.
To **create a Word document in a Blazor Web Server app**, install [Syncfusion.DocIO.Net.Core](https://www.nuget.org/packages/Syncfusion.DocIO.Net.Core) into the Blazor project.

![Install DocIO.NET Core NuGet Package](Blazor_Images/Install_Nuget.png)

N> Starting with v16.2.0.x, if Syncfusion<sup>&reg;</sup> assemblies are referenced from trial setup or from the NuGet feed, the "Syncfusion.Licensing" assembly reference must also be added and a license key included in projects. Refer to this [link](https://help.syncfusion.com/common/essential-studio/licensing/overview) to know about registering Syncfusion<sup>&reg;</sup> license key in an application to use Syncfusion components.

Step 3: Create a Razor file named `DocIO.razor` in the `Pages` folder, which is located inside the `Components` folder.
Include the following namespaces in the file:

{% tabs %}
{% highlight c# tabtitle="C#" %}
@rendermode InteractiveServer
@page "/DocIO"
@using System.IO;
@using Create_Word_document;
@inject Create_Word_document.Data.WordService service
@inject Microsoft.JSInterop.IJSRuntime JS
{% endhighlight %}
{% endtabs %}

Step 4: Add a button to `DocIO.razor`.
Include the following code to create a new button that triggers document creation:

{% tabs %}
{% highlight CSHTML %}
<h2>Syncfusion DocIO Library (Essential DocIO)</h2>
<p>The Syncfusion DocIO library (Essential DocIO) is a Blazor DocIO library used to create, read, edit, and convert Word files in applications without Microsoft Office dependencies.</p>
<button class="btn btn-primary" @onclick="@CreateWord">Create Word</button>
{% endhighlight %}
{% endtabs %}

Step 5: Implement `CreateWord` method in `DocIO.razor`.
Add the following code to create and download the Word document:

{% tabs %}
{% highlight c# tabtitle="C#" %}
@code {
    MemoryStream documentStream;
    /// <summary>
    /// Creates and downloads the Word document.
    /// </summary>
    protected async void CreateWord()
    {
        documentStream = service.CreateWord();
        await JS.SaveAs("Sample.docx", documentStream.ToArray());
    }
}
{% endhighlight %}
{% endtabs %}

Step 6: Create a new cs file `WordService.cs` in the `Data` folder.
Include the following namespaces in the file:

{% tabs %}

{% highlight c# tabtitle="C#" %}
using Syncfusion.DocIO;
using Syncfusion.DocIO.DLS;
using System.IO;
{% endhighlight %}

{% endtabs %}

Step 7: Implement the `CreateWord` method in `WordService.cs`.
Create a new `MemoryStream` method named `CreateWord` in the `WordService` class, and include the following code snippet to **create a simple Word document in Blazor** Web Server app:

{% tabs %}

{% highlight c# tabtitle="C#" %}

public MemoryStream CreateWord()
{
    // Creating a new Word document
    WordDocument document = new WordDocument();
    // Adding a new section to the document
    WSection section = document.AddSection() as WSection;
    // Set Margin of the section
    section.PageSetup.Margins.All = 72;
    // Set page size of the section
    section.PageSetup.PageSize = new Syncfusion.Drawing.SizeF(612, 792);

    // Create Paragraph styles
    WParagraphStyle style = document.AddParagraphStyle("Normal") as WParagraphStyle;
    style.CharacterFormat.FontName = "Calibri";
    style.CharacterFormat.FontSize = 11f;
    style.ParagraphFormat.BeforeSpacing = 0;
    style.ParagraphFormat.AfterSpacing = 8;
    style.ParagraphFormat.LineSpacing = 13.8f;

    style = document.AddParagraphStyle("Heading 1") as WParagraphStyle;
    style.ApplyBaseStyle("Normal");
    style.CharacterFormat.FontName = "Calibri Light";
    style.CharacterFormat.FontSize = 16f;
    style.CharacterFormat.TextColor = Syncfusion.Drawing.Color.FromArgb(46, 116, 181);
    style.ParagraphFormat.BeforeSpacing = 12;
    style.ParagraphFormat.AfterSpacing = 0;
    style.ParagraphFormat.Keep = true;
    style.ParagraphFormat.KeepFollow = true;
    style.ParagraphFormat.OutlineLevel = OutlineLevel.Level1;

    IWParagraph paragraph = section.HeadersFooters.Header.AddParagraph();
    paragraph.ApplyStyle("Normal");
    paragraph.ParagraphFormat.HorizontalAlignment = HorizontalAlignment.Left;
    WTextRange textRange = paragraph.AppendText("Adventure Works Cycles") as WTextRange;
    textRange.CharacterFormat.FontSize = 12f;
    textRange.CharacterFormat.FontName = "Calibri";
    textRange.CharacterFormat.TextColor = Syncfusion.Drawing.Color.Red;

    // Appends paragraph
    paragraph = section.AddParagraph();
    paragraph.ApplyStyle("Heading 1");
    paragraph.ParagraphFormat.HorizontalAlignment = HorizontalAlignment.Center;
    textRange = paragraph.AppendText("Adventure Works Cycles") as WTextRange;
    textRange.CharacterFormat.FontSize = 18f;
    textRange.CharacterFormat.FontName = "Calibri";

    // Appends paragraph
    paragraph = section.AddParagraph();
    paragraph.ParagraphFormat.FirstLineIndent = 36;
    paragraph.BreakCharacterFormat.FontSize = 12f;
    textRange = paragraph.AppendText("Adventure Works Cycles, the fictitious company on which the AdventureWorks sample databases are based, is a large, multinational manufacturing company. The company manufactures and sells metal and composite bicycles to North American, European and Asian commercial markets. While its base operation is in Bothell, Washington with 290 employees, several regional sales teams are located throughout their market base.") as WTextRange;
    textRange.CharacterFormat.FontSize = 12f;

    // Appends paragraph
    paragraph = section.AddParagraph();
    paragraph.ParagraphFormat.FirstLineIndent = 36;
    paragraph.BreakCharacterFormat.FontSize = 12f;
    textRange = paragraph.AppendText("In 2000, AdventureWorks Cycles bought a small manufacturing plant, Importadores Neptuno, located in Mexico. Importadores Neptuno manufactures several critical subcomponents for the AdventureWorks Cycles product line. These subcomponents are shipped to the Bothell location for final product assembly. In 2001, Importadores Neptuno, became the sole manufacturer and distributor of the touring bicycle product group.") as WTextRange;
    textRange.CharacterFormat.FontSize = 12f;

    // Saves the Word document to MemoryStream
    MemoryStream stream = new MemoryStream();
    document.Save(stream, FormatType.Docx);
    // Closes the Word document
    document.Close();
    stream.Position = 0;
    return stream;
}
{% endhighlight %}

{% endtabs %}

Step 8: Add the service in `Program.cs`. 
Add the following line to the `Program.cs` file to register `WordService` as a scoped service in the Blazor application. 

{% tabs %}
{% highlight c# tabtitle="C#" %}

builder.Services.AddScoped<Create_Word_document.Data.WordService>();

{% endhighlight %}
{% endtabs %}


Step 9: Create `FileUtils.cs` for JavaScript interoperability.
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

Step 10: Add JavaScript function to `App.razor`.
Add the following JavaScript function in the `App.razor` file located in the `Pages` folder.

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

Step 11: Add navigation link.
Add the following code snippet to the Navigation menu's Razor file in the `Shared` folder.

{% tabs %}

{% highlight HTML %}

<div class="nav-item px-3">
    <NavLink class="nav-link" href="docio">
        <span class="oi oi-list-rich" aria-hidden="true"></span> Create Word
    </NavLink>
</div>

{% endhighlight %}

{% endtabs %}

Step 12: Build the project.

Click on **Build** → **Build Solution** or press <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>B</kbd> to build the project.

Step 13: Run the project.

Click the Start button (green arrow) or press <kbd>F5</kbd> to run the application.

A complete working sample is available on [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Getting-Started/Blazor/Blazor-Web-Server-app).

Upon executing the program, the **Word document** will be generated as follows:

![Blazor Web Server App output Word document](Blazor_Images/Blazor_Output.png)

Click [here](https://www.syncfusion.com/document-processing/word-framework/blazor) to explore the rich set of Syncfusion<sup>&reg;</sup> Word library (DocIO) features.

## WASM Standalone Application

**Prerequisites:**

*   Visual Studio 2022.
*   Install [.NET 8 SDK](https://dotnet.microsoft.com/en-us/download/dotnet/8.0) or later.

Step 1: Create a new C# Blazor WASM app project.
Select "Blazor WebAssembly Standalone App" from the template and click **Next**.

![Create Blazor WebAssembly Standalone application in Visual Studio](Blazor_Images/Blazor_WASM.png)

Step 2: Install the `Syncfusion.DocIO.Net.Core` NuGet package.
To **create a Word document in a Blazor WASM Standalone app**, install [Syncfusion.DocIO.Net.Core](https://www.nuget.org/packages/Syncfusion.DocIO.Net.Core) into the Blazor project.

![Install DocIO.NET Core NuGet Package](Blazor_Images/Install_Nuget.png)

N> Starting with v16.2.0.x, if Syncfusion<sup>&reg;</sup> assemblies are referenced from trial setup or from the NuGet feed, the "Syncfusion.Licensing" assembly reference must also be added and a license key included in projects. Refer to this [link](https://help.syncfusion.com/common/essential-studio/licensing/overview) to know about registering Syncfusion<sup>&reg;</sup> license key in an application to use Syncfusion components.

Step 3: Create a Razor file named `DocIO.razor` in the `Pages` folder.
Add the following namespaces:

{% tabs %}

{% highlight c# tabtitle="C#" %}
@page "/DocIO"
@inject Microsoft.JSInterop.IJSRuntime JS
@using Syncfusion.DocIO
@using Syncfusion.DocIO.DLS
@using System.IO
{% endhighlight %}

{% endtabs %}

Step 4: Add a button to `DocIO.razor`.
Add the following code to create a new button that triggers document creation:

{% tabs %}

{% highlight CSHTML %}

<h2>Syncfusion DocIO Library (Essential DocIO)</h2>
<p>The Syncfusion Blazor DocIO library (Essential DocIO) is used to create, read, edit, and convert DocIO files in applications without Microsoft Office dependencies.</p>
<button class="btn btn-primary" @onclick="@CreateWord">Create Word</button>

{% endhighlight %}

{% endtabs %}

Step 5: Implement `CreateWord` method in `DocIO.razor`.
Create a new `async` method named `CreateWord` and include the following code snippet to **create a Word document in the Blazor** WASM Standalone app.

{% tabs %}

{% highlight c# tabtitle="C#" %}

@functions {
    async void CreateWord()
    {
        // Creating a new Word document
        WordDocument document = new WordDocument();
        // Adding a new section to the document
        WSection section = document.AddSection() as WSection;
        // Set Margin of the section
        section.PageSetup.Margins.All = 72;
        // Set page size of the section
        section.PageSetup.PageSize = new Syncfusion.Drawing.SizeF(612, 792);

        // Create Paragraph styles
        WParagraphStyle style = document.AddParagraphStyle("Normal") as WParagraphStyle;
        style.CharacterFormat.FontName = "Calibri";
        style.CharacterFormat.FontSize = 11f;
        style.ParagraphFormat.BeforeSpacing = 0;
        style.ParagraphFormat.AfterSpacing = 8;
        style.ParagraphFormat.LineSpacing = 13.8f;

        style = document.AddParagraphStyle("Heading 1") as WParagraphStyle;
        style.ApplyBaseStyle("Normal");
        style.CharacterFormat.FontName = "Calibri Light";
        style.CharacterFormat.FontSize = 16f;
        style.CharacterFormat.TextColor = Syncfusion.Drawing.Color.FromArgb(46, 116, 181);
        style.ParagraphFormat.BeforeSpacing = 12;
        style.ParagraphFormat.AfterSpacing = 0;
        style.ParagraphFormat.Keep = true;
        style.ParagraphFormat.KeepFollow = true;
        style.ParagraphFormat.OutlineLevel = OutlineLevel.Level1;

        IWParagraph paragraph = section.HeadersFooters.Header.AddParagraph();
        paragraph.ApplyStyle("Normal");
        paragraph.ParagraphFormat.HorizontalAlignment = HorizontalAlignment.Left;
        WTextRange textRange = paragraph.AppendText("Adventure Works Cycles") as WTextRange;
        textRange.CharacterFormat.FontSize = 12f;
        textRange.CharacterFormat.FontName = "Calibri";
        textRange.CharacterFormat.TextColor = Syncfusion.Drawing.Color.Red;

        // Appends paragraph
        paragraph = section.AddParagraph();
        paragraph.ApplyStyle("Heading 1");
        paragraph.ParagraphFormat.HorizontalAlignment = HorizontalAlignment.Center;
        textRange = paragraph.AppendText("Adventure Works Cycles") as WTextRange;
        textRange.CharacterFormat.FontSize = 18f;
        textRange.CharacterFormat.FontName = "Calibri";

        // Appends paragraph
        paragraph = section.AddParagraph();
        paragraph.ParagraphFormat.FirstLineIndent = 36;
        paragraph.BreakCharacterFormat.FontSize = 12f;
        textRange = paragraph.AppendText("Adventure Works Cycles, the fictitious company on which the AdventureWorks sample databases are based, is a large, multinational manufacturing company. The company manufactures and sells metal and composite bicycles to North American, European and Asian commercial markets. While its base operation is in Bothell, Washington with 290 employees, several regional sales teams are located throughout their market base.") as WTextRange;
        textRange.CharacterFormat.FontSize = 12f;

        // Appends paragraph
        paragraph = section.AddParagraph();
        paragraph.ParagraphFormat.FirstLineIndent = 36;
        paragraph.BreakCharacterFormat.FontSize = 12f;
        textRange = paragraph.AppendText("In 2000, AdventureWorks Cycles bought a small manufacturing plant, Importadores Neptuno, located in Mexico. Importadores Neptuno manufactures several critical subcomponents for the AdventureWorks Cycles product line. These subcomponents are shipped to the Bothell location for final product assembly. In 2001, Importadores Neptuno, became the sole manufacturer and distributor of the touring bicycle product group.") as WTextRange;
        textRange.CharacterFormat.FontSize = 12f;

        // Saves the Word document to MemoryStream
        MemoryStream stream = new MemoryStream();
        document.Save(stream, FormatType.Docx);
        // Closes the Word document
        document.Close();
        stream.Position = 0;
        // Download the Word document in the browser
        JS.SaveAs("Sample.docx", stream.ToArray());
    }
}
{% endhighlight %}

{% endtabs %}

Step 6: Create `FileUtils.cs` for JavaScript interoperability.
Create a class file named `FileUtils` and add the following code to invoke the JavaScript action for file download in the browser.

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

Step 7: Add JavaScript function to `index.html`.
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

Step 8: Add navigation link.
Add the following code snippet to the Navigation menu's Razor file in the `Shared`folder.

{% tabs %}

{% highlight HTML %}

<div class="nav-item px-3">
    <NavLink class="nav-link" href="docio">
        <span class="oi oi-list-rich" aria-hidden="true"></span> Create Word
    </NavLink>
</div>

{% endhighlight %}

{% endtabs %}

Step 9: Build the project.

Click on **Build** → **Build Solution** or press <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>B</kbd> to build the project.


Step 10: Run the project.

Click the Start button (green arrow) or press <kbd>F5</kbd> to run the application.

A complete working sample is available on [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Getting-Started/Blazor/Blazor-WASM-Standalone-app).

Upon executing the program, the **Word document** will be generated as follows:

![Blazor WASM Standalone output Word document](Blazor_Images/Blazor_Output.png)

N> While the Word library functions in WASM Standalone, server-side deployment is recommended. WASM Standalone deployment increases the application payload size.

Kindly explore the [supported and unsupported features of the Word library in Blazor](https://help.syncfusion.com/document-processing/word/word-library/net/supported-and-unsupported-features#blazor-supported-features).

Click [here](https://www.syncfusion.com/document-processing/word-framework/blazor) to explore the rich set of Syncfusion<sup>&reg;</sup> Word library (DocIO) features. 

