const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
  return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "Project title?"
    },
    {
      type: "input",
      name: "description",
      message: "Description?"
    },
    {
      type: "input",
      name: "table",
      message: "Table of Contents?"
    },
    {
      type: "input",
      name: "installation",
      message: "Installation?"
    },
    {
      type: "input",
      name: "usage",
      message: "Usage?"
    },
    {
      type: "input",
      name: "license",
      message: "License?"
    },
    {
      type: "input",
      name: "contributions",
      message: "Contributing?"
    },
    {
      type: "input",
      name: "tests",
      message: "Tests?"
    },
    {
      type: "input",
      name: "questions",
      message: "What is your GitHub username?"
      }
    ]);
}

function generateReadme(answers) {
  return `README
  
Title: ${answers.title}

Description: ${answers.description}

Table of Contents: ${answers.table}

Installation: ${answers.installation}

Usage: ${answers.usage}

License: ${answers.license}

Contributions: ${answers.contributions}

Tests: ${answers.tests}

Questions: ${answers.questions}`;
}

async function init() {
  console.log("Hello")
  try {
    const answers = await promptUser();

    const readme = generateReadme(answers);

    await writeFileAsync("readme.md", readme);

    console.log("Successfully wrote to readme.md");
  } catch(err) {
    console.log(err);
  }
}

init();

  