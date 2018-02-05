# prototype_fileopensave

> This is a quick dirty prototype app, to test various different things and should not be considered anywhere close to proper programming. Also do not use this in any form of real app/code.

> This sample is a [VueJS plugin prototype](/src/renderer/plugins/electron-vue-analytics) for Google Analytics (a wrapper around `electron-ga` npm package).

> If you so incline to test this prototype, make sure to update [main.js](/src/renderer/main.js) with your own Google Analytics trackID 

```
Vue.use(analytics, {
  trackId: 'UA-XXXXXXXXX-X'
})
```


## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:9080
npm run dev

# build electron application for production
npm run build

# run unit & end-to-end tests
npm test


# lint all JS/Vue component files in `src/`
npm run lint

```


## Screenshots
![Screenshot Landing page](/doc/screenshot-01.png)
![Screenshot Google Analytics](/doc/screenshot-02.png)
![Screenshot Devtools showing events fired](/doc/screenshot-03.png)
---

This project was generated with [electron-vue](https://github.com/SimulatedGREG/electron-vue)@[1c165f7](https://github.com/SimulatedGREG/electron-vue/tree/1c165f7c5e56edaf48be0fbb70838a1af26bb015) using [vue-cli](https://github.com/vuejs/vue-cli). Documentation about the original structure can be found [here](https://simulatedgreg.gitbooks.io/electron-vue/content/index.html).
