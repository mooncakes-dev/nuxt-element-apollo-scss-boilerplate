# Nuxt-Element-Apollo-SCSS Boilerplate

This is a simple boilerplate project for a quick set-up. 

# Installation

 - Clone this repo
 - `cd your-project-name`
 - Install packages `npm install`
 - Start a dev project  `npm run dev`


## Build Setup

 

```bash

# install dependencies

$ npm install


# serve with hot reload at localhost:3000

$ npm run dev

 
# build for production and launch server

$ npm run build

$ npm run start

 
# generate static project

$ npm run generate

```
For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

# Features

## Included

Currently this boilerplate has  the following:

 - **Element UI** plugin set up. If you wish to switch up the theme with your variables, you can do so, in pre-made scss file.
 - **Apollo, Graphql**. There are example files to get you going with those.
 - **ESLint, Stylelint** . Linting rules are already premade and contain custom rules but also extend reccomended rules. These can be altered to personal preference, check docs.
 - **Husky** . Git hooks, so you do not have to worry about linting mid development. These can be altered and extended. `pre-commit` will lint your files and potentially will fix all of the fixable errors. `pre-push` will run tests. 



## Future

Currently, I am still missing some bits and bops. Here is a list of everything that I plan to add to complete this boilerplate. This is mainly for me, so I don't forget.

 - **Tests**. Struggling to get Jest to work, so I need to figure this out to test components and graphql.
 - **Turning this into an npm package** instead of cloning it everytime. Makes it easier to maintain as well.
 - **Examples**. Add  examples of how to make a custom theme and/or other examples as well. 

