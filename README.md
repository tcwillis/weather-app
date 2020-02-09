# Weather app

## To start the application

In the project directory, run:

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## To run unit tests

### `yarn test`

Launches the test runner in the interactive watch mode.<br>

### `yarn build`

Builds the app for production to the `build` folder.<br>

## Work completed

- App bootstrapped with [Create React App].
- Added [Material UI] library for basic UI components
- Added basic node backend to handle API requests and used proxy config to direct requests from front-end to back-end
- Added base folder in jsconfig.json for cleaner imports
- Applied custom middleware to handle api actions for easier maintenance and reusability
- Added basic loader for while data is being fetched
- Assumed redux is source of truth for weather data, rather than cache (e.g. redis)
- Check redux state before calling fetch
- Added enzyme for shallow rendering unit tests
- Applied composable connector to easily map state and dispatch to any component
- Added mock data as json

## To do

- Consider ejecting [Create React App] for greater control over Webpack configuration, linting, etc
- Define a theme in the component library that can be applied to the application
- Update middleware to handle checking redux state for data before dispatch
- Implement [jest-fetch-mock] to mock all fetches
- Further unit tests for all UI components (e.g. apiActions and transform)
- Improve handling of useDispatch and useSelector in enzyme unit tests
- Add logger middleware
- Consider better use of transform utility to handle different types of data
- Consider better mocking (e.g mountebank or similar)
- Better screen reader support
- Update default value for search field with that retrieved via geolocation
- Add support for postcode lookup
- Use different API to retrieve preciptation and pollen count data
- Debouncing for location search to prevent numerous API requests
