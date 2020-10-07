<h1><a href="https://vickylai.com/call-me-sam/" target="_blank" rel="noopener">Call me Sam: a theme for Hugo</a></h1>

## What is it?

This is my fork of [hugo Call me Sam theme](https://vickylai.com/call-me-sam/). Instead of creating gallery from pictures in a folder it is using [flickity carousel](https://flickity.metafizzy.co/) for displaying pictures from Instagram. Pictures are displayed straight from Instagram CDN and hence create zero egres on my S3 account. Let Zuckenberg pick up your hosting expenses bill.

## What has changed?

- [layouts/partials/head.html](https://github.com/chew-z/hugo-theme-sam/blob/master/layouts/partials/head.html) - added imports for flickity js and css
- [layouts/partials/instagram_flickity.html](https://github.com/chew-z/hugo-theme-sam/blob/master/layouts/partials/instagram_flickity.html) contains most of the logic
- added some styles for carousel and hoover in [static/css/style.css](https://github.com/chew-z/hugo-theme-sam/blob/master/static/css/style.css)
- favicon.png
- commented original code in [layouts/gallery/list.html](https://github.com/chew-z/hugo-theme-sam/blob/master/layouts/gallery/list.html) (TODO - make new layout based on gallery instead of replacing it - less invasive)

## What is required?

In data/ folder you need instagram.json with metadata about Instagram pictures. I have created [AWS Lambda function in Go that does just that](https://github.com/chew-z/InstaAWS). Deploy and use it to create instagram.json

As Instagram cache keys change you will need to refresh instagram.json periodically.


<h1><a href="https://vickylai.com/call-me-sam/" target="_blank" rel="noopener">Call me Sam: a theme for Hugo</a></h1>

![Main page screenshot](https://github.com/vickylai/hugo-theme-sam/blob/master/images/screenshot.png)

Sam is a Simple and Minimalist theme for Hugo. It lets you categorize and showcase your content the way you want to.

Focused on content and typography, the stylized index page is really just a list of navigation links that you can set in your `config.toml`. This versatile design is limited only by your imagination, as you can make it say anything you like. Here are some ideas.


Licensed under [AGPL-3.0](https://github.com/vickylai/hugo-theme-sam/blob/master/LICENSE)
