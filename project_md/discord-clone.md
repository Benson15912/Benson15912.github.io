# Building a Discord-like Voice Channel App

This was a **team project** built for my school’s **Computer Networks** module, where we were tasked to design and implement a real-time networked application. Together, we built a **Discord-style voice channel app**.  
Our goal was simple: let multiple users join the same channel and talk to each other smoothly.

Compared to normal CRUD web apps, this felt very different. Instead of mainly handling forms and database calls, we had to work with **live connections**, **audio streams**, and users joining/leaving in real time.

## Demo

<div style="text-align:center;">
	<video controls style="max-width:900px; width:100%; height:auto; display:block; margin:0 auto;">
		<source src="/project_pictures/discord/voice-app-demo.mp4" type="video/mp4" />
		Your browser does not support the video tag.
	</video>
	<p><em>Voice channel app demo</em></p>
</div>

## Why We Built This

The main reason we built this was for our school module, but we also wanted to make something practical and familiar. We use Discord often, so we designed this app with Discord in mind — especially the voice-channel experience and interaction flow.  
We wanted to understand what is happening behind the scenes when:

- someone joins a channel,
- someone speaks,
- someone disconnects suddenly,
- and everyone else still needs a stable experience.

So this project became our hands-on way to learn real-time app design.

## Core Features

The app supports the key voice-channel flow:

- Join a voice channel
- Leave a voice channel
- Broadcast updates to connected users in real-time
- Keep channel state consistent when users connect/disconnect

As a team, we focused on making the core experience work reliably before adding extra UI features.

## Tech Stack

I kept the stack practical and focused on concurrency:

- **Python** for backend logic
- **WebSockets** for live, two-way communication
- **Locks** for thread-safe shared state management

Locks were especially important because many users can trigger updates at the same time. Without proper synchronization, state can become inconsistent very quickly.

## Key Challenges I Faced

### 1) Real-time state management
When users rapidly joined and left channels, keeping the server state accurate was tricky. I had to make sure every update was applied safely and broadcasted correctly.

### 2) Concurrency bugs
Race conditions were a real issue early on. Using locks properly helped me avoid corrupted channel state and weird edge-case behavior.

### 3) Handling disconnects cleanly
Not every user leaves gracefully. Sometimes clients drop unexpectedly, so I had to make sure cleanup logic still ran and removed stale users from channels.

## What I Learned

This project taught me a lot about backend engineering beyond basic web development:

- How event-driven systems behave in real life
- Why synchronization matters in multi-user apps
- How to think about reliability, not just features
- How to debug real-time systems step by step

Overall, this was one of the most practical projects I have done. It gave me a stronger foundation in concurrency and real-time application design.
