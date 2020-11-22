import '../styles/App.css';
import {A, useRoutes} from 'hookrouter';
import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';


let my_news_example = [
    {
        author: 'Regina',
        text: 'I wanna sleep'
    },
    {
        author: 'Weather',
        text: 'It\'s cold and windy. Stay home'
    }
]


function Article(props) {
    Article.PropTypes = {
        data: Article.PropTypes.shape({
            author: Article.PropTypes.string.isRequired,
            text: Article.PropTypes.string.isRequired,
        })
    };
    let author = props.author;
    let text = props.text;
    return (
        <div className={'article'}>
            <p className={'article_author'}>{author}</p>
            <p className={'article_text'}>{text}</p>
        </div>
    );
}
function News(props) {
    News.PropTypes = {
        data: News.PropTypes.array.isRequired
    };
    let newsTemplate;
    let data = props.data;

    if (data.length > 0) {
        newsTemplate = data.map(function(item, index) {
            return (
                <div key={index}>
                    <Article data={item} />
                </div>
            )
        })
    } else {
        newsTemplate = <p>No new news yet(</p>
    }
    return (
        <div className={'news'}>
            {newsTemplate}
            <strong
                className={'news_count'}>Amount of news: {data.length}</strong>
        </div>
    );
}


function Test(props) {
    function alrt() {
        alert(props.user);
    }
    return (
        <Button color="primary" onClick={alrt}>Show User</Button>
    )
}


function Main() {
    function GETCcheck() {
        fetch('http://127.0.0.1:3000/api/proverka', {
            method: 'GET',
        })
            .then(response => {return response.text();})
            .then(data => {
                console.log(data);
            });
    }

    return (
        <div id="mainy">
            <div className="mainpage">
                <h1>Main page</h1>
                <p>Of the app</p>
                <Test user={'name'}/>
                <Button color="primary" type="submit" onClick={GETCcheck}>OK</Button>
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
        fetch('/api/resource', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name: name, email: email, password: password }),
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
    "/auth": () => <Auth />,
    "/news": () => <News data={my_news_example} />
}

function Menu() {
    return (
        <div className={"App"}>
            <A href={"/"}>Main</A>
            <A href={"/register"}>Registration</A>
            <A href={"/auth"}>Authentication</A>
            <A href={"/news"}>News</A>
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