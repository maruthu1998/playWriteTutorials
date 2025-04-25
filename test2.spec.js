const { chromium } = require('playwright'); // Import Playwright

(async () => {
  try {
    // Path to Chrome executable
    const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'; // Update this path if needed

    console.log('Launching Chrome...');

    // Launch Google Chrome with the specified executable path
    const browser = await chromium.launch({
      headless: false, // Set to false to show the browser window
      executablePath: chromePath // Set the path to your Chrome executable
    });

    console.log('Chrome launched successfully!');

    // Create a new page in the browser
    const page = await browser.newPage();

    // Navigate to a webpage (e.g., Google)
    await page.goto('https://www.google.com');
    const title = await page.title();
    console.log('Page Title:', title);
    const element =page.locator('//*[@id="APjFqb"]')
    await element.fill('playWrite');
    await page.waitForSelector('select#dropdownId', { state: 'visible' });
    const valueToSelect = 'playwrite'; // Replace with the value you're looking for
  await page.selectOption('select#dropdownId', { value: valueToSelect });
    //await page.fill('title="Search"', 'playwrite');
    await page.click('/html/body/div[1]/div[3]/form/div[1]/div[1]/div[3]/center/input[1]');
    //await page.keyboard.press('Enter');
    // Close the browser after the task
    //await browser.close();
  } catch (error) {
    console.error('Error during script execution:', error);
  }
})();
