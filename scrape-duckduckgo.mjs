import puppeteer from "puppeteer";

const browser = await puppeteer.launch({
  headless: false,
  slowMo: 50,
  defaultViewport: { width: 1920, height: 1080 },
  userDataDir: "temporary",
});

const page = await browser.newPage();
await page.goto("https://duckduckgo.com/", {
  waitUntil: "networkidle0",
  timeout: 60000,
});
await page.waitForSelector("#searchbox_input");
await page.type("#searchbox_input", "nurullah7733 github");
await page.click(
  '[class="searchbox_searchButton__F5Bwq iconButton_button__6x_9C"]'
);

await page.waitForSelector('[data-testid="result-title-a"]');
await page.click('[data-testid="result-title-a"]');

await page.screenshot({ path: "duckduckgo.png" });
await browser.close();
