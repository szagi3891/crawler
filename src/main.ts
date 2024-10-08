import { timeout } from "@reactive/utils";
import { chromium } from "playwright";
import { runStrony } from "./strony";

const main = async () => {
    console.info("main ...");

    const browser = await chromium.connectOverCDP("http://localhost:9222");

    console.log(browser.isConnected() && "Connected to Chrome.");
    console.log(`Contexts in CDP session: ${browser.contexts().length}.`);

    const context = browser.contexts()[0];
    const page = await context.newPage();

    await runStrony(page);
    // await page.screenshot({ fullPage: true, path: 'filmweb.pl.png' });

    // await timeout(10_000);

    // //   await page.goto("https://example.com");
    // await page.screenshot({ path: "example.png" });

    // await page.close();
    await context.close();
    await browser.close();
};

main()
    .then(() => {
        console.info("main end ...");
        process.exit(0);
    })
    .catch((err) => {
        console.error(err);
        process.exit(1);
    });
