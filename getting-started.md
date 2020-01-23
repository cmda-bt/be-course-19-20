# ![Backend - Getting Started][banner-guide]

## Table of Contents

*   [Prerequisites](#prerequisites)
*   [Installation](#installation)
*   [Communication](#communication)
*   [Waiver](#waiver)
*   [Introduction](#introduction)

## Prerequisites

> Throughout this course there are additional video's that further explain important topics from lectures but also show you how to install certain technology. Look for a 🎦 emoji!

### Text Editor
If you don’t have one yet, install a text editor. It doesn't really matter which one you pick, as long as you feel comfortable using it. However, we do recommend moving away from [Brackets](http://brackets.io/), other editors offer better customizability. [Atom](https://atom.io), [Sublime](https://www.sublimetext.com) and [VSCode](https://code.visualstudio.com/) are good choices. 

[🎦 _Watch a video_ on how to install Text Editors.][videotext]

> Be ware that lecturers may not be able to help you with problems in some editors.

### GitHub

If you haven’t already, [sign up for
GitHub](https://help.github.com/articles/signing-up-for-a-new-github-account/).

Take some time to set up your [GitHub profile](https://github.com/settings/profile).
Include your name, a profile picture, and a URL to your homepage. Teachers will appreciate it if you upload a representing profile and pick a username that closely resembles your real name. Silly pictures are allowed 🤪

You’re allowed to stay anonymous online for this course by omitting sensitive information, but a good looking GitHub profile can help you get an internship or job later. 

[🎦 _Watch a video_ on how this GitHub organisation works.][videoorg]

### Brightspace

We use our DLO Brightspace for schedulers and rubric feedback. Make sure you enroll to the **Back-end Development** course, you can do so by using the [HvA courseselector][course]. It's important to select the right class for teachers to give you feedback and grades. If you're not sure, ask your teacher to see if you are on the correct _classlist_.

## Installation

### CLI

*Windows:*  
If you’re on Windows, you should upgrade to _Windows 10 (1903)_ and install the Windows Subsystem for Linux using [this guide](https://www.howtogeek.com/249966/how-to-install-and-use-the-linux-bash-shell-on-windows-10/) ([or video](https://www.youtube.com/watch?v=Cvrqmq9A3tA))
. Follow it until you see “Installation successful”. Additionally you can install the [Windows Terminal][terminal] and switch to using WSL.

> Be ware that lecturers may not be able to help you with specific problems on Windows.

*MacOS:*  
Apple already has a terminal emulator by default to provide a command line interface. Just search for `terminal` in **spotlight** or find it in your applications folder. 

> There are other command-line interfaces out there. [Hyper](https://hyper.is/) and [iTerm](https://iterm2.com/) are very popular as well. 

### Git

*Windows:*  
If you installed the [Windows Subsystem for Linux](#subshell) just now, install Git by running `apt-get install git` in Bash.

*MacOS:*  
Install Git from their website, by [downloading the latest release](https://git-scm.com).

Connect Git and GitHub together inside of the **terminal** like so:

```sh
git config --global user.name "Mona Lisa"
git config --global user.email "mona@lisa.com"
```

Use the same email for Git as you used to sign up for GitHub.

[🎦 _Watch a video_ on how to install git.][videogit]

### Node

Open your **terminal**, and install [nvm](https://github.com/creationix/nvm) like
so:

```sh
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh | bash
```

You can check if `nvm` correctly installed by typing:
```sh
nvm --version # Should print a version number
```

Close and re-open your terminal and now run the following:

```sh
nvm install stable
```

Node is now installed (and npm with it).  You can check it by running:

```sh
node -v # Should print 9.4.0 (or a higher version)
npm -v # Something like 5.6.0 (or a higher version)
```

[🎦 _Watch a video_ on how to install Node.][videonode]

You can use **nvm** to update Node in the future.  npm can update itself
(`npm install -g npm`).

> You might encouter an [`eaccess`][eacces] problem if you installed Node using the [installer][installer]. We do not recommend using a Node installer but the Node version manager (nvm) as stated above, since the Node installation process installs npm in a directory with local permissions and can cause permissions errors when you run npm packages globally.

## MongoDB

Follow the [official manual](https://docs.mongodb.com/manual/administration/install-community/) for installation on macOS and Windows. 

Check your installation and version with:

```sh
mongod --version # Should print 3.6 (or a higher version)
```

## Communication

### Slack

Sign up for our Slack workspace on `cmda-tech.slack.com`. Join the `#backend` channel in our workspace. Get your Slack set up properly, add your  **real name**, **class**, and **GitHub username**. We’ll use this info to link your GitHub and Slack to our administration files.

> If you have technical questions feel free to ask them in Slack but keep the following in mind:
> * Don't use screenshots but link to specific files or snippets in your repo.
> * Accurately describe your problem and let teachers know which solutions you've  already tried.
> * Ask questions in the `slackoverflow` channel instead of direct messaging teachers. Other students might have encountered the same problem and found a solution. 

[🎦 _Watch a video_ on how to ask questions][videoask]

## Waiver

We’d like to use your work as examples for other students and want to inform you about our Code of Conduct for this course. We enforce our Code of Conduct throughout GitHub but also on our Slack. Do you consent to allow your homework to appear online and did you read our Code of Conduct? 

→ [Google Form waiver](https://forms.gle/UeD9u8zyqhUqeAsV8)


## Introduction
Wow, you did it! Virtual high five! 🖐 Now you can introduce yourself to your teacher and class. Open an issue on our [GitHub issue tracker][issues]. You can pick what are called `issue templates`. Pick the `Introduction` template and fill in the details, then submit.

> 🚨 Make sure you never publicly share you name and student number in combination!

Each assignment has a different template in which you can hand in your assignments for that week. This is also the place where teachers and student-assistants will give you feedback. You can use [GitHub notifications][notifications] (bell on the top right of the GitHub website) to keep track of changes.


[moodle]: https://moodle.cmd.hva.nl/course/index.php?categoryid=92
[examples]: examples
[stackoverflow]: https://stackoverflow.com
[duckduckgo]: https://duckduckgo.com
[synopsis]: #synopsis
[slack]: https://cmda-tech.slack.com/
[banner-guide]: https://cmda-bt.github.io/be-course-19-20/assets/banner-guide.svg
[installer]: https://docs.npmjs.com/downloading-and-installing-node-js-and-npm
[eacces]: https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally
[issues]: https://github.com/cmda-bt/be-course-19-20/issues/new/choose
[terminal]: https://github.com/microsoft/terminal
[notifications]: https://help.github.com/en/github/managing-subscriptions-and-notifications-on-github/configuring-notifications
[course]: https://courseselector.mijnhva.nl/nl#/CourseSelector/78076118-8f51-e911-a82e-000d3a29a761/2019-2020

[videogit]: https://youtu.be/H51V_-HaR3Y
[videonode]: https://www.youtube.com/watch?v=ftmJOkHFm1c
[videotext]: https://www.youtube.com/watch?v=eP78IB5N7ZM
[videoorg]: https://www.youtube.com/watch?v=MHX-uFQMevQ
[videoask]: https://www.youtube.com/watch?v=0tdIe73ky-4
