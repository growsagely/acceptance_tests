"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cucumber_html_reporter_1 = require("cucumber-html-reporter");
var options = {
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
(0, cucumber_html_reporter_1.generate)(options);
