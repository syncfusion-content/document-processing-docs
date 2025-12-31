---
title: CSS Selectors in HTML to Word Conversion | Syncfusion
description: Learn about the CSS selectors supported in HTML content when converting to Word documents using the .NET Word (DocIO) library in Syncfusion.
platform: document-processing
control: DocIO
documentation: UG
---

# CSS Selector - Types, Syntax

CSS selectors are used to select the HTML elements you want to style and apply a set of CSS rules. There are a few different types of CSS Selectors:

- **Element selector**
- **Class selector**
- **ID selector**
- **Group Selectors**
- **Compound Selectors**
- **Descendant**

<table>
<tr>
    <td><strong>Selectors</strong></td>
    <td><strong>CSS Code</strong></td>
    <td><strong>HTML</strong></td>
</tr>
<tr>
    <td>Element Selector</td>
    <td>p {
    color: yellow;
    font-size: 36px;
    }
    </td>
    <td><code>&lt;p&gt;This is Element selector Paragraph&lt;/p&gt;</code></td>
</tr>
<tr>
    <td>Class selector</td>
    <td>.highlight {
    color: red;
    font-size: 18pt;
    }
    </td>
    <td><code>&lt;p class="highlight"&gt;This is a class selector Paragraph&lt;/p&gt;</code></td>
</tr>
<tr>
    <td>ID selector</td>
    <td>#demo-id {
    color: #1a73e8;
    font-size: 22pt;
    font-weight: 600;
    }
    </td>
   <td><code>&lt;p id="demo-id"&gt;This is ID Selector paragraph&lt;/p&gt;</code></td>
</tr>
<tr>
    <td>Group Selectors</td>
    <td>h2, .group-title {
    color: green;
    font-size: 20pt;
    }
    </td>
    <td>
      <code>&lt;h2&gt;Group Selector Example&lt;/h2&gt;<br>
      &lt;p class="group-title"&gt;Paragraph styled by group selector.&lt;/p&gt;</code>
    </td>
</tr>
<tr>
    <td>Compound Selectors</td>
    <td>p.compound {
    color: orange;
    font-size: 26pt;
    font-weight: bold;
    }
    </td>
    <td><code>&lt;p class="compound"&gt;Paragraph for Class + Compound&lt;/p&gt;</code></td>
</tr>
<tr>
    <td>Descendant Selectors</td>
    <td>div p {
    color: #5f7000;
    font-style: italic;
    font-size: 18px;
    }
    </td>   
    <td>
      <code>&lt;div&gt;<br>
      &nbsp;&nbsp;&lt;p&gt;Descendant Selector: Paragraph inside a div.&lt;/p&gt;<br>
      &lt;/div&gt;</code>
    </td>
</tr>
</table>

You can download a complete working sample that includes all these CSS selectors from [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/HTML-conversions/Convert-HTML-with-CSS-Selctor-to-Word)


