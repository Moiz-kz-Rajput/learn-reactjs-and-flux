# GitHub Profile Viewer
An application that will let the user search for specific GitHub accounts and display all of the infromation.

This project is showing how to setup React project with `package.json` and [Webpack](https://webpack.github.io/) module bundler, as well as general structure of React.js application and how to split UI into multiple React Components.

## Installation
This project is setup as [Node.js](https://nodejs.org/en/) project and requires Node to be installed.
To install this project run following command:

	npm install
	
This will install all required packages and executables for this project. There is no need for separate installation of any other packages globally.

## Building the application
To build this project execute following command:

	npm run build

This command is defined in `packages.json` file's `scripts` section and it executes `webpack` installed in this project `node_modules` directory.

## Running the application
To run this application simple open `index.html` file from `app` directory in any browser.