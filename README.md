<div align="center">

# Technical Test

</div>

## Overview

The task involves creating a server application that fetches 20 random activities from the BoredAPI and stores them in a MongoDB database. This data should then be retrievable via an API for client-side querying. In addition, a React or Next.js frontend needs to be developed to interact with this server. Two endpoints may be created - one for data sync and another for querying activities, with at least the "type" parameter for querying. The server can expose either a REST or GraphQL API.

## Frontend

For the frontend portion of the test, use the `/client` folder.

#### Requirements

- You must utilize the following technologies:
  - React.js
  - TailwindCSS
  - Typescript

## Backend

For the backend portion of the test, use the `/server` folder.

#### Requirements

- You must utilize the following technologies:
  - Typescript
  - GraphQL
  - Node.js
  - React.js
- The server is listening on port `14000`

#### To run the backend you must follow the below steps:
 - cd server
 - create a .env file on the server directory
 - add `DB_STRING=Mongodb connection string` this will be provided on the email
 - npm install `This will install the dev dependencies
 - npm start `this will spin up the server`

#### To run the frontend you must follow the below steps:
 - cd client
 - npm install `This will install the dev dependencies`
 - npm run generate `This will generate the types of the graphql schema
 - npm start `This will spin up the react application`

**NB**

I would like to acknowledge the potential issue of accumulating numerous records in the database as we insert 20 random activities each time. One optimal solution for this would be to implement GraphQL pagination, allowing for efficient traversal through the data, thereby enhancing performance.

Unfortunately, due to a heavy workload and stringent deadlines, I was unable to implement this feature. The proposed pagination solution would have included parameters such as 'page' and 'perPage', and returned data including 'totalCount', 'totalPages', 'currentPage', and 'hasNextPage'.

On the frontend, I intended to implement a scroll event listener, utilizing the 'fetchMore' function from GraphQL. This would have allowed for additional data fetching as the user scrolls, continuing until no more data is available. However, please note that this remains to be implemented.
