# HTML text Fundamentals

## The basics: Heading and paragraphs

### The structural hierarchy

- Structured content makes the reading experience easier and enjoyable.

- There are six heading elements (level of content): `<h1>` => `<h6>`  
  - `<h1>` => Main heading 
  - `<h2>` => Subheading
  - `<h3>` => Sub-subheading

- Some best practices:
  - `<h1>` per page
  - Correct order in the hierarchy: `<h3>` in `<h2>` NOT `<h2>` in `<h3>`
  - No more three heading per page

### Why do we need structure?

- If we do not use the structure element, the text will appears as a big chunk.
- Use usually scan quickly to find revelant content (reading the heading). If not, they will get frustrated.
- Without heading, the page will perform in poorly in terms of SEO.
- Screen reader reads out the heading. If headings are not available, it will read whole document out loud.
- Use the structure element, so CSS/Javascript can effectively target it.

### Semantic element

- Meaning
- Function
- Appearance

## List

### Unordered list

- The order of the items does not matter. (List of ingredients)

### Ordered list

- The order of the items does matter. (The recipe for cooking soup)

### Nest list

- It is possible to nest one list inside other one.


## Emphasis and importance

### Emphasis

- Emphasizing certain words can make the meaning of sentence different in some way. (stress in speaking, italic in writing)
- Semantic element: `<em>`, so **DO NOT** use this tag to get **italic**.

### Important

- Emphasize important words (stress in speaking, bold in writing)
- Semantic element: `strong`, so **DO NOT** use this tag to get **bold**.

*To make text italic, bold you can use CSS*

### Italic, bold, underline

- Not semantic: `<b>`, `<i>`, `<u>`
- `<i>` (italic): foreign words, technical terms, a thought, ...  
- `<b>` (bold): key words, product names, ...
- `<u>` (underline): misspelling, ...