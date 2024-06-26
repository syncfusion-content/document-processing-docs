---
title: Authentication Configuration
description: Learn how to configure authentication for the document processing engine using JSON Web Token (JWT) format. By default, authentication is disabled, but you can enable it by setting specific environment variables.
platform: document-processing
control: general
documentation: UG
---
# Authentication Configuration

The document processing engine uses JSON Web Token (JWT) format for authentication. By default, this authentication is disabled. You can enable it using the following environment variables:

```
environment:
  - ENABLE_JWT_SECURITY=true
  - JWT_PUBLIC_KEY={JWT public key here}
```
## Authentication Workflow

Your backend generates a signed JWT token and sends it to the client application, which utilizes the document processing engine. The token is then validated using the public key provided in the document processing engine's environment.

![Authenctication Workflow](authentication-flow.png)

## Generate JWT

JSON Web Tokens (JWTs) used for authentication by the Syncfusion Document Processing Engine can be generated with one of the many open-source libraries listed on [JSON Web Token Libraries - jwt.io](https://jwt.io/). The following example shows how to create a JWT in C#.

**1. Create a key via ssh-keygen:**

 ```
ssh-keygen -t rsa -b 4096 -f jwtRS256.key
# Enter your passphrase.

# Get the public key in PEM format:
openssl rsa -in jwtRS256.key -pubout -outform PEM -out jwtRS256_pub.pem

# If the above command fails because newer versions of `ssh-keygen` output a different format,
# convert the key to PEM like this and then repeat the `openssl` command.
ssh-keygen -p -m PEM -t rsa -b 4096 -f jwtRS256.key
openssl rsa -in jwtRS256.key -pubout -outform PEM -out jwtRS256_pub.pem
 ```

The private key (jwtRS256.key) is used to sign the tokens issued to clients. The public key (jwtRS256_pub.pem) must be added as JWT_PUBLIC_KEY in the document processing engine’s configuration. This allows the server to validate token signatures without the ability to create valid signatures itself.

Example public key (jwtRS256_pub.pem):

 ```
-----BEGIN PUBLIC KEY-----
        MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAy1phKX8O/nSZGhb0Yd+q
        Ocw/E47LL6vW+VTs4GtQa0KwVZ6Sq6XVuOrij+YzQuC1uACeQtlhvDl/t3BV4ZlM
        iiPuhwM91FNUkW90fySMcHCsWLruIgrtmV1EVplBd76Ob1gadP5NQkrGTJHn2jZm
        vsVndiMNI6YYbIDgBizAKW0x6eRBlp2JMPCABMzX0Tx5MnqoST6O9E7oLKoyruIG
        tJeq5J6CTxKkErzz5JpJeXE6+pT+/CuZ733Fx55mBotrhxAjG7Rx/3tBsh/soHq3
        ZdiRPg29VvCIwjNOJNBFnN4PxhquYfihyRvdNWKzRFoBsrgVf9V2KtmN6rb4ZDwk
        jM9qXNAxRRiaYBZ5AbzI2pDRAp9ei92AE3UDxkplUkLTT4fwm+L9lzp9Y91Q4kg0
        HWt7AOycTv3ZtB2h1494ip+fdLfnsesBFeZ+9OnRsjad5S1qJd2lWJ33g4wTbXxp
        lneJDdglFXjHhe8u4eT9YOzGZL8E7IVjP0Wj1NiaiIaapo7zODMgTtYVi2xqPu5y
        9ODFMbJYVJ8vEjnunipG4NsNR0DgaUS6IlWRabTFp97tqaJzMTfFFy/v0X1jF9CC
        8KG19PfhjJKvB7MTJzNW0IiBM5YPFS8oQtB02eCSFr+wP1uZC8+kerYCJmv4zdxt
        SUbXVXWStMKC34BnjUluYvsCAwEAAQ==
 -----END PUBLIC KEY-----
 ```

**2. Install the System.IdentityModel.Tokens.Jwt NuGet package:**

 ```
 Install-Package System.IdentityModel.Tokens.Jwt
 ```

**3. Read the private key so that it can be used to sign JWTs:**

{% tabs %}

{% highlight C# %}

string privateKey = File.ReadAllText("jwtRS256.key");
RSA rsa = RSA.Create();
rsa.ImportFromPem(privateKey);
var tokenHandler = new JwtSecurityTokenHandler();
var tokenDescriptor = new SecurityTokenDescriptor
{
    Issuer = "sample",
    Audience = "audience",
    Expires = DateTime.UtcNow.AddMinutes(30),
    SigningCredentials = new SigningCredentials(new RsaSecurityKey(rsa), SecurityAlgorithms.RsaSha512)
};

// Generate token

var token = tokenHandler.CreateToken(tokenDescriptor);

return tokenHandler.WriteToken(token);

{% endhighlight %}
 
{% endtabs %}

## Validate a JWT

To validate a request with a JWT token, include the token in the request header as follows. The Syncfusion Document Processing Engine will validate the token and proceed to process the request. If validation fails, it will return an unauthorized exception.

{% tabs %}

{% highlight C# %}

var client = new HttpClient();
var request = new HttpRequestMessage(HttpMethod.Post, "http://localhost:8003/v1/conversion/word-to-pdf");
request.Headers.Add("Authentication", "Bearer eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCJ9.eyJuYmYiOjE3MTc1ODI1NTksImV4cCI6MTcxNzU4NDM1OSwiaWF0IjoxNzE3NTgyNTU5LCJpc3MiOiJzYW1wbGUiLCJhdWQiOiJhdWRpZW5jZSJ9.TeXSdh1Vz98kpUeXW41DFgN8J18INObi8v9Eelu-n1Xsqq6MdJXTB4EH2iks8qlfXMC5aFCIaHOagTsLC4DrSwD2XFAIoT-tsxovZucf-HPO8pd-vT7x-YhZGftKUmi87XDD-tj2eiN5trtXQkpP70HGlyx7oIX1B1P1VnW17VyiO2PEEMQFDlzFy3MDsihZPzSTpXEokX9PxDEGSwhJDwylIG11L_jQWCh2OFOkhGHzs-4zWsrhN6nIw6xliZCcG2ZiRPAU_VbqwqMd5LYwJmupdteO2f-1qMXCH8a7WPSEWSld48D0h1NMMm8l2as0yD4xskV8vXvjGTy7nSB8tFAbvOech4hq4iwrjE09qA57zGUeJwGUg3yp6GvJLVhEGoeKagCSou-tQSA3vRjhRK8fMjUiZwMhaPmfxU_oErdnrBWCoomlmghgXZr5176vopfS6T-sLo-ZrISBne0Pj9Mj30pcskuyxnWBydmRvKOv_T9gYh29Vq-CTT-rMtj2a-f-V10ax-dzlqOjdhNDoHVbx8Ei3ZmRIDWsn9dsrhYCpS-F2XT9O4Unik5CoTD0qPDjIVBpEOfEA9Gf8E9XblEDptfH-T8TOybp06_aXWTJfrIhTdbRIkzIN2oyUaNMEWStj8HauorCmz1BkGQXdz3iVdlqQulFSg2e1cSYnYw");
var content = new MultipartFormDataContent();
content.Add(new StreamContent(File.OpenRead("SalesInvoice.docx")), "file", "SalesInvoice.docx");
content.Add(new StringContent("{
  \"File\": \"file\",
  \"Password\": null,
  \"PreserveFormFields\": true,
  \"PdfComplaince\": \"PDF/A-1B\",
  \"EnableAccessibility\": false
}"), "settings");
request.Content = content;
var response = await client.SendAsync(request);
response.EnsureSuccessStatusCode();
Console.WriteLine(await response.Content.ReadAsStringAsync());

{% endhighlight %}
 
{% endtabs %}