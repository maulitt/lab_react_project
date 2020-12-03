import React, {useState} from "react";
import Button from "@material-ui/core/Button";
import {navigate} from "hookrouter";

export function Register() {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    function createUser() {
        fetch('/api/resource', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name: name, email: email, password: password }),
        })
            .then(response => {return response.json();})
            .then(data => {
                if(data.message === 'okey') {
                    navigate('/news');
                }
                else {
                    alert('Something went wrong!');
                }
            });
    }
    const handleSubmit = event => {
        event.preventDefault();
        createUser();
        //navigate('/news');
    }
    return (
        <form>
            <div id="mainy">
                <div className="registration">
                    <h1>Sign up</h1>
                    <p><b>Ваше имя</b> <br />
                        <label>
                            <input
                                value={name}
                                name="name"
                                type="text" size="40"
                                placeholder={'Your name..'}
                                onChange={event => { setName(event.target.value) } }
                            />
                        </label>
                    </p>
                    <p><b>Ваш логин (e-mail)</b><br />
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
                    <p><Button type="submit" disabled={!name || !email || !password} onClick={handleSubmit}>Submit</Button></p>
                </div>
                <div className="right">
                    <span className="rightpart">Na<br/>dne</span>
                </div>
            </div>
        </form>
    );
}