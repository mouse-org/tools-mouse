<template>
  <section class="container">
    <div>
      <Menu />
      <div v-html="md" />
    </div>
  </section>
</template>

<script>
import Menu from '~/components/Menu.vue'
import md from '~/assets/md/index.md'

export default {
  components: {
    Menu
  },
  computed: {
    md() {
      return md
    }
  }
}
</script>

<style>
</style>
