# Movie Find Application (improved)
An application that will let user search for movies in the IMDB database and show info and link with new JavaScript [ES6 style](http://www.ecma-international.org/ecma-262/6.0/index.html).

This project uses [Gulp](http://gulpjs.com/) task runner tool. 

This is first project in this serie which uses [Flux](https://facebook.github.io/flux/).

In this project are samples of:

* how to setup `gulp` tasks
* how to compile JavaScript with `gulp`
* introduction of Flux architecture
* how to work with external REST API
* how to work with JSON responses

## Installation
This project is setup as [Node.js](https://nodejs.org/en/) project and requires Node to be installed.
To install this project run following command:

	npm install
	
This will install all required packages and executables for this project. There is no need for separate installation of any other packages globally.

## Building the application
To build this project execute following command:

	npm run start

This command is defined in `packages.json` file's `scripts` section and it executes `gulp` installed in this project `node_modules` directory.

This will prepare all javascript and style files and `index.html` and will copy them to `dist` directory.

This command will run continuously, watching for any changes and compiling them automatically.

## Running the application
To run this application just open `index.html` found from `dist` directory.

## Deploying the applcation
To deploy this application just copy entire content of `dist` directory to your server.