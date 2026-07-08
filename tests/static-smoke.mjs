import { readFile } from "node:fs/promises";
import { Script } from "node:vm";

const rootFiles = {
  html: "index.html",
  manifest: "manifest.json",
  serviceWorker: "sw.js"
};

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

const html = await readFile(rootFiles.html, "utf8");
const manifest = JSON.parse(await readFile(rootFiles.manifest, "utf8"));
const serviceWorker = await readFile(rootFiles.serviceWorker, "utf8");

assert(html.includes("<title>PeerCall - private browser audio calls</title>"), "Expected English product title");
assert(html.includes("Exchange connection codes"), "Expected code exchange UI");
assert(html.includes("Simple mode"), "Expected simplified UI mode");
assert(html.includes("That code does not look valid"), "Expected invalid-code error copy");
assert(html.includes("aria-live=\"polite\""), "Expected accessible live status region");

const requiredIds = [
  "appStatus",
  "btnCaller",
  "btnCallee",
  "btnMic",
  "btnMake",
  "btnCopy",
  "btnShare",
  "btnAccept",
  "btnPaste",
  "btnHang",
  "myCode",
  "peerCode"
];

for (const id of requiredIds) {
  assert(html.includes(`id="${id}"`), `Missing required UI id: ${id}`);
}

const inlineScript = html.match(/<script>\s*([\s\S]*?)\s*<\/script>/u);
assert(inlineScript, "Expected one inline script");
new Script(inlineScript[1], { filename: "index-inline.js" });

assert(manifest.name === "PeerCall - private browser audio calls", "Expected English manifest name");
assert(manifest.display === "standalone", "Expected standalone PWA display mode");
assert(Array.isArray(manifest.icons) && manifest.icons.length >= 2, "Expected PWA icons");

new Script(serviceWorker, { filename: "sw.js" });
assert(serviceWorker.includes("peercall-v3"), "Expected current cache version");
assert(serviceWorker.includes("skipWaiting"), "Expected service worker update flow");
assert(serviceWorker.includes("clients.claim"), "Expected service worker activation claim");

console.log("PeerCall static smoke checks passed.");
