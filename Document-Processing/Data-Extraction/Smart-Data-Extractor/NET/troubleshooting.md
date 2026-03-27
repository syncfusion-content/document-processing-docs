---
title: Troubleshoot SmartDataExtractor in DataExtractor | Syncfusion
description: Troubleshooting steps and FAQs for Syncfusion SmartDataExtractor to resolve common errors in .Net Framework projects.
platform: document-processing
control: SmartDataExtractor
documentation: UG
---

# Troubleshooting and FAQ for Smart Data Extractor

## ONNX file missing

<table>
<th style="font-size:14px" width="100px">Exception</th>
<th style="font-size:14px">ONNX files are missing</th>
<tr>
<th style="font-size:14px" width="100px">Reason
</th>
<td>The required ONNX model files are not copied into the application’s build output.
</td>
</tr>
<tr>
<th style="font-size:14px" width="100px">Solution</th>
<td>
Ensure that the runtimes folder is copied properly to bin folder of the application from NuGet package location.
<br/><br/>
Please refer to the below screenshot,
<br/><br/>
<img alt="Runtime folder" src="data-extraction-images/onnx.png">
<br/><br/>
Notes:

- If you publish your application, ensure the `runtimes\models` folder and ONNX files are included in the publish output (you may need to mark files as content in the project file or use a <Content> entry).

</td>
</tr>

</table>

## System.TypeInitializationException / FileNotFoundException – Microsoft.ML.ONNXRuntime

<table>
<th style="font-size:14px" width="100px">Exception
</th>
<th style="font-size:14px">
1. System.TypeInitializationException <br/>
2. FileNotFoundException (Microsoft.ML.ONNXRuntime)
</th>

<tr>
<th style="font-size:14px" width="100px">Reason
</th>
<td>
The required **Microsoft.ML.ONNXRuntime** NuGet package is not installed in your project. SmartDataExtractor depends on this package and its required assemblies to function properly.
<br/><br/>
</td>
</tr>
<tr>
<th style="font-size:14px" width="100px">Solution
</th>
<td>Install the NuGet package [Microsoft.ML.ONNXRuntime (Version 1.18.0)](https://www.nuget.org/packages/Microsoft.ML.ONNXRuntime/1.18.0) manually in your sample/project. <br/>
This package is required for **SmartDataExtractor** across .Net Framework projects.
<br/><br/>
</td>
</tr>
</table>

## ONNXRuntimeException – Model File Not Found

<table>

<th style="font-size:14px" width="100px">Exception
</th>
<th style="font-size:14px">Microsoft.ML.ONNXRuntime.ONNXRuntimeException
</th>

<tr>
<th style="font-size:14px" width="100px">Reason
</th>
<td>The required native runtime library (ONNXRuntime.dll) is missing from your application's bin folder.
</td>
</tr>
<tr>
<th style="font-size:14px" width="100px">Solution
</th>
<td>In your MVC project file (.csproj), add the following build target to copy the native DLL from the NuGet package folder to the bin folder: 
<br/><br/>
<table>
<tr>
<td>
{% tabs %}
{% highlight C# tabtitle="C#" %}
<Target Name="CopyOnnxRuntimeDll" AfterTargets="Build">
  <Copy 
    SourceFiles="$(SolutionDir)packages\Microsoft.ML.OnnxRuntime.1.18.0\runtimes\win-x64\native\onnxruntime.dll" 
    DestinationFolder="$(OutDir)" 
    SkipUnchangedFiles="true" />
</Target>
{% endhighlight %}
{% endtabs %}
</td>
</tr>
</table>
<br/><br/> 
</td>
</tr>
</table>

