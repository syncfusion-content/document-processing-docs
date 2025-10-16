---
layout: post
title: Redis cache in Angular PDF Viewer | Syncfusion
description: Learn how to configure and use Redis cache in the Syncfusion Angular PDF Viewer component of Essential JS 2.
platform: document-processing
control: Redis cache
documentation: ug
domainurl: ##DomainURL##
---

# Configure Redis Cache

Redis is an open-source, in-memory data structure store often used as a cache, message broker, and database. `Redis cache` is a key-value data store that stores data in memory, making it very fast and efficient. Data can be stored and retrieved quickly without disk access, which makes Redis cache ideal for applications requiring fast data access.

Redis can be used to improve PDF Viewer performance by caching frequently accessed PDF documents and reducing server requests. As an in-memory cache, data stored in Redis should be considered temporary. In case of cache eviction or server restart, data will be lost and would need to be re-fetched from the primary data source.

## Steps to Configure Redis

To configure Redis, follow these steps:

**Step 1:** Create a Redis cache. Refer to this [link](https://learn.microsoft.com/en-us/azure/azure-cache-for-redis/cache-dotnet-how-to-use-azure-redis-cache) for guidance.

**Step 2:** Create a PDF Viewer web service application. Use the following [link](https://www.syncfusion.com/kb/11063/how-to-create-pdf-viewer-web-service-in-net-core-3-0-and-above) for reference, or obtain a sample web service from the GitHub [link](https://github.com/SyncfusionExamples/EJ2-PDFViewer-WebServices).

**Step 3:** Install Redis Cache packages

Install the `StackExchange.Redis` package and `Microsoft.Extensions.Caching.Redis` using the NuGet Package Manager.

**Step 4:** Configure Redis Cache

In the `ConfigureServices` method of the `Startup` class, add the Redis Cache service using the `AddDistributedRedisCache()` method. Provide the Redis Cache connection string.

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

To use Redis Cache in the PDF Viewer, implement the `IDistributedCache` interface and use the Redis Cache service to store and retrieve the PDF document bytes.

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