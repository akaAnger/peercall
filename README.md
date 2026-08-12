# PeerCall

[![Static checks](https://github.com/akaAnger/peercall/actions/workflows/ci.yml/badge.svg)](https://github.com/akaAnger/peercall/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)

PeerCall is a lightweight progressive web app for private one-to-one audio calls directly in the browser.

It uses WebRTC and manual one-time connection codes instead of accounts, sign-ups, signaling servers, or vendor lock-in. The goal is to keep the product small enough for regular people to understand while still being useful as a clean reference implementation for serverless WebRTC audio.

**Live demo:** <https://akaanger.github.io/peercall/>

## Why This Exists

Many communication tools assume users are comfortable creating accounts, installing apps, joining meetings, sharing personal data, or trusting a hosted service. PeerCall explores the opposite direction: a small, inspectable tool for quick private calls when the right experience is simply "open a page, exchange a code, and talk."

The project is especially designed with accessibility and low-friction use in mind: older adults, caregivers, people on shared devices, privacy-conscious users, and developers who want a readable WebRTC example can all benefit from a simpler approach. PeerCall is not an emergency service and is not meant to replace professional communication tools; it is a public-interest utility and learning project focused on reducing unnecessary barriers.

## What It Does

- Starts peer-to-peer audio calls from a phone or desktop browser.
- Uses one-time offer and answer codes that users copy, paste, or share.
- Works as a PWA with offline app shell caching.
- Includes a simple mode with larger controls and fewer technical details.
- Shows microphone and remote audio levels plus optional connection stats.
- Keeps the app static: no backend is required for signaling.

## Project Principles

- **Privacy by design:** avoid accounts, tracking, and server-side signaling for the core flow.
- **Plain language:** make call setup understandable for non-technical users.
- **Progressive enhancement:** keep the app useful as static web technology, then improve reliability where browsers allow it.
- **Accessible defaults:** large tap targets, keyboard-visible focus, clear status messages, and a simplified mode.
- **Readable implementation:** keep the code approachable for people learning WebRTC and PWA basics.

## How To Use

1. Open PeerCall on both devices.
2. The first person chooses **I start the call**, allows the microphone, creates a code, and sends it to the other person.
3. The second person chooses **I answer a call**, pastes the starter's code, creates an answer code, and sends it back.
4. The starter pastes the answer code and clicks **Use their code**.
5. Keep both browser tabs open while the WebRTC connection is established.

## Local Development

PeerCall is static HTML, CSS, and JavaScript. Serve the folder from localhost so microphone APIs are available:

```bash
python -m http.server 8080
```

Then open `http://localhost:8080`.

You can also deploy it to any static host that serves HTTPS.

Run the static smoke checks:

```bash
npm test
```

## Privacy And Security Notes

- PeerCall does not run a signaling backend. Connection codes are exchanged by users outside the app.
- Calls are carried by WebRTC peer connections and are encrypted by the browser.
- Connection codes contain WebRTC setup data such as SDP and ICE candidates. Share them privately and create fresh codes for each call attempt.
- Public STUN servers help browsers discover network paths. For strict NATs or corporate networks, a TURN relay may be required. See [optional TURN relay setup](docs/turn-relay.md) for the deployment and privacy tradeoffs.
- Microphone access requires HTTPS or localhost in modern browsers.

## Current Limitations

- Audio only; no video or group calls.
- Manual code exchange is intentionally simple but not as convenient as server-assisted signaling.
- There is no bundled TURN server, so some restrictive networks may fail to connect.
- Browser behavior differs across mobile platforms, especially around backgrounding, audio autoplay, and installed PWA behavior. See the [browser compatibility matrix](docs/browser-compatibility.md) for the repeatable verification procedure and recorded results.

## Roadmap

See [docs/roadmap.md](docs/roadmap.md).

## License

MIT
