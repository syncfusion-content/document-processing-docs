# FAQ

## 1. How should Redis be configured for collaborative editing?

In collaborative editing, Redis is used to store temporary data that helps queue editing operations and resolve conflicts using the *Operational Transformation* algorithm.

All editing operations are stored in the Redis cache. To prevent memory buildup, a *SaveThreshold* limit can be configured at the application level. For example, if the SaveThreshold is set to 100, up to twice that number of editing operations are retained in Redis per document. When this limit is exceeded, the first 100 operations (as defined by the save threshold) are removed from the cache and automatically saved to the source document.

The configuration and storage size of the Redis cache can be adjusted based on the following considerations:

- *Storage Requirements*: A minimum of 400 KB of cache memory is required to edit a single document, with the capacity to store up to 100 editing operations. Storage requirements may increase based on the following factors:

   - *Images*: Increases with the number of images added to the document.

   - *Pasted content*: Depends on the size of the SFDT content.

- *Connection Limits*: Redis has a limit on concurrent connections. The Redis configuration should be selected based on the user base to ensure optimal performance.

**Note**: For better performance, a minimum *SaveThreshold* value of 100 is recommended.

## 2. Why does the Collaborator use Redis instead of a database?

To support collaborative editing, it’s crucial to have a backing system that temporarily stores the editing operations of all active users. There are two primary options:

- *Distributed Cache*: Handles more HTTP requests per second than a database approach. For example, a server with 2 vCPUs and 8GB of RAM can process up to 125 requests per second using a distributed cache. We are using distributed cache as a backing system over a database.

- *Database*: With the same server configuration, it can handle up to 50 requests per second.


## 3. How do I estimate the server capacity required for collaborative editing?

To calculate the average requests per second of your application, assume the DOCX Editor in your live application is actively used by 1000 users, and each user’s edit can trigger 2 to 5 requests per second. The total requests per second of your application will be around 2000 to 5000. In this case, you can finalize a configuration to support around 5000 average requests per second.

**NOTE:** The above metrics are based solely on the collaborative editing module. Actual throughput may decrease depending on other server\-side interactions, such as document importing, pasting formatted content, editing restrictions, and spell checking. Therefore, it is advisable to monitor your app’s traffic and choose a configuration that best suits your needs.


## 4. What transport protocols are supported by the Collaborator framework?

The Collaborator framework supports:

- **SignalR** (ASP.NET Core)

- **WebSocket** (ASP.NET Core, ASP.NET MVC, and Node.js)

Both provide real\-time communication between clients and the Collaboration Server.

## 5. Which EJ2 components are currently supported by the Node.js Collaboration Server?

The Node.js Collaboration Server currently supports **PDF Viewer** collaborative editing.

**Document Editor** and **Spreadsheet** require the ASP.NET Core or ASP.NET MVC Collaboration Server for document processing, operation transformation, and save operations.


