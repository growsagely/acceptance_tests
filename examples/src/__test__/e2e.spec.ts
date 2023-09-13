import { Builder, By, until, type WebDriver } from "selenium-webdriver";

describe("End-to-End Test with Selenium", () => {
  let driver: WebDriver;

  // Setting up the Selenium WebDriver; assuming Chrome
  beforeEach(async () => {
    driver = await new Builder().forBrowser("chrome").build();
  });

  // Close the browser after testing
  afterEach(async () => {
    await driver.quit();
  });

  it("should navigate to website and find a philosophical joke", async () => {
    await driver.get("https://www.sagely.com");

    // Use the search bar to find a quote by keyword "tree"
    const searchBox = driver.findElement(By.name("searchBox"));
    await searchBox.sendKeys("tree");
    await searchBox.submit();

    // Wait for the results to show up
    const quote = await driver.wait(
      until.elementLocated(By.css(".quote-text")),
      1000
    );

    // Check the quote's content
    const quoteText = await quote.getText();

    // Our expected philosophical joke (though it's an actual philosophical query!)
    const expectedQuote =
      "If a tree falls in a forest and no one is around to hear it, does it make a sound?";
    expect(
      quoteText,
      "The tree's existential crisis wasn't properly represented!"
    ).toEqual(expectedQuote);
  });
});
