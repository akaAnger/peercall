# Browser Compatibility Matrix

PeerCall relies on browser WebRTC, microphone permission, clipboard-friendly manual offer/answer exchange, and PWA behavior. Use this matrix to record repeatable compatibility checks before releases.

Do not mark a browser as supported from API availability alone. Run the end-to-end caller/callee flow on real devices or representative environments and record the tested version and date.

## Test matrix

| Browser / mode | Microphone | Offer/answer exchange | Audio on normal network | Backgrounding | Installed PWA | Last verified |
| --- | --- | --- | --- | --- | --- | --- |
| Desktop Chrome | Not verified | Not verified | Not verified | Not verified | N/A | — |
| Desktop Firefox | Not verified | Not verified | Not verified | Not verified | N/A | — |
| Desktop Safari | Not verified | Not verified | Not verified | Not verified | N/A | — |
| Android Chrome | Not verified | Not verified | Not verified | Not verified | Not verified | — |
| iOS Safari | Not verified | Not verified | Not verified | Not verified | Not verified | — |

`Not verified` is intentional: it distinguishes an untested environment from a known failure and avoids presenting assumptions as compatibility claims.

## How to verify a row

1. Record the browser version, OS version, device model (for mobile), and test date.
2. Open PeerCall over HTTPS or localhost and allow microphone access.
3. Complete a full caller/callee offer and answer exchange between two tabs or devices.
4. Confirm both peers receive remote audio on a normal home or mobile network.
5. On mobile, background and restore the app and record whether the call survives, pauses, or requires reconnection.
6. Where installation is available, repeat the flow in installed PWA mode and record any differences from the browser tab.
7. Note autoplay prompts, permission quirks, strict-NAT failures, or other reproducible limitations below the table.

Use `Works`, `Fails`, or `Limited: <short reason>` for tested cells. Add the exact browser version and ISO date (`YYYY-MM-DD`) to **Last verified**.

## Network caveat

A failed connection on one network does not by itself mean that the browser is incompatible. PeerCall has no bundled TURN relay, so restrictive NAT or firewall conditions can prevent an otherwise compatible browser pair from connecting. Retest on a normal network before recording a browser-level failure; see [optional TURN relay setup](turn-relay.md) for details.

## Known limitations

Add only reproduced, version-specific limitations here. Include enough detail for another contributor to repeat the check.