<template>
  <div id="menu">
    <a
      id="site-title-link"
      href="/"
    >
      <h1 id="site-title">
        Mouse Create Help & Tools
      </h1>
    </a>

    <ul id="nav">
      <div
        v-for="item in menu"
        :key="item.name"
      >
        <a :href="item.url">
          <div id="nav-item">
            <li :class="item.class">
              {{ item.name }}
            </li>
          </div>
        </a>
      </div>
    </ul>

    <div
      class="alert"
      style="display: none;"
    >
      <h3></h3>
      <p></p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menu: [
        {
          name: 'Apps',
          url: '/apps',
          class: 'menu-item'
        },
        {
          name: 'Course Directory',
          url: '/course-directory',
          class: 'menu-item'
        },
        {
          name: 'Badge Directory',
          url: '/badge-directory',
          class: 'menu-item'
        },
        {
          name: 'Forms & Certificates',
          url: '/forms',
          class: 'menu-item'
        },
        {
          name: 'Help: Accounts and Registration',
          url: '/help/accounts-and-registration',
          class: 'menu-item'
        },
        {
          name: 'Help: Badges and Credly.com',
          url: '/help/badges',
          class: 'menu-item'
        },
        {
          name: 'Help: FAQ',
          url: '/help/faq',
          class: 'menu-item'
        },
        {
          name: 'Help: Groups — Adding and Switching',
          url: '/help/adding-switching-groups',
          class: 'menu-item'
        },
        {
          name: 'Help: Groups — Member Management',
          url: '/help/group-members',
          class: 'menu-item'
        },
        {
          name: 'Help: Groups — Playlist',
          url: '/help/playlist',
          class: 'menu-item'
        },
        {
          name: 'Help: Groups — Reviewing Group Work',
          url: '/help/group-work',
          class: 'menu-item'
        },
        {
          name: 'Help: Notifications',
          url: '/help/notifications',
          class: 'menu-item'
        },
        {
          name: 'Help: Profiles and My Work',
          url: '/help/profiles-and-my-work',
          class: 'menu-item'
        },
        {
          name: 'Help: Projects',
          url: '/help/projects',
          class: 'menu-item'
        },
        {
          name: 'Help: Schedule a Check-In',
          url: '/help/check-in',
          class: 'menu-item'
        },
        {
          name: 'Changes and Updates',
          url: '/updates',
          class: 'menu-item'
        },
        /*
        {
          name: 'Known Issues',
          url: '/known-issues',
          class: 'known-issues'
        },
        */
        {
          name: 'iPad Tips',
          url: '/ipad',
          class: 'menu-item'
        },
        {
          name: '📸 Camera',
          url: '/camera',
          class: 'menu-item'
        },
        {
          name: '↩ Back to Mouse Create',
          url: 'https://create.mouse.org/',
          class: 'menu-item'
        }
      ]
    }
  }
}
</script>

<style>
#site-title {
  font-size: 2em;
}
</style>
