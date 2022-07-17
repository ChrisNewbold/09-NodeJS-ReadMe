// TODO: Create a function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  if (!license) {
    return "";
  }
  else if (license == "MIT") { return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`; }
  else if (license == "ISC") { return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`; }
  else if (license == "APACHE 2.0") { return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`; }
  else if (license == "GPL 3.0") { return `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`; }
  else if (license == "BSD 3") { return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`; }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
${renderLicenseBadge(data.license)}  
# ${data.title} 


## Project Description 
${data.description}
    
## Table of Content 
    
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [License](#license)
* [Tests](#tests)
* [Questions](#questions)
* [Example](#example)
* [Credits](#credits)
    
## Installation 
${data.installation}
    
## Usage 
${data.usage}
    
## License 
${data.license}
    
## Contributing 
${data.contributing}
    
## Tests 
${data.tests}
    
## Questions 
    
for any questions in relation to this project please email me directly at: ${data.email}. To view more please visit my GitHub at [${data.github}](https://github.com/${data.github}/).
    
## Example 
${data.example}

## Credits 
${data.credits}
  `};

module.exports = generateMarkdown;
