let io;

module.exports = {
  init: (httpServer) => {
    io = require("socket.io")(httpServer, {
      cors: {
        origin: process.env.CLIENT,
        methods: ["GET", "POST"],
      },
    }), (httpServer, {
      maxHttpBufferSize: 100 * 1024 * 1024, // Set to 100 MB (adjust as needed)
    });
    return io;
  },

  getIO: () => {
    if (!io) {
      throw new Error("Socket.io not initialized");
    }
    return io;
  },
};
