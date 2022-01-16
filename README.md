# Technoscape 2022

Rise up to Technoscape 2022. There would be a bunch of experience made in this year. And of course, a bunch of homeworks to be solved, a.k.a. features and bugs. So, keep brave yourself, stay curious, and ask for help. Aaaaand... Fighting!

## Setting Up

To make web developing easier, we would do basic life skills of developers, copying and pasting. And of course, using another developer's modules to patch everything up, and well using every solved questions popping in stackoverflow. In conclusion... don't be shy to add something else not listed here... or using another thing we may never know. Suprise us.

So here is the list...

**Backbone**
- W3C HTML5 Standard

**Styling Modules**
- Postcss
- Tailwind
```html
<link href="/css/build.css" rel="stylesheet">
```

**Logic Modules**
- jQuery 3.6 (Google CDN)
```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
```

- Scroll Magic
```html
<script src="//cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/ScrollMagic.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/plugins/debug.addIndicators.min.js"></script>
```

**3D Asset**
- ThreeJS
- Model Viewer: https://modelviewer.dev/

*P.s. We would use postcss as css preprocessor. As long as CDN exists, please use it first. Put everything on server would be hard. Also, don't forget to update this document if you use any CDN not listed above.* \
*P.s. 3D Asset modules will follow DnD creativity.*

## Installation

These installation are need for testing, preview, and QA test. If you use Node Modules, Composer, Choco, or any package manager out there, do not hesitate to put your guidance here.

**Node Modules**
This project is using Tailwind and Postcss. To start building the css, please install it first.

1. Install [NodeJS and NPM](https://nodejs.org/en/download/)
2. Run this command
```bash
npm install
```

**Liveserver**

1. Install [Live server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension to VS Code.
2. Run it by clicking "Go Live" from the status bar.

**Ngrok**

1. Download [Ngrok](https://ngrok.com/download)
2. Sign up or Sign in your self in Ngrok site.
3. Open terminal/bash/command prompt and connect your accout by adding your authtoken

```bash
$ cd /route/to/unzipped/node
$ ./ngrok authtoken <token>
```

4. Run it with `ngrok http <port>`

## Running Up

**Building the Tailwind**

There are 2 ways to build the Tailwind, those are final compiled, and precompiled.

For final compiled or running the build once or production mode, you could run this in terminal.

```bash
npm run build
```

The precompiled means it would watch the file and would rebuild if you add something to the file. This called Live Edit. To do so, run the command below

```bash
npm run watch
```

Please keep in your mind those commands above would ONLY compile `postcss/base.css` to be `css/build.css`. It means, you must consider how you rename the ids and classes so it wouldn't conflict with any pages. This would be explained more in standarization.

**Serving**

When you want to test the site you have been made, just click "Go Live" from the right-bottom corner of VS Code's status bar.

After that, you may want to preview your site online. You could use `ngrok` to forward it from your localhost to internet. This thing called `tunneling` (hope you could understand). To run it, just do...

```bash
# format
$ ngrok http <port>

# example
$ ngrok http 8000
```

## Program Workflow

We already have functional requirement document (FRD) which would be your base in build the web. Please read this first: \
https://drive.google.com/storage-object-generated-by-google

In developing the web, you would put full of your attention to the design. We would using Figma to make everything easier. Here is the link: \
https://www.figma.com/file/1Dy0BIiKX2ady7w8OOBjVq/TechnoScape-2022-Website?node-id=0%3A1

The frontend need to be intgrated to backend for fully functionally use. Usually, backend dev would integrate everything in MVC model. Afterthat, frontend dev could start patching the HTML directly from the backend environtment. Guidance for integration could be found in their repository. Here is it... \
https://gitlab.com/alfianzv/technoscape2022-be 

*You may not be informed when the design, content, or FRD updated. That's why you must put your attention to each document... or you just ask your friends who are DnD, Event, or Publication. Communication is the key!*

*Oh, hey! You could also ask us too...*

## Semantic and Standarization

**Folder Structure**

```css
docs
\_ another-docs.md
\_ some-image.png
assets
\_ logo
   \_ logo-black.svg
\_ 3d
   \_ rocket.glb
\_ sponsor
   \_ netsky-512.png
   \_ carbon-64.webp
\_ medpar
   \_ filemagz.png
\_ medsos
   \_ facebook.svg
   \_ instagram.svg
\_ navigation
   \_ home.svg
   \_ back.svg
   \_ key.svg
\_ hackathon
   \_ trophy-1.svg
   \_ trophy-2.svg
fonts
\_ roboto.tff
postcss
\_ component
   \_ card.css
\_ utilities
   \_ colors.css
\_ base.css
\_ home.css
css
\_ base
   \_ base.css
   \_ slider.css
   \_ button.css
\_ home.css
\_ user-dashboard.css
\_ virtual-converence.css
\_ build.css // would be generated by tailwind
js
\_ base
   \_ form-validation.js
   \_ slider.js
\_ home.js
\_ register.js
index.html
login.html
register.html
```

**Semantic Branching**
```bash
# format
<type>/<feature-title>/<sub-title>/<feature-number>/<date>

# example
main
stable/2021-12-24
development
experiment/2021-12-24

feature/register
hotfix/register/password-validation

page/home
section/home/about-us
```

`<type>`: main, test, stable, release, experimental, hotfix, bugfix, feature, page, section

**Semantic Committing & Merging**

```bash
# format
[<status>](<scope>) <section-name|page-name>: <changes description>
[<status>] <section-name|page-name>: <changes description>
<status|scope>: <changes description>

# example
[add](feat) about-us in home: put assets and give styling to about us
feat: put assets and give styling to about us
[fix] register: fix password validation logic 
```

`<status>`: init, add, patch, enable, disable, fix, bugfix, hotfix refactor, remove, merge. \
`<scope>` : test, doc, conflict, feat, section, mixed \
`<scope>` (FE): api, page, section, style, asset, util, logic, modules, etc.

**CSS Naming Standarization**

```css
/* this rule will effect in every size of device. */
div#id-for-only-one-element .mainFunction-subFeature-subFeature{
    /* ... */
}

/* this rule will effect for desktop size. 
   sometimes we could ignore this rules and 
   hope it would do the same thing as larger 
   screen.*/
@media only screen and (max-width:1024){
    /* ... */
}

/* this rule will effect for tablet size */
@media only screen and (max-width:768){
    /* ... */
}

/* this rule will effect for mobile size */
@media only screen and (max-width:320){
    /* ... */
}

/* if there are some condition which cannot be meet
   in every case of media rules above, you could
   add your own. */
@media only screen and (max-width:673){
    /* ...  */
}
```

REMEMBER! The latest rules stated in css would overide every rules above it.

**Works with Tailwind**

Tailwind is utility-first css frameworks which provide modern browser feature. We could make our own css in more simple way. In the sametime, we would using it with postcss as preprocessor and extend its functionality. First, let we learn how it works.

```css
fonts
\_ roboto.tff
postcss
\_ component
   \_ navbar.css
\_ utilities
   \_ colors.css
\_ base.css
\_ page1.css
\_ page2.css
css
\_ build.css
```

Take a look to this folder structure. You may notice there is only one file in css folder, the `build.css`. This file is a compiled version of `postcss/base.css`, and also all files imported to that file. So, what files imported to `base.css`?

The `base.css` would import tailwind and all files in `postcss`, include files in components, utilities, and page styles. For tailwind, it would follow the rules made in `tailwind.config.js` and `postcss.config.js`. But how about page styles?

Page styles must be imported to `base.css`. In the sametime, these would wreck all styling stated in every pages styling. Imagine, if we have a rules named `#hero` for `virtual-conference.html`, but also has `#hero` for `hackathon.html`, what would your expectation be happend? Conflict and style merging. Yes, mess everthing up. So, to avoid the *apocalypse*, we must make a standarization how to works with compiled styles. Basically, just follow this format:

```css
/* format */
#pageName-sectionName{}

/* examples */
#vc-hero{}
```

Better, right? Now, how to mix them. We use `base.css` as the main file. Lets take a look.

```css
/* postcss/base.css */

/* tailwind modules */
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";

/* components & utilities */
@import "https://fonts.google.com/";
@import "../fonts/roboto.tff";
@import "./components/navbar.css";
@import "./utilities/colors.css";

/* page styles */
@import "./hero.css";
@import "./vc.css";
@import "./dw.css";
@import "./ht.css";
@import "./register.css";
@import "./login.css";
@import "./udb.css";
@import "./admin.css";

/* any styling and base concept */
body{
   margin:0px;
   padding:0px;
}

/* desktop*/
@media only screen and (max-width:1024){}

/* tablet */
@media only screen and (max-width:768){}

/* mobile */
@media only screen and (max-width:320){}
```

After you connect all of them, you could just build or watch it. The `css/build.css` would be there. Later, you could just assign it to your html.

```html
<link rel="stylesheet" href="/css/build.css">
```

Voila! It's all done.

Still confused? Ask us.

**Form Standarization**

Remember to encapsulate every div/element which has input that would send data to backend using `<form>` tag. Please use `<button>` instead `<div>` if it wants to interact with backend.

```html
<form id="register" action="" method="POST" enctype="application/x-www-form-urlencoded">
    <input type="text" name="table_colomn_name"
                       value="input name is same as colomn name in database">
    <button type="submit">Register</button>
</form>
```

**Javascript Standarization**

```js
var variableName = "using camelCase";
var _hiddenProps = "add underscore";

function alsoUseCamelCase(){}
function mainFunction__subFeature(){}
function function_for_technical_use(){}
```

**HTML Structure Standarization**
- Screen Size Responsiveness
- use kebab-case for naming id and class of CSS.
- use kebab-case for form field `input[name="confirm-password"]`.
- use camelCase for JS variabel and function.
- use snake_case for JS serializer and props modifier.
- use PascalCase for JS class.

**Etc. Standarization**
- You MUST USE Spaces 4 as indentation
- DO NOT USE tab or anything else than 4 as indentation.

## Notes
- don't hesitate to change this readme as long as you need it
- if you use modules aren't listed above, add the list by yourself. You could ask Project Manager if you need any help
- Semantic and standarization is recommended to make us easier to track changes and fix everything up. We would be really gratefull if you did it.
- Along time ago, Chrome works well in everything. Yep E V E R Y T H I N G. As a result, it messing another browser. For example, look up about glassmorphism in Chrome and Firefox, and you would see how chrome mess in everything. So here what I suggest... Check in every browser's render engine you could use
    - Chromium: Chrome, Edge
    - Gecko: Firefox, Tor Browser
    - Webkit: Safari
    - Internet Explorer (nope), Edge legacy (well... try it)
    - Opera, Brave, etc.
    - We like to suggest just Chrome and Firefox if you mind that much.
- Dealing with Git Merge Conflict? Fix it by yourself. Solving this would help your future self. Prove me.
- I have a suprise for you all if you could make me suprised too... <br /> *Clue: key to legacy.*

## Security Issue
> there is nothing to see here.

## References
- Checking supported rendering feature: https://caniuse.com/
- Test in real browser: https://www.browserstack.com/
- Git Cheatsheet: https://www.freecodecamp.org/news/git-cheat-sheet/
- Git tutorials: https://www.atlassian.com/git/tutorials/what-is-version-control

## License
> there is nothing to see here.