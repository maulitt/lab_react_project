import {navigate} from "hookrouter";
import Button from "@material-ui/core/Button";
import React, {useEffect, useState} from "react";

export function DelButton() {
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
                    navigate('/delete');
                }
                else {
                    alert('You should authenticate first!');
                }
            });
    }
    return (
        <div className={'delbutton'}>
            <Button variant="contained" color="#9500ae" onClick={()=>{ isAuthorized(); }}>-</Button>
        </div>
    );
}


export function Del() {
    const [isAuthed, setIsAuthed] = useState(false);
    const [title, setTitle] = useState();

    function handleSubmit(event) {
        event.preventDefault();
        remove();
    }
    function remove() {
        fetch('/api/delete', {
            credentials: "include",
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title: title }),
        })
            .then(response => {return response.json();})
            .then(data => {
                alert(data.message);
            });
    }
    function isAuth() {
        fetch('/api/cookiecheck', {
            credentials: "include",
            method: 'GET'
        })
            .then(response => {return response.json();})
            .then(data => {
                if(data.message==='okey') {
                    if(!isAuthed) {
                        setIsAuthed(true);
                    }
                }
                else { alert('You are not authorized!'); navigate('/news') }
            })
    }
    useEffect(() => {isAuth();}, []);
    return( isAuth ?
            <form>
                <div id="add">
                    <div className="addnew">
                        <h1>Destroy?</h1>
                        <p><b>type the title</b>
                            <label>
                                <input
                                    value={title}
                                    name="title"
                                    type="text" size="40"
                                    placeholder={'Be precise!'}
                                    maxLength={150}
                                    onChange={event => { setTitle(event.target.value) } }
                                />
                            </label>
                        </p>
                        <p><Button type="submit" disabled={!title} onClick={handleSubmit}>Delete</Button></p>
                    </div>
                </div>
            </form> : <div><h1>o</h1></div>
    )
}