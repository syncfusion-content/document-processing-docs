---
title: Troubleshoot SmartTableExtractor in DataExtraction | Syncfusion
description: Troubleshooting steps and FAQs for Syncfusion SmartTableExtractor to help users resolve common issues in WPF and WinForms projects.
platform: document-processing
control: SmartTableExtractor
documentation: UG
---

# Troubleshooting and FAQ for Smart Table Extractor

## ONNX file missing

<table>
<th style="font-size:14px" width="100px">Exception</th>
<th style="font-size:14px">Blink files are missing</th>
<tr>
<th style="font-size:14px" width="100px">Reason
</th>
<td>The required ONNX model files are not copied into the application’s build output.
</td>
</tr>
<tr>
<th style="font-size:14px" width="100px">Solution</th>
<td>
1. Run a build so the application output is generated under `bin\Debug\netX.X\runtimes` (or your configured build configuration and target framework).<br/>
2. Locate the project's build output `bin` path (for example: `bin\Debug\net10.0\runtimes`).<br/>
3. Place all required ONNX model files into a `runtimes\models` folder inside that bin path.<br/>
4. In Visual Studio, for each ONNX file set **Properties → Copy to Output Directory → Copy always** so the model is included on every build.<br/>
5. Rebuild and run your project. The extractor should now find the ONNX models and operate correctly.
<br/><br/>
Notes:

- If you publish your application, ensure the `runtimes\models` folder and ONNX files are included in the publish output (you may need to mark files as content in the project file or use a <Content> entry).
- If you prefer an automated approach, add the ONNX files to your project with `CopyToOutputDirectory` set, or create a post-build step to copy the models into the runtime folder.

If the problem persists after adding the model files, verify file permissions and the correctness of the model file names.
</td>
</tr>

</table>

## System.TypeInitializationException

<table>
<th style="font-size:14px" width="100px">Exception
</th>
<th style="font-size:14px">System.TypeInitializationException. 
</th>

<tr>
<th style="font-size:14px" width="100px">Reason
</th>
<td>The application cannot load *System.Runtime.CompilerServices.Unsafe* or one of its dependencies. </br>
**Inner Exception**: *FileNotFoundException* — Could not load file or assembly 'System.Runtime.CompilerServices.Unsafe, Version=4.0.4.1, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a' or one of its dependencies.
</td>
</tr>

<tr>
<th style="font-size:14px" width="100px">Solution
</th>
<td>Install the NuGet package [Microsoft.ML.ONNXRuntime (Version 1.18.0)](https://www.nuget.org/packages/Microsoft.ML.ONNXRuntime/1.18.0) manually in your sample/project. <br/>
This package is required for **SmartTableExtractor** across **WPF** and **WinForms**. 

<br/><br/>
Please refer to the below error message,
<br/><br/>
System.TypeInitializationException: The type initializer for *PerTypeValues 1* threw an exception.
<br/><br/>
</td>
</tr>
</table>

## FileNotFoundException (Microsoft.ML.ONNXRuntime)

<table>

<th style="font-size:14px" width="100px">Exception
</th>
<th style="font-size:14px">FileNotFoundException (Microsoft.ML.ONNXRuntime)
</th>

<tr>
<th style="font-size:14px" width="100px">Reason
</th>
<td>The application cannot load the *Microsoft.ML.ONNXRuntime* assembly or one of its dependencies. 
</td>
</tr>

<tr>
<th style="font-size:14px" width="100px">Solution
</th>
<td>Install the NuGet package [Microsoft.ML.ONNXRuntime (Version 1.18.0)](https://www.nuget.org/packages/Microsoft.ML.ONNXRuntime/1.18.0) manually in your sample/project. <br/>
This package is required for **SmartTableExtractor** across **WPF** and **WinForms**.
<br/><br/>
Please refer to the below screenshot,
<br/><br/>
System.IO.FileNotFoundException: Could not load file or assembly *Microsoft.ML.ONNXRuntime, Version=0.0.0.0, Culture=neutral, PublicKeyToken=f27f157f0a5b7bb6* or one of its dependencies. The system cannot find the file specified.
Source=Syncfusion.SmartTableExtractor.Base
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
<td>In a **.NET Framework MVC app**, NuGet sometimes doesn’t automatically copy native runtime dependencies (like *ONNXruntime.dll*) into the *bin* folder during publish. 
</td>
</tr>
<tr>
<th style="font-size:14px" width="100px">Solution
</th>
<td>In your MVC project file (.csproj), add a target to copy the native DLL from the NuGet package folder into bin: 
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

