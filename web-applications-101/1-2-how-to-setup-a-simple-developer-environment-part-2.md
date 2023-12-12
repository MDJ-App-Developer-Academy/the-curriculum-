---
content_type: "lesson"
created: "2023-12-12"
updated: "2023-12-12"
author: "Daniel Scott"
suggestions for improvement: ""
---

# How to Setup a Simple Developer Environment Part 2

In this module, students will continue with setting up a basic developer environment by learning about version control, more specifically git, and how they can use it to manage the versions of their application as it evolves over time.

**By the end of this lesson, students are expected to:**
- Learn what version control is and why it's important in software development.
- Gain more insight into git, the most popular version control software.
- Learn about GitHub and how developers use it to manage projects, contribute to open source software, and collaborate on projects.
- Install WSL on Windows and install a Linux Distribution from the Microsoft App Store.
- Install GitBash as an alternative to WSL.
- Brief Introduction to the command line and how it can be used to interact with a computer's operating system.
- Practice basic git commands.

**Roadmap:**

- Introduction to Version Control
- Intro to Git and Github
- Configure WSL and Install Linux Distribution 
- Install Gitbash as an Alternative to WSL
- Brief Introduction to the Command Line
- How to execute basic git commands
- Conclusion
- Resources

## Introduction to Version Control

Version control is a system that records changes to a file or set of files over time so that you can recall specific versions later. 

**Why It's Important:**
- **Track Changes:** Version control allows developers to track and understand changes made to a project over time.
- **Collaboration:** It facilitates collaboration among multiple developers working on the same project.
- **Backup:** Acts as a backup mechanism by keeping different versions of a project.

## Intro to Git and Github

**Git:** Git is a free, open-source version control system used to handle everything from small to very large projects with speed and efficiency.

**GitHub:** GitHub is a cloud-based hosting service that lets you manage Git repositories. It provides a Web-based graphical interface and access control, among other features.

## Configure WSL and Install Linux Distribution 

**WSL (Windows Subsystem for Linux):** A compatibility layer for running Linux binary executables natively on Windows 10 and Windows 11.

1. **Enable WSL:** Instructions on enabling WSL can be found on the Microsoft website.
2. **Install Linux Distribution:** Once enabled, choose a Linux distribution from the Microsoft Store and install it.

## Install Gitbash as an Alternative to WSL

**GitBash:** A bash emulation used to run Git from the command line.

1. **Download GitBash:** Visit the official Git website to download and install GitBash for Windows.

## Brief Introduction to the Command Line

The command line is a text-based interface to the system. You can perform nearly any task required by typing commands.

## How to execute basic git commands

1. **Initialize a Repository:**
   - Use `git init` in your project folder to start a new repository.
2. **Add Changes:**
   - Use `git add` to add files to the staging area before committing.
3. **Commit Changes:**
   - Use `git commit -m "commit message"` to commit your changes.
4. **View Status:**
   - Use `git status` to see uncommitted changes.

**Practice Task:**
- Update the `index.html` file from the previous lesson, changing the "Hello World" text to "Hello, [Your Name]!".
- Use the git commands learned to add and commit this change.

## Conclusion

In this lesson, we've explored the basics of version control, Git, and GitHub. These tools are vital in managing and collaborating on software projects. The hands-on practice with git commands will lay the groundwork for more advanced version control operations in future projects.

## Resources

- [Git Documentation](https://git-scm.com/doc)
- [GitHub Learning Lab](https://lab.github.com/)
- [WSL Installation Guide](https://docs.microsoft.com/en-us/windows/wsl/install)
