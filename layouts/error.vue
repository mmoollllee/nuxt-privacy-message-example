<template>
  <main>
    <h1 class="container title">
      <span class="bg-white">404</span>
    </h1>
    <div class="container grid-m">
      <section class="card">
        <h2>
          Diese Seite wurde nicht gefunden<br /><span class="bg-white"
            >Fehler {{ error.statusCode }}</span
          >
        </h2>
        <p>
          Wie es aussieht, wurde an dieser Stelle nichts gefunden. Möchten Sie
          zurück zur Startseite?
        </p>
        <nuxt-link to="/" class="button" data-icon-left="b"
          >Zur Startseite</nuxt-link
        >
        <h4 class="mt-5">Fehler Info</h4>
        <p>{{ error.message }}</p>
      </section>
    </div>
  </main>
</template>

<script lang="ts">
export default {
  props: {
    error: {
      type: Object,
      required: true
    }
  },
  layout: 'default',
  head() {
    return {
      title: 'Seite nicht gefunden'
    }
  }
}
</script>
