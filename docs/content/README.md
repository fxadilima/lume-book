---
title: Membuat GitHub Pages
description: README Untuk GitHub Pages Content
author: FX. Adi Lima
keywords: github-pages, membuat github-pages
---

# GitHub Pages

Kode berikut ini tidak akan jalan kalau kita belum pernah membuat Pages dari dalam
GitHub sendiri, karena branch 'gh-pages' itu tidak ada.

```bash

$ git add .
$ git status     # to see what changes are going to be commited
$ git commit -m 'Some descriptive commit message'
$ git push origin master

$ git checkout gh-pages     # go to the gh-pages branch
$ git rebase master         # bring gh-pages up to date with master
$ git push origin gh-pages  # commit the changes
$ git checkout master       # return to the master branch

```

