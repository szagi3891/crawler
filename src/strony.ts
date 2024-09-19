import { Page } from "@playwright/test";

export const runStrony = async (page: Page) => {
    const strony = {
        "https://www.filmweb.pl/": 20,
        'https://filman.cc/': 20,
        'https://starsports.bet/': 20,
        'https://wolnemedia.net/': 20,
        'https://rocketjobs.pl/': 20,
    };

    for (const [url, count] of Object.entries(strony)) {
        for (let i=0; i<count; i++) {
            console.info(`Go to ${url}, i=${i}`);
            await page.goto(url);
            console.info(`title ${i}`, await page.title());
        }
    }
};