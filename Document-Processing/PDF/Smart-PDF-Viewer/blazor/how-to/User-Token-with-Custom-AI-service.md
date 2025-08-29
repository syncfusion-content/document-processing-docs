---
layout: post
title: UserToken with Azure AI service in Smart PDF Viewer| Syncfusion
description: Learn how to implement a User Token with Custom Azure AI service in Syncfusion Smart PDF Viewer in a Blazor App.
platform: document-processing
control: SfSmartPdfViewer
documentation: ug
---
# Getting Started Smart PDF Viewer using UserToken with Azure service

This guide provides step-by-step instructions for integrating and using Syncfusion's Smart PDF Viewer with User Token and Custom Azure AI service in your Blazor App.

## Prerequisites

Before you begin, ensure you have:

* [System requirements for Blazor components](https://blazor.syncfusion.com/documentation/system-requirements)
* [Azure OpenAI Account](https://learn.microsoft.com/en-us/azure/ai-services/openai/how-to/create-resource)

## Getting Started for User Token with Custom Azure AI service in Smart PDF Viewer

After completing this setup, you can:

1. [Add Smart PDF Viewer to your Blazor pages](../getting-started/web-app)

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

The Syncfusion Smart PDF Viewer are designed to work with different AI backends through the `IChatInferenceService` interface. This section shows you how to create a custom implementation that connects the Smart PDF Viewer to the Azure AI service.

### Understanding the Interface

The `IChatInferenceService` interface is the bridge between Syncfusion Smart PDF Viewer and AI services:

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
## Step 5: Add the following code to render the JS component in the blazor to the newly added JS file.

```javascript
async function fingerPrint() {
    try {
        var canvas = document.body.appendChild(document.createElement('canvas'));
        canvas.width = 600;
        canvas.height = 300;
        canvas.style.display = "none";
        const ctx = canvas.getContext("2d");
        const size = 24;
        const diamondSize = 28;
        const gap = 4;
        const startX = 30;
        const startY = 30;
        const blue = "#1A3276";
        const orange = "#F28C00";
        const colorMap = [
            ["blue", "blue", "diamond"],
            ["blue", "orange", "blue"],
            ["blue", "blue", "blue"]
        ];
        function drawSquare(x, y, color) {
            ctx.fillStyle = color;
            ctx.fillRect(x, y, size, size);
        }
        function drawDiamond(centerX, centerY, size, color) {
            ctx.fillStyle = color;
            ctx.beginPath();
            ctx.moveTo(centerX, centerY - size / 2);
            ctx.lineTo(centerX + size / 2, centerY);
            ctx.lineTo(centerX, centerY + size / 2);
            ctx.lineTo(centerX - size / 2, centerY);
            ctx.closePath();
            ctx.fill();
        }
        for (let row = 0; row < 3; row++) {
            for (let col = 0; col < 3; col++) {
                const type = colorMap[row][col];
                const x = startX + col * (size + gap);
                const y = startY + row * (size + gap);
                if (type === "blue") drawSquare(x, y, blue);
                else if (type === "orange") drawSquare(x, y, orange);
                else if (type === "diamond") drawDiamond(x + size / 2, y + size / 2, diamondSize, orange);
            }
        }
        ctx.font = "20px Arial";
        ctx.fillStyle = blue;
        ctx.textBaseline = "middle";
        ctx.fillText("Syncfusion", startX + 3 * (size + gap) + 20, startY + size + gap);
        ctx.globalCompositeOperation = "multiply";
        ctx.fillStyle = "rgb(255,0,255)";
        ctx.beginPath(); ctx.arc(50, 200, 50, 0, Math.PI * 2); ctx.fill();
        ctx.fillStyle = "rgb(0,255,255)";
        ctx.beginPath(); ctx.arc(100, 200, 50, 0, Math.PI * 2); ctx.fill();
        ctx.fillStyle = "rgb(255,255,0)";
        ctx.beginPath(); ctx.arc(75, 250, 50, 0, Math.PI * 2); ctx.fill();
        ctx.fillStyle = "rgb(255,0,255)";
        ctx.beginPath();
        ctx.arc(200, 200, 75, 0, Math.PI * 2, true);
        ctx.arc(200, 200, 25, 0, Math.PI * 2, true);
        ctx.fill("evenodd");
        const sha256 = async function (str) {
            const encoder = new TextEncoder();
            const data = encoder.encode(str);
            const hashBuffer = await crypto.subtle.digest('SHA-256', data);
            const hashArray = Array.from(new Uint8Array(hashBuffer));
            return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
        };

        const visitorID = sha256(canvas.toDataURL());
        return visitorID;
    }
    catch (error) {
        console.error(error);
        return null;
    }
}

function showBanner(messageText) {
    // Check if the banner already exists
    if (document.getElementById("custom-banner")) {
        hideSpinner();
        return;
    }

    // Create the banner container
    let banner = document.createElement("div");
    banner.id = "custom-banner";
    banner.className = "e-banner";

    // Banner content
    let message = document.createElement("p");
    message.innerHTML = messageText;
    message.className = "banner-message";

    // Create the close button
    let closeButton = document.createElement("span");
    closeButton.innerHTML = "&times;"; // HTML entity for '×' symbol
    closeButton.className = "close-button";
    closeButton.onclick = closeBanner;

    // Append elements
    banner.appendChild(message);
    banner.appendChild(closeButton);
    document.body.insertBefore(banner, document.body.firstChild);
    hideSpinner();
}

async function getRemainingTokens(userId) {
    try {
        const baseElement = document.querySelector('base');
        const baseUrl = baseElement ? baseElement.href : window.location.origin;
        const response = await fetch(`${baseUrl}api/UserTokens/get_remaining_tokens/${userId}`);
        if (response.ok) {
            return await response.json();
        }
    } catch (error) {
        console.error("Error fetching remaining tokens:", error);
    }
    return 0;
}
function closeBanner() {
    let banner = document.getElementById("custom-banner");
    if (banner) {
        document.body.removeChild(banner);
    }
}

function hideSpinner() {
    var spinnerElement = document.querySelector('.e-spinner-pane.e-spin-show');
    if (spinnerElement) {
        spinnerElement.classList.remove('e-spin-show');
        spinnerElement.classList.add('e-spin-hide');
    }
}
````

## Step 6: Configure the Blazor App

Configure your Blazor application to use the User Token with Azure AI service with Syncfusion Smart PDF Viewer. This involves registering necessary services and setting up the dependency injection container.

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
builder.Services.AddScoped<UserTokenService>();
builder.Services.AddScoped<IChatInferenceService, AzureAIService>(sp =>
{
    UserTokenService userTokenService = sp.GetRequiredService<UserTokenService>();
    return new AzureAIService(userTokenService, azureOpenAIChatClient);
});

```
Here,

* **apiKey**: "Azure OpenAI API Key";
* **deploymentName**: "Azure OpenAI deployment name";
* **endpoint**: "Azure OpenAI deployment end point URL";

For **Azure OpenAI**, first [deploy an Azure OpenAI Service resource and model](https://learn.microsoft.com/en-us/azure/ai-services/openai/how-to/create-resource), then values for `apiKey`, `deploymentName` and `endpoint` will all be provided to you.

[View sample in GitHub](https://github.com/SyncfusionExamples/blazor-smart-pdf-viewer-examples/tree/master/Custom%20Services/AzureAI%20service%20with%20User%20token)

## See also

* [Getting Started with Blazor Smart PDF Viewer in Web App Server](../getting-started/web-app)
* [Custom AI Service Integration in Blazor Smart PDF Viewer](../custom-ai-service)