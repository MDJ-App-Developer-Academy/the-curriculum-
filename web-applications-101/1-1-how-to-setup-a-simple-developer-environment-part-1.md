---
content_type: "lesson"
created: "2023-12-12"
updated: "2023-12-12"
author: "daniel scott"
suggestions for improvement: "Interactive Elements: If live, consider incorporating interactive elements like polls or quizzes to engage the audience. For recorded sessions, prompt viewers to pause and try out steps on their own. Troubleshooting Tips: Include common troubleshooting scenarios or FAQs that beginners might encounter when setting up VS Code or creating their first project. Recap Segments: Introduce brief recap segments after major sections to reinforce learning, especially important for recorded sessions."
---

# How to Setup a Simple Developer Environment Part 1

In this module, students will learn the basics of setting up a simple developer environment so they can be better prepared to build web applications with HTML, CSS & JavaScript.

**By the end of this lesson, students are expected to:**
- Learn what a text editor is and how to use it (specifically, VS Code).
- Understand how to extend the capabilities of a text editor using extensions from the VS Code extensions store.
- Use a text editor to manage the file system of a web application project.

**Roadmap:**

- Introduction to text editors and VS Code
- Download and setup VS Code on Windows
- Setting up a Basic Project File Structure
- Customize your text editor with themes
- Preview your application in the browser with LiveServer
- Conclusion
- Resources

## Introduction to Text Editors and VS Code

Text editors are essential tools for developers, offering a simple yet powerful environment for coding. 

**Why use a Text Editor instead of a WYSIWYG Editor?**

Using a text editor for web development offers several advantages over a WYSIWYG editor. Below are key reasons:

### Greater Control Over Code
- **Precision:** Text editors provide more control and precision in writing code. You can write and edit every line of code exactly as needed, ensuring no unnecessary or redundant code is included.
- **Customization:** You have the flexibility to structure and organize your code in a way that best suits your project and coding style.

### Learning and Understanding
- **Fundamental Understanding:** Working with a text editor encourages a deeper understanding of the code, the syntax, and the way different languages interact. This is crucial for debugging and problem-solving.
- **Best Practices:** You learn industry-standard practices and are not limited to the functionalities of a WYSIWYG editor.

### Versatility and Flexibility
- **Language Support:** Text editors often support a wide range of programming languages and file types, offering versatility in the types of projects you can work on.
- **Extensions and Plugins:** Most text editors have a variety of extensions and plugins that can be added to extend their functionality, tailored to your specific needs.

### Performance and Efficiency
- **Faster Load Times:** Text editors are typically lighter and faster than WYSIWYG editors, which can be bloated with features that slow down performance.
- **Efficiency:** Advanced features like code completion, syntax highlighting, and error detection make coding more efficient.

### Collaboration and Version Control
- **Integration with Version Control Systems:** Text editors often integrate seamlessly with version control systems like Git, facilitating collaboration and version tracking.

### Portability and Accessibility
- **Access Across Platforms:** Text editors are available for all major operating systems and often have cloud-based options, making it easy to work on your projects from anywhere.

In summary, while WYSIWYG editors are user-friendly and good for beginners or simple projects, text editors offer the precision, control, and flexibility needed for professional web development. Among these, Visual Studio Code (VS Code) is a standout choice for many reasons.

### Why Choose VS Code Over Other Text Editors?

- **Versatility:** VS Code supports a wide range of programming languages and frameworks, making it suitable for various types of development work.
- **User-Friendly Interface:** It has an intuitive and customizable user interface that caters to both beginners and experienced developers.
- **Extensibility:** With its extensive library of extensions, you can add nearly any functionality you might need.
- **Integrated Terminal:** VS Code includes an integrated terminal, making it easy to execute shell commands from within the editor.
- **Debugging Tools:** It comes with powerful built-in debugging tools, simplifying the process of finding and fixing bugs.
- **Git Integration:** VS Code has excellent built-in support for Git, allowing for easy version control and collaboration.
- **Regular Updates:** Microsoft regularly updates VS Code, adding new features and improvements based on community feedback.
- **Performance:** Despite its wide range of features, VS Code remains fast and responsive, even in large projects.

### Other Text Editor Options

While VS Code is a popular choice, there are several other text editors that you might consider:

- **Sublime Text:** Known for its speed, clean interface, and rich set of keyboard shortcuts.
- **Atom:** Developed by GitHub, Atom is highly customizable and great for collaboration.
- **Notepad++:** A lightweight, Windows-only editor, perfect for quick edits and small projects.
- **Vim:** A command-line editor known for its efficiency and control, favored by many seasoned developers.
- **Emacs:** Another command-line editor, known for its extensibility and customization options.

### Highlighted Features of VS Code

1. **IntelliSense:** Offers smart completions based on variable types, function definitions, and imported modules.
2. **Customizable Workspace:** Allows for personalization with themes, keyboard shortcuts, and user-defined settings.
3. **Extension Marketplace:** Access to thousands of extensions for additional languages, themes, debuggers, and more.
4. **Remote Development:** Ability to develop on remote machines, containers, and Windows Subsystem for Linux (WSL).
5. **Live Share:** Enables real-time collaborative editing and debugging with others.

In conclusion, VS Code stands out due to its blend of features, performance, and flexibility, making it a top choice for developers across various disciplines.

## Download and Setup VS Code on Windows

1. Visit the [VS Code website](https://code.visualstudio.com/).
2. Click on the Windows download link.
3. After downloading, run the installer and follow the instructions.

## Setting up a Basic Project File Structure

Before diving into extensions like Live Server, it's essential to understand how to set up a basic project file structure. In this section, we will create a simple web project with HTML, CSS, and JavaScript files.

1. **Create a New Project Folder:**
   - Open VS Code.
   - Go to `File > Open Folder...` and create a new folder for your project.

2. **Create HTML, CSS, and JS Files:**
   - In the Explorer pane, right-click on your project folder.
   - Select `New File` and create an `index.html` file.
   - Repeat the process to create a `styles.css` and `scripts.js` file.

3. **Add Basic HTML Boilerplate:**
   - Open the `index.html` file.
   - Type `!` and press `Tab` to generate the basic HTML5 boilerplate.
   - Inside the `<body>` tag, add an `<h1>` element with the text "Hello World".

4. **Link CSS and JS Files:**
   - Inside the `<head>` section of your `index.html`, add a link to the `styles.css` file:
     ```html
     <link rel="stylesheet" href="styles.css">
     ```
   - Before the closing `</head>` tag, add a script tag to include the `scripts.js` file:
     ```html
     <script defer src="scripts.js"></script>
     ```

5. **Save Your Files:**
   - Ensure all your files are saved.

6. **Review HTML File**
    - Let's take a moment to review our work, your HTML file should look like the below example:

    ```html
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <script defer src="script.js"></script>
            <link rel="stylesheet" href="style.css">
            <title>Document</title>
        </head>
        <body>
            <h1>Hello World</h1>
        </body>
    </html>
    ```

This set up represents the initial stage of our project development and will serve as a basis for us to discuss how the content inside our HTML, CSS and JavaScript files will work together.

## Customize Your Text Editor with Themes

Customizing your text editor can make coding a more enjoyable experience. Let's install the Synthwave '84 theme.

1. Open VS Code.
2. Go to the Extensions view by clicking on the Extensions icon in the Sidebar or by pressing `Ctrl+Shift+X`.
3. Search for "Synthwave '84" by Robb Owen.
4. Click on the Install button.
5. After installation, click on the Color Theme button (`Ctrl+K Ctrl+T`) and select Synthwave '84 from the list.

## Preview Your Application in the Browser with LiveServer

The Live Server extension allows you to preview your web application in real-time as you develop.

1. Open VS Code.
2. Go to the Extensions view (`Ctrl+Shift+X`).
3. Search for "Live Server" by Ritwick Dey.
4. Click on the Install button.
5. Once installed, open your HTML file.
6. Right-click on the document and select "Open with Live Server" or click on the Go Live button in the Status Bar to start the server.

## Conclusion

In this lesson, you've learned how to set up a basic development environment using VS Code. You now know how to install and use themes and extensions to enhance your coding experience.

## Resources

- [VS Code Documentation](https://code.visualstudio.com/docs)
- [Synthwave '84 Theme](https://marketplace.visualstudio.com/items?itemName=RobbOwen.synthwave-vscode)
- [Live Server Extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
