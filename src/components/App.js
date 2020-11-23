import '../styles/App.css';
import {A, useRoutes} from 'hookrouter';
import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import {makeStyles} from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


let my_news_example = [
    {
        title: 'Regina',
        date: 'November 20, 2020',
        preview: 'Today\'s affirmation',
        text: 'I wanna sleep',
    },
    {
        title: 'Weather',
        date: 'November 20, 2020',
        preview: 'Beware: spoiler!',
        text: 'It\'s cold and windy. Stay home',
    }
]

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
})


function Article(props) {                        //   одна статья --------------------------------------------
    const classes = useStyles();
    let title = props.data.title;
    let preview = props.data.preview;
    let text = props.data.text;
    let date = props.date;
    return (
        <Card className={'article'}>
            <CardHeader title={title} subheader={date} />
            <CardContent>
                <Typography variant={'body2'} color={'textSecondary'} component={'p'}>
                    {preview}
                </Typography>
            </CardContent>
            <p className={'article_text'}>{text}</p>
        </Card>
    );
}
function News(props) {                          //   лента статей --------------------------------------------
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
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
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
                    <p><Button type="submit" disabled={!name || !email || !password} onClick={createUser(name, email, password)}>Submit</Button></p>
                </div>
                <div className="right">
                    <span className="rightpart">Na<br/>dne</span>
                </div>
            </div>
        </form>
    );
}

function Auth() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
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
                    <p><Button type="submit" disabled={!name || !email || !password}>Submit</Button></p>
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