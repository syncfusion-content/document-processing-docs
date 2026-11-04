---
layout: post
title: Collaborator Frequently Asked Questions | Syncfusion
description: Find answers to common questions about Syncfusion Collaborator, covering Redis configuration, server capacity, transports, and component support.
control: Collaborator
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---
# Frequently asked questions

## 1. How should Redis be configured for collaborative editing?

In collaborative editing, Redis is used to store temporary data that helps queue editing operations and resolve conflicts using the `Operational Transformation` algorithm.

All editing operations are stored in the Redis cache. To prevent memory buildup, a `SaveThreshold` limit can be configured at the application level. For example, if the SaveThreshold is set to 100, up to twice that number of editing operations are retained in Redis per document. When this limit is exceeded, the first 100 operations (as defined by the save threshold) are removed from the cache and automatically saved to the source document.

The configuration and storage size of the Redis cache can be adjusted based on the following considerations:

- *Storage Requirements*: A minimum of 400 KB of cache memory is required to edit a single document, with the capacity to store up to 100 editing operations. Storage requirements may increase based on the following factors:

   - *Images*: Increases with the number of images added to the document.

   - *Pasted content*: Depends on the size of the SFDT content.

- *Connection Limits*: Redis has a limit on concurrent connections. The Redis configuration should be selected based on the user base to ensure optimal performance.

**Note**: For better performance, a minimum *SaveThreshold* value of 100 is recommended.

## 2. Why does the Collaborator use Redis instead of a database?

To support collaborative editing, it’s crucial to have a backing system that temporarily stores the editing operations of all active users. There are two primary options:

- `Distributed Cache`: Handles more HTTP requests per second than a database approach. For example, a server with 2 vCPUs and 8GB of RAM can process up to 125 requests per second using a distributed cache. We are using distributed cache as a backing system over a database.

- `Database`: With the same server configuration, it can handle up to 50 requests per second.


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


## 6. How do I calculate the Redis and server configuration for collaborative editing?

Use the following steps to estimate the Collaboration Server instances and Redis cache required for your workload. The estimate depends on the *SaveThreshold* value configured for the Collaboration Server and on how many users edit documents at the same time.

### Step 1: Gather the inputs

|Input|Description|How to get it|
|:---|:---|:---|
|Concurrent users (U)|Users editing at the same time, not total registered users.|Analytics or expected peak usage.|
|Active documents (D)|Documents open for collaborative editing at the same time.|U ÷ average users per document.|
|Requests per user (r)|HTTP requests per second triggered by each user’s edits.|Typically 2 to 5. Use 5 for peak sizing.|
|Save threshold (T)|The SaveThreshold value configured in the application.|Minimum recommended value is 100.|
|Redis commands per request (k)|Redis operations performed for each edit request.|Measure in a load test. Use 3 for a first estimate.|

### Step 2: Calculate the server configuration

Peak requests per second (RPS) = U × r

Server instances              = (RPS ÷ 125) × 1.2   (round up)

- 125 is the measured capacity of one Collaboration Server instance with 2 vCPUs and 8 GB RAM using a distributed cache.
- The 1.2 factor adds 20% headroom for traffic spikes and for an instance restarting during a deployment.
- Run at least 2 instances behind a load balancer, even for small workloads, so editing continues if one instance fails.

### Step 3: Calculate the Redis memory

Memory per document ≈ 400 KB × (T ÷ 100)

Total Redis memory  ≈ D × Memory per document × 2   (content buffer)

- A document with a save threshold of 100 needs a minimum of 400 KB.
- The buffer factor of 2 covers images and pasted SFDT content. Increase it if your documents contain many images.
- If high availability (replication) is enabled, the replica is counted in the Redis plan size. Double the total memory in that case.

### Step 4: Calculate the Redis throughput and bandwidth

Peak Redis ops/sec   = RPS × k

Monthly bandwidth    ≈ Peak Redis ops/sec × 0.3 × average payload size × active seconds per month

- Redis throughput limits assume a 1 KB request size. Operations with images or pasted SFDT content are larger, so they consume the limit faster.
- 0.3 assumes average traffic is about 30% of peak. Replace it with your measured value.
- Active seconds per month for 8 hours a day and 22 working days = 8 × 3,600 × 22 = 633,600 seconds.

### Step 5: Choose the Redis plan

Choose the smallest plan that satisfies all of the following limits. In collaborative editing, throughput and bandwidth usually decide the plan before memory does.

- Database size ≥ total Redis memory (Step 3).
- Maximum throughput ≥ peak Redis ops/sec (Step 4).
- Monthly network bandwidth ≥ estimated monthly bandwidth (Step 4).
- Concurrent connections ≥ connections opened by all Collaboration Server instances, with headroom.

### Example 1: Small team

Inputs: 50 concurrent users, 20 active documents (about 2 or 3 users per document), SaveThreshold = 100.

|Calculation|Result|
|:---|:---|
|Peak RPS = 50 × 5|250 requests/sec|
|Server instances = (250 ÷ 125) × 1.2 = 2.4|3 instances (2 vCPUs, 8 GB RAM each)|
|Redis memory = 20 × 400 KB × 2|16 MB (32 MB with replication)|
|Peak Redis ops/sec = 250 × 3|750 ops/sec|
|Monthly bandwidth = 750 × 0.3 × 1 KB × 633,600 s|≈ 146 GB|

### Example 2: 1,000 concurrent users

Inputs: 1,000 concurrent users, 250 active documents (about 4 users per document), SaveThreshold = 100.

|Calculation|Result|
|:---|:---|
|Peak RPS = 1,000 × 5|5,000 requests/sec|
|Server instances = (5,000 ÷ 125) × 1.2|48 instances (2 vCPUs, 8 GB RAM each)|
|Redis memory = 250 × 400 KB × 2|200 MB (400 MB with replication)|
|Peak Redis ops/sec = 5,000 × 3|15,000 ops/sec|
|Monthly bandwidth = 15,000 × 0.3 × 1 KB × 633,600 s|≈ 2.9 TB|

### Additional tips

- *Raising the save threshold increases memory*: Up to twice the SaveThreshold operations are kept per document, so a threshold of 200 needs about twice the memory of a threshold of 100. Lowering it below 100 saves memory but increases how often the document is saved, which adds load on the Collaboration Server.
- *Connections come from the server, not the browser*: Redis connections are opened by the Collaboration Server instances. Estimate the total as server instances × connections per instance, and keep it well below the plan limit.
- *Validate with a load test*: Simulate your expected users and monitor ops/sec, used_memory, connected_clients, and network usage in the Redis console. Replace the assumed values (k, buffer factor, and 0.3) with your measured values, and recalculate.
- *Scale horizontally*: Add Collaboration Server instances as RPS grows. Because all editing operations are stored in Redis, any instance can serve any user.
- *Keep Redis and the servers in the same region* to reduce latency between edits and conflict resolution.

**NOTE:** The above metrics are based solely on the collaborative editing module. Actual throughput may decrease depending on other server-side interactions, such as document importing, pasting formatted content, editing restrictions, and spell checking.

