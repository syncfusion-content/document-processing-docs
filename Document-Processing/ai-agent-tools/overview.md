---
layout: post
title: Overview | AI Agent Tools | Syncfusion
description: Learn about the Syncfusion Document SDK AI Agent Tools - an AI-ready toolkit for working with Word, Excel, PDF, and PowerPoint documents.
platform: document-processing
control: AI Agent Tools
documentation: ug
---

# Syncfusion Document SDK AI Agent Tools Overview

[Syncfusion Document SDK AI Agent Tool](https://www.nuget.org/packages/Syncfusion.DocumentSDK.AI.AgentTools) is a .NET library that enables AI agents to autonomously create, manipulate, convert, and extract data from Word, Excel, PDF, PowerPoint, Markdown, and other document formats. It exposes pre-built, AI-callable tools built on [Syncfusion Document SDK](https://www.syncfusion.com/document-sdk) - no document-processing logic required in your host application.

You can quickly install it via [NuGet](https://www.nuget.org/packages/Syncfusion.DocumentSDK.AI.AgentTools). To extend or customize, the source is available on [GitHub](https://github.com/syncfusion/document-sdk-ai-agent-tools/tree/master/Syncfusion.DocumentSDK.AI.AgentTools). Compatible with .NET 8.0, 9.0, and 10.0.

## What Can Agents Build?

The library enables AI agents to autonomously:

- Build document-processing pipelines without writing Office automation code - no `Microsoft.Office.Interop`, no headless Office installs required
- Create, read, edit, and export documents in Word, Excel, PDF, and PowerPoint formats
- Extract, redact, sign, and secure documents with encryption and digital signatures
- Merge, split, reorder, and convert between document formats
- Automate workflows like mail merge, template population, and structured data extraction
- Process documents at scale in Docker containers, serverless functions, and CI/CD pipelines

Explore real-world scenarios on the [AI Agents View](./agents) page.

## How It Works

![How AI Agent Tool Execution Works](how-it-works.png)

A typical agent run follows four steps: the user describes a goal, the agent picks the right tools, the tools read or modify the document, and the output is delivered. The [AI Agents View](./agents) page shows this loop for six real-world scenarios.

## Key Capabilities

The table below is an at-a-glance summary of the formats and operations that back the use cases above. For a complete reference of every tool class, see the [Tools](./tools) page.

<table>
  <thead>
    <tr>
      <th>Format</th>
      <th>Key Operations</th>
      <th>Supported File Types</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>PDF</strong></td>
      <td>
        <ul>
          <li>Digital signing</li>
          <li>Redaction</li>
          <li>Watermarking</li>
          <li>OCR</li>
          <li>Encryption and decryption</li>
          <li>Merge or split</li>
          <li>Compression</li>
          <li>Page reordering</li>
          <li>Text and image extraction</li>
          <li>Annotation and form field import or export</li>
          <li>PDF/A conversion</li>
          <li>Image to PDF</li>
        </ul>
      </td>
      <td><b>.pdf</b></td>
    </tr>
    <tr>
      <td><strong>Word</strong></td>
      <td>
        <ul>
          <li>Mail merge</li>
          <li>Bookmarks</li>
          <li>Form fields</li>
          <li>Find &amp; replace</li>
          <li>Merge or split</li>
          <li>Compare</li>
          <li>Track changes</li>
          <li>HTML import or export</li>
          <li>Markdown import or export</li>
          <li>Conversion to PDF, image, and RTF</li>
          <li>Field management</li>
          <li>Table of contents</li>
          <li>Security</li>
          <li>Clone</li>
        </ul>
      </td>
      <td><b>.docx</b>, <b>.doc</b>, <b>.rtf</b>, <b>.html</b>, <b>.txt</b>, <b>.md</b></td>
    </tr>
    <tr>
      <td><strong>Excel</strong></td>
      <td>
        <ul>
          <li>Charts</li>
          <li>Conditional formatting</li>
          <li>Data validation</li>
          <li>Pivot tables</li>
          <li>Markdown import or export</li>
          <li>Encryption &amp; protection</li>
          <li>Worksheet management</li>
          <li>Conversion to image, CSV, HTML and JSON</li>
          <li>Workbook format conversion</li>
        </ul>
      </td>
      <td><b>.xlsx</b>, <b>.xls</b>, <b>.xlsm</b>, <b>.csv</b></td>
    </tr>
    <tr>
      <td><strong>PowerPoint</strong></td>
      <td>
        <ul>
          <li>Text extraction</li>
          <li>Find &amp; replace</li>
          <li>Merge or split</li>
          <li>Markdown import or export</li>
          <li>Encryption</li>
          <li>Write protection</li>
          <li>Export as image</li>
        </ul>
      </td>
      <td><b>.pptx</b></td>
    </tr>
    <tr>
      <td><strong>Office to PDF</strong></td>
      <td>
        <ul>
          <li>Convert Word, Excel, or PowerPoint to PDF in a single tool call</li>
        </ul>
      </td>
      <td>Office (Word, Excel, PowerPoint) to <b>.pdf</b></td>
    </tr>
    <tr>
      <td><strong>Data Extraction</strong></td>
      <td>
        <ul>
          <li>Structured data</li>
          <li>Table</li>
          <li>Form extraction from PDF and image files</li>
          <li>PDF and table to Markdown conversion</li>
        </ul>
      </td>
      <td><b>.pdf</b>, <b>.png</b>, <b>.jpg</b>, <b>.jpeg</b></td>
    </tr>
  </tbody>
</table>

## Related Resources

- [AI Agents View](./agents)
- [Tools](./tools)
- [Getting Started](./getting-started)
- [Customization](./customization)
- [Example Prompts](./example-prompts)
- [Example Use Cases](./example-use-cases)
