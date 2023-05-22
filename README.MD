# React UI and Node.js/Express Back-end Movie Search App

This is a web app that allows users to search movies using a reactive UI that interacts with a Node.js/Express back-end API. The back-end API provides a list of all movies by default and allows users to search for specific movies using a search query parameter. The API uses the `cors` middleware to allow cross-origin resource sharing. The application uses the debounce method to make the search more efficient.


## Features

1. **Search Movies** - User can search for movies by entering a name or query in the search box provided on the webpage. Debounce method doesn't allow the app to refresh at each textual input.

## Back-end API

The back-end API is built using Node.js with Express.js framework The app is built from the file named `moviesList.json` containing an array-list of objects containing information on movies.

The API uses the following routes:

- **GET /api/movies:query** to get all the movies `(http://localhost:4000/movies)` based on the query, if query is null return all movie list

## Implementation Details

The app uses a JSON file containing the list of movies to get all the movies by default and to search the movies by a search query using the back-end API. 

The front-end uses the `axios` module to make API requests and provides user interface suggestions while typing. The back-end uses the `cors` middleware to allow requests from any origin. The back-end is implemented with the `Express.js` framework to handle routes and requests, and fetch movie information from the `movieslist.json` file.