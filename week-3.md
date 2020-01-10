# Week 3

> Any sufficiently advanced technology is indistinguishable from magic.
>
> — Arthur C. Clarke


[![][inspiration-cover]][inspiration-link]

> `dog-ceo-api` by [**@ElliottLandsborough**][inspiration-author].

## Table of Contents

*  [Slides](#slides)
*  [Theory](#theory)
*  [Playground](#playground)
*  [Assignments](#assignments)
*  [Hand in](#hand-in)

## Slides
* Lecture-3
* Lab-3

## Theory

Before you start you'll probably want to read a bit about **HTTP,** **Request methods,** and **Middleware**. We'll cover this in the lecture but make sure you fully understand these concept, the resources below can help.

*  [`httpstatuses.com`](https://httpstatuses.com)
*  [Using middleware in Express.js](https://expressjs.com/en/guide/using-middleware.html)

## Playground



## Assignments

### Input

![Input banner](/assets/banners/input.jpg)
> Learn receiving input from users and manipulating that data for your own feature using HTTP request methods.


#### Synopsis

*  **Time**: 9:00h
*  **Goals**: subgoal 3, subgoal 4
*  **Due**: before week 4

#### Description
Take ± 9 hours to build out a feature were you'll receive **user input** and manipulate the incoming data. This is quite a vague assignment since the end result will be specific to your Job Story. Make sure you at least spend the alloted hours on this. 

Think about the _movie example_ from the lecture.

*   You can make users fill in a form or upload images
*   Add new users to an overview list of people
*   Make users enter their hobbies and interests
*   Etc.

There are roughly 3 ways to send data from the client to the serve: 1) using query parameters 2) fetch from the client to the server 3) use HTTP request methods on a form. When you make an HTTP request, a response comse back. You'll want the body of the response.

1. You can use query and parameters from the previous to start but you'll probably want to use `HTTP request methods` such as `post` or `delete`. Do you need a `form` for this?
2. There are several packages from NPM that make working with data coming in from request (`req.body`) easier.
   * [`body-parser`][body] parse incoming request bodies
   * [`multer`][multer] handles `multipart/form-data` use this for file uploads.
3. Start with _receiving input_ (`post`) and temporarily store it on the server (we'll cover storing that to a database next week). Then build from there, such as deleting (`delete`) or let the user edit (`update`).
4. If you have received the data server-side can you send it back to the client again so the user can see? You'll need to `re-render the template` and add _`'inject the data'`_ from the user dynamically into the template.


**Tips:**
* Commit your work early and often. Push your work to GitHub. Don’t worry if it’s not perfect. Try and get as far as you can.
* Start small. Start with one input field and try to make it work. You can then create more fields or types when you have time.

## Hand-in

1. **Push your changes:**  
Hand in your progess in your repository on GitHub under your username.

1. **Create an issue:**  
Mark this assignment as complete by opening an issue on our [GitHub issue tracker][issues]. Fill in the issue template with the correct information. Include what you did in the description of the issue.

1. **Feedback:**  
Let us know what you thought of the homework, what part you spend a lot of time on and give us any feedback. Your project will be reviewed and receive feedback, so expect people to read it, and be ready for tips and tops!

[inspiration-cover]: assets/images/dog-ceo.png
[inspiration-link]: https://dog.ceo
[inspiration-author]: https://github.com/ElliottLandsborough


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
