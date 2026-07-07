import { test, expect } from '@playwright/test';


test( 'Verify our first TC', async ( { browser } ) => {

    const contex1 = await browser.newContext( {
        viewport: { width: 1920, height: 1080 },

    } )

    const contex2 = await browser.newContext()
    const page1 = await contex1.newPage();
    await page1.goto( "https://app.thetestingacademy.com/playwright/ttacart/" );


    const page2 = await contex2.newPage();
    await page2.goto( "https://tta-bank-digital-973242068062.us-west1.run.app/" );

    page1.close();
    page2.close();
    contex1.close();
    contex2.close();



} );