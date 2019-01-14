<template>
  <div>
    <Menu />
    <div v-html="md" />
    <ul
      v-for="(update, index) in updates"
      id="updates-list"
      :key="index"
    >
      
      <li>
        <h3>{{ update.date }} {{ update.title }}</h3>
        <div
          v-for="(item, index) in update.updates"
          :key="index"
        >
          <p v-html="item" />
        </div>
      </li>
      
    </ul>
    
  </div>
</template>

<script>
import Menu from '~/components/Menu.vue'
import md from '~/markdownPages/updates.md'
import updates from '~/json/updates.json'

export default {
  components: {
    Menu
  },
  data() {
    return {
      updates: updates
    }
  },
  computed: {
    md() {
      return md
    }
  }
}
</script>
