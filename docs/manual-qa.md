# PeerCall Manual QA Checklist

Use this checklist before releases and after changes to the WebRTC flow.

## App Shell

- Open the app over `http://localhost` or HTTPS.
- Confirm the page title is `PeerCall - private browser audio calls`.
- Confirm the first screen shows the status panel, setup controls, and code exchange area.
- Confirm no browser console errors appear on first load.
- Reload once and confirm the service worker does not break the page.

## Setup Flow

- Select **I start the call** and confirm the role hint changes.
- Select **I answer a call** and confirm the answer instructions appear.
- Toggle **Simple mode** and confirm technical stats are hidden and controls become larger.
- Toggle STUN and confirm the visible STUN hint changes.

## Microphone

- Allow microphone access and confirm the microphone badge changes to `Microphone: on`.
- Speak briefly and confirm the local audio meter moves.
- Block microphone access in browser settings and confirm the app shows a clear error.

## Code Exchange

- As caller, create an offer code and confirm Copy becomes enabled.
- Paste invalid text into **Their code** and confirm the app shows a validation error.
- As callee, paste a caller offer code and confirm the app asks you to create an answer code.
- As caller, paste a callee answer code and confirm the app moves into connecting state.

## Responsive Layout

- Test at approximately 390 px wide and 844 px tall.
- Confirm text wraps without clipping.
- Confirm all buttons remain at least 44 px tall.
- Confirm both code text areas are reachable without horizontal scrolling.

## Known Network Limits

- If the call fails on a restrictive network, retest with another network before filing a regression.
- If both peers are behind strict NATs, note that PeerCall may need a TURN relay.
