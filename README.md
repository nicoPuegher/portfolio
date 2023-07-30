# Personal Portfolio

### Fully responsive personal portfolio web application.

I am a solution-oriented frontend developer, a lifelong self-taught student, and a software engineering enthusiast. I enjoy development because of the satisfaction I get by overcoming challenges. I am motivated by the opportunity that software provides to positively impact an individual's life, myself included.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Link](#link)
- [My process](#my-process)
  - [Main stack](#main-stack)
  - [Secondary stack](#secondary-stack)
  - [What I learned](#what-i-learned)
  - [Available Scripts](#available-scripts)

## Overview

### The challenge

Users should be able to:

- [x] View an optimal layout on any device
- [x] Get to know about me
- [x] See works and individual projects
- [x] Go to LinkedIn and GitHub
- [x] Change between light and dark mode

### Link

Live web application: [Nicolas' Portfolio](https://nicopuegher.github.io/portfolio/)

## My process

### Main stack

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
![Chakra](https://img.shields.io/badge/chakra-%234ED1C5.svg?style=for-the-badge&logo=chakraui&logoColor=white)
![Framer](https://img.shields.io/badge/Framer-black?style=for-the-badge&logo=framer&logoColor=blue)
![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)

### Secondary stack

`Emotion` `React Icons` `Prettier`

### What I learned

- Setup and deploy a **_Next.js_** project.
- Style with **_Chakra UI_** and create a custom theme.
- Create custom styled components with **_Emotion_**.
- Animate elements with **_Framer Motion_**:

```js
import { chakra, shouldForwardProp } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const StyledSection = chakra(motion.section, {
  shouldForwardProp: prop => {
    return shouldForwardProp(prop) || prop === 'transition';
  },
});

const Section = ({ children, delay = 0, ...props }) => (
  <StyledSection
    initial={{ y: 10, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.7, delay }}
    {...props}
  >
    {children}
  </StyledSection>
);

export default Section;
```

## Available Scripts

In the project directory, you can run:

### `npm install`

Installs all necessary external modules the project depends on.

### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.
