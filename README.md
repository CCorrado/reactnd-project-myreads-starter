# Chris' Reads Project

## TL;DR

To get started, run the following:

* install all project dependencies with `npm install`
* start the development server with `npm start` or `yarn start`

By default, `http://localhost:3000/` will be the URL of the app.

## Pages

This project has a main root page and a single `/search` page.
* Search is where you can find all the books available.
* Root is where you can see books that you have put on a shelf.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).
