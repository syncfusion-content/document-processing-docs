---
layout: post
title: Installing Syncfusion<sup>&reg;</sup> PowerPoint offline installer-Syncfusion<sup>&reg;</sup>
description: Learn here about how to install Syncfusion<sup>&reg;</sup> PowerPoint offline installer after downloading from our Syncfusion<sup>&reg;</sup> website.
platform: document-processing
control: Installation and Deployment
documentation: ug

---

# Installing Syncfusion<sup>&reg;</sup> PowerPoint offline installer


## Installation Methods

Choose one of the following methods:

- [Installing with UI](#installing-with-ui) — Interactive installation using the wizard.
- [Installing in silent mode](#installing-in-silent-mode) — Unattended installation using the command line.



## Installing with UI

The steps below show how to install the Essential Studio<sup>&reg;</sup> PowerPoint installer.

### Extract the installer

Step 1: Open the Syncfusion<sup>&reg;</sup> PowerPoint offline installer file from the downloaded location by double-clicking it. The Installer Wizard automatically opens and extracts the package.

    ![Installer extraction wizard](images/Step-by-Step-Installation_img1.png)

    N> The Installer wizard extracts the `syncfusionessentialpowerpoint_(version).exe` dialog, which displays the package's unzip operation.

Step 2: To unlock the Syncfusion<sup>&reg;</sup> offline installer, you have two options:

    * Login To Install

    * Use Unlock Key

    **Login To Install**

    You must enter your Syncfusion<sup>&reg;</sup> email address and password. If you do not already have a Syncfusion<sup>&reg;</sup> account, you can sign up for one by clicking **Create an account**. If you have forgotten your password, click on **Forgot Password** to create a new one. Once you have entered your Syncfusion<sup>&reg;</sup> email and password, click **Next**.

    ![Login credentials](images/Step-by-Step-Installation_img2.png)

    **Use Unlock Key**

    Unlock keys are used to unlock the Syncfusion<sup>&reg;</sup> offline installer, and they are platform- and version-specific. You should use either a Syncfusion<sup>&reg;</sup> licensed or trial Unlock key to unlock the Syncfusion<sup>&reg;</sup> PowerPoint installer.

    Trial unlock keys expire after 30 days and will be rejected by the installer. Licensed unlock keys are valid for the duration of your subscription. Trial unlock keys are emailed after download; licensed keys are available from your Syncfusion<sup>&reg;</sup> account.

    To learn how to generate an unlock key for both trial and licensed products, see [How to generate an unlock key](https://www.syncfusion.com/kb/2326) Knowledge Base article.

    ![Product key](images/Step-by-Step-Installation_img3.png)

Step 3: After reading the License Terms and Privacy Policy, select the **I agree to the License Terms and Privacy Policy** check box. Click the **Next** button.


Step 4: Change the install and sample locations here. You can also change the additional settings. Click **Next**, then click **Install** to install with the default settings.

    ![Advanced options](images/Step-by-Step-Installation_img4.png)

    **Additional Settings**

    * Select the **Install Demos** check box to install Syncfusion<sup>&reg;</sup> samples to `{InstallPath}\Samples`, or leave the check box unchecked if you do not want to install Syncfusion<sup>&reg;</sup> samples.
    * Select the **Register Syncfusion<sup>&reg;</sup> Assemblies in GAC** check box to install the latest Syncfusion<sup>&reg;</sup> assemblies in GAC, or clear this check box when you do not want to install the latest assemblies in GAC.
    * Select the **Configure Syncfusion<sup>&reg;</sup> controls in Visual Studio** check box to configure the Syncfusion<sup>&reg;</sup> controls in the Visual Studio toolbox, or clear this check box when you do not want to configure the Syncfusion<sup>&reg;</sup> controls in the Visual Studio toolbox during installation. You must also select the **Register Syncfusion<sup>&reg;</sup> Assemblies in GAC** check box when you select this check box.
    * Select the **Configure Syncfusion<sup>&reg;</sup> Extensions controls in Visual Studio** check box to configure the Syncfusion<sup>&reg;</sup> Extensions in Visual Studio, or clear this check box when you do not want to configure the Syncfusion<sup>&reg;</sup> Extensions in Visual Studio.
    * Select the **Create Desktop Shortcut** check box to add a desktop shortcut for Syncfusion<sup>&reg;</sup> Control Panel.
    * Select the **Create Start Menu Shortcut** check box to add a shortcut to the Start menu for Syncfusion<sup>&reg;</sup> Control Panel.




Step 5: If any previous versions of the current product are installed, the **Uninstall Previous Version(s)** wizard will open. Select the **Uninstall** check box to uninstall the previous versions, then click the **Proceed** button.

    ![Uninstall Previous Version wizard](images/Step-by-Step-Installation_img8.png)

    N> From version 18.1 onwards, Syncfusion<sup>&reg;</sup> provides the option to uninstall previous versions while installing the new version.

    N> If any version is selected to uninstall, a confirmation screen will appear. If you click **Continue**, the Progress screen displays the uninstall and install progress. If none of the versions are chosen to be uninstalled, only the installation progress will be displayed.

    **Uninstall Progress:**

    ![Uninstalling wizard](images/Step-by-Step-Installation_img9.png)

    **Install Progress:**

    ![Installing wizard](images/Step-by-Step-Installation_img5.png)

    N> The Completed screen is displayed once the PowerPoint product is installed. If any version is selected to uninstall, the Completed screen displays both install and uninstall status.

    ![Completed wizard](images/Step-by-Step-Installation_img10.png)


Step 6: After installing, click the **Launch Control Panel** link to open the Syncfusion<sup>&reg;</sup> Control Panel. The Control Panel is the central utility for managing licenses, applying patches, and uninstalling Syncfusion<sup>&reg;</sup> products.

Step 7: Click the **Finish** button. Syncfusion<sup>&reg;</sup> Essential Studio<sup>&reg;</sup> PowerPoint has been installed successfully.

Step 8: **Verify the installation.** Open **Control Panel → Programs → Programs and Features** and confirm that **Syncfusion Essential Studio PowerPoint** is listed. You can also open the Syncfusion<sup>&reg;</sup> Control Panel from the Start menu.

## Installing in silent mode

The Syncfusion<sup>&reg;</sup> Essential Studio<sup>&reg;</sup> PowerPoint Installer supports installation and uninstallation via the command line.

### Command Line Installation

To install through the Command Line in Silent mode, follow the steps below.

1.	Run the Syncfusion<sup>&reg;</sup> PowerPoint installer by double-clicking it. The Installer Wizard automatically opens and extracts the package.
2.	The file syncfusionessentialpowerpoint_(version).exe file will be extracted into the Temp directory.
3.	Run %temp%. The Temp folder will be opened. The syncfusionessentialpowerpoint_(version).exe file will be located in one of the folders.
4.	Copy the extracted syncfusionessentialpowerpoint_(version).exe file in local drive.
5.	Exit the Wizard.
6.	Run Command Prompt in administrator mode and enter the following arguments.

   
    **Arguments:** “installer file path\SyncfusionEssentialStudio(platform)_(version).exe” /Install silent /UNLOCKKEY:“(product unlock key)” [/log “{Log file path}”] [/InstallPath:{Location to install}] [/InstallSamples:{true/false}] [/InstallAssemblies:{true/false}] [/UninstallExistAssemblies:{true/false}] [/InstallToolbox:{true/false}]


    N> [..] – Arguments inside the square brackets are optional.

    **Example:** “D:\Temp\syncfusionessentialpowerpoint_x.x.x.x.exe” /Install silent /UNLOCKKEY:“product unlock key” /log “C:\Temp\EssentialStudio_Platform.log” /InstallPath:C:\Syncfusion\x.x.x.x /InstallSamples:true /InstallAssemblies:true /UninstallExistAssemblies:true /InstallToolbox:true

	
7.  Essential Studio<sup>&reg;</sup> for PowerPoint is installed.

    N> x.x.x.x should be replaced with the Essential Studio<sup>&reg;</sup> version and the Product Unlock Key needs to be replaced with the Unlock Key for that version.
   

### Command Line Uninstallation

Syncfusion<sup>&reg;</sup> Essential<sup>&reg;</sup> PowerPoint can be uninstalled silently using the Command Line.

1.	Run the Syncfusion<sup>&reg;</sup> PowerPoint installer by double-clicking it. The Installer Wizard automatically opens and extracts the package.
2.	The file syncfusionessentialpowerpoint_(version).exe file will be extracted into the Temp directory.
3.	Run %temp%. The Temp folder will be opened. The syncfusionessentialpowerpoint_(version).exe file will be located in one of the folders.
4.	Copy the extracted syncfusionessentialpowerpoint_(version).exe file in local drive.
5.	Exit the Wizard.
6.	Run Command Prompt in administrator mode and enter the following arguments.
   
    **Arguments:** “Copied installer file path\syncfusionessentialpowerpoint_(version).exe” /uninstall silent 

    **Example:** “D:\Temp\syncfusionessentialpowerpoint_x.x.x.x.exe" /uninstall silent


7.  Essential Studio<sup>&reg;</sup> for PowerPoint is uninstalled.
   
   
