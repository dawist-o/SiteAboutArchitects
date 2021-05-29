import React from 'react';

import {useTranslation} from "react-i18next";

import LanguageUtil from "../util/language";

import '../styles/timeline.css';
import architects from "../data/architects";

import {Container} from 'react-bootstrap'

import {Slide} from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'


export default function Architect(props) {
    useTranslation()
    const langUtil = new LanguageUtil()

    console.log("current id = " + props.match.params.id)
   /* const id = 10;
    const author = architects.filter(person => person.id === Number(id))[0]
*/
    const author = architects.filter(person => person.id === Number(props.match.params.id))[0]
    if (!author) {
        props.history.push('/')
    }
    console.log("current author = " + author)


    return (
        <div>
            <Container>
                <div style={{
                    alignItems: "center",
                    justifyContent: "center",
                    display: "grid",
                    textAlign: "center",
                }}>
                    <img src={author.images[0].img} alt={author.images[0].title} style={{
                        width: '500px',
                        height: '400px',
                        backgroundPosition: 'center center',
                        backgroundRepeat: 'no-repeat',
                        borderRadius: '5%'
                    }}/>
                    <div style={{display: 'block'}}>
                        <h3 style={{fontSize: '50px'}}>{author.name[langUtil.getCurrentLanguage()]}</h3>
                        <h5 style={{fontSize: '35px'}}>{author.years}</h5>
                    </div>
                </div>
                <hr className="featurette-divider"/>
                <ul className="timeline">
                    {author.timeline.map(item =>
                        <li className="event" data-date={item.date}>
                            <p>{item.description[langUtil.getCurrentLanguage()]}</p>
                        </li>
                    )}
                </ul>
                <hr className="featurette-divider"/>
                <div className="slide-container">
                    <Slide>
                        {author.images.map(item =>
                            <div className="each-slide">
                                <img src={item.img} style={{
                                    width: '800px',
                                    height: '600px',
                                    backgroundPosition: 'center center',
                                    backgroundRepeat: 'no-repeat',
                                }}/>
                                <span style={{fontSize: '40px'}}>{item.title[langUtil.getCurrentLanguage()]}</span>
                            </div>
                        )}
                    </Slide>
                </div>
                <hr className="featurette-divider"/>
                <div className="embed-responsive embed-responsive-16by9">
                    <iframe width="1264" height="480" src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen/>
                </div>
                <hr className="featurette-divider"/>
                <div>
                    <iframe
                        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=Belarus+Minsk"
                        width="100%" height="450" frameBorder="0" style={{border: 0}}
                        allowFullScreen/>
                </div>
            </Container>
        </div>
    )
}


