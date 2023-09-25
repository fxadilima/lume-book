# 📔 GitHub Pages

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

Tapi dokumen inilah yang nantinya akn ditampilkan di halaman depan, karena dokumen ini kita
simpan sebagai 'README.md', yang akan menjadi 'index.html' kita.

## GitHub Personal Access Token

Supaya jangan memasukkan PAT setiap kali kita melakukan push/pull dengan 
remote Git, sebaiknya lakukan ini:

```bash
$ git config --global credential.helper store
```

Lalu coba lakukan push, dan lakukan langkah sbb:

```bash
$ git config --global credential.helper cache
```

PAT itu akan expired dalam 90 hari.

 
