import React from 'react';
import LanguageUtil from "../util/language";
import architects from "../data/architects";
/*import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';*/

export default function Architect(props) {
    const langUtil = new LanguageUtil()
    var id = 2;
    const author = architects.filter(person => person.id === Number(props.match.params.id))[0]
    if (!author) {
        props.history.push('/')
    }
    console.log("author = " + author)
    console.log("langiage = " + langUtil.getCurrentLanguage())

    return (<div>
            <p>{author.name[langUtil.getCurrentLanguage()]}</p>
        </div>
    )
}
