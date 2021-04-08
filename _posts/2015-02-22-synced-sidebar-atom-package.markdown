---
layout: post
title: "Synced Sidebar Atom Package"
date: 2015-02-22 18:33
comments: true
tags: [projects]
---

Based on Sublime Text [SyncedSideBar](https://github.com/sobstel/SyncedSideBar) plugin. Active tab & sidebar are synced - sidebar entry automatically scrolls into view.

Atom Package: [https://atom.io/packages/synced-sidebar](https://atom.io/packages/synced-sidebar)

## Demo
<iframe width="853" height="480" src="http://www.youtube.com/embed/fwYiFJ-9A6Y?" frameborder="0" allowfullscreen></iframe>

## Installation

```bash
apm install synced-sidebar
```
Or Settings/Preferences ➔ Packages ➔ Search for `synced-sidebar`

## Use

By default the sidebar (tree view) is not in sync with the active tab. With synced-sidebar installed the tab is revealed in the sidebar anytime a tab is active. If the active file in the sidebar is not currently in view (below or above the current viewport), the sidebar will automatically scroll the active file into view.

If the sidebar (tree view) is collapsed, synced-sidebar doesn't do anything. The sidebar remains collapsed as is.

## Configuration

Currently there aren't configurations since there's only one thing the package does. You can either have the package enabled or disabled. Let me know you think there's a use case for configs.
