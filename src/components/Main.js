import Button from "@material-ui/core/Button";
import React from "react";


function Test(props) {
    function alrt() {
        alert(props.user);
    }
    return (
        <Button color="primary" onClick={alrt}>Show User</Button>
    )
}

export function Main() {
    function GETCheck() {
        fetch('/api/proverka', {
            method: 'GET',
        })
            .then(response => {return response.json();})
            .then(data => {
                alert(data.success);
            });
    }

    return (
        <div id="mainy">
            <div className="mainpage">
                <h1>Main page</h1>
                <p>Of the app</p>
                <Test user={'name'}/>
                <Button color="primary" type="submit" onClick={GETCheck}>OK</Button>
            </div>
        </div>
    )
}
