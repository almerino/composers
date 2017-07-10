# Composers
[Composers App](https://composersapp.herokuapp.com/)

### Install
`npm install`
`npm start`

### How to test
Run `npm run test`
(There is an issue with yarn and some dependencies packages, test can't be run with yarn unfortunatly, the issue should disappear with React 16)

### Solution
Composer use [create-react-app](https://github.com/facebookincubator/create-react-app) as base as it is being updated by the community and helping to have the project up to date. It also simplify the management of webpack and help to focus only on our present task.

The application also make use of [GraphQL](http://graphql.org/) to query datas.
The client used along with GrapqQL is [Apollo](https://github.com/apollographql/apollo-client), it is a client closer from Redux and simpler to manage. The other alternative to consider is [Relay](https://github.com/facebook/relay).

To manage the routing, we use [react-router v4](https://reacttraining.com/react-router/)

And lastly for the tests we use [Jest](https://facebook.github.io/jest/)/[enzyme](https://github.com/airbnb/enzyme) to test our components

### Architecture
#### Client
We have the main application with the providers, client at the top level of src/
The main App is inside the App folder with the principals components needed to run the app.
The others components are inside the components folders and can be resused anywhere in the app.
Each component are independant and can be loaded separatly.

#### Server
The main purpose of the server is to allow us to serve our assets and reload any pages.

#### API
As for the API we are using a backend as a service(MBaaS) [graph.cool](https://www.graph.cool/) to serve our data. The goal was to gain speed and avoiding to redevelop a backend and still have data served as a graph.