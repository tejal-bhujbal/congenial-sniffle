This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm install`

Installs the required package

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### Problem Statement : Web Application for employee record
	- Features: 
		-- Login page (using dummy token access). Write the service
		-- Dashboard contains :
			--- Table with list of employees. Header columns include Name, Emp Code, Project assigned, Technology Stack.
			--- Table contains the last column as an “Action” column to Edit, Delete.
			--- Edit click : 
				---- Open a Dialog to do the update
				---- Name, Emp Code is non- editable
			--- Delete Click : 
				---- Confirmation box
				---- Dashboard contains a “Add New” Button to add a new emp record. On click we have a Modal which adds a record
		-- Pagination
	- Must have: The application should consist of 
		-- Routes
		-- Container components
		-- Stateless components
		-- High Order Component
		-- Redux middleware
		-- Any UI library like Material or Bootstrap
		-- Basic Unit testing using Jest, Enzyme Or any preferable lib
