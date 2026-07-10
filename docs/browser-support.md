# Browser Support Notes

PeerCall depends on browser WebRTC, microphone permissions, and audio playback behavior. This document tracks practical compatibility expectations without promising that every network can connect.

## Expected support

- Desktop Chrome, Edge, Firefox, and Safari should support the core flow when served over HTTPS or localhost.
- Android Chrome should support the core flow, but backgrounding the browser can interrupt audio or connection setup.
- iOS Safari can be stricter about audio playback, tab backgrounding, installed PWA behavior, and microphone permission prompts.

## Known constraints

- Microphone access requires HTTPS or localhost.
- Some restrictive NATs, corporate networks, or mobile networks may require a TURN relay.
- Manual code exchange can fail if a code is truncated, modified, or reused after the browser state changes.
- Mobile browsers may pause timers, audio, or network activity when the tab is backgrounded.

## Manual test checklist

For each browser release or meaningful UI change, test:

1. App loads without console errors.
2. Microphone permission success and denial states are clear.
3. Starter code can be created and copied.
4. Answer code can be pasted and applied.
5. Remote audio element becomes available after connection.
6. The simplified mode remains readable on mobile width.
7. Reloading the PWA does not keep a stale service worker cache.

## Reporting issues

When reporting a browser issue, include:

- Browser name and version.
- Desktop or mobile device type.
- Whether the app was opened from the browser or installed as a PWA.
- Whether the network was home Wi-Fi, mobile data, VPN, or corporate Wi-Fi.
- The visible status message shown by the app.

Do not include private connection codes or personal data in public reports.
