# Belmontpark HOA website

This is the source code that powers the HOA's [website](https://www.belmontparkhoa.net).

## About this project

The site is written in [Next.js](https://nextjs.org/docs) and deployed to CloudFlare workers infrastructure.

## Develop

In order to develop this site locally, you need a node and git installed.  The checkout out the repo  and you can run the local version like this:

```bash
# git clone the repo and cd into the root directory
npm install
npm run dev
# or similar package manager command
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Preview

Preview the application locally on the Cloudflare runtime:

```bash
npm run preview
# or similar package manager command
```

## Standard Deploy

The repo is configured for deployment upon successful commits to the main branch.  Process as follows

1. Make a branch off of main, develop changes, push branch to repo.
2. Make a pull request into main.
3. Once PR is approved, merge into main.
4. Automation via the CloudFlare Builds will deploy.

## Manual Deploy

The site can be manually deployed with the following command.  This is not the normal course of action and should
only be done in the event of a problem with the automated deploy method.

```bash
npm run deploy
# or similar package manager command
```

