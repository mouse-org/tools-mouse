<template>
  <section class="container">
    <div>

      <Menu />
      <div v-html="md" />
      
      <div
        v-for="badge in badges"
        :key="badge.badge_name"
        class="mouse-activity well building"
      >
        <a
          :href="badge.badge_url"
          target="blank"
        >
          <img :src="badge.badge_image">
        </a>
        <ul class="project-list">
          <li
            v-for="project in badge.projects"
            :key="project"
          >
            <a
              :href="'https://create.mouse.org/project/' + allProjects[project]['id'] + '/'"
              target="_blank"
            >
              {{ allProjects[project]['title'] }}
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import md from '~/assets/md/badge-directory.md'
import Menu from '~/components/Menu.vue'
import badges from '~/assets/json/badges.json'
import projects from '~/assets/json/projects.json'
const allProjects = projects.allProjects
const optionalProjects = projects.optionalProjects

export default {
  components: {
    Menu
  },
  data() {
    return {
      badges: badges,
      allProjects: allProjects,
      optionalProjects: optionalProjects
    }
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
