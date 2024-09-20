import { BrowserContext, Page } from "@playwright/test";

export const runStrony = async (page: Page) => {
    const strony = {
        'https://chatgpt.com/': 20,
        // "https://www.filmweb.pl/": 20,
        // 'https://filman.cc/': 20,
        // 'https://starsports.bet/': 20,
        // 'https://wolnemedia.net/': 20,
        // 'https://rocketjobs.pl/': 20,
    };

    // if (concurent) {
    //     const all: Array<Promise<void>> = [];


    //     for (const [url, count] of Object.entries(strony)) {
    //         for (let i=0; i<count; i++) {
    //             all.push((async (): Promise<void> => {
    //                 const page = await context.newPage();

    //                 try {
    //                     console.info(`Go to ${url}, i=${i}`);
    //                     const response = await page.goto(url);

    //                     const code = response?.status();

    //                     console.info(`code=${code} title ${i}`, await page.title());
    //                 } finally {
    //                     await page.close();
    //                 }
    //             })());
    //         }
    //     }

    //     await Promise.all(all);
    // } else {

    for (const [url, count] of Object.entries(strony)) {
        for (let i=0; i<count; i++) {
            console.info(`Go to ${url}, i=${i}`);
            const response = await page.goto(url);

            const code = response?.status();

            console.info(`code=${code} title ${i}`, await page.title());
        }
    }
};