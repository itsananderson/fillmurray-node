fillmurray
===========

Simple CLI node utility that downloads files from [fillmurray.com](http://fillmurray.com).

Installation
------------

Installing is quite simple

```
npm install -g fillmurray
```

Usage
-----

FillMurray is pretty easy to use.

```
fillmurray [-d path/to/download/folder] width[/height] [...]
```

Here are some concrete usage examples

```bash
fillmurray 200/100 # Download a 200x100 image
fillmurray 100/300 200 # Download a 100x300 image and a 200x200 image
fillmurray -d murray 800/600 # Download a 800x600 image into the murray folder
```

In order for the -d (a.k.a. --directory) flag to work, the folder must already exist.
Otherwise fillmurray will just return an error.
