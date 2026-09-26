# PeerCall Roadmap

This roadmap keeps the project honest about its current scope while making it easier for contributors to pick focused work.

## Near Term

- Keep the app static and dependency-light.
- Extend automated checks when new static app-shell, manifest, service-worker, or key UI behavior is added.
- Keep the browser compatibility matrix current with tested browser versions and verification dates.
- Improve keyboard-only and screen-reader testing.
- Document known WebRTC failure modes in plain language.

## Reliability

- Keep the optional TURN relay guidance aligned with the current manual signaling flow.
- Improve recovery messaging when ICE or peer connection setup fails.
- Document how backgrounding mobile browsers affects audio calls.
- Track browser-specific microphone and autoplay behavior.

## Maintainability

- Split WebRTC code into small testable modules if the single-file app becomes difficult to review.
- Extend focused connection-code tests when the payload format or validation rules change.
- Keep issue templates aligned with actual contributor needs.

## Out Of Scope For Now

- Accounts, identity, or contact lists.
- Hosted signaling servers.
- Video calls or group calls.
- Claims of regulated, emergency, or high-assurance communication.
