var apps = [


  {
    "name": "Social Network Sort",
    "thumbnail": "/images/apps/socialNetworkSort.png",
    "url": "social-network-sort"
  },
  {
    "name": "Hacking Smogville's Sustainable Future",
    "thumbnail": "/images/apps/smogville.png",
    "url": "hacking-smogvilles-future"
  }
]


var vueCourses = new Vue({
  el: '#apps',
  data: {
    apps: apps
  }
});
