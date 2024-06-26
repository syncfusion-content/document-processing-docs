---
title: Document Storage with Docker Compose
description: Learn how to utilize Docker Compose to store PDFs and other assets using the Syncfusion Document Processing Engine, along with persisting documents by sharing a directory from the host machine with the Docker container.
platform: document-processing
control: general
documentation: UG
---
# Document Storage

The Syncfusion Document Processing Engine offers a feature to save PDFs and other assets. You can store these documents using the provided code in Docker Compose. To persist the documents, you can share a directory from the host machine with the Docker container by including the following in your `docker-compose.yml` file. Learn more about [Docker volumes](https://docs.docker.com/storage/volumes/).

```
syncfusion:
  volumes:
    - ./directory-path-on-the-host:/FileData
```