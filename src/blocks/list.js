import React, {useState} from 'react';

import photographers from "../data/architects";
import LanguageUtil from "../util/language";
import ListItem from "./listItem";

import {useTranslation} from "react-i18next";

import {Container} from 'react-bootstrap'

import {FormControl, FormGroup, Input, InputAdornment} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import SearchIcon from "@material-ui/icons/Search";


export default function SearchPage(props) {
    const {t} = useTranslation()
    const langUtil = new LanguageUtil()
    const [value, setValue] = useState('')

    const filteredPhotographers = photographers
        .filter(person => person.name[langUtil.getCurrentLanguage()].toLowerCase().includes(value.toLowerCase()))

    return (<Container>
            <FormGroup>
                <Typography component="h1" variant="h5">{t("search-by-name")}</Typography>
                <FormControl>
                    <Input
                        onChange={(event) => setValue(event.target.value)}
                        id="input-with-icon-adornment"
                        startAdornment={
                            <InputAdornment position="start">
                                <SearchIcon/>
                            </InputAdornment>
                        }
                    />
                    <hr className="featurette-divider"/>
                </FormControl>
            </FormGroup>
            <Grid container spacing={4}>
                {filteredPhotographers.map(person => (
                    <ListItem key={person.id} author={person}/>
                ))}
            </Grid>
        </Container>
    );
}