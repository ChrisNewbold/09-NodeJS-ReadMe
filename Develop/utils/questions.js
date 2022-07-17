const questions = [
    {
        type: 'input',
        message: 'What is your project title?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Write a short description explaining the what, why and how of your project?',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Please provide the steps required to install this project and how I can get the development environment running',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Please provide instructions for use!',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'How would you like other developers to contribute to this project?',
        name: 'contributing',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license is being used for this project',
        choices: ['MIT', 'ISC', 'APACHE 2.0', 'GPL 3.0', 'BSD 3'],
    },
    {
        type: 'input',
        message: 'How would you test this project?',
        name: 'tests',
    },
    {
        type: 'input',
        message: 'what is your email?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'what is your GitHub username?',
        name: 'github',
    },
    {
        type: 'input',
        message: 'Who would you like to credit for the contribution to your project?',
        name: 'credits',
    },
];


module.exports = questions; 1