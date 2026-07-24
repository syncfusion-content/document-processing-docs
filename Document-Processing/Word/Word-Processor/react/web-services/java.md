---
layout: post
title: Java in the React DOCX Editor component | Syncfusion
description: Learn here all about Java in the Syncfusion React DOCX Editor component of Syncfusion Essential JS 2 and more.
control: Java 
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Java in the React Document Editor component

This page illustrates how to create a web service in Java for the server-side dependencies of the Word Processor component (a.k.a. Document Editor). Document Editor depends on server-side interactions for the operations listed below, which can be written in Java using the `syncfusion-ej2-wordprocessor.jar` file.

* Import Word Document
* Paste with formatting
* Restrict Editing
* Spell Check
* Save as file formats other than SFDT and DOCX

## Supported Java versions

Syncfusion<sup style="font-size:70%">&reg;</sup> Java library supports Java SE 8.0 (1.8) or above.

## External jars required

The following jar files are required to be referenced in your Java application.

1. syncfusion-ej2-wordprocessor
2. syncfusion-docio
3. syncfusion-javahelper

## Download JAR file

The JAR file is available in both the [Syncfusion<sup style="font-size:70%">&reg;</sup> Essential-JS2](https://www.syncfusion.com/downloads/essential-js2) build and the Maven repository.

### Get JAR file from Syncfusion<sup style="font-size:70%">&reg;</sup> build

You can get the `syncfusion-ej2-wordprocessor.jar` and its dependent jar files from the Syncfusion<sup style="font-size:70%">&reg;</sup> build installed location.

**Syntax:**
> Jar file: `(installed location)/Syncfusion/Essential Studio/{Platform}/{version}/JarFiles/syncfusion-ej2-wordprocessor-{version}.jar`

**Example:**
> Jar file: `C:/Program Files (x86)/Syncfusion/Essential Studio/React - EJ2/18.4.0.30/JarFiles/syncfusion-ej2-wordprocessor-18.4.0.30.jar`

You can also get the jar files by installing [file format controls](https://www.syncfusion.com/sales/products/fileformats?utm_source=ug&utm_medium=listing&utm_campaign=java-word-processor#). You can find the required jars in the build installed location.

**Syntax:**
> Jar file: `(installed location)/Syncfusion/Essential Studio/{Platform}/{version}/JarFiles/syncfusion-ej2-wordprocessor-{version}.jar`

**Example:**
> Jar file: `C:/Program Files (x86)/Syncfusion/Essential Studio/FileFormats/18.4.0.30/JarFiles/syncfusion-ej2-wordprocessor-18.4.0.30.jar`

### Refer to the JAR from the Syncfusion<sup style="font-size:70%">&reg;</sup> Maven Repository

You can download the jars from the Syncfusion<sup style="font-size:70%">&reg;</sup> [Maven repository](https://jars.syncfusion.com/) to use our artifacts in your projects. It helps you use the Syncfusion<sup style="font-size:70%">&reg;</sup> Java packages without installing Essential Studio<sup style="font-size:70%">&reg;</sup> or platform installation for development with Syncfusion<sup style="font-size:70%">&reg;</sup> controls.

#### Download Syncfusion<sup style="font-size:70%">&reg;</sup> Java packages

You can easily download the Syncfusion<sup style="font-size:70%">&reg;</sup> packages for Java via the Maven repository. Follow the guidelines below to configure as per the tool.

#### Refer to the Maven repository in the build tool

##### Gradle

```
    repositories {
        maven {
        // Syncfusion maven repository to download the artifacts
        url "https://jars.syncfusion.com/repository/maven-public/"
        }
    }
```

##### Apache Maven

```
    <repository>
        <id>Syncfusion-Java</id>
        <name>Syncfusion Java repo</name>
        <url>https://jars.syncfusion.com/repository/maven-public/</url>
    </repository>
```

#### Refer to the Syncfusion<sup style="font-size:70%">&reg;</sup> package in your project as a dependency

##### Gradle

```
    dependencies {
        implementation 'com.syncfusion:syncfusion-ej2-wordprocessor:+'
    }
```

##### Apache Maven

```
    <dependency>
        <groupId>com.syncfusion</groupId>
        <artifactId>syncfusion-ej2-wordprocessor</artifactId>
        <version>18.4.0.30</version>
    </dependency>
```

This section explains how to create the Java web service for DocumentEditor.

## Importing Word documents

As the Document Editor client-side script requires the document in SFDT file format, you can convert the Word documents (.dotx,.docx,.docm), rich text format documents (.rtf), and text documents (.txt) into SFDT format by using this Web API.

N> The Document Editor Java library does not support the **DOC format** Word document. As the DOC format is an older file format, we recommend using the DOCX file format to take advantage of the latest features.

The following example code illustrates how to write a Web API for importing Word documents into the Document Editor component.

```java
    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping("/api/wordeditor/Import")
    public String uploadFile(@RequestParam("files") MultipartFile file) throws Exception {
        try {
            return WordProcessorHelper.load(file.getInputStream(), FormatType.Docx);
        } catch (Exception e) {
            e.printStackTrace();
            return "{\"sections\":[{\"blocks\":[{\"inlines\":[{\"text\":" + e.getMessage() + "}]}]}]}";
        }
    }
```

### Import a document with TIFF, EMF, and WMF images

Web browsers do not support displaying metafile images like EMF and WMF, or TIFF format images. As a fallback approach, you can convert the metafile/TIFF format image to a raster image using any image converter in the `MetafileImageParsed` event, and this fallback raster image will be displayed in the client-side Document Editor component.

N> In the `MetafileImageParsedEventArgs` event argument, you can get the metafile stream using the `getMetafileStream()` property, and you can get the `getIsMetafile()` boolean value to determine whether the image is a metafile image (WMF, EMF) or a TIFF format image. In the example below, the TIFF is converted to a raster image in the `ConvertTiffToRasterImage()` method using the TwelveMonkeys ImageIO TIFF library.

The following example code illustrates how to use the `MetafileImageParsed` event for creating a fallback raster image for a metafile present in a Word document.

```java
import com.syncfusion.javahelper.system.collections.generic.*;
import com.syncfusion.ej2.wordprocessor.*;
// Below import statements are used for TIFF image conversion
import javax.imageio.*;
import javax.imageio.spi.IIORegistry;
import java.awt.image.BufferedImage;
import java.io.*;
import com.twelvemonkeys.imageio.plugins.tiff.TIFFImageReaderSpi;

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping("/api/wordeditor/Import")
    public String importFile(@RequestParam("files") MultipartFile file) throws Exception {
        try {
            WordDocument docIoDocument = new WordDocument(file.getInputStream());

            MetafileImageParsedEventHandler metafileImageParsedEvent = new MetafileImageParsedEventHandler() {

                ListSupport<MetafileImageParsedEventHandler> delegateList = new ListSupport<MetafileImageParsedEventHandler>(
                        MetafileImageParsedEventHandler.class);

                // Represents event handling for MetafileImageParsedEventHandlerCollection.
                public void invoke(Object sender, MetafileImageParsedEventArgs args) throws Exception {
                    OnMetafileImageParsed(sender, args);
                }

                // Represents the method that handles MetafileImageParsed event.
                public void dynamicInvoke(Object... args) throws Exception {
                    OnMetafileImageParsed((Object) args[0], (MetafileImageParsedEventArgs) args[1]);
                }

                // Represents the method that handles MetafileImageParsed event to add collection item.
                public void add(MetafileImageParsedEventHandler delegate) throws Exception {
                    if (delegate != null)
                        delegateList.add(delegate);
                }

                // Represents the method that handles MetafileImageParsed event to remove collection
                // item.
                public void remove(MetafileImageParsedEventHandler delegate) throws Exception {
                    if (delegate != null)
                        delegateList.remove(delegate);
                }
            };
            // Hooks MetafileImageParsed event.
            WordProcessorHelper.MetafileImageParsed.add("OnMetafileImageParsed", metafileImageParsedEvent);
            // Converts DocIO DOM to SFDT DOM.
            String sfdtContent = WordProcessorHelper.load(docIoDocument);
            // Unhooks MetafileImageParsed event.
            WordProcessorHelper.MetafileImageParsed.remove("OnMetafileImageParsed", metafileImageParsedEvent);
            return sfdtContent;
        } catch (Exception e) {
            e.printStackTrace();
            return "{\"sections\":[{\"blocks\":[{\"inlines\":[{\"text\":" + e.getMessage() + "}]}]}]}";
        }
    }

    // Converts Metafile to raster image.
    private static void OnMetafileImageParsed(Object sender, MetafileImageParsedEventArgs args) {
        if (args.getIsMetafile())
        {
        	//MetaFile image conversion(EMF and WMF)
        	//You can write your own method definition for converting metafile to raster image using any third-party image converter.
        	args.setImageStream(ConvertMetafileToRasterImage(args.getMetafileStream())) ;
        }
        else
        {
        	//TIFF image conversion
        	args.setImageStream(ConvertTiffToRasterImage(args.getMetafileStream())) ;
        }
    }

    private static StreamSupport ConvertTiffToRasterImage(StreamSupport ImageStream) throws Exception {
        InputStream inputStream = StreamSupport.toStream(ImageStream);
        // Use ByteArrayOutputStream to collect data into a byte array
        ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();

        // Read data from the InputStream and write it to the ByteArrayOutputStream
        byte[] buffer = new byte[1024];
        int bytesRead;
        while ((bytesRead = inputStream.read(buffer)) != -1) {
            byteArrayOutputStream.write(buffer, 0, bytesRead);
        }

        // Convert the ByteArrayOutputStream to a byte array
        byte[] tiffData = byteArrayOutputStream.toByteArray();
        // Read TIFF image from byte array
        ByteArrayInputStream tiffInputStream = new ByteArrayInputStream(tiffData);
        IIORegistry.getDefaultInstance().registerServiceProvider(new TIFFImageReaderSpi());

        // Create ImageReader and ImageWriter instances
        ImageReader tiffReader = ImageIO.getImageReadersByFormatName("TIFF").next();
        ImageWriter pngWriter = ImageIO.getImageWritersByFormatName("PNG").next();

        // Set up input and output streams
        tiffReader.setInput(ImageIO.createImageInputStream(tiffInputStream));
        ByteArrayOutputStream pngOutputStream = new ByteArrayOutputStream();
        pngWriter.setOutput(ImageIO.createImageOutputStream(pngOutputStream));

        // Read the TIFF image and write it as a PNG
        BufferedImage image = tiffReader.read(0);
        pngWriter.write(image);
        pngWriter.dispose();
        byte[] jpgData = pngOutputStream.toByteArray();
        InputStream jpgStream = new ByteArrayInputStream(jpgData);
        return StreamSupport.toStream(jpgStream);
    }
```

## Paste with formatting

This Web API converts the system clipboard data (HTML/RTF) to SFDT format which is required to paste content with formatting.

The following example code illustrates how to write a Web API for paste with formatting.

```
    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping("/api/wordeditor/SystemClipboard")
    public String systemClipboard(@RequestBody CustomParameter param) {
        if (param.content != null && param.content != "") {
            try {
                MetafileImageParsedEventHandler metafileImageParsedEvent = new MetafileImageParsedEventHandler() {

                ListSupport<MetafileImageParsedEventHandler> delegateList = new ListSupport<MetafileImageParsedEventHandler>(
                        MetafileImageParsedEventHandler.class);

                // Represents event handling for MetafileImageParsedEventHandlerCollection.
                public void invoke(Object sender, MetafileImageParsedEventArgs args) throws Exception {
                    OnMetafileImageParsed(sender, args);
                }

                // Represents the method that handles MetafileImageParsed event.
                public void dynamicInvoke(Object... args) throws Exception {
                    OnMetafileImageParsed((Object) args[0], (MetafileImageParsedEventArgs) args[1]);
                }

                // Represents the method that handles MetafileImageParsed event to add collection item.
                public void add(MetafileImageParsedEventHandler delegate) throws Exception {
                    if (delegate != null)
                        delegateList.add(delegate);
                }

                // Represents the method that handles MetafileImageParsed event to remove collection
                // item.
                public void remove(MetafileImageParsedEventHandler delegate) throws Exception {
                    if (delegate != null)
                        delegateList.remove(delegate);
                }
            };
            // Hooks MetafileImageParsed event.
            WordProcessorHelper.MetafileImageParsed.add("OnMetafileImageParsed", metafileImageParsedEvent);
                // Converts Clipboard content to SFDT DOM.
            String sfdtContent = WordProcessorHelper.loadString(param.content, GetFormatType(param.type.toLowerCase()));
            // Unhooks MetafileImageParsed event.
            WordProcessorHelper.MetafileImageParsed.remove("OnMetafileImageParsed", metafileImageParsedEvent);
            return sfdtContent;
            } catch (Exception e) {
                return "";
            }
        }
        return "";
    }

    public class CustomParameter {
        public String content;
        public String type;
        public String getContent() {
            return content;
        }
        public String getType() {
            return type;
        }
        public void setContent(String value) {
            content= value;
        }
        public void setType(String value) {
            type = value;
        }
    }
    // Converts Metafile to raster image.
    private static void OnMetafileImageParsed(Object sender, MetafileImageParsedEventArgs args) {
        // You can write your own method definition for converting metafile to raster
        // image using any third-party image converter.
        args.setImageStream(ConvertMetafileToRasterImage(args.getMetafileStream())) ;
    }
```

N> Web browsers do not support displaying metafile images like EMF and WMF. As a fallback approach, you can convert the metafile to a raster image using any image converter in the `MetafileImageParsed` event, and this fallback raster image will be displayed in the client-side Document Editor component.

## Restrict editing

This Web API generates a hash from the specified password and salt value which is required for the restrict editing functionality of the Document Editor component.

The following example code illustrates how to write a Web API to restrict editing.

```
    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping("/api/wordeditor/RestrictEditing")
    public String[] restrictEditing(@RequestBody CustomRestrictParameter param) throws Exception {
        if (param.passwordBase64 == "" || param.passwordBase64 == null)
            return null;
        return WordProcessorHelper.computeHash(param.passwordBase64, param.saltBase64, param.spinCount, param.algorithmSid);
    }

    public class CustomRestrictParameter {
        public String passwordBase64;
        public String saltBase64;
        public int spinCount;
        public String algorithmSid;
        public String getPasswordBase64() {
            return passwordBase64;
        }
        public String getSaltBase64() {
            return saltBase64;
        }
        public int getSpinCount() {
            return spinCount;
        }
        public String getAlgorithmSid() {
            return algorithmSid;
        }
        public void setPasswordBase64(String value) {
            passwordBase64= value;
        }
        public void setSaltBase64(String value) {
            saltBase64= value;
        }
        public void setSpinCount(int value) {
            spinCount= value;
        }
        public void setAlgorithmSid(String value) {
            algorithmSid= value;
        }
    }
```

## Spell Check

Document Editor supports performing spell checking for any input text. You can perform spell checking for the text in Document Editor and it will provide suggestions for the misspelled words through a dialog and the context menu. The Document Editor client-side script requires this Web API to display error words and list suggestions in the context menu. This Web API returns a JSON response containing details about the spell-checked words, including error words and suggestions if any.

To know more about configuring spell check, refer to this [link](https://github.com/SyncfusionExamples/EJ2-Document-Editor-Web-Services/tree/master/Java#steps-to-configure-spell-checker).

In the controller file, you can configure the spell check files as below:

```
    List<DictionaryData> spellDictionary;
    String personalDictPath;

    public WordEditorController() throws Exception {
        String jsonFilePath = "src/main/resources/spellcheck.json";
        String jsonContent = new String(Files.readAllBytes(Paths.get(jsonFilePath)), StandardCharsets.UTF_8);
        JsonArray spellDictionaryItems = new Gson().fromJson(jsonContent, JsonArray.class);
        personalDictPath = "src/main/resources/customDict.dic";
        spellDictionary = new ArrayList<DictionaryData>();
        for(int i = 0; i < spellDictionaryItems.size(); i++) {
            JsonObject spellCheckerInfo = spellDictionaryItems.get(i).getAsJsonObject();
            DictionaryData dict = new DictionaryData();

            if(spellCheckerInfo.has("LanguadeID"))
                dict.setLanguadeID(spellCheckerInfo.get("LanguadeID").getAsInt());
            if(spellCheckerInfo.has("DictionaryPath"))
                dict.setDictionaryPath("src/main/resources/"+spellCheckerInfo.get("DictionaryPath").getAsString());
            if(spellCheckerInfo.has("AffixPath"))
                dict.setAffixPath("src/main/resources/"+spellCheckerInfo.get("AffixPath").getAsString());
            spellDictionary.add(dict);
        }
    }
```

Document Editor provides options to spell check word by word and spell check page by page when loading documents.

### Spell check word by word

This Web API performs the spell check word by word and returns the JSON which contains information about error words and suggestions if any. By default, spell check word by word is performed in the Document Editor when spell check is enabled on the client side.

The following example code illustrates how to write a Web API for spell check word by word.

```java
    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping("/api/wordeditor/SpellCheck")
    public String spellCheck(@RequestBody SpellCheckJsonData spellChecker) throws Exception {
        try {
              SpellChecker spellCheck = new SpellChecker(spellDictionary,personalDictPath);
               String data = spellCheck.getSuggestions(spellChecker.languageID, spellChecker.texttoCheck, spellChecker.checkSpelling, spellChecker.checkSuggestion, spellChecker.addWord);
              return data;
        } catch (Exception e) {
            e.printStackTrace();
            return "{\"SpellCollection\":[],\"HasSpellingError\":false,\"Suggestions\":null}";
        }
    }

    public class SpellCheckJsonData {

    @JsonProperty("LanguageID")
    int languageID;
    @JsonProperty("TexttoCheck")
    String texttoCheck;
    @JsonProperty("CheckSpelling")
    boolean checkSpelling;
    @JsonProperty("CheckSuggestion")
    boolean checkSuggestion;
    @JsonProperty("AddWord")
    boolean addWord;

    }
```

### Spell check page by page

This Web API performs the spell check page by page and returns the JSON which contains information about error words and suggestions if any. By [enabling optimized spell check](../spell-check#enableoptimizedspellcheck) on the client side, you can perform spell check page by page when loading documents.

The following example code illustrates how to write a Web API for spell check page by page.

```java

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping("/api/wordeditor/SpellCheckByPage")
    public String spellCheckByPage(@RequestBody SpellCheckJsonData spellChecker) throws Exception {
        try {
              SpellChecker spellCheck = new SpellChecker(spellDictionary,personalDictPath);
               String data = spellCheck.checkSpelling(spellChecker.languageID, spellChecker.texttoCheck);
              return data;
        } catch (Exception e) {
            e.printStackTrace();
            return "{\"SpellCollection\":[],\"HasSpellingError\":false,\"Suggestions\":null}";
        }
    }


    public class SpellCheckJsonData {

    @JsonProperty("LanguageID")
    int languageID;
    @JsonProperty("TexttoCheck")
    String texttoCheck;
    @JsonProperty("CheckSpelling")
    boolean checkSpelling;
    @JsonProperty("CheckSuggestion")
    boolean checkSuggestion;
    @JsonProperty("AddWord")
    boolean addWord;

    }
```

## Save as file formats other than SFDT and DOCX

You can configure this API if you want to save the document in a file format other than DOCX and SFDT on the server side. You can save the document in the following ways:

### Save the document in a database or file server

This Web API saves the document on the server. You can customize this API to save the document into databases or file servers.

The following example code illustrates how to write a Web API to save a document on the server side.

```java
    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping("/api/wordeditor/Save")
    public void save(@RequestBody SaveParameter data) throws Exception {
        try {
            String name = data.getFileName();
            String format = retrieveFileType(name);
            if (name == null || name.isEmpty()) {
                name = "Document1.docx";
            }
            WordDocument document = WordProcessorHelper.save(data.getContent());
            // Saves the document to the server file system. You can customize this to save into databases or file servers based on your requirements.
            FileOutputStream fileStream = new FileOutputStream(name);
            document.save(fileStream, getWFormatType(format));
            fileStream.close();
            document.close();
        } catch (Exception ex) {
            throw new Exception(ex.getMessage());
        }
    }

    public class SaveParameter {
        private String _content;
        private String _fileName;

        public String getContent() {
            return _content;
        }

        public String setContent(String value) {
            _content = value;
            return value;
        }

        public String getFileName() {
            return _fileName;
        }

        public String setFileName(String value) {
            _fileName = value;
            return value;
        }
    }
    static com.syncfusion.docio.FormatType getWFormatType(String format) throws Exception {
        if (format == null || format.trim().isEmpty())
            throw new Exception("EJ2 WordProcessor does not support this file format.");
        switch (format.toLowerCase()) {
        case ".dotx":
            return com.syncfusion.docio.FormatType.Dotx;
        case ".docm":
            return com.syncfusion.docio.FormatType.Docm;
        case ".dotm":
            return com.syncfusion.docio.FormatType.Dotm;
        case ".docx":
            return com.syncfusion.docio.FormatType.Docx;
        case ".rtf":
            return com.syncfusion.docio.FormatType.Rtf;
        case ".html":
            return com.syncfusion.docio.FormatType.Html;
        case ".txt":
            return com.syncfusion.docio.FormatType.Txt;
        case ".xml":
            return com.syncfusion.docio.FormatType.WordML;
        default:
            throw new Exception("EJ2 WordProcessor does not support this file format.");
        }
    }
```

### Save as other file formats by passing SFDT string

This Web API converts the SFDT string to the required format and returns the document as a FileStreamResult to the client side. Using this API, you can save the document in a file format other than SFDT and DOCX and download the document in the client browser.

The following example code illustrates how to write a Web API to export SFDT.

```java
    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping("/api/wordeditor/ExportSFDT")
    public ResponseEntity<Resource> exportSFDT(@RequestBody SaveParameter data) throws Exception {
        try {
            String name = data.getFileName();
            String format = retrieveFileType(name);
            if (name == null || name.isEmpty()) {
                name = "Document1.docx";
            }
            WordDocument document = WordProcessorHelper.save(data.getContent());
            return saveDocument(document, format);
        } catch (Exception ex) {
            throw new Exception(ex.getMessage());
        }
    }

    public class SaveParameter {
        private String _content;
        private String _fileName;

        public String getContent() {
            return _content;
        }

        public String setContent(String value) {
            _content = value;
            return value;
        }

        public String getFileName() {
            return _fileName;
        }

        public String setFileName(String value) {
            _fileName = value;
            return value;
        }
    }

    private ResponseEntity<Resource> saveDocument(WordDocument document, String format) throws Exception {
        String contentType = "";
        ByteArrayOutputStream outStream = new ByteArrayOutputStream();
        com.syncfusion.docio.FormatType type = getWFormatType(format);
        switch (type.toString()) {
        case "Rtf":
            contentType = "application/rtf";
            break;
        case "WordML":
            contentType = "application/xml";
            break;
        case "Dotx":
            contentType = "application/vnd.openxmlformats-officedocument.wordprocessingml.template";
            break;
        case "Html":
            contentType = "application/html";
            break;
        }
        document.save(outStream, type);
        ByteArrayResource resource = new ByteArrayResource(outStream.toByteArray());
        outStream.close();
        document.close();

        return ResponseEntity.ok().contentLength(resource.contentLength())
                .contentType(MediaType.parseMediaType(contentType)).body(resource);
    }
```

### Save as other file formats by passing DOCX file

This Web API converts the DOCX document to the required format and returns the document as a FileStreamResult to the client side. Using this API, you can save the document in a file format other than SFDT and DOCX and download the document in the client browser.

The following example code illustrates how to write a Web API to export.

```java
    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping("/api/wordeditor/Export")
    public ResponseEntity<Resource> export(@RequestParam("data") MultipartFile data, String fileName) throws Exception {
        try {
            String name = fileName;
            String format = retrieveFileType(name);
            if (name == null || name.isEmpty()) {
                name = "Document1";
            }
            WordDocument document = new WordDocument(data.getInputStream(), com.syncfusion.docio.FormatType.Docx);
            return saveDocument(document, format);
        } catch (Exception ex) {
            throw new Exception(ex.getMessage());
        }
    }

    private ResponseEntity<Resource> saveDocument(WordDocument document, String format) throws Exception {
        String contentType = "";
        ByteArrayOutputStream outStream = new ByteArrayOutputStream();
        com.syncfusion.docio.FormatType type = getWFormatType(format);
        switch (type.toString()) {
        case "Rtf":
            contentType = "application/rtf";
            break;
        case "WordML":
            contentType = "application/xml";
            break;
        case "Dotx":
            contentType = "application/vnd.openxmlformats-officedocument.wordprocessingml.template";
            break;
        case "Html":
            contentType = "application/html";
            break;
        }
        document.save(outStream, type);
        ByteArrayResource resource = new ByteArrayResource(outStream.toByteArray());
        outStream.close();
        document.close();

        return ResponseEntity.ok().contentLength(resource.contentLength())
                .contentType(MediaType.parseMediaType(contentType)).body(resource);
    }
```

N> Please refer to the [Java Web API example from GitHub](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices/tree/master/Java).