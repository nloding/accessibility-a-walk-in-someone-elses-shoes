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

## Requirements

* This repository
* Node, with NPM or Yarn ([download here](https://nodejs.org/ "NodeJS"))
* NodeJS, with packages in repository installed (`npm install` or `yarn`)
* Google Chrome (latest)
* [ChromeLens extension](https://chrome.google.com/webstore/detail/chromelens/idikgljglpfilbhaboonnpnnincjhjkd "ChromeLens")
* A screen reader that works with Chrome:
  * [Chrome Screen Reader Extension](https://chrome.google.com/webstore/detail/screen-reader/kgejglhpjiefppelpmljglcjbhoiplfn?hl=en-GB "Chrome Screen Reader")
  * NVDA
  * JAWS
  * Microsoft Narrator
  * Apple VoiceOver

*Note:* You can use a different browser if you prefer. You will need to find an extension similar to ChromeLens for whichever browser you prefer. The optional extensions below will work for all major browsers. You may also use any screen reader software you prefer; the examples will be done with Chrome Screen Reader but any will work.

#### Optional

* A blindfold
* Headphones (for the screen reader)
* [WAVE Evaluation Tool extension](https://chrome.google.com/webstore/detail/wave-evaluation-tool/jbbplnpkjmmeebjpijfedlgcdilocofh "WAVE Evaluation Tool")
* [axe DevTools extension](https://chrome.google.com/webstore/detail/axe-devtools-web-accessib/lhdoppojpmngadmnindnejefpokejbdd?hl=en-GB "axe DevTools")

#### Slide Deck

The slide deck is built using [mdx-deck](https://github.com/jxnblk/mdx-deck). If you want to run the slides from this talk:

* Run `npm install` or `yarn` to install the dependencies
* Run `npm run slides` or `yarn run slides` to launch the deck
* Run `npm run build` or `yarn run build` to build a PDF of the slides

## Exercises

Each exercise is atomic, you can do each exercise on its own or in any order. In order to use many Chrome extensions, including ChromeLens, you must be opening
pages off a web server. A simple Node/Express static file server is provided to do the exercises. First, you must start the server by running `npm start` or
`yarn start` then opening `http://localhost:3000` in your browser. You should see an extremely simple landing page with links to the exercises.

#### Exercise 01: No Vision

##### Requirements

* A blindfold
* Headphones
* A screen reader that works with Chrome, like [Chrome Screen Reader Extension](https://chrome.google.com/webstore/detail/screen-reader/kgejglhpjiefppelpmljglcjbhoiplfn?hl=en-GB "Chrome Screen Reader")

##### Steps

1. Open `Exercise 01: No Vision` in your browser, _and try not to look at the page_
2. Turn on your screen reader
3. Cover your eyes with the blindfold, or otherwise obstruct the screen
4. Attempt to navigate the page

##### Questions

* Were you able to identify all the form elements, in a meaningful way?
* Were you able to identify what each link and button element was for?
* Did the page move around logically?

#### Exercise 02: Low Vision

##### Requirements

* [ChromeLens extension](https://chrome.google.com/webstore/detail/chromelens/idikgljglpfilbhaboonnpnnincjhjkd "ChromeLens")

##### Steps

1. Open `Exercise 02: Low Vision` in your browser, _and try not to look at the page_
2. Open the Chrome Dev Tools
3. Open the "ChromeLens" dev tool tab
4. Check the box for "Enable Lens"
5. Start with "Partial Blindness (medium)"
6. Attempt to navigate the page
7. Repeat with different vision impairments, such as "Protanopia (red-blind)" and "Tritanopia (blue-blind)"

##### Questions

* Were you able to identify what elements has focus?
* Were you able to distinguish between the elements on the graph?
* Were you able to identify *at a glance* whether the alert above the form was informational or an error?

#### Exercise 03: Mobility Impairment

##### Requirements

* If you have an external mouse, disconnect it!
* If you are using a trackpad ... pretend it's not there!

##### Steps

1. Open `Exercise 03: Mobility Impairment` in your browser, _and try not to look at the page_
2. Attempt to navigate the page _without using your mouse/trackpad_

##### Questions

* Were you able to identify what elements has focus?
* Did the page move around logically?
* Were there significant differences in navigating the page with your eyes open and no mouse compared to
`Exercise 01: No Vision`?
