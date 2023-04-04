// function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(data) {
//   if (data.license) {
//     const badgeURL = `https://img.shields.io/github/license/${data.username}/${data.reponame}`;
//     return `[![Github license](${badgeURL})](${renderLicenseLink(data)})]\n`;
//   }
//   return "";
// }
function renderLicenseBadge(license) {
  if (license !== 'no license'){
    return `![badge](https://img.shields.io/badge/license-${license}-green>)`;
  } else {
    return ' ';
  }
};

// function getLicenseIcon(license) {
//   switch (license) {
//     case 'MIT':
//       return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
//     case 'Apache':
//       return '![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)';
//     case 'GPLv3':
//       return '![License: GPL 3.0](https://img.shields.io/badge/License-GPLv3-blue.svg)';
//     case 'BSD 3-Clause':
//       return '![License: BSD 3-Clause](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)';
//     default:
//       return '';
//   }
// }


// function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(data) {
//   if (data.license) {
//     return `https://github.com/${data.username}/${data.reponame}/blob/main/LICENSE`;
//   }
//   return "";
// }
function renderLicenseLink(license) {
  if (license !== 'no license') {
  return `
  [${license}](https://choosealicense.com/licenses/${license})
    `;
  } else {
    return ' ';
  }
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
    !data.test &&
    !data.questions
  ) {
    return "";
  }
  let mdData = `\nTable Of Contents`;
  if (data.installation) mdData += "\n- [Installation](#installation)";
  if (data.usage) mdData += "\n- [Usage](#usage)";
  if (data.license) mdData += "\n- [License](#license)";
  if (data.contribution) mdData += "\n- [Contribution](#contribution)";
  if (data.test) mdData += "\n- [Tests](#tests)";
  if (data.questions) mdData += "/n- [Questions](#questions)";
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
