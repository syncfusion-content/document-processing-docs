# Connecting Local Web Services for Spreadsheet Open and Save in WCF

This guide demonstrates how to prepare and connect local web services for spreadsheet open and save operations using **WCF (Windows Communication Foundation)**.

By default, the Syncfusion Spreadsheet component uses Syncfusion®-hosted endpoints for file operations:

```ts
openUrl: 'https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/open',
saveUrl: 'https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/save'
```

However, these demo services are intended only for **demonstration purposes** and are not recommended for **production or development environments**.

**Benefits of hosting your own service:**
- **Full Control** – Manage your data and processes locally.
- **Better Performance** – Reduce latency with local or private hosting.
- **Security** – Keep sensitive files within your infrastructure.
- **Reliability** – Remain independent of Syncfusion's service availability.
- **Customization** – Add custom business logic and workflows.
- **Compliance** – Meet regulatory and data residency requirements.

## Create a New WCF Service Library Project

To create a new WCF Service Library project, follow the steps in the link below:

[Tutorial: Get started with WCF application | Microsoft Learn](https://learn.microsoft.com/en-us/dotnet/framework/wcf/how-to-create-a-wcf-service)

## Dependencies

To process Excel files, you can use libraries such as [Syncfusion XlsIO](https://www.syncfusion.com/products/file-formats/xlsio) or [EPPlus](https://www.epplussoftware.com/). Add the required NuGet package to your project for spreadsheet file handling.

## Add Open and Save Service Methods

Once the WCF service is created, define the service contract and implement the Open and Save methods as shown below:

**Service Contract (Interface):**
```csharp
using System.ServiceModel;
using System.ServiceModel.Web;
using System.IO;

[ServiceContract]
public interface ISpreadsheetService
{
	// Open action (accepts file upload as stream)
	[OperationContract]
	[WebInvoke(Method = "POST", UriTemplate = "/Open", BodyStyle = WebMessageBodyStyle.Bare)]
	Stream Open(Stream fileStream);

	// Save action (accepts file upload as stream)
	[OperationContract]
	[WebInvoke(Method = "POST", UriTemplate = "/Save", BodyStyle = WebMessageBodyStyle.Bare)]
	Stream Save(Stream fileStream);
}
```

**Service Implementation:**
```csharp
public class SpreadsheetService : ISpreadsheetService
{
	public Stream Open(Stream fileStream)
	{
		// Here, you would process the uploaded file stream (e.g., using Syncfusion XlsIO)
		// For demonstration, just return the same stream or a processed file stream
		// Example: Save the uploaded file to disk, then return a processed file as stream

		string tempPath = Path.GetTempFileName();
		using (var file = File.Create(tempPath))
		{
			fileStream.CopyTo(file);
		}

		// Process the file as needed, then return the result as a stream
		// For now, just return the uploaded file
		return new FileStream(tempPath, FileMode.Open, FileAccess.Read);
	}

	public Stream Save(Stream fileStream)
	{
		// Save the uploaded file to disk (or process as needed)
		string savePath = Path.Combine("C:\\SpreadsheetUploads", $"Saved_{Guid.NewGuid()}.xlsx");
		Directory.CreateDirectory(Path.GetDirectoryName(savePath));
		using (var file = File.Create(savePath))
		{
			fileStream.CopyTo(file);
		}

		// Return a simple confirmation message as a stream
		var result = System.Text.Encoding.UTF8.GetBytes("File saved successfully.");
		return new MemoryStream(result);
	}
}
```

## Configure the WCF Service

Edit `App.config` to expose the service over HTTP:

```xml
<system.serviceModel>
	<services>
		<service name="YourNamespace.SpreadsheetService">
			<endpoint address="" binding="basicHttpBinding" contract="YourNamespace.ISpreadsheetService" />
			<host>
				<baseAddresses>
					<add baseAddress="http://localhost:8733/Design_Time_Addresses/SpreadsheetService/" />
				</baseAddresses>
			</host>
		</service>
	</services>
	<behaviors>
		<serviceBehaviors>
			<behavior>
				<serviceMetadata httpGetEnabled="true"/>
				<serviceDebug includeExceptionDetailInFaults="false"/>
			</behavior>
		</serviceBehaviors>
	</behaviors>
</system.serviceModel>
```

## Run the WCF Service

After adding the service code, build and run the WCF Service Library project. You can use the WCF Test Client to test the Open and Save methods.

For more details, see:
[Run a WCF service in Visual Studio](https://learn.microsoft.com/en-us/dotnet/framework/wcf/how-to-host-and-run-a-basic-wcf-service)

## Configuring the Client-Side URLs

Once your local service is running, configure your client app to use the local endpoints. For example:

```jsx
<SpreadsheetComponent
		openUrl="http://localhost:8733/Design_Time_Addresses/SpreadsheetService/OpenSpreadsheet"
		saveUrl="http://localhost:8733/Design_Time_Addresses/SpreadsheetService/SaveSpreadsheet"
/>
```

## Configuring File Size Limits

When working with large Excel files, configure file size limits to prevent server-side exceptions.

**web.config** (if hosting in IIS):
```xml
<?xml version="1.0" encoding="utf-8"?>
<configuration>
		<system.web>
				<httpRuntime maxRequestLength="2097151" executionTimeout="3600" />
		</system.web>
		<system.webServer>
				<security>
						<requestFiltering>
								<requestLimits maxAllowedContentLength="2147483647"></requestLimits>
						</requestFiltering>
				</security>
				<directoryBrowse enabled="true" />
		</system.webServer>
</configuration>
```

## Configure CORS (Cross-Origin Resource Sharing)

If your client and WCF service are hosted on different domains or ports, enable CORS. For WCF, you may need to add custom headers in the response or use a message inspector. See:

[Enable CORS in WCF](https://learn.microsoft.com/en-us/answers/questions/116964/how-to-enable-cors-in-wcf-service)

This guide helps you set up a WCF web service for spreadsheet open and save operations, similar to the ASP.NET Core approach, but using WCF for legacy or enterprise scenarios.
