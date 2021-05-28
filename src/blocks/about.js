import { useTranslation } from 'react-i18next'

export default function About() {
    const { t } = useTranslation();

    return (
        <div className="jumbotron">
            <div className="container">
                <h1 className="display-3">{t("arch_title")}</h1>
            </div>
        </div>
    );
}