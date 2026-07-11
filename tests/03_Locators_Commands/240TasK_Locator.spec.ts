//import( test, expect ) from '@playwright/test';

import { test, expect } from '@playwright/test';

////a[@id='btn-make-appointment']
test( 'Verify our first TC', async ( { page } ) => {
    await page.goto( "https://katalon-demo-cura.herokuapp.com/" );

    let appointmentBtn = page.locator( "//a[@id='btn-make-appointment']" );
    await appointmentBtn.click();

    //await expect('xpath="//h2[.="Login"]"' ).
    let userNameField = page.locator( "//input[@id='txt-username']" );
    await userNameField.fill( "John Doe" );

    let passwordField = page.locator( "//input[@id='txt-password']" );
    await passwordField.fill( "ThisIsNotAPassword" );

    let loginBtn = page.locator( "//button[@id='btn-login']" );
    await loginBtn.click();

    let dropDownElement = page.locator( "//select[@id='combo_facility']" );
    await dropDownElement.click();

    let commentBox = page.locator( "//textarea[@id='txt_comment']" );
    await commentBox.fill( "DemoWEbSite" );

    let checkBox = page.locator( "//input[@id='chk_hospotal_readmission']" );
    await checkBox.click();

    let radioBtn = page.locator( "//input[@id='radio_program_medicaid']" );
    await radioBtn.click();

} ); 