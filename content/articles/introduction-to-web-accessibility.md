---
title: "Introduction to Assistive Technology"
description: "If you wear glasses, can you take them out? How does the world looks like? Do you think you could live your life the same way without them? "
category: a11y
draft: false
---

## Assistive Technology

In case you wear glasses, can you take them out? How does the world looks like? Do you think you could live your life the same way without them? 

If you have a car, you'd probably have to sell it, rely on public transportation and other people giving you a ride. If you have farsightedness, it's possible that would not be able to work properly in a computer or even use your cellphone similarly.

Affordable glasses have made a lot of things possible for millions of visually impaired people around the globe. It had **created access** for us to unaccountable amount of tasks that otherwise would be difficult or impossible to make.

The above is just an example of how important Assistive Technology (AC) is. Now, there are a few assistive technologies to keep in mind while developing for the web. Some of them you may know very well.

## Screen Readers

When we think about web accessibility, the screen reader is probably the first thing that comes to mind. That's because it's a assistive technology that developers has least contact with and the one that scares and confuses us the most.

<div class="image-wrapper" style="--lg-width: 40%">
  <img src="/assistive-tech.svg" alt="A screen reader reading the content of webpage in a cellphone"/>
</div>

It's a common misconception that screen readers are used by the totally blind only. Other folks that use it can have low vision or cognitive disabilities - people that have difficulty to process textual information and like to have those texts read to them.

### But how does this work?

The screen reader goes through your page structure, systematically reading each block as demanded. The user can perceive the layout of the page by navigation through **regions**. For example, the layout of this blog consists in a header with a navigation and search inside, followed by the main content with the heading levels and finally, the footer. 

It does a good overview of the layout of the page because I have used the right HTML5 tags and roles. These regions like the *navigation* and *search* are called **landmarks** - places where the user expects to find a certain type of content in there, like the *menu links* and the *search functionality* respectively.

<div class="image-wrapper" style="--lg-width: 50%">
  <img src="/page-layout.png" alt="Page Layout" />
</div>

| Landmark 	| 	Tag		 		|Description						|
| -----------	| ----------- 	 		|---------							|
| Header 		| `<header>` 			|page introduction or navigation		|
| Navigation 	| `<nav>` 				|group of links for content navigation 	|
| Search 		| `<div role="search">` 	|search functionality				|
| Main 		| `<main>` 			|primary content of the page			|
| Footer 		| `<footer>` 			|authorship, related links, copyright date |
