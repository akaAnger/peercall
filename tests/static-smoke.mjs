import { access, readFile } from "node:fs/promises";
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
assert(html.includes('rel="manifest" href="manifest.json"'), "Expected manifest link");

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
assert(manifest.short_name === "PeerCall", "Expected compact manifest short name");
assert(manifest.start_url === ".", "Expected relative PWA start URL");
assert(manifest.scope === ".", "Expected relative PWA scope");
assert(manifest.display === "standalone", "Expected standalone PWA display mode");
assert(/^#[0-9a-f]{6}$/iu.test(manifest.background_color), "Expected valid manifest background color");
assert(/^#[0-9a-f]{6}$/iu.test(manifest.theme_color), "Expected valid manifest theme color");
assert(Array.isArray(manifest.icons) && manifest.icons.length >= 2, "Expected PWA icons");

for (const icon of manifest.icons) {
  assert(typeof icon.src === "string" && icon.src.length > 0, "Expected every manifest icon to have a source");
  await access(icon.src);
  assert(serviceWorker.includes(`./${icon.src}`), `Expected service worker to cache manifest icon: ${icon.src}`);
}

new Script(serviceWorker, { filename: "sw.js" });
assert(serviceWorker.includes("peercall-v3"), "Expected current cache version");
assert(serviceWorker.includes("skipWaiting"), "Expected service worker update flow");
assert(serviceWorker.includes("clients.claim"), "Expected service worker activation claim");

const assetListMatch = serviceWorker.match(/const APP_ASSETS = \[([\s\S]*?)\];/u);
assert(assetListMatch, "Expected a static service worker asset list");
const precacheAssets = [...assetListMatch[1].matchAll(/["'](.+?)["']/gu)].map((match) => match[1]);
assert(precacheAssets.length > 0, "Expected at least one precached asset");
assert(new Set(precacheAssets).size === precacheAssets.length, "Expected unique precache asset paths");

for (const asset of precacheAssets) {
  assert(asset.startsWith("./"), `Expected relative precache asset path: ${asset}`);
  const localPath = asset === "./" ? "." : asset.slice(2);
  await access(localPath);
}

console.log("PeerCall static smoke checks passed.");
