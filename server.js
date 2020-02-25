const buildFastify = require('./app');
const {PORT} = require('./config/environment');

const fastify = buildFastify();
fastify.listen(PORT)
    .then(() => {
      fastify.log.info(
          `server listening on ${fastify.server.address().port}`,
      );
    })
    .catch((e) => {
      fastify.log.error(e);
      process.exit(1);
    });
