---
id: cloud-cooking-architecture
title: Architecture
slug: /cloud-cooking/architecture/
sidebar_position: 1
---

### How it works

The mod.io cloud cooking service is hosted inside Azure, with each customer having their own isolated resource group and network for security purposes. Below is a flow diagram that demonstrates how information flows from the mod.io REST API and between all of the individual components of the cloud cooking infrastructure.

The cloud cooking service will automatically scale the virtual machines up and down depending on the length of the job queue. If you find that your game's cook jobs are taking too long to get picked and processed, please reach out and we can work with you to modify these scaling parameters and rules.

:::note
Any logs or metrics related to agents, infrastructure etc are currently only available for mod.io staff. If you are interested in more insight into the performance of these components, please speak to your mod.io representative.
:::

```mermaid
sequenceDiagram
    participant ModIO as mod.io REST API
    participant CCS as Cloud Cooking Server
    participant Queue as Azure Queue
    participant Redis as Redis Queue
    participant Agent as Cloud Cooking Agent
    participant VMSS as Azure VM Scale Set
    
    %% Initial mod.io request flow
    ModIO->>CCS: Request content cooking
    CCS->>Queue: Queue cooking job
    
    %% Job processing
    CCS->>Queue: Poll for jobs
    Queue-->>CCS: Return cooking job
    
    %% Agent scaling and job dispatch
    CCS->>VMSS: Check/scale agent capacity
    VMSS->>Agent: Start agent instances (if needed)
    CCS->>Redis: Publish cooking task
    Redis->>Agent: Notify of cooking task
    
    %% Agent operations
    Agent->>Redis: Send heartbeat/status
    Agent->>ModIO: Download source mod file
    ModIO-->>Agent: Return source content
    
    %% Cooking process
    Agent->>Agent: Process/cook mod file
    
    %% Upload as a single operation (simplified)
    Agent->>ModIO: Upload modfile (AddModFileAsync)
    ModIO-->>Agent: Confirm upload success
    
    %% Status updates
    Agent->>Redis: Report job completion
    CCS->>Redis: Monitor job status
    CCS->>ModIO: Confirm job completion
    
    %% Resource management
    CCS->>VMSS: Monitor workload
    CCS->>VMSS: Scale down VM instances when idle
```
