---
layout: post
title: How to Deploy JavaScript DOCX Editor Java API in Azure | Syncfusion
description: Deploy the Syncfusion® JavaScript DOCX Editor Java Web API in Azure App for scalable and reliable document processing.
platform: document-processing
control: How to deploy documenteditor java web api in azure 
documentation: ug
domainurl: ##DomainURL##
---
# How to Deploy JavaScript DOCX Editor Java Web API in Azure App

## Prerequisites

Ensure you have an [`Azure account`](https://azure.microsoft.com/en-gb/) and the [`Azure CLI`](https://docs.microsoft.com/en-us/cli/azure/?view=azure-cli-latest) installed in your environment.

You can get the example [`web service project from GitHub`](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-Java-WebService) and then perform the following steps to build the package and host it in an Azure App Service.

**Step 1:** Clean and package the application using the following command.

```console
mvn clean package
```

**Step 2:** Run the application locally to verify the build using the following command.

```console
mvn spring-boot:run
```

**Step 3:** Build the final package using the following command.

```console
mvn package
```

The above package-generation command creates the `**tomcat-0.0.1-SNAPSHOT.war**` in the following location in the sample folder.

`target/tomcat-0.0.1-SNAPSHOT.war`

**Step 4:** Create an Azure App Service with Java & Tomcat. For example, create an App Service named `documenteditorjava`.

**Step 5:** After creating the App Service, navigate to the **Advanced Tools** option under **Development Tools**.

![Advanced tools ](../images/azure_java_advancedtools.png)

Then, click **Go** and select the **CMD** option under **Debug console**.

![Debug console ](../images/azure_java_debugconsole.png)

**Step 6:** Once the file manager is opened, navigate to

`site -> wwwroot -> webapps`

**Step 7:** Now, upload the generated WAR file `tomcat-0.0.1-SNAPSHOT.war`. The uploaded WAR file is extracted automatically, as shown below:

![Uploaded war](../images/java_azure_uploaded.png)

**Step 8:** Browse to the app.

Browse to the deployed app at `http://<app_name>.azurewebsites.net` (for example, `http://documenteditorjava.azurewebsites.net`). Navigating to this link opens the DOCX Editor Web API at `http://documenteditorjava.azurewebsites.net/tomcat-0.0.1-SNAPSHOT`, which returns the default GET-method response.

Append the running App Service URL `http://documenteditorjava.azurewebsites.net/tomcat-0.0.1-SNAPSHOT` to the `serviceUrl` in the client-side DOCX Editor control. For more information about the DOCX Editor control, refer to the [`Getting Started` page](../getting-started).
