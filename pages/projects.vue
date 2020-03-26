<template>
  <section class="container">
    <div>

      <Menu />


      <table>
        <tr>
          <th>Project</th>
          <th>Course</th>
          <th>Teaser</th>
        </tr>
        <tr
          v-for="project in allProjects"
          :key="project.id"
        >
          <td>{{ project['title'] }}</td>
          <td><span v-text="projectCourse(project.id)"/></td>
          <td>{{ project['teaser'] }}</td>
        </tr>
      </table>


    </div>
  </section>
</template>

<script>
import Menu from '~/components/Menu.vue'
import courses from '~/assets/json/courses.json'
import projects from '~/assets/json/projects.json'
import changeCase from 'change-case'
const allProjects = projects.allProjects
const optionalProjects = projects.optionalProjects

export default {
  components: {
    Menu
  },
  data() {
    return {
      courses: courses,
      allProjects: allProjects,
      optionalProjects: optionalProjects,
      changeCase: changeCase
    }
  },
  methods: {
    projectCourse(projectId) {
      let course = ''
      for (var i in courses) {
        const c = courses[i]
        if (c.projects.indexOf(projectId) > -1) {
          course = courses[i].course_name
          break
        }
      }
      return course
    }
  }
}
</script>

<style>
</style>
