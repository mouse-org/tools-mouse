<template>
  <section class="container">
    <div>

      <Menu />

      <h1>
        Courses
      </h1>
      <p>Mouse has designed several courses as recommended learning sequences for groups that want to focus on competency areas that complement one another thematically. Users can view the projects associated with each course by selecting the course’s tag in the <a href="https://create.mouse.org/projects">Project Finder</a>.</p>

      <p>When an Educator adds a project to a group, if that project is part of a course they will have the option to add the whole course to the group. If the Educator adds the whole course to their group the projects will be added to the end of the group’s playlist in the recommended order. Any projects that are already in the group’s playlist will be moved to correspond with the recommended order.</p>

      <p>Each of the courses available on Mouse Create is listed below. Each of the projects in the course are listed below the course name and description in Mouse’s recommended order.</p>

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
  }
}
</script>

<style>
</style>
