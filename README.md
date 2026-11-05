# Krishna Sharma --- Personal Portfolio

A responsive personal portfolio website showcasing my projects, skills,
education, and contact information.

> **Live demo:** https://internship-portfolio-nine.vercel.app/
>
> 
> **Repository:** https://github.com/SaturnK-SoulMars/Internship-Portfolio

## Overview

This portfolio is designed to provide a clear introduction to my work
and background. It includes dedicated sections for:

-   **Home** --- a brief introduction and links to key actions.
-   **Projects** --- selected work and project details.
-   **About** --- a short professional introduction.
-   **Education** --- academic background and qualifications.
-   **Skills** --- technologies and tools I work with.
-   **Contact** --- links to GitHub, LinkedIn, and email, plus a contact
    form interface.

The layout is responsive and includes light/dark theme support and
subtle scroll animations.

## Built With

-   HTML5
-   CSS3
-   JavaScript
-   Lenis
-   Google Fonts --- DM Sans and Instrument Serif

## Getting Started

1.  Clone the repository:

    ``` bash
    git clone https://github.com/SaturnK-SoulMars/Internship-Portfolio.git
    ```

2.  Open the project folder:

    ``` bash
    cd YOUR_REPOSITORY
    ```

3.  Open `index.html` in your browser.

    For a local development server, you can use the Live Server
    extension in Visual Studio Code.

## Project Structure

``` text
.
├── index.html       # Portfolio page structure
├── style.css        # Layout, styling, responsive rules, and themes
├── script.js        # Navigation, theme toggle, animations, and interactions
├── profile.jpg      # Profile image
└── resume.pdf       # Downloadable resume
```

Make sure `profile.jpg` and `resume.pdf` are present in the project
root, or update their paths in the HTML.

## Customization

Before publishing, update the sample content with your own information:

1.  Replace the introduction, About section, education history, skills,
    and project details in `index.html`.
2.  Add your real GitHub and LinkedIn profile URLs and professional
    email address to the Contact section.
3.  Replace the sample project links and descriptions.
4.  Add your own `profile.jpg` and `resume.pdf`.
5.  Update the page title, meta description, and favicon if you use one.

## Contact Form

The current contact form may display a front-end confirmation message,
but that alone does **not** send an email. To receive messages, connect
the form to a service such as Formspree or implement your own backend,
then update the form action and JavaScript accordingly.

## Deployment

You can deploy this static website using GitHub Pages:

1.  Push the project files to your GitHub repository.
2.  Open the repository's **Settings → Pages**.
3.  Under **Build and deployment**, select **Deploy from a branch**.
4.  Choose your publishing branch (usually `main`) and the root (`/`)
    folder.
5.  Save and wait for GitHub Pages to publish the site.

Your site URL will be shown in the Pages settings.

## License

Unless a different license is added to this repository, the source code
is provided for personal portfolio use. Add a `LICENSE` file if you want
to specify reuse and distribution terms.
