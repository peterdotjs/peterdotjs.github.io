---
layout: post
title: "Quick Find - next gen text search"
date: 2014-08-23 15:06
comments: true
categories: projects
---
<br>
### Motivation:
I've always wanted the ability to see all the search results in a text search rather than just seeing them highlighted and scattered accross the page and out of view. This was the start of the idea and it soon became mashed up with all the great Firefox quick find features that Chrome is missing.

<br>
### Description:
A next gen text search tool for your Chrome web page. Start a search and simply press enter/return on a highlighted link and you'll instantly navigate to that page. A mashup of Firefox quick find features (case match, links only search, highlight all, search selected text) as well as awesome new ones (scroll/navigate through all search results with context) - brought to Chrome.

<br>
### Demo:
<iframe width="853" height="480" src="http://www.youtube.com/embed/x2PEyTyJ6iM?" frameborder="0" allowfullscreen></iframe>

<br>
### Shortcut keys:

**shortcut key can be customized in chrome://extensions/configureCommands

#### Getting started:

<kbd class="light">/</kbd>&nbsp; or  &nbsp;<kbd class="light">ctrl</kbd> + <kbd class="light">shift</kbd> + <kbd class="light">f</kbd>&nbsp;&nbsp;: forward slash or ctrl+shift+f will open Quick Find menu**

<kbd class="light">'</kbd>&nbsp;&nbsp;: single quote key will open Quick Find menu in links mode (only links are searched)**

<kbd class="light">esc</kbd>&nbsp;&nbsp;: escape key will close Quick Find menu

<br>
#### Menu navigation:

<kbd class="light">&#8593;</kbd>&nbsp; or &nbsp;<kbd class="light">&#8595;</kbd>
&nbsp;&nbsp;: navigate results by using up or down arrow keys

<kbd class="light">enter</kbd>&nbsp; or &nbsp;<kbd class="light">return</kbd> : pressing enter on highlighted menu with link will navigate to the link

<br>
#### Search Options:

<kbd class="light">alt</kbd> + <kbd class="light">a</kbd>&nbsp;&nbsp;: toggle highlight all results mode

<kbd class="light">alt</kbd> + <kbd class="light">c</kbd>&nbsp;&nbsp;: toggle match case mode

<kbd class="light">alt</kbd> + <kbd class="light">l</kbd>&nbsp;&nbsp;: toggle links mode

<br>
#### Tips:

Quick Find search box is prepopulated with any selected/highlighted text prior to opening the search menu.

Toggle occurs only when cursor focus is on the Quick Find menu.

<br>
### Installation <small> - click icon to install</small> :

<div class="install-wrapper">
    <img src="../images/quickFind/icon128.png" onclick="chrome.webstore.install('https://chrome.google.com/webstore/detail/dejblhmebonldngnmeidliaifgiagcjj')" id="install-button-quick-find" class="install-button"></img>
    <h4 id="installed-message-quick-find" class="installed-message" style="display: none;">Already Installed. =)</h4>
</div>
<script>
$('head').append('<link rel="chrome-webstore-item" href="https://chrome.google.com/webstore/detail/dejblhmebonldngnmeidliaifgiagcjj">');
if (chrome.app.isInstalled) {
  $('#install-button-quick-find').hide();
  $('#installed-message-quick-find').show();
}
</script>

**Chrome Web Store:** <a href="https://chrome.google.com/webstore/detail/quick-find-next-gen-text/dejblhmebonldngnmeidliaifgiagcjj" target="_blank">Quick Find - next gen text search</a>

<br>
### Limitations:
Extension only works on sites that allow content scripts. The chrome webstore page itself for example doesn't even allow content scripts to be run.

Quick find does not search through iframes, script, or code html elements.

When results show up in same html element, will be shown only as one result.

Other website shortcuts or extensions may conflict with these shortcuts. A future enhancement can be to select your own shortcuts to open the menu.

### Additional Notes
Anonymous page view tracking is used to improve the extension and user experience. You can opt out in the options menu.
