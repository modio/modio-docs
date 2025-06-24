---
id: authentication-verification
title: User Verification
slug: /authentication/verification/
sidebar_position: 6
---

# Overview

User verification is a critical part of the mod.io authentication process. It ensures that the user is who they say they are, and that they have access to the email address they provided. This is important for security reasons and account recovery.

# Verification Process

The verification process is simple. After a user signs up, they will receive an email with a verification link. They must click this link to verify their email address. If they do not verify their email address, their account may be significantly limited.

Games should help to facilitate this verification process when encountering unverified users. For example, if a user tries to upload a mod, but their account is unverified, the game should prompt them to verify their email address.

### Recommended Procedure for User Verification via SSO

1. **Authenticate the User**  
   Sign the user in through the standard SSO process. If the user is already signed in, retrieve their [User Object](https://docs.mod.io/restapiref/#user-object) from the API.

2. **Check Verification Status**  
   Inspect the `verified` property in the retrieved [User Object](https://docs.mod.io/restapiref/#user-object). If the value is `false`, provide an option in the game’s settings menu prompting the user to verify their mod.io account with an email connection. For example: *“Verify your mod.io account by connecting your email.”*

3. **Prompt for Email**  
   When the user selects this option, display an in-game prompt that allows the user to enter their email address.

4. **Initiate Email-Based SSO**  
   Use the SDK to initiate the standard SSO login flow again, incorporating the email address provided by the user.

5. **Backend Handling**  
   The backend will process the SSO request as usual:
    - If the account lacks a verified email, the system will verify and associate the email with the account.
    - If the email is already verified or there are other issues, the backend will return an appropriate error.

This approach ensures a seamless and intuitive user experience while maintaining compliance with mod.io's account verification requirements.
