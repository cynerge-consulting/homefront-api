var helmet = require('helmet'),
  compression = require('compression'),
  express = require('express'),
  path = require('path'),
  pino = require('express-pino-logger')(),
  port = 3e3,
  app = new express();
app.use(helmet()),
  app.use(pino),
  app.use(express.static(path.join(__dirname, 'public'))),
  app.get('/', async function (e, p, r) {
    try {
      p.json({ success: !0 });
    } catch (p) {
      e.log.error(p), r(p);
    }
  }),
  app.listen(port, () => console.log('Example app listening on port: ', port)),
  (module.exports = app);
//# sourceMappingURL=main-min.js.map
