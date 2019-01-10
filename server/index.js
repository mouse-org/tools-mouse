
const express = require('express')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const app = express()
const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3000
const bodyParser = require('body-parser');

app.set('port', port)

// Import and Set Nuxt.js options
let config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')

async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }

  // * * * * * * * * * * * *
  // Redirect http to https:
  // * * * * * * * * * * * *
  if(
      process.env.environment == 'PRODUCTION' ||
      process.env.environment == 'STAGING' ||
      process.env.environment == 'STAG'
    ){
    app.get('*',function(req,res,next){
      if(req.headers['x-forwarded-proto']!='https')
        res.redirect('https://tools.mouse.org'+req.url);
      else
        next();
    });
  }

  app.use(bodyParser.urlencoded({extended:true}));
  app.use(bodyParser.json());

  // * * * * * * * *
  // Special Pages:
  // * * * * * * * *

  app.get("/playlist", function(req, res) {
    res.redirect("/help/playlist/");
  });

  app.get("/group-work", function(req, res) {
    res.redirect("/help/group-work/");
  });
  
  app.get("/badges", function(req, res) {
    res.redirect("/help/badges/");
  });
  
  app.get("/group-members", function(req, res) {
    res.redirect("/help/group-members");
  });

  // * * * * * * * *
  // Redirects of old pages:
  // * * * * * * * *

  app.get("/help/groups-and-playlists", function(req, res) {
    res.redirect("/help/groups");
  });
  app.get("/known-issues", function(req, res) {
    res.redirect("/updates");
  });

  // * * * * * * * *
  // SSL Verification:
  // * * * * * * * *
  app.get('/.well-known/acme-challenge/' + process.env.SSLDIR, function(req, res) {
    res.send(process.env.SSLCONTENT);
  });

  // Give nuxt middleware to express
  app.use(nuxt.render)

  // Listen the server
  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}
start()
