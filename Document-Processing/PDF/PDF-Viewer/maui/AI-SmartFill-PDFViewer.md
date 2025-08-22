# AI-Driven Smart PDF Form Filling in .NET MAUI PDF Viewer

This document provides a comprehensive guide to implementing smart PDF form filling functionality within the Syncfusion [.NET MAUI PDFViewer]( Class SfPdfViewer - MAUI API Reference | Syncfusion) control. By integrating Azure OpenAI, this solution enables an intelligent, AI-powered smart PDF form filling. 

## Integrating Azure OpenAI with the .NET MAUI app

First unlocking the power of AI to locate specific places effortlessly, ensure that you have access to [Azure OpenAI](https://azure.microsoft.com/en-in/products/ai-services/openai-service) and have set up a deployment in the Azure portal. You can find the [Azure.AI.OpenAI](https://www.nuget.org/packages/Azure.AI.OpenAI/1.0.0-beta.12) NuGet package in the [NuGet Gallery](https://www.nuget.org/) and install it in the project.

Once you get your key and endpoint, follow these steps:

### Step 1: Set up Azure OpenAI

To configure Azure OpenAI, we’ll use the GPT-4O model for text. Set up the `AzureOpenAIClient ` as shown in the following code example

{% tabs %}

{% highlight c# %}

internal class AzureOpenAIService
{
    const string endpoint = "https://{YOUR_END_POINT}.openai.azure.com";
    const string deploymentName = "GPT-4O";
    const string imageDeploymentName = "DALL-E";
    string key = "API key";
    IChatClient? client;

    internal AzureOpenAIService()
    {
        // Constructor logic if needed
    }
}

{% endhighlight %}

{% endtabs %}

### Step 2: Connect to the Azure OpenAI

To set up the connection to Azure OpenAI. Refer the following code

{% tabs %}

{% highlight c# %}

IChatClient Client = new AzureOpenAIClient(new Uri("https://yourendpoint.com/"),new AzureKeyCredential("API_KEY")).AsChatClient(modelId: "DEPLOYMENT_NAME");

{% endhighlight %}

{% endtabs %}

### Step 3: Get the result from the AI service

Implement the ` GetAnswerFromGPT ` methods to retrieve responses from the Azure OpenAI API based on user input.

{% tabs %}

{% highlight c# %}

public async Task GetAnswerFromGPT(string userPrompt)
{
    try
    {
        if (IsCredentialValid && Client != null)
        {
            ChatHistory = string.Empty;
            ChatHistory += userPrompt;
            var response = await Client.CompleteAsync(ChatHistory);
            return response.ToString();
        }
        else
        {
            return string.Empty;
        }
    }
    catch
    {
        // Return an empty string if an exception occurs
        return string.Empty;   
     }
}


{% endhighlight %}

{% endtabs %}

The AIHelper class now offers a convenient way to interact with the Azure OpenAI API and retrieve completion results based on the provided prompt.