<template>
  <footer
    class="container align-items-end d-flex flex-wrap justify-content-center grid justify-items-start"
  >
    <nav
      class="col-12 row justify-content-center py-5 grid-col-span-3 order-m-6"
    >
      <nuxt-link to="/impressum" class="col-auto">Impressum</nuxt-link>
      <nuxt-link to="/privacy" class="col-auto">privacy</nuxt-link>
    </nav>
  </footer>
</template>

<style lang="scss" scoped>
nav {
  a {
    color: #fff;
  }
}
</style>
