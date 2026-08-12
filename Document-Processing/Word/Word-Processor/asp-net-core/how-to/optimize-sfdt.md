---
layout: post
title: Optimize the SFDT file in DOCX Editor | Syncfusion
description: Learn here all about how to optimize the SFDT file in the Syncfusion Document Editor component of Syncfusion and more.
platform: document-processing
control: Optimize the SFDT file
documentation: ug
---

# Optimize the SFDT file in ASP.NET Core Document Editor

Starting from version v21.1.x, the SFDT file generated in the Word Processor component is optimized by default to reduce the file size. All static keys are minified, and the final JSON string is compressed. This helps reduce the SFDT file size relative to a DOCX file and provides the following benefits:

* File transfer between client and server through the internet gets faster.
* The new optimized SFDT files require less storage space than the old SFDT files.

Hence, the optimized SFDT file can't be directly manipulated as a JSON string.

N> This feature comes with a public API to switch between the old and new optimized SFDT format, allowing backward compatibility.

To create older-format SFDT files for backward compatibility, refer to the following code changes:

<table>
<tr>
<td>Client/Server</td><td>Old Code</td><td>New Code from v21.1.x</td>
</tr>
<tr>
<td>Client-side</td>
<td>



{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-core/optimize-sfdt/tagHelperOld %}
{% endhighlight %}
{% endtabs %}

</td>
<td>


{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-core/optimize-sfdt/tagHelper %}
{% endhighlight %}
{% endtabs %}



</td>
</tr>
<tr>
<td>Server-side C#</td>
<td>
{% tabs %}
{% highlight C# tabtitle="C#" %}
WordDocument sfdtDocument = WordDocument.Load(stream, formatType);
string sfdt = Newtonsoft.Json.JsonConvert.SerializeObject(sfdtDocument);
{% endhighlight %}
{% endtabs %}
</td>
<td>
{% tabs %}
{% highlight C# tabtitle="C#" %}
WordDocument sfdtDocument = WordDocument.Load(stream, formatType);
sfdtDocument.OptimizeSfdt = false;
string sfdt = Newtonsoft.Json.JsonConvert.SerializeObject(sfdtDocument);
{% endhighlight %}
{% endtabs %}
</td>
</tr>
</table>

To convert from older-format SFDT to a new optimized SFDT file, refer to the following code example:

<table>
<tr>
<td>Client/Server</td><td>Code example</td>
</tr>
<tr>
<td>Client-side</td>
<td>


{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-core/optimize-sfdt/tagHelper %}
{% endhighlight %}
{% endtabs %}


</td>
</tr>
<tr>
<td>Server-side C#</td>
<td>
{% tabs %}
{% highlight C# tabtitle="C#" %}
using (Syncfusion.DocIO.DLS.WordDocument docIODocument = WordDocument.Save(optimizedSfdt)) {
    sfdtDocument = WordDocument.Load(docIODocument);
    sfdtDocument.OptimizeSfdt = false;
    string oldSfdt = JsonSerializer.Serialize(sfdtDocument);
}
{% endhighlight %}
{% endtabs %}
</td>
</tr>
</table>