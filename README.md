# 📔 Lume Book

Mari kita membuat dokumentasi dengan Lume, lalu mempublikasikannya ke GitHub Pages.

Kita mulai dengan santai, pelajari dulu bagaimana cara kerja GitHub Pages.

## 👣 Langkah 1

Buat sebuah repository kosong di GitHub, dalam hal ini saya memakai nama 'Lume Book'.

Buat sebuah README.md di direktori paling depan, tulis apapun yang Anda suka di situ.

Lalu buka terminal dalam direktori lokal yang kosong.

```bash
$ git init     # ini akan membuat direktori baru .git di situ
$ git remote add origin https://github.com/fxadilima/lume-book.git   # hubungkan repo dgn lokal
$ git pull origin main  # download semua isi repo dari branch main
```

Sekarang buat sebuah direktori baru bernama 'docs'.

- 📂 Root
  + 📁 docs
  - 📄 LICENSE
  - 📄 README.md

Buat juga sebuah README.md di dalam direktori 'docs' itu.

Isinya bisa perjalanan Anda mengikuti ulasan ini 😁.

Nah, sekarang kembali ke terminal, kita _push_ semua yang baru kita buat tadi ke repo.

```bash
$ git add .
$ git commit -am "adding docs"
$ git push origin main
```

