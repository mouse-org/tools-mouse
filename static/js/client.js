var projectsData = {data: []};

var app = new Vue({
  el: '#app',
  data: {
    header: 'Mouse Create Help & Tools',
    menu: menu,
    projectsList: [],
    coursesList: []
  }
})

// Unhide app after Vue loads
document.getElementById("app").style.display = "block";

/*
function httpRequestCallback() {
  projectsList = JSON.parse(this.responseText).data;
  coursesList = sortIntoCourses(projectsList);


  app.projectsList = projectsList;
  app.coursesList = coursesList;
}

function sortIntoCourses(projectsList) {
  var coursesList = [];

  for (var i in projectsList) {
    var project = projectsList[i];
    var course = findCourse(project);

    // Update to group non coursed projects
    if (!course) {
      continue;
    }

    var courseIndex = false;
    for (var j in coursesList) {
      var listCourse = coursesList[j].name;
      if (listCourse === course) {
        courseIndex = j;
        break;
      }
    }

    if (courseIndex) {
      coursesList[courseIndex].projects.push(project);
    } else {
      coursesList.push({
        name: course,
        projects: [project]
      });
    }
  }

  coursesList.sort(sortCoursesByName);
  return coursesList;
}

function sortCoursesByName(a, b) {
  var textA = a.name.toUpperCase();
  var textB = b.name.toUpperCase();
  return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
}

function findCourse(project) {
  var c = project.categories;
  for (var i in c) {
    var category = c[i];
    if (category.categoryGroupName === "Who") {
      return category.categoryName;
    }
  }
  return false;
}



var projectsRequest = new XMLHttpRequest();
projectsRequest.addEventListener("load", httpRequestCallback);
projectsRequest.open("GET", "https://api.mouse.org/projects.json");
projectsRequest.send();
*/
