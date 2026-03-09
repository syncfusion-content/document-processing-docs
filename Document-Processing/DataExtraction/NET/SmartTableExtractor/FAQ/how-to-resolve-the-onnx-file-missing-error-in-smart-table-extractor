---
title: Extract tables from PDF and image documents in .NET | Syncfusion
description: Syncfusion® Smart Table Extractor is a .NET library that extracts tabular data from PDF documents. It detects table regions, header rows, columns, cell spans (merged cells), and provides structured JSON.
platform: documentProcessing
control: SmartTableExtractor
documentation: UG
---

# How to resolve the “ONNX file missing” error in Smart Table Extractor

Problem:

When running Smart Table Extractor you may see an exception similar to the following:

```
Microsoft.ML.OnnxRuntime.OnnxRuntimeException: '[ErrorCode:NoSuchFile] Load model from <path>\runtimes\models\syncfusion_doclayout.onnx failed. File doesn't exist'
```

Cause:

This error occurs because the required ONNX model files (used internally for layout and data extraction) are not present in the application's build output (the project's `bin` runtime folder). The extractor expects the models under `runtimes\models` so the runtime can load them.

Solution:

1. Run a build so the application output is generated under `bin\Debug\netX.X\runtimes` (or your configured build configuration and target framework).
2. Locate the project's build output `bin` path (for example: `bin\Debug\net6.0\runtimes`).
3. Place all required ONNX model files into a `runtimes\models` folder inside that bin path.
4. In Visual Studio, for each ONNX file set **Properties → Copy to Output Directory → Copy always** so the model is included on every build.
5. Rebuild and run your project. The extractor should now find the ONNX models and operate correctly.

Notes:

- If you publish your application, ensure the `runtimes\models` folder and ONNX files are included in the publish output (you may need to mark files as content in the project file or use a <Content> entry).
- If you prefer an automated approach, add the ONNX files to your project with `CopyToOutputDirectory` set, or create a post-build step to copy the models into the runtime folder.

If the problem persists after adding the model files, verify file permissions and the correctness of the model file names.