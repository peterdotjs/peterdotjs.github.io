---
layout: post
title: "Tab Resize 2.0 - split screen layouts"
date: 2014-08-19 08:05
comments: true
tags: [projects, tab-resize]
---
<br>
**Split Screen made easy. Resize the CURRENT tab and tabs to the RIGHT into layouts on separate Windows. w/ Multi Monitor Support.**

*** Version 2.0 ***
Added support for multiple monitors, left and right alignment, and empty tab mode

### Demo
<iframe width="853" height="480" src="http://www.youtube.com/embed/GFHl98nAV04?" frameborder="0" allowfullscreen></iframe>

### What
✓A simple chrome extension designed to provide ease in resizing your tabs. A set of default layouts are provided but you can add and remove from the list of layouts to fit your needs. With multiple monitor support you can move windows from one screen to the next with ease.

### Why
✓Manually resizing windows is no fun.

✓You have a very large monitors and have more pixels than you know what do with.

✓Quick side by side comparisons.

### How it works
✓The selected/highlighted tab along with all tabs to the right of it will be considered. Whether you have more or less tabs than are needed the extension will resize only the available tabs.

✓Undo button will undo the previous layout resize. You can only perform undo once at any time.

✓In 'single tab' mode, only the selected/highlighted tab will considered. Only the current window/tab will change in size, all other tabs to the right will be ignored.

✓In 'empty tab' mode, new windows with empty tabs will be created if there are not enough tabs to fill your selected layout.

✓You can select left or right alignment for your resize

✓You can create your own custom layouts within reason and reset to default configurations if desired. Layouts are sorted most recent used on right.

### Installation <small> - click icon to install</small>

<div class="install-wrapper">
    <img src="/assets/img/icon128.png" onclick="chrome.webstore.install('https://chrome.google.com/webstore/detail/bkpenclhmiealbebdopglffmfdiilejc')" id="install-button-tab-resize-2" class="install-button"/>
    <h4 id="install-message-tab-resize-2" class="installed-message" style="display: none;">Already Installed. =)</h4>
</div>
<script>
$('head').append('<link rel="chrome-webstore-item" href="https://chrome.google.com/webstore/detail/bkpenclhmiealbebdopglffmfdiilejc">');
if (chrome.app.isInstalled) {
  $('#install-button-tab-resize-2').hide();
  $('#install-message-tab-resize-2').show();
}
</script>

**Chrome Web Store:** <a href="https://chrome.google.com/webstore/detail/tab-resize-split-screen-l/bkpenclhmiealbebdopglffmfdiilejc" target="_blank">Tab Resize - split screen layouts</a>

### Additional Notes
Only tab/window id info is being used; browsing activity is not. Tabs and browsing activity access are bundled together.

Anonymous usage tracking is used to improve the extension and user experience. You can opt out in the options menu.