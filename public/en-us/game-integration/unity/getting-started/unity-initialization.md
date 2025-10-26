---
id: unity-initialization
title: Initialization
slug: /unity/initialization
---

# Initialization 

The mod.io Unity Plugin was built around [asynchronous programming](https://learn.microsoft.com/en-us/dotnet/csharp/asynchronous-programming) to ensure a smooth experience for the user by never blocking the main thread. 

This guide covers:

* [Setup](#setup)
* [Initializing the Unity Plugin](#initializing-the-unity-plugin)

### Setup

First, let's create a new `MonoBehaviour` called `ModioExample.cs` that will contain all of our example functionality:

```csharp
using UnityEngine;

public class ModioExample : MonoBehaviour
{
    // TODO: Keep reading the Getting Started Guides
}
```

Once you've created the above class:

1. Create a new `Scene`.
2. In that scene, create an `Empty Game Object` (name it anything you'd like).
3. Add the `ModioExample` component to your `GameObject`.
4. Save the scene.

### Initializing the Unity Plugin

:::important
The plugin relies on the *config file* from [Installation](/unity/installation). Please ensure you have completed all previous steps before proceeding.
:::

Before the plugin can be used, it needs to be initialized for the current player. This usually only needs to happen once so let's implement Unity's `Start` method in our `ModioExample.cs` file as an async method:

```csharp
using Modio; // Add this to the top of your class

void Start()
{
    InitPlugin();
}

async Task InitPlugin()
{
    Error error = await ModioClient.Init();
    
    if (error)
    {
        Debug.LogError($"Error initializing mod.io: {error}");
        return;
    }

    Debug.Log("mod.io plugin initialized");
}
```

:::important
All plugin configuration should be performed during unity's `awake` step. make sure you only ever bind services during `awake`, and only ever initialize the plugin during `start` or later.
:::

It's worth noting the `Error` class returned. All mod.io functions you call will provide this `Error` class for detailed reporting on each function call. For convenience, `Error` is implicitly converted to a boolean, allowing you to simply check if this conversion is true to know if an error occurred.

Now, return to your scene in Unity, enter Play mode and you should see the logged success message.

## Next steps

Now that you have set up the Unity Plugin, we recommend working through the [User Authentication](/unity/user-authentication) guide. Or if you are eager to get things moving, you can skip directly to [Adding UGC](/unity/adding-ugc).

All other core setup information can be found in the [Unity Getting Started Guides](/unity#unity-core-plugin-guides), which are designed to teach you how to implement the fundamentals of the Unity Plugin.