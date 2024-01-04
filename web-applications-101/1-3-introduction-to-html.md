---
content_type: "lesson"
created: "2023-12-14"
updated: "2023-12-14"
author: "Daniel Scott"
suggestions for improvement: ""
---

# Introduction to HTML

In this module, students will deepen their understanding of web development by learning how to markup the structure of a web application using HTML. This lesson builds on the developer environment and version control basics covered in the previous lessons.

**By the end of this lesson, students are expected to:**
- Understand the fundamental structure of an HTML document.
- Learn to create and modify HTML elements to structure a web page.
- Apply version control to their HTML projects using Git and GitHub.

## Roadmap:

- Understanding HTML Structure
- The Basic HTML Document
- Building the Weather Application Interface
- Adding Content and Structure
- Styling with CSS
- Adding Interactivity with JavaScript
- Applying version control with git

### Understanding HTML Structure
Today, we'll explore how HTML forms the backbone of all web pages. It's the foundation that we style with CSS and enhance with JavaScript. Think of it as the structure of a house, which we then paint and furnish.

#### The Basic HTML Document

Let's start with this code:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <script defer src="script.js"></script>
  </head>
  <body>
    <h1>Hello World</h1>
  </body>
</html>
```

**Start With a Simple Structure:** 
  Let's begin with the `<!DOCTYPE html>` declaration. This line tells the browser that we're using HTML5. Then, we have our root element, `<html>`, which wraps everything in our document. 
  
  Inside it, the `<head>` section contains meta-information, like our `<meta>` tags for character set and responsiveness, and a `link` and `script` tag to reference to CSS or JavaScript files; we'll talk more about these in future lessons.
  
  The `<body>` is where all our visible content goes. The first piece of content we'll start with will be a level 1 or `h1` heading tag; level one refers to the priority rating for this heading. In other words, this is the most important heading on the page. 
  
  Also, note the indentation; this is important for readability and organization. Remember, proper structure is key to a well-organized webpage.
  
It's time to move on to the next phase of development:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <script defer src="script.js"></script>
    <title>Weatherfy</title>
  </head>
  <body>
    <header>

    </header>
    <main>
      
    </main>
    <footer>
     
    </footer>
  </body>
</html>
```
**From Simple to Complex:** 
  Now, let's evolve from a basic 'Hello World' to something more complex like 'Weatherfy'.

  First things first, let's nest a `<title>` tag with text inside the `<head>` tag so the browser can properly display our application's name.
  
  Also notice how we use semantic elements to frame the content for our page such as the `<header>` for the top section, `<main>` for the core content, and `<footer>` for the bottom part. These elements make our code more readable, accessible, and they serve as labels for the various types of content that will exist on our website.

### Building the Weather Application Interface

Let's build the interface for our Weatherfy application. This is where we start shaping our webpage to do something interesting.

**Adding Content and Structure**

Here's what our code should look like next  _(see dialogue below for explanation)_:

```html
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <script defer src="script.js"></script>
    <title>Weatherfy</title>
  </head>
  <body>
    <header>
      <h1>Weatherfy</h1>
    </header>
    <main>
      <section>
          <h2>Current Weather Conditions</h2>
          <p>It is currently 75 degrees and sunny in San Diego, CA.</p>
          <div>
            <input>
            <button>Get Weather</button>
          </div>
      </section>
    </main>
    <footer>
     
    </footer>
  </body>
</html>
```

**Creating Headers and Main Content Area:** 
  We used the `<header>` tag to define the introductory content, typically housing the `<h1>` tag for our main title. In this case we added an `<h1>` tag with the application's title.
  
  The `<main>` element then holds the core content of our page, structured using a single`<section>` tag; inside of this tag we have a level 2 heading or `<h2>` tag, where we can help the user understand where to see current weather data. There is also a `<p>` tag right below this `<h2>` tag that indicates the current weather conditions w/text. In summary, just like the `<h1` element, the `<h2>` and `<p>` elements are used for text; however, heading elements like `<h1>` or `<h2>` tags are used specifically for section headings and they use numbers to indicate their level of importance. Right now, we'll use static text for the content for this section, but eventually we'll replace it with dynamic content we'll generate with JavaScript. 

**User Input and Buttons:** 
  For user interaction, we'll introduce form elements like `<input>`, where users can type in data, and `<button>` elements to submit or trigger actions. These are crucial for interactive applications.

### Styling with CSS
Now, let's talk about CSS. The `style.css` file linked in our HTML determines the look and feel of our elements. CSS allows us to add colors, adjust layouts, and much more, making our website visually appealing.

### Adding Interactivity with JavaScript
JavaScript brings our website to life. The `script.js` file linked at the end of our HTML adds functionality. For Weatherfy, it's responsible for fetching weather data and updating our webpage. It's the magic that makes our site interactive.

### Applying Version Control with Git

**Git Basics:** 
Let's revisit Git. Remember the basic commands like `git add`, `git commit`, and `git push`? These are our tools for tracking changes and maintaining different versions of our project.
  
**Version Control in Practice:** 
As you modify your HTML document, consistently commit your changes. This practice is essential for managing project versions and collaborating with others. 

Let's see how we can use Git to track our progress and GitHub to store our project remotely.

At this point, we've already made some changes to the source code for our weatherfy project; the next step involves using git commands from the command line to stage, commit, and the push our code to GitHub.

**Step 1:** Open your terminal application and navigate to the root of your project directory.
**Step 2:** Use the `git init` command to initialize an empty `git` repository inside your project directory.
**Step 3:** Use the `git add -A` command to stage all new and modified files inside the project directory to the new repository.
**Step 4:** Use the `git commit` command with commit message as follows: `git commit -m "wip: adds current changes to project"`; this way we can take the changes we stages and write them as history in our new repository.
**Step 5:** All we need to do now is create a repository in GitHub and add a remote reference to our repo as follows:

<!-- TODO: finish this section -->
```shell

```


## Conclusion
We've traveled from a basic HTML document to a more structured and complex one. It's crucial to understand HTML structure, the role of CSS and JavaScript, and how version control with Git and GitHub integrates into our web development workflow.

## Resources
- [Comprehensive Guide to HTML Elements and Attributes](https://www.w3schools.com/html/)
- [Tutorials on CSS for Styling HTML Elements](https://www.css-tricks.com/)
- [Documentation on Basic JavaScript Functionality](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Git and GitHub Resources for Version Control](https://github.com/git-guides/)
