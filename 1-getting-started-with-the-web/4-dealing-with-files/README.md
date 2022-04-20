# Dealing with file

A website consists of many files, so you have to set up a sensible file structure for your website.

## Where should your website live on your computer?

You should keep all the related files in a single folder. This folder can live anywhere you like.

1. Choose a place to store your website projects. Create a new folder called web-projects.
2. Inside the first folder, create one another folder called test-side.


## An aside on casing and spacing

Should use lowercase with no spaces and hyphen (not underscore) for you file names.

## What structure should your website have?

1. Create index.html file in test-side folder.
2. Create a folder called images in test-side folder.
3. Create a folder called styles in test-side folder.
3. Create a folder called scripts in test-side folder.

## File paths
To make files talk to one another, you have to provide a file path between them — basically a route, so one file knows where another one is.

- To link a target in same directory, just use filename. (my-image.jpg)
- To link a file in a subfolder, just write the directory name in front of the path, plus a forward slash,. (subdirectory/my-image.jpg)
To link to a target file in the directory above the invoking HTML file, write two dots. (../my-image.jpg)
- You can combine these. (../subdirectory/my-image.jpg)