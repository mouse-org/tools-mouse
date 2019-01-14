<template>
  <section class="container">
    <div>

      <Menu />
      <div v-html="md" />

      <div
        v-for="course in courses"
        :key="course.course_name"
      >
        <h3>{{ course.course_name }}</h3>
        <p>{{ course.course_description }} 
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
              :href="allProjects[project]['url']"
              target="blank"
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
import md from '~/markdownPages/course-directory.md'
import Menu from '~/components/Menu.vue'
import courses from '~/json/courses.json'
import projects from '~/json/projects.json'
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
