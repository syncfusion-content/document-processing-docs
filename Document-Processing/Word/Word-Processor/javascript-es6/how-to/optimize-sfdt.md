---
layout: post
title: How to Optimize SFDT Files in TypeScript DOCX Editor | Syncfusion
description: Optimize SFDT files in Syncfusion® TypeScript DOCX Editor to reduce file size, improve performance, and enhance document loading and processing efficiency.
platform: document-processing
control: Optimize SFDT
documentation: ug
domainurl: ##DomainURL##
---

# How to Optimize SFDT Files in TypeScript DOCX Editor

Starting from version v21.1.x, the SFDT file generated in the DOCX Editor component is optimized by default to reduce the file size. All static keys are minified, and the final JSON string is compressed. This helps reduce the SFDT file size relative to a DOCX file and provides the following benefits:
* File transfer between the client and server through the internet is faster.
* The new optimized SFDT files require less storage space than the old SFDT files.

Hence, the optimized SFDT file can't be directly manipulated as a JSON string.

N> This feature comes with a public API to switch between the old and new optimized SFDT formats, allowing backward compatibility.

For backward compatibility to create older-format SFDT files, refer to the following code changes.

<table>
<tr>
<td>Client/Server</td><td>Old Code</td><td>New Code from v21.1.x</td>
</tr>
<tr>
<td>Client-side</td>
<td>
{% tabs %} 
{% highlight ts tabtitle="Component Declaration" %}
let container: DocumentEditorContainer = new DocumentEditorContainer();
{% endhighlight %}
{% endtabs %}
</td>
<td>
{% tabs %} 
{% highlight ts tabtitle="Component Declaration" %}
let container: DocumentEditorContainer = new DocumentEditorContainer({ documentEditorSettings: { optimizeSfdt: false } });
{% endhighlight %}
{% endtabs %}
</td>
</tr>
<tr>
<td>Server-side C#</td>
<td>
{% tabs %} 
{% highlight c# tabtitle="Import" %}
WordDocument sfdtDocument = WordDocument.Load(stream, formatType);
string sfdt = Newtonsoft.Json.JsonConvert.SerializeObject(sfdtDocument);
{% endhighlight %}
{% endtabs %}
</td>
<td>
{% tabs %} 
{% highlight c# tabtitle="Import" %}
WordDocument sfdtDocument = WordDocument.Load(stream, formatType);
sfdtDocument.OptimizeSfdt = false;
string sfdt = Newtonsoft.Json.JsonConvert.SerializeObject(sfdtDocument);
{% endhighlight %}
{% endtabs %}
</td>
</tr>
<tr>
<td>Server-side Java</td>
<td>
{% tabs %} 
{% highlight java tabtitle="Import" %}
String sfdtDocument = WordProcessorHelper.load(stream, formatType);
{% endhighlight %}
{% endtabs %}
</td>
<td>
{% tabs %} 
{% highlight java tabtitle="Import" %}
String sfdtDocument = WordProcessorHelper.load(stream, formatType, false);
{% endhighlight %}
{% endtabs %}
</td>
</tr>
</table>

To convert a new optimized SFDT file to the older SFDT format, refer to the following code example.

<table>
<tr>
<td>Client/Server</td><td>Code example</td>
</tr>
<tr>
<td>Client-side</td>
<td>
{% tabs %} 
{% highlight ts tabtitle="Component Declaration" %}
let container: DocumentEditorContainer = new DocumentEditorContainer({ documentEditorSettings: { optimizeSfdt: false } });
{% endhighlight %}
{% endtabs %}
</td>
</tr>
<tr>
<td>Server-side C#</td>
<td>
{% tabs %} 
{% highlight c# tabtitle="Import" %}
using (Syncfusion.DocIO.DLS.WordDocument docIODocument = WordDocument.Save(optimizedSfdt)) {
   sfdtDocument = WordDocument.Load(docIODocument);
   sfdtDocument.OptimizeSfdt = false;
   string oldSfdt = JsonSerializer.Serialize(sfdtDocument);
}
{% endhighlight %}
{% endtabs %}
</td>
</tr>
<tr>
<td>Server-side Java</td>
<td>
{% tabs %} 
{% highlight java tabtitle="Import" %}
WordDocument docIODocument = WordProcessorHelper.save(optimizedSfdt);
String oldSfdt = WordProcessorHelper.load(docIODocument, false);
{% endhighlight %}
{% endtabs %}
</td>
</tr>
</table>