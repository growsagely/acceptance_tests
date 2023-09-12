import { Options, generate } from "cucumber-html-reporter";

const options: Options = {
  theme: "bootstrap",
  jsonFile: "path/to/your/cucumber/report.json",
  output: "./report.html",
  reportSuiteAsScenarios: true,
  scenarioTimestamp: true,
  launchReport: true,
  metadata: {
    "App Version": "0.3.2",
    "Test Environment": "STAGING",
    // ... Add more metadata as needed
  },
};

generate(options);
