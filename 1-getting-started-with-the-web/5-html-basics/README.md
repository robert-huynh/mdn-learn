# Introduce HTML basics

## So what is HTML?

- Element
  - Can make a word, image hyperlink, italicize words, and so on.

### Anatomy of an HTML element

- Element
  - Element = <open-tag attribute-name="attribute-value">content</closing-tag>

### Nesting element

Put elements inside other elements.  

        <p>My cat is <strong>very</strong> grumpy.</p>

### Empty eElements

Some elements have no content

        <img src="images/firefox-icon.png" alt="My test image">

### Anatomy of an HTML document

        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <title>My test page</title>
          </head>
          <body>
            <img src="images/firefox-icon.png" alt="My test image">
          </body>
        </html>

- `<!DOCTYPE html>`
  - Make sure your document behave correctly
- `<html></html>`
  - Root element
  - Wrap all the content
- `<head></head>`
  - Wrap the stuff that is not the content appears on your page
  - Metadata
- `<meta charset="utf-8">`
  - Handle any textual content you might put on it
- `<title></title>`
  - Set title on your page (appear in browser tab)
- `<body></body>`
  - Contain all content that appears on website

## Images

        <img src="images/firefox-icon.png" alt="My test image">

- src
  - Contain the path your image
- alt (alternative)
  - Provide the reader enough information (descriptive text)
  - Help people who can not see the image
  - Help user can understand the image when the path of image is incorrect

## Marking up text

### Headings (h1-h6)

- h1 => My main title
- h2 => My top level heading
- h3 => My subheading
- h4 => My sub-subheading

### HTML comment

          <!--Write helpful notes about your code and logic-->

### Paragraphs

- Marking up regular text content:

          <p>This is a single paragraph</p>

### Lists

- Marking up lists always consists of at least 2 elements
  - Ordered   
    The order of the items does matter. (A recipe)
  - Unordered  
    The order of the items doesn't matter. (Shopping list)

### Links

          <a href="https://www.mozilla.org/en-US/about/manifesto/">Mozilla Manifesto</a>

- `href` = hypertext reference


  



