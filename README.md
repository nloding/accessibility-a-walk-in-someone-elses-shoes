# Accessibility: A Walk in Someone Else’s Shoes

##### A workshop to experience first hand why accessibility is necessary and important.

## Abstract

Everyone talks about accessibility - or a11y - but how often is accessibility a primary thought during your development pipeline? How often is accessibility taken for granted? It’s easy to push it aside and say you’ll do it later or to forget entirely. It’s easy to drop a couple WIA-ARIA tags into your HTML and move on, but this doesn’t address many accessibility needs. When was the last time you used your website with your eyes closed?

Let’s do just that. Let’s try to navigate a website with a blindfold on. Let’s try to use a website without a mouse. Let’s try navigating a website with a visual impairment. And then let’s fix the problems encountered.

We will focus on experiencing website with two types of impairments:
* Visual impairments, such as color blindness, low visual acuity, and a complete lack of vision
* Mobility impairments, preventing users from using a mouse for input

These impairments are quite common and are simple to simulate using a combination of browser extensions and existing tools in your operating system. For each impairment, we will look at how the markup (both the semantic structure and the attributes), the colors and contrast, tab order, and focus affect the experience. And for each issue we encounter, we will look at specific ways that experience can be improved.

Last, we will look at testing strategies to audit your code for potential accessibility issues, using extensions such as Google’s Lighthouse, Deque’s axe-engine, and others.

#### W3C Before and After Demo

The `w3c-bad` folder is a direct copy of the [W3C Before and After Demostration](https://www.w3.org/WAI/demos/bad/Overview.html). The majority of the exercises in this workshop follow this demostration. Each exercise folder is a slightly customized version of this demo. The entire demo itself is provided without alteration in the `w3c-bad` folder.

## Requirements

* This repository
* Google Chrome (latest)
* [ChromeLens extension](https://chrome.google.com/webstore/detail/chromelens/idikgljglpfilbhaboonnpnnincjhjkd "ChromeLens")
* A screen reader that works with Chrome, like [ChromeVox](http://www.chromevox.com/installing.html "ChromeVox")

#### Optional

* A blindfold
* Headphones (for the screen reader)
* [WAVE Evaluation Tool extension](https://chrome.google.com/webstore/detail/wave-evaluation-tool/jbbplnpkjmmeebjpijfedlgcdilocofh "WAVE Evaluation Tool")
* [axe extension](https://chrome.google.com/webstore/detail/axe/lhdoppojpmngadmnindnejefpokejbdd "axe")
* NodeJS, with packages in repository installed (`npm install` or `yarn`)

#### Slide Deck

The slide deck is built using [mdx-deck](https://github.com/jxnblk/mdx-deck). If you want to run the slides from this talk:

* Run `npm install` or `yarn` to install the dependencies
* Run `npm start` or `yarn start` to launch the deck
* Run `npm run build` or `yarn run build` to build a PDF of the slides

## Exercises

Each exercise is atomic, you can do each exercise on its own or in any order.

#### Exercise 01: No Vision

##### Requirements

* A blindfold
* Headphones
* A screen reader that works with Chrome, like [ChromeVox](http://www.chromevox.com/installing.html "ChromeVox")

##### Steps

1. Open `01-no_vison/inaccessible.html` in your browser, _and try not to look at the page_
2. Turn on your screen reader
3. Cover your eyes with the blindfold, or otherwise obstruct the screen
4. Attempt to navigate the page

##### Questions


