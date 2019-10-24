let connection  ;
const setupInput = function(conn) {
  connection = conn ;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
    const handleUserInput = function(key) {
      if (key === '\u0003') {
        process.exit();
    }
    if (key === 'w') { conn.write("Move: up") , console.log("up")};
    if (key === 'a'){conn.write("Move: left"),  console.log('left')};
    if (key === 's') {conn.write("Move: down") , console.log('down')};
    if (key === 'd') { conn.write("Move: right") , console.log('right')};
    if (key === 'p') {conn.write("IT was Fun getting stuck here for an hour"),console.log("IT was Fun getting stuck here for an hour") }

};

stdin.on('data', handleUserInput);
  
return stdin;
}; 

module.exports =  setupInput;