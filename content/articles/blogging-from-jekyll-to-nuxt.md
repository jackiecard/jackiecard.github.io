---
title: "Blogging: from Jekyll to Nuxt"
description: "Blogging is something I enjoy doing when I have time. Unfortunately, that's not the case right now, that's why I've chosen to move over to Nuxt."
category: blogging
draft: false
---

Blogging is something I enjoy exploring when I have time. Unfortunately, that's not the case right now, that's why I've chosen to move over to Nuxt.

Being able to write down content in markdown, push the code to a repo, have all the blog pages generated to static files and published is great! Jekyll has been doing that for years and it was really nice for a while. But I'm very happy to move over to something new. 

## A spike in the back
Building blogs is supposed to be really simple. Back in the day, when blogging became a fever and everyone had one, there was plenty of services like Blogger, Blogspot, LiveJournal... You just needed to create an account and start writing. 

If you wanted to stand out, you could write your own themes. All these blogging systems allowed custom themes and had terrible documentation about it. So much that I know many front-end developers that claim to have learned web development by blogging - or else writing custom templates. 

That's great, but most of the people didn't do those kind of stuff as they were not necessary. Which is probably the main reason I've chosen to drop the use of Jekyll. As a developer, I had blockers.

## Jekyll

Few years back, I wanted to have a blog and Wordpress was not an option since I didn't needed a whale, but a small fish. Many developers were using Jekyll to write really simple pages and host them for free on Github pages. As a front-end dev myself, I decided to try.

If you want to have a quick idea what went wrong, go to <a href="https://jekyllrb.com/">Jekyll official documentation</a>. There's a heading called "Simple" :point_right: click on the link right bellow "How Jekyll works". Does it tells you how it works? 

If you understood half of what's on that page, you probably know what Ruby language is because Jekyll is a Gem, which is like a NPM package but for Ruby. Also, the page in which should make a straightforward introduction of the service says much about the state of Jekyll's documentation. It's just not easy, even for a developer.

So I've spend a good deal of time learning all that stuff and installing the right Ruby version (MacOS comes with a really old version pre-installed), Gem and dependencies to finally start blogging. But no, there's more. There's the template engine Liquid, formatting with Front Matter and the default theme Minima, that makes the under the hood things a nightmare to ignorants such myself :poop:

Overall, I've spend so much time not having fun with these whole experience that blogging with Jekyll was like a spike in the back to me. I just didn't want to blog on it.

## Nuxt

I've read this article about <a href="https://nuxtjs.org/blog/creating-blog-with-nuxt-content/">creating a blog with Nuxt Content</a> and decided to give it a try. If you don't know what Nuxt is, I also didn't knew much and was able to follow all the steps anyway. It is amazing how a well written, structured documentation helps to make a technology accessible.

It took me half a day to put in all the basic blog pieces together in contrast with days of trying to learn Jekyll's environment. Nuxt Content also allows interactions that Jekyll by itself never could, like the search functionality.

## Similarities

It's clear that Nuxt benefits from the learnings of Jekyll's strength and flaws. For instance, Nuxt Content also uses Markdown and Front Matters which is really nice and simple. It also gives the option to generate static files for those who cannot afford an environment to run Server Side Rendered pages.

## Overall

It's important to notice that I've being working professionally with Vue - the library in which Nuxt is based on - for more than 2 year, which makes my preference highly partisan in Nuxt's favor. If you want to have a plain, white blog hosted in a Github page quickly, Jekyll it's totally fine.

Quite honestly, if you are a front-end developer, chances are you don't want just a plain, white page with no interactivity. It's you domain, it's a way to show a bit of you work to your friends and companies you want to impress. Go for Nuxt Content. <a href="https://content.nuxtjs.org/">Check their documentation</a> and you will be blogging in a day. Happy :blush: