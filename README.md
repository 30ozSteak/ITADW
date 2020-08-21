# ITADW - Is This a Dating Website?

A Chrome Extensions that aims to deter unsolicited DMs on the internet 🙅‍♀️🙅‍♂️🙅

<br>
<br>

# Release Notes

#### Version 0. 1

- initial release, add extension, add readme with contribution notes, guidelines, hopes & dreams for a better web
  <br><br><br>

# Motivation

One of the most worst experiences I've witnessed as a developer is watching my peers express their intent to drop out of the industry out of sheer exhaustion from the number of inappropriate and unwanted messages they receive.

Be it _reply-guys_ condescendingly correcting them (read: _negging_), or _sexual-predators_ sliding into DMs with disgusting comments, they're overwhelmed by the amount of mental energy it takes to simply exist in this space.

The industry is notorious for it's lack of diversity and is a breeding ground for _tech bro_ culture.

**This needs to stop.**

ITADW (Is This a Dating Website) is a small chrome extension that tells the user that: **No, they're not on a dating website, and inappropriate comments will not be tolerated,** in a giant red banner across the top of the page.

Once it's dismissed it'll be hidden from view until the next time their browser refreshes, or visits another website that fits the criteria.

![Screen Shot 2020-08-21 at 11 11 01 AM](https://user-images.githubusercontent.com/34214595/90916907-306d5c00-e39f-11ea-97b0-68379e2e4666.png)

![Screen Shot 2020-08-21 at 11 13 12 AM](https://user-images.githubusercontent.com/34214595/90917025-5266de80-e39f-11ea-904a-44841f362e64.png)

# Current Support

Currently, only LinkedIn, Github, and Twitter are supported, but I hope ot add many, _many_ more to the resource list for websites that this will be active on.

# Tech Used

Currently this is written in Javascript with inline styles. I'd be very open to expanding this stack as new features are developed

# Getting Started

- Download this repo
- Open the Chrome extensions window at chrome://extensions
- Ensure _Developer Mode_ is turned on
- click Load Unpacked, select the downloaded file and add it to your extensions.

You'll see the NO DM logo in your extension bar if it was installed correctly. Once you visit any of the supported websites, you'll be prompted with the red banner.

# Contribute

This project is very much in it's infancy but I can see it becoming a very powerful tool to curve and hopefully eventually prevent toxic behavior on the internet. I'll be compiling a list of issues and future features over the next few days.

# Adding websites for the extension to execute on

Inside the `manifest.json` file is a `matches` array within `content_scripts`. Here you can add websites to have the extension respond to. Regular expressions are permitted.
Example: `https://*.github.com/*` matches all https websites that include `github.com` in their url

# Credits

Everyone who's ever been harassed on the internet or received inappropriate comments of any kind, especially those sexually pursuant in nature. Let's build a better web

# License

MIT @ NickDambrosio

# Thanks!
