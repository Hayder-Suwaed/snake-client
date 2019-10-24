const net = require('net');
const connect = function() {
    const conn = net.createConnection({ 
      //  host: '192.168.15.225',
      host: 'localhost',
      port: 50541
    });
    conn.on("data", data => {
        console.log("Server says: ", data);
    });
   
    // interpret incoming data as text
  
      conn.on('connect', () => {
      console.log('Successfully connected to game server');
      conn.write("Name: JUD")
         
    });
    conn.setEncoding('utf8'); 
    return conn;
  }
  
   module.exports = connect;