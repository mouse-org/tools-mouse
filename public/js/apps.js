var apps = [


  {
    "name": "Hacking Smogville's Sustainable Future",
    "thumbnail": "/images/apps/smogville.png",
    "url": "hacking-smogvilles-future"
  },
  {
    "name": "Phish Market",
    "thumbnail": "/images/apps/phishMarket.png",
    "url": "phish-market"
  },
  {
    "name": "Social Network Sort",
    "thumbnail": "/images/apps/socialNetworkSort.png",
    "url": "social-network-sort"
  }
]


var vueCourses = new Vue({
  el: '#apps',
  data: {
    apps: apps
  }
});
