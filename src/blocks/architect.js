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
            <div style={{justifyContent: 'center'}}>
                <img src={author.images[0].img} alt={author.images[0].title} style={{
                    width: '200px',
                    height: '200px',
                    backgroundPosition: 'center center',
                    backgroundRepeat: 'no-repeat',
                    borderRadius: '50%'
                }}/>
                <div style={{display: 'block'}}>
                    <h3>{author.name}</h3>
                    <h5>{author.years}</h5>
                </div>
            </div>

            {/*<div className="text-center">
                <img src={vlad} cclass="rounded mx-auto d-block"/>
            </div>*/}
            <ul className="timeline">
                {author.timeline.map(item =>
                    <li className="event" data-date="12:30 - 1:00pm">
                        <h3>{author.name[langUtil.getCurrentLanguage()]}</h3>
                        <p>{item.description[langUtil.getCurrentLanguage()]}</p>
                    </li>
                )}
            </ul>
            <iframe width="1264" height="480" src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen/>
            <div className="map-responsive">
                <iframe
                    src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=Belarus+Minsk"
                    width="600" height="450" frameBorder="0" style={{border: 0}}
                    allowFullScreen/>
            </div>
        </div>
    )
}


