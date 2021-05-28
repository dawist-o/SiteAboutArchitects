import { useTranslation } from 'react-i18next'
import vlad from '../images/vlad.jpg'
import maxim from '../images/maksim.jpg'

export default function Footer() {
    const { t } = useTranslation();

    return (
        <div className="container marketing">
            <div className="row" style={{justifyContent: 'space-evenly', marginBottom: '100px'}}>
                <div className="col-lg-5" style={{display: 'flex', background: 'aliceblue', borderRadius: '10px'}}>
                    <img src={vlad}
                         style={{width: '120px', height: '120px', borderRadius: '50%', margin: '30px'}}/>
                    <div style={{alignSelf: 'center'}}>
                        <h3>{t("vlad")}</h3>
                        <p>aka DaWist_O</p>
                        <p><a className="btn btn-secondary" href="https://github.com/dawist-o">Github »</a></p>
                    </div>
                </div>
                <div className="col-lg-5"
                     style={{display: 'flex', background: 'aliceblue', borderRadius: '10px'}}>
                    <img src={maxim}
                         style={{width: '120px', height: '120px', borderRadius: '50%', margin: '30px'}}/>
                    <div style={{alignSelf: 'center'}}>
                        <h3>{t("maksim")}</h3>
                        <p>aka Weizhau</p>
                        <p><a className="btn btn-secondary" href="https://github.com/Weizhau">Github »</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
}