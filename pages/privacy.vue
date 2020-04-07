<template>
  <main>
    <h1 class="container title">
      <span class="bg-primary">Privacy Page</span><br />
      <span class="bg-white">Privacy Message Example</span>
    </h1>
    <div class="container">
      <section id="content" class="card row">
        <header class="col-12">
          <h2>Privacy</h2>
        </header>
        <div class="col-12">
          <p>
            Privacy text will be displayed here. And a option to reopen
            privacy-message.
          </p>
          <button
            @click="openCookiePrefs"
            class="button secondary"
            data-icon-right="n"
          >
            Change Preferences
          </button>
        </div>
      </section>
    </div>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  methods: {
    openCookiePrefs() {
      this.$store.commit('cookies/openMessage')
    }
  },
  head() {
    return {
      title: 'privacy'
    }
  }
})
</script>
