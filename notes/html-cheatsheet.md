# HTML Cheatsheet

## Document Declaration

- `<!DOCTYPE html>` → Declares the document type, telling the browser to use **standard/modern rendering rules (W3C standards)**.  
  Without this, the browser may go into **quirks mode** (old IE5 standards).

## Head Tags

- **Meta tags**
  - `charset` → Sets the character encoding (usually `"UTF-8"`) to support all characters. Without this, some characters may not display properly.
  - `viewport` → Tells the browser how to handle **dimensions and scaling** on landing.
- **link** → Specifies the relation between the main file and a linked source (CSS, fonts, icons, etc.) using the `rel` attribute.
- **title** → Defines the webpage title.

## Structural / Semantic Tags

- `header` → Indicates header content.
- `nav` → Represents the navigation bar.
- `section` → Defines sections of the page.
- `main` → Indicates the main content of a page (excluding header, footer, navigation).
  - **SEO** → Helps search engines better understand page structure.
  - Only **one per page**.
- `footer` → Indicates footer content.
- `div` → Creates block-level containers.

## Text & Headings

- `p` → Paragraph (block).
- `span` → Inline text container.
- `h1`–`h6` → Headings (block), used for hierarchical headings.

## Links & Media

- `a` → Hyperlinks (external links or in-page anchors using IDs).
- `img` → Embeds images (uses `src`, `alt`).

## Lists

- `ul` → Unordered list.
- `ol` → Ordered list.
- `li` → List item.

## Forms

- `form` → Creates a form.
  - **Attributes**
    - `action` → Defines where to send form data.
    - `method` → Defines how to send data (`GET`, `POST`).
    - `onSubmit` → Handles form submission in JavaScript.
  - **label** → Labels for inputs. The `for` attribute should match the input’s `name`/`id`.
  - **onSubmit / submit listener**
    - Use `preventDefault()` to stop page reload.
    - Retrieve form data using:
      ```js
      const data = Object.fromEntries(new FormData(event.target));
      ```
    - Data is retrieved based on the `name` attribute of inputs.
  - **input types**
    - `text` → Text input.
    - `number` → Numeric input.
    - `email` → Email input.
    - `submit` → Submit button.
  - **textarea** → Multi-line text input (uses `cols`, `rows`).

## Scripts

- `script` → References executable code, usually linking external JavaScript files.
