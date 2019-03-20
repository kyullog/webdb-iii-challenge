const server = require("./server");

const port = env.PORT || 2525;

server.listen(port, () => `Server is listening on port ${port}`);
