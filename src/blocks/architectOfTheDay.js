import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap';
import { Container } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'

import "../../src/i18n"
import { useTranslation } from 'react-i18next'

import architects from "../data/architects";
import LanguageUtil from "../util/language";

export default function ArchitectOfTheDay() {
    const { t } = useTranslation();
    const langUtil = new LanguageUtil()
    const id = 1;
    const author = architects.filter(person => person.id === Number(id))[0]

    return (<Container>
            <h1 class="jumbotron-heading">{author.name[langUtil.getCurrentLanguage()]}</h1>
            <p class="lead text-muted">{author.name[langUtil.getCurrentLanguage()]}</p>
            <Row>
                <Col md={12} lg={6}>
                    <img alt="Якуб Колас" src={author.images[0].img} class="img-fluid"></img>
                </Col>
                <Col md={12} lg={6}>
                    <p class="lead text-muted" id="description">
                        <strong>{author.name[langUtil.getCurrentLanguage()]}</strong>
                        <br></br>
                        <strong>{author.years}</strong>
                        <br></br>
                        <strong>{author.years}</strong>
                    </p>
                    <Link to="/architect/1">
                        <Button variant="outline-secondary">
                            {t("moreButton")}
                        </Button></Link>
                </Col>
            </Row>
            <hr className="featurette-divider"/>
        </Container>

    );

}