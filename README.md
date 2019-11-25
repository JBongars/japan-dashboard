# Japan Dashboard

## Prerequisites

- NPM v6.11.3
- Node v10

## Build

Run the following command to build the project: `npm run build`

## Start

Run the following command to run the project `npm run start`. Note that the service should start on http://localhost:3000

## NOTE

This project is currently incomplete. Please find a list of the following issues which have yet to be resolved:

1. Currently there are no working unit tests. These need to be updated
2. Currently there are not e2e tests. These need to be implemented
3. A CORS error is being generated when a request is made to http://localhost:3000, next needs to be re-configured to accept http
4. The wrong projection is being used on the map of Japan. A custom projection should be used to more accurately show Japan. (Apologies, this was my first time using D3)
