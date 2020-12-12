import {makeStyles} from "@material-ui/core/styles";
import React, {useEffect, useState} from "react";
import {navigate} from "hookrouter";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import {News} from "./News";

const useStyles = makeStyles(theme => ({
        root: {
            padding: '2px 4px',
            display: 'flex',
            alignItems: 'center',
            width: 300,
        },
        input: {
            marginLeft: theme.spacing(1),
            flex: 1,
        },
        iconButton: {
            padding: 10,
        },
    })
)


export function SearchField() {
    const [title, setTitle] = useState('');
    const classes = useStyles();
    function handleSearch() {
        navigate('/news/'+title);
    }
    return (
        <div className={"search"}>
            <Paper className={classes.root}>
                <InputBase
                    className={classes.input}
                    placeholder={"Search article"}
                    inputProps={{'aria-label': 'search google maps'}}
                    value={title}
                    onChange={event => { setTitle(event.target.value) } }
                />
                <IconButton className={classes.iconButton} aria-label={"search"} onClick={() => {handleSearch();}}>
                    <SearchIcon />
                </IconButton>
            </Paper></div>
    )
}
export function Results(props) {
    const title = props.title;
    const [articles, setArticles] = useState([]);
    function getArticles() {
        fetch(`/api/findarticles?title=${'%'+title+'%'}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response => {return response.json();}))
            .then(data => {
                if(articles.length!==data.length) {
                    setArticles(data);
                }
            });
    }
    useEffect(() => getArticles(), []);
    return (
        <News data={articles} />
    )
}