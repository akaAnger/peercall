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

## Keyboard and Screen Reader Accessibility

- Starting at the browser chrome, press `Tab` through the entire app and confirm every interactive control is reachable in a logical order without a mouse.
- Confirm each focused button, checkbox, textarea, and expandable summary has a clearly visible focus indicator.
- Activate both role buttons with the keyboard and confirm their pressed state is exposed through `aria-pressed` as the role changes.
- Confirm **My code** and **Their code** are announced with their visible labels, and that the read-only state of **My code** is exposed correctly.
- Trigger at least three status changes (for example role selection, microphone permission, and invalid connection code) and confirm the `aria-live="polite"` status region announces the updated state without moving focus.
- Confirm the decorative status dot is ignored by assistive technology and does not add a meaningless announcement.
- Confirm the **Call setup**, **Connection codes**, **Audio levels**, and **Connection statistics** regions have useful accessible names when navigating by landmarks or regions.
- Toggle **Simple mode** with a screen reader active and confirm removing technical details does not remove instructions required to complete the call flow.
- Expand and collapse **How the code exchange works** from the keyboard and confirm its state is announced.
- Run one complete caller/callee code-exchange flow using keyboard only; confirm focus never becomes trapped and no required action depends on hover or pointer input.

### Suggested test passes

Run the accessibility checklist in at least one Chromium browser and one browser using a different engine. For screen-reader coverage, use a combination available on the test platform such as NVDA + Firefox/Chrome on Windows, VoiceOver + Safari on macOS/iOS, or TalkBack + Chrome on Android. Record the browser, assistive technology, and any failed step when filing an issue.

## Responsive Layout

- Test at approximately 390 px wide and 844 px tall.
- Confirm text wraps without clipping.
- Confirm all buttons remain at least 44 px tall.
- Confirm both code text areas are reachable without horizontal scrolling.

## Known Network Limits

- If the call fails on a restrictive network, retest with another network before filing a regression.
- If both peers are behind strict NATs, note that PeerCall may need a TURN relay.
