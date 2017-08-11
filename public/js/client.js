var app = new Vue({
  el: '#app',
  data: {
    header: 'Mouse Create Help & Tools',
    menu: menu
  }
})

// Unhide app after Vue loads
document.getElementById("app").style.display = "block";
