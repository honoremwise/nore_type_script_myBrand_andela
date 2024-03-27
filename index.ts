import http from 'http';
import app from "./src/app";

const server = http.createServer(app);
const connectServer = () => {
    server.listen(3000, async () => {
      console.log(`\nServer Started & Listening on PORT: 3000\n`);
    });
  };
  
  connectServer();
