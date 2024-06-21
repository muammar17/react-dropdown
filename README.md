# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


# Dropdown Component

A reusable dropdown component built with React using `create-react-app` and Storybook for development and documentation.

# React Dropdown Component with Storybook

This project is a React-based dropdown component with Storybook integration for developing, testing, and showcasing the component.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Storybook](#storybook)
- [Development](#development)

## Introduction

This project provides a customizable dropdown component built with React. It includes a Storybook setup to facilitate the development and testing of the component in isolation.

## Features

- Searchable Dropdown: The isSearchable prop controls this feature.
- Portal Support: The usePortal prop enables this feature.
- Single or Multiple Selection: The isMulti prop enables this feature.
- Customizable Option Rendering: The customOptionRenderer prop allows this.
- Search Filtering: Handled by react-select's built-in search.
- Toggle Features: Controlled by props.
- Z-Index Compatibility: The zIndex prop sets the z-index of the dropdown.

## Installation

First, clone the repository:

git clone `https://github.com/muammar17/react-dropdown.git`
cd react-dropdown

To install the project dependencies, run the following command:
`npm install` .

## Storybook

Storybook allows you to develop and test UI components in isolation. To start Storybook, run:
`npm run storybook`
This will start the Storybook server and you can view it in your browser at `http://localhost:6006`

## Development 

To start the development server, run:
`npm start`
This will start the React development server and you can view your app at `http://localhost:3000`