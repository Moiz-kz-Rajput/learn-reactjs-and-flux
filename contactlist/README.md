# Firebase Contact List Application
An application that allows user to add, update and delete contacts and persist data to Firebase.

This is React.js Flux project which uses [Gulp](http://gulpjs.com/) task runner tool with [Bower](http://bower.io/) package manager for web.

In this project are samples of:

* how to setup `gulp` tasks to work with `bower`
* how to work with external persistence API - [Firebase](https://www.firebase.com/)
* how to add, edit and delete the data from stores and Firebase
* how to work with more advanced state and props data

## Installation
This project is setup as [Node.js](https://nodejs.org/en/) project and requires Node to be installed.
To install this project run following command:

	npm install
	
This will install all required packages and executables for this project. There is no need for separate installation of any other packages globally.

## Building the application
To build this project execute following command:

	npm run build

This command is defined in `packages.json` file's `scripts` section and it executes `gulp` installed in this project `node_modules` directory.

This will prepare all javascript and style files and `index.html` and will copy them to `dist` directory.

To start a `watch` process execute following command:

	npm run start
or just
	
	npm start

This command will run continuously, watching for any changes and compiling them automatically.

## Running the application
To run this application just open `index.html` found from `dist` directory.

## Deploying the applcation
To deploy this application just copy entire content of `dist` directory to your server.