---
title: How to calculate pixels as points with a scaling percentage |Syncfusion.
description: This page explains how to calculate pixels as points with a scaling percentage using Syncfusion .NET Excel library (XlsIO).
platform: document-processing
control: XlsIO
documentation: UG
---

# How to calculate pixels as points with a scaling percentage?

The following code example illustrates how to calculate the pixel as points with a scaling percentage.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
class PixelToPointConverter
{
    // Constants for the GetDeviceCaps function
    private const int LOGPIXELSX = 88; // Logical pixels/inch in X
    private const int LOGPIXELSY = 90; // Logical pixels/inch in Y

    [DllImport("gdi32.dll")]
    private static extern int GetDeviceCaps(IntPtr hdc, int nIndex);

    [DllImport("user32.dll")]
    private static extern int GetDpiForSystem();

    public static double PixelsToPoints(int pixels, double scalePercentage = 100.0)
    {
        // Get the screen's DPI
        using (Graphics g = Graphics.FromHwnd(IntPtr.Zero))
        {
            IntPtr hdc = g.GetHdc();
            int dpiX = GetDeviceCaps(hdc, LOGPIXELSX);
            g.ReleaseHdc(hdc);

            // Adjust DPI for scaling percentage
            double effectiveDpi = dpiX * (scalePercentage / 100.0);

            // Convert pixels to points
            double points = (72.0 * pixels) / effectiveDpi;
            return points;
        }
    }
    static void Main(string[] args)
    {
        int pixels = 150;
        double scalePercentage = 125.0; // Example scale percentage (e.g., 125%)
        double points = PixelsToPoints(pixels, scalePercentage);
        Console.WriteLine($"{pixels} pixels at {scalePercentage}% scaling is equal to {points} points based on the system's resolution.");
    }
}
{% endhighlight %}
{% endtabs %}