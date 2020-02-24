# Week 2

> Roses are red\
> Violets are blue\
> Unexpected `{` on line 32
>
> — [@kvlly](https://twitter.com/kvlly/status/959827106384490496)

[![][inspiration-cover]][inspiration-link]

> HTTP cat by [**@girlie_mac**][inspiration-author].

## Table of Contents

*  [Slides](#slides)
*  [Theory](#theory)
*  [Playground](#playground)
*  [Assignments](#assignments)
*  [Hand in](#hand-in)

## Slides
* [Lecture-2][lec2]
* [Lab-2][lab2]

## Playground
Before you start you'll probably want to read a bit about **Express,** **routing,** and **templating**. We'll cover this in the lecture but make sure you fully understand these concept, the resources below can help. You can do these exercises before you start working on the assignments to get comfortable with the topics covered in class. 

* [Express.js (workshopper)][workshopper]
* [Frontend vs Backend (article)][back-end]
* [Unfurl (tool)][unfurl]

[🎦 _Watch a video_ about request and response.][videorequest]

## Assignments

### Query

![Query banner ](/assets/banners/query.jpg)
> Learn about URLS, query's and parameters to do some advanced (dynamic) routing.

#### Synopsis

*  **Time**: 3:00h
*  **Goals**: subgoal 2, subgoal 3
*  **Due**: before week 3

#### Description
You can determine how an application’s endpoints (URIs) respond to client requests, you already created routes but you can create more endpoints.

1. Try out some different `route paths` to send different file types when a user goes to a specific route.
   * Not sure where to start? If somebody goes to `/mp3` you can send an mp3 file instead of a html page.
2. See if you can enter different parameters in the URL and retrieve (log) those `route parameters` to the server.

**Additional resources**
* [Express.js Routing](https://expressjs.com/en/guide/routing.html)

### Templating
![Templating Banner](/assets/banners/templating.jpg)

> Learn how to use a templating engine to dynamically render data and create components and partials for your application

#### Synopsis

*  **Time**: 6:00h
*  **Goals**: subgoal 2, subgoal 3
*  **Due**: before week 3

#### Description
1. Try out a couple of templating engines such as [`pug`][pug], [`ejs`][ejs] or [`handlebars`][handlebars]. Pick one with your team and install it in your project. 
   
2. Then, instead of responding with `html` files (previous week) **create views and try to render a page** using the templating engine.

3. Render **dynamic data** using your templating engine. 
   * Not sure where to start? You can store an array or object on the server and _inject_ the data into the view.
  
3. Explore features of the templating engine. Many templating engine have:
   * `includes`; insert contents of files into another.
   * `conditionals`; if statements
   * `mixins`; create reusable blocks of html

4. Create different partials and lay-outs (includes) for components of your page e.g. header, footer or a form.

**Ask yourself upon completion:**
* How does express combine the data from the server with the templating?
* How do partials work? Can you set-up a folder structure for your component system?

**Additional resources**
* [Using template engines with Express][template]

## Hand-in

1. **Push your changes:**  
Hand in your progess in your repository on GitHub under your username.

1. **Create an issue:**  
Mark this assignment as complete by opening an issue on our [GitHub issue tracker][issues]. Fill in the issue template with the correct information. Include what you did in the description of the issue.

1. **Feedback:**  
Let us know what you thought of the homework, what part you spend a lot of time on and give us any feedback. Your project will be reviewed and receive feedback, so expect people to read it, and be ready for tips and tops!

[inspiration-cover]: https://http.cat/403
[inspiration-link]: https://http.cat
[inspiration-author]: https://twitter.com/girlie_mac

[pug]: https://pugjs.org/api/getting-started.html
[ejs]: https://ejs.co/
[handlebars]: https://handlebarsjs.com/
[guide]: https://expressjs.com/en/guide/routing.html
[workshopper]: https://github.com/azat-co/expressworks
[query]: https://www.youtube.com/watch?v=zDovsTG2a7g
[template]: https://expressjs.com/en/guide/using-template-engines.html
[issues]: https://github.com/cmda-bt/be-course-18-19/issues/new/choose

[unfurl]: https://dfir.blog/unfurl/
[back-end]: https://zellwk.com/blog/frontend-vs-backend/
[videorequest]: https://www.youtube.com/watch?v=IRQd5DZRRvg

[lec2]: https://docs.google.com/presentation/d/1DpbojQMJQzRtl9aN74uQmEfLufCAeCDgEzV1-5oue04/edit?usp=sharing
[lab2]: https://docs.google.com/presentation/d/1DM7uDHM47PPvr3qjULJF-9qeP8StxW-BS8sSZWMLzYQ/edit?usp=sharing
