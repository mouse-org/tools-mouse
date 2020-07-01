Mouse
mouse.org

Nuxt > 2.3.4

Vue > 2.5.22


- Hosted on Heroku
- This is a pretty standard Nuxt website, the only customized parts are in the assets directory:

### json directory:

 - In this directory are arrays of data that power some of the pages like the badge directory and the course directory.

### md directory:

- Most of the text on pages comes from files in this directory. For most pages on the site there is a file in this directory, and a corresponding .vue file in the pages directory.
- The .vue file imports the markdown from these files and inserts it into the pages.
