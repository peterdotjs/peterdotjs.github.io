---
layout: post
title: "Tab Resize"
subtitle: Chrome Extension for split screen layouts
date: 2012-09-03 00:35
comments: true
tags: [projects, tab-resize]
---
<br>
### Demo
<iframe width="853" height="480" src="http://www.youtube.com/embed/SD3hrdxn3QU" frameborder="0" allowfullscreen></iframe>

### What
✓A simple extension designed to provide ease in resizing your tabs. A set of default layouts are provided but you can add and remove from the list of layouts to fit your needs.

### How it works
✓The selected/highlighted tab along with all tabs to the right of it will be considered. Whether you have more or less tabs than are needed the extension will resize only the available tabs.

✓Undo button will undo the previous layout resize. You can only perform undo once at any time.

✓In 'single tab' mode, only the selected/highlighted tab will considered. Only the current window/tab will change in size, all other tabs to the right will be ignored.

✓You can create your own custom layouts within reason and reset to default configurations if desired. Layouts are sorted most recent used on left.

### Why
✓Manually resizing windows is no fun.

✓You have a very large monitor and have more pixels than you know what do with.

✓Quick side by side comparisons.

✓Quickly resize single windows to desired size with a single click.

### Installation <small> - click icon to install</small>
<div class="install-wrapper">
    <img src="/assets/img/icon128.png" onclick="chrome.webstore.install('https://chrome.google.com/webstore/detail/bkpenclhmiealbebdopglffmfdiilejc')" id="install-button-tab-resize" class="install-button">
    <h4 id="installed-message-tab-resize" class="installed-message" style="display: none;">Already Installed. =)</h4>
</div>
<script>
$('head').append('<link rel="chrome-webstore-item" href="https://chrome.google.com/webstore/detail/bkpenclhmiealbebdopglffmfdiilejc">');
if (chrome.app.isInstalled) {
  $('#install-button-tab-resize').hide();
  $('installed-message-tab-resize').show();
}
</script>

### Additional Notes
Only tab/window id info is being used; browsing history is not. Tabs and browsing history access as bundled together.
