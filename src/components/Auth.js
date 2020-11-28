import React, {useState} from "react";
import {navigate} from "hookrouter";
import Button from "@material-ui/core/Button";

export function Auth() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    function authUser(email, password) {
        fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: email, password: password }),
        })
            .then(response => {return response.json();})
            .then(data => {
                //alert(data.message);
            });
    }
    const handleSubmit = e => {
        e.preventDefault();
        authUser(email, password);
        navigate('/news');
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
                    <p><Button type="submit" disabled={!email || !password} onClick={handleSubmit}>Submit</Button></p>
                </div>
                <div className="right">
                    <span className="rightpart">Na<br/>dne</span>
                </div>
            </div>
        </form>
    );
}
