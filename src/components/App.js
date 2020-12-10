import '../styles/App.scss';
import {A, navigate, useRoutes} from 'hookrouter';
import React, {useEffect, useState} from 'react';

import { createMuiTheme } from '@material-ui/core/styles';
import { Auth } from './Auth';
import { Register } from './Register';
import {GetNews, Getty} from './News';
import { AddNews } from "./AddNews";
import { Main } from "./Main";
import { NotFound } from "./NotFound";
import { AddButton } from "./AddButton";
import Button from "@material-ui/core/Button";

let my_news_example = [
    {
        title: 'Today\'s affirmation',
        author: 'November 20, 2020, Regina',
        preview: 'Describing what happened to me',
        text: 'I want to sleep so badly, I think I probably could fall asleep while sleeping. It\'s 1 a.m. ' +
            'Благоприятный день для общения. К вашему мнению прислушаются даже те, кто раньше интересовался только собственной точкой зрения. Можно найти помощников, единомышленников. Сегодня вы многому научитесь, получите новый опыт, который вскоре пригодится.\n' +
            '\n' +
            'Вероятны какие-то необычные встречи, вдохновляющие знакомства. Вам легко произвести хорошее впечатление: достаточно вести себя естественно, даже стараться не надо. Не исключено, что вы подружитесь с человеком, о котором прежде слышали много интересного.\n',
    },
    {
        title: 'Weather',
        author: 'November 20, 2020, Regina',
        preview: 'Beware: spoiler!',
        text: 'It\'s cold and windy. Stay home. Winter sucks. It lasts for 9 fckng months how can that be even possible ' +
            'there\'re some people who like it',
    },
    {
        title: 'Horoscope for Libras for November',
        author: 'November 29, 2020',
        preview: 'Get ready for a new portion of shit!',
        text: 'Не спешите с выводами, если в начале ноября что-то пойдет не по плану. Вскоре ситуация изменится к лучшему, а проблемы останутся в прошлом. Важно не опускать руки, сохранять оптимизм. Не паникуйте, если что-то идет не так, как хотелось бы. Вы наверняка найдете способ справиться с трудностями.\n' +
            '\n' +
            'Позитивные тенденции набирают силу постепенно, но вы замечаете даже небольшие перемены. Улучшается настроение, на многие проблемы удается посмотреть по-новому, и именно это помогает найти их решение. Середина месяца подходит для учебы, обмена опытом, а также для общения с людьми, которые в чем-то стали для вас примером.\n' +
            '\n' +
            'Конец ноября будет интересным и приятным. Вас ждут неожиданности, подарки, сюрпризы и знаки внимания. Возможны значительные перемены к лучшему в отношениях с самыми близкими вам людьми.',
    }
]


const Routes = {
    "/": () => <Main />,
    "/register": () => <Register />,
    "/auth": () => <Auth />,
    "/news": () => <GetNews />,
    "/add": () => <AddNews />
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
        </div>
    );
}


export default App;