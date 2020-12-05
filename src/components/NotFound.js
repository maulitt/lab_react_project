import React from "react";
import {navigate} from "hookrouter";

export function NotFound() {
    return (
        <div className={"errorbox"}>
            <div className={"err"}>404</div>
            <div className={"message"}>Checking out my NotFound page? A? Enjoy then.
                And go back to <a onClick={() => {navigate('/')}}>home</a>
            </div>
        </div>
    )
}