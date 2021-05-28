import React from 'react';
import LanguageUtil from "../util/language";
import Header from "./header";
import '../styles/timeline.css';
import vlad from '../images/vlad.jpg';

import architects from "../data/architects";
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';

export default function Architect(props) {
    const langUtil = new LanguageUtil()
    var id = 2;
    const author = architects.filter(person => person.id === Number(props.match.params.id))[0]
    if (!author) {
        props.history.push('/')
    }

    return (
        <div>
            <Header/>
            <div className="text-center">
                <img src={vlad} cclass="rounded mx-auto d-block"/>
            </div>
            <ul className="timeline">
                {author.timeline.map(item =>
                    <li className="event" data-date="12:30 - 1:00pm">
                        <h3>{author.name[langUtil.getCurrentLanguage()]}</h3>
                        <p>{item.description[langUtil.getCurrentLanguage()]}</p>
                    </li>
                )}
            </ul>
        </div>
    )
}


