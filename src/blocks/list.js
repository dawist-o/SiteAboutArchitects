import React, {useState} from 'react';

import photographers from "../data/architects";
import LanguageUtil from "../util/language";
import ListItem from "./listItem";
import Header from "./header";

import {FormControl, FormGroup, Input, InputAdornment, InputLabel, makeStyles} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import SearchIcon from "@material-ui/icons/Search";



export default function SearchPage(props) {
    const langUtil = new LanguageUtil()
    const [value, setValue] = useState('')

    const filteredPhotographers = photographers
        .filter(person => person.name[langUtil.getCurrentLanguage()].toLowerCase().includes(value.toLowerCase()))

    return (<div>
            <Header/>
            <FormGroup>
                <Typography component="h1" variant="h5">{("search-by-name")}</Typography>
                <FormControl>
                    <InputLabel htmlFor="input-with-icon-adornment">{"author"}</InputLabel>
                    <Input
                        onChange={(event) => setValue(event.target.value)}
                        id="input-with-icon-adornment"
                        startAdornment={
                            <InputAdornment position="start">
                                <SearchIcon/>
                            </InputAdornment>
                        }
                    />
                </FormControl>
            </FormGroup>
            <Grid container spacing={4}>
                {filteredPhotographers.map(person => (
                    <ListItem key={person.id} author={person}/>
                ))}
            </Grid>
        </div>
    );
}