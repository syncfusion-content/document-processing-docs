---
title: Troubleshoot SmartTableExtractor in DataExtraction | Syncfusion
description: Troubleshooting steps and FAQs for Syncfusion SmartTableExtractor to help users resolve common issues in .NET Framework projects.
platform: document-processing
control: SmartTableExtractor
documentation: UG
---

# Troubleshooting and FAQ for Smart Table Extractor

## ONNX file missing

<table>
  <tr>
    <th style="font-size:14px" width="100px">Exception</th>
    <th style="font-size:14px">ONNX files are missing</th>
  </tr>
  <tr>
    <th style="font-size:14px" width="100px">Reason</th>
    <td>The required ONNX model files are not copied into the application’s build output.</td>
  </tr>
  <tr>
    <th style="font-size:14px" width="100px">Solution</th>
    <td>
      Ensure that the runtimes folder is copied properly to the bin folder of the application from the NuGet package location.
      <br/><br/>
      Please refer to the below screenshot,
      <br/><br/>
      <img alt="Runtime folder" src="data-extraction-images/onnx-table.png">
      <br/><br/>
      <b>Note:</b> If you publish your application, ensure the <b>runtimes/models</b> folder and ONNX files are included in the publish output.
    </td>
  </tr>
</table>

## System.TypeInitializationException / FileNotFoundException – Microsoft.ML.ONNXRuntime

<table>
  <tr>
    <th style="font-size:14px" width="100px">Exception</th>
    <th style="font-size:14px">
      1. System.TypeInitializationException <br/>
      2. FileNotFoundException (Microsoft.ML.ONNXRuntime)
    </th>
  </tr>
  <tr>
    <th style="font-size:14px" width="100px">Reason</th>
    <td>
      The required <strong>Microsoft.ML.ONNXRuntime</strong> NuGet package is not installed in your project. 
      SmartTableExtractor depends on this package and its required assemblies to function properly.
    </td>
  </tr>
  <tr>
    <th style="font-size:14px" width="100px">Solution</th>
    <td>
      Install the NuGet package 
      <a href="https://www.nuget.org/packages/Microsoft.ML.ONNXRuntime/1.18.0">Microsoft.ML.ONNXRuntime</a> (Version 1.18.0) manually in your sample/project. 
      <br/>This package is required for <strong>SmartTableExtractor</strong> across .NET Framework projects.
    </td>
  </tr>
</table>

## ONNXRuntimeException – Model File Not Found in MVC Project

<table>
  <tr>
    <th style="font-size:14px" width="100px">Exception</th>
    <th style="font-size:14px">Microsoft.ML.ONNXRuntime.ONNXRuntimeException</th>
  </tr>
  <tr>
    <th style="font-size:14px" width="100px">Reason</th>
    <td>The required native runtime library (ONNXRuntime.dll) is missing from your application's bin folder.</td>
  </tr>
  <tr>
    <th style="font-size:14px" width="100px">Solution</th>
    <td>
      In your MVC project file (.csproj), add the following build target to copy the native DLL from the NuGet package folder to the bin folder:
      <br/><br/>
      <pre>
<Target Name="CopyOnnxRuntimeDll" AfterTargets="Build">
  <Copy 
    SourceFiles="$(SolutionDir)packages\Microsoft.ML.ONNXRuntime.1.18.0\runtimes\win-x64\native\ONNXRuntime.dll" 
    DestinationFolder="$(OutDir)" 
    SkipUnchangedFiles="true" />
</Target>
      </pre>
      <br/>
    </td>
  </tr>
</table>


