<template>
  <div>
    <Menu />
    <div v-html="md" />
  </div>
</template>

<script>
import Menu from '~/components/Menu.vue'
import md from '~/assets/md/help/projects.md'

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
