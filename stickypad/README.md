# Stickypad Notes Application
An application where user can create simple todos or tasks on a sticky note. Data will be persisted to [mLab](https://mlab.com/) MongoDB-as-a-Service database (former MongoLab).

This is React.js Flux project which uses [Gulp](http://gulpjs.com/) task runner tool with [Bower](http://bower.io/) package manager for web and [Zurb Foundation](http://foundation.zurb.com/) front-end framework for styling.

In this project are samples of:

* how to setup `gulp` tasks to work with `bower`
* how to work compile SASS files into plain CSS
* how setup and create Flux boilerplate
* how to execute create, read, update and delete (CRUD) operations on mLab (remote MongoDB)
* how to make ajax requests from REST API functions

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