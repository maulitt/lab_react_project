import '../styles/App.css';
import {A, useRoutes} from 'hookrouter';
import React, {useState} from 'react';






function Main() {
    return (
        <div id="mainy">
            <div className="mainpage">
                <h1>Main page</h1>
                <p>Of the app</p>
            </div>
        </div>
    )
}

function Register() {
    const [name, setName] = useState("Name");
    const [email, setEmail] = useState("email");
    const [password, setPassword] = useState("password");
    const submit = (e) => {
        e.preventDefault();
        alert(name+' '+password+' '+email);
    }
    function createUser(name, email, password) {
        fetch('http://127.0.0.1:3000/api/resource', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: { "name": name,"email": email, "password": password },
        })
            .then(response => {return response.text();})
            .then(data => {
                alert(data);
            });
    }
    return (
        <form onSubmit={submit}>
            <div id="regi">
                <div className="registration">
                    <h1>Sign up</h1>
                    <p><b>Ваше имя</b> <br />
                        <label>
                            <input
                                value={name}
                                name="name"
                                type="text" size="40"
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
                                onChange={event => { setPassword(event.target.value) } }
                            />
                        </label>
                    </p>
                    <p><button type="submit" onClick={createUser(name, email, password)}>Submit</button></p>
                </div>
                <div className="right">
                    <span className="rightpart">Na<br/>dne</span>
                </div>
            </div>
        </form>
    );
}

function Auth() {
    const [email, setEmail] = useState("email");
    const [password, setPassword] = useState("password");
    const submit = (e) => {
        e.preventDefault();
        alert(password+' '+email);
    }
    return (
        <form onSubmit={submit}>
            <div id="authi">
                <div className="registration">
                    <h1>Sign in</h1>
                    <p><b>Ваш логин (e-mail)</b> <br />
                        <label>
                            <input
                                value={email}
                                name="email"
                                type="text" size="40"
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
                                onChange={event => { setPassword(event.target.value) } }
                            />
                        </label>
                    </p>
                    <p><input type="submit" value="Submit" /></p>
                </div>
                <div className="right">
                    <span className="rightpart">Na<br/>dne</span>
                </div>
            </div>
        </form>
    );
}


const Routes = {
    "/": () => <Main />,
    "/register": () => <Register />,
    "/auth": () => <Auth />
}

function Menu() {
    return (
        <div className={"App"}>
            <A href={"/"}>Main</A>
            <A href={"/register"}>Registration</A>
            <A href={"/auth"}>Authentication</A>
        </div>
    )
}
const App = () => {
    const match = useRoutes(Routes);
    return (
        <div className={"App"}>
            <nav>
                <Menu />
                {match}
            </nav>
        </div>
    );
}

export default App;