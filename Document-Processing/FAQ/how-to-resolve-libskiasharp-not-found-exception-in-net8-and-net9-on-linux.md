---
title: Resolve LibSkiaSharp Not Found Exception | Syncfusion.
description: This page explains how to resolve libSkiaSharp not found exception in .NET 8 and .NET 9 on Linux using SkiaSharp version upto v2.88.8 on AWS.
platform: document-processing
documentation: UG
---

# How to resolve LibSkiaSharp not found exception specifically while using SkiaSharp version upto v2.88.8 in .NET 8 and .NET 9 applications hosted on AWS Linux?

The LibSkiaSharp Not Found exception occurs in .NET 8 and .NET 9 applications hosted on Linux specifically when using SkiaSharp version up to v2.88.8. This exception indicates that the native SkiaSharp library is not found in the expected paths, preventing the application from functioning correctly.

Step 1: Defining library paths in an AWS Lambda project enables the application to locate the necessary native libraries at runtime. This is essential for ensuring that the application functions correctly across different environments.The following code snippet illustrates how to define these paths:

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
// Define the original library path
string originalLibraryPath = "/lib64/libdl.so.2";

// Define the symbolic link path
string symlinkLibraryPath = "/tmp/libdl.so"; 
{% endhighlight %}
{% endtabs %}

Step 2: Add the following environment variable in the **aws-lambda-tools-defaults.json** file to specify the library search paths for the AWS Lambda function. This configuration sets the **LD_LIBRARY_PATH**, allowing the application to locate the required native libraries at runtime:

{% tabs %}
{% highlight json tabtitle="JSON" %}
"environment-variables": "\"LD_LIBRARY_PATH\"=\"/var/task:/tmp:/lib64:/usr/lib64\""
{% endhighlight %}
{% endtabs %}

Step 3: Install the [SkiaSharp.Linux.NoDependencies](https://www.nuget.org/packages/SkiaSharp.NativeAssets.Linux.NoDependencies) NuGet package as reference to your application from [NuGet.org](https://www.nuget.org).

The following code snippet illustrates how to resolve the LibSkiaSharp not found exception in AWS Lambda by ensuring the required native library is properly linked. Additionally, it generates a base64-encoded image using SkiaSharp by drawing basic shapes on a canvas.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
public string FunctionHandler(ILambdaContext context)
{
    // Define the original library path
    string originalLibraryPath = "/lib64/libdl.so.2";

    // Define the symbolic link path
    string symlinkLibraryPath = "/tmp/libdl.so"; 

    // Check if the symbolic link already exists
    if (File.Exists(originalLibraryPath))
    {
        // Copy and rename the file
        File.Copy(originalLibraryPath, symlinkLibraryPath, true);
    }

    // Define image dimensions
    int width = 800;
    int height = 600;
    string base64String;

    // Create a new bitmap
    using (var bitmap = new SKBitmap(width, height))
    using (var canvas = new SKCanvas(bitmap))
    {
        // Clear the canvas with white color
        canvas.Clear(SKColors.White);

        // Define paint for drawing shapes
        var paint = new SKPaint
        {
            Color = SKColors.Blue,
            IsAntialias = true,
            Style = SKPaintStyle.Stroke,
            StrokeWidth = 5
        };

        // Draw shapes
        canvas.DrawRect(new SKRect(100, 100, 300, 300), paint);
        paint.Color = SKColors.Red;
        canvas.DrawCircle(400, 400, 100, paint);
        paint.Color = SKColors.Green;
        canvas.DrawLine(500, 100, 700, 300, paint);

        // Save bitmap to memory stream
        using (var image = SKImage.FromBitmap(bitmap))
        using (var data = image.Encode(SKEncodedImageFormat.Png, 100))
        using (var memoryStream = new MemoryStream())
        {
            data.SaveTo(memoryStream);
            byte[] imageBytes = memoryStream.ToArray();
            base64String = Convert.ToBase64String(imageBytes);
        }
    }
    return base64String;
}
{% endhighlight %}
{% endtabs %}
