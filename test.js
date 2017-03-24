var TecactusApi = require("./lib/tecactus-api");

var instance = new TecactusApi("tu-token");

console.log(instance.token);