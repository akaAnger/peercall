# Claude For Open Source Application Draft

This document contains a concise, honest application narrative for the Claude for Open Source program.

## Project Reach And Impact

PeerCall is a small open-source progressive web app for private one-to-one audio calls directly in the browser. It uses WebRTC and manual one-time connection codes, so people can start a call without accounts, app installs, a signaling backend, or vendor lock-in. It fills a practical gap between heavyweight meeting tools and quick personal calls where privacy, low setup, and simplicity matter.

The project currently has a modest public footprint, so I am applying under the "Don't quite fit?" note. Its impact is not based on large download numbers yet; it is based on a clear public-interest use case and an intentionally readable implementation. PeerCall is designed for people who may struggle with account-heavy communication tools, including older adults, caregivers, people on shared devices, people with limited bandwidth, privacy-conscious users, and developers who want a clean WebRTC/PWA reference.

I have been preparing it for wider open-source use by moving the app to an English-first interface, improving accessibility and status messaging, adding clearer microphone and connection-code error handling, improving the PWA service worker, documenting privacy and network limitations, adding a manual QA checklist, adding contribution notes, and including an OSS license.

My goal is to make PeerCall a practical small utility and a well-documented learning project: something others can inspect, trust, reuse, and improve.

## How I Will Use Claude Max

I would use Claude Max and Claude Code to turn PeerCall from a small practical prototype into a more reliable and maintainable open-source PWA. The main work would be reviewing and refactoring the WebRTC connection flow, adding tests around code encoding/decoding and state transitions, improving mobile browser compatibility, documenting TURN deployment options, expanding accessibility checks, and building a clearer contributor roadmap.

Claude would also help me audit browser edge cases, improve the service worker/PWA setup, write better English documentation, create repeatable QA checklists, and review future pull requests or issues. Because PeerCall is intentionally small, the subscription would have immediate leverage: each improvement can make the project easier for others to inspect, trust, and reuse.

## Other Info

I understand that PeerCall does not currently meet the large-scale quantitative thresholds listed for the program. I am applying under the "Don't quite fit?" note because I maintain a small but practical open-source tool that aims to make private, account-free browser calling easier for regular users and easier for developers to understand.

I am not claiming broad adoption yet. I am asking for support to improve the project responsibly: better reliability, better documentation, better QA, and a cleaner path for outside contributors. PeerCall is the kind of quiet, minimal tool that can be useful precisely because it avoids unnecessary infrastructure and keeps the WebRTC flow understandable.

## Tone Notes

Use honest impact language. Do not claim personal identity, community representation, urgent-response use, medical use, or adoption metrics that are not true.

Strong truthful framing:

- Privacy-preserving communication.
- Accessibility for non-technical users.
- Support for older adults and caregivers without pretending to represent those groups.
- Public-interest utility.
- Readable reference implementation for WebRTC and PWAs.
- Small project with high learning value.

Avoid manipulative framing:

- Dramatic crisis language.
- Unverified demographic claims or borrowed community identity.
- Claims that the app is ready for urgent or regulated situations.
- Claims that the ecosystem already depends on the project.
