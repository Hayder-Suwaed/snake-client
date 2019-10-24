const net = require('net');
const {IP , port} = require('./constants')
const connect = function() {
    const conn = net.createConnection({ 
      //  host: '192.168.15.225',
      host: IP,
      port: port
    });
    conn.on("data", data => {
        console.log("Server says: ", data);
    });
   
    // interpret incoming data as text
  
      conn.on('connect', () => {
      console.log('Successfully connected to game server');
      conn.write("Name: JUD");
      conn.write("say: IT was Fun getting stuck here for an hour")
         
    });
    conn.setEncoding('utf8'); 
    return conn;
  }
  
   module.exports = connect;