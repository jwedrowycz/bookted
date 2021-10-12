# bookted
Application based on popular selling platform like Vinted or OLX, but the main goal of this one is selling "second hand" books.

To see backend project, see the [bookted-api](https://github.com/jwedrowycz/bookted-api).

## Table of Content
- [bookted](#bookted)
  * [Table of Content](#table-of-content)
  * [Build setup](#build-setup)
  * [Technology and dependencies](#technology-and-dependencies)
  * [General informations](#general-informations)
  * [TODO](#todo)
  * [License](#license)

## Build setup
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

## Technology and dependencies
- Node 6
- VueJS 2 / NuxtJS 2
- Tailwind CSS

## General informations
Frontend is build as SPA, to provide to the users the greatest possible interactivity and smoothness. 
Also I wanted to accomplish simplicity and clearness of UI. 
At this moment, there are only several pages, like home page and single book view but I think they outline the overall concept pretty well.

## TODO

- [ ] add rest of the pages
    - [ ] user profile 
    - [ ] client - customer conversation
    - [ ] payment and shipment <sub><sup>(in the distant future probably)<sup><sub>
    - [ ] user account setting
    - [ ] rest of the auth, like forgot password etc.
    - [ ] observed users auctions
    - [ ] observed and bought auctions
- [ ] connect front with backend
- [ ] add dark mode


## License
MIT