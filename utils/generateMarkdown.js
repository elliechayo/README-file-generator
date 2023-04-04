const licenseBadgeMap = {
  "Academic Free License v3.0":
    "https://img.shields.io/badge/License-AFL--3.0-green.svg",
  "Apache license 2.0":
    "https://img.shields.io/badge/License-Apache_2.0-blue.svg",
  "BSD 3-clause Clear license":
    "https://img.shields.io/badge/License-BSD_3--Clause-blue.svg",
  "Creative Commons license family":
    "https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg",
  "GN General Public License v3.0":
    "https://img.shields.io/badge/License-LGPL_v3-blue.svg",
  ISC: "https://img.shields.io/badge/License-ISC-blue.svg",
  MIT: "https://img.shields.io/badge/License-MIT-yellow.svg",
  "Open Software License 3.0":
    "https://img.shields.io/badge/License-OSL--3.0-yellow.svg",
};

// function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  if (data.license) {
    const badgeURL = licenseBadgeMap[data.license];
    return `[![Github license](${badgeURL})](${renderLicenseLink(data)})\n`;
  }
  return "";
}

// function that returns the license link
// If there is no license, return an empty string
const licenseMap = {
  "Academic Free License v3.0": "afl-3.0",
  "Apache license 2.0": "apache-2.0",
  "BSD 3-clause Clear license": "bsd-3-clause-clear",
  "Creative Commons license family": "cc0-1.0",
  "GN General Public License v3.0": "lgpl-3.0",
  ISC: "isc",
  MIT: "mit",
  "Open Software License 3.0": "osl-3.0",
};

function renderLicenseLink(data) {
  if (data.license) {
    return `https://choosealicense.com/licenses/${licenseMap[data.license]}`;
  }
  return "";
}

// function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection({ license, title }) {
  if (license) {
    return `\n## License
${title} is licensed under the ${license}.`;
  }
  return "";
}

function renderSection(title, data) {
  if (data) {
    return `\n## ${title}
${data}`;
  }
  return "";
}

function renderQuestionSection(data) {
  if (data.username || data.email) {
    let mdData = "\n## Questions";
    if (data.username) {
      mdData += `\n- Here's my [Github Profile](https://github.com/${data.username})`;
    }
    if (data.email) {
      mdData += `\n- Reach me via Email - ${data.email}`;
    }
    return mdData;
  }
  return "";
}

function renderTableOfContents(data) {
  if (
    !data.installation &&
    !data.usage &&
    !data.license &&
    !data.contribution &&
    !data.test 
  ) {
    return "";
  }
  let mdData = `\nTable Of Contents`;
  if (data.installation) mdData += "\n- [Installation](#installation)";
  if (data.usage) mdData += "\n- [Usage](#usage)";
  if (data.license) mdData += "\n- [License](#license)";
  if (data.contribution) mdData += "\n- [Contribution](#contribution)";
  if (data.test) mdData += "\n- [Tests](#tests)";
  mdData += "\n- [Questions](#questions)";
  return mdData;
}

// function to generate markdown for README
function generateMarkdown(data) {
  return `${renderLicenseBadge(data)}# ${data.title}
${renderSection("Description", data.description)}
${renderTableOfContents(data)}
${renderSection("Installation", data.installation)}
${renderSection("Usage", data.usage)}
${renderLicenseSection(data)}
${renderSection("Contribution", data.contribution)}
${renderSection("Tests", data.test)}
${renderQuestionSection(data)}`;
}

module.exports = generateMarkdown;
