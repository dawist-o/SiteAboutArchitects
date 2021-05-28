export default function Home() {
    return (
        <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
            <div className="container">
                <header className="d-flex justify-content-center py-3">
                    <ul className="nav nav-pills">
                        <li className="nav-item"><a href="/" className="nav-link" aria-current="page">Home</a></li>
                        <li className="nav-item"><a href="/search" className="nav-link">Architects</a></li>
                        <li className="nav-item"><a href="#" className="nav-link">About</a></li>
                    </ul>
                </header>
            </div>
        </div>
    );
}