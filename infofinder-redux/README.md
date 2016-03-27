# InfoFinder with Redux Application
InfoFinder is an application that is powered by [DuckDuckGo API](https://duckduckgo.com/api) search engine. It simply returns results using a GET request.

This is React.js Redux project which uses [Webpack]() build tool to compile and run the project.

This project is based on [InfoFinder Flux project](../infofinder) but uses [Redux](http://reduxjs.org) instead of Flux.

## Installation
This project is setup as [Node.js](https://nodejs.org/en/) project and requires Node to be installed.
To install this project run following command:

	npm install
	
This will install all required packages and executables for this project. There is no need for separate installation of any other packages globally.

## Building the application
To build this project execute following command:

	npm run build

This command is defined in `packages.json` file's `scripts` section and it executes `webpack` installed in this project `node_modules` directory.

This will prepare all javascript and style files and `index.html` and will copy them to `dist` directory.


## Running the application
To start a `webpack-dev-server` process execute following command:

	npm run start
or just
	
	npm start

This command will run continuously, watching for any changes, compiling them automatically and reloading newly built script into the browser with `react-hot-reload`. `webpack-dev-server` serves this application on [http://localhost:8080](http://localhost:8080).

## Deploying the applcation
To deploy this application just copy entire content of `dist` directory to your server.