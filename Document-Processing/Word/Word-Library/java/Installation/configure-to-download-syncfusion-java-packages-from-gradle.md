---
title: Download Syncfusion Java packages from Gradle in Java | Syncfusion
description: This section illustrates how to configure Gradle and download the required Syncfusion Java Word library packages
platform: document-processing
control: general
documentation: UG
---
# Download Syncfusion Java packages from Gradle in Java

You can easily download the Syncfusion<sup style="font-size:70%">&reg;</sup> packages for Java using the [maven repository](https://jars.syncfusion.com/).
 
The following command shows how to mention the repository in Gradle.

{% tabs %}
{% highlight groovy tabtitle="Gradle" %}
repositories {
    maven {
       //Syncfusion® maven repository to download the artifacts.
       url "https://jars.syncfusion.com/repository/maven-public/"
    }
}
{% endhighlight %}
{% endtabs %}

The following command shows how to refer to the Syncfusion<sup style="font-size:70%">&reg;</sup> package in Gradle, which needs to be used in your project as the dependency.

{% tabs %}
{% highlight groovy tabtitle="Gradle" %}
dependencies {
    implementation 'com.syncfusion:syncfusion-docio:18.4.0.30'
}
{% endhighlight %}
{% endtabs %}
