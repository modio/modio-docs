---
id: unity-metrics
title: Metrics
slug: /unity/metrics
---

# Metrics for Unity

The mod.io Unity Plugin supports all of our [Metrics](/metrics) dashboards. This guide covers the end-to-end flow for implementing Play Sessions Metrics to your Unity game.

## Play Sessions Metrics

[Play Sessions Metrics](/metrics/game#play-sessions) lets you track what UGC your players interact with most frequently, including concurrent players, sessions, playtime, and UGC usage per session. The process involves starting a metrics play session, keeping that session alive via a heartbeat, and then ending that session.

:::note[Premium Feature]
Play Sessions is a premium feature. Sign up to one of our [advanced service tiers](https://mod.io/pricing) to activate detailed data analytics, or contact us at developers@mod.io for more information.
:::

### Initial Setup

Play Sessions Metrics requires generating a Metrics Secret Key from your API Settings in your game dashboard. Once this key has been generated, you need to input into mod.io config inside Unity.

### Starting Metrics Sessions

Starting a Metrics Session is achieved by using the `MetricsManager.StartSession`. You can either let metrics manager generate an `id` for you or pass an `id` to be used.
The `id` is required to end sessions.

:::note
Each `id` used needs to be unique across all metrics session for your game
:::

```csharp
string _sessionId = "my-special-id";
async void StartMetricsSession(){
    Error error;
    (error) = await MetricsManager.StartSession(_id);

    if(error)
        Debug.Log(error.GetMessage());
}
```

### Session Heartbeats

After starting the session the MetricsManager will automatically send a heartbeat to mod.io.

### Ending Metrics Sessions

Ending a Metrics Session is achieved by using `id` used to start session with the `MetricsManager.EndSession` or the `MetricsManager.EndAllSessions`.

```csharp
async void EndMetricsSession(){
    Error error;
    (error) = await MetricsManager.EndSession(_id);

    if(error)
        Debug.Log(error.GetMessage());
}

void EndAllMetricsSession(){
    MetricsManager.EndAllSessions();
}
```
