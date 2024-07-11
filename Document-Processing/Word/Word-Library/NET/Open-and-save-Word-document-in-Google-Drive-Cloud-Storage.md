---
title: Open and save Word document in Google Drive Cloud Storage | Syncfusion
description: Open and save Word document in Google Drive Cloud Storage using Syncfusion .NET Core Word (DocIO) library without Microsoft Word or interop dependencies.
platform: document-processing
control: DocIO
documentation: UG
---

# Open and Save Word document in Google Drive Cloud Storage

## Prerequisites  

* You must set up a project in the Google Developers Console and enable the Google Drive API. Obtain the necessary credentials to access the API. For more information, view the official [link](https://developers.google.com/drive/api/guides/enable-sdk).

## Open Word document from Google Drive Cloud Storage

Steps to open a Word document from Google Drive Cloud Storage.

Step 1: Create a new ASP.NET Core Web Application (Model-View-Controller).

![Create a ASP.NET Core Web App project in visual studio](Cloud-Storage/Google-Drive/Create-ASPNET-Core-App.png)

Step 2: Name the project.

![Name the project](Cloud-Storage/Google-Drive/Name-the-project-for-open-document.png)

Step 3: Install the following **Nuget packages** in your application from [NuGet.org](https://www.nuget.org/).

* [Syncfusion.DocIO.Net.Core](https://www.nuget.org/packages/Syncfusion.DocIO.Net.Core)
* [Google.Apis.Drive.v3](https://www.nuget.org/packages/Google.Apis.Drive.v3)

![Install Syncfusion.DocIO.Net.Core NuGet Package](Cloud-Storage/Google-Drive/DocIO-NuGet-package-for-ASPNET-Core-for-open-document.png)
![Install Google.Apis.Drive.v3 NuGet Package](Cloud-Storage/Google-Drive/Google-Drive-NuGet-package-for-open-document.png)

Step 4: Add a new button in the **Index.cshtml** as shown below.

{% tabs %}  
{% highlight CSHTML %}
@{Html.BeginForm("EditDocument", "Home", FormMethod.Get);
    {
        <div>
            <input type="submit" value="Edit Document" style="width:150px;height:27px" />
        </div>
    }
    Html.EndForm();
}
{% endhighlight %}
{% endtabs %}

Step 5: Include the following namespaces in **HomeController.cs**.

{% tabs %}
{% highlight c# tabtitle="C#" %}
using Google.Apis.Auth.OAuth2;
using Google.Apis.Drive.v3;
using Google.Apis.Services;
using Google.Apis.Util.Store;
using Syncfusion.DocIO.DLS;
{% endhighlight %}
{% endtabs %}

Step 6: Include the below code snippet in **HomeController.cs** to **open a Word document from Google Drive Cloud Storage**.

{% tabs %}
{% highlight c# tabtitle="C#" %}
public async Task<IActionResult> EditDocument()
{
    try
    {
        //Retrieve the document from Google Drive
        MemoryStream stream = await GetDocumentFromGoogleDrive();

        //Set the position to the beginning of the MemoryStream
        stream.Position = 0;

        //Create an instance of WordDocument
        using (WordDocument wordDocument = new WordDocument(stream, Syncfusion.DocIO.FormatType.Docx))
        {
            //Access the section in a Word document
            IWSection section = wordDocument.Sections[0];

            //Add new paragraph to the section
            IWParagraph paragraph = section.AddParagraph();
            paragraph.ParagraphFormat.FirstLineIndent = 36;
            paragraph.BreakCharacterFormat.FontSize = 12f;

            //Add new text to the paragraph
            IWTextRange textRange = paragraph.AppendText("In 2000, AdventureWorks Cycles bought a small manufacturing plant, Importadores Neptuno, located in Mexico. Importadores Neptuno manufactures several critical subcomponents for the AdventureWorks Cycles product line. These subcomponents are shipped to the Bothell location for final product assembly. In 2001, Importadores Neptuno, became the sole manufacturer and distributor of the touring bicycle product group.") as IWTextRange;
            textRange.CharacterFormat.FontSize = 12f;

            //Saving the Word document to a MemoryStream 
            MemoryStream outputStream = new MemoryStream();
            wordDocument.Save(outputStream, Syncfusion.DocIO.FormatType.Docx);

            //Download the Word file in the browser
            FileStreamResult fileStreamResult = new FileStreamResult(outputStream, "application/msword");
            fileStreamResult.FileDownloadName = "EditWord.docx";
            return fileStreamResult;
        }
    }
    catch (Exception ex)
    {
        Console.WriteLine($"Error: {ex.Message}");
        return Content("Error occurred while processing the file.");
    }
}
{% endhighlight %}
{% endtabs %}

### Download file from Google Drive cloud storage

This is the helper method to download Word document from Google Drive cloud storage.

{% tabs %}
{% highlight c# tabtitle="C#" %}
/// <summary>
/// Download file from Google Drive cloud storage
/// </summary>
/// <returns></returns>
public async Task<MemoryStream> GetDocumentFromGoogleDrive()
{
    UserCredential credential;
    string[] Scopes = { DriveService.Scope.DriveReadonly };
    string ApplicationName = "YourAppName";

    //Specify the file ID of the file you want to open
    string fileId = "YOUR_FILE_ID";

    try
    {
        //Load Google Drive API credentials from a file
        using (var credentialsStream = new FileStream("credentials.json", FileMode.Open, FileAccess.Read))
        {
            string credPath = "token.json";
            credential = GoogleWebAuthorizationBroker.AuthorizeAsync(GoogleClientSecrets.Load(credentialsStream).Secrets, Scopes, "user", CancellationToken.None, new FileDataStore(credPath, true)).Result;
        }

        //Create a new instance of Google Drive service
        var service = new DriveService(new BaseClientService.Initializer()
        {
            HttpClientInitializer = credential,
            ApplicationName = ApplicationName,
        });                

        //Download the file from Google Drive
        var request = service.Files.Get(fileId);
        var stream = new MemoryStream();
        request.Download(stream);

        return stream;                
    }
    catch (Exception ex)
    {
        Console.WriteLine($"Error retrieving document from Google Drive: {ex.Message}");
        throw; // or handle the exception as needed
    }
}
{% endhighlight %}
{% endtabs %}

You can download a complete working sample from [GitHub]().

By executing the program, you will get the **Word document** as follows.

![Output Word document](Cloud-Storage/Google-Drive/Output-Word-for-open-document.png)

## Save Word document to Google Drive Cloud Storage

Steps to save a Word document to Google Drive Cloud Storage.

Step 1: Create a new ASP.NET Core Web Application (Model-View-Controller).

![Create a ASP.NET Core Web App project in visual studio](Cloud-Storage/Google-Drive/Create-ASPNET-Core-App.png)

Step 2: Name the project.

![Name the project](Cloud-Storage/Google-Drive/Name-the-project-for-save-document.png)

Step 3: Install the following **Nuget packages** in your application from [NuGet.org](https://www.nuget.org/).

* [Syncfusion.DocIO.Net.Core](https://www.nuget.org/packages/Syncfusion.DocIO.Net.Core)
* [Google.Apis.Drive.v3](https://www.nuget.org/packages/Google.Apis.Drive.v3)

![Install Syncfusion.DocIO.Net.Core NuGet Package](Cloud-Storage/Google-Drive/DocIO-NuGet-package-for-ASPNET-Core-for-save-document.png)
![Install Google.Apis.Drive.v3 NuGet Package](Cloud-Storage/Google-Drive/Google-Drive-NuGet-package-for-save-document.png)

Step 4: Add a new button in the **Index.cshtml** as shown below.

{% tabs %}  
{% highlight CSHTML %}
@{Html.BeginForm("UploadDocument", "Home", FormMethod.Get);
    {
        <div>
            <input type="submit" value="Upload Document" style="width:150px;height:27px" />
        </div>
    }
    Html.EndForm();
}
{% endhighlight %}
{% endtabs %}

Step 5: Include the following namespaces in **HomeController.cs**.

{% tabs %}
{% highlight c# tabtitle="C#" %}
using Google.Apis.Auth.OAuth2;
using Google.Apis.Drive.v3;
using Google.Apis.Services;
using Google.Apis.Util.Store;
using Syncfusion.DocIO.DLS;
using Syncfusion.DocIO;
{% endhighlight %}
{% endtabs %}

Step 6: Include the below code snippet in **HomeController.cs** to **save a Word document to Google Drive Cloud Storage**.

{% tabs %}
{% highlight c# tabtitle="C#" %}
public async Task<IActionResult> UploadDocument()
{
    //Creating a new document
    WordDocument document = new WordDocument();

    //Adding a new section to the document
    WSection section = document.AddSection() as WSection;

    //Set Margin of the section
    section.PageSetup.Margins.All = 72;

    //Set page size of the section
    section.PageSetup.PageSize = new Syncfusion.Drawing.SizeF(612, 792);

    //Create Paragraph styles
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

    //Gets the image stream
    FileStream imageStream = new FileStream("AdventureCycle.jpg", FileMode.Open, FileAccess.Read);
    IWPicture picture = paragraph.AppendPicture(imageStream);
    picture.TextWrappingStyle = TextWrappingStyle.InFrontOfText;
    picture.VerticalOrigin = VerticalOrigin.Margin;
    picture.VerticalPosition = -45;
    picture.HorizontalOrigin = HorizontalOrigin.Column;
    picture.HorizontalPosition = 263.5f;
    picture.WidthScale = 20;
    picture.HeightScale = 15;

    paragraph.ApplyStyle("Normal");
    paragraph.ParagraphFormat.HorizontalAlignment = HorizontalAlignment.Left;
    WTextRange textRange = paragraph.AppendText("Adventure Works Cycles") as WTextRange;
    textRange.CharacterFormat.FontSize = 12f;
    textRange.CharacterFormat.FontName = "Calibri";
    textRange.CharacterFormat.TextColor = Syncfusion.Drawing.Color.Red;

    //Appends paragraph
    paragraph = section.AddParagraph();
    paragraph.ApplyStyle("Heading 1");
    paragraph.ParagraphFormat.HorizontalAlignment = HorizontalAlignment.Center;
    textRange = paragraph.AppendText("Adventure Works Cycles") as WTextRange;
    textRange.CharacterFormat.FontSize = 18f;
    textRange.CharacterFormat.FontName = "Calibri";

    //Appends paragraph
    paragraph = section.AddParagraph();
    paragraph.ParagraphFormat.FirstLineIndent = 36;
    paragraph.BreakCharacterFormat.FontSize = 12f;
    textRange = paragraph.AppendText("Adventure Works Cycles, the fictitious company on which the AdventureWorks sample databases are based, is a large, multinational manufacturing company. The company manufactures and sells metal and composite bicycles to North American, European and Asian commercial markets. While its base operation is in Bothell, Washington with 290 employees, several regional sales teams are located throughout their market base.") as WTextRange;
    textRange.CharacterFormat.FontSize = 12f;

    //Appends paragraph
    paragraph = section.AddParagraph();
    paragraph.ParagraphFormat.FirstLineIndent = 36;
    paragraph.BreakCharacterFormat.FontSize = 12f;
    textRange = paragraph.AppendText("In 2000, AdventureWorks Cycles bought a small manufacturing plant, Importadores Neptuno, located in Mexico. Importadores Neptuno manufactures several critical subcomponents for the AdventureWorks Cycles product line. These subcomponents are shipped to the Bothell location for final product assembly. In 2001, Importadores Neptuno, became the sole manufacturer and distributor of the touring bicycle product group.") as WTextRange;
    textRange.CharacterFormat.FontSize = 12f;

    paragraph = section.AddParagraph();
    paragraph.ApplyStyle("Heading 1");
    paragraph.ParagraphFormat.HorizontalAlignment = HorizontalAlignment.Left;
    textRange = paragraph.AppendText("Product Overview") as WTextRange;
    textRange.CharacterFormat.FontSize = 16f;
    textRange.CharacterFormat.FontName = "Calibri";

    //Appends table
    IWTable table = section.AddTable();
    table.ResetCells(3, 2);
    table.TableFormat.Borders.BorderType = BorderStyle.None;
    table.TableFormat.IsAutoResized = true;

    //Appends paragraph
    paragraph = table[0, 0].AddParagraph();
    paragraph.ParagraphFormat.AfterSpacing = 0;
    paragraph.BreakCharacterFormat.FontSize = 12f;

    //Appends picture to the paragraph
    FileStream image1 = new FileStream("Mountain-200.jpg", FileMode.Open, FileAccess.Read);
    picture = paragraph.AppendPicture(image1);
    picture.TextWrappingStyle = TextWrappingStyle.TopAndBottom;
    picture.VerticalOrigin = VerticalOrigin.Paragraph;
    picture.VerticalPosition = 4.5f;
    picture.HorizontalOrigin = HorizontalOrigin.Column;
    picture.HorizontalPosition = -2.15f;
    picture.WidthScale = 79;
    picture.HeightScale = 79;

    //Appends paragraph
    paragraph = table[0, 1].AddParagraph();
    paragraph.ApplyStyle("Heading 1");
    paragraph.ParagraphFormat.AfterSpacing = 0;
    paragraph.ParagraphFormat.LineSpacing = 12f;
    paragraph.AppendText("Mountain-200");

    //Appends paragraph
    paragraph = table[0, 1].AddParagraph();
    paragraph.ParagraphFormat.AfterSpacing = 0;
    paragraph.ParagraphFormat.LineSpacing = 12f;
    paragraph.BreakCharacterFormat.FontSize = 12f;
    paragraph.BreakCharacterFormat.FontName = "Times New Roman";
    textRange = paragraph.AppendText("Product No: BK-M68B-38\r") as WTextRange;
    textRange.CharacterFormat.FontSize = 12f;
    textRange.CharacterFormat.FontName = "Times New Roman";
    textRange = paragraph.AppendText("Size: 38\r") as WTextRange;
    textRange.CharacterFormat.FontSize = 12f;
    textRange.CharacterFormat.FontName = "Times New Roman";
    textRange = paragraph.AppendText("Weight: 25\r") as WTextRange;
    textRange.CharacterFormat.FontSize = 12f;
    textRange.CharacterFormat.FontName = "Times New Roman";
    textRange = paragraph.AppendText("Price: $2,294.99\r") as WTextRange;
    textRange.CharacterFormat.FontSize = 12f;
    textRange.CharacterFormat.FontName = "Times New Roman";

    //Appends paragraph
    paragraph = table[0, 1].AddParagraph();
    paragraph.ParagraphFormat.AfterSpacing = 0;
    paragraph.ParagraphFormat.LineSpacing = 12f;
    paragraph.BreakCharacterFormat.FontSize = 12f;

    //Appends paragraph
    paragraph = table[1, 0].AddParagraph();
    paragraph.ApplyStyle("Heading 1");
    paragraph.ParagraphFormat.AfterSpacing = 0;
    paragraph.ParagraphFormat.LineSpacing = 12f;
    paragraph.AppendText("Mountain-300 ");

    //Appends paragraph
    paragraph = table[1, 0].AddParagraph();
    paragraph.ParagraphFormat.AfterSpacing = 0;
    paragraph.ParagraphFormat.LineSpacing = 12f;
    paragraph.BreakCharacterFormat.FontSize = 12f;
    paragraph.BreakCharacterFormat.FontName = "Times New Roman";
    textRange = paragraph.AppendText("Product No: BK-M47B-38\r") as WTextRange;
    textRange.CharacterFormat.FontSize = 12f;
    textRange.CharacterFormat.FontName = "Times New Roman";
    textRange = paragraph.AppendText("Size: 35\r") as WTextRange;
    textRange.CharacterFormat.FontSize = 12f;
    textRange.CharacterFormat.FontName = "Times New Roman";
    textRange = paragraph.AppendText("Weight: 22\r") as WTextRange;
    textRange.CharacterFormat.FontSize = 12f;
    textRange.CharacterFormat.FontName = "Times New Roman";
    textRange = paragraph.AppendText("Price: $1,079.99\r") as WTextRange;
    textRange.CharacterFormat.FontSize = 12f;
    textRange.CharacterFormat.FontName = "Times New Roman";

    //Appends paragraph
    paragraph = table[1, 0].AddParagraph();
    paragraph.ParagraphFormat.AfterSpacing = 0;
    paragraph.ParagraphFormat.LineSpacing = 12f;
    paragraph.BreakCharacterFormat.FontSize = 12f;

    //Appends paragraph
    paragraph = table[1, 1].AddParagraph();
    paragraph.ApplyStyle("Heading 1");
    paragraph.ParagraphFormat.LineSpacing = 12f;

    //Appends picture to the paragraph
    FileStream image2 = new FileStream("Mountain-300.jpg", FileMode.Open, FileAccess.Read);
    picture = paragraph.AppendPicture(image2);
    picture.TextWrappingStyle = TextWrappingStyle.TopAndBottom;
    picture.VerticalOrigin = VerticalOrigin.Paragraph;
    picture.VerticalPosition = 8.2f;
    picture.HorizontalOrigin = HorizontalOrigin.Column;
    picture.HorizontalPosition = -14.95f;
    picture.WidthScale = 75;
    picture.HeightScale = 75;

    //Appends paragraph
    paragraph = table[2, 0].AddParagraph();
    paragraph.ApplyStyle("Heading 1");
    paragraph.ParagraphFormat.LineSpacing = 12f;

    //Appends picture to the paragraph
    FileStream image3 = new FileStream("Road-550-W.jpg", FileMode.Open, FileAccess.Read);
    picture = paragraph.AppendPicture(image3);
    picture.TextWrappingStyle = TextWrappingStyle.TopAndBottom;
    picture.VerticalOrigin = VerticalOrigin.Paragraph;
    picture.VerticalPosition = 3.75f;
    picture.HorizontalOrigin = HorizontalOrigin.Column;
    picture.HorizontalPosition = -5f;
    picture.WidthScale = 92;
    picture.HeightScale = 92;

    //Appends paragraph
    paragraph = table[2, 1].AddParagraph();
    paragraph.ApplyStyle("Heading 1");
    paragraph.ParagraphFormat.AfterSpacing = 0;
    paragraph.ParagraphFormat.LineSpacing = 12f;
    paragraph.AppendText("Road-150 ");

    //Appends paragraph
    paragraph = table[2, 1].AddParagraph();
    paragraph.ParagraphFormat.AfterSpacing = 0;
    paragraph.ParagraphFormat.LineSpacing = 12f;
    paragraph.BreakCharacterFormat.FontSize = 12f;
    paragraph.BreakCharacterFormat.FontName = "Times New Roman";
    textRange = paragraph.AppendText("Product No: BK-R93R-44\r") as WTextRange;
    textRange.CharacterFormat.FontSize = 12f;
    textRange.CharacterFormat.FontName = "Times New Roman";
    textRange = paragraph.AppendText("Size: 44\r") as WTextRange;
    textRange.CharacterFormat.FontSize = 12f;
    textRange.CharacterFormat.FontName = "Times New Roman";
    textRange = paragraph.AppendText("Weight: 14\r") as WTextRange;
    textRange.CharacterFormat.FontSize = 12f;
    textRange.CharacterFormat.FontName = "Times New Roman";
    textRange = paragraph.AppendText("Price: $3,578.27\r") as WTextRange;
    textRange.CharacterFormat.FontSize = 12f;
    textRange.CharacterFormat.FontName = "Times New Roman";

    //Appends paragraph
    section.AddParagraph();

    //Saves the Word document to MemoryStream
    MemoryStream stream = new MemoryStream();
    document.Save(stream, FormatType.Docx);

    //Upload the document to Google Drive
    await UploadDocumentToGoogleDrive(stream);

    return Ok("Word document uploaded to Google Drive Cloud Storage.");
}
{% endhighlight %}
{% endtabs %}

### Upload file to Google Drive cloud storage

This is the helper method to upload Word document to Google Drive cloud storage.

{% tabs %}
{% highlight c# tabtitle="C#" %}
/// <summary>
/// Upload file to Google Drive
/// </summary>
/// <param name="stream"></param>
/// <returns></returns>
public async Task<MemoryStream> UploadDocumentToGoogleDrive(MemoryStream stream)
{
    UserCredential credential;
    string[] Scopes = { DriveService.Scope.Drive };
    string ApplicationName = "YourAppName";
    FilesResource.CreateMediaUpload request;

    try
    {
        //Load Google Drive API credentials from a file
        using (var credentialsStream = new FileStream("credentials.json", FileMode.Open, FileAccess.Read))
        {
            string credPath = "token.json";
            credential = GoogleWebAuthorizationBroker.AuthorizeAsync(GoogleClientSecrets.Load(credentialsStream).Secrets, Scopes, "user", CancellationToken.None, new FileDataStore(credPath, true)).Result;
        }

        //Create a new instance of Google Drive service
        var service = new DriveService(new BaseClientService.Initializer()
        {
            HttpClientInitializer = credential,
            ApplicationName = ApplicationName,
        });

        //Create metadata for the file to be uploaded
        var fileMetadata = new Google.Apis.Drive.v3.Data.File()
        {
            Name = "CreateWord.docx", //Name of the file in Google Drive
            MimeType = "application/msword",
        };

        using (var uploadStream = new MemoryStream(stream.ToArray()))
        {
            //Create an upload request for Google Drive
            request = service.Files.Create(fileMetadata, uploadStream, "application/msword");
            //Upload the file
            request.Upload();
        }

        Console.WriteLine("Upload completed successfully");
    }
    catch (Exception e)
    {
        Console.WriteLine("Unknown encountered on server. Message:'{0}' when writing an object", e.Message);
    }
    return stream;
}
{% endhighlight %}
{% endtabs %}

You can download a complete working sample from [GitHub]().

By executing the program, you will get the **Word document** as follows.

![Output Word document](Cloud-Storage/Google-Drive/Output-Word-for-create-document.png)
