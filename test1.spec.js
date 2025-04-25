const { chromium } = require('playwright'); // Import Playwright

(async () => {
  // Launch Google Chrome with the path to the Chrome executable
  const browser = await chromium.launch({
    headless: false, // Show the browser UI (set to true for headless mode)
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe' // Set path to your Chrome executable here
  });

  // Create a new browser page
  const page = await browser.newPage();

  // Navigate to a webpage (e.g., example.com)
  await page.goto('https://www.google.co.in/');

  // Get and log the page title
  const title = await page.title();
  console.log('Page Title:', title);
  console.log('URL' +page.url);

  // Click a link (modify the selector based on the page structure)
  await page.click('text="More information"');

  // Wait for an element to appear (change the selector as needed)
  await page.waitForSelector('h1');

  // Get and log the content of the h1 element
  const headingText = await page.textContent('h1');
  console.log('Heading on new page:', headingText);

  // Close the browser
  await browser.close();
})();
