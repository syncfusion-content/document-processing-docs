---
layout: post
title: Blazor UI Builder Skill with PDF Viewer for AI Assistants | Syncfusion®
description: Install Blazor UI Builder to generate production-ready Blazor components with PDF Viewer from natural-language prompts.
control: SfPdfViewer
platform: document-processing
documentation: ug
keywords: Blazor UI Builder, Skills, AI Assistants, PDF Viewer SDK, Agent Skills
---

# Syncfusion® Blazor UI Builder Skill with PDF Viewer for AI Assistants

**Syncfusion® Blazor UI Builder Skill** is an AI-powered skill and companion agent that accelerates Blazor PDF Viewer application development by transforming natural-language UI requirements into production-ready components using Syncfusion® Blazor UI libraries. 

Integrated with your AI-powered IDE, it leverages deep knowledge of **Syncfusion® PDF Viewer** to deliver accurate and ready-to-use code.
By combining intelligent code generation with best practices, accessibility standards, and design-system consistency, Blazor UI Builder helps you rapidly build scalable PDF viewing applications and user interfaces without leaving your development workflow.

## Prerequisites

Before installing Blazor UI Builder Skill with PDF Viewer, ensure the following:

- Active **Blazor Project** (Blazor WebAssembly or Blazor Server) using .NET 8 or later
- Microsoft **.NET SDK 8.0 or later** with .NET CLI tools installed
- Required [Node.js](https://nodejs.org/en) version ≥ 18
- **Agent Package Manager** (APM) installed — follow [Installation Guidelines](https://microsoft.github.io/apm/quickstart/#1-install-apm)
- A supported AI agent or IDE that integrates with the Skills (VS Code, Cursor, Syncfusion® Code Studio, etc.)
- Active Syncfusion<sup style="font-size:70%">&reg;</sup> license(any of the following):  
  - [Commercial](https://www.syncfusion.com/sales/unlimitedlicense)  
  - [Community License](https://www.syncfusion.com/products/communitylicense)  
  - [Free Trial](https://www.syncfusion.com/account/manage-trials/start-trials)

## Key Benefits

### **AI-Driven UI Generation**
- Converts prompts into complete Blazor components-not just snippets
- Automatically selects appropriate Syncfusion® components and features
- Produces structured, maintainable code

### **Component Usage & API Accuracy**
- Uses correct Syncfusion® component APIs
- Injects required feature modules (paging, sorting, filtering, etc.)
- Avoids unsupported or deprecated patterns

### **Patterns & Best Practices**
- Recommended component composition and Blazor lifecycle integration
- Event handling aligned with Blazor standards
- Secure and scalable coding patterns

### **Accessibility & Responsiveness**
- WCAG 2.1 AA–aligned output
- Semantic HTML with ARIA support
- Mobile-first responsive layouts

### **Design-System Integration**
- Supports Tailwind, Bootstrap, Material, or custom themes
- Ensures consistent Syncfusion® styling and theme usage

## Installation

Before installing Blazor UI Builder Skill with PDF Viewer, ensure that APM (Agent Package Manager) is installed and available in your environment.

### Verify APM Installation

Run the following command to confirm APM is installed:

```bash
apm --version
```

### Install the Syncfusion® Blazor UI Builder Skill with PDF Viewer package using APM

Use the APM CLI to install the Blazor UI Builder Skill with PDF Viewer for your preferred environment:

{% tabs %}
{% highlight bash tabtitle="Copilot" %}

apm install syncfusion/blazor-ui-builder -t copilot

{% endhighlight %} 

{% highlight bash tabtitle="Cursor" %}

apm install syncfusion/blazor-ui-builder -t cursor

{% endhighlight %}

{% highlight bash tabtitle="Codex" %}

apm install syncfusion/blazor-ui-builder -t codex

{% endhighlight %}

{% highlight bash tabtitle="Claude" %}

apm install syncfusion/blazor-ui-builder -t claude

{% endhighlight %}
{% endtabs %}

After installation, the following artifacts are added to your project for the GitHub Copilot target:

- `.agent/skills/` – contains the skill files
- `.github/agents/` – contains the agent configuration

Refer to the [documentation](https://microsoft.github.io/apm/reference/cli/targets/#detection-signals) for details about supported deployment targets.

> For [Syncfusion® Code Studio](https://help.syncfusion.com/code-studio/reference/configure-properties/custom-agents#predefined-agents), use the Copilot command above to install the Blazor UI Builder.

## How the Syncfusion® Blazor UI Builder Skill Works with PDF Viewer

1. **Intent Analysis** - Parse the user's prompt to identify component types and high-level layout intent.
2. **Project Detection** - Automatically detects project framework, package manager, existing themes, and PDF Viewer configuration.
3. **Component Mapping** - Map intent to Syncfusion® PDF Viewer and components and required feature modules.
4. **Theming & Design System**  
   Load required theming guidelines and confirm key design choices:
   - CSS framework (Tailwind, Bootstrap, Material, or Greenfield(custom theme)). If no themes detected in the existing project, Greenfield and Syncfusion Tailwind3 theme are shown as the default option-proceed with this or change the theme as preferred.
   - Syncfusion theme (Tailwind3, Bootstrap5, Material3, fluent2)
   - Light and Dark Mode
   - Core design basics (colors, spacing, typography, responsiveness, accessibility)
5. **Code Generation** - Produce C# Blazor components with PDF Viewer, parameter interfaces, and CSS/styling scaffolding.
6. **Dependency Management** - Recommend or install required Syncfusion® packages and peer dependencies.
7. **Validation** - Run accessibility and basic security checks, request confirmation for changes.
8. **Code Insertion** - Create files or patch existing files following project structure and conventions.

Key enforcement points:

- Adds correct theme and CSS imports for chosen Syncfusion® themes
- Injects only the feature modules required by generated components
- Generates semantic HTML with ARIA attributes and keyboard support
- Avoids unsupported or deprecated API usages for Syncfusion® components

> The assistant handles most stages automatically and may request confirmation where required.

## Using the AI Assistant

After installing Blazor UI Builder Skill with PDF Viewer and APM, the relevant agent and skill files are added to your project under:

- `.agent/skills/` (skill files)
- `.github/agents/` (Blazor UI builder agent configuration, based on the selected target)

To start using the skill:

1. Open your supported IDE.
2. In the chat panel, select the `syncfusion-blazor-ui-builder` agent from the **Agent dropdown**.
  ![Set Agent](./images/blazor-ui-builder.png)
3. Start prompting the agent with a clear description of your UI requirements.

Examples Prompts:

{% promptcards %}
{% promptcard Knowledge Base Article Viewer %}
Build a knowledge base article page where the PDF viewer is embedded as the main reading area. Add a left navigation sidebar for article categories and a top search bar. Include bookmarking and quick navigation within the document. Use a clean, documentation-style layout.
{% endpromptcard %}
{% promptcard HR Resume Review Screen %}
Design a resume review interface using the PDF viewer for candidate CVs. Add a right panel with candidate details, ratings, tags, and action buttons (shortlist, reject, schedule interview). Include quick notes functionality. Focus on fast scanning and decision-making UX.
{% endpromptcard %}
{% endpromptcards %}

* Generated code follows best practices with accessible, semantic HTML, responsive mobile-first layouts, strong C# typing, and built-in security measures such as input validation and avoidance of embedded secrets.

## Best Practices

Follow these guidelines to get the most out of UI Builder and ensure high-quality production-ready result:

- **Stay consistent** - Maintain consistent file organization, naming conventions, and coding standards throughout your project.
- **Use advanced AI models** - For best results, use **Claude Sonnet 4.6 or higher** capability models to produce better code quality and more accurate implementations.
- **Review all content and assets before production** - Replace any placeholder images or icons (e.g., from emoji sets) with your brand assets. Also validate the logic, security, and compatibility with your existing code before deployment.

## Troubleshooting

- **APM installation failure**: Refer to this [documentation](https://microsoft.github.io/apm/getting-started/installation/#troubleshooting)

- **Skills not loading**: Ensure the **.agent/** and **.github/agents/** folders exist in your project and that the skill was installed successfully using APM. Verify that the correct agent is selected from the Agent dropdown in your IDE.

- **Component not rendering**: Retry generation using the specific component skill to resolve the issue, and ensure required Syncfusion® packages and themes are properly configured.

- **Syncfusion license banner appears**: Use the licensing skill to correctly register and validate your Syncfusion® license key in the application.


## FAQ

**Which agents/IDEs are supported?**
Any Skills-compatible agent that reads local skill files (Code Studio, VS Code, Cursor, etc.).

**Are skills loaded automatically?**  
Yes. Supported agents automatically load relevant skills based on your query.

**Can I customize the generated styles?**
Yes - the skill supports choosing Tailwind, Bootstrap, Material, or a custom theme; generated components include clear integration points for style adjustments.

**Does it modify files automatically?**
The skill proposes changes and requires confirmation for insertion; automatic dependency installation may be offered depending on agent permissions.

## See also

- [Agent Skills Standards](https://agentskills.io/home)
- [Agent Package Manager](https://microsoft.github.io/apm/getting-started/quick-start/)

