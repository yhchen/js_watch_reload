import * as watch_reload from "./watch_reload"

// automatic reload module "./index" demo
import * as test_reload from "./test_reload"
test_reload.call_me();
watch_reload("./test_reload", require, exports.test_reload);

// on module change call demo
watch_reload.on("./test_reload", require, ()=>{
        console.log("<<< file " + module.filename + " reloaded>>>");
    });

