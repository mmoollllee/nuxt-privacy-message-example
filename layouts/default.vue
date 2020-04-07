<template>
  <div>
    <CookieMessage></CookieMessage>
    <Header class="container row" />
    <nuxt />
    <Footer />
  </div>
</template>

<script lang="ts">
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import CookieMessage from '@/components/cookie/CookieMessage.vue'

export default {
  components: {
    Header,
    Footer,
    CookieMessage
  }
}
</script>
