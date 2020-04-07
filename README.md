# nuxt-privacy-message-example

> I want to learn how to create a NUXT module from this template, which has the components and the store functionality built in.

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

## Configuration

This template is packed with some tools for a faster workflow.

### General
- `nuxt.config.js`
- `config/infos.json` for contact information that will be used in different places site-wide
- `menus.json` to generate main menu, footer menu and social menu

### Image-Sizes
- Check `compontents/lib/ImageSet.vue` to adjust image-sizes for your custom `src-set`

### Webfonts
- Add preconnect URL for external Webfonts to `nuxt.config.js` in `head.link`
- Use [local-webfont](https://github.com/swissspidy/local-webfont) to download webfonts css and add `display: swap` to css file (see: `css/_font.scss`)
- Add Custom Families to `nuxt.config.js` in `webfontloader` (see: [nuxt-webfontloader](https://github.com/Developmint/nuxt-webfontloader))

### Favicon & Manifest
- Replace `static/favicon.svg`
- Change `config/faviconDescription.json` or [generate new one](https://github.com/pimlie/nuxt-rfg-icon#rfg)
- `favicon.ico` will be generated through `nuxt-rfg`

### Sitemap
- Change settings in `nuxt.config.js`
- Use `sitemap.routes` to overwrite priorities or add more URLs

### Contact Form
- Change Message Body and email address' in `static/mailer.php`

### [Icon-font-generator](https://github.com/Hammie/icon-font-generator)

- Generates Icon Font from `assets/icons/*.svg` to `static/fonts/icon-font.*`.
- Uses `config/codepoints.json` to map unicode characters for the font.
- Generates CSS Classes for different icons to `css/_icons.scss` from template placed in `helpers/icon-font-template.hbs`
- Generates list of Icons to `helpers/icons.json`. Used in `icons.vue` page to show all icons.
See `package.json` scripts key for options.

``` bash
npm run icons
```

### Cookie Message
- Every key in `cookieGroups` in `config/cookieMessage.json` will be a group of services in the message. See the example to create new groups.
- Use the store service to execute code when something is enabled.
- see `privacy.vue` for related privacy informations


## ToDo
- Remove Hammer.js?
- Replace Fancybox with https://fancyapps.com/next/ and drop jQuery
- Cookie Message as extra component
- Remove Swiper?
- Remove Vue Bootstrap?
