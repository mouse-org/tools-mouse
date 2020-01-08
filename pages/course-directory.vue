<template>
  <section class="container">
    <div>

      <Menu />
      <div v-html="md" />

      <div
        v-for="course in courses"
        :key="course.course_name"
      >
        <h3
          :id="changeCase.paramCase(course.course_name)"
        >
          {{ course.course_name }}
        </h3>
        <p>
          <span v-html="course.course_description" />
          <br><br>
          <a
            :href="course.course_overview"
            target="_blank"
          >
            Click here for more details about this course, including a full materials list.
          </a>
        </p>
        <ol>
          <li
            v-for="project in course.projects"
            :key="project.id"
          >

            <a
              :href="'https://create.mouse.org/project/' + allProjects[project]['id'] + '/'"
              target="_blank"
            >
              <span v-if="optionalProjects.indexOf(project) >= 0" >
                *&nbsp;
              </span>
              {{ allProjects[project]['title'] }}
            </a>
          </li>
        </ol>
      </div>
    </div>
  </section>
</template>

<script>
import md from '~/assets/md/course-directory.md'
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
  computed: {
    md() {
      return md
    }
  }
}
</script>

<style>
</style>
