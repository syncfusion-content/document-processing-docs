---
layout: post
title: User Token with Custom Azure AI service in SmartPdfviewer in Blazor App | Syncfusion
description: Learn how to implement a User Token with Custom Azure AI service in Syncfusion SmartPdfviewer in a Blazor App.
control: SmartPdfviewer
documentation: ug
---
# Getting Started with SmartPdfviewer using User Token with Custom Azure AI service

This guide provides step-by-step instructions for integrating and using Syncfusion's SmartPdfviewer with User Token and Custom Azure AI service in your Blazor App.

## Prerequisites

Before you begin, ensure you have:

* [System requirements for Blazor components](https://blazor.syncfusion.com/documentation/system-requirements)
* [Azure OpenAI Account](https://learn.microsoft.com/en-us/azure/ai-services/openai/how-to/create-resource)

## Getting Started for User Token with Custom Azure AI service in SmartPdfviewer

After completing this setup, you can:

1. [Add SmartPdfviewer to your Blazor pages](Add link for smart pdfviewer getting Started)

---
## Step 1: create user token service
The `UserTokenService` is responsible for generating secure tokens for users. These tokens can be used to authenticate requests to your Custom Azure AI Service. 

### Implementation Steps
1.	Create a new class file named UserTokenService.cs in your project
2.	Add the following implementation:

```csharp
    public class UserTokenService
    {
        private readonly IJSRuntime _jsRuntime;
        private const string TokenFilePath = "user_tokens.json";
        private static readonly TimeZoneInfo IndianStandardTime = TimeZoneInfo.FindSystemTimeZoneById("India Standard Time");

        public UserTokenService(IJSRuntime jsRuntime)
        {
            _jsRuntime = jsRuntime;
        }

        public async Task<string> GetUserFingerprintAsync()
        {
            return await _jsRuntime.InvokeAsync<string>("fingerPrint");
        }

        public async Task<int> GetRemainingTokensAsync(string userCode)
        {
            Dictionary<string, UserTokenInfo> tokens = await CheckAndResetTokensAsync(userCode);
            return tokens.ContainsKey(userCode) ? tokens[userCode].RemainingTokens : 15000 ;
        }

        public async Task UpdateTokensAsync(string userCode, int tokens)
        {
            Dictionary<string, UserTokenInfo> tokenData = await ReadTokensFromFileAsync();
            if (tokenData.ContainsKey(userCode))
            {
                tokenData[userCode].RemainingTokens = tokens;
            }
            else
            {
                tokenData[userCode] = new UserTokenInfo
                {
                    UserId = userCode,
                    DateOfLogin = TimeZoneInfo.ConvertTimeFromUtc(DateTime.UtcNow, IndianStandardTime),
                    RemainingTokens = tokens
                };
            }
            await WriteTokensToFileAsync(tokenData);
        }

        public async Task<Dictionary<string, UserTokenInfo>> CheckAndResetTokensAsync(string userCode)
        {
            Dictionary<string, UserTokenInfo> tokenData = await ReadTokensFromFileAsync();
            if (tokenData.ContainsKey(userCode))
            {
                UserTokenInfo userTokenInfo = tokenData[userCode];
                DateTime currentTime = TimeZoneInfo.ConvertTimeFromUtc(DateTime.UtcNow, IndianStandardTime);
                TimeSpan timeDifference = currentTime - userTokenInfo.DateOfLogin;

                if (timeDifference.TotalHours > 24)
                {
                    userTokenInfo.RemainingTokens = 15000; // Reset tokens
                    userTokenInfo.DateOfLogin = currentTime; // Update login time
                    await WriteTokensToFileAsync(tokenData);
                }
            }
            return tokenData;
        }


        private async Task<Dictionary<string, UserTokenInfo>> ReadTokensFromFileAsync()
        {
            if (!File.Exists(TokenFilePath))
            {
                Dictionary<string, UserTokenInfo> initialData = new Dictionary<string, UserTokenInfo>();
                await WriteTokensToFileAsync(initialData);
                return initialData;
            }

            string json = await File.ReadAllTextAsync(TokenFilePath);
            Dictionary<string, UserTokenInfo>? tokenData = JsonSerializer.Deserialize<Dictionary<string, UserTokenInfo>>(json);
            return tokenData ?? new Dictionary<string, UserTokenInfo>();
        }

        private async Task WriteTokensToFileAsync(Dictionary<string, UserTokenInfo> tokenData)
        {
            string json = JsonSerializer.Serialize(tokenData, new JsonSerializerOptions { WriteIndented = true });
            await File.WriteAllTextAsync(TokenFilePath, json);
        }


        public async Task ShowAlert(string userCode)
        {
            string message = await ReturnAlertMessage(userCode);
            await _jsRuntime.InvokeVoidAsync("showBanner", message.ToString());
        }

        public async Task<string> ReturnAlertMessage(string userCode)
        {
            Dictionary<string, UserTokenInfo> tokenData = await ReadTokensFromFileAsync();
            if (tokenData.ContainsKey(userCode))
            {
                UserTokenInfo userTokenInfo = tokenData[userCode];
                string resetTime = userTokenInfo.DateOfLogin.AddHours(24).ToString("f");
                string message = $"You have reached your token limit. Your tokens will reset on {resetTime}. Download our <a href=\"https://github.com/syncfusion/smart-ai-samples/tree/master/blazor\" target=\"_blank\">Syncfusion Smart AI Samples</a> from GitHub to explore this sample locally with your own API key.";
                return message;
            }
            return "";
        }

    }

    public class UserTokenInfo
    {
        public string UserId { get; set; }
        public DateTime DateOfLogin { get; set; }
        public int RemainingTokens { get; set; }
    }
}

````
## Step 2: Implement User Token API Controller
The `UserTokensController` class serves as the API layer for interacting with the user token system.This controller is essential for enabling secure and dynamic token tracking for users interacting with your Custom Azure AI Service.

1.	Create a new class file named UserTokensController.cs in your project
2.	Add the following implementation:

```csharp
[Route("api/[controller]")]
[ApiController]
public class UserTokensController : ControllerBase
{
     private readonly IWebHostEnvironment _env;
     private UserTokenService userToken { get; set; }

     public UserTokensController(IWebHostEnvironment env, UserTokenService user)
     {
         _env = env;
         userToken = user;
     }

     [HttpGet("get_remaining_tokens/{userId}")]
     public async Task<IActionResult> GetRemainingTokens(string userId)
     {
         string filePath = Path.Combine(_env.ContentRootPath, "user_tokens.json");
         int remainingTokens = await userToken.GetRemainingTokensAsync(userId);
         string alertMessage = await userToken.ReturnAlertMessage(userId);
         if (remainingTokens <= 300)
         {
             return Ok(new { remainingTokens, alertMessage });
         }
         await userToken.UpdateTokensAsync(userId, (int)(remainingTokens - 550));
         return Ok(new { remainingTokens, alertMessage });
     }
}
````
## Step 3: Create a Custom Azure AI Service

The Syncfusion SmartPdfviewer are designed to work with different AI backends through the `IChatInferenceService` interface. This section shows you how to create a custom implementation that connects the SmartPdfviewer to the Azure AI service.

### Understanding the Interface

The `IChatInferenceService` interface is the bridge between Syncfusion SmartPdfviewer and AI services:

1. Create a new file named `AzureAIService.cs`
2. Add the following implementation:

```csharp
public class AzureAIService : IChatInferenceService
{
     private readonly UserTokenService _userTokenService;
     private ChatParameters chatParameters_history = new ChatParameters();
     private IChatClient _chatClient;

     public AzureAIService(UserTokenService userTokenService, IChatClient client)
     {
         _userTokenService = userTokenService;
         this._chatClient = client ?? throw new ArgumentNullException(nameof(client));
     }


     /// <summary>
     /// Gets a text completion from the Azure OpenAI service.
     /// </summary>
     /// <param name="prompt">The user prompt to send to the AI service.</param>
     /// <param name="returnAsJson">Indicates whether the response should be returned in JSON format. Defaults to <c>true</c></param>
     /// <param name="appendPreviousResponse">Indicates whether to append previous responses to the conversation history. Defaults to <c>false</c></param>
     /// <param name="systemRole">Specifies the systemRole that is sent to AI Clients. Defaults to <c>null</c></param>
     /// <returns>The AI-generated completion as a string.</returns>
     public async Task<string> GetCompletionAsync(string prompt, bool returnAsJson = true, bool appendPreviousResponse = false, string systemRole = null, int outputTokens = 2000)
     {
         string systemMessage = returnAsJson ? "You are a helpful assistant that only returns and replies with valid, iterable RFC8259 compliant JSON in your responses unless I ask for any other format. Do not provide introductory words such as 'Here is your result' or 'json', etc. in the response" : !string.IsNullOrEmpty(systemRole) ? systemRole : "You are a helpful assistant";
         try
         {
             ChatParameters chatParameters = appendPreviousResponse ? chatParameters_history : new ChatParameters();
             if (appendPreviousResponse)
             {
                 if (chatParameters.Messages == null)
                 {
                     chatParameters.Messages = new List<ChatMessage>() {
                         new ChatMessage(ChatRole.System,systemMessage),
                     };
                 }
                 chatParameters.Messages.Add(new ChatMessage(ChatRole.User, prompt));
             }
             else
             {
                 chatParameters.Messages = new List<ChatMessage>(2) {
                     new ChatMessage (ChatRole.System, systemMessage),
                     new ChatMessage(ChatRole.User,prompt),
                 };
             }
             chatParameters.MaxTokens = outputTokens;
             string completion = await GenerateResponseAsync(chatParameters);
             if (appendPreviousResponse)
             {
                 chatParameters_history?.Messages?.Add(new ChatMessage(ChatRole.Assistant, completion));
             }
             return completion;
         }
         catch (Exception ex)
         {
             Console.WriteLine($"An exception has occurred: {ex.Message}");
             return "";
         }
     }

     public async Task<string> GenerateResponseAsync(ChatParameters options)
     {
         string userCode = await _userTokenService.GetUserFingerprintAsync();
         int remainingTokens = await _userTokenService.GetRemainingTokensAsync(userCode);
         int inputTokens = options.Messages.Sum(message => message.Text.Length / 4);

         if (remainingTokens <= inputTokens)
         {
             await _userTokenService.ShowAlert(userCode);
             return null;
         }
         // Create a completion request with the provided parameters
         ChatOptions completionRequest = new ChatOptions
         {
             Temperature = options.Temperature ?? 0.5f,
             TopP = options.TopP ?? 1.0f,
             MaxOutputTokens = options.MaxTokens ?? 2000,
             FrequencyPenalty = options.FrequencyPenalty ?? 0.0f,
             PresencePenalty = options.PresencePenalty ?? 0.0f,
             StopSequences = options.StopSequences
         };
         try
         {
             ChatResponse completion = await _chatClient.GetResponseAsync(options.Messages, completionRequest);
             await _userTokenService.UpdateTokensAsync(userCode, (int)(remainingTokens - completion.Usage.TotalTokenCount));
             return completion.Text.ToString();
         }
         catch (Exception ex)
         {
             throw;
         }
     }
}

````
## Step 4: Add a script file to your application and refer it to the head tag.

```cshtml

<head>
    <script src="index.js" type="text/javascript"></script>
</head>

```

## Step 5: Configure the Blazor App

Configure your Blazor application to use the User Token with Azure AI service with Syncfusion SmartPdfviewer. This involves registering necessary services and setting up the dependency injection container.

```CSharp

using Azure.AI.OpenAI;
using System.ClientModel;
using Microsoft.Extensions.AI;
using Syncfusion.Blazor.AI;

string azureOpenAIKey = "Your API Key";
string azureOpenAIEndpoint = "Your Endpoint";
string azureOpenAIModel = "Your model name";
AzureOpenAIClient azureOpenAIClient = new AzureOpenAIClient(
    new Uri(azureOpenAIEndpoint),
    new ApiKeyCredential(azureOpenAIKey)
);
IChatClient azureOpenAIChatClient = azureOpenAIClient.GetChatClient(azureOpenAIModel).AsIChatClient();
builder.Services.AddChatClient(azureOpenAIChatClient);
builder.Services.AddSyncfusionSmartComponents()
   .InjectOpenAIInference();
builder.Services.AddScoped<UserTokenService>();
builder.Services.AddScoped<IChatInferenceService, AzureAIService>(sp =>
{
    var userTokenService = sp.GetRequiredService<UserTokenService>();
    return new AzureAIService(userTokenService, azureOpenAIChatClient);
});

````
Here,

* **apiKey**: "Azure OpenAI API Key";
* **deploymentName**: "Azure OpenAI deployment name";
* **endpoint**: "Azure OpenAI deployment end point URL";

For **Azure OpenAI**, first [deploy an Azure OpenAI Service resource and model](https://learn.microsoft.com/en-us/azure/ai-services/openai/how-to/create-resource), then values for `apiKey`, `deploymentName` and `endpoint` will all be provided to you.

N> From version 28.2.33, the Azure.AI.OpenAI package has been removed from the SmartComponents dependency. To use Azure OpenAI, please install the [Azure.AI.OpenAI](https://www.nuget.org/packages/Azure.AI.OpenAI) package separately in your Blazor application.

[View sample in GitHub](Need to add sample)