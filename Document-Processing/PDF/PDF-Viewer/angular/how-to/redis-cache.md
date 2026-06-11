---
layout: post
title: Redis cache in Angular PDF Viewer component | Syncfusion
description: Learn here all about Redis cache in Syncfusion Angular PDF Viewer component of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Redis cache
documentation: ug
domainurl: ##DomainURL##
---

# Configure Redis cache

Redis is an in-memory key-value store commonly used as a distributed cache. Caching frequently requested PDF bytes in Redis reduces repeated conversion or I/O, lowers server load, and improves response times for the PDF Viewer web service. Keep in mind Redis is volatile storage: entries may be evicted or lost on restart, so the cache should be considered an optimization, not the primary data source.

## Configure Redis for the PDF Viewer web service

1. Provision a Redis instance (for example, Azure Cache for Redis or a self-hosted cluster). See Azure documentation for deployment guidance: https://learn.microsoft.com/en-us/azure/azure-cache-for-redis/cache-dotnet-how-to-use-azure-redis-cache

2. Create or adapt a PDF Viewer web service. See the Syncfusion web-service guide for a reference implementation: https://www.syncfusion.com/kb/11063/how-to-create-pdf-viewer-web-service-in-net-core-3-0-and-above or use the sample web service: https://github.com/SyncfusionExamples/EJ2-PDFViewer-WebServices

3. Install Redis client and cache packages. Preferred packages for modern .NET applications are `StackExchange.Redis` and `Microsoft.Extensions.Caching.StackExchangeRedis`. As an alternative to `AddDistributedRedisCache()`, consider `AddStackExchangeRedisCache()` where available.

4. Register the distributed cache in `Startup.ConfigureServices` (or the equivalent in .NET 6+ minimal hosting). Supply the Redis connection string and optional instance name.

```cs

public void ConfigureServices(IServiceCollection services)
{
    // Add Redis Cache
    services.AddDistributedRedisCache(options =>
    {
        options.Configuration = redisCacheConnectionString;
    });
}

```

**Step 5:** Use the Redis cache in the PDF Viewer controller action:

To use Redis Cache in PDF Viewer, you can implement the IDistributedCache interface and use the Redis Cache service to store and
retrieve

the PDF document bytes.

```cs
    private readonly IHostingEnvironment _hostingEnvironment;
    public IMemoryCache _cache;
    private IDistributedCache _dCache;
    private IConfiguration _configuration;
    private int _slidingTime = 0;
    string path;
    public PdfViewerController(IMemoryCache memoryCache, IHostingEnvironment hostingEnvironment, IDistributedCache cache, IConfiguration configuration)
    {
        _cache = memoryCache;
        _dCache = cache;
        _hostingEnvironment = hostingEnvironment;
        _configuration = configuration;
        path = _configuration["DOCUMENT_PATH"];
        //check the document path environment variable value and assign default data folder
        //if it is null.
        path = string.IsNullOrEmpty(path) ? Path.Combine(_hostingEnvironment.ContentRootPath, "Data") : Path.Combine(_hostingEnvironment.ContentRootPath, path);
    }
```

Once Redis is configured, the Syncfusion<sup style="font-size:70%">&reg;</sup> PDF Viewer application will automatically use Redis cache for improved performance and scalability.