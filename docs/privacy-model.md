# Privacy Model

PeerCall is designed as a small static app for one-to-one browser audio calls. This document explains what the project tries to avoid, what the browser still needs, and where users should be careful.

## What PeerCall avoids

- No accounts are required.
- No hosted signaling backend is used by the core flow.
- No contact list is stored by the project.
- No call history is stored by the project.
- No analytics or tracking script is required for the app to work.

## What the browser still handles

PeerCall uses standard browser APIs. Depending on the browser and network, this can involve:

- Microphone permission prompts.
- WebRTC peer connection setup.
- SDP and ICE candidate data inside the manual connection codes.
- STUN requests that help discover possible network paths.
- Local service worker caching for the PWA app shell.

## Connection codes

Connection codes are not passwords, but they can contain setup data that should stay private. Users should:

- Send codes only through a trusted channel.
- Create fresh codes for each call attempt.
- Avoid posting codes in public chats, issues, screenshots, or logs.
- Restart the flow if a code was shared with the wrong person.

## What PeerCall does not promise

PeerCall is not a replacement for regulated, emergency, enterprise, or high-assurance communication tools. It is a lightweight public-interest utility and learning project focused on understandable browser-to-browser calling.

## Maintainer checklist

When changing privacy-related behavior, update this document if the change affects:

- Any new network request.
- Any third-party service.
- Service worker caching behavior.
- Microphone permission handling.
- How connection codes are created, displayed, copied, or shared.
