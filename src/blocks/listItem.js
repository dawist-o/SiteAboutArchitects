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
                <Card>
                    <CardContent>
                        <Typography component="h2" variant="h5">
                            {author.name[langUtil.getCurrentLanguage()]}
                        </Typography>
                    </CardContent>
                </Card>
            </CardActionArea>
        </Grid>
    )
}

export default withRouter(ListItem)

ListItem.propTypes = {
    author: PropTypes.object,
};
