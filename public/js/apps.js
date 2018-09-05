var apps = [

  {
    "name": "Awkward! Dealing With Strangers Online",
    "thumbnail": "/images/apps/awkward.gif",
    "url": "awkward-dealing-with-strangers-online"
  },
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
  },
  {
    "name": "My Name is URL",
    "thumbnail": "/images/apps/url.png",
    "url": "my-name-is-url"
  }
]


var vueCourses = new Vue({
  el: '#apps',
  data: {
    apps: apps
  }
});
