# SJ_MERN_Redux_Store

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description.

This an eCommerce platform application is built using the MERN stack, which includes MongoDB, Express.js, React, and Node.js. In this application, the management of the global state has been implemented using Redux. Redux is a widely used library for state management that offers a reliable container for maintaining the application's state. It is designed to ensure consistent behavior across various environments, including client, server, and native platforms, and facilitates easy testing. Although it is commonly used as a state management tool with React, it can also be integrated with other JavaScript frameworks or libraries.

The application has undergone a refactoring process using the React-Redux package, which is the official package provided by Redux for enabling interaction between React components and the Redux store. It allows components to access specific parts of the state and dispatch actions to update the store. However, Redux is currently recommending and advocating for the use of their Redux Toolkit package. Consequently, some of the methods present in the React-Redux package are being deprecated, although they are not yet obsolete. An example of this is the createStore method, which is the primary method for initializing state in React-Redux. In future versions, the application will be transitioned to utilize the React Toolkit.


## Table of Contents:
- [Overview](#Overview)
- [The Challenge](#The-Challenge)
- [Usage Information](#Usage-Information)
- [Installation Process](#Installation-Process)
- [Built With](#Built-With)
- [What I Learned](#What-I-Learned)
- [Continued Development](#Continued-Development)
- [License](#License)
- [Author](#Author)

# Overview

## The Challenge

1. Refactor the front end code using redux.
2. Set up the Redux Store: Create a Redux store, which is responsible for managing the application state.
3. Create Reducers: Define reducers to specify how the state should change in response to actions.
4. Connect Redux to React Components: Use the react-redux library to connect Redux to your React components.
5. Access Redux State and Dispatch Actions: Use the connect function from react-redux to access the Redux state and dispatch actions from your components.
6. Deploy the application to Heroku.

## Assigned User Story:
```
AS a senior engineer working on an e-commerce platform
I WANT my platform to use Redux to manage global state instead of the Context API
SO THAT my website's state management is taken out of the React ecosystem
```

## Acceptance Criteria:
```
GIVEN an e-commerce platform that uses Redux to manage global state
WHEN I review the app’s store
THEN I find that the app uses a Redux store instead of the Context API
WHEN I review the way the React front end accesses the store
THEN I find that the app uses a Redux provider
WHEN I review the way the app determines changes to its global state
THEN I find that the app passes reducers to a Redux store instead of using the Context API
WHEN I review the way the app extracts state data from the store
THEN I find that the app uses Redux instead of the Context API
WHEN I review the way the app dispatches actions
THEN I find that the app uses Redux instead of the Context API 
```

## SJ Redux Store GIF:
#### The following animation demonstrates the application functionality:
![Application Gif](./assets/images/.gif)

## Usage Instructions:
To access application
1. Go to [Deployed Application Link:](https://) to access the application
2. Before logging in/setting up an account
    * Navigate through the products and categories
    * Add products to your cart
    * Click on the cart icon at the top right cornor
    * You will see the message that you need to be logged in before checking out
3. Log in or create an account (top right corner menu)
    * Click on the cart icon at the top right - you will see the checkout button.
    * Click on the checkout button, see the spinner, and you will be redirected to Stripe test
    *  Use: 
        1. credit card: 4242 4242 4242 4242 
        2. expiry: any date after today's date
        3. any 3 digit CVV
4. Place the order - once processed, you will be redirected back to the site
5. You can view your past orders in the order history section

## Deployed GitHub-Pages Application Link:
[Deployed GitHub-Pages Application Link:](https://)

## GitHub Repository:
[GitHub Repository:](https://github.com/sonam-git/SJ_Redux_Store)


## Application Screenshot:
* Rendering Product:

![](./assets/images/)


## Installation Process:
1. Clone the Repository from GitHub (or) Download Zip Folder from Repository from GitHub.
2. Open the cloned (or downloaded) repository in any source code editor.
3. Open the integrated terminal of the document and complete the respective installation guides provided in "Built With" to ensure the cloned documentation will operate.

## Built With:
- Dynamic JavaScript
- JSON: [JSON](https://www.npmjs.com/package/json)
- Mongoose: [7.0.3](https://www.npmjs.com/package/mongoose)
- Express: [4.18.2](https://www.npmjs.com/package/express)
- Node.js: [16.18.1](https://nodejs.org/en/blog/release/v16.18.1/)
- MongoDB: [Website](https://www.mongodb.com/)
- Nodemon: [2.0.12](https://www.npmjs.com/package/nodemon/v/2.0.12)
- GraphQL: [16.6.0](https://www.npmjs.com/package/graphql)
- JsonWebToken: [9.0.0](https://www.npmjs.com/package/jsonwebtoken)
- React: [18.2.0](https://www.npmjs.com/package/react)
- React-Dom: [18.2.0](https://www.npmjs.com/package/react-dom)
- JWT: [9.0.0](https://jwt.io)
- Heroku: [Website](https://www.heroku.com/platform)
- License Badge: [Shields.io](https://shields.io/)
- Visual Studio Code: [Website](https://code.visualstudio.com/)

## What I Learned:
According to the official documentation at https://redux.js.org/ Redux:
- helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test.
- centralizes the application's state and logic enables powerful capabilities like undo/redo, state persistence, and much more.
- provides DevTools to make it easy to trace when, where, why, and how your application's state changed. Redux's architecture lets you log changes, use "time-travel debugging", and even send complete error reports to a server.
- works with any UI layer, and has a large ecosystem of addons to fit your needs. 

### Continued Development:
1. Create a dedicated "store owner" area that allows the owner to perform various actions related to product management in the catalog, such as adding, updating, and deleting products.
2. Provide a feature for the owner to conveniently view and manage new orders received by the store.
3. Implement functionality that enables the printing of shipping labels for the store's orders, streamlining the fulfillment process.
4. Develop a reporting system that generates printable reports, providing the owner with valuable insights into the store's performance and key metrics.
5. Incorporate a sales tax calculator into the checkout process, allowing the owner to configure and apply applicable taxes to customer purchases accurately.


## License & Copyright ©

```md
Any individual who obtains a copy of the software and its associated documentation files (referred to as the "Software") is granted permission, without any cost, to use, copy, modify, merge, publish, distribute, sublicense, and/or sell the Software. There are no restrictions on dealing with the Software, including the aforementioned rights. This permission is also extended to those individuals to whom the Software is provided. However, it is essential that the copyright notice and this permission notice are included in all copies or significant portions of the Software.

The Software is provided on an "as is" basis, without any warranty of any kind, whether expressed or implied. This includes, but is not limited to, warranties of merchantability, fitness for a particular purpose, and non-infringement. Under no circumstances shall the authors or copyright holders be held liable for any claim, damages, or other liabilities arising from the use of the Software, regardless of whether it is an action of contract, tort, or any other legal theory.

In summary, this permission grants the freedom to use, modify, distribute, and sell the Software without charge. However, it is crucial to include the copyright notice and permission statement when distributing the Software. It is also important to note that the Software is provided without warranties, and the authors or copyright holders bear no responsibility for any claims or damages that may arise from its use.
```
  
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) 


## Author

Follow me on Github at [Sonam J Sherpa](https://github.com/sonam-git). Additional questions or concerns? feel free to contact me [Sonam J Sherpa](sherpa.sjs@gmail.com).

### Copyright © 2023 [Sonam J Sherpa](https://github.com/sonam-git)

