---
id: rate-limiting
title: Rate Limiting
slug: /restapi/rate-limiting
sidebar_position: 1
---

# Rate Limiting

[mod.io](https://mod.io/) implements rate limiting to stop users abusing the service. Exceeding the rate limit will result in requests receiving a _429 Too Many Requests_ response until the reset time is reached.