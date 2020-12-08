import {navigate} from "hookrouter";
import Button from "@material-ui/core/Button";
import React from "react";

export function AddButton() {
    function isAuthorized() {
        fetch('/api/cookiecheck', {
            credentials: "include",
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(response => {return response.json();})
            .then(data => {
                if(data.message === 'okey') {
                    navigate('/add');
                }
                else {
                    alert('You should authenticate first!');
                }
            });
    }
    return (
        <div className={'addbutton'}>
            <Button variant="contained" color="#9500ae" onClick={()=>{ isAuthorized(); }}>+</Button>
        </div>
    );
}