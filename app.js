const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const teamList = [];
const managerQuestions = [
  {
    type: "input",
    name: "name",
    message: "Enter manager name:",
    validate: async (input) => {
      if (input == "" || /\s/.test(input)) {
        return "Please enter first or last name.";
      }
      return true;
    },
  },
  {
    type: "input",
    name: "email",
    message: "Enter manager's email:",
    validate: async (input) => {
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input)) {
        return true;
      }
      return "Please enter a valid email address.";
    },
  },
  {
    type: "input",
    name: "officeNum",
    message: "Enter office number:",
    validate: async (input) => {
      if (isNaN(input)) {
        return "Please enter a number";
      }
      return true;
    },
  },
  {
    type: "list",
    name: "hasTeam",
    message: "Do you have any team members?",
    choices: ["Yes", "No"],
  },
];
