import React from "react";
import {SearchField} from "./Search";

export function Main() {
    return (
        <div id="mainy">
            <div className="mainpage">
                <h1>Main page</h1>
                <p>Of the app</p>
                <SearchField />
            </div>
        </div>
    )
}
