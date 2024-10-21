import fs from 'fs';
import inquirer from 'inquirer';
import generateMarkdown from './generateMarkdown.js';

// MIT and Apache 2.0 license text template
const mitLicense = `
MIT License

Copyright (c) ${new Date().getFullYear()}

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
`;

const apacheLicense = `
Apache License
Version 2.0, January 2004
http://www.apache.org/licenses/

TERMS AND CONDITIONS FOR USE, REPRODUCTION, AND DISTRIBUTION

1. Definitions.
   ...
   [Additional text for Apache License]
`;

// Questions to prompt the user
const questions = [
  { type: 'input', name: 'title', message: 'What is the title of your project?' },
  { type: 'input', name: 'description', message: 'Provide a short description of your project:' },
  { type: 'input', name: 'installation', message: 'What are the installation instructions?' },
  { type: 'input', name: 'usage', message: 'How is your project used?' },
  { type: 'list', name: 'license', message: 'Choose a license:', choices: ['MIT', 'Apache 2.0', 'None'] },
  { type: 'input', name: 'contributing', message: 'How can others contribute?' },
  { type: 'input', name: 'tests', message: 'How can the project be tested?' },
  { type: 'input', name: 'github', message: 'Enter your GitHub username:' },
  { type: 'input', name: 'email', message: 'Enter your email address:' },
  { type: 'input', name: 'linkedin', message: 'Enter your Linkedin username:' },
];

// Function to create profile.html content
function generateProfileHTML() {
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${questions[0].title}'s Portfolio</title>
</head>
<body>

    <header>
        <h1>This is my portfolio</h1>
    </header>

    <section class="about-me">
        <h2>About Me</h2>
        <p>Hello! I'm Rafiu, a 38-year-old IT consultant and DevOp Engineer based in Minneapolis, MN. With over 6 years of experience in the industry, I’m passionate about leveraging technology to solve complex problems and improve business processes.</p>
    </section>

    <section class="skills">
        <h2>Skills</h2>
        <ul>
            <li>DevOp Engineer</li>
            <li>Certified AWS Architect</li>
            <li>Linux Admin Engineer</li>
            <li>IT Consulting</li>
            <li>Systems Analysis</li>
            <li>Network Security</li>
        </ul>
    </section>

    <section class="location">
        <h2>Location</h2>
        <p>Minneapolis, MN</p>
    </section>

    <section class="projects">
        <h2>Projects</h2>
        <ul>
            <li><strong>Wallet Watcher:</strong> Wallet Watchers is a simple, lightweight app that allows you to input, track, and categorize expenses. (<a href="https://github.com/allenarnoldy/project1">allenarnoldy/project1</a>)</li>
            <li><strong>Employee Payroll Tracker:</strong> Payroll Tracker helps me to see my employees' payroll data and properly budget for the company. (<a href="https://github.com/Employee-Payroll-Tracker">Employee-Payroll-Tracker</a>)</li>
        </ul>
    </section>

    <section class="interests">
        <h2>Interests</h2>
        <p>When I’m not working, I enjoy exploring the outdoors, reading tech blogs, and playing video games. I'm also an avid coffee enthusiast!</p>
    </section>

    <section class="pets">
        <h2>Pets</h2>
        <p>No pet</p>
    </section>

    <section class="contact-info">
        <h2>Contact Info</h2>
        <ul>
            <li><strong>Email:</strong> <a href="mailto:ralphconsultant1@gmail.com">ralphconsultant1@gmail.com</a></li>
            <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/rafiu-lawal-9b5679121/">My Linkedin profile</a></li>
            <li><strong>GitHub:</strong> <a href="https://github.com/elele20005">My github profile</a></li>
        </ul>
    </section>

    <section class="additional-info">
        <h2>Additional Information</h2>
        <p>I’m always eager to connect with fellow professionals and share insights about the DevOp industry.</p>
    </section>

</body>
</html>`;
}

// Function to initialize the README, LICENSE, and profile.html generation
function init() {
  inquirer.prompt(questions).then((answers) => {
    const markdownContent = generateMarkdown(answers);

    // Write the README.md file
    fs.writeFile('README.md', markdownContent, (err) =>
      err ? console.error(err) : console.log('README.md created successfully!')
    );

    // Write the LICENSE file based on selected license
    if (answers.license === 'MIT') {
      fs.writeFile('LICENSE', mitLicense, (err) =>
        err ? console.error(err) : console.log('LICENSE file created successfully!')
      );
    } else if (answers.license === 'Apache 2.0') {
      fs.writeFile('LICENSE', apacheLicense, (err) =>
        err ? console.error(err) : console.log('LICENSE file created successfully!')
      );
    }

    // Write the profile.html file
    const profileHTMLContent = generateProfileHTML();
    fs.writeFile('profile.html', profileHTMLContent, (err) =>
      err ? console.error(err) : console.log('profile.html created successfully!')
    );
  });
}

// Run the app
init();

