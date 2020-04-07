# nuxt-privacy-message-example

> I want to learn how to create a NUXT module from this template, which has the components and the store functionality built in.

[**Demo**](https://mmoollllee.github.io/nuxt-privacy-message-example/)

## Build Setup

``` bash
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

## Dependencies
This module will depend on the following tools:
- [Nuxt 2](https://github.com/nuxt/nuxt.js)
- [nuxt-vuex-localstorage](https://github.com/rubystarashe/nuxt-vuex-localstorage)
- [Bootstrap](https://github.com/twbs/bootstrap) but only in case of the CSS.

## Configuration

This template is packed with some tools for a faster workflow.

### General
- `nuxt.config.js`

### Cookie Message
- Every key in `cookieGroups` in `config/cookieMessage.json` will be a group of services in the message. See the example to create new groups. This is needed for
- Use the store service to execute code when something is enabled.
- see `privacy.vue` for related privacy informations


## ToDo
- Integrate example of google analytics initaliziation after it beeing allowed
- Wipe out CSS.
- Integrate Icons as SVGs not as webfont

## Open Questions
- Should Bootstrap be delivered as dependency with the module? I guess the user should be free to use whatever other CSS?
