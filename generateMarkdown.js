// Function to generate the license badge
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  } else if (license === 'Apache 2.0') {
    return `[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  }
  return ''; // Return an empty string if no license is selected
}

// Function to generate the license link
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return `https://opensource.org/licenses/MIT`;
  } else if (license === 'Apache 2.0') {
    return `https://opensource.org/licenses/Apache-2.0`;
  }
  return ''; 
}

// Function to generate the license section of the README
function renderLicenseSection(license) {
  if (license) {
    return `## License\nThis project is licensed under the ${license} license. See the LICENSE file for details.`;
  }
  return ''; 
}

// Function to generate the complete README markdown
function generateMarkdown(data) {
  return `
# ${data.title}

${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

${renderLicenseSection(data.license)}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
For more questions, please reach out to:
- GitHub: [${data.github}](https://github.com/${data.github})
- Email: ${data.email}
- Linkedin: ${data.linkedin}
`;
}

export default generateMarkdown;
