import '../styles/App.css';
import {A, navigate, useRoutes} from 'hookrouter';
import React, {useState} from 'react';

import { Auth } from './Auth';
import { Register } from './Register';
import { News } from './News';
import { AddNews } from "./AddNews";
import { Main } from "./Main";

let my_news_example = [
    {
        title: 'Today\'s affirmation',
        date: 'November 20, 2020, Regina',
        preview: 'Describing what happened to me',
        text: 'I want to sleep so badly, I think I probably could fall asleep while sleeping. It\'s 1 a.m. ' +
            'Благоприятный день для общения. К вашему мнению прислушаются даже те, кто раньше интересовался только собственной точкой зрения. Можно найти помощников, единомышленников. Сегодня вы многому научитесь, получите новый опыт, который вскоре пригодится.\n' +
            '\n' +
            'Вероятны какие-то необычные встречи, вдохновляющие знакомства. Вам легко произвести хорошее впечатление: достаточно вести себя естественно, даже стараться не надо. Не исключено, что вы подружитесь с человеком, о котором прежде слышали много интересного.\n',
        //image: '/src/components/public/pic_one.jpg',
    },
    {
        title: 'Weather',
        date: 'November 20, 2020, Regina',
        preview: 'Beware: spoiler!',
        text: 'It\'s cold and windy. Stay home. Winter sucks. It lasts for 9 fckng months how can that be even possible ' +
            'there\'re some people who like it',
        //image: '/src/components/public/pic_two.jpg',
    },
    {
        title: 'Weather',
        date: 'November 20, 2020',
        preview: 'Beware: spoiler!',
        text: 'It\'s cold and windy. Stay home',
        //image: '/src/components/public/pic_one.jpg',
    }
]


const Routes = {
    "/": () => <Main />,
    "/register": () => <Register />,
    "/auth": () => <Auth />,
    "/news": () => <News data={my_news_example} />,
    "/add": () => <AddNews />
}

function Menu() {
    return (
        <div className={"menu"}>
            <A href={"/"}>Main</A>
            <A href={"/register"}>Registration</A>
            <A href={"/auth"}>Authentication</A>
            <A href={"/news"}>News</A>
            <A href={"/add"}>Add new</A>
        </div>
    )
}
const App = () => {
    const match = useRoutes(Routes);
    return (
        <div className={"App"}>
                <Menu />
                {match}
        </div>
    );
}

export default App;