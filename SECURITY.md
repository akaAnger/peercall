# Security Policy

PeerCall is a static browser application. It does not run a signaling backend and does not store user accounts or call data.

## Supported Versions

The `main` branch is the supported development version.

## Reporting A Vulnerability

Please open a private security advisory on GitHub if the issue could expose users to unexpected data leakage, unsafe WebRTC behavior, service worker cache poisoning, or misleading privacy/security claims.

For non-sensitive bugs, open a normal GitHub issue with reproduction steps.

## Security Notes

- WebRTC encrypts media between peers, but connection setup data still includes SDP and ICE candidates.
- Connection codes should be shared privately and regenerated for each call attempt.
- PeerCall is not designed for regulated, emergency, or high-assurance communication.
- Strict NATs may require a TURN relay; this repository does not currently bundle one.
