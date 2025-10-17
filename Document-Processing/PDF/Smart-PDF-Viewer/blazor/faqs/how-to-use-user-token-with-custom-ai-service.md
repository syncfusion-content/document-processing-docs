---
layout: post
title: UserToken with Azure AI Service in Smart PDF Viewer| Syncfusion
description: Implement a user token with a custom Azure OpenAI service in the Syncfusion Smart PDF Viewer for a Blazor app.
platform: document-processing
control: SfSmartPdfViewer
documentation: ug
---
# Getting Started Smart PDF Viewer using UserToken with Azure Service

This article provides step-by-step instructions for integrating and using Syncfusion Smart PDF Viewer with a user token and a custom Azure OpenAI service in a Blazor app.

## Prerequisites

Before you begin, ensure you have:

* [System requirements for Blazor components](https://blazor.syncfusion.com/documentation/system-requirements)
* [Azure OpenAI Account](https://learn.microsoft.com/en-us/azure/ai-services/openai/how-to/create-resource)

## Getting Started for User Token with Custom Azure AI service in Smart PDF Viewer

After completing this setup, you can:

1. [Add Smart PDF Viewer to your Blazor pages](../getting-started/web-app)

---
## Step 1: Create User Token Service
The `UserTokenService` is responsible for generating and managing per-user quotas. These tokens are used to authenticate and throttle requests to the custom Azure OpenAI service based on user identity.

### Implementation Steps
1.	Create a new class file named **UserTokenService.cs** in your project
2.	Add the following implementation:

{% tabs %}
{% highlight c# tabtitle="~/UserTokenService.cs" %}

// This class handles user token management including generation, tracking, and resetting.
public class UserTokenService
{
    private readonly IJSRuntime _jsRuntime;
    private const string TokenFilePath = "user_tokens.json"; // Path to the token storage file
    private static readonly TimeZoneInfo IndianStandardTime = TimeZoneInfo.FindSystemTimeZoneById("India Standard Time");
        
    // Constructor to initialize JavaScript runtime for browser interactions
    public UserTokenService(IJSRuntime jsRuntime)
    {
        _jsRuntime = jsRuntime;
    }

    // Retrieves a unique fingerprint for the user using JavaScript
    public async Task<string> GetUserFingerprintAsync()
    {
        return await _jsRuntime.InvokeAsync<string>("fingerPrint");
    }

    // Gets the remaining tokens for a user, resetting if needed
    public async Task<int> GetRemainingTokensAsync(string userCode)
    {
        Dictionary<string, UserTokenInfo> tokens = await CheckAndResetTokensAsync(userCode);
        return tokens.ContainsKey(userCode) ? tokens[userCode].RemainingTokens : 15000 ;
    }

    // Updates the token count for a user and saves it to the file
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

    // Checks if 24 hours have passed since last login and resets tokens if needed
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

    // Reads token data from the JSON file
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

    // Reads token data from the JSON file
    private async Task WriteTokensToFileAsync(Dictionary<string, UserTokenInfo> tokenData)
    {
        string json = JsonSerializer.Serialize(tokenData, new JsonSerializerOptions { WriteIndented = true });
        await File.WriteAllTextAsync(TokenFilePath, json);
    }
    // Displays an alert banner in the browser with token reset info
    public async Task ShowAlert(string userCode)
    {
        string message = await ReturnAlertMessage(userCode);
        await _jsRuntime.InvokeVoidAsync("showBanner", message.ToString());
    }

    // Generates the alert message with token reset time and GitHub link
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
// Model class to store user token information
public class UserTokenInfo
{
    public string UserId { get; set; }
    public DateTime DateOfLogin { get; set; }
    public int RemainingTokens { get; set; }
}

{% endhighlight %}
{% endtabs %}

## Step 2: Implement User Token API Controller
The `UserTokensController` class exposes endpoints to check and update user tokens. This enables secure and dynamic quota tracking for users interacting with the custom Azure OpenAI service.

1.	Create a new class file named **UserTokensController.cs** in your project
2.	Add the following implementation:

{% tabs %}
{% highlight c# tabtitle="~/UserTokensController.cs" %}
// Defines the route for the API controller and marks it as an API controller
[Route("api/[controller]")]
[ApiController]
public class UserTokensController : ControllerBase
{
    private readonly IWebHostEnvironment _env; // Provides access to web hosting environment properties
    private UserTokenService userToken { get; set; } // Service to manage user tokens

    // Constructor to inject dependencies: hosting environment and token service
    public UserTokensController(IWebHostEnvironment env, UserTokenService user)
    {
        _env = env;
        userToken = user;
    }

    // API endpoint to get remaining tokens for a user
    // Route: GET api/usertokens/get_remaining_tokens/{userId}
    [HttpGet("get_remaining_tokens/{userId}")]
    public async Task<IActionResult> GetRemainingTokens(string userId)
    {
        // Construct the full path to the token file
        string filePath = Path.Combine(_env.ContentRootPath, "user_tokens.json");

        // Get the current remaining tokens for the user
        int remainingTokens = await userToken.GetRemainingTokensAsync(userId);

        // Get the alert message if the user is near or at the token limit
        string alertMessage = await userToken.ReturnAlertMessage(userId);

        // If tokens are low (≤ 300), return the current token count and alert message
        if (remainingTokens <= 300)
        {
            return Ok(new { remainingTokens, alertMessage });
        }

        // Otherwise, deduct 550 tokens and update the token count
        await userToken.UpdateTokensAsync(userId, (int)(remainingTokens - 550));

        // Return the updated token count and alert message
        return Ok(new { remainingTokens, alertMessage });
    }
}

{% endhighlight %}
{% endtabs %}

## Step 3: Create a Custom Azure AI Service

The Syncfusion Smart PDF Viewer is designed to work with different AI backends through the `IChatInferenceService` interface. This section shows how to create a custom implementation that connects the Smart PDF Viewer to the Azure OpenAI service.

### Understanding the Interface

The `IChatInferenceService` interface is the bridge between Syncfusion Smart PDF Viewer and AI services:

1. Create a new file named **AzureAIService.cs**
2. Add the following implementation:

{% tabs %}
{% highlight c# tabtitle="~/AzureAIService.cs" %}

// AzureAIService integrates with Azure OpenAI to generate chat completions and manage token usage.
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

    /// <summary>
    /// Sends the chat parameters to the AI client and returns the response.
    /// Also checks and updates token usage.
    /// </summary>
    /// <param name="options">Chat parameters including messages and settings.</param>
    /// <returns>AI-generated response text.</returns
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

{% endhighlight %}
{% endtabs %}

## Step 4: Add a script file to your application and refer it to the body tag.

```cshtml

<body>
    <script src="index.js" type="text/javascript"></script>
</body>

```
## Step 5: Add the following code to render the JS component in the blazor to the newly added JS file.

```javascript

// Generates a unique fingerprint for the user based on canvas rendering and SHA-256 hashing
async function fingerPrint() {
    try {
        // Create a hidden canvas element
        var canvas = document.body.appendChild(document.createElement('canvas'));
        canvas.width = 600;
        canvas.height = 300;
        canvas.style.display = "none";

        // Drawing parameters
        const ctx = canvas.getContext("2d");
        const size = 24;
        const diamondSize = 28;
        const gap = 4;
        const startX = 30;
        const startY = 30;
        const blue = "#1A3276";
        const orange = "#F28C00";

        // Pattern map for drawing squares and diamonds
        const colorMap = [
            ["blue", "blue", "diamond"],
            ["blue", "orange", "blue"],
            ["blue", "blue", "blue"]
        ];

        // Draw a square at specified coordinates
        function drawSquare(x, y, color) {
            ctx.fillStyle = color;
            ctx.fillRect(x, y, size, size);
        }

        // Draw a diamond shape at specified coordinates
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

        // Render the pattern on canvas
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

        // Add text and shapes to increase fingerprint uniqueness
        ctx.font = "20px Arial";
        ctx.fillStyle = blue;
        ctx.textBaseline = "middle";
        ctx.fillText("Syncfusion", startX + 3 * (size + gap) + 20, startY + size + gap);

        // Add overlapping circles with blend mode
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

        // Hash the canvas data to generate a unique ID
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

// Displays a banner message on the page
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

// Fetches remaining tokens for a user from the backend API
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
```

## Step 6: Configure the Blazor App

Configure the Blazor application to use the user token with the Azure OpenAI service and Syncfusion Smart PDF Viewer. This includes registering Syncfusion services, the chat client, and the custom AI service.

{% tabs %}
{% highlight c# tabtitle="~/Program.cs" %}

using Azure.AI.OpenAI;
using System.ClientModel;
using Microsoft.Extensions.AI;
using Syncfusion.Blazor.AI;

...
var builder = WebApplication.CreateBuilder(args);

....

builder.Services.AddSyncfusionBlazor();

// Define your Azure OpenAI credentials and model
string azureOpenAIKey = "Your API Key"; // Replace with your actual Azure OpenAI API key
string azureOpenAIEndpoint = "Your Endpoint"; // Replace with your Azure OpenAI endpoint URL
string azureOpenAIModel = "Your model name"; // Replace with your deployed model name

// Create an AzureOpenAIClient instance using the endpoint and API key
AzureOpenAIClient azureOpenAIClient = new AzureOpenAIClient(
    new Uri(azureOpenAIEndpoint),
    new ApiKeyCredential(azureOpenAIKey)
);

// Get a chat client from the AzureOpenAIClient and cast it to IChatClient
IChatClient azureOpenAIChatClient = azureOpenAIClient.GetChatClient(azureOpenAIModel).AsIChatClient();
builder.Services.AddChatClient(azureOpenAIChatClient);
builder.Services.AddScoped<UserTokenService>();

// Register AzureAIService as the implementation of IChatInferenceService
builder.Services.AddScoped<IChatInferenceService, AzureAIService>(sp =>
{
    UserTokenService userTokenService = sp.GetRequiredService<UserTokenService>();
    return new AzureAIService(userTokenService, azureOpenAIChatClient);
});

var app = builder.Build();
....

{% endhighlight %}
{% endtabs %}

Here,

* **apiKey**: "Azure OpenAI API Key";
* **deploymentName**: "Azure OpenAI deployment name";
* **endpoint**: "Azure OpenAI deployment end point URL";

For **Azure OpenAI**, first [deploy an Azure OpenAI Service resource and model](https://learn.microsoft.com/en-us/azure/ai-services/openai/how-to/create-resource), then values for `apiKey`, `deploymentName` and `endpoint` will all be provided to you.

N> [View sample in GitHub](https://github.com/SyncfusionExamples/blazor-smart-pdf-viewer-examples/tree/master/Custom%20Services/AzureAI%20service%20with%20User%20token)

## See also

* [Getting Started with Blazor Smart PDF Viewer in Web App Server](../getting-started/web-app)
* [Custom AI Service Integration in Blazor Smart PDF Viewer](../custom-ai-service)