---
title: Syncfusion Docker Image Environment Variables and Configuration
description:  Configure Docker environment variables for deploying Syncfusion Document Processing API seamlessly. Customize settings for optimal performance.
platform: document-processing
control: general
documentation: UG
---
# Environment Variables of Docker Image

You may want to adjust certain settings of the Syncfusion Document Processing API to fit your application. The configuration options can be accessed through environment variables within the container environment. Here are the available options:

<table>
<thead>
<tr>
<th>Name<br/><br/></th>
<th>Type<br/><br/></th>
<th>Description<br/><br/></th>
</tr>
</thead>
<tbody>  
<tr>
<td>SYNCFUSION_LICENSE_KEY<br/><br/></td>
<td>Required<br/><br/></td>
<td>To apply license key of the product. To generate a valid license key, refer to this <a href="https://help.syncfusion.com/common/essential-studio/licensing/licensing-faq/where-can-i-get-a-license-key?utm_source=docker&utm_medium=listing&utm_campaign=javascript-word-processor-docker">link</a>.<br/><br/></td>
</tr>
<tr>
<td>ASPNETCORE_HTTP_PORTS<br/><br/></td>
<td>Required<br/><br/></td>
<td>This option determines the port where document processing engine listens for traffic.<br/><br/></td>
</tr>
<tr>
<td>PGHOST<br/><br/></td>
<td>Required<br/><br/></td>
<td>Postgresql host address.<br/><br/></td>
</tr>
<tr>
<td>PGUSER<br/><br/></td>
<td>Required<br/><br/></td>
<td>Postgresql user name.<br/><br/></td>
</tr>
<tr>
<td>PGPASSWORD<br/><br/></td>
<td>Required<br/><br/></td>
<td>Postgresql password.<br/><br/></td>
</tr>
<tr>
<td>PGDATABASE<br/><br/></td>
<td>Required<br/><br/></td>
<td>Postgresql database name.<br/><br/></td>
</tr>
<tr>
<td>PGPORT<br/><br/></td>
<td>Required<br/><br/></td>
<td>Postgresql port address.<br/><br/></td>
</tr>
<tr>
  <td>WORKER_POOL_SIZE<br/><br/></td>
  <td>Optional<br/><br/></td>
  <td>
    This setting determines the number of concurrent processes initiated for managing document processing tasks. 
    Default value is 3.<br/><br/>
    The optimal value depends on the memory (RAM), CPU capacity, and the expected workload. Higher resource availability and lighter workloads 
    allow for larger pool sizes, while limited environments or heavy processing (e.g., large files) may require smaller values 
    to prevent CPU and memory exhaustion.<br/><br/>
    <b>Recommended configuration:</b><br/><br/>
    <table>
      <tr>
        <th>vCPUs</th>
        <th>RAM</th>
        <th>Normal Load</th>
        <th>High Load</th>
      </tr>
      <tr>
        <td>1</td>
        <td>2–4 GB</td>
        <td>1–2 jobs</td>
        <td>1 job</td>
      </tr>
      <tr>
        <td>2</td>
        <td>4–6 GB</td>
        <td>2–3 jobs</td>
        <td>1–2 jobs</td>
      </tr>
      <tr>
        <td>4</td>
        <td>8–12 GB</td>
        <td>4–6 jobs</td>
        <td>3–4 jobs</td>
      </tr>
      <tr>
        <td>6+</td>
        <td>16 GB+</td>
        <td>6 jobs</td>
        <td>3–6 jobs</td>
      </tr>
    </table><br/>
    It is strongly recommended to monitor system resource usage under real workloads and adjust the WORKER_POOL_SIZE accordingly.
  </td>
</tr>
<tr>
<td>ENABLE_JWT_SECURITY<br/><br/></td>
<td>Optional<br/><br/></td>
<td>Enable the JWT authentication. Default value is "false".<br/><br/></td>
</tr>
<tr>
<td>JWT_PUBLIC_KEY<br/><br/></td>
<td>Optional<br/><br/></td>
<td>This is the public key used to verify the JSON Web Token (JWT) payload signature. Ensure that this public key corresponds to the private key used to generate JWTs in your app.<br/><br/></td>
</tr>
<tr>
<td>ENABLE_DELETE_RESOURCE<br/><br/></td>
<td>Optional<br/><br/></td>
<td>This enables deletion of job details and both input and generated files. By default, "true".<br/><br/></td>
</tr>
<tr>
<td>RESOURCE_EXPIRATION_TIME <br/><br/></td>
<td>Optional<br/><br/></td>
<td>The expiration time in minutes is used to delete resources such as job details and other input and generated files after the expiration time. This setting is used only if ENABLE_DELETE_RESOURCE is enabled. By default, the value is "30" minutes.<br/><br/></td>
</tr>
</tbody>
</table>

## Document Storage

The Syncfusion Document Processing Engine offers a feature to save PDFs and other assets. You can store these documents using the provided code in Docker Compose. To persist the documents, you can share a directory from the host machine with the Docker container by including the following in your `docker-compose.yml` file. Learn more about [Docker volumes](https://docs.docker.com/storage/volumes/).

```
syncfusion:
  volumes:
    - ./directory-path-on-the-host:/FileData
```

## Font Configuration

PDF files should appear identical regardless of the PDF viewer used because they can include the necessary fonts for rendering. However, if fonts aren't embedded, the viewer may rely on system fonts, potentially causing display issues depending on the available fonts. Embedding fonts is the ideal solution, but it may not be feasible, especially with third-party PDFs.

You can expose a directory of fonts from the host machine to the Docker container by adding the following to your `docker-compose.yml` file. Learn more about [Docker volumes](https://docs.docker.com/storage/volumes/).

```
syncfusion:
  volumes:
    - ./directory-path-on-the-host:/usr/local/share/fonts/
```

N> The Syncfusion Document Processing API is now available as a Docker-based solution. [Try it out](https://hub.docker.com/r/syncfusion/document-processing-apis)
