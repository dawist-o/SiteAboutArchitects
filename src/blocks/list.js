import React, {useState} from 'react';
import ListItem from "./listItem";
import photographers from "../data/architects";
import LanguageUtil from "../util/language";
import SearchIcon from "@material-ui/icons/Search";
import {FormControl, FormGroup, Input, InputAdornment, InputLabel, makeStyles} from "@material-ui/core";

export default function SearchPage(props) {
    const langUtil = new LanguageUtil()
    const [value, setValue] = useState('')
    const filteredPhotographers = photographers
        .filter(person => person.name[langUtil.getCurrentLanguage()].toLowerCase().includes(value.toLowerCase()))

    return (<div>
            <Input
                onChange={(event) => setValue(event.target.value)}
                id="input-with-icon-adornment"
                startAdornment={
                    <InputAdornment position="start">
                        <SearchIcon/>
                    </InputAdornment>
                }
            />
            <div className="col-lg-5" style={{display: 'flex', background: 'aliceblue', borderRadius: '10px'}}>
                {filteredPhotographers.map(person => (
                    <ListItem key={person.id} author={person}/>
                ))}
            </div>
        </div>
    );
}