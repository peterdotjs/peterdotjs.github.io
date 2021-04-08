---
layout: post
title: "Creating a Chrome Extension: Production"
date: 2014-12-25 17:27
comments: true
tags: [guides]
---

## Deployment

Google has provided very clear [documentation][1] on how to publish your app. Here are a couple tips on the process:

1. <strong>Upload</strong>: Whenever you update a package you'll need to update the version number in the manifest - it'll be blocked otherwise.
2. <strong>Description</strong>: Add search keywords/tags in your description. It'll help your ranking when users search for those terms in the web store. This will be a good place to add your source control link so users can add issues or look at the source code. Here you can notify the users if you are sending any anonymous tracking information. Also this would be good place to address any of the permissions that you have required and why you need then.
3. <strong>Promotional Images</strong>: Make sure to fill out all the promotional images so you can maximize your impression count.
4. <strong>Websites</strong>: Add a website if you have one. This adds credibility and confidence to the extension.
5. <strong>Category</strong>: When choosing a category, you may want to choose one they has fewer applications. Many extensions fall under productivity (as extensions by nature were designed to make us more productive) but it likely will get lost in the numerous other extensions out there already.
6. <strong>Screenshots</strong>: Utilize all the 5 spots you have for screenshots. What you'll find is that users will likelihood never read your description. With the limited amount of time you have to describe what you app can/cant do I think having a video is the best and quickest way to deliver this information. If you don't want to go to the trouble, make sure to have great screen shots that showcase your app.
7. <strong>Language</strong>: For now choose the language you've build your extension in. After you get some more data from Google Analytics you may decide it would be worth supporting l10n of other languages.
8. <strong>Analytics</strong>: Create a Google Analytics account if you haven't already fill out the Google Analytics ID.

## User Feedback

The one grief I have with the Chrome web store is the current user feedback system. The current system is fairly one sided. If a user leaves a review the developer cannot address it directly. Only if a user leaves feedback in the "support" tab are you able to directly reply. But even then there is no notification system. You can reply to this specific feedback but there isn't a way to confirm if the original poster even sees your reply. If you end up receiving some bad reviews it's kind of like getting punched with your hands tied. You won't be able to defend yourself and you can't do much about it.

With both good and bad reviews the overall feedback is invaluable. While some feedback may be repetitive and not particularly helpful, it's something that you must pay attention to if you want your extension to be successful. The user feedback will give you hints to any underlying issues or bugs as well as features you are missing and can improve. If you've never gotten public feedback on an application you've built then you're in for a treat. The public can be incredibly nice and generous, but they can be just as harsh and negative. It's hard not to take it personally the first time but you'll get used it it, kind of. I remember the first time I received a bad review on Tab Resize, I was totally crushed. And it is hard to to be. Most extensions are built by developers in their free time. It's their passion and it's very personal. But after a while you'll get used to it, taking the bad with the good. For me, I look at the positive reviews as fuel to get over the not so great reviews.

Lack of empathy I think is the cause of most of these bad reviews. Louis C.K. shares my opinion.

<iframe width="853" height="480" src="http://www.youtube.com/embed/5HbYScltf1c?" frameborder="0" allowfullscreen></iframe>

 Many individuals are unable to see that there is someone behind the scenes. Someone who spent time building a free app for everyone to use, only to get berated for it. Developers would be hard-pressed to give an extension a 1 star review as they know of the amount of effort that actually goes in.

Some Tab Resize verbatims from our 1 star reviewers who failed to understand the purpose of the extension:

- "This add-on is a useless piece of crap."
- "Broken failed plugin."
- "It works terribly."
- "doesn t works waste of time"
- "Sorry to say but this is a rather lousy and really unnecessary add on."

Regardless of what you put in your description, screenshot or video, many users will just look at an extension name and instantly have certain and specific expectations. Once they start using it, if those expectations aren't met, they won't be shy in letting you know how wrong you are.

On the other hand here are some verbatims from their happier 5 star counterparts:

- "Works as expected and has a simple, clean menu. Now has multi-monitor support and feeds my cat."
- "Super useful tool that has increased my productivity. Thank you!"
- "I love it just what I need it thank you."
- "GREAT!"
- "love it!!!!"

<strong>Haters are always going to hate. Work on your app for those that appreciate it and don't worry about everyone else.</strong>

## Press

By informing tech blogs of your extension you'll have the best chance of getting the word out immediately. While this may increase the exposure and the number of visits it may have some consequences. If the features aren't yet mature and rich enough it may get panned and end up greatly hurting your average rating. On the other hand if it takes off you can try to ride that viral wave for as long as possible. When I released Tab Resize more than 2 years ago, I never even thought about this. I had just deployed it and shared it with some friends. It grew organically and slowly at a steady rate until a year later the right person blogged about it and some more well known blogs took notice, specifically [CNET][4] and [Lifehacker][3].

![Chrome Store Sessions](/assets/img/chromeStoreSessions.png)

The peak in visits were a result of certain blog posts. More Visits -> More Installs -> More Users. But take note that more users means more ratings which may not be a good thing. I think during this period of time Tab Resize's rating went down from a high 4 to a low 3. Pay close attention to the feedback you get around this time as you might need or want to deploy features/fixes quickly.

[1]: https://developer.chrome.com/webstore/publish "documentation"
[2]: https://www.youtube.com/watch?v=5HbYScltf1c "Louis CK on cell phones"
[3]: http://lifehacker.com/tab-resize-automatically-organizes-tabs-into-preset-lay-1306865451 "Lifehacker - tab resize"
[4]: http://www.cnet.com/how-to/split-chrome-tabs-into-multiwindow-preset-layouts-with-tab-resize "CNET - tab resize"