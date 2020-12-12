import '../styles/App.scss';
import {A, navigate, useRoutes} from 'hookrouter';
import React from 'react';

import { Auth } from './Auth';
import { Register } from './Register';
import { GetNews } from './News';
import { AddNews } from "./AddNews";
import { Main } from "./Main";
import { NotFound } from "./NotFound";
import { AddButton } from "./AddButton";
import { DelButton, Del } from "./DelButton";
import { Results } from "./Search";

const Routes = {
    "/": () => <Main />,
    "/register": () => <Register />,
    "/auth": () => <Auth />,
    "/news": () => <GetNews />,
    "/add": () => <AddNews />,
    "/delete": () => <Del />,
    "/news/:title": ({title}) => <Results title={title} />
}

function Menu() {
    return (
        <div className={"menu"}>
            <A href={"/"}>Main</A>
            <A href={"/register"}>Registration</A>
            <A href={"/auth"}>Authentication</A>
            <A href={"/news"}>News</A>
        </div>
    )
}
const App = () => {
    const match = useRoutes(Routes) || <NotFound />;
    return (
        <div className={"App"}>
                <Menu />
                {match}
                <AddButton />
                <DelButton />
        </div>
    );
}


export default App;