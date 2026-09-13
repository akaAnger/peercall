import { readFile } from "node:fs/promises";

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

const PNG_SIGNATURE = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);

function pngDimensions(buffer, source) {
  assert(buffer.length >= 24, `PNG is too short to contain an IHDR chunk: ${source}`);
  assert(buffer.subarray(0, 8).equals(PNG_SIGNATURE), `Expected PNG signature: ${source}`);
  assert(buffer.subarray(12, 16).toString("ascii") === "IHDR", `Expected PNG IHDR chunk: ${source}`);

  const width = buffer.readUInt32BE(16);
  const height = buffer.readUInt32BE(20);
  assert(width > 0 && height > 0, `Expected positive PNG dimensions: ${source}`);
  return `${width}x${height}`;
}

const manifest = JSON.parse(await readFile("manifest.json", "utf8"));
assert(Array.isArray(manifest.icons) && manifest.icons.length > 0, "Expected manifest icons");

for (const icon of manifest.icons) {
  assert(typeof icon.src === "string" && icon.src.length > 0, "Expected icon source");
  assert(/^\d+x\d+$/u.test(icon.sizes), `Expected explicit icon dimensions: ${icon.src}`);

  const actualSize = pngDimensions(await readFile(icon.src), icon.src);
  assert(
    actualSize === icon.sizes,
    `Manifest size mismatch for ${icon.src}: declared ${icon.sizes}, actual ${actualSize}`
  );
}

console.log("PeerCall PWA icon dimension checks passed.");
