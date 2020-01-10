# Week 4

> An SSL error has occurred and a secure connection to the server
> cannot be made.
>
> — [William Shakespeare][quote-author]


[![][inspiration-cover]][inspiration-link]

> [`qw3rtman/git-fire`][inspiration-link] by
> [**@qw3rtman**][inspiration-author].

## Table of Contents

*  [Slides](#slides)
*  [Theory](#theory)
*  [Playground](#playground)
*  [Assignments](#assignments)
*  [Hand in](#hand-in)

## Slides
* Lecture-4
* Lab-4

## Theory

Before you start you'll probably want to read a bit about **Databases,** **JSON,** and **MongoDB**. We'll cover this in the lecture but make sure you fully understand these concept, the resources below can help.

*  [learnouMongo workshopper (exercise)](https://github.com/evanlucas/learnyoumongo)

## Playground
Take about 1h to investigate the different types of database. What databases are out there, and how can they be categorised? Why do you think we picked `MongoDB`?

* What databases type are there? (SQL, NoSQL?)
* How do databases compare to each other in features, popularity, funding, ease of use, or other factors?
* Which of those factors do or do not matter to you? How important is speed or tooling?


## Assignments

### Connect

![Connect banner](/assets/banners/connect.jpg)
> Set-up your database connection and run it locally or remote

#### Synopsis

*  **Time**: 2:00h
*  **Goals**: subgoal 4
*  **Due**: before week 4

#### Description
All of your data is going to be stored in MongoDB. Take ± 2 hours to set-up your database and connect to it. You basically have two options: go with a database as a service [DBaaS](https://www.mongodb.com/cloud/atlas) or use [MongoDB locally](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/).

**Local**  
_When you are running locally, make sure you create a folder for MongoDB to store data and specify this path when starting `mongod`._

You can store this `./data` folder inside of your repository but make sure to put it in your `.gitignore`.

```
mongod --dbpath <path to data directory>
```

**DBaaS**  
An even better solution is to use a _database as a service_. Instead of having the database stored locally on your laptop, it saves your data to _the cloud_. [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) is a great option since they offer a free plan for prototypes. These are not meant to be used in production.

**Sensitive information**  
> Store sensitive information such as your database URI, password and username in a `.env` using the [`dotenv`](https://www.npmjs.com/package/dotenv) package. Make sure you add the file to your `.gitignore`. If you commit your environment variables it's hard to undo!

### Storage

![Storage banner](/assets/banners/storage.jpg)
> Store user input in a MongoDB database instead of the server!

#### Synopsis

*  **Time**: 4:00h
*  **Goals**: subgoal 4
*  **Due**: before week 5

#### Description
You probably have gathered data from the client to the server but what happens when you quit the server? You lose all your data. A database will permanently store the data for you. How you store

1. Think about how you are going to store the data. Every piece of data needs a `type`. e.g.
   * Likes can be stored as `true` or `false`
   * Are telephone numbers typeof `number` or are they strings?
2. It's helpful to draw the structure of your database. We ask you to include a diagram in your readme that explains what the structure is like (**hint**: [Google Drawings][drawings]).
3. Start small. Don't try to store everything into the database at once.

**Tips**  
* You can use the [`mongodb`](https://www.npmjs.com/package/mongodb) package inside node to interface with your database.
* Additionally you can use [`mongoose`](https://www.npmjs.com/package/mongoose) it makes it a bit easier to model and your database.
* You can use a [MongoDB GUI](https://www.mongodb.com/products/compass) to see and manipulate your data with a handy User Inerface.


### Session
![Session banner](/assets/banners/session.jpg)
> Store user input in a MongoDB database instead of the server!

#### Synopsis
*  **Time**: 2:00h
*  **Goals**: subgoal 4
*  **Due**: before week 5

#### Description
There is no way to know if this request comes from a client that already performed a request previously. You can use session middleware `express-session` to store session data on the server. Ever wondered how webshops remembered what's in your shopping cart even when you're not logged in? That's session at work!

Why would you want to store something in a session? 

* If you want to keep a user logged in when they refresh the page.
* If a user has different roles on the website, like super users or a paid account.

Implement user sessions in your application.

1. Use `express-session` as middleware. Set-up cookies and the session ID's [following the documation][session].
2. Render a custom view using your `templating engine`. Your templating engine probably has conditionals to show custom views or partials based on the current session.

**Additional resources**  
* [Express Sessions](https://flaviocopes.com/express-sessions/)

## Hand-in

1. **Push your changes:**  
Hand in your progess in your repository on GitHub under your username.

1. **Create an issue:**  
Mark this assignment as complete by opening an issue on our [GitHub issue tracker][issues]. Fill in the issue template with the correct information. Include what you did in the description of the issue.

1. **Feedback:**  
Let us know what you thought of the homework, what part you spend a lot of time on and give us any feedback. Your project will be reviewed and receive feedback, so expect people to read it, and be ready for tips and tops!

[quote-author]: https://twitter.com/shatterfront/status/816065700577972224
[inspiration-cover]: assets/images/git-fire.jpg
[inspiration-link]: https://github.com/qw3rtman/git-fire
[inspiration-author]: https://github.com/qw3rtman

[pug]: https://pugjs.org/api/getting-started.html
[ejs]: https://ejs.co/
[handlebars]: https://handlebarsjs.com/
[guide]: https://expressjs.com/en/guide/routing.html
[workshopper]: https://github.com/azat-co/expressworks
[query]: https://www.youtube.com/watch?v=zDovsTG2a7g
[template]: https://expressjs.com/en/guide/using-template-engines.html
[issues]: https://github.com/cmda-bt/be-course-18-19/issues/new/choose

[body]: https://www.npmjs.com/package/body-parser
[multer]: https://www.npmjs.com/package/multer#readme
[drawings]: https://docs.google.com/drawings
[session]: https://github.com/expressjs/session
