# Using CI/CD in my portfolio site
## TLDR
I keep forgetting the commands to build and deploy -> I used Github Actions to automate the process on every code change

## Motivation

Whenever I finish a project or an internship, I would update my portfolio site to kind of remember what I did and the learning pointers I had throughout the experience. I would write the markdown files, upload the images and push to Github. Then I hit a roadblock...

> I forgot the commands to build and deploy my changes. haha :(

Since Github pages is a statically hosted website and my portfolio site is a SPA, I had a small hack to bypass that by building the 404.html to redirect to index.html. Hence whenever I build the app, I had to create a 404.html file to point to index.html. This step was crucial and not remembering the steps to build took me a while to figure out.

So basically the build and deploy process was:

```
npm install
npm run build
cp dist/index.html dist/404.html
npm run deploy
```

These 4 lines seem pretty easy to execute for deployment, but trust me, after a few months of not updating the site, it is easy to forget how to deploy anymore.

## The Fix
So I researched on how people get by this, and of course the solution was to use CICD. CICD's main purpose is to automate testing and deployment, which meant that developers do not need to remember the command lines to execute testing, building and deployment. If my simple website took 4 lines to test, build and deploy, I'm sure that many complex applications will require many more lines and CICD can help to automate this portion!

For this project, I used Github Actions to automate this process upon every push to my main branch.

This is my workflow file:
```

name: Deploy Vite Site to GitHub Pages

on:
  push:
    branches:
      - main   # change if your default branch is different

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: true

jobs:
  build-and-deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm

      - name: Install dependencies
        run: npm install

      - name: Build project
        run: npm run build

      - name: Setup Pages
        uses: actions/configure-pages@v5

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

## Results
I'm proud to say that this simple workflow file has made updating my portfolio site much simpler and easy. This made me appreciate the invention of CICD and the motivation behind it :)



