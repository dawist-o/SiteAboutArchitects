export default function Footer() {
    return (
        <div className="col-lg-5" style={{display: 'flex', background: 'aliceblue', borderRadius: '10px'}}>
            <img src="../images/vlad.jpg"
                 style={{width: '120px', height: '120px', borderRadius: '50%', margin: '30px'}}/>
            <div style="align-self: center">
                <h3>Vladislav Kovalenko</h3>
                <p>aka Dawist-O</p>
                <p><a className="btn btn-secondary" href="https://github.com/dawist-o">Github »</a></p>
            </div>
        </div>
    );
}