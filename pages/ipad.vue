<template>
  <div>
    <Menu />
    <div v-html="md" />
  </div>
</template>

<script>
import Menu from '~/components/Menu.vue'
import md from '~/markdownPages/ipad.md'

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
