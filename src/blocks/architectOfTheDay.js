import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {Button} from 'react-bootstrap';
import {Container} from 'react-bootstrap'
import {Row} from 'react-bootstrap'
import {Col} from 'react-bootstrap'

import "../../src/i18n"
import {useTranslation} from 'react-i18next'

import architects from "../data/architects";
import LanguageUtil from "../util/language";

export default function ArchitectOfTheDay() {
    const {t} = useTranslation();
    const langUtil = new LanguageUtil()
    const id = 1;
    var linkToArchitect = "/architect/" + id
    const author = architects.filter(person => person.id === Number(id))[0]

    return (<Container>
            <h1 class="jumbotron-heading">{t("writerOfTheDay.name")}</h1>
            <p class="lead text-muted">{t("writerOfTheDay.about")}</p>
            <hr className="featurette-divider"/>
            <Row>
                <Col md={12} lg={6}>
                    <img src={author.images[0].img} class="img-fluid"></img>
                </Col>
                <Col md={12} lg={6}>
                    <p class="lead text-muted" id="description">
                        <h1>{author.name[langUtil.getCurrentLanguage()]}</h1>
                        <h3>{author.years}</h3>
                        <h4>{author.bio[langUtil.getCurrentLanguage()]}</h4>
                    </p>
                    <Link to={linkToArchitect}>
                        <Button variant="outline-secondary">
                            {t("moreButton")}
                        </Button></Link>
                </Col>
            </Row>
            <hr className="featurette-divider"/>
        </Container>

    );

}