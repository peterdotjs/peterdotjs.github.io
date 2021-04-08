---
layout: post
title: "Creating a Chrome Extension: Inception"
date: 2014-09-07 18:19
comments: true
tags: [guides]
---

## The idea

You should definitely read Paul Graham's article on [startup ideas][1] if you haven't yet already. Most products come out of an  existing problem. This problem may be unoticed, compensated for or perhaps very difficult to solve. Workarounds exist everywhere in our daily lives and if you could find one to make more efficient then you likely have a product on your hands.

Assuming you've brain stormed several ideas, now it's time to face the music and search for similar solutions. Although it might be hearbreaking to find that someone else had come up with that same awesome idea that you had - it's not at all the end of the world. In fact it might even help you. If you research your competitors you can find all their pain points, user feedback, and areas where you can improve upon. I've seen many extensions that were great ideas to begin with but simply weren't executed well. Either it be the user experience, the design or bugs in the product, these are all areas where you could improve upon. However, if there are already several great and solid products out there you should probably consider contributing to one of them rather than creating your own. The world may not need another adblock tool or responsive web tester.

### [Tab Resize]
I found myself manually resizing windows across my monitor and realized just how inefficient that workflow was. I compensated by doing it by hand but I figured that there had to be some kind of extension to do this for me. I did a search on the Chrome Web store and found several that were in the ballpark of what I was looking for ("Split Screen", "Tab Scissors", "Dualless", etc.) These extensions each do something different but each had their own respective limitations. Once I realized that there was room in the market for a split screen layout extension, I knew it was worth building. At this point the idea of having users didn't cross my mind.  I figured at the very least I'd be able to use it and make my own life a little easier.

## Requirements and Design
In both school and in industry there is somone telling you what do to; a professor and program manager respectively that will describe in detail the requirements of the project that you are venturing on. In addition, the design (both technology and visual) are also determined for you (usually). With a project that is completely of your own, you may find youself overwhelmed with the amount of freedom and number of choice you now have. Requirements can be shaped by the problem you want to solve in addition to the areas that your competitors are lacking in. Choosing a visual design and color scheme is kind of like choosing a parking spot in a very sparse parking lot - you'll have a lot of choices and it might take some time to decide which one to use.

Try to pay as much attention to the user experience if not more than the actual features. Having amazing features that are difficult to use or discover will produce poor results. It goes without saying that the features the application is providing must be flawless or close to being bug free. However great the visual user experience is, it can never compensate for poor execution in function.

### [Tab Resize]

#### Requirements*:
1. Resize tabs into fixed layouts based on avaialble screen size
2. Current tab and tabs to the right will be considered in the resize
3. Custom layouts can be created, and existing layouts can be removed.
4. Layouts can be reset to default layouts
5. Ability to undo the previous resize
6. User preference of layouts should be saved
7. Single tab ability to only resize the current window

#### Design*:
![Tab Resize 1.0 version from late 2012](/assets/img/oldtabresize.png)

Personally, I think choosing on the visual design itself took much longer than the actual app development. Visually I wanted a large action area where the user could easily choose the layout they wanted and easily discover the features (created, removing, and reseting layouts).  The most frequently used layout should be the easiest to get to - in this case right aligned and closest to the extension icon. Each of the features should be easy to get to. The options can be changed directly in the popup menu - not hidden in another view like an options page.

*The above design and requirements are from the first version that was deployed.

[1]: http://www.paulgraham.com/startupideas.html "start up ideas"