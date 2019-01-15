<template>
  <div>
    <Menu />
    <div v-html="md" />

    <div id="apps">
      <div
        v-for="app in apps"
        :key="app.url"
        class="app-thumb"
      >
        <a
          :href="app.url"
          target="_blank"
        >
          <img :src="app.thumbnail">

          <div class="app-name">
            {{ app.name }}
          </div>
        </a>
      </div>
    </div>

  </div>
</template>

<script>
import Menu from '~/components/Menu.vue'
import md from '~/markdownPages/apps.md'
import apps from '~/json/apps.json'

export default {
  components: {
    Menu
  },
  data() {
    return {
      apps
    }
  },
  computed: {
    md() {
      return md
    }
  }
}
</script>
