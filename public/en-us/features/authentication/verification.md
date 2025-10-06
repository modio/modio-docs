---
id: authentication-verification
title: User Verification
slug: /authentication/verification
sidebar_position: 6
---

# User Verification

Additional user verification is available as part of the mod.io authentication process. It optionally allows users to connect an email address to their account (where one is not already provided by the SSO provider). This is important for security reasons, account recovery and access to advanced functionality such as creator dashboards and monetization features.

## Verification process

The verification process is simple. In-game, you can optionally add the ability for users to include an email address with their authentication request. When this occurs, if a verified email is not already connected to their account, the user will receive an email with a verification link. They must click this link to verify their email address. If they do not verify their email address, their account may be limited.

Games should help to facilitate this verification process when encountering unverified users. For example, if a user tries to upload a mod, but their account is unverified, the game should prompt them to verify their email address.

## Recommended procedure for user verification via SSO

1. **Authenticate the user**  
   Sign the user in through the standard SSO process. If the user is already signed in, retrieve their [User Object](/restapi/docs/schemas/user-object) from the API.

2. **Check verification status**  
   Inspect the `verified` property in the retrieved [User Object](/restapi/docs/schemas/user-object). If the value is `false`, provide an option in the game’s settings menu prompting the user to verify their mod.io account with an email connection. For example: *“Verify your mod.io account by connecting your email.”*

3. **Prompt for email**  
   When the user selects this option, display an in-game prompt that allows the user to enter their email address.

4. **Initiate email-based SSO**  
   Use the SDK to initiate the standard SSO login flow again, incorporating the email address provided by the user.

5. **Backend handling**  
   The backend will process the SSO request as usual:
    - If the account lacks a verified email, the system will verify and associate the email with the account.
    - If the email is already verified or there are other issues, the backend will return an appropriate error.

This approach ensures a seamless and intuitive user experience while maintaining compliance with mod.io's account verification requirements.