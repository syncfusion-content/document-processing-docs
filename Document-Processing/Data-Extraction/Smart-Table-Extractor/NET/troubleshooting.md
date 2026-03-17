---
title: Troubleshoot SmartTableExtractor in DataExtraction Library | Syncfusion
description: This section provides troubleshooting steps and answers to frequently asked questions about Syncfusion Smart table Extractor, helping users resolve common issues.
platform: document-processing
control: SmartTableExtractor
documentation: UG
---

# Troubleshooting and FAQ

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
Please refer to the below screenshot,
<br/><br/>
<img alt="Runtime folder" src="data-extraction-images/onnx.png">
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
<td>Install the NuGet package **Microsoft.ML.OnnxRuntime (Version 1.18.0)** manually in your sample/project. <br/>
This package is required for **SmartTableExtractor** across **WPF** and **WinForms**. 

<br/><br/>
Please refer to the below screenshot,
<br/><br/>
<img alt="Runtime folder" src="data-extraction-images/type.png">
<br/><br/>
</td>
</tr>
</table>

## FileNotFoundException (Microsoft.ML.OnnxRuntime)

<table>

<th style="font-size:14px" width="100px">Exception
</th>
<th style="font-size:14px">FileNotFoundException (Microsoft.ML.OnnxRuntime)
</th>

<tr>
<th style="font-size:14px" width="100px">Reason
</th>
<td>The application cannot load the *Microsoft.ML.OnnxRuntime* assembly or one of its dependencies. 
</td>
</tr>

<tr>
<th style="font-size:14px" width="100px">Solution
</th>
<td>Install the NuGet package **Microsoft.ML.OnnxRuntime (Version 1.18.0)** manually in your sample/project. <br/>
This package is required for **SmartTableExtractor** across **WPF** and **WinForms**.
<br/><br/>
Please refer to the below screenshot,
<br/><br/>
<img alt="Runtime folder" src="data-extraction-images/file.png">
<br/><br/> 
</td>
</tr>
</table>

