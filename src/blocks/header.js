import i18n from '../../src/i18n';
import {Form} from 'react-bootstrap';
import {useTranslation} from 'react-i18next'
import React, {useEffect, useMemo} from 'react';
import LanguageUtil from "../util/language";

export default function Header() {
    const langUtil = useMemo(() => new LanguageUtil(), []);
    const [value, setValue] = React.useState(langUtil.getCurrentLanguage() === langUtil.EN ? 1 : 0);

    useEffect(() => {
        i18n.changeLanguage(langUtil.getCurrentLanguage())
    }, [i18n, langUtil])

    const changeLanguage = (lng) => {
        langUtil.setCurrentLanguage(lng)
        i18n.changeLanguage(lng)
        console.log("Language " + langUtil.getCurrentLanguage())
    }

    const {t} = useTranslation();

    return (
        <div
            className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
            <div className="container">
                <header className="d-flex justify-content-center py-3">
                    <ul className="nav nav-pills">
                        <li className="nav-item"><a href="/" className="nav-link" aria-current="page">{t("home")}</a>
                        </li>
                        <li className="nav-item"><a href="/search" className="nav-link">{t("architects")}</a></li>
                        <li className="nav-item"><a href="#" className="nav-link">{t("about")}</a></li>
                    </ul>
                    <Form inline>
                        <Form onChange={(event, newValue) => {
                            setValue(newValue);
                        }}>
                            <Form.Group>
                                <Form.Control as="select" id="selectLng" custom
                                              onChange={() =>
                                                  changeLanguage(
                                                      document.getElementById("selectLng").value)}>
                                    <option value='ru'>{t("rus")}</option>
                                    <option value='en'>{t("eng")}</option>
                                </Form.Control>
                            </Form.Group>
                        </Form>
                    </Form>
                </header>
            </div>
        </div>
    );
}