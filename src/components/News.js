import React, {useState} from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import clsx from "clsx";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Collapse from "@material-ui/core/Collapse";
import {makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    header: {
        fontSize: '1.2rem'
    }
    /*media: {
        height: 0,
        paddingTop: '56.25%',
    },*/

}));

export function Article(props) {                        //   одна статья ---------------------------------------------------
    const classes = useStyles();
    let title = props.data.title;
    let preview = props.data.preview;
    let text = props.data.text;
    let author = props.data.author;

    const [expanded, setExpanded] = useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    }

    return (
        <Card className={'article'}>
            <CardHeader className={classes.header} title={title} subheader={author} />
            <CardContent>
                <Typography variant={'body2'} color={'textSecondary'} component={'p'}>
                    {preview}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label={'show more'}>
                    <ExpandMoreIcon />
                </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout={"auto"} unmountOnExit>
                <CardContent>
                    <Typography className={"typ"} paragraph={true}>
                        {text.split("\n").map((i, key) => {  //  чтобы параграфы разделялись
                            return <p key={key}>{i}</p>
                        })}
                    </Typography>
                </CardContent>

            </Collapse>
        </Card>
    );
}
export function News(props) {                          //   лента статей -------------------------------------------------
    let newsTemplate;
    let data = props.data;
    //function getArticles() {
      //  fetch('/api/articles', )
    //}

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
export function GetNews() {
    const [articles, setArticles] = useState([]);
    function getArticles() {
        fetch('/api/articles', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response => {return response.json();}))
            .then(data => {
                setArticles(data);
            });
    }
    getArticles();
    return (
        <News data={articles} />
    );
}