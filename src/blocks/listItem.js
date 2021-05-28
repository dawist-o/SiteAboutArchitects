import React from 'react';
import LanguageUtil from "../util/language";

import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import {withRouter} from 'react-router';

function ListItem(props) {
    const langUtil = new LanguageUtil()

    const {author} = props;

    return (
        <Grid item xs={12} md={6}>
            <CardActionArea component="a" onClick={() => props.history.push(`/architect/${author.id}`)}>
                    <div
                        className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                        <div className="col p-4 d-flex flex-column position-static">
                            <h3 className="mb-0">{author.name[langUtil.getCurrentLanguage()]}</h3>
                            <p className="card-text mb-auto">{author.years}</p>
                            <a href="#" className="stretched-link">Read more</a>
                        </div>

                    </div>
                    <Hidden xsDown>
                        <CardMedia title={author.imageTitle}/>
                    </Hidden>
            </CardActionArea>
        </Grid>
    )
}

export default withRouter(ListItem)

ListItem.propTypes = {
    author: PropTypes.object,
};
