---
layout: post
title: MAUI UI Builder Skill with PDF Viewer for AI Assistants | Syncfusion®
description: Install Syncfusion® MAUI UI Builder to generate production-ready MAUI components with PDF Viewer from natural-language prompts.
control: PDF Viewer
platform: document-processing
documentation: ug
keywords: MAUI UI Builder, Skills, AI Assistants, PDF Viewer SDK, Agent Skills
---

# Syncfusion® MAUI UI Builder Skill with PDF Viewer for AI Assistants

**Syncfusion® MAUI UI Builder Skill** is an AI-powered agent skill that accelerates MAUI PDF Viewer development by transforming natural-language UI requirements into production-ready code using Syncfusion® MAUI components.

Integrated with your AI-powered IDE, it leverages deep knowledge of **Syncfusion® PDF Viewer and other MAUI components** to deliver accurate and ready-to-use code.
By combining intelligent code generation with best practices, accessibility standards, and design-system consistency, MAUI UI Builder with PDF Viewer helps you rapidly build scalable mobile and desktop applications for iOS, Android, macOS, and Windows without leaving your development workflow.

## Prerequisites

Before installing MAUI UI Builder with PDF Viewer, ensure the following:

- Install [APM (Agent Package Manager)](https://microsoft.github.io/apm/getting-started/installation/#quick-install-recommended)
- Required [Node.js](https://nodejs.org/en) version ≥ 18
- Required [.NET SDK](https://dotnet.microsoft.com/en-us/download) version ≥ 8.0
- [MAUI](https://learn.microsoft.com/en-us/dotnet/maui) workload installed (`dotnet workload install maui`)
- MAUI application (existing or new); see [Quick Start](https://learn.microsoft.com/en-us/dotnet/maui/get-started/first-app)
- A supported AI agent or IDE that integrates with the Skills (VS Code, Visual Studio, Cursor, Code Studio, etc.)
- Active Syncfusion<sup style="font-size:70%">&reg;</sup> license (any of the following):  
  - [Commercial](https://www.syncfusion.com/sales/unlimitedlicense)  
  - [Community License](https://www.syncfusion.com/products/communitylicense)  
  - [Free Trial](https://www.syncfusion.com/account/manage-trials/start-trials)

## Key Benefits

### **AI-Driven UI Generation**
- Converts prompts into complete MAUI components—not just snippets.
- Automatically selects appropriate Syncfusion® MAUI components and features.
- Produces structured, maintainable C# code.

### **Component Usage & API Accuracy**
- Uses correct Syncfusion® MAUI component APIs.
- Injects required attached behaviors and controls.
- Avoids unsupported or deprecated patterns.

### **Patterns & Best Practices**
- Recommended MVVM architecture and data binding patterns.
- Command handling aligned with MAUI standards.
- Secure and scalable coding patterns for cross-platform development.

### **Accessibility & Responsiveness**
- WCAG 2.1 AA–aligned output.
- Semantic UI with accessibility automation support.
- Responsive layouts that adapt across device sizes and orientations.

### **Design-System Integration**
- Supports Material Design 3, Fluent Design, and custom themes.
- Ensures consistent Syncfusion® theming across iOS, Android, macOS, and Windows.
- Platform-specific styling and adaptive layouts.

## Installation

Before installing MAUI UI Builder with PDF Viewer, ensure that APM (Agent Package Manager) is installed and available in your environment.

### Verify APM Installation

Run the following command to confirm APM is installed:

```bash
apm --version
```

### Install the Syncfusion® MAUI UI Builder with PDF Viewer package using APM

Use the APM CLI to install the MAUI UI Builder with PDF Viewer skill for your preferred environment:

{% tabs %}
{% highlight bash tabtitle="Copilot" %}

// By default, it installs to the GitHub Copilot target

apm install syncfusion/maui-ui-builder

{% endhighlight %}
{% highlight bash tabtitle="Cursor" %}

apm install syncfusion/maui-ui-builder -t cursor

{% endhighlight %}
{% highlight bash tabtitle="Visual Studio" %}

apm install syncfusion/maui-ui-builder -t copilot

{% endhighlight %}
{% highlight bash tabtitle="Code Studio" %}

// For Code Studio, refer to the note below to configure the agent location explicitly to use it in the chat.

apm install syncfusion/maui-ui-builder

{% endhighlight %}
{% highlight bash tabtitle="Codex" %}

apm install syncfusion/maui-ui-builder -t codex

{% endhighlight %}
{% highlight bash tabtitle="Claude" %}

apm install syncfusion/maui-ui-builder -t claude

{% endhighlight %}
{% endtabs %}

After installation, the following artifacts are added to your project for the GitHub Copilot target:

- `.agent/skills/` – contains the skill files
- `.github/agents/` – contains the agent configuration

For details on supported deployment targets, refer to the [documentation](https://microsoft.github.io/apm/reference/cli/targets/#detection-signals).

> For Syncfusion® Code Studio, users must explicitly configure the agent location to use it in the chat. Refer to the [documentation](https://help.syncfusion.com/code-studio/reference/configure-properties/usersettings#agent-file-locations).

## How the Syncfusion® MAUI UI Builder Skill Works with PDF Viewer

1. **Intent Analysis** — Parse the user's prompt to identify control types, layouts, and high-level UI structure intent.
2. **Project Detection** — Automatically detects project framework, platform targets, package manager, existing themes and PDF Viewer configuration.
3. **Component Mapping** — Map intent to Syncfusion® PDF Viewer and  MAUI controls, including required feature modules.
4. **Theming & Design System**  
   Load required theming guidelines and confirm key design choices:
   - Design system (Material Design 3, or Custom theme). If no themes detected in the existing project, Material Design 3 is shown as the default option—proceed with this or change the theme as preferred.
   - Syncfusion theme (Material3)
   - Light and Dark Mode support
   - Platform-specific adaptations (iOS, Android, macOS, Windows)
   - Core design basics (colors, spacing, typography, responsiveness, accessibility)
5. **Code Generation** — Produce C# MAUI components with PDF Viewer, ViewModel classes, and XAML markup with proper data binding.
6. **Dependency Management** — Recommend or install required Syncfusion® MAUI NuGet packages and peer dependencies.
7. **Validation** — Run accessibility and basic security checks, request confirmation for changes.
8. **Code Insertion** — Create files or patch existing files following MAUI project structure and conventions.

Key enforcement points:

- Adds correct theme and resource imports for chosen Syncfusion® MAUI themes
- Injects only the required controls and behaviors
- Generates accessible UI with proper automation properties and keyboard navigation
- Supports MVVM pattern with proper INotifyPropertyChanged implementation
- Avoids unsupported or deprecated API usages for Syncfusion® MAUI controls

> The assistant handles most stages automatically and may request confirmation where required.

## Using the AI Assistant

To start using the skill:

1. Open your supported IDE (Visual Studio, VS Code, or Code Studio).
2. In the chat panel, select the `syncfusion-maui-ui-builder` agent from the **Agent dropdown**.

 ![Set Agent](images/MAUI-Builder-Agent.png)

3. Start prompting the agent with a clear description of your UI requirements.

Examples Prompts:

{% promptcards %}
{% promptcard Knowledge Base Article Viewer %}
Build a knowledge base article page where the PDF viewer is embedded as the main reading area. Add a left navigation sidebar for article categories and a top search bar. Include bookmarking and quick navigation within the document. Use a clean, documentation-style layout.
{% endpromptcard %}
{% promptcard Course Material Viewer%}
Create a learning interface with the PDF viewer displaying course material. Add a collapsible sidebar with lesson navigation and progress tracking. Include a top progress bar, next/previous lesson buttons, and a notes section below or beside the viewer. Focus on student-friendly, distraction-free design.
{% endpromptcard %}
{% endpromptcards %}

Generated code follows best practices with accessible UI, responsive mobile-first layouts, strong C# typing, MVVM pattern implementation, and built-in security measures such as input validation and secure data handling.

## Best Practices

Follow these guidelines to get the most out of UI Builder with PDF Viewer and ensure high-quality production-ready result:

- **Stay consistent:** Maintain consistent file organization, naming conventions, and coding standards throughout your project.
- **Use advanced AI models:** For best results, use **Claude Sonnet 4.6 or higher** capability models to produce better code quality and more accurate implementations.
- **Review all content and assets before production:** Replace any placeholder images or icons (e.g., stock images or emoji sets) with your brand assets. Also validate the logic, security, and compatibility with your existing code before deployment.

## Troubleshooting

- **APM installation failure**: Refer to this [documentation](https://microsoft.github.io/apm/getting-started/installation/#troubleshooting)

- **Skills not loading**: Ensure the **.agent/** and **.github/agents/** folders exist in your project and that the skill was installed successfully using APM. Verify that the correct agent is selected from the Agent dropdown in your IDE.

- **Control not rendering**: Verify that the Syncfusion® MAUI NuGet packages are correctly installed and that the XAML namespaces are properly declared. Retry generation using the specific control skill to resolve the issue.

- **Platform-specific issues**: Ensure that your project has the correct platform-specific project files (.csproj) and that the MAUI workload is properly installed on your development machine.

- **Syncfusion license banner appears**: Use the licensing skill to correctly register and validate your Syncfusion® license key in the application.

- **XAML IntelliSense issues**: Clear the .vs folder and rebuild the solution to refresh the XAML designer and IntelliSense.

## FAQ

**Which agents/IDEs are supported?**
Any Skills-compatible agent that reads local skill files (Visual Studio, VS Code, Code Studio, Cursor, etc.).

**Are skills loaded automatically?**  
Yes. Supported agents automatically load relevant skills based on your query.

**Can I customize the generated styles?**
Yes — the skill supports choosing Material Design 3, or a custom theme; generated components include clear integration points for style adjustments.

**Does it modify files automatically?**
The skill proposes changes and requires confirmation for insertion; automatic NuGet package installation may be offered depending on agent permissions.

**Can I generate components for specific platforms only?**
Yes — you can specify platform targets (iOS, Android, macOS, Windows) in your prompt, and the skill will generate platform-appropriate code with conditional compilation where needed.

**Does it support MVVM pattern?**
Yes — the skill automatically generates ViewModels with proper INotifyPropertyChanged implementation, Command bindings, and data binding patterns aligned with MAUI best practices.

## See also

- [Agent Skills Standards](https://agentskills.io/home)
- [Agent Package Manager](https://microsoft.github.io/apm/getting-started/quick-start/)