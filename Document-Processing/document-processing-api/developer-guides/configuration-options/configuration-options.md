---
title: Configuration Options for Syncfusion Document Processing Engine
description: Detailed information on configuring the Syncfusion Document Processing Engine using environment variables for optimal integration and performance.
platform: document-processing
control: DocIO
documentation: UG
---
# Configuration options

You may want to adjust certain settings of the Syncfusion Document Processing Engine to fit your application. The engine's configuration options can be accessed through environment variables within the container environment. Here are the available options:

- **ASPNETCORE_HTTP_PORTS:** This option determines the port where the document processing engine listens for traffic.

- **PGUSER, PGPASSWORD, PGDATABASE, PGHOST, PGPORT:** These options determine how the document processing service will communicate with the database service. Don’t forget to replace the default password with a custom one, using the same value for both PGPASSWORD and POSTGRES_PASSWORD.

- **SYNCFUSION_LICENSE_KEY:** This key helps to remove the watermark from the generated documents.

- **JWT_PUBLIC_KEY:** This is the public key used to verify the JSON Web Token (JWT) payload signature. Ensure that this public key corresponds to the private key used to generate JWTs in your app.

- **ENABLE_JWT_SECURITY:** This enables JWT security for the web API. By default, it is set to false.

- **WORKER_POOL_SIZE:** This setting determines the number of concurrent processes initiated for managing document processing tasks. It's important to note that setting this value too high may result in processes competing for CPU resources, causing delays in processing. Conversely, setting it too low may underutilize available CPU time, leading to tasks waiting longer for available workers. The default value is 3.

- **ENABLE_DELETE_RESOURCE:** This enables the deletion of job details and both input and generated files. By default, this is set to true.

- **RESOURCE_EXPIRATION_TIME:** The expiration time in minutes used to delete resources such as job details and other input and generated files after the expiration time. This setting is used only if ENABLE_DELETE_RESOURCE is enabled. By default, the value is 30 minutes.