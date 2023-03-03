// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(response) {
  return `# ${response.title}
  ## Description
  ${response.description}

  ## Table of Contents (Optional)
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contribution Guidelines](#contributionguidelines)
  - [Tests](#tests)
  
## Installation
  ${response.installationInstructons}

## Usage
  ${response.usageInformation}
 
 ## License
  ${response.license}

 ## ContributionGuidelines
  ${response.contributionGuidelines}

  ## Tests
  ${response.testInstructions}
  
`;
}

module.exports = generateMarkdown;
