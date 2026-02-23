import { chromium } from "@playwright/test";

const BREAKPOINTS = [
  { name: "mobile", width: 390, height: 844 },
  { name: "tablet", width: 810, height: 1080 },
  { name: "desktop", width: 1440, height: 900 },
];

const URL = process.argv[2] || "https://commerce.framer.media/";
const prefix = process.argv[3] || "screenshot";

async function run() {
  const browser = await chromium.launch();

  for (const bp of BREAKPOINTS) {
    const context = await browser.newContext({
      viewport: { width: bp.width, height: bp.height },
    });
    const page = await context.newPage();
    await page.goto(URL, { waitUntil: "networkidle" });

    // Scroll to bottom incrementally to trigger lazy-loaded content
    await page.evaluate(async () => {
      const delay = (ms) => new Promise((r) => setTimeout(r, ms));
      const step = Math.floor(window.innerHeight * 0.8);
      const maxScroll = document.body.scrollHeight;
      for (let y = 0; y < maxScroll; y += step) {
        window.scrollTo(0, y);
        await delay(300);
      }
      window.scrollTo(0, document.body.scrollHeight);
      await delay(500);
      // Scroll back to top for the full-page screenshot
      window.scrollTo(0, 0);
      await delay(500);
    });

    // Let everything settle after scroll
    await page.waitForTimeout(2000);

    await page.screenshot({
      path: `screenshots/${prefix}-${bp.name}-${bp.width}x${bp.height}.png`,
      fullPage: true,
    });

    console.log(`Captured ${bp.name} (${bp.width}x${bp.height})`);
    await context.close();
  }

  await browser.close();
}

run();
