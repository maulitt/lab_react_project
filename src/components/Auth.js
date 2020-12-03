import React, {useState} from "react";
import {navigate} from "hookrouter";
import Button from "@material-ui/core/Button";

export function Auth() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    let [isAuthed, setIsAuthed] = useState(true);
    function authUser() {
        fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: email, password: password }),
        })
            .then(response => {return response.json().then(data => {
                if(data.message === "fine") {
                    isAuthed = !isAuthed;
                    //setIsAuthed(true);
                    //console.log('after setIsAuthed');
                    //alert(data.message+isAuthed);
                    //return navigate('/news');
                }
            });
            });
    }
    const handleSubmit = e => {
        e.preventDefault();
        authUser();
        if(isAuthed) {
            navigate('/news');
        }
   }
    return (
        <form>
            <div id="mainy">
                <div className="registration">
                    <h1>Sign in</h1>
                    <p><b>Ваш логин (e-mail)</b> <br />
                        <label>
                            <input
                                value={email}
                                name="email"
                                type="text" size="40"
                                placeholder={'Your e-mail..'}
                                onChange={event => { setEmail(event.target.value) } }
                            />
                        </label>
                    </p>
                    <p><b>Пароль</b> <br />
                        <label>
                            <input
                                value={password}
                                name="password"
                                type="text" size="40"
                                placeholder={'Your password..'}
                                onChange={event => { setPassword(event.target.value) } }
                            />
                        </label>
                    </p>
                    <p><Button type="submit" disabled={!email || !password} onClick={()=> {
                        console.log('it\'s a handler!')
                        authUser();
                        if(isAuthed) {return navigate('/news');}
                        else {console.log('Wrong credentials!'+isAuthed);}
                    }}>Submit</Button></p>
                </div>
                <div className="right">
                    <span className="rightpart">Na<br/>dne</span>
                </div>
            </div>
        </form>
    );
}
