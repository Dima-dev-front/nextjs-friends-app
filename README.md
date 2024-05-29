# Next.js Demo Project

This a demo Next.js 14 project, which leverages some of the Next.js 14 features.

I tried to keep it simple, but also wanted to use as many Next.js features as I could. There are still lots of things we can do in this project, server actions (if data is fetched from the real server), partial prerendering, loading pages, and so on...

## Demo

[DEMO-LINK](https://nextjs-friends-app.vercel.app/)

## Tech Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- date-fns - for date formatting
- React icons - for icons
- Zustand - for state management
- React Hook Form - for forms
- Lodash debounce - for debounce in the search input

## Features

- Responsive design
- Displaying of data
- Editing of data
- Pages are rendered statically
- Each page has its own metadata `title`
- Edit pages show prefetched generated metadata
- Navigation between pages

## Run Locally

Clone the project

```bash
  git clone git@github.com:Dima-dev-front/nextjs-friends-app.git
```

Go to the project directory

```bash
  cd nextjs-friends-app
```

Install dependencies

```bash
  npm i
```

Start the server

```bash
  npm run dev
```
