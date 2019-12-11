# ![Backend - Grading][banner]

## Table of Contents

*   [Grade](#grade)
*   [Goals](#goals)
*   [Assessments](#assesments)
*   [Publishing](#publishing)
*   [Plagiarism](#plagiarism)

## Grade

| Task                                |   Weight |
| ----------------------------------  | -------: |
| [Assessment 1][a1] (individual)        |      60% |
| [Assessment 2][a2] (team)            |      40% |
| **Total**                           | **100%** |


```js
if (!a1 && !a2) {
  grade = 'GR'
} else if (a1 < 5.5 || a2 < 5.5) {
  grade = 1
} else {
  grade = (a1 * 0.6) + (a2 * 0.4)
}
```

## Goals
* [Learning goals][goals]
* [Sub goals][goals]

## Assessments

### A1 - Individual
This is an *oral test* where you individually present the **feature you created** for back-end. You will answer questions in such a way as to demonstrate sufficient knowledge of our goals.

> [Rubric of assessment 1][a1]

### A2 - Team
This is an *oral test* where you **present your prototype with your team**. You will show how you contributed to the project and explain if you reached your own goals you've set at the beginning of the project.

> [Rubric of assessment 2][a2]


## Publishing
Grades will be published and communicated trough _Email_ and/or _Slack_. We also publish grade lists on _Brightspace_ based on student numbers.

* Final grades will be **published** ~_one week_ after test date.
* Final grades will be put in **SIS** ~_two weeks_ after test date.

> After the oral test you can request **viewing time** for additional feedback, this can be useful for a resit. Feel free to [contact your lecturer trough _Slack_](/readme#synopsis) if you want to do so.

## Plagiarism

💁  We don’t like plagiarism and report it to our assessment committee
([examencommissie](https://moodle.cmd.hva.nl/mod/page/view.php?id=1738) in Dutch). See ¶ 6.1.2 of Teaching and Examination
Regulations (TER) 2017-2018 (in Dutch: Onderwijs- en examenregeling, OER) for
a full definition, but here are a few cases that count as plagiarism:

> a. using or copying someone else’s texts, data or ideas without a full and
> correct acknowledgement of sources;
> b. presenting the structure or central ideas developed by someone else as
> your own work or ideas, even when a reference to other authors has been
> included;
>
> \[…]
>
> e. copying (parts of) media files or other sources, software source codes,
> models and other diagrams of other people without acknowledgement and
> allowing it to be held as your own work;
>
> \[…]
>
> g. copying the work of fellow-students and allowing it to be held as your
> own work;
>
> \[…]

You are not allowed to simply use portions of someone else's work in your project. The copyright is owned by the creator of the work. You must cite the sources used. Quoting or using material without a source citation is plagiarism and is punishable. More information on the [Student Copyright Information Point](https://www.amsterdamuas.com/library/services/copyright/students.html)

The manner in which you cite your sources depends. The most widely used style at the AUAS is [APA](https://www.amsterdamuas.com/library/services/acknowledging-sources/apa-style/apa-style.html) of the American Psychological Association. Make sure you cite your sources in the repository, code comments or documentation of your project on GitHub.

[a1]: assesments/a1.md
[a2]: assesments/a2.md
[banner]: https://cmda-bt.github.io/be-course-18-19/assets/banner-grading.svg
[grading]: grading.md
[goals]: https://github.com/cmda-bt/be-course-18-19#goals
