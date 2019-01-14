<template>
  <section class="container">
    <div>

      <Menu />

      <h1>
        Badge Directory
      </h1>
      <p>Below are all of the Digital Badges available through Mouse Create, and a list of the required projects for each.</p>
    </div>
  </section>
</template>

<script>
import Menu from '~/components/Menu.vue'
import badges from '~/static/js/badges.js'
export default {
  components: {
    Menu
  }
}
</script>

<style>
</style>
