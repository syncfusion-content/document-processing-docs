---
title: Font Configuration with Docker Compose
description: Understand how to manage font configuration for PDF files when using the Syncfusion Document Processing Engine with Docker Compose. Learn how to ensure consistent rendering across different PDF viewers by embedding fonts or exposing a directory of fonts from the host machine to the Docker container.
platform: document-processing
control: general
documentation: UG
---
# Font Configuration

PDF files should appear identical regardless of the PDF viewer used because they can include the necessary fonts for rendering. However, if fonts aren't embedded, the viewer may rely on system fonts, potentially causing display issues depending on the available fonts. Embedding fonts is the ideal solution, but it may not be feasible, especially with third-party PDFs.

You can expose a directory of fonts from the host machine to the Docker container by adding the following to your `docker-compose.yml` file. Learn more about [Docker volumes](https://docs.docker.com/storage/volumes/).

```
syncfusion:
  volumes:
    - ./directory-path-on-the-host:/usr/local/share/fonts/
```