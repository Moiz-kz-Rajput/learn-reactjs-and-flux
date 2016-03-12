# Quick Quiz Application
An application that is displaying questions from a JSON state object and let user answer 1 by 1 and show the result at the end. 

This project shows:

* how to setup React project to run in development mode
* how to setup React project to be build for production
* how to work with and set states
* how to map through state objects
* how to use conditionals to output correct props

## Installation
This project is setup as [Node.js](https://nodejs.org/en/) project and requires Node to be installed.
To install this project run following command:

	npm install
	
This will install all required packages and executables for this project. There is no need for separate installation of any other packages globally.

## Building the application
To build this project execute following command:

	npm run build

This command is defined in `packages.json` file's `scripts` section and it executes `webpack` installed in this project `node_modules` directory.

To build project for production execute following command:

	npm run production

This will prepare all javascript and style files for run in production. All built files are located under `dist` directory.

## Running the application
To run this application on development machine execute following command:

	npm run start
	
or simply

	npm start
	
This will start `webpack-dev-server`, which will be compiling all sources automatically and serve them at `http://localhost:8080`.

## Deploying the applcation
To deploy this application just copy entire content of `dist` directory to your server.