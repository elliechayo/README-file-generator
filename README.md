# Professional README Generator 

## Description

The objective of the project was to create a command-line application that dynamically generates a professional README.md from a user's input.

When user runs the application in their terminal the application presents the user with series of questions and prompts for information about the user's application repository and generates a high quality, professional README file including:

- Project's title 
- Description section 
- Table of Contents section
- Installation section
- Usage section
- Contributing section
- Tests section
- Questions section 
- License section

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Preview](#preview)
* [Tests](#tests)
* [Credits](#credits)
* [Questions](#links)
* [License](#license)


## Installation 
<hr>
application requires:
- Node 
- Inquirer package 8.2.4
- npm init

## Usage
<hr>
Once the installation is completed, run node index.js in the commend line and user will be prompted to answer a series of questions.

When the user enters the project title it’s displayed as the title of the README.

WHEN the user enters a description, installation instructions, usage information, contribution guidelines, repo name & url and test instructions, the information is added to their respective  sections of the README.

WHEN the user selects a license from a list of options, a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under.

WHEN the user enters their GitHub username, GitHub profile and email address, the information is added to the Question section with a link to my GitHub profile and instructions on how to reach me with additional questions.

WHEN the user complete answering all of the questions, a README file is generated as a separate file.

WHEN the user clicks on the links in the Table of Contents, their taken to the corresponding section of the README.

## Preview
<hr>

The following video walkthrough shows the application appearance and functionality:

![initial display](/Assets/day_scheduler_app.gif)



## Tests
<hr>

In order to test this application, clone the repository code and run the application in your terminal by running code 'node index.js'. Answer all the prompt questions. When completed, confirm the information entered was populated into the new REDAME file created. 

## Credits
<hr>
 No contributors at this time

## Questions
<hr>

[GitHub Repository](https://github.com/elliechayo/README-file-generator)

For any additional questions, feel free to reach out via email at [elliechayo@gmail.com](mailto:elliechayo@gmail.com)

## License
<hr>
**MIT License**

Copyright (c) [2023] [Elinor Chayo]

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

