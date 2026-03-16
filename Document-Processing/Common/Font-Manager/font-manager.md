---
title: Syncfusion font handling in Office-to-PDF and image conversions
description: Learn how Syncfusion Document Processing handles font management during Office to PDF/Image conversions and PDF processing workflows.
platform: document-processing
documentation: UG
---

# Font Manager for Office-to-PDF/Image and PDF Processing

## Overview 

Font creation is a primary cause of excessive memory consumption and performance degradation during Office to PDF/Image conversions and PDF processing workflows. This problem is particularly pronounced in multi-threaded web applications where multiple users perform concurrent operations across different threads or browser tabs. 

To address this challenge, Syncfusion Document Processing libraries introduce the **FontManager** class, which provides centralized font management shared across all threads and conversion libraries. This approach eliminates duplicate font objects and significantly reduces memory overhead. 

## Key Features

* **Shared font caching:** Stores fonts in a unified cache to prevent repeated loading across operations. 
* **Memory reduction:** Eliminates duplicate font objects, reducing memory usage during large-scale or parallel document conversions. 
* **Performance optimization:** Enables multiple threads to safely reuse the same font instances, improving processing speed. 
* **Automatic cleanup:** Automatically disposes unused fonts after a configurable delay (FontManager.Delay) to maintain efficiency in long-running applications. 
* **Manual cache management:** Provides FontManager.ClearCache() to immediately clear all cached fonts when needed (e.g., during server shutdown). 

## Supported Conversions and Workflows 

FontManager optimizes memory usage across the following Office to PDF/Image conversions and PDF processing scenarios: 

<table>
  <tr>
    <th>Category</th>
    <th>Details</th>
  </tr>
  <tr>
    <td><b>Office Document Conversions</b></td>
    <td>
      <b>Word Library (DocIO)</b>
      <ul>
        <li>Word to PDF conversion.</li>
        <li>Word to Image conversion.</li>
      </ul>
      <b>Excel Library (XlsIO)</b>
      <ul>
        <li>Excel to PDF conversion.</li>
        <li>Excel to Image conversion.</li>
      </ul>
      <b>PowerPoint Library (Presentation)</b>
      <ul>
        <li>PowerPoint to PDF conversion.</li>
        <li>PowerPoint to Image conversion.</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td><b>PDF Processing Workflows</b></td>
    <td>
      <b>PDF Library Operations</b>
      <ul>
        <li>PDF/A Creation and Conversion</li>
        <li>Annotations and Forms: Fill, Flatten</li>
        <li>XPS to PDF Conversion</li>
        <li>EMF to PDF Conversion</li>
        <li>Data Grids and Light Tables</li>
      </ul>
    </td>
  </tr>
</table>

N> FontManager automatically manages fonts across all these conversion types, whether you're processing a single document or handling thousands of concurrent conversions in a multi-threaded environment.

## Configuring Automatic Font Cleanup

The `FontManager.Delay` property defines the duration (in milliseconds) after which unused font objects are automatically disposed and removed from the cache. When fonts are no longer referenced, an internal `System.Timers.Timer` triggers disposal based on this value. 

**Default value:** 30,000 milliseconds (30 seconds),
**Valid range:** 1 to 2,147,483,647 milliseconds.

N> This configuration is optional. By default, unused fonts are automatically cleaned up 30 seconds after their references are released. To customize the delay, set this property at the application startup (e.g., in `Startup.cs` or `Program.cs`).

The following example demonstrates how to configure `FontManager.Delay` to automatically release cached fonts after the specified delay during document conversions.

{% tabs %}
{% highlight C# %}

using Syncfusion.Drawing.Fonts; 

// Set disposal delay to 50 seconds 
FontManager.Delay = 50000; 
  
{% endhighlight %}
{% endtabs %}

The following example demonstrates how to configure `FontManager.Delay` in an **ASP.NET Core application** to ensure cached fonts are automatically released after the specified delay during document conversions.

{% tabs %}

{% highlight C# %}

var builder = WebApplication.CreateBuilder(args); 

// Add services to the container 
// ...existing code... 

var app = builder.Build(); 

// Configure FontManager to dispose unused fonts after 50 seconds 
// Default: 30000ms | Valid range: 1 to 2,147,483,647 milliseconds 
Syncfusion.Drawing.Fonts.FontManager.Delay = 50000; 

// Configure middleware 
// ...existing code... 

app.Run(); 
  
{% endhighlight %}

{% endtabs %}

## Immediate Font Cache Cleanup 

The `FontManager.ClearCache()` method immediately clears all font caches managed by the FontManager. This method forcefully removes and disposes all font instances maintained in shared caches, allowing you to reclaim memory deterministically without waiting for the automatic cleanup delay.

**Use cases:**

* Application shutdown. 
* After completing batch conversions.
* Before maintenance operations.
* When immediate memory reclamation is required.

The following example demonstrates how to immediately clear all cached fonts using `FontManager.ClearCache()`.

{% tabs %}
{% highlight C# %}

using Syncfusion.Drawing.Fonts; 

// Immediately clear all cached fonts 
FontManager.ClearCache(); 
  
{% endhighlight %}
{% endtabs %}

The following example demonstrates how to configure `FontManager.ClearCache()` in an **ASP.NET Core application** to clear cached fonts during application shutdown.

{% tabs %}
{% highlight C# %}

// Configure services and middleware 
// ...existing code... 

// Access the application lifetime service 
var lifetime = app.Services.GetRequiredService<IHostApplicationLifetime>(); 

// Register a callback to clear font cache during application shutdown 
lifetime.ApplicationStopping.Register(() => 
{ 
    Syncfusion.Drawing.Fonts.FontManager.ClearCache(); 
}); 

// Start the application 
app.Run(); 
  
{% endhighlight %}
{% endtabs %}

## Best Practices

1. Set FontManager.Delay early: Configure the delay property in your application's startup code before any document processing begins (Optional). 

2. Use ClearCache() during shutdown: Register a shutdown handler to clear the cache when your application stops to ensure clean resource cleanup. 

3. Consider your workload:  

    a. For high-frequency, short-lived conversions: Use a shorter delay (e.g., 15-30 seconds).

    b. For batch processing with longer intervals: Use a longer delay (e.g., 60+ seconds).

4. Monitor memory usage: Track your application's memory consumption to fine-tune the delay value for optimal performance.

## FAQ

**Q: Do I need to configure FontManager for my application?**

A: No, it's optional. The default 30-second cleanup delay works well for most scenarios. Configure it only if you need custom behavior. 

**Q: When should I call ClearCache() manually?**  

A: Call it during application shutdown, after batch processing, or when you need immediate memory reclamation rather than waiting for automatic cleanup. 

**Q: Is FontManager thread-safe?**   

A: Yes, FontManager is designed for multi-threaded environments and allows safe font reuse across multiple threads. 

**Q: Will FontManager affect my existing document processing code?**   

A: No, FontManager works transparently in the background. Your existing code will automatically benefit from improved memory management without modifications. 
