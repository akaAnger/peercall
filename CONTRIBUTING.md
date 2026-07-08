# Contributing To PeerCall

Thank you for helping make simple browser calling easier to understand and reuse.

## Good First Areas

- Mobile browser testing on iOS Safari, Android Chrome, and installed PWA mode.
- Accessibility improvements for keyboard-only and screen-reader users.
- WebRTC error handling for strict NATs, blocked microphones, and interrupted connections.
- Documentation for TURN setup and deployment on static hosting providers.
- Small automated tests for code parsing and UI smoke checks.
- Plain-language UX improvements for people who are not comfortable with meeting apps.

## Development Flow

1. Serve the project locally from the repository root.
2. Test in at least one desktop browser and one mobile browser when changing call flow or layout.
3. Keep the app static unless there is a clear reason to add a build step.
4. Keep user-facing language plain and direct.
5. Update the README or manual QA checklist when behavior changes.
6. Keep impact claims honest: document real users, real limitations, and real browser behavior.

## Manual Checks Before A Pull Request

- The app loads over `localhost` without console errors.
- Choosing each side updates the visible help text.
- Microphone permission success and failure states are understandable.
- Offer and answer codes can be created, copied, pasted, and applied.
- The layout remains usable at mobile width.
- The service worker does not serve an outdated app shell after a version change.
