<template>
  <div>
    <Menu />
    <div v-html="md" />
  </div>
</template>

<script>
import Menu from '~/components/Menu.vue'
import md from '~/markdownPages/help/profiles-and-my-work.md'

export default {
  components: {
    //Logo
    Menu
  },
  computed: {
    md() {
      return md
    }
  }
}
</script>
