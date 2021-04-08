---
layout: post
title: "Creating a Chrome Extension: Development"
date: 2014-12-24 00:25
comments: true
tags: [guides]
---

## Intro

As there are plenty of existing tutorials on how to get started on developing a Chrome extension, I will only cover a few topics and specific things to look out for.

## APIs
Chrome provides really great documentation on their available  [JavaScript APIs][1]. Depending on your use case some functionality may or may not be exposed to the user. There are stable, beta, dev, and experimental APIs to use. You're choice of APIs will greatly depend on the type of extension you are trying to build as well as your audience. As an example the following Chrome APIs were used for Tab resize.

- chrome.browserAction - setting badge text/background
- chrome.windows - create, update, getting current window
- chrome.tabs - create, move, get, query tab information
- chrome.commands - keyboard shortcuts
- chrome.system - display monitor info
- chrome.extension - get background page
- chrome.runtime - send messages between background page and popup

## Manifest
The [manifest][2] is a JSON structure to describe your extension project. The version, description, icons, and shortcut commands are just a few of the many different fields that can be set in the manifest.

One of the most important fields is the "permissions" property. You'll want to think through your project and ensure that you know of all the APIs you will need now and in the near future so you can properly request for permission ahead of time. The caveat with permissions is that if you want to add a new permission after you've deployed - it's a generally poor experience to users that have already installed your extension. When their extension is updated with a newly required permission, the extension automatically gets disabled and the user will be prompted. This isn't an approach you would want to take when you have a large user base. Another approach is to use the "optional_permissions" field so that the extension does not automatically get disabled. All users will get prompted of the optional permissions that are required. In either case you may end up giving a subpar user experience to a good number of your users.

Just try your best to get all the permissions you need ahead of time so it'll be a much smoother process later down the line.

## Tracking
If you care about improving your app and growing it, tracking is needed without question. User feedback can only go so far. Analytical tracking data will tell you what your users actually do and you can improve/change things accordingly.

As an example I found that a user was actually creating a custom resize layout with of 99x99. When the user clicks on this custom created layout 9801 windows would have been created on their desktop, definitely crashing Chrome and probably their computer along the way. Benefiting from this info, I added some enforcement to limit the input size. Sometimes you need to protect the users from themselves, especially if they aren't using the application as intended.

When you setup the extension in the web store, make sure to put a Google Analytics id number - this will track the users that hit the Chrome web store page of your extension. It'll be really usefully to see the trend of your views as well as where the referrals are coming from.

I used Google Analytics for tracking but obviously you aren't limited to it. Regarding Google Analytics - the [tracking documentation][3] as of this writing for Chrome extensions is out of date. If you choose to use Google Analytics you should start using the [universal analytics][4] framework instead.

Personally, I've found it really interesting to see how Tab Resize grew over time and how it was being used in countries I've never even heard of. If you do decide to use tracking <strong>be sure to add in an option for users to opt out of participating</strong>. This is a better user experience and also required by Google's terms and agreement.

## Usability
Using the results of your tracking you'll be able to see if users are actually using the app as you intended. The data will tell you a story of how people are using it, either it be in a way you intended or in a way you never even thought of. Armed with this information you'll be able to iterate on and improve your app. Features that aren't being used as frequently can be shown more prominently and features that aren't being used at all should be considered for the chopping block. None of this should be news to you but I hope you can push your users to use the product as you imagined rather than just the other way around.

## Artwork
Artwork will influence both usability and impression rate. You'll need artwork for icons, sprites, as well as logo designs. They have some [requirements][7] for these images. You'll definitely want to look them over otherwise your extension may be rejected. You want to at least to have a 440x280 promotional image. Without this size, your extension will be pushed to the bottom of the list when extensions are surfaced in the store.

![My attempt at promo design](/assets/img/440x280v3.png){: .mx-auto.d-block :}

While many developers may easily look over visual design, it's a really important piece that you simply cannot ignore, especially in this day and age. Users have grown accustomed to smooth and sleek designs and expect nothing less. If you had two apps with similar functionality, the one with a better user interface will definitely win out. If you don't have experience with a graphics editor and don't have an interest in learning there are still other options. From [99designs][5] to [fieverr][6] there are many ways for you get great artwork without being an artist yourself. There really isn't any excuse for having a bad design.

[1]: https://developer.chrome.com/extensions/api_index "JavaScript APIs"
[2]: https://developer.chrome.com/extensions/manifest "Manifest"
[3]: https://developer.chrome.com/extensions/tut_analytics "tracking documentation"
[4]: https://developers.google.com/analytics/devguides/collection/analyticsjs/ "universal analytics"
[5]: http://99designs.com "99designs"
[6]: https://www.fiverr.com "fiverr"
[7]: https://developer.chrome.com/webstore/images "images"
