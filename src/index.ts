const watch_reload = require("./watch_reload");

const test_reload = require("./test_reload");

// automatic reload module "./index" demo
watch_reload("./test_reload", require, exports.test_reload);

// on module change call demo
watch_reload.on("./test_reload", require, ()=>{
        console.log("<<< file " + module.filename + " reloaded>>>");
    });


test_reload.call_me();
