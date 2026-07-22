---
layout: post
title: Collaborative Editing in React DOCX Editor control | Syncfusion
description: Learn about collaborative editing in the Syncfusion React DOCX Editor control and more.
platform: document-processing
control: Collaborative Editing
documentation: ug
domainurl: ##DomainURL##
---

# Collaborative Editing in React Document Editor

Allows multiple users to work on the same document simultaneously. This can be in real time so that collaborators can see them as they are made. Collaborative editing can be a great way to improve efficiency, as it allows team members to work together on a document without having to wait for others to finish their changes.

## Prerequisites

- *Real-Time Transport Protocol*: This protocol facilitates instant communication between clients and the server, ensuring immediate updates during collaborative editing.
- *Distributed Cache or Database*: Used to temporarily store the queue of editing operations.

### Real-Time Transport Protocol

- *Managing Connections*: Keeps active connections open for real-time collaboration, allowing seamless communication between users and the server.
- *Broadcasting Changes*: Ensures that any edits made by one user are instantly sent to all collaborators, keeping everyone on the same page with the latest document version.

### Distributed Cache or Database

To support collaborative editing, it's crucial to have a backing system that temporarily stores the editing operations of all active users. There are two primary options:

- ***Distributed Cache***: Handles more HTTP requests per second than a database approach. For example, a server with 2 vCPUs and 8GB of RAM can process up to 125 requests per second using a distributed cache. We highly recommend using a distributed cache as a backing system over a database.

- ***Database***: With the same server configuration, it can handle up to 50 requests per second.

With the distributed cache or database, all the editing operations are queued in order, and conflict resolution is performed using the `Operational Transformation` algorithm.

N> 1. To calculate the average requests per second of your application, assume the Document Editor in your live application is actively used by 1000 users, and each user's edit can trigger 2 to 5 requests per second. The total requests per second of your application will be around 2000 to 5000. In this case, you can finalize a configuration to support around 5000 average requests per second.

N> 2. The above metrics are based solely on the collaborative editing module. Actual throughput may decrease depending on other server-side interactions, such as document importing, pasting formatted content, editing restrictions, and spell checking. Therefore, it is advisable to monitor your app's traffic and choose a configuration that best suits your needs.

## See Also

- [Collaborative editing using Redis cache in ASP.NET Core](../collaborative-editing/using-redis-cache-asp-net-core)
- [Collaborative editing using Java](../collaborative-editing/using-redis-cache-java)