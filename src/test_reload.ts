
// on module change call demo
import * as watch_reload from "./watch_reload"

export function call_me():void {
        console.log("call me " + module.filename);
    }
