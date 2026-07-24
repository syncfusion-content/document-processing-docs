---
layout: post
title: MVC in the React DOCX Editor component | Syncfusion
description: Learn here all about MVC in the Syncfusion React DOCX Editor component of Syncfusion Essential JS 2 and more.
control: Mvc 
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# MVC in the React Document Editor component

DocumentEditor depends on server-side interactions for the operations listed below, which can be written in ASP.NET MVC using [Syncfusion.EJ2.WordEditor.AspNet.Mvc5](https://www.nuget.org/packages/Syncfusion.EJ2.WordEditor.AspNet.Mvc5) or [Syncfusion.EJ2.WordEditor.AspNet.Mvc4](https://www.nuget.org/packages/Syncfusion.EJ2.WordEditor.AspNet.Mvc4).

* Import Word Document
* Paste with formatting
* Restrict Editing
* Spell Check
* Save as file formats other than SFDT and DOCX

This section explains how to create the service for DocumentEditor in ASP.NET MVC.

## Importing Word documents

As the Document Editor client-side script requires the document in SFDT file format, you can convert the Word documents (.dotx,.docx,.docm,.dot,.doc), rich text format documents (.rtf), and text documents (.txt) into SFDT format by using this Web API.

The following example code illustrates how to write a Web API for importing Word documents into the Document Editor component.

```csharp
    [HttpPost]
    [EnableCors("*", "*", "*")]
    [Route("Import")]
    public HttpResponseMessage Import()
    {
        if (HttpContext.Current.Request.Files.Count == 0)
            return null;

        HttpPostedFile file = HttpContext.Current.Request.Files[0];
        int index = file.FileName.LastIndexOf('.');
        string type = index > -1 && index < file.FileName.Length - 1 ?
            file.FileName.Substring(index) : ".docx";
        Stream stream = file.InputStream;
        stream.Position = 0;

        EJ2WordDocument document = EJ2WordDocument.Load(stream, GetFormatType(type.ToLower()));
        string json = Newtonsoft.Json.JsonConvert.SerializeObject(document);
        document.Dispose();
        return new HttpResponseMessage() { Content = new StringContent(json) };
    }
```

## Paste with formatting

This Web API converts the system clipboard data (HTML/RTF) to SFDT format which is required to paste content with formatting.

The following example code illustrates how to write a Web API for paste with formatting.

```csharp
    [HttpPost]
    [EnableCors("*", "*", "*")]
    [Route("SystemClipboard")]
    public HttpResponseMessage SystemClipboard([FromBody]CustomParameter param)
    {
        if (param.content != null && param.content != "")
        {
            try
            {
                Syncfusion.EJ2.DocumentEditor.WordDocument document = Syncfusion.EJ2.DocumentEditor.WordDocument.LoadString(param.content, GetFormatType(param.type.ToLower()));
                string json = Newtonsoft.Json.JsonConvert.SerializeObject(document);
                document.Dispose();
                return new HttpResponseMessage() { Content = new StringContent(json) };
            }
            catch (Exception)
            {
                return new HttpResponseMessage() { Content = new StringContent("") };
            }

        }
        return new HttpResponseMessage() { Content = new StringContent("") };
    }

    public class CustomParameter
    {
        public string content { get; set; }
        public string type { get; set; }
    }
```

## Restrict editing

This Web API generates a hash from the specified password and salt value which is required for the restrict editing functionality of the Document Editor component.

The following example code illustrates how to write a Web API to restrict editing.

```csharp
    [HttpPost]
    [EnableCors("*", "*", "*")]
    [Route("RestrictEditing")]
    public string[] RestrictEditing([FromBody] CustomRestrictParameter param)
    {
        if (param.passwordBase64 == "" || param.passwordBase64 == null)
            return null;
        return Syncfusion.EJ2.DocumentEditor.WordDocument.ComputeHash(param.passwordBase64, param.saltBase64, param.spinCount, param.algorithmSid);
    }

    public class CustomRestrictParameter
    {
        public string passwordBase64 { get; set; }
        public string saltBase64 { get; set; }
        public int spinCount { get; set; }
        public string algorithmSid { get; set; }
    }
```

## Spell Check

Document Editor supports performing spell checking for any input text. You can perform spell checking for the text in Document Editor and it will provide suggestions for the misspelled words through a dialog and the context menu. The Document Editor client-side script requires this Web API to display error words and list suggestions in the context menu. This Web API returns a JSON response containing details about the spell-checked words, including error words and suggestions if any.

To know more about configuring spell check, refer to this [link](https://github.com/SyncfusionExamples/EJ2-Document-Editor-Web-Services/tree/master/ASP.NET%20MVC#steps-to-configure-spell-checker).

In the `Global.asax.cs` file, you can configure the spell check files as below:

```csharp
    internal static List<DictionaryData> spellDictCollection;
    internal static string path;
    internal static string personalDictPath;
    protected void Application_Start()
    {
        GlobalConfiguration.Configure(WebApiConfig.Register);
        //check the spell check dictionary path environment variable value and assign default data folder
        //if it is null.
        string path = HostingEnvironment.MapPath("//App_Data//");
        //Set the default spellcheck.json file if the JSON filename is empty.
        string jsonFileName = HostingEnvironment.MapPath("//App_Data//spellcheck.json");
        if (System.IO.File.Exists(jsonFileName))
        {
            string jsonImport = System.IO.File.ReadAllText(jsonFileName);
            List<DictionaryData> spellChecks = JsonConvert.DeserializeObject<List<DictionaryData>>(jsonImport);
            spellDictCollection = new List<DictionaryData>();
            //construct the dictionary file path using customer provided path and dictionary name
            foreach (var spellCheck in spellChecks)
            {
                spellDictCollection.Add(new DictionaryData(spellCheck.LanguadeID, Path.Combine(path, spellCheck.DictionaryPath), Path.Combine(path, spellCheck.AffixPath)));
                personalDictPath = Path.Combine(path, spellCheck.PersonalDictPath);
            }
        }
    }
```

Document Editor provides options to spell check word by word and spell check page by page when loading documents.

### Spell check word by word

This Web API performs the spell check word by word and returns the JSON which contains information about error words and suggestions if any. By default, spell check word by word is performed in the Document Editor when spell check is enabled on the client side.

The following example code illustrates how to write a Web API for spell check word by word.

```csharp
    [HttpPost]
    [EnableCors("*", "*", "*")]
    [Route("SpellCheck")]
    public HttpResponseMessage SpellCheck([FromBody] SpellCheckJsonData spellChecker)
    {
       try
        {
            SpellChecker spellCheck = new SpellChecker(spellDictionary, personalDictPath);
            spellCheck.GetSuggestions(spellChecker.LanguageID, spellChecker.TexttoCheck, spellChecker.CheckSpelling, spellChecker.CheckSuggestion, spellChecker.AddWord);
            string json = Newtonsoft.Json.JsonConvert.SerializeObject(spellCheck);
            return new HttpResponseMessage() { Content = new StringContent(json) };
        }
        catch
        {
            return new HttpResponseMessage() { Content = new StringContent("{\"SpellCollection\":[],\"HasSpellingError\":false,\"Suggestions\":null}") };
        }
    }

    public class SpellCheckJsonData
    {
        public int LanguageID { get; set; }
        public string TexttoCheck { get; set; }
        public bool CheckSpelling { get; set; }
        public bool CheckSuggestion { get; set; }
        public bool AddWord { get; set; }
    }
```

### Spell check page by page

This Web API performs the spell check page by page and returns the JSON which contains information about error words and suggestions if any. By [enabling optimized spell check](../spell-check#enableoptimizedspellcheck) on the client side, you can perform spell check page by page when loading documents.

The following example code illustrates how to write a Web API for spell check page by page.

```csharp
    [HttpPost]
    [EnableCors("*", "*", "*")]
    [Route("SpellCheckByPage")]
    public HttpResponseMessage SpellCheckByPage([FromBody] SpellCheckJsonData spellChecker)
    {
        try
        {
            SpellChecker spellCheck = new SpellChecker(spellDictionary, personalDictPath);
            spellCheck.CheckSpelling(spellChecker.LanguageID, spellChecker.TexttoCheck);
            string json = Newtonsoft.Json.JsonConvert.SerializeObject(spellCheck);
            return new HttpResponseMessage() { Content = new StringContent(json) };
        }
        catch
        {
            return new HttpResponseMessage() { Content = new StringContent("{\"SpellCollection\":[],\"HasSpellingError\":false,\"Suggestions\":null}") };
        }
    }

    public class SpellCheckJsonData
    {
        public int LanguageID { get; set; }
        public string TexttoCheck { get; set; }
        public bool CheckSpelling { get; set; }
        public bool CheckSuggestion { get; set; }
        public bool AddWord { get; set; }
    }
```

## Save as file formats other than SFDT and DOCX

You can configure this API if you want to save the document in a file format other than DOCX and SFDT on the server side. You can save the document in the following ways:

### Save the document in a database or file server

This Web API saves the document on the server. You can customize this API to save the document into databases or file servers.

The following example code illustrates how to write a Web API to save a document on the server side.

```csharp
    [HttpPost]
    [EnableCors("AllowAllOrigins")]
    [Route("Save")]
    public void Save([FromBody] SaveParameter data)
    {
        string name = data.FileName;
        string format = RetrieveFileType(name);
        if (string.IsNullOrEmpty(name))
        {
            name = "Document1.doc";
        }
        WDocument document = WordDocument.Save(data.Content);
        // Saves the document to the server file system. You can customize this to save into databases or file servers based on your requirements.
        FileStream fileStream = new FileStream(name, FileMode.OpenOrCreate, FileAccess.ReadWrite);
        document.Save(fileStream, GetWFormatType(format));
        document.Close();
        fileStream.Close();
    }

    public class SaveParameter
    {
        public string Content { get; set; }
        public string FileName { get; set; }
    }
```

### Save as other file formats by passing SFDT string

This Web API converts the SFDT string to the required format and returns the document as a FileStreamResult to the client side. Using this API, you can save the document in a file format other than SFDT and DOCX and download the document in the client browser.

The following example code illustrates how to write a Web API to export SFDT.

```csharp
    [HttpPost]
    [EnableCors("AllowAllOrigins")]
    [Route("ExportSFDT")]
    public FileStreamResult ExportSFDT([FromBody] SaveParameter data)
    {
        string name = data.FileName;
        string format = RetrieveFileType(name);
        if (string.IsNullOrEmpty(name))
        {
            name = "Document1.doc";
        }
        WDocument document = WordDocument.Save(data.Content);
        return SaveDocument(document, format, name);
    }

    public class SaveParameter
    {
        public string Content { get; set; }
        public string FileName { get; set; }
    }

        private FileStreamResult SaveDocument(WDocument document, string format, string fileName)
    {
        Stream stream = new MemoryStream();
        string contentType = "";
        if (format == ".pdf")
        {
            contentType = "application/pdf";
        }
        else
        {
            WFormatType type = GetWFormatType(format);
            switch (type)
            {
                case WFormatType.Rtf:
                    contentType = "application/rtf";
                    break;
                case WFormatType.WordML:
                    contentType = "application/xml";
                    break;
                case WFormatType.Html:
                    contentType = "application/html";
                    break;
                case WFormatType.Dotx:
                    contentType = "application/vnd.openxmlformats-officedocument.wordprocessingml.template";
                    break;
                case WFormatType.Doc:
                    contentType = "application/msword";
                    break;
                case WFormatType.Dot:
                    contentType = "application/msword";
                    break;
            }
            document.Save(stream, type);
        }
        document.Close();
        stream.Position = 0;
        return new FileStreamResult(stream, contentType)
        {
            FileDownloadName = fileName
        };
    }
```

### Save as other file formats by passing DOCX file

This Web API converts the DOCX document to the required format and returns the document as a FileStreamResult to the client side. Using this API, you can save the document in a file format other than SFDT and DOCX and download the document in the client browser.

The following example code illustrates how to write a Web API to export.

```csharp
    [HttpPost]
    [EnableCors("AllowAllOrigins")]
    [Route("Export")]
    public FileStreamResult Export(IFormCollection data)
    {
        if (data.Files.Count == 0)
            return null;
        string fileName = this.GetValue(data, "filename");
        string name = fileName;
        string format = RetrieveFileType(name);
        if (string.IsNullOrEmpty(name))
        {
            name = "Document1";
        }
        WDocument document = this.GetDocument(data);
        return SaveDocument(document, format, fileName);
    }

    private string RetrieveFileType(string name)
    {
        int index = name.LastIndexOf('.');
        string format = index > -1 && index < name.Length - 1 ?
            name.Substring(index) : ".doc";
        return format;
    }

    private string GetValue(IFormCollection data, string key)
    {
        if (data.ContainsKey(key))
        {
            string[] values = data[key];
            if (values.Length > 0)
            {
                return values[0];
            }
        }
        return "";
    }
```

N> Please refer to the [ASP.NET MVC Web API sample](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices/tree/master/ASP.NET%20MVC).