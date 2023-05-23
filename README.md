# Communiverse Connect

## Description
Social network application that allows a community of users to build a space, share and communicate ideas and network.


## Table of Contents
* [Technology Used](#technology-used)
* [Usage](#usage)
* [Credits](#credits)
* [License](#License)


## Technology Used
* [Git](https://git-scm.com/)
* [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [Express](https://expressjs.com/)
* [NodeJS](https://nodejs.org/en)
* [MongoDB](https://www.mongodb.com/)
* [Mongoose](https://mongoosejs.com/)
* [Insomonia](https://insomnia.rest/)


## Usage
A connection will need o be established to MongoDB database using Mongoose:  

```const { connect, connection } = require('mongoose');

const connectionString =
  process.env.MONGODB_URI || 'mongodb://localhost:27017/communiverseDB'; 
  
connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
```  


In the terminal, run node server.js and to set up the database connection on the specified port.

![port](/assets/1.png)  

Within the app, navigation is to allow for several categories and actions in each.

* User
  - Get All Users
  - Get a user by ID
  - Create a User (and successive users after that)
  - Update a User
  - Delete a User
* Thought
  - Get All Thoughts
  - Create a Thought
  - Update a Thought
  - Delete a Thought
* Friend
  - Add and Delete a friend
* Reaction
  - Add and Delete a reaction


![insomnia](/assets/2.png) 



[Video link](https://app.screencast.com/xi5A0N6PrZ0Jk)


## Credits
* [Mongoose - Validation](https://mongoosejs.com/docs/validation.html)
* [Mongoose - Email Validation](https://iqcode.com/code/javascript/email-validation-in-mongoose)
* [Mongoose - Schemas](https://mongoosejs.com/docs/guide.html#definition)
* [Mongoose - Queries](https://mongoosejs.com/docs/queries.html)
* [DayJS](https://www.skypack.dev/view/dayjs)


## License
[MIT](https://opensource.org/license/mit/) License


## Author Info
K. Kitenge
* [Github](https://github.com/KKitenge)