# PeerCall Roadmap

This roadmap keeps the project honest about its current scope while making it easier for contributors to pick focused work.

## Near Term

- Keep the app static and dependency-light.
- Add automated checks for the static app shell, manifest, service worker, and key UI strings.
- Publish browser compatibility notes for desktop Chrome, Firefox, Safari, Android Chrome, and iOS Safari.
- Improve keyboard-only and screen-reader testing.
- Document known WebRTC failure modes in plain language.

## Reliability

- Add optional TURN configuration documentation for restrictive networks.
- Improve recovery messaging when ICE or peer connection setup fails.
- Document how backgrounding mobile browsers affects audio calls.
- Track browser-specific microphone and autoplay behavior.

## Maintainability

- Split WebRTC code into small testable modules if the single-file app becomes difficult to review.
- Add focused tests for connection-code packing and unpacking.
- Keep issue templates aligned with actual contributor needs.

## Out Of Scope For Now

- Accounts, identity, or contact lists.
- Hosted signaling servers.
- Video calls or group calls.
- Claims of regulated, emergency, or high-assurance communication.
